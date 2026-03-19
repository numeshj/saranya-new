# Backend API (NestJS)

This document describes the currently implemented HTTP endpoints and the key business logic behind them.

## Runtime + Cross-cutting behavior

- Server: NestJS, default port `3000` (configurable via `PORT`).
- CORS: enabled with default settings (allows all origins).
- Validation: global `ValidationPipe` is enabled with:
  - `whitelist: true` (unknown fields are stripped)
  - `forbidNonWhitelisted: true` (unknown fields cause 400)
  - `transform: true` (basic type coercion)
- Authentication: JWT Bearer token in `Authorization: Bearer <token>`.
- Authorization: role-based access control via `@Roles(...)` + `RolesGuard`.

## Roles

Defined roles are:

- `ADMIN`
- `STAFF`
- `PARENT_STUDENT`

Most endpoints implemented so far are restricted to `ADMIN` and `STAFF`.

## Health

### GET /

- Auth: none
- Response: `string` (Hello World)

### GET /health

- Auth: none
- Response:
  - `{ status: "ok", timestamp: string }`

## Auth

### POST /auth/login

- Auth: none
- Body:
  - `email` (string, email)
  - `password` (string, min 6)
- Response:
  - `{ accessToken: string }`
- Logic:
  - Finds user by `email`, requires `isActive=true`.
  - Verifies password via bcrypt.
  - JWT payload includes: `{ sub: userId, role, email }`.

### GET /auth/me

- Auth: required
- Response:
  - `{ user: { sub: string, email: string, role: string } }`

## Users

### POST /users

- Auth: required
- Role: `ADMIN`
- Body:
  - `email` (string, email)
  - `password` (string, min 6)
  - `role` (`ADMIN` | `STAFF` | `PARENT_STUDENT`)
- Response (selected fields):
  - `{ id, email, role, isActive, createdAt }`
- Logic:
  - Enforces unique email (400 if exists).
  - Stores bcrypt password hash.

## Students

### POST /students

- Auth: required
- Role: `ADMIN`, `STAFF`
- Body:
  - `fullName` (string, min 2)
  - `phone?` (string)
- Response (selected fields):
  - `{ id, fullName, phone, isActive, createdAt }`

### GET /students/:id

- Auth: required
- Role: `ADMIN`, `STAFF`
- Response (selected fields):
  - `{ id, fullName, phone, isActive, createdAt }`
- Errors:
  - 404 if student not found

### POST /students/:id/qr/issue

- Auth: required
- Role: `ADMIN`, `STAFF`
- Response:
  - `{ studentId: string, token: string }`
- Logic:
  - Rotates QR tokens:
    - Marks any existing active token(s) as inactive and sets `replacedAt`.
    - Creates a new active token.

## QR

### POST /qr/scan

- Auth: required
- Role: `ADMIN`, `STAFF`
- Body:
  - `token` (string, min 10)
- Response:
  - `{ student: { id, fullName, phone, isActive } }`
- Errors:
  - 404 if token not found / inactive OR student inactive
- Logic:
  - Looks up an active `StudentQrToken` and returns associated student.

## Attendance

### POST /attendance/sessions

- Auth: required
- Role: `ADMIN`, `STAFF`
- Body:
  - `classGroupId` (uuid)
  - `sessionDate?` (ISO date string)
  - `startsAt?` (ISO date string)
  - `notes?` (string)
- Response:
  - Upserted `AttendanceSession` plus `classGroup` (+ grade name/id)
- Logic:
  - Uses an upsert keyed by `(classGroupId, sessionDate)`.
  - If `sessionDate` omitted: uses “today” in UTC (start-of-day).

### GET /attendance/sessions/:id

- Auth: required
- Role: `ADMIN`, `STAFF`
- Response:
  - `AttendanceSession` with:
    - `classGroup` (+ grade)
    - `marks[]` ordered by `markedAt asc` (includes student + markedByUserId)

### POST /attendance/sessions/:id/mark-by-qr

- Auth: required
- Role: `ADMIN`, `STAFF`
- Body:
  - `qrToken` (string, min 8)
- Response:
  - When newly marked:
    - `{ alreadyMarked: false, student, mark }`
  - When already marked:
    - `{ alreadyMarked: true, student, mark }`
- Logic:
  - Validates session exists and is not cancelled.
  - Resolves student via QR scan.
  - Enforces that student has an active enrollment in the session’s class group covering `sessionDate`.
  - De-dupe at DB-level via unique key `(sessionId, studentId)`:
    - If duplicate insert occurs, returns the existing mark.

## Payments

### POST /payments/record-by-qr

- Auth: required
- Role: `ADMIN`, `STAFF`
- Body:
  - `qrToken` (string)
  - `classGroupId` (uuid)
  - `paidYear` (int 2000–2100)
  - `paidMonth` (int 1–12)
  - `amount?` (decimal string, required unless `isFreeCard=true`)
  - `isFreeCard?` (boolean)
  - `method?` (`CASH` | `CARD` | `BANK_TRANSFER`)
  - `notes?` (string)
- Response:
  - When newly created:
    - `{ alreadyPaid: false, student, payment }`
  - When already exists:
    - `{ alreadyPaid: true, student, payment }`
- Logic:
  - Resolves student via QR scan.
  - Enforces active enrollment in class group for the target month (anchor date = first day of month in UTC).
  - If `isFreeCard=true`, amount is stored as `0` and no amount validation is required.
  - De-dupe at DB-level via unique key `(studentId, classGroupId, paidYear, paidMonth)`:
    - If duplicate insert occurs, returns existing payment.

### GET /payments/students/:studentId

- Auth: required
- Role: `ADMIN`, `STAFF`
- Query:
  - `classGroupId?` (string)
  - `paidYear?` (int)
  - `paidMonth?` (int)
- Response:
  - List of payments, most recent first, with embedded class group (+ grade)

## Fees

### POST /fees/class-groups/:classGroupId/monthly

- Auth: required
- Role: `ADMIN`, `STAFF`
- Body:
  - `effectiveYear` (int 2000–2100)
  - `effectiveMonth` (int 1–12)
  - `amount` (decimal string, must be >= 0)
- Response:
  - Upserted monthly fee row
- Logic:
  - Requires class group exists and is active.
  - Upsert keyed by `(classGroupId, effectiveYear, effectiveMonth)`.

### GET /fees/class-groups/:classGroupId/monthly

- Auth: required
- Role: `ADMIN`, `STAFF`
- Response:
  - Monthly fee rows ordered by year/month ascending

## Ledger / Arrears

### GET /ledger/students/:studentId/class-groups/:classGroupId

- Auth: required
- Role: `ADMIN`, `STAFF`
- Query (optional range):
  - `fromYear`, `fromMonth`
  - `toYear`, `toMonth`
- Response:
  - `student`, `classGroup`, `enrollment`, `range`, `rows[]`, `totals`
- Row fields:
  - `{ year, month, fee, amountDue, amountPaid, arrears, status, payment? }`
  - `status` is one of: `UNPAID` | `PAID` | `FREE_CARD` | `PARTIAL` | `OVERPAID`
- Logic:
  - Requires student and class group exist and are active.
  - Requires an active enrollment record exists (range is bounded to enrollment start/end and current month).
  - Fee for each month is resolved as the latest configured fee row where `(effectiveYear,effectiveMonth) <= month`.
  - If a month in the range has no applicable fee configured, the API returns 400 with a clear message.
  - Payments are de-duped by the DB unique constraint, so per-month the ledger expects at most one payment record.

### GET /ledger/class-groups/:classGroupId/arrears?year=&month=

- Auth: required
- Role: `ADMIN`, `STAFF`
- Query:
  - `year` (int 2000–2100)
  - `month` (int 1–12)
- Response:
  - `{ classGroup, month, feeAppliedFrom, fee, rows[], totals }`
- Logic:
  - Finds the fee row that applies to the requested month (latest effective <= requested).
  - Gets all active enrollments whose date range covers the month (and student is active).
  - Joins payments for that month and computes arrears per student.
  - Returns only students with `arrears > 0`.

## Expenses

### POST /expenses/categories

- Auth: required
- Role: `ADMIN`, `STAFF`
- Body:
  - `name` (string, min 2)
- Response:
  - `{ id, name, isActive, createdAt, updatedAt }`
- Logic:
  - Category name is unique (400 if duplicate).

### GET /expenses/categories

- Auth: required
- Role: `ADMIN`, `STAFF`
- Response:
  - List of categories ordered by name

### POST /expenses

- Auth: required
- Role: `ADMIN`, `STAFF`
- Body:
  - `categoryId` (uuid)
  - `amount` (decimal string, > 0)
  - `method?` (`CASH` | `CARD` | `BANK_TRANSFER`)
  - `expenseDate?` (ISO date string)
  - `notes?` (string)
- Response:
  - Created expense with embedded `category` summary
- Logic:
  - Category must exist and be active.

### GET /expenses

- Auth: required
- Role: `ADMIN`, `STAFF`
- Query:
  - `from?` (ISO date string)
  - `to?` (ISO date string)
  - `categoryId?` (string)
  - `limit?` (int, capped to 200; default 50)
- Response:
  - List of expenses ordered by `expenseDate desc`

### GET /expenses/summary

- Auth: required
- Role: `ADMIN`, `STAFF`
- Query:
  - `from?`, `to?`, `categoryId?`
- Response:
  - `{ filters, totals, byCategory, byMethod }`
- Logic:
  - Uses DB aggregation (`aggregate` + `groupBy`).

### GET /expenses/:id

- Auth: required
- Role: `ADMIN`, `STAFF`
- Response:
  - Single expense with embedded category

### PATCH /expenses/:id

- Auth: required
- Role: `ADMIN`, `STAFF`
- Body (all optional):
  - `categoryId?` (uuid; must reference an active category)
  - `amount?` (decimal string, > 0)
  - `method?` (`CASH` | `CARD` | `BANK_TRANSFER`)
  - `expenseDate?` (ISO date string)
  - `notes?` (string)

### DELETE /expenses/:id

- Auth: required
- Role: `ADMIN`, `STAFF`
- Response:
  - `{ ok: true }`

## Database-level constraints (critical)

These constraints drive idempotency/duplicate-protection behavior:

- `StudentQrToken.token` is unique.
- Attendance session: unique `(classGroupId, sessionDate)`.
- Attendance mark: unique `(sessionId, studentId)`.
- Payment: unique `(studentId, classGroupId, paidYear, paidMonth)`.
- Monthly fee row: unique `(classGroupId, effectiveYear, effectiveMonth)`.
- Enrollment: unique `(studentId, classGroupId, startDate)`.
- Expense category: unique `name`.

## Notes / known gaps

- Models exist for `Grade`, `Teacher`, `ClassGroup`, `Enrollment`, but CRUD endpoints for them are not implemented yet.
- Ledger calculations assume at most one payment per student/class/month (enforced by DB unique constraint).

## Critical study (findings + improvements)

This section calls out the highest-impact technical risks and practical improvements.

- **JWT secret defaults must match**: The code relies on `JWT_SECRET` being set consistently. Ensure the same secret is used for signing (AuthModule) and verification (JwtStrategy).
- **CORS is fully open**: `app.enableCors()` with defaults will allow all origins. For production, restrict allowed origins, methods, and headers to your deployed web/mobile clients.
- **`/auth/me` is token-payload only**: It returns the JWT payload, not a fresh DB lookup. If a user is deactivated after login, their existing token remains valid until expiry. If this matters, validate the user on each request (or add a token revocation/versioning mechanism).
- **Attendance session date normalization**: `sessionDate` uniqueness is based on the full `Date` value. If clients send timestamps (not just `YYYY-MM-DD`), you can accidentally create multiple “same day” sessions. Consider normalizing `sessionDate` to start-of-day UTC for all inputs.
- **Missing rate limiting / brute-force protections**: `/auth/login` has no throttling. Add rate limiting and audit logs (especially for auth + QR scan endpoints).
- **Operational hardening**: Add structured logging (request id/user id), and consider an OpenAPI/Swagger doc so the API contract is testable and self-updating.
