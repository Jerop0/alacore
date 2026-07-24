# Task 09 — Content model & i18n (EN/DE/TR)

## Goal
A single, reviewed content model covering **every** page and interactive label in EN/DE/TR, seeded
from the approved homepage copy and extended for the rest. This is the content backbone — it can be
built alongside the page tasks, but must be complete before QA.

## Read-first
IMPECCABLE §2 (voice), §20 (multilingual rules), §26 (metadata); `content/site-copy.json`.

## Steps
1. **Seed:** treat `ala-core-website-assets/content/site-copy.json` as canonical for the homepage. Copy
   its shape into the app's content layer (`src/content/` or a typed `src/content/copy.<locale>.json`).
   **Do not change the meaning** of approved strings — only add.
2. **Extend** with keys for: Solutions (6 families + example tools), Industries (overview + 7 pages:
   business type, needs, examples, CTA), For Tech Teams (group titles + capability lists), About
   (positioning, principles), Contact (form labels, errors, success), floating flows (WhatsApp steps,
   Ask ALA question/choices/follow-ups/recommendations), header, **footer column labels** (Explore /
   Company / Connect + positioning line), **Products** (intro + per-product tagline/description/status)
   and **Work** (intro, per-case industry/built/outcome, empty-state copy), the homepage **positioning
   band** ("any idea → reality": heading, subtext, 3 points — task 18), **How We Work**
   (`/how-we-work`: the 4 steps' what-happens/what-you-get/your-part + "what to expect" + after-launch),
   and **per-page SEO** (title, description, OG) for every route.
3. **Author EN** per the voice rules (short, outcome-led, sentence case, no jargon on business pages).
   Then produce **DE** and **TR**. Design must tolerate German labels ~30–40% longer — test wrapping.
   Turkish: keep correct dotted/dotless İ/ı, ş, ğ, ç.
4. Every interactive label localized; preserve selected language across pages **and** the Ask ALA
   session. No runtime machine translation.
5. **`content/REVIEW.md`:** list **every newly authored DE and TR string** (key + EN + DE/TR) in a table
   for human sign-off, since only reviewed copy may ship. Mark the approved homepage strings as
   "approved (asset pack)".
6. Type the content access (a `t(locale, key)` helper or Astro content collections) so missing keys
   fail the build rather than rendering blanks.

## Acceptance
- No hard-coded UI text anywhere; every route + control resolves in EN/DE/TR.
- Missing-key safety: build fails (or a visible dev warning) rather than shipping empty strings.
- `content/REVIEW.md` lists all new non-EN strings for review; homepage strings unchanged in meaning.

## Done-when
Full content model complete, typed, localized, with `REVIEW.md`; committed.
