# Task 29 — Header + hero rebuild with supplied brand assets

## Goal
Replace the homepage header logo and the orbit hero with the **supplied brand assets**: the transparent
white horizontal logo in the dark navy header, and the **reception-wall photo** as the full hero
background with the headline/subtitle/buttons over the darker glass-office area on the left. Match the
supplied layout reference while staying a real responsive website — not a flattened screenshot.

## Read-first
`ala-core-website-assets/logos/newassets/` (the 4 supplied assets), `ala-core-website-assets/IMPECCABLE.md`,
`DESIGN.md`, current `src/components/layout/SiteHeader.astro`, `src/components/layout/MobileMenu.astro`,
`src/components/sections/Hero.astro` (+ `CoreOrbit.astro`), `src/components/layout/FloatingActions.astro`,
`src/styles/tokens.css`. Global non-negotiables in `tasks/README.md`.

## Supplied assets (map + destinations)
Source folder: `ala-core-website-assets/logos/newassets/` (currently loose — **must be moved into `public/` and committed**, see Step 0).
- **White horizontal logo** — `ChatGPT Image Jul 26, 2026, 05_10_01 PM.png` (transparent bg; white emblem,
  blue circular accent, black/red/yellow vertical German separator, white "ALA CORE", blue in the "O",
  "TECHNOLOGY PARTNER" light-gray). → header logo.
- **Reception-wall photo** — `ChatGPT Image Jul 27, 2026, 04_00_34 AM (2).png` (glass office left/darker,
  white wall with mounted black logo right). → hero background.
- **Layout reference** — `ChatGPT Image Jul 27, 2026, 04_00_34 AM (1).png` → **reference only, do not ship.**
- **Emblem/light variant** — `ChatGPT Image Jul 27, 2026, 04_00_35 AM (3).png` (fallback only).

## Brand rules (non-negotiable)
- **Do not redraw, reinterpret, or recolor** the supplied logo. Preserve exact proportions/spacing.
- Header logo must show: white emblem · blue circular accent · thin vertical German separator
  (**black → red → yellow, top to bottom**) · **white** "ALA CORE" wordmark (never black) · blue accent
  in the "O" · "TECHNOLOGY PARTNER" white/very-light-gray · **fully transparent** background.
- **Black** logo lettering only on bright/white surfaces (the mounted wall logo stays black — it's on the
  white wall). Do **not** recreate the wall logo with HTML text; do **not** put a dark panel behind it.
- Logo assets stay **SVG or transparent PNG**; **never rasterize an available SVG.** For the compact
  mobile mark, prefer the existing SVG `public/brand/ala-core-mark-light.svg` (don't rasterize it).

## Steps

### 0. Get the assets into the repo and served (they are not "uploaded" yet)
The new assets live only in `ala-core-website-assets/logos/newassets/` — nothing under `public/` references
them, so they 404 on the site. For **every** asset this task ships:
1. Copy into a served path with a clean name: white logo → `public/brand/ala-core-horizontal-white.png`;
   reception photo → `public/images/hero/reception-wall.*`.
2. Optimize the photo to **WebP + AVIF** (sharp), plus a **dedicated mobile crop** that keeps the mounted
   wall logo visible; keep the logo PNG lossless/transparent. Record intrinsic `width`/`height`.
3. Reference them from the components (Step 1–2).
4. **Commit and push** so they exist on the remote — then confirm each URL resolves (`curl` → `200`,
   correct `content-type`) locally and on `192.168.67.128:4321`. A referenced asset that 404s fails the task.

### 1. Header
- Keep the header **dark navy and clean**; do not make it taller. Replace the current logo
  (`SiteHeader.astro:20-28`) with the supplied transparent white horizontal logo — **no** white box/card/
  colored container behind it. Ensure the German separator is clearly visible between emblem and wordmark.
- Preserve every control: **Home · Solutions · Industries · About · Contact**, the **EN/DE/TR** switcher,
  the **theme** button, and the **"Talk to an expert"** CTA. Vertically center all of them on one row;
  consistent horizontal spacing across desktop widths.
- Mobile: use the compact SVG mark (or a compact horizontal logo) and collapse nav into the existing
  accessible `MobileMenu`.

### 2. Hero
- **Delete the orbit entirely:** remove `CoreOrbit` from `Hero.astro` (and stop importing it). No orbital/
  atom/floating-line illustration may remain.
- Use the reception photo as the **full hero background**: `width:100%`, `min-height: calc(100vh - <header-height>)`,
  `background-size: cover`, `background-position: center`, no stretching. Keep the mounted wall logo visible
  and unobstructed on the **right**. Provide the mobile crop so the wall logo is never awkwardly cut.
- **Overlay:** a subtle left→right dark gradient — left dark enough for readable white text, right mostly
  clear so the white wall + mounted logo stay bright. Do **not** darken the whole image; no heavy blur,
  vignette, glow, or noise.

### 3. Hero content (over the darker left glass-office area)
- **Headline (exact):** "One partner for every business solution." Bold, uppercase/near-uppercase display,
  `clamp()` sizing, not excessively tall; **one line** on large desktops where space allows; 2–3 balanced
  lines on smaller screens (`text-wrap: balance`). Must not overlap the wall logo.
- **Subtitle (exact):** "We build apps, websites, chatbots, and systems that make your business easier to
  run." Directly below the headline (no large gap), comfortable max-width, light-gray/white with strong contrast.
- **Buttons** directly below the copy, on one row (desktop): **"Explore solutions"** (primary blue filled)
  and **"Talk to an expert"** (secondary transparent/dark with light border). Equal height, consistent radius,
  clear hover + `:focus-visible`. Stack only on narrow mobile. Never above the headline.
- Copy still comes from the content model (`site-copy.json` `hero.*`) in all locales — do not hardcode.

### 4. Floating contact buttons
- Keep "Chat on WhatsApp" + "Ask ALA" fixed bottom-right, stacked vertically, consistent right/bottom
  spacing; they must **not** cover the mounted wall logo or reception desk. Slightly smaller on mobile.

## Responsive
Desktop: full-screen hero under the sticky header, left-aligned content, wall logo visible right, headline
one line when it fits. Tablet: smaller headline, keep the left overlay, nudge `background-position` so the
wall logo stays visible. Mobile: compact header logo, collapsed menu, left-aligned text, wrapped headline,
stacked buttons, dedicated wall crop (never crop the wall logo without an intentional fallback).

## Accessibility & performance
Semantic HTML; accessible labels on nav, language selector, theme switch, WhatsApp, Ask ALA; visible
keyboard focus; respect `prefers-reduced-motion`; WebP/AVIF reception image with width/height (no layout
shift); logos stay SVG/transparent-PNG.

## Files
`src/components/layout/SiteHeader.astro`, `src/components/layout/MobileMenu.astro`,
`src/components/sections/Hero.astro`, `src/components/layout/FloatingActions.astro`,
`public/brand/*`, `public/images/hero/*`, `src/styles/tokens.css` (header-height var if needed),
optional `scripts/` for image optimization. Remove the `CoreOrbit` usage.

## Acceptance (final checks)
- Header wordmark **white**, not black; German separator present, order **black→red→yellow**; transparent
  logo bg; no container behind the logo; header not taller; all nav/controls preserved and aligned.
- Reception photo is the hero background; **no orbital illustration remains**; wall wordmark stays black;
  content on the left, buttons below the copy, headline reads exactly "One partner for every business solution."
- Every shipped asset is in `public/`, optimized, **committed & pushed**, and resolves `200` (no 404).
- Responsive at 320/375/430/768/1024/1280/1440 — headline one line on wide desktop, no overflow, no layout shift.
- a11y labels + focus + reduced-motion pass.

## Done-when
Header + hero rebuilt with the supplied assets, assets served from `public/` and pushed, responsive +
accessible, matching the reference; screenshots recorded; committed.
