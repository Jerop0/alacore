# Task 17 — "How We Work" page

## Goal
Give the process its own page instead of living only as the homepage 4-step strip. Expand
**01 Understand · 02 Design · 03 Build · 04 Support** into a clear, reassuring page that shows a
business owner exactly what working with ALA CORE feels like — in plain language, no fake
timelines/prices. Keep the compact strip on the homepage as a **teaser** linking here.

## Placement (recommendation — adjustable)
Dedicated route **`/how-we-work`** (localized `/de/…`, `/tr/…`). Reached from: the homepage Process
strip ("See how we work"), the **footer** (Company column), and the **About** page. **Not** added to
the lean primary nav (same pattern as Products/Work). *Alternative if you prefer: fold this content into
`/about` instead of a separate page — say the word and I'll switch it.*

## Read-first
IMPECCABLE §14 (process pattern), §2 (voice, no fake claims); `tasks/03` (`ProcessSteps`),
`tasks/08` (About), `../PRODUCT.md`.

## Steps
1. `src/pages/how-we-work/index.astro` (shell as usual). Intro `SectionHeading`: one line —
   "One clear process, from idea to launch and beyond."
2. **The four steps, expanded** — each as a block with: what happens · what you get · your part.
   Keep it honest (no invented durations or savings):
   - **01 Understand** — we learn your business, goals, and the real problem, and agree what success
     looks like. *You get:* a clear plan and scope. *Your part:* share how you work today.
   - **02 Design** — we design how the solution looks and works; you review it before anything is
     built. *You get:* a preview you can approve. *Your part:* tell us what fits your customers/staff.
   - **03 Build** — we build in stages, show progress, and test everything (works, secure, fast).
     *You get:* working software, checked before launch. *Your part:* try it and give feedback.
   - **04 Support** — we launch, train your team, and stay with you afterwards with updates and fixes.
     *You get:* a partner who stays. *Your part:* tell us what to improve next.
   Desktop = horizontal sequence with connector (reuse the `ProcessSteps` look, expanded); mobile =
   vertical. Numbers are earned (real sequence). Connector must not imply work stops after launch.
3. **What to expect** — a short, reassuring block: one point of contact, clear communication, work in
   stages you approve, start small then grow (a first version, then add more). No jargon.
4. **After launch** — support & improvements in plain terms (updates, fixes, new features as you grow).
5. **CTA** — "Talk to an expert" (→ `/contact`) + optional "Describe your need" (→ Ask ALA).
6. Copy authored into the content model (task 09), EN/DE/TR; logged in `content/REVIEW.md`.

## Wiring (small edits to other pages)
- **Homepage** (`tasks/03` `ProcessSteps`): keep it compact; add a "See how we work" link → `/how-we-work`.
- **Footer** (`tasks/02` Company column): add **How we work**.
- **About** (`tasks/08`): link to `/how-we-work` (or embed a 1-line summary + link).

## Acceptance
- `/how-we-work` renders in EN/DE/TR with pretty URLs + hreflang; reached from home strip, footer, and
  About; not in the primary nav.
- Plain business language, **no fake** timelines/prices/results; responsive, no overflow at 320px.
- Homepage keeps a compact process teaser (not the full page duplicated).

## Done-when
`/how-we-work` complete and localized, wired from home/footer/about; committed.
