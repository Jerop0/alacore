# Task 32 — Hero headline + full-width image + nav logo

Refines the hero/nav from `tasks/29`. Where this task and `29` differ, **this task wins**.

## Goal
1. **Hero headline on one line, under the logo.** In the hero section, the headline
   **"One partner for all your tech solutions."** reads as a single sentence on **one line**, placed
   **under the logo**. Keep it one line on desktop where space allows; allow controlled wrapping only on
   small screens. Responsive `clamp()`, not excessively tall. Copy stays in the content model
   (`site-copy.json` hero) for all locales — do not hardcode.
2. **Hero image full screen width.** The reception-wall hero image spans the **full screen width**
   (edge to edge, `100vw` / full-bleed), covering the hero area — not constrained inside the centered
   container. `background-size: cover`, `background-position: center`, no stretching.
3. **Nav logo = the transparent logo.** Use
   `ala-core-website-assets/logos/newassets/ala-core-horizontal-white-removebg-preview.png` (transparent
   background) for the header/nav logo. Move it into `public/brand/`, reference it in
   `src/components/layout/SiteHeader.astro`, keep it transparent (no box/card behind it), correct aspect
   ratio (no squish), sharp on the dark navy header.

## Files
`src/components/sections/Hero.astro`, `src/content/site-copy.json` (hero headline), `public/brand/*`,
`src/components/layout/SiteHeader.astro`.

## Acceptance
- Hero headline reads "One partner for all your tech solutions." on **one line** (desktop), under the logo.
- Reception image is **full screen width**, covering the hero, no distortion.
- Nav uses the transparent logo, background transparent, correct aspect, crisp/visible on navy.
- Committed and pushed (see `tasks/31`); the logo asset resolves `200` (no 404).

## Done-when
Hero headline is one line under the logo, hero image is full-screen-width, nav uses the transparent logo;
verified responsive; committed + pushed.
