# BoardPackNYC — MVP Plan

**Vision**: A smart, guided platform for creating NYC co-op and condo offer packages.
**Domain**: BoardPackNYC.com
**Target Launch**: 8-12 weeks

---

## Executive Summary

BoardPackNYC eliminates the stress, errors, and chaos of preparing NYC real estate offer packages by providing a guided, digital platform that creates complete, accurate, and professional REBNY Financial Statements and supporting document packages.

**Core Value Proposition**: Make NYC offer package creation as simple as filing taxes with TurboTax.

---

## MVP Scope (Phase 1)

### What We're Building

A minimal viable product focused on **first-time NYC buyers** that includes:

1. **Smart Financial Intake Wizard** (Digital REBNY Form)
2. **Document Upload & Checklist**
3. **Professional PDF Package Generator**
4. **Basic Sharing Capability**

### What We're NOT Building (Yet)

- ❌ AI/LLM document extraction
- ❌ Plaid bank integrations
- ❌ Agent/attorney portals
- ❌ FSBO seller comparison tools
- ❌ Multi-user collaboration
- ❌ Advanced analytics dashboard
- ❌ Subscription billing (launch with free beta)

---

## Core Features (MVP)

### 1. Smart Financial Intake Wizard

**Purpose**: Replace the static REBNY PDF with a guided, web-based questionnaire.

#### Sections:
- **Personal Information**
  - Buyer name(s)
  - Contact information
  - Current address
  - Marital status

- **Income**
  - Employment status
  - Employer name
  - Annual salary
  - Bonuses/commissions
  - Other income sources

- **Assets**
  - Cash in bank accounts
  - Stocks/bonds/securities
  - Retirement accounts (401k, IRA)
  - Real estate owned
  - Other assets

- **Liabilities**
  - Credit card debt
  - Auto loans
  - Student loans
  - Mortgages
  - Other liabilities

- **Housing Costs**
  - Current monthly rent/mortgage
  - Proposed purchase price
  - Down payment amount
  - Monthly maintenance/HOA estimate

#### Smart Features:
- ✅ Inline help text for every field
- ✅ Automatic calculations:
  - Total assets
  - Total liabilities
  - Net worth
  - Debt-to-income ratio
  - Post-closing liquidity
  - Monthly housing expense
- ✅ Field validation (no negative values, required fields)
- ✅ Progress indicator
- ✅ Save & resume later
- ✅ Co-op readiness score (basic)

### 2. Document Collection & Checklist

**Purpose**: Organize required supporting documents with clear guidance.

#### Required Documents:
- [ ] Two months of bank statements
- [ ] Two recent paystubs
- [ ] Last 2 years W-2s
- [ ] Last 2 years tax returns (1040)
- [ ] Employment verification letter
- [ ] Pre-approval letter (if applicable)
- [ ] Photo ID
- [ ] Proof of down payment funds

#### Features:
- ✅ Drag-and-drop upload
- ✅ File type validation (PDF, JPG, PNG)
- ✅ File size limits
- ✅ Document checklist with status indicators (uploaded/pending)
- ✅ Secure cloud storage (encrypted)
- ✅ Preview uploaded documents
- ✅ Delete/replace documents

### 3. Professional Package Generator

**Purpose**: Automatically compile everything into a polished, submission-ready PDF.

#### Generated Package Includes:
1. **Cover Page**
   - Property address
   - Buyer name(s)
   - Submission date
   - Package table of contents

2. **REBNY Financial Statement** (formatted PDF)
   - All financial data in standard REBNY layout
   - Calculated totals and ratios
   - Buyer signature section

3. **Financial Summary Page**
   - Key metrics at-a-glance:
     - Net worth
     - Debt-to-income ratio
     - Post-closing liquidity (months)
     - Cash reserves
   - Visual charts (optional for MVP)

4. **Supporting Documents** (in order)
   - Bank statements
   - Paystubs
   - W-2s
   - Tax returns
   - Employment letter
   - Pre-approval letter
   - ID

#### Package Options:
- **Output Formats**:
  - Single consolidated PDF
  - ZIP file with organized folders

- **Templates**:
  - Co-op package template
  - Condo package template

### 4. Sharing & Delivery

**Purpose**: Securely share completed packages with agents, attorneys, and sellers.

#### Features:
- ✅ Download package as PDF
- ✅ Password-protected share link
- ✅ Link expiration (7, 14, 30 days)
- ✅ Email delivery option
- ✅ View-only access (no downloads initially)

---

## User Flow (MVP)

```
1. Landing Page
   ↓
2. Sign Up / Log In
   ↓
3. Create New Package
   ↓
4. Financial Intake Wizard
   - Personal Info
   - Income
   - Assets
   - Liabilities
   - Housing Costs
   ↓
5. Review Financial Summary
   - See calculated metrics
   - Edit if needed
   ↓
6. Upload Documents
   - Complete checklist
   - Preview uploads
   ↓
7. Generate Package
   - Select template (co-op/condo)
   - Preview package
   - Download or share
   ↓
8. Share Package
   - Create password-protected link
   - Email to agent/attorney
```

---

## Technical Stack

### Frontend
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod validation
- **PDF Generation**: react-pdf or jsPDF
- **UI Components**: shadcn/ui or Headless UI
- **State Management**: React Context or Zustand

### Backend
- **Runtime**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **ORM**: Prisma
- **Authentication**: Supabase Auth
- **File Storage**: Supabase Storage (encrypted buckets)
- **Email**: SendGrid or Resend

### Infrastructure
- **Hosting**: Vercel
- **CI/CD**: Vercel automatic deployments (GitHub integration)
- **Domain**: BoardPackNYC.com
- **SSL**: Automatic (Vercel)
- **Monitoring**: Vercel Analytics

### Security
- **Encryption**: AES-256 for stored files
- **Auth**: Email/password + magic links
- **Data Privacy**: GDPR/CCPA compliant
- **Environment Variables**: All secrets in Vercel environment

---

## Database Schema (Prisma)

### Core Models

```prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  packages      Package[]
}

model Package {
  id                String    @id @default(cuid())
  userId            String
  user              User      @relation(fields: [userId], references: [id])

  // Package metadata
  status            String    @default("draft") // draft, complete, shared
  packageType       String    // "coop" or "condo"
  propertyAddress   String?

  // Financial data (JSON)
  personalInfo      Json?
  income            Json?
  assets            Json?
  liabilities       Json?
  housingCosts      Json?

  // Calculated metrics
  netWorth          Float?
  debtToIncomeRatio Float?
  postClosingLiquid Float?
  coopReadinessScore Int?

  // Documents
  documents         Document[]

  // Sharing
  shareLinks        ShareLink[]

  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
}

model Document {
  id          String    @id @default(cuid())
  packageId   String
  package     Package   @relation(fields: [packageId], references: [id])

  type        String    // "bank_statement", "paystub", "w2", "tax_return", etc.
  fileName    String
  fileSize    Int
  fileUrl     String    // Supabase storage URL
  uploadedAt  DateTime  @default(now())
}

model ShareLink {
  id          String    @id @default(cuid())
  packageId   String
  package     Package   @relation(fields: [packageId], references: [id])

  token       String    @unique
  password    String?   // Hashed
  expiresAt   DateTime
  isActive    Boolean   @default(true)
  viewCount   Int       @default(0)

  createdAt   DateTime  @default(now())
}
```

---

## Page Structure

### Public Pages
- `/` - Landing page
- `/login` - Sign in
- `/signup` - Create account
- `/forgot-password` - Password reset

### Authenticated Pages
- `/dashboard` - User dashboard (list of packages)
- `/package/new` - Create new package
- `/package/[id]/financial` - Financial intake wizard
- `/package/[id]/documents` - Upload documents
- `/package/[id]/review` - Review & generate
- `/package/[id]/share` - Sharing options

### Shared Pages
- `/p/[shareToken]` - View shared package (password-protected)

---

## MVP Success Metrics

### Launch Criteria
- ✅ User can create account
- ✅ User can complete financial wizard
- ✅ All calculations are accurate
- ✅ User can upload all required documents
- ✅ Generated PDF matches REBNY format
- ✅ Package can be downloaded
- ✅ Share links work with password protection
- ✅ Mobile responsive
- ✅ Security audit passed
- ✅ No data leaks or vulnerabilities

### Beta Success Metrics (First 30 Days)
- **50 signups**
- **20 completed packages**
- **15 shared packages**
- **80%+ wizard completion rate**
- **< 5% error rate on calculations**
- **Average time-to-package: < 25 minutes**

---

## Go-to-Market (MVP Phase)

### Beta Launch Strategy

**Target Audience**: First-time NYC buyers

**Channels**:
1. **SEO Content**
   - "How to fill out REBNY Financial Statement"
   - "NYC co-op offer package checklist"
   - "First-time NYC buyer guide"

2. **Partnerships**
   - 5 NYC buyer agents (beta partners)
   - 2 mortgage brokers (referral partners)

3. **Community**
   - r/NYCapartments
   - StreetEasy forums
   - Facebook NYC apartment hunting groups

4. **Paid (Optional)**
   - Google Ads: "REBNY financial statement"
   - Facebook: Targeting NYC renters 25-40

**Pricing**: Free during beta (gather feedback)

---

## Development Roadmap

### Week 1-2: Foundation
- [ ] Project setup (Next.js + Supabase + Prisma)
- [ ] Database schema implementation
- [ ] Authentication flow (Supabase Auth)
- [ ] Landing page + basic UI design

### Week 3-4: Financial Wizard
- [ ] Wizard UI/UX (multi-step form)
- [ ] Form validation (Zod schemas)
- [ ] Calculation engine (DTI, liquidity, etc.)
- [ ] Save/resume functionality
- [ ] Co-op readiness scoring algorithm

### Week 5-6: Document Management
- [ ] File upload component
- [ ] Supabase Storage integration
- [ ] Document checklist logic
- [ ] File preview capability
- [ ] Upload validation + error handling

### Week 7-8: Package Generation
- [ ] REBNY PDF template design
- [ ] PDF generation engine
- [ ] Cover page + summary page
- [ ] Document compilation logic
- [ ] Co-op vs condo templates

### Week 9-10: Sharing & Polish
- [ ] Share link generation
- [ ] Password protection
- [ ] View-only package viewer
- [ ] Email delivery
- [ ] Mobile responsiveness
- [ ] Security hardening

### Week 11-12: Testing & Launch
- [ ] End-to-end testing (Playwright)
- [ ] Security audit
- [ ] Beta user testing (5-10 users)
- [ ] Bug fixes
- [ ] Performance optimization
- [ ] Production deployment
- [ ] Domain setup + SSL
- [ ] Beta launch

---

## Post-MVP Roadmap (Phase 2)

**Priority Features for Next Release**:

1. **AI Document Extraction**
   - Auto-fill financial fields from uploaded documents
   - Income verification from paystubs
   - Asset verification from bank statements

2. **Plaid Integration**
   - Direct bank account connections
   - Real-time balance verification

3. **Agent Portal**
   - Invite clients to create packages
   - White-label branding
   - Client management dashboard

4. **Enhanced Analytics**
   - Co-op approval probability
   - Package strength vs market benchmarks
   - Missing information warnings

5. **Subscription Billing**
   - Free tier (1 package)
   - Pro tier ($29/package)
   - Agent tier ($59/month unlimited)

---

## Risk Mitigation

### Technical Risks
- **Data security breach**: End-to-end encryption, regular audits
- **PDF generation failure**: Fallback templates, error handling
- **File storage limits**: Supabase quotas, file size validation

### Product Risks
- **User abandonment in wizard**: Progress saving, clear help text
- **Inaccurate calculations**: Comprehensive unit tests, QA review
- **Low adoption**: Beta partnerships, SEO content, user feedback loops

### Legal/Compliance Risks
- **GDPR/CCPA**: Privacy policy, data deletion on request
- **Financial accuracy**: Disclaimer that users verify all numbers
- **Liability**: Terms of service (platform is guidance tool, not financial advice)

---

## Appendix

### REBNY Financial Statement Sections (Reference)

The official REBNY form includes:

1. **Applicant Information**
   - Name, address, SSN, employment

2. **Assets**
   - Cash on hand
   - Savings accounts
   - Checking accounts
   - Marketable securities
   - Retirement accounts
   - Real estate owned
   - Automobiles
   - Other assets

3. **Liabilities**
   - Notes payable to banks
   - Notes payable to others
   - Accounts/bills payable
   - Unpaid taxes
   - Mortgages on real estate
   - Other liabilities

4. **Income**
   - Salary
   - Bonuses
   - Investment income
   - Real estate income
   - Other income

5. **Contingent Liabilities**
   - Guarantees
   - Legal claims
   - Tax issues

6. **Sources of Down Payment**

7. **Signature & Date**

---

## Success Definition

**MVP is successful when**:

> A first-time NYC buyer with zero real estate experience can independently create a complete, accurate, professional REBNY offer package in under 25 minutes — with confidence that it meets co-op board standards.

---

**End of MVP Plan**

*Last Updated: 2025-11-16*
