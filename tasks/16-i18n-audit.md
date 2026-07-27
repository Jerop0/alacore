# Task 16 — Language audit (EN / DE / TR completeness + fit)

## Goal
Verify **every page and control** is fully and correctly localized in **English, German, Turkish** —
nothing left in English, no missing keys, correct characters, and layout that survives all three
languages. This is the verification counterpart to `tasks/09` (which authors the copy).

## Read-first
`tasks/09-content-i18n.md`, `content/site-copy.json`, `content/REVIEW.md`, IMPECCABLE §20.

## Checks

### 1. Completeness (no gaps, no English leakage)
- **Key parity:** the `en`, `de`, `tr` content sets have the **same keys**. Add a build-time check (a
  small script or test) that fails if any key exists in one locale but not another.
- **No silent fallback to English:** a missing DE/TR value must surface as a visible dev warning / build
  error, not render the English string. Confirm nothing falls through.
- **No hard-coded text:** grep the codebase for literal user-facing strings in `.astro`/components; all
  visible text + `aria-label`s + `alt` + placeholders + button/nav/footer labels + form errors + chat
  copy + meta (title/description/OG) come from the content model.
- Walk **every route** in all 3 locales: `/`, `/solutions`, `/industries` (+7), `/for-tech-teams`,
  `/about`, `/contact`, `/products`, `/work` — plus header, footer, mobile menu, WhatsApp flow, Ask ALA,
  contact form. Every string is translated.

### 2. Correctness
- **German:** nouns capitalized, natural phrasing (not literal), ß/ä/ö/ü correct; `<html lang="de">`.
- **Turkish:** dotted/dotless **İ/ı**, ş, ğ, ç, ö, ü render correctly (watch the UPPERCASE hero — Turkish
  "İ"); no mojibake/encoding issues; `<html lang="tr">`. Files saved UTF-8.
- **Consistency:** the same term is translated the same way across pages (follow the plain-language
  glossary in `tasks/14`); numbers/dates/currency use the locale (`Intl`).
- **hreflang + canonical** per route are correct for en/de/tr + `x-default`.

### 3. Layout fit (localized text must not break the design)
- German labels run ~30–40% longer — verify **no overflow / clipping / broken wrapping** in: top nav,
  buttons/CTAs, cards (What We Build, industries, products, work), accordion `<summary>` rows, process
  steps, footer columns, chat bubbles/chips, form labels.
- Test at **320 / 375 / 768 / 1440** in each language; the UPPERCASE hero H1 must not overflow at 320px
  in any language. No horizontal scroll.

### 4. Persistence & switching
- Language persists across page navigation **and** the Ask ALA session (localStorage).
- The switcher changes only the language and **keeps the current route** (`/industries/hospitals-clinics`
  → `/de/industries/hospitals-clinics`), updates `<html lang>` + hreflang.

### 5. Sign-off
- Cross-check `content/REVIEW.md`: every newly authored DE/TR string is listed and marked
  human-approved. Unreviewed strings are flagged, not shipped.
- Record a per-locale ✓/✗ pass table for each route here.

## Acceptance
- Key-parity check passes (en=de=tr keys); build fails on a missing/empty key.
- No hard-coded or English-leaked text in DE/TR on any route or control.
- TR/DE characters render correctly; correct `lang`/hreflang; consistent terminology.
- No overflow/clipping in any language at the tested widths.
- Language persists + switcher preserves route; `REVIEW.md` fully approved.

## Done-when
All three languages verified complete, correct, and layout-safe on every page; results recorded;
committed.
