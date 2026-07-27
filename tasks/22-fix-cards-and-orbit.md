# Task 22 — FIX: broken reveal cards + clipped hero orbit

Bug-fix pass. Two real defects shipped in the `00–20` build. Reported on Solutions, but the card bug is
**systemic** (same code in Industries + shared components). Fix the root cause, not just Solutions.

## A. Reveal cards render broken (Solutions, Industries, shared)

### A1. Expanded body is trapped in a narrow right column
`SolutionsCatalog.astro`, `IndustryCatalog.astro`, `CapabilityCatalog.astro`, and `RichRow.astro` all
lay the card out as `grid-template-columns: 1fr auto` and put the `<details>` (summary **and** its
expanded body) in the **second `auto` column**. On desktop the whole rich body (lists, meta, pills)
is crammed into the skinny toggle column → overflowing / broken layout.

**Fix — make the reveal full-width, and make the header the trigger.** Restructure each card so
`<details>` wraps the card, `<summary>` is the full-width header, and the body is a full-width block
below it:
```
<article class="card">
  <details class="card__disclosure">
    <summary class="card__header">        <!-- full width; flex: title+summary grow, chevron at end -->
      <div class="card__heading"><h3>…title…</h3><p>…summary…</p></div>
      <svg class="card__chevron">▾</svg>
    </summary>
    <div class="card__body">…full-width lists / meta / pills…</div>
  </details>
</article>
```
- `details, summary, .card__body { display: block; width: 100% }`. Remove the `1fr auto` grid that
  wraps the disclosure. `summary` = `display:flex; justify-content:space-between; align-items:flex-start`
  (`list-style:none` + hide the default marker). Chevron rotates on `[open]`.
- The **whole header** toggles (native click + keyboard), not a disconnected 44px chevron.
- Per `tasks/19`: also open on **hover + focus** on pointer devices (small island: `mouseenter`/
  `focusin` → open, `mouseleave`/`focusout` → close unless click-pinned), keep tap/click/keyboard as the
  baseline; dismissible with Esc. Reduced-motion → no height animation jank (instant/opacity).

### A2. Undefined token `--text-base`
`--text-base` is **not defined** in `tokens.css` (the scale uses `--text-md`). It's used in
`SolutionsCatalog`, `IndustryCatalog`, `RichRow`, `CapabilityCatalog`, `WorkCard`, `WorkTeaser`,
`ProductCard`, `work.astro`, `how-we-work/index.astro` (+ `tr/` copies).
**Fix:** replace every `var(--text-base)` → `var(--text-md)`. (Optionally add a `--text-base` alias in
`tokens.css`, but standardizing on `--text-md` matches the working sections like `WhatWeBuild`.)

### A3. Token consistency
Working sections use the semantic set `--text` / `--text-muted`. The reveal cards mix in
`--text-primary` / `--text-secondary`. Both are defined so it's not fatal, but standardize the card CSS
on `--text` (headings) and `--text-muted` (body/secondary) for consistency, in both themes.

### A4. Prefer one shared component
`RichRow.astro` is the intended shared reveal card (`tasks/19`). Where `SolutionsCatalog` /
`IndustryCatalog` / `CapabilityCatalog` duplicate its markup, refactor them to use `RichRow` so this
bug can't reappear in four places. Then align content to `tasks/21` (theme = one card, each item has a
plain "how it works") and `tasks/20` (Solutions tech layer opens in a **pop-up dialog**, not inline).

## B. Hero orbit feels "cut off"
`CoreOrbit.astro` now spins each `<ellipse>` a full 360°. The largest rings have `rx` up to **455**
around `cy=250`, so during rotation they sweep to `y ≈ 250 ± 455` (−205…705) — far outside the
`viewBox="0 0 900 500"`, which the SVG clips top/bottom. That's the cropped look.

**Fix (do 1, plus 2 or 3):**
1. **Give it vertical room** — enlarge the viewBox so a rotating ring fits: e.g.
   `viewBox="0 -160 900 820"` (re-centres, adds height above/below); the element renders taller
   (≈1.1:1) — the "more height" the user wants. Adjust `.core-orbit { max-width }` / add a `min-height`
   on the hero visual so it doesn't shrink.
2. **and/or** animate a subtle rotation of the whole `.core-orbit__rings` **group** (or reduce the
   largest `rx`/`ry`) instead of spinning each wide ellipse independently — keeps the composition
   centred and in-frame.
3. **and/or** `.core-orbit__svg { overflow: visible }` so rings aren't clipped by the SVG box — but then
   ensure the hero visual has padding/space so the orbit doesn't overlap the headline text.
- Keep `preserveAspectRatio="xMidYMid meet"`, the two-A mark, and reduced-motion (static frame must also
  be uncropped). The supplied `visuals/core-orbit-hero.svg` is "still updating" — apply the fix to the
  component, not by hand-editing the mark.

## Verify
- `npm run build && npm run preview`. Open `/solutions` and an industry page at **375 / 768 / 1440**:
  expanded card bodies are **full-width** and readable, no overflow, tokens resolve (no invisible/
  mis-sized text), hover/focus/tap + keyboard all reveal, both themes.
- Home hero: the orbit has room, rotates without clipping at all breakpoints, doesn't overlap the
  headline; reduced-motion frame is uncropped.
- Screenshot before/after into `tasks/11` notes.

## Done-when
Reveal cards render full-width and correct across Solutions + Industries (shared `RichRow`), `--text-base`
gone, orbit uncropped with more height; committed.
