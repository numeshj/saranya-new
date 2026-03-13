# Backend Dev Setup

This backend is built with **NestJS + Prisma + PostgreSQL**.

## 1) Prerequisites

- Node.js (already installed)
- PostgreSQL running locally **or** Docker Desktop (recommended)

## 2) Configure environment

- Copy `.env.example` to `.env`
- Set `DATABASE_URL` and `JWT_SECRET`

Example local DB URL:

- `DATABASE_URL="postgresql://saranya:saranya@localhost:5432/saranya?schema=public"`

## 3) Database setup

### Option A — Docker Desktop (recommended)

From `backend/`:

- `docker compose up -d`

### Option B — Local PostgreSQL

- Create DB `saranya`
- Create user `saranya` with password `saranya` (or update `.env` accordingly)

## 4) Prisma

- Generate client: `npm --prefix backend run prisma:generate`
- Run migrations: `npm --prefix backend run prisma:migrate`

## 5) Seed first Admin user

Set env vars and run:

- `set ADMIN_EMAIL=admin@example.com`
- `set ADMIN_PASSWORD=ChangeMe123`
- `npm --prefix backend run seed:admin`

## 6) Run server

- `npm --prefix backend run start:dev`

Health endpoint:

- `GET http://localhost:3000/health`
