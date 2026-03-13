# Project Instructions (Tuition Center System)

This file captures the key product requirements and rules so they can be referenced consistently.

## User Levels (Required)

- **Admin** — full access (setup, pricing rules, staff management, finance, reports, audit)
- **Staff** — operational access (students, enrollments, QR, attendance scanning, payments, receipts, reports as permitted)
- **Parents/Students** — view/self-service (timetable, payment status, receipts, attendance views if enabled)

## Core Requirements

### Classes / Grades / Scheduling

- Multiple teachers conduct classes.
- The center has multiple **grades**.
- A grade can have multiple **class groups/batches**, and the same teacher can run multiple groups.
- Class dates/times can change:
  - **Permanent** schedule
  - **Temporary overrides** for a specific date/day/week

### Teacher Charging (Center -> Teacher)

- Teacher charging models:
  - Per-student subscription
  - Fixed monthly amount
  - No charge (free)

### Student Fees

- Monthly fee per student.
- Some students have a **Free Card** (monthly fee waived).
- Admission fee is currently **0**, but must be designed so it can be enabled later.
- Some students have **pending fees for multiple months**.

### Fast Operations via QR

- Each student must have a **unique QR code**.
- **Staff** must be able to:
  - Scan QR to mark attendance quickly (queue mode)
  - Scan QR to collect payments quickly (current month and/or arrears)
- QR code must be replaceable (lost card): invalidate old QR, issue new.
- System must prevent duplicate actions from rapid re-scans.

### Attendance Recording + Retention/Deletion Rules

- Attendance must be marked for each class session/day.
- Attendance data retention logic:
  - Keep attendance records for **3 months**.
  - If the monthly fee is **paid**, attendance older than 3 months **may be deleted**.
  - If monthly fee is **not paid**, attendance must be kept **until payment is made**.
  - After late payment is made, the related old attendance records can be deleted **30 days after payment date**.

### Costs / Expenses

- Track operating costs (electricity, water, other expenses).

### Financial Status & Reports

- Must show financial status at any time (date-range based).
- Reports needed:
  - Students
  - Attendance
  - Payments (paid/pending/late)
  - Pending payments / arrears
  - Financial summaries (income/expenses/net)

## Notes

- Teachers are tracked as business entities (they run classes), but the required login/user levels are only: Admin, Staff, Parents/Students.
