# Technical Stack & Setup Template

This document provides a complete technical setup specification for replicating this project's architecture in new projects.

## Table of Contents

- [Core Technology Stack](#core-technology-stack)
- [Project Structure](#project-structure)
- [Package Configuration](#package-configuration)
- [Development Tools](#development-tools)
- [Database Setup](#database-setup)
- [Authentication & Authorization](#authentication--authorization)
- [Email Configuration](#email-configuration)
- [Styling & UI](#styling--ui)
- [Code Quality & Git Hooks](#code-quality--git-hooks)
- [CI/CD Pipeline](#cicd-pipeline)
- [Environment Variables](#environment-variables)
- [Common Commands](#common-commands)
- [Deployment Setup](#deployment-setup)

---

## Core Technology Stack

### Framework & Runtime

- **Next.js**: `15.5.2` (App Router with Turbopack)
- **React**: `19.1.0`
- **Node.js**: `22.x` (LTS)
- **TypeScript**: `5.x` (strict mode)
- **Package Manager**: `pnpm 10.x`

### Database & ORM

- **Database**: PostgreSQL (recommended: Supabase)
- **ORM**: Prisma `6.15.0`
- **Adapter**: `@auth/prisma-adapter` for NextAuth integration

### Authentication

- **NextAuth.js**: `4.24.11` with Prisma adapter
- **Providers**:
  - Email (magic link via Resend)
  - Google OAuth
- **Session Strategy**: Database sessions

### Email Service

- **Provider**: Resend (via SMTP)
- **Library**: `nodemailer 6.10.1`
- **Development**: Mailpit (local SMTP server on port 1025)

---

## Project Structure

```
project-root/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (auth)/            # Auth-related pages
│   │   ├── (app)/             # Authenticated app pages
│   │   ├── api/               # API routes
│   │   │   ├── auth/          # NextAuth endpoints
│   │   │   └── [features]/    # Feature API endpoints
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── ui/                # shadcn/ui components
│   │   └── [features]/        # Feature-specific components
│   ├── lib/                   # Utility libraries
│   │   ├── auth.ts            # NextAuth configuration
│   │   ├── db.ts              # Prisma client singleton
│   │   ├── email.ts           # Email utilities
│   │   └── utils.ts           # General utilities
│   └── types/                 # TypeScript type definitions
├── prisma/
│   ├── schema.prisma          # Database schema
│   ├── migrations/            # Database migrations
│   └── seed.ts                # Database seeding script
├── public/                    # Static assets
├── scripts/                   # Build and utility scripts
│   ├── validate-env.ts        # Environment validation
│   └── sync-vercel-env.sh     # Vercel env sync script
├── .github/
│   └── workflows/
│       └── ci.yml             # GitHub Actions CI pipeline
├── .husky/                    # Git hooks
│   └── pre-commit             # Pre-commit hook
├── next.config.ts             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
├── eslint.config.mjs          # ESLint configuration
├── postcss.config.mjs         # PostCSS configuration
├── .prettierrc                # Prettier configuration
├── .env.example               # Environment variables template
└── package.json               # Dependencies and scripts
```

---

## Package Configuration

### package.json

```json
{
  "name": "your-app",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "tsx scripts/validate-env.ts && prisma generate && next build --turbopack",
    "start": "next start",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "typecheck": "tsc --noEmit",
    "validate-env": "tsx scripts/validate-env.ts",
    "env:check": "tsx scripts/validate-env.ts",
    "db:generate": "prisma generate",
    "db:push": "prisma db push",
    "db:migrate": "prisma migrate dev",
    "db:studio": "prisma studio",
    "db:seed": "tsx prisma/seed.ts",
    "db:migrate:deploy": "prisma migrate deploy",
    "prepare": "husky"
  },
  "dependencies": {
    "@auth/prisma-adapter": "^2.10.0",
    "@hookform/resolvers": "^5.2.1",
    "@next/mdx": "^15.5.2",
    "@prisma/client": "^6.15.0",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.6",
    "@vercel/analytics": "^1.5.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^4.1.0",
    "lucide-react": "^0.542.0",
    "next": "15.5.2",
    "next-auth": "^4.24.11",
    "nodemailer": "^6.10.1",
    "prettier": "^3.6.2",
    "prisma": "^6.15.0",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "react-hook-form": "^7.62.0",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.3.1",
    "zod": "^4.1.5"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/nodemailer": "^7.0.1",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "15.5.2",
    "eslint-plugin-react-hooks": "^5.2.0",
    "husky": "^9.1.7",
    "lint-staged": "^16.1.6",
    "tailwindcss": "^4",
    "tsx": "^4.20.5",
    "typescript": "^5"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md,css}": ["prettier --write"]
  }
}
```

---

## Development Tools

### TypeScript Configuration (tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules", "prisma/seed.ts"]
}
```

### ESLint Configuration (eslint.config.mjs)

```javascript
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "prefer-const": "error",
      "no-var": "error",
    },
  },
];

export default eslintConfig;
```

### Prettier Configuration (.prettierrc)

```json
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": false,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

---

## Database Setup

### Prisma Configuration

**prisma/schema.prisma** (minimal setup):

```prisma
generator client {
  provider   = "prisma-client-js"
  engineType = "library"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// NextAuth.js required models
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  emailVerified DateTime?
  image         String?
  role          UserRole  @default(USER)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  accounts Account[]
  sessions Session[]

  @@map("users")
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
  @@map("accounts")
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("sessions")
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
  @@map("verification_tokens")
}

enum UserRole {
  USER
  ADMIN
}
```

### Database Commands

```bash
# Generate Prisma Client
pnpm db:generate

# Push schema to database (development)
pnpm db:push

# Create migration
pnpm db:migrate

# Deploy migrations (production)
pnpm db:migrate:deploy

# Open Prisma Studio (database GUI)
pnpm db:studio

# Seed database
pnpm db:seed
```

---

## Authentication & Authorization

### NextAuth.js Setup

**src/lib/auth.ts**:

```typescript
import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { createTransport } from "nodemailer";
import { db } from "./db";
import type { Adapter } from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db) as Adapter,
  debug: process.env.NODE_ENV === "development",
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
    EmailProvider({
      server: process.env.RESEND_API_KEY
        ? {
            host: "smtp.resend.com",
            port: 587,
            auth: {
              user: "resend",
              pass: process.env.RESEND_API_KEY,
            },
            secure: false,
          }
        : {
            host: process.env.EMAIL_SERVER_HOST || "localhost",
            port: Number(process.env.EMAIL_SERVER_PORT) || 1025,
            auth: process.env.EMAIL_SERVER_USER
              ? {
                  user: process.env.EMAIL_SERVER_USER,
                  pass: process.env.EMAIL_SERVER_PASSWORD,
                }
              : undefined,
          },
      from: process.env.EMAIL_FROM,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    verifyRequest: "/auth/verify-request",
    signOut: "/auth/signin",
  },
  session: {
    strategy: "database",
  },
  callbacks: {
    session: async ({ session, user }) => {
      if (session?.user) {
        session.user.id = user.id;
        session.user.role = (user as { role: string }).role as "USER" | "ADMIN";
      }
      return session;
    },
  },
};
```

**src/lib/db.ts** (Prisma singleton):

```typescript
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
```

---

## Email Configuration

### Email Utility (src/lib/email.ts)

```typescript
import { createTransport } from "nodemailer";

function getEmailTransport() {
  if (process.env.RESEND_API_KEY) {
    return createTransport({
      host: "smtp.resend.com",
      port: 587,
      auth: {
        user: "resend",
        pass: process.env.RESEND_API_KEY,
      },
      secure: false,
    });
  }

  return createTransport({
    host: process.env.EMAIL_SERVER_HOST || "localhost",
    port: Number(process.env.EMAIL_SERVER_PORT) || 1025,
    auth: process.env.EMAIL_SERVER_USER
      ? {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        }
      : undefined,
  });
}

export async function sendEmail({
  to,
  subject,
  text,
  html,
}: {
  to: string | string[];
  subject: string;
  text: string;
  html: string;
}) {
  const transport = getEmailTransport();
  const fromEmail = process.env.EMAIL_FROM || "noreply@example.com";

  return transport.sendMail({
    from: fromEmail,
    to,
    subject,
    text,
    html,
  });
}
```

### Local Email Development (Mailpit)

```bash
# Install Mailpit (macOS)
brew install mailpit

# Start Mailpit
mailpit

# Access web UI at: http://localhost:8025
# SMTP server runs on: localhost:1025
```

---

## Styling & UI

### Stack

- **Tailwind CSS v4**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **shadcn/ui**: Pre-built accessible components using Radix UI
- **Lucide React**: Icon library
- **class-variance-authority**: Component variant management
- **tailwind-merge**: Merge Tailwind classes intelligently

### PostCSS Configuration (postcss.config.mjs)

```javascript
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
```

### Next.js Configuration (next.config.ts)

```typescript
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "fs/promises": false,
        fs: false,
        path: false,
        crypto: false,
      };
    }
    return config;
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
```

### Utility Functions (src/lib/utils.ts)

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## Code Quality & Git Hooks

### Husky Setup

```bash
# Install Husky
pnpm add -D husky
pnpm exec husky init
```

**.husky/pre-commit**:

```bash
pnpm lint-staged
```

### Lint-Staged Configuration

In `package.json`:

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md,css}": ["prettier --write"]
  }
}
```

---

## CI/CD Pipeline

### GitHub Actions (.github/workflows/ci.yml)

```yaml
name: CI

on:
  pull_request:
    branches: [develop, main]
  push:
    branches: [develop, main]

jobs:
  lint-and-typecheck:
    name: Lint & Type Check
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 10

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "22"
          cache: "pnpm"

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Generate Prisma client
        run: pnpm db:generate
        env:
          DATABASE_URL: postgresql://user:pass@localhost:5432/db

      - name: Run ESLint
        run: pnpm lint

      - name: Run TypeScript type check
        run: pnpm typecheck

      - name: Check code formatting
        run: pnpm format:check

  prisma-check:
    name: Prisma Schema Check
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 10

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "22"
          cache: "pnpm"

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Validate Prisma schema
        run: pnpm prisma validate
        env:
          DATABASE_URL: postgresql://user:pass@localhost:5432/db

      - name: Generate Prisma client
        run: pnpm db:generate
        env:
          DATABASE_URL: postgresql://user:pass@localhost:5432/db

  build-check:
    name: Build Check
    runs-on: ubuntu-latest
    needs: [lint-and-typecheck, prisma-check]

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 10

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "22"
          cache: "pnpm"

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Generate Prisma client
        run: pnpm db:generate

      - name: Build application
        run: pnpm build
        env:
          DATABASE_URL: postgresql://user:pass@localhost:5432/db
          NEXTAUTH_SECRET: ci-test-secret-key-minimum-32-chars
          NEXTAUTH_URL: http://localhost:3000
          GOOGLE_CLIENT_ID: test-client-id
          GOOGLE_CLIENT_SECRET: test-client-secret
          RESEND_API_KEY: test-api-key
          EMAIL_FROM: test@example.com
```

---

## Environment Variables

### .env.example

```bash
# ==============================================================================
# DATABASE
# ==============================================================================
DATABASE_URL="postgresql://USER:PASSWORD@HOST:6543/DATABASE?pgbouncer=true"

# ==============================================================================
# AUTHENTICATION - NextAuth.js
# ==============================================================================
NEXTAUTH_SECRET="your-secret-here"  # Generate: openssl rand -base64 32
NEXTAUTH_URL="http://localhost:3000"

# ==============================================================================
# OAUTH PROVIDERS
# ==============================================================================
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# ==============================================================================
# EMAIL - Resend API
# ==============================================================================
RESEND_API_KEY="re_your_api_key"
EMAIL_FROM="noreply@yourdomain.com"

# ==============================================================================
# EMAIL - Local Development (Mailpit)
# ==============================================================================
EMAIL_SERVER_HOST="localhost"
EMAIL_SERVER_PORT="1025"
EMAIL_SERVER_USER=""
EMAIL_SERVER_PASSWORD=""

# ==============================================================================
# ADMIN CONFIGURATION
# ==============================================================================
ADMIN_EMAILS="admin1@example.com,admin2@example.com"
```

### Environment Validation Script (scripts/validate-env.ts)

```typescript
import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(32),
  NEXTAUTH_URL: z.string().url(),
  GOOGLE_CLIENT_ID: z.string().min(1),
  GOOGLE_CLIENT_SECRET: z.string().min(1),
  RESEND_API_KEY: z.string().optional(),
  EMAIL_FROM: z.string().email(),
});

try {
  envSchema.parse(process.env);
  console.log("✅ Environment variables validated successfully");
} catch (error) {
  console.error("❌ Environment validation failed:", error);
  process.exit(1);
}
```

---

## Common Commands

### Development

```bash
# Start development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Type checking
pnpm typecheck

# Linting
pnpm lint
pnpm lint:fix

# Code formatting
pnpm format
pnpm format:check
```

### Database

```bash
# Generate Prisma client
pnpm db:generate

# Push schema changes to database (dev)
pnpm db:push

# Create and run migrations
pnpm db:migrate

# Deploy migrations (production)
pnpm db:migrate:deploy

# Open Prisma Studio (database GUI)
pnpm db:studio

# Seed database
pnpm db:seed
```

### Environment

```bash
# Validate environment variables
pnpm env:check

# Sync environment with Vercel
pnpm env:sync
```

---

## Deployment Setup

### Platform: Vercel (Recommended)

#### Branch Strategy

- **`main`**: Production branch → deployed to production
- **`develop`**: Development branch → deployed to staging
- **`feature/*`**: Feature branches → preview deployments

#### Build Configuration

```json
{
  "buildCommand": "pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

#### Environment Variables (Vercel Dashboard)

Set the following in Vercel → Project → Settings → Environment Variables:

**Production:**

- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `RESEND_API_KEY`
- `EMAIL_FROM`
- `ADMIN_EMAILS`

**Preview (optional):**

- Same as production, but with staging database and URLs

#### Database Migrations on Deploy

Add to `package.json` build script:

```json
{
  "scripts": {
    "build": "tsx scripts/validate-env.ts && prisma generate && prisma migrate deploy && next build --turbopack"
  }
}
```

---

## Additional Configuration Files

### .gitignore

```
# dependencies
node_modules
.pnp
.pnp.js

# testing
coverage

# next.js
.next/
out/
build

# production
dist

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# local env files
.env
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# prisma
prisma/*.db
prisma/*.db-journal

# IDE
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
.idea
*.swp
*.swo
*~
```

### .prettierignore

```
.next
node_modules
.vercel
public
pnpm-lock.yaml
package-lock.json
```

---

## Quick Start Checklist

1. **Initialize Project**

   ```bash
   pnpm create next-app@latest
   # Select: TypeScript, ESLint, Tailwind CSS, App Router, Turbopack
   ```

2. **Install Core Dependencies**

   ```bash
   pnpm add next-auth @auth/prisma-adapter @prisma/client prisma
   pnpm add @radix-ui/react-* react-hook-form zod nodemailer
   pnpm add -D @types/nodemailer typescript tsx
   ```

3. **Setup Database**

   ```bash
   pnpm dlx prisma init
   # Configure schema.prisma
   pnpm db:push
   ```

4. **Configure Authentication**
   - Create `src/lib/auth.ts` with NextAuth config
   - Create `src/lib/db.ts` with Prisma singleton
   - Add API route at `src/app/api/auth/[...nextauth]/route.ts`

5. **Setup Git Hooks**

   ```bash
   pnpm add -D husky lint-staged
   pnpm exec husky init
   ```

6. **Configure Environment**
   - Copy `.env.example` to `.env.local`
   - Fill in all required variables
   - Run `pnpm env:check`

7. **Test Build**

   ```bash
   pnpm typecheck
   pnpm lint
   pnpm build
   ```

8. **Deploy**
   - Connect repo to Vercel
   - Configure environment variables
   - Deploy!

---

## Maintenance Commands

```bash
# Update dependencies
pnpm update

# Check for outdated packages
pnpm outdated

# Clean install
rm -rf node_modules .next
pnpm install

# Reset database (⚠️ DESTRUCTIVE)
pnpm db:push --force-reset

# View database in browser
pnpm db:studio
```

---

## Additional Resources

- **Next.js**: https://nextjs.org/docs
- **Prisma**: https://www.prisma.io/docs
- **NextAuth.js**: https://next-auth.js.org
- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com
- **Resend**: https://resend.com/docs
- **Vercel**: https://vercel.com/docs

---

## Notes

- This stack prioritizes **type safety**, **developer experience**, and **production readiness**
- All configurations use **modern ESM** syntax (`.mjs`, `type: "module"`)
- **Turbopack** is enabled for faster development builds
- **Strict TypeScript** mode catches errors early
- **Database sessions** provide better security than JWT
- **Prisma Studio** (`pnpm db:studio`) is essential for database management
- **Environment validation** prevents runtime errors from missing variables
- **Git hooks** ensure code quality before commits

---

**Last Updated**: 2025-11-16
