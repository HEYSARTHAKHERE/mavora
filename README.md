# MAVORA

MAVORA is a premium global creator-brand collaboration platform for creators, brands, agencies, and platform teams.

## Goals

- Creator discovery and campaign pipeline management
- Brand collaboration workflows and CRM-like tooling
- Social analytics and media kit publishing
- Payment flows, storage, and job orchestration
- Secure onboarding and role-based access controls

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- Supabase Auth and Storage
- TanStack Query
- Framer Motion
- Recharts

## Project shape

- app/ marketing, auth, onboarding, dashboards, public pages
- components/ reusable design system primitives and sections
- lib/ shared config and service utilities
- prisma/ database schema and migrations
- docs/ architecture and deployment notes

## Local setup

1. Copy `.env.example` to `.env.local`
2. Install dependencies with `npm install`
3. Generate Prisma client: `npx prisma generate`
4. Run migrations: `npx prisma migrate dev`
5. Start development server: `npm run dev`

## Production readiness

This repository is structured as a launch-ready foundation for a full creator economy SaaS and is intended to be extended with real Auth, payments, campaign orchestration, storage policies, job workers, and analytics integrations.
