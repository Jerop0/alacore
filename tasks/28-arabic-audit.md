# Task 28 — Arabic audit (completeness + RTL fit)

## Goal
Verify `/ar/` is fully and correctly localized and RTL-designed on **every page and control** — the
verification counterpart to tasks 26–27 (mirrors `tasks/16` for Arabic).

## Read-first
`tasks/25-arabic-preferences.md`, `tasks/26`, `tasks/27`, `src/content/REVIEW.md`, IMPECCABLE §20.

## Checks
1. **Completeness** — `ar` key-parity with `en` (script passes); no silent English fallback; grep finds no
   hard-coded user-facing English on AR paths. Walk **every** route in AR: `/ar/`, `/ar/solutions`,
   `/ar/industries` (+ each industry), `/ar/for-tech-teams`, `/ar/about`, `/ar/contact`, `/ar/products`,
   `/ar/work`, `/ar/how-we-work` — plus header, footer, mobile menu, WhatsApp flow, Ask ALA, contact form.
2. **Correctness** — `<html lang="ar" dir="rtl">`; correct `hreflang="ar"` + canonical per route; Arabic
   face renders (no tofu); numerals match `tasks/25`; UTF-8, no mojibake; consistent terminology (glossary).
3. **RTL layout fit** — at **320/375/430/768/1024/1280/1440**: no overflow/clipping, no mis-mirrored icons,
   directional glyphs point correctly, logo/German-separator NOT mirrored; nav, buttons, cards, accordions,
   process steps, footer columns, chat bubbles all hold. No horizontal scroll. Dark mode + reduced-motion pass.
4. **Sign-off** — every AR string in `REVIEW.md` marked human-approved; unreviewed strings flagged, not shipped.

## Steps
- `npm run build` (parity check green) → `npx astro dev --host` → screenshot each AR route at the widths
  above, light + dark; record a per-route ✓/✗ table in this file.

## Acceptance
- Parity green; zero English leakage; correct lang/dir/hreflang; face + numerals correct; no overflow or
  mis-mirroring at any width; `REVIEW.md` fully approved.

## Done-when
All AR routes verified complete, correct, and layout-safe; results table recorded here; committed.
