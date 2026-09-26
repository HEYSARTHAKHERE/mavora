# MAVORA Architecture

## Platform composition

- Marketing website and public creator/brand pages
- Authentication and onboarding
- Creator and brand workspaces
- Campaign management and analytics
- Admin console and permissions layer
- Storage, job queue, and external integrations

## Primary stack

- Next.js App Router for frontend and API routes
- PostgreSQL via Prisma ORM
- Supabase Auth and Storage
- Tailwind and themed design system
- Recharts for analytics and dashboards
- Intentionally modular service/repository structure for future implementation

## Data model

The initial Prisma schema covers the core user, creator, and brand profile models. Additional modules can be added for campaigns, offers, media kits, briefs, messages, and payments.

## Security

- Keep secrets in environment variables
- Use server-side session validation and authorization
- Never expose service role keys to the browser
- Enforce server-side permissions before business actions
