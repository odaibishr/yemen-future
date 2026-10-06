<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — Yemen Future (يمن فيوتشر)

Instructions and binding standards for any AI agent working on the **Yemen Future** codebase.

---

## 1. Project Summary

**Yemen Future (يمن فيوتشر للخدمات المالية والمدفوعات الإلكترونية)** is a premier corporate and marketing web application in Arabic, inspired by the service architecture of leading Yemeni financial and electronic payment institutions (such as Ahd Financial, Jawali, and Floosak).

It features a high-trust, modern **One-Page Scroll** layout showcasing:
- Company identity, vision, and mission in driving digital financial inclusion in Yemen.
- Core values and strategic fintech goals.
- Interactive financial services catalog for individuals (transfers, bill & telecom payments, cash in/out) and businesses/merchants (POS, payment gateways, payroll).
- Mobile wallet app presentation with download links and QR badges (Google Play, App Store, APK).
- Agent and service point network overview.
- Interactive contact and merchant onboarding request forms.

---

## 2. Tech Stack

- **Framework**: Next.js 16.3.8 (App Router, React 19.2.8)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss: ^4`, `@theme` inline tokens in `globals.css`)
- **Typography**: `IBM Plex Sans Arabic` loaded via `next/font/google`
- **Iconography**: `lucide-react`
- **Class Merging**: `clsx` + `tailwind-merge` via `@/lib/utils` (`cn` helper)
- **Theme**: **Light Mode Only** (pristine, high-contrast, trustworthy banking design)
- **Language & Direction**: Arabic (`lang="ar"`), Right-to-Left (`dir="rtl"`)

---

## 3. Commands

- **Install dependencies**: `npm install`
- **Add packages**: `npm install <package-name>`
- **Run dev server**: `npm run dev`
- **Build production bundle**: `npm run build`
- **Start production server**: `npm run start`
- **Run linter**: `npm run lint`

---

## 4. Brand Design System & Color Tokens

Colors are extracted directly from the official SVG logo (`public/svgs/logo.svg`):

| Token | Hex Value | Role / Usage |
|---|---|---|
| `brand-navy` | `#1a2754` | Primary brand color: headlines, deep headers, primary CTA buttons, high-contrast text |
| `brand-navy-light` | `#253775` | Hover state for primary buttons, gradient endpoints |
| `brand-navy-dark` | `#0f1733` | Deepest surface for dark contrast containers |
| `brand-cyan` | `#73a7c1` | Brand secondary & accent: badges, borders, icons, secondary CTAs, subtle gradients |
| `brand-cyan-light` | `#92bcd2` | Light hover accents, subtle glows, progress rings |
| `brand-cyan-tint` | `#f0f6fa` | Soft tinted card backgrounds, icon container pills |
| `background` | `#ffffff` | Clean, crisp, high-trust background |
| `surface-muted` | `#f8fafc` | Subtle alternate section backgrounds |
| `border-subtle` | `#e2e8f0` | Clean dividers and card outlines |

> **Rule:** Never use generic arbitrary hex codes when brand tokens apply. Always use the defined brand tokens or theme classes.

---

## 5. Folder & File Structure

```
yemen-future/
├── public/
│   ├── svgs/
│   │   └── logo.svg                 # Brand official logo
│   └── images/                      # App mockups, partner/telecom icons, banners
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout: IBM Plex Sans Arabic, lang="ar", dir="rtl", SEO metadata
│   │   ├── globals.css              # Tailwind v4 theme, brand color definitions, base styles
│   │   └── page.tsx                 # Main one-page assembling all sections
│   ├── components/
│   │   ├── common/                  # Logo, Container, SectionHeader
│   │   ├── layout/                  # Navbar, Footer, MobileMenu
│   │   ├── sections/                # Hero, About, Values, Services, AppShowcase, Agents, Contact
│   │   └── ui/                      # Button, Card, Badge, Modal, Input, Textarea
│   ├── data/
│   │   ├── services.ts              # Services data (individual & business)
│   │   ├── values.ts                # Company values, mission, vision, and goals
│   │   └── contact.ts               # Contact channels, FAQs, working hours
│   ├── lib/
│   │   └── utils.ts                 # cn() class merge utility
│   └── types/
│       └── index.ts                 # TypeScript types and data models
```

---

## 6. Mandatory Coding Standards

### 1. Next.js 16 App Router & React 19 Conventions
- **Server Components by Default**: Pages and layout wrappers should remain Server Components. Mark files with `'use client'` **only** when client interactivity (hooks, state, event listeners, modals) is strictly necessary.
- **Async Metadata**: If metadata is dynamic or fetched, use proper async `generateMetadata`.
- **Image Optimization**: Always use `next/image` with explicit `width`, `height`, or `fill` with `sizes`.

### 2. Arabic & RTL Excellence
- **HTML Configuration**: `layout.tsx` must configure `<html lang="ar" dir="rtl">`.
- **Logical CSS Properties**: Always prefer Tailwind logical utilities (`ms-`, `me-`, `ps-`, `pe-`, `text-start`, `text-end`, `inset-inline-start`) to ensure natural Arabic layout flow without hardcoded LTR assumptions.
- **Typography**: Apply `IBM Plex Sans Arabic` across headings and body text with proper font weights (400 regular, 500 medium, 600 semi-bold, 700 bold).

### 3. Centralized DRY Reuse
- **Utility merging**: Always combine conditional or variant class names using `cn(...)` from `@/lib/utils`.
- **Component sizing**: Keep components modular, focused, and under 150 lines. Extract sub-elements into `components/sections/` or `components/ui/`.
- **Static Content**: Do not hardcode large content blocks inside JSX; place them in structured TypeScript objects under `src/data/`.

### 4. Mandatory Pre-Write Check
Before authoring any new component or function:
- [ ] Check `src/lib/` for existing utility functions.
- [ ] Check `src/components/ui/` for existing buttons, cards, or inputs before creating new ones.
- [ ] Check `src/data/` for existing data structures before declaring ad-hoc arrays in components.
- [ ] Check `public/svgs/` for official brand assets.

### 5. Strict Visual Style: NO SHADOWS RULE (Zero Box Shadows)
- **BINDING RULE**: **DO NOT USE SHADOWS until explicitly told by the user.**
- Never use Tailwind shadow classes (`shadow`, `shadow-xs`, `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`, `drop-shadow-*`) or CSS `box-shadow` properties anywhere in the codebase.
- Instead of shadows, create depth, structure, and hierarchy using:
  - Clean, subtle borders (`border`, `border-border-subtle`, `border-brand-cyan/20`).
  - High-trust background tints (`bg-surface-muted`, `bg-brand-cyan-tint`).
  - Contrast between pure white (`#ffffff`) and soft slate/cyan tones.
  - Crisp spacing, typography scales, and divider lines.

### 6. Verification Checklist Before Completing Tasks
- [ ] Run `npm run build` or `npm run lint` to guarantee clean TypeScript compilation with zero errors.
- [ ] Verify that page elements render correctly in RTL direction with proper spacing and alignments.
- [ ] Verify that **NO shadows** (`shadow-*`, `box-shadow`) were introduced anywhere in the generated styles or components.
- [ ] Ensure all interactive buttons, modal triggers, and form fields have accessible labels and responsive states.
