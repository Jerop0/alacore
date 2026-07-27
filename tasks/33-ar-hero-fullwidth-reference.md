# Task 33 — /ar/ hero: full-width background image matching the reference

Builds on `tasks/29` + `tasks/32` (shared `Hero.astro`, so this applies to all locales, verified on `/ar/`).
Where this differs from `29`, **this task wins**. Reference: the second supplied hero image.

## Goal
Rebuild the hero as a **full-width background-image** layout (NOT a split text/image layout). Use the
ALA CORE office/reception image as the **full hero background**, with a dark gradient overlay on the text
side so text stays readable. Keep the Arabic content; match the reference visually.

## Requirements
- **Full-bleed background:** reception image covers the whole hero (full screen width), `background-size: cover`,
  `background-position: center`, no stretching. No split column.
- **Overlay:** dark gradient over the text side only (readable text); the wall/logo side stays bright.
- **Navbar:** sits over a dark transparent background at the top; logo visible; nav items, EN/DE/TR language
  buttons, theme button, and the **"تحدث إلى خبير"** button aligned cleanly on one row.
- **Hero text:** positioned over the image toward the lower area (lower-left / lower side as in the reference).
- **Main title — one line only:** `شريك واحد لكل حل تقني.` Must **not wrap on desktop**. Update the AR
  `hero.title` in `src/content/site-copy.json` to this exact string.
- **Subtitle:** smaller, sits under the title, wraps normally.
- **Buttons below:** primary blue **"استكشف الحلول"** and secondary outlined **"تحدث إلى خبير"**.
- **Floating buttons:** keep WhatsApp + Ask ALA at right/bottom like the reference.
- Content stays from the content model (no hardcoded strings); RTL correct.

## CSS direction
```css
.hero-title {
  white-space: nowrap;
  font-size: clamp(34px, 4vw, 56px);
  line-height: 1.1;
}
```
On small mobile screens **only**, allow wrapping if absolutely necessary.

## Files
`src/components/sections/Hero.astro`, `src/content/site-copy.json` (AR `hero.title`), hero/overlay styles,
`src/components/layout/SiteHeader.astro` (navbar-over-image), `src/styles/rtl.css` if mirroring needs it.

## Acceptance
- `/ar/` hero is a full-width background image with a readable dark gradient on the text side — no split layout.
- Navbar overlays the image at top; logo + nav + language + theme + "تحدث إلى خبير" aligned.
- Title `شريك واحد لكل حل تقني.` is **one line on desktop** (no wrap); subtitle wraps normally; buttons below.
- WhatsApp + Ask ALA float bottom/right; RTL correct; matches the reference.
- Committed + pushed (`tasks/31`); hero image resolves `200`.

## Done-when
`/ar/` hero matches the reference (full-width bg, one-line title, overlay, aligned navbar); verified at
desktop + mobile; committed + pushed.
