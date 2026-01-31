# CryptoVault Pro — User Guide (10 Pages)

This guide is written to help quickly customize, preview, and deploy the CryptoVault Pro landing template while minimizing support tickets. Each page maps to a single topic with practical steps, code samples, and references to files in this project/template.

---

## PAGE 1 – Quick Start (For non‑technical buyers)

**Title:** Get Started in 10 Minutes ✅

**Purpose:** Help the buyer go from download → live preview as fast as possible.

What this template is
- A single‑page crypto/fintech SaaS landing page built for product launches, paid campaigns, and sign‑ups. Dark mode focused with reusable sections: Hero, Markets table, Features, Security, Testimonials, FAQ, Footer.

Who it’s for
- Crypto / trading / fintech products
- SaaS with dashboards or analytics
- Agencies needing a reusable dark‑mode SaaS layout

Quick start steps (high level)
1. Unzip the template package into a folder.
2. Install dependencies (Node.js + package manager):
   - Install Node (LTS). Then run:
     ```bash
     npm install
     # or
     yarn
     # or
     pnpm install
     ```
3. Run the dev server to preview:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   - Open http://localhost:5173 (Vite default) or the port printed in the terminal.
4. Update brand settings (name, logo, colors, links) — see Page 3.
5. Replace demo content: hero text, images, logos — see Pages 4–7.
6. Connect forms/CTAs to your tools (Mailchimp, Formspree, HubSpot) — see Page 9.
7. Deploy to hosting (Vercel recommended) — one‑click or CLI:
   ```bash
   npm run build
   vercel --prod
   ```

Support note
> This documentation focuses on how to customize and launch the template, not on teaching React or deployment from scratch. If you need help beyond template setup, contact support (30‑day email support) — details on Page 10.

---

## PAGE 2 – Tech Stack & Files Overview

**Title:** Project Structure & Technology

**Goal:** Give developers and agencies a clear map of what’s inside.

Tech stack (short)
- Frontend: React (Vite) — single‑page landing layout. Files in this project/template use TypeScript/JSX.
- Styling: Tailwind CSS (util‑first classes). Inline `tailwind.config` is currently defined in `index.html`.
- Layout: Mobile‑first, responsive, dark theme.

Key folders & files (plain language; where to edit)
- `/components` – Reusable sections: `Hero.tsx`, `MarketBoard.tsx`, `Features.tsx`, `Footer.tsx`, etc.
- `App.tsx` / `index.tsx` – App bootstrap and section assembly.
- `data.ts` – Example data arrays (markets, features, testimonials) for quick editing.
- `/public` – Static images and `favicon.ico`.
- `index.html` – Tailwind config snippet and fonts used; also a good place for meta tags.
- `index.css` – Global CSS and design tokens (if present).

What can be changed safely (non‑breaking)
- Text, images, logos (in `/public` and `data.ts` or component props).
- Colors, fonts, spacing (via `tailwind.config` or `index.css` variables).
- Order of sections (reorder imported components in `App.tsx` / `index.tsx`).

What should be changed carefully (needs developer knowledge)
- Component structure (props/signatures) — affects multiple pages.
- Layout wrapper, theme provider, or routing logic — can change global behavior.

---

## PAGE 3 – Brand & Theme Settings

**Title:** Changing Brand Name, Logo & Colors

**Where to find it**
- Site title / SEO title: `index.html` (<title>) and `metadata.json` (if used).
- Headline & tagline: `components/Hero.tsx` or `data.ts` (search for hero/title fields).
- Logo file: `/public/logo.svg` (or replace the existing logo file in `/public`).
- Primary & accent colors: inline `tailwind.config` in `index.html` (search `colors:`) or `index.css` if you use CSS variables.
- Fonts: Google Fonts link in `index.html` and `tailwind.config` fontFamily.

**What you can safely change**
- Site title and meta tagline.
- Logo (replace the file but keep the name or update the import path in components).
- Primary and accent color values in the `tailwind.config` block or CSS variables.
- Swap fonts by adding a Google Fonts link and updating `fontFamily`.

**Example snippet**
- Replace a logo: drop a new `/public/logo.svg` (same filename) — no code changes needed.
- Change primary color (short diff — edit `index.html`):
```diff
- primary: { DEFAULT: '#0ea5e9' },
+ primary: { DEFAULT: '#ff6b6b' },
```
- Swap font: add the Google Fonts link to `index.html` head and update `fontFamily` in `tailwind.config`.

---

## PAGE 4 – Hero Section Customization

**Where to find it**
- Component: `components/Hero.tsx`
- Example content and defaults: `data.ts` (look for hero/title fields)

**What you can safely change**
- Headline and subheadline text.
- Primary/secondary CTA labels and destination URLs.
- Trust stats and small proof numbers (edit in `data.ts`).
- Swap the mock dashboard image in `/public` or configure the chart component.

**Example snippet**
Change headline and CTA URL in `components/Hero.tsx`:
```diff
- <h1>CryptoVault Pro | The Future of Institutional Trading</h1>
+ <h1>YourBrand — Institutional‑grade Crypto Trading</h1>

- <a href="/signup" className="btn btn-primary">Create Free Account</a>
+ <a href="https://app.yourbrand.com/signup" className="btn btn-primary">Create Free Account</a>
```

---

## PAGE 5 – Markets & Features Sections

**Where to find it**
- Markets: `components/MarketBoard.tsx` and `data.ts` (look for `MARKETS` or similar arrays).
- Features: `components/Features.tsx` and `data.ts` (`FEATURES` array).

**What you can safely change**
- Add or remove market rows in `data.ts`.
- Rename headings and edit feature text.
- Add or remove feature cards (4–8 recommended).

**Example snippet**
```js
// data.ts
export const MARKETS = [
  { name: 'Bitcoin', symbol: 'BTC/USD', price: '34,500', change: '+2.3%' },
];
```

---

## PAGE 6 – Security & Trust Sections

**Where to find it**
- Security content: `components/Features.tsx` (look for 'Bank-Grade Security') and `data.ts` for related items.
- Press/logo strip: components that render logos and `/public/logos/` for assets.

**What you can safely change**
- Edit short security bullets and descriptions in `data.ts` or `components/Features.tsx`.
- Replace or hide press logos in `/public/logos/`.
- Update counters and metrics in `data.ts` (keep realistic placeholders).

**Example snippet**
```diff
- '2M+ users'
+ '10k+ beta users'
```

---

## PAGE 7 – Testimonials & Social Proof

**Where to find it**
- Testimonials data: `data.ts` (see `TESTIMONIALS`).
- UI component: search `/components` for the testimonial UI.

**What you can safely change**
- Replace quotes and avatar files (store avatars in `/public/avatars/`).
- Update names, roles, and associated company titles in `data.ts`.

**Example snippet**
```js
// data.ts
{ id: 2, name: 'Sarah Johnson', role: 'Chief Investment Officer @ BlockVenture', content: 'Their focus on air-gapped security and daily reserve audits sets a new standard.', rating: 5 }
```

---

## PAGE 8 – FAQ & Content Blocks

**Where to find it**
- FAQ data: `data.ts` (look for `FAQ` or `FAQItem`).
- Accordion UI: check `/components` for an accordion or FAQ component (search for 'faq' or 'accordion').

**What you can safely change**
- Add or remove Q/A pairs in `data.ts`.
- Duplicate a section by copying a component and wiring it into the layout in `App.tsx`.
- Hide a section by removing the component import and JSX from the main layout.

**Example snippet**
```js
// data.ts
{ question: 'How are funds secured?', answer: 'We use multi-layer security including HSMs and cold storage.' }
```

---

## PAGE 9 – Forms, CTAs & Integrations

**Where to find it**
- CTA buttons: `components/Hero.tsx` and shared `Button` component (if present).
- Forms: search components for `<form>` markup or `fetch('/api')` endpoints; form handlers live in component files.

**What you can safely change**
- Change CTA hrefs or click handlers to point at your signup flows or modals.
- Replace form endpoints with Mailchimp/Getform or your backend (use environment variables for secrets).
- Add simple event tracking by calling `gtag` from the CTA handler.

**Example snippet**
Change a form endpoint:
```diff
- fetch('/api/subscribe', ...)
+ fetch('https://api.getform.io/f/{your-form-id}', ...)
```
Add GA snippet to `index.html` head (replace with your ID):
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXX');</script>
```

---

## PAGE 10 – Performance, Responsiveness & Maintenance

**Where to find it**
- Build & preview scripts: `package.json` (`dev`, `build`, `preview`).
- Fonts & Tailwind tokens: `index.html` (inline `tailwind.config`) and `index.css`.
- Images: `/public` (optimize before swapping in custom assets).

**What you can safely change**
- Replace demo images with compressed WebP/AVIF assets.
- Preload and set `font-display: swap` for fonts used in `index.html`.
- Update `version` in `metadata.json` or `package.json` when publishing updates.

**Example snippet**
Preload a font in `index.html` head:
```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Manrope..." as="style">
```

---

## Support & Next Steps

- Where I saved this guide: `USER_GUIDE.md` at the project root.
- Want me to add this file to version control and create a PDF export? Reply and I’ll commit and/or export it for you. 

---

**Appendix: Quick dev commands**
```bash
# install
npm install
# dev server
npm run dev
# build
npm run build
# preview production
npm run preview
# deploy (Vercel example)
vercel --prod
```

**Notes for maintainers**
- If you changed Tailwind tokens inline in `index.html` (used for dev), create a `tailwind.config.js` for a production workflow.
- Keep `data.ts` as single source of truth for sample content; prefer editing there when possible to avoid touching component internals.

---

*If you want, I can:*  
- Commit `USER_GUIDE.md` to the project and create a PR ✅  
- Export to a printable PDF (10‑page layout with header/footers) ✅  
- Generate a condensed README section and a support FAQ snippet for your product page ✅

Tell me which follow‑up you'd like and I’ll proceed — I can also run a quick QA pass and update the doc inline with project file references.*