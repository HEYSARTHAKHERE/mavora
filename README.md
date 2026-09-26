# MAVORA

MAVORA is a production-oriented creator-brand collaboration platform built with Next.js, TypeScript, Tailwind, Prisma, and Supabase.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma ORM
- Supabase Auth + Storage
- PostgreSQL
- React Hook Form + Zod
- TanStack Query
- Framer Motion

## Local development

1. Copy `.env.example` to `.env.local`
2. Install dependencies: `npm install`
3. Generate Prisma client: `npx prisma generate`
4. Run migrations: `npx prisma migrate dev`
5. Start the app: `npm run dev`

## Production checklist

- Configure `NEXT_PUBLIC_APP_URL`
- Add Supabase credentials
- Add Stripe or payment provider credentials
- Set secure auth cookies
- Configure storage buckets
- Add job queue provider
- Run `npm run build`

## Brand identity

- Name: MAVORA
- Tagline: Create Together. Grow Everywhere.
- Theme: Premium Aurora / Obsidian editorial SaaS look

## Notes

This repository is intentionally scaffolded as a real application baseline and is suitable for production extension with additional creator, brand, onboarding, campaign, and admin flows.
