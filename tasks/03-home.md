# Task 03 — Homepage

## Goal
Build the homepage exactly to the approved concept (`visuals/website-homepage-concept.png`): dark hero
with the animated orbit → white/mist content sections → dark final CTA. All copy from
`content/site-copy.json`; all three locales.

## Read-first
IMPECCABLE §9–16; `brand/build-spec.md` (responsive + icon map); `content/site-copy.json`;
`visuals/website-homepage-concept.png`; `visuals/core-orbit-hero.svg`.

## Steps — build these `components/sections/` in order
1. **`Hero.astro`** (dark, Core Ink): 2-col desktop (copy left ≤650px / `CoreOrbit` right, ≥48px gap),
   stacked mobile (copy → actions → compact visual). Desktop min-height ≥600px incl. header.
   - H1 `hero.title` UPPERCASE, `--heading-hero`, weight 700–800, no overflow at 320px.
   - Body `hero.body`. Actions: primary `hero.primary` ("Explore solutions" → `/solutions`), secondary
     `hero.secondary` ("Talk to an expert" → `/contact`).
   - **`CoreOrbit.astro`**: inline the supplied `core-orbit-hero.svg`; animate its 4 ring `<ellipse>`
     groups independently (18–32s, `@keyframes` rotate around center) + subtle Core-glow pulse. Never
     animate the A forms. Full stop under `prefers-reduced-motion` (static frame). Optional subtle
     pointer parallax on desktop only.
2. **`WhatWeBuild.astro`** — `SectionHeading` (`sections.build`) + 6 cards from `buildCards`
   (apps, web, chat, automation, reports, systems). Icons (Lucide): Briefcase, Globe, MessagesSquare,
   Settings, ChartNoAxesColumnIncreasing, Database — each in a `--blue-tint` chip. Grid 3×2 desktop /
   2×3 tablet / 1×6 mobile; hover = blue border + icon fill + ≤2px lift. Vary so it doesn't read as a
   stamped grid (e.g. a slightly wider lead card).
3. **`IndustriesTeaser.astro`** — `SectionHeading` (`sections.industries`) + tab/selectable-card row of
   the 7 industries, each linking to its dedicated page (`/industries/<slug>`), plus a "See all
   industries" → `/industries`. (Full panels live on the industries pages, task 06.)
4. **`ExampleSolutions.astro`** — `SectionHeading` (`sections.examples`) + 5 scenario cards
   (Restaurant, Hospital, School, Warehouse, Company) from the content model: recognizable situation +
   plain-language capability pills + outcome. **No architecture.**
5. **`ProcessSteps.astro`** — `01 Understand · 02 Design · 03 Build · 04 Support` (`process` array) +
   the supporting sentence. Horizontal sequence with connector desktop / vertical mobile. Connector
   must not imply work stops after launch. Keep it a **compact teaser** with a "See how we work" link →
   `/how-we-work` (full page in [`17-how-we-work.md`](17-how-we-work.md)); don't duplicate the full page.
6. **`WhyAlaCore.astro`** — `SectionHeading` (`sections.why`) + 3 points (One partner for all digital
   needs · Clear business communication · Built around your workflow): icon + heading + ≤2 short lines.
   Open columns, not heavy cards.
6b. **Positioning band (`AnyIdea`, task 18):** place the "any idea → reality / whatever you need, we
   build it" section per [`18-home-positioning.md`](18-home-positioning.md) — recommended **after
   `WhatWeBuild`**. **No Products/Work teasers on the homepage** — those live on their own pages +
   footer only.
7. **`FinalCta.astro`** (dark, Core Ink, faint orbit echo): `finalCta` headline UPPERCASE, primary
   "Talk to an expert" (→ `/contact`), optional secondary "Describe your need" → **opens Ask ALA**
   (dispatch a custom event the Ask ALA island listens for; must NOT navigate).
8. Compose all into `src/pages/index.astro` (+ `de/`, `tr/` equivalents via shared section components
   fed localized copy). Alternate white / Interface-Mist section backgrounds for rhythm.

## Acceptance
- Matches the concept image structure at desktop; stacks cleanly on mobile with no heading overflow at
  320px and no horizontal scroll.
- Orbit animates smoothly and **freezes** under reduced motion.
- Every string resolves in EN/DE/TR; no hard-coded English; German (longer) labels don't break layout.
- No engineering jargon; one primary CTA per section.

## Done-when
Homepage renders in all three locales, matches the concept, passes the responsive + motion checks;
committed.
