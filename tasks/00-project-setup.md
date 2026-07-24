# Task 00 — Project setup

## Goal
Scaffold a clean Astro + TypeScript static project that builds and deploys to Vercel, with i18n
routing, the supplied brand assets in place, Manrope self-hosted, brand tokens wired, a base layout
with SEO slots, and a single config module. After this task, `npm run dev` serves a blank but
correctly-configured site with working locale routes.

## Read-first
`../DECISIONS.md` (stack, routes, WhatsApp #), IMPECCABLE §24–27, `brand/brand-tokens.css`.

## Steps
1. `npm create astro@latest` → **Empty**, **TypeScript (strict)**. Add integrations:
   `@astrojs/sitemap`, and the Vercel adapter (`@astrojs/vercel` static) — or keep `output: 'static'`
   and let Vercel auto-detect. Add `astro-icon` (or import Lucide SVGs directly). No UI framework
   needed; use `.astro` components + tiny vanilla `<script>` islands.
2. **i18n routing** in `astro.config.mjs`:
   ```js
   i18n: {
     defaultLocale: 'en',
     locales: ['en', 'de', 'tr'],
     routing: { prefixDefaultLocale: false } // en at /, de at /de/, tr at /tr/
   },
   site: 'https://alacore.net'
   ```
3. **Folders:**
   ```
   src/
     layouts/Layout.astro
     components/{brand,layout,sections,chat,forms,ui}/
     pages/            # en; de/ and tr/ mirror it (or generate via getStaticPaths)
     content/          # site-copy source (task 09)
     styles/{tokens.css, base.css}
     lib/{config.ts, i18n.ts, whatsapp.ts}
   public/{brand,orbit,fonts}/
   ```
4. **Assets:** copy from `../ala-core-website-assets/`:
   - `logos/*.svg` → `public/brand/`  (horizontal light/dark, mark light/dark, favicon)
   - `visuals/core-orbit-hero.svg` → `public/orbit/core-orbit-hero.svg`
   - `logos/favicon-32.png`, `favicon-192.png`, `favicon-512.png` → `public/` + a `site.webmanifest`.
   Reference by path (SVGs are drop-in / still updating). Do **not** inline the logo mark.
5. **Fonts:** install `@fontsource/manrope` (weights 400/500/600/700/800) or self-host WOFF2 in
   `public/fonts/`. Preload the two most-used weights. Set `--ala-font` per `brand-tokens.css`.
6. **Tokens:** import `brand/brand-tokens.css` values into `src/styles/tokens.css` and extend with the
   semantic light/dark theme layer from `DESIGN.md` (task 01 fills this in; here just wire the file).
7. **`src/lib/config.ts`:**
   ```ts
   export const SITE = 'https://alacore.net';
   export const EMAIL = 'support@alacore.net';
   export const WHATSAPP_NUMBER = '4917621812212'; // from DECISIONS.md — confirm before launch
   export const LOCALES = ['en','de','tr'] as const;
   export const DEFAULT_LOCALE = 'en';
   ```
8. **`Layout.astro`:** `<html lang>` from locale, `<head>` SEO slots (title, description, canonical, OG,
   hreflang alternates — filled per page in task 10), theme bootstrap inline script (read
   localStorage/OS pref, set `data-theme` before paint to avoid flash), semantic `<header>/<main>/
   <footer>` landmarks, skip-link.
9. **`vercel.json`:** security headers (`X-Content-Type-Options`, `Referrer-Policy`,
   `Strict-Transport-Security`) + long cache for `/fonts`,`/brand`,`/orbit`,`/_astro`. Pretty URLs are
   native — no `cleanUrls` needed.
10. Add `robots.txt` (allow, point to sitemap). Scripts: `dev`, `build`, `preview`.

## Files
`astro.config.mjs`, `tsconfig.json`, `package.json`, `vercel.json`, `src/layouts/Layout.astro`,
`src/lib/config.ts`, `src/lib/i18n.ts`, `src/styles/{tokens,base}.css`, `public/**`, `robots.txt`,
`site.webmanifest`.

## Acceptance
- `npm run dev` serves `/`, `/de/`, `/tr/` (blank OK) with correct `<html lang>`.
- `npm run build` succeeds; favicons + manifest resolve; fonts load; no console errors.
- Theme bootstrap sets `data-theme` with no flash; brand SVGs load from `public/`.

## Done-when
Build + dev both green, assets in place, config + layout committed.
