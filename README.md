# ALA CORE Website

Professional, responsive, multilingual (**EN / DE / TR**) marketing site for **ALA CORE** — a B2B
technology partner. Written for business owners, not engineers: clear outcomes, no jargon. Technical
depth lives on one page (*For Tech Teams*).

> **One partner. Every business solution.**

## Status

Rebuild in progress. This repo currently holds the **planning + instruction layer**; the site itself
is built by working through [`tasks/`](tasks/) in order.

## Read these first (in order)

1. [`DECISIONS.md`](DECISIONS.md) — locked stack/architecture decisions + source-of-truth hierarchy.
2. [`ala-core-website-assets/IMPECCABLE.md`](ala-core-website-assets/IMPECCABLE.md) — approved brand,
   design, content, and route standard (**canonical**).
3. [`ala-core-website-assets/brand/build-spec.md`](ala-core-website-assets/brand/build-spec.md) — build spec.
4. [`DESIGN.md`](DESIGN.md) — visual system (tokens, type, components, motion).
5. [`PRODUCT.md`](PRODUCT.md) — audience, voice, strategy.
6. [`tasks/README.md`](tasks/README.md) — how to build, then tasks `00 → 12`.

## Stack

- **Astro + TypeScript**, static output — pretty URLs, minimal JS, fast Core Web Vitals.
- **Manrope** (self-hosted subset), **Lucide** line icons, supplied brand **SVGs**.
- **No backend**: contact form → prefilled WhatsApp message; **Ask ALA** assistant runs client-side.
- Hosting: **Vercel**, domain **alacore.net**.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build && npm run preview
```

## Routes

`/` · `/solutions` · `/industries` (+ 7 industry pages) · `/for-tech-teams` · `/about` · `/contact`,
each localized under `/de/…` and `/tr/…`. See `DECISIONS.md` for the full list.

## Contact

- Email (the only public one): **support@alacore.net**
- WhatsApp: configured in `src/lib/config.ts` (reused from the previous site — confirm before launch).

## Assets

Brand assets are supplied in [`ala-core-website-assets/`](ala-core-website-assets/) (logos, favicons,
`core-orbit-hero.svg`, brand tokens, homepage copy). Logo/orbit SVGs are **still being updated** —
treat them as drop-in; replacing a file needs no code change.

## Legacy

The previous single-page vanilla site is archived in [`legacy/`](legacy/) for reference (its chatbot
rules, i18n patterns, and WhatsApp deep-link builder are useful to port). It is **not** deployed.
