# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Production build
pnpm start            # Run production build

# Quality
pnpm lint             # Run ESLint
pnpm format           # ESLint fix + Prettier

# Testing
pnpm test             # Run Vitest
pnpm test:watch       # Watch mode
pnpm test:coverage    # With coverage
```

## Architecture

This is a Next.js 16 SaaS starter with React 19, React Compiler, and App Router.

### Key Structure

- `app/` - Next.js App Router pages and layouts
- `lib/stripe/` - Stripe client (server-side, singleton pattern)
- `lib/supabase/` - Supabase browser client
- `env.mjs` - Type-safe environment variables via `@t3-oss/env-nextjs` with Zod validation

### Providers Pattern

`app/providers.tsx` wraps the app with React Query. The root layout (`app/layout.tsx`) uses `AppProviders` to wrap children.

### Environment Variables

All env vars are validated in `env.mjs`. Server vars: `DATABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`. Client vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`.

### Path Aliases

`@/*` maps to the project root (see `tsconfig.json`).

## Code Style

- Uses ESLint flat config with Next.js + Prettier
- Import sorting enforced: external, builtin, internal, sibling, parent, index (alphabetized)
- Unused vars must be prefixed with `_`
- Uses Conventional Commits for semantic-release

## Testing

- Vitest with jsdom environment
- Tests colocated with source files (`*.test.tsx`)
- Setup file: `vitest.setup.ts` (imports `@testing-library/jest-dom`)
- Global test APIs enabled
