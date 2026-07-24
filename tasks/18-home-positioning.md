# Task 18 — Homepage positioning ("any idea → reality") + remove Products/Work teasers

## Goal
Two homepage changes:
1. **Remove** the Products and Work **teasers** from the homepage. Products (`/products`) and Work
   (`/work`) keep their own pages and their **footer** links only — nothing about them on the home page.
2. **Add** a confident positioning band that says, in plain words: *whatever you need, we build it —
   any idea, any technology, and we take on the hard problems others can't.* This broadens the concrete
   "What We Build" cards into "…and anything else your business needs."

## Read-first
`tasks/03-home.md`, `tasks/13-products-and-work.md`, IMPECCABLE §2 (**"Never exaggerate capabilities,
timelines, savings, or results"** — keep it confident but honest), `../PRODUCT.md` (voice: capable,
clear, calm).

## Part 1 — Remove homepage teasers
- Delete `ProductsTeaser` and `WorkTeaser` from the homepage composition (they were in `tasks/03`
  step 6b / `tasks/13` steps 9–11). No Products/Work content on `/`.
- Keep the `/products` and `/work` pages and their **footer** (Company column) links unchanged.

## Part 2 — Positioning band ("What we provide / Any idea to reality")
1. New `components/sections/AnyIdea.astro`. Recommended placement: **right after `WhatWeBuild`** (it
   expands the six concrete things into "and whatever else you need"). Can be white or Interface-Mist to
   vary rhythm; optionally a faint orbit echo — keep it calm.
2. **Message** (author real copy into the content model, task 09, EN/DE/TR):
   - Heading (pick/refine one — confident, not hypey): "Whatever you need, we build it." /
     "From your idea to working software." / "If your business needs it, we can build it."
   - Subtext: "An app, a website, a system, an automation — on any platform, in any technology. You
     describe the outcome; we design and build it. And when a problem is complex or custom, that's
     exactly the kind of work we take on."
   - Three supporting points (icon + short line):
     - **Any idea, made real** — you describe the outcome, we turn it into software that works.
     - **Any technology** — web, mobile, desktop, cloud, connected devices — we choose what fits.
     - **We solve the hard problems** — complex, custom, one-of-a-kind builds are our specialty.
   - CTA: "Describe your need" (→ Ask ALA) and/or "Talk to an expert" (→ `/contact`).
3. **Voice guardrail:** confident and reassuring, **not** boastful. Avoid absolute promises
   ("we can build literally anything", "nothing is impossible", fake guarantees). Frame as *capability
   and willingness to tackle hard work*, not a guarantee of outcomes/timelines. No jargon.
4. Note on the "What We Build" heading: the approved copy string is **"What We Build"**
   (`site-copy.json`). If you want it to read **"What we provide"**, that's a content-model change to
   run past the approved pack first — do **not** silently change the approved string; flag it.

## Acceptance
- Homepage has **no** Products/Work teasers; `/products`, `/work`, and their footer links still work.
- The positioning band renders after What We Build in EN/DE/TR, is confident but **not** exaggerated
  (passes the §2 "never exaggerate" rule), uses plain language, and links to Ask ALA / Contact.
- Responsive, no overflow at 320px; calm, on-brand, uncrowded.

## Done-when
Teasers removed, positioning band added and localized, voice guardrail respected; committed.
