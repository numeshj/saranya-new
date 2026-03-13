# Backend Dev Setup

This backend is built with **NestJS + Prisma + MySQL**.

## 1) Prerequisites

- Node.js (already installed)
- MySQL Server running locally **or** Docker Desktop (recommended)

## 2) Configure environment

- Copy `.env.example` to `.env`
- Set `DATABASE_URL` and `JWT_SECRET`

Example local DB URL:

- `DATABASE_URL="mysql://root:228646@localhost:3306/saranya"`

## 3) Database setup

### Option A — Docker Desktop (recommended)

From `backend/`:

- `docker compose up -d`

### Option B — Local MySQL

- Install MySQL Server (or XAMPP/WAMP)
- Ensure MySQL is running on `localhost:3306`
- You do NOT need to open a SQL console. Use the code-first init step below.

## 4) Prisma

- Create DB (code-first): `npm --prefix backend run db:init`
- Generate client: `npm --prefix backend run prisma:generate`
- Run migrations (code-first schema): `npm --prefix backend run prisma:migrate`

## 5) Seed first Admin user

Set env vars and run:

- `set ADMIN_EMAIL=admin@example.com`
- `set ADMIN_PASSWORD=ChangeMe123`
- `npm --prefix backend run seed:admin`

## 6) Run server

- `npm --prefix backend run start:dev`

Health endpoint:

- `GET http://localhost:3000/health`
