# Task 30 — Move "Industries We Help" directly after the hero

## Goal
On the **homepage only**, the **"Industries We Help"** section (`IndustriesTeaser`) becomes the **first
section after the hero**, ahead of "What We Build". Section order is the only change — no restyle, no
copy change, no new components.

## Read-first
`src/pages/index.astro` and its locale twins `src/pages/{de,tr,ar}/index.astro`;
`src/components/sections/IndustriesTeaser.astro`. Global non-negotiables in `tasks/README.md`.

## Steps
1. In **all four** homepage files (`src/pages/index.astro`, `src/pages/de/index.astro`,
   `src/pages/tr/index.astro`, `src/pages/ar/index.astro`) reorder the section components so the sequence is:
   `Hero → IndustriesTeaser → WhatWeBuild → AnyIdea → ExampleSolutions → ProcessSteps → WhyAlaCore → FinalCta`.
   (Current order has `WhatWeBuild → AnyIdea → IndustriesTeaser`; only `IndustriesTeaser` moves up.)
2. Keep every component's existing props exactly as they are (`locale`, `copy`). Do not drop the
   `locale` prop on `WhatWeBuild` (regression-prone — it must stay).
3. Change nothing inside `IndustriesTeaser.astro` itself; this is purely a page-composition reorder.
4. Verify the vertical rhythm still reads well — `IndustriesTeaser` sits in a `section--mist` band, so
   confirm two tinted bands don't now stack awkwardly against the hero; if they do, this is the only place
   a spacing tweak is allowed (do not restyle the section).

## Files
`src/pages/index.astro`, `src/pages/de/index.astro`, `src/pages/tr/index.astro`, `src/pages/ar/index.astro`.

## Acceptance
- On `/`, `/de/`, `/tr/`, `/ar/`, "Industries We Help" is the first section below the hero.
- All other sections still render, in order, with unchanged content and props.
- `npm run build` passes; no console errors; no visual regression in the moved section.

## Done-when
Section reordered on all four homepages, verified in the browser at desktop + mobile; committed.
