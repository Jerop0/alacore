# Task 27 — RTL + Arabic impeccable redesign

## Goal
Make `/ar/` a **designed** RTL experience, not just `dir="rtl"`: a real Arabic typeface, Arabic-correct
type rules, a numeral policy, and a full directional-mirroring audit — while **preserving the existing
visual identity** (clean white body, blue accent, calm/premium). This is an RTL extension of the system,
not a re-theme.

## Read-first
`tasks/25-arabic-preferences.md` (canonical), `ala-core-website-assets/IMPECCABLE.md` (§20 multilingual),
`DESIGN.md`, `PRODUCT.md`, `src/styles/{tokens.css,base.css,rtl.css}`, `src/layouts/Layout.astro`.

## Steps
1. **Arabic typeface.** Self-host the chosen face (from `tasks/25`) as a subset woff2 in `public/fonts/`;
   add an `@font-face` next to the Manrope block (`tokens.css:87+`); wire `--ala-font-arabic` and apply via
   `html[lang="ar"] body { font-family: var(--ala-font-arabic); }`. Preload the Arabic subset in
   `Layout.astro` **only** for `ar` (don't add Arabic preloads to EN/DE/TR).
2. **Arabic type rules** under `[lang="ar"]` / `[dir="rtl"]`: remove `text-transform: uppercase` (meaningless
   in Arabic — the hero H1) and any negative `letter-spacing`; increase heading/body `line-height` for Arabic
   legibility; re-check `text-wrap: balance/pretty`.
3. **Numerals** per `tasks/25`: if Eastern (٠-٩) is chosen, add a small formatting helper for prices, stats,
   step numbers, and dates; otherwise keep Western and confirm no mixed rendering.
4. **Directional mirroring audit** — extend `src/styles/rtl.css`: mirror directional glyphs (chevrons, CTA
   "→" arrows, accordion carets); **keep un-mirrored** the logo/emblem, the German separator, and any
   inherently-LTR content. Verify header, footer, mobile drawer, accordions, process-step connectors, all
   card grids, chat/WhatsApp panels, and floating actions read correctly in RTL.
5. **Motion** respects RTL direction and `prefers-reduced-motion`. **Dark mode** parity on `/ar/`.

## Files
`src/styles/{tokens.css,base.css,rtl.css}`, `src/layouts/Layout.astro`, `public/fonts/`, targeted component
styles as needed.

## Acceptance
- Arabic renders in the chosen designed face (no system-fallback, no tofu); Arabic subset preloaded only for `ar`.
- No uppercase transform or negative tracking on Arabic; comfortable Arabic line-height.
- Numerals follow the chosen policy consistently.
- Directional icons mirror; logo/separator do not; no broken mirroring in any component.
- Identity preserved (white body, blue accent); dark mode + reduced-motion pass.

## Done-when
`/ar/` is typographically and directionally designed, identity-preserving; screenshots at
320/375/430/768/1024/1280/1440 (light+dark) recorded; committed.
