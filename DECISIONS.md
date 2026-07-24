# ALA CORE — Build Decisions

Locked decisions for the ALA CORE website rebuild. This file is the **architecture source of truth**.
Read it before any code. It records where we deliberately override the approved brand pack, and why.

## Source-of-truth hierarchy

1. **`ala-core-website-assets/`** (canonical for brand, visual system, copy, routes):
   `IMPECCABLE.md`, `brand/build-spec.md`, `brand/brand-tokens.css`, `content/site-copy.json`, and the
   supplied logo / orbit / favicon SVGs. **Never redraw the logo or restyle the brand.**
2. **`DECISIONS.md`** (this file) — overrides IMPECCABLE.md **only** on stack + architecture (below).
3. **`DESIGN.md`** — the visual system, reconciled to the pack. Companion, not an override.
4. **`PRODUCT.md`** — strategy/voice/audience. Companion, not an override.

Conflict rule: on **brand / tokens / visual / copy / routes**, the asset pack wins. On **framework /
build / backend / hosting**, this file wins. If still unclear, ask the user — do not guess.

## Locked decisions

### 1. Stack — Astro + TypeScript (static), deployed to Vercel
Overrides IMPECCABLE.md §27 (which assumed React + Vite + TypeScript + Express).
- **Why:** the user's priorities are *simple, performant, pretty URLs, professional*. Astro ships
  near-zero JS, gives file-based pretty routes and per-page SEO/hreflang out of the box, and still
  honors 100% of the pack's brand, design, copy, and route structure. Only the framework differs.
- Keep everything else from §27 in spirit: component boundaries, Lucide icons, CSS variables from
  `brand-tokens.css`, reviewed i18n (EN/DE/TR). Use Astro islands only where interactivity is required
  (header menu, theme toggle, Ask ALA, WhatsApp flow, contact form).

### 2. No backend — client-only forms + chat
Overrides IMPECCABLE.md §21 (Express contact) and the §27 Express/backend layer.
- **Contact form** builds a **prefilled WhatsApp message** (`wa.me`) — the old-site pattern the user
  asked to keep. No server, no email provider, no secrets.
- **Ask ALA** is a **fully client-side guided flow** (IMPECCABLE §18): opening question + 4 choices →
  ≤3 follow-ups → 1–2 plain-language recommendations → offer WhatsApp or the contact form. No LLM, no
  proxy. Never quotes prices or delivery dates.
- The only public email shown anywhere is exactly **`support@alacore.net`**.
- *Upgrade path (not now):* if real email delivery or an AI Ask ALA is wanted later, add Vercel
  Serverless Functions (`/api/*`) — isolated, no rewrite required.

### 3a. Products & Work — dedicated pages + footer only (no homepage teasers, not in top nav)
Added 2026-07-24 (teasers removed per task 18). Two sections: **Products** (`/products`, apps ALA CORE
owns) and **Work** (`/work`, projects done for clients). Primary nav stays lean (6 items); both are
reached via the **footer** ("Company" column) only — **no homepage teasers**. Instead the homepage
carries an **"any idea → reality"** positioning band (task 18). Localized `/de/…`, `/tr/…`.
- **Work is real-only.** No fake client names, logos, testimonials, awards, or invented metrics
  (IMPECCABLE §2). Distinct from the homepage Example Solutions (illustrative scenarios). Built now as
  an honest, data-driven structure (`work.json`) with a graceful "coming soon / talk to us" empty state
  until real, permissioned cases exist.
- **Products** are data-driven (`products.json`) with honest `live | beta | coming-soon` status.
- **Footer** uses a **grouped-columns** layout: brand block left; columns Explore / Company / Connect;
  bottom bar with copyright · theme toggle · EN/DE/TR.
- **How We Work** (`/how-we-work`) is a dedicated page expanding the homepage process strip — reached
  from that strip, the footer (Company column), and About; **not** in the primary nav (may fold into
  About if preferred). See `tasks/17-how-we-work.md`.
- See `tasks/13-products-and-work.md` (+ task 02 footer, task 03 teasers).

### 3. Industries — 1 overview page + 7 dedicated pages
Confirms IMPECCABLE.md §19 / build-spec routes (chosen over a single tabbed page) for SEO + depth.
- `/industries` (overview, tab/card pattern) plus:
  `/industries/restaurants-cafes`, `/industries/hospitals-clinics`, `/industries/schools-training`,
  `/industries/companies-offices`, `/industries/warehouses-logistics`, `/industries/retail-ecommerce`,
  `/industries/factories-manufacturing`. Localized variants under `/de/…` and `/tr/…`.

### 4. WhatsApp number — reuse old-site value, single config constant
- Value: **`+49 176 218 122 12`** (from the previous site; the user said "keep the old WhatsApp").
- Store once in `src/lib/config.ts` as `WHATSAPP_NUMBER`, digits only for `wa.me`:
  `+49 176 218 122 12` → `4917621812212`. Never hard-code it in multiple places, never invent a number.
- **⚠ Confirm with the user** this number is still current before production deploy.

### 5. Solutions absorbs "For Tech Teams" + rich-card interaction
Added 2026-07-24.
- **Merge:** no standalone `/for-tech-teams`. `/solutions` speaks to **business people first (detailed,
  plain), then a tech layer** (technology, platforms, techniques, code) + a `#for-tech-teams` overview.
  Primary nav drops to **5 items** (Home · Solutions · Industries · About · Contact). Footer keeps a
  "For tech teams" link → `/solutions#for-tech-teams`. **301-redirect** `/for-tech-teams` → `/solutions`
  (localized too). See `tasks/20`.
- **Jargon rule (updated):** engineering terms are allowed **only** in the Solutions tech layer +
  `#for-tech-teams` overview. Business layer and all other business pages stay jargon-free.
- **Card interaction** (Industries + Solutions): full-width **rich rows**, business summary always
  visible, deeper info on **hover + focus + tap** (never hover-only), **pop-up dialog** for heavy
  content, **no "Learn more"**, **no collapse for one-liners**. Decided via /impeccable + /frontend-design.
  See `tasks/19` (supersedes the interaction spec in `tasks/14`).

## i18n & routing
- Locales: `en` (default, no prefix at `/`), `de` (`/de/…`), `tr` (`/tr/…`). Astro i18n routing +
  hreflang alternates. Language switch preserves the current route and persists to `localStorage`.
- Copy is **reviewed**, never machine-translated at runtime. Homepage strings come from
  `content/site-copy.json`; all newly authored strings for the other pages are logged in
  `content/REVIEW.md` for human sign-off.

## Hosting
- **Vercel**, domain **alacore.net**. `@astrojs/vercel` (or static) adapter. `vercel.json` for
  security + cache headers. Pretty URLs are native to Astro's static output — no `cleanUrls` hack.

## Assets
- Import the supplied SVGs into `public/` and reference by path; the logo/orbit SVGs are **still being
  updated**, so treat them as drop-in — final versions replace the files with no code change.
