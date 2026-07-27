# Task 25 — Arabic locale preferences (decisions doc — USER FILLS)

## Goal
A single canonical decisions file that drives the Arabic work in tasks **26–28**. The user fills the
choices below; opencode treats this file as **read-first authoritative** for AR register, numerals,
typeface, brand terms, and tone. Do not start 26–28 until this is filled (defaults apply if left blank).

## Locked (already decided — do not change)
- Arabic is a **4th first-class locale**; EN stays the default; EN/DE/TR are kept.
- `/ar/` is **hidden from the switcher** (reachable by URL only) — keep `VISIBLE_LOCALES` excluding `ar`.
- `<html lang="ar" dir="rtl">`; `hreflang="ar"` stays.

## Decisions (edit the ▶ lines)
1. **Register / dialect** — ▶ *Modern Standard Arabic* | Gulf | Egyptian | other: ____
2. **Numerals** — ▶ *Western 0-9* | Eastern ٠-٩.
   Applies to prices, stats, step numbers, dates.
3. **Arabic typeface** (self-hosted, subset) — ▶ *Alexandria* (already in
   `legacy/assets/fonts/alexandria-arabic.woff2`) | IBM Plex Sans Arabic | Cairo | Tajawal | Noto Sans Arabic.
   Recommendation: a geometric-humanist sans that pairs with Manrope.
4. **Brand terms** — ▶ *keep `ALA CORE`, `WhatsApp`, product names (`ALA Menu`…) in Latin* |
   transliterate to Arabic.
5. **Tone** — ▶ *warm, plain, second-person (matches PRODUCT.md "capable, clear, calm")* |
   formal MSA.
6. **Anything else** (glossary preferences, terms to avoid, honorifics): ____

## Files
`tasks/25-arabic-preferences.md` (this file).

## Done-when
User has filled the decisions; 26–28 can proceed against them.
