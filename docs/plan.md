# Implementation Plan (Chosen Stack)

Stack confirmed:

- **Backend:** Node.js (TypeScript)
- **Web Frontend:** React + TypeScript
- **Mobile (Android + iOS):** Flutter

This plan is optimized for your core needs: **QR fast-lane attendance + payments**, **3 roles (Admin, Staff, Parents/Students)**, **fee arrears**, **temporary schedule changes**, **financial dashboard**, and **attendance retention rules**.

---

## 1) Key Architecture Decisions

### 1.1 Backend framework
Recommended: **NestJS (TypeScript)** (structured modules, validation, background jobs).

- API: REST (simple + fast for mobile scanning)
- Auth: OIDC/JWT (role-based access)
- DB: MySQL (localhost initially)
- ORM: Prisma
- Background jobs: BullMQ + Redis
- File storage (optional): S3-compatible or cloud object storage for exported reports/receipts

### 1.2 Web frontend
Recommended: **React + TypeScript + Vite**.

- UI library: pick ONE (e.g., MUI or AntD) to move fast
- State/data: TanStack Query

### 1.3 Mobile
Recommended: **Flutter**.

- QR scanner: camera-based scanning package
- Offline mode: optional later; Phase 1 assumes online scanning

---

## 2) Repo Structure (Monorepo)

Recommended structure (single repo is easier to manage early):

- `backend/` — NestJS API + jobs
- `web/` — React admin/staff portal
- `mobile/` — Flutter app
- `docs/` — requirements, use cases, architecture, plan

---

## 3) Data Model (Core Entities)

Minimum entities for Phase 1:

- Users: `User`, `Role` (Admin, Staff, ParentStudent)
- Master data: `Teacher`, `Grade`, `ClassGroup`
- Scheduling: `ScheduleRule` (permanent), `ScheduleOverride` (temporary)
- Students: `Student`, `GuardianContact` (optional)
- Enrollment: `Enrollment` (Student <-> ClassGroup)
- QR: `StudentQrToken` (active token + rotation history)
- Attendance: `ClassSession`, `AttendanceRecord`
- Fees: `MonthlyFee` (per month), `PaymentTransaction`, `Receipt`
- Free card: `FeeWaiver` or `StudentFreeCard`
- Expenses: `ExpenseCategory`, `Expense`
- Audit: `AuditEvent`

---

## 4) Roles & Permissions (High Level)

- **Admin**
  - Manage staff users
  - Manage teachers/grades/classes/schedules
  - Configure charging rules
  - Full reports + finance dashboard
  - View audit log

- **Staff**
  - Manage students + enrollments
  - Issue/replace QR
  - Attendance scanning
  - Payment scanning + receipts
  - Record expenses (optional)
  - Reports (as allowed)

- **Parents/Students**
  - View timetable
  - View payments (paid/pending) + receipts
  - View attendance (if enabled)

---

## 5) Delivery Plan (Milestones)

### Milestone 0 — Project Setup (1–2 days)
Deliverables:
- Monorepo folders created
- CI basics (lint/test/build)
- Shared `.env` templates

### Milestone 1 — Auth + Roles + Admin Basics (3–5 days)
Backend:
- Login (JWT/OIDC)
- Role-based guards (Admin/Staff/ParentStudent)

Web:
- Login + route protection
- Basic admin UI shell

### Milestone 2 — Master Data + Scheduling (5–8 days)
Backend:
- CRUD: Teachers, Grades, ClassGroups
- Permanent schedules + temporary overrides
- Generate `ClassSession` for a date (computed from schedules)

Web:
- Admin screens to manage teachers/grades/classes
- Schedule screens with temporary override creation

### Milestone 3 — Students + Enrollment + QR Issue/Replace (5–8 days)
Backend:
- CRUD: Students
- Enrollment workflows
- QR token service: issue/replace/invalidate

Web:
- Staff screens: student registration, enrollment
- Print/view QR code for each student

Mobile (Flutter):
- Staff scanner app: login + QR scan + student lookup

### Milestone 4 — QR Attendance Fast Lane (5–10 days)
Backend:
- Endpoint: select class session (today)
- Endpoint: scan QR -> mark present
- Duplicate scan protection
- Attendance edit policy (optional)

Mobile:
- Bulk scanning UI (minimal taps)
- Green/Red confirmations

Web:
- Attendance reports (basic)

### Milestone 5 — Monthly Fees + Payments Fast Lane (7–12 days)
Backend:
- Monthly fee ledger creation (manual first)
- Payment scan flow:
  - scan -> show dues (current + arrears)
  - pay current OR select months
  - generate receipt number
- Free card rule (waive monthly fees)

Mobile:
- Scan -> pay -> receipt confirmation

Web:
- Payment ledger view
- Pending fee lists

### Milestone 6 — Automation + Retention Rules (5–10 days)
Backend jobs:
- Monthly fee generation job
- Attendance retention/deletion job:
  - delete attendance older than 3 months ONLY if paid
  - keep if unpaid
  - after late payment, delete related old attendance 30 days after payment date

### Milestone 7 — Expenses + Financial Dashboard + Reports (7–14 days)
Backend:
- Expenses entry
- Financial summary endpoints
- Reports endpoints (students, attendance, payments, arrears, late payments)

Web:
- Dashboard
- Export reports (optional)

Parents/Students app views (optional milestone if needed early):
- View dues + receipts
- View timetable

---

## 6) API Planning (Minimal Endpoints)

QR + attendance:
- `POST /auth/login`
- `POST /sessions/select` (staff selects class group + date)
- `POST /qr/scan` (returns student summary + status)
- `POST /attendance/mark-present` (studentId + sessionId)

Payments:
- `GET /billing/dues?studentId=...`
- `POST /billing/pay` (months + amount + method)

Admin setup:
- `CRUD /teachers`, `/grades`, `/class-groups`
- `CRUD /schedules`, `/schedule-overrides`

---

## 7) Testing & Quality

- Backend: unit tests for billing and retention rules
- E2E: QR scan -> attendance/payment happy path
- Audit events on: attendance changes, payments, QR replacement

---

## 8) Deployment (Later)

- Backend: container deployment (Docker)
- DB: managed PostgreSQL
- Redis: managed Redis (for BullMQ)
- Web: static hosting

---

## 9) Next Decisions (Short)

To finalize the build plan, decide:

1) Monthly fee is per student OR per class group?
2) Parents/Students mobile app is needed in Phase 1, or later?
3) Payment is only recorded (cash) OR will you accept online payments later?
