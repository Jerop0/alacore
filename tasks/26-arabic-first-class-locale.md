# Task 26 — Arabic as a reviewed first-class locale (retranslate EN→AR)

## Goal
Every page and control resolves in **correct, reviewed Arabic** with **zero English leakage** and full
key parity with `en`. The Arabic added in a prior session is a **draft to review and refine**, not
authoritative.

## Read-first
`tasks/25-arabic-preferences.md` (canonical), `tasks/09-content-i18n.md`, `tasks/16-i18n-audit.md`,
`src/content/*.json`, `src/content/REVIEW.md`, `src/lib/{i18n.ts,page.ts,config.ts}`, IMPECCABLE §20.

## Steps
1. **Kill hard-coded English.** Move every hard-coded user-facing string into the content model with
   `en/de/tr/ar` values — these currently leak into AR (and DE/TR): `aria-label`s and `alt`s in
   `src/components/layout/{SiteHeader,MobileMenu,SiteFooter}.astro`, `src/components/ui/ThemeToggle.astro`,
   `src/components/sections/{IndustriesTeaser,CoreOrbit,RichRow,WhatWeBuild,AnyIdea,ExampleSolutions}.astro`
   (incl. the industry-card image alts + the "illustration" alt suffixes). Grep for literal English in
   `.astro` and fix all.
2. **Review & refine the AR draft** in `src/content/*.json` against `tasks/25` (register, tone, brand-term
   policy) and a plain-language **Arabic glossary** (extend `tasks/14`'s glossary): keep the same term for
   the same concept across pages (Solutions/Industries/Products/etc.). Fix anything machine-stiff.
3. **Key-parity guard.** Extend the audit script (`scripts/audit-i18n.mjs` / the `tasks/16` check) so `ar`
   must have the **same keys** as `en`; a missing/empty AR value **fails the build**, never silently falls
   back to English at render.
4. **Log for sign-off.** Add an **Arabic table** to `src/content/REVIEW.md` listing every authored AR string
   (key · EN · AR · status). Only reviewed copy ships.

## Files
`src/content/*.json`, the leaking components above, `src/content/REVIEW.md`, `scripts/audit-i18n.mjs`.

## Acceptance
- No hard-coded or English-leaked text on any `/ar/` route or control (nav, footer, mobile menu, WhatsApp
  flow, Ask ALA, contact form, alts, aria, placeholders, meta).
- `ar` key-parity passes; build fails on a missing/empty AR key.
- `REVIEW.md` lists all AR strings; terminology consistent per glossary.

## Done-when
Arabic content complete, reviewed, parity-checked, logged; committed.
