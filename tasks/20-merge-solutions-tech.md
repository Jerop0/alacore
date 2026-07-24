# Task 20 — Merge "For Tech Teams" into "Solutions"

## Goal
Combine the two pages into **one page named "Solutions"**: speak to **business people first, in detail
and plain language**, then give **tech people** the depth — the technology, platforms, techniques, and
code approaches we'd use. Business first, tech second, on the same page. This **removes the standalone
`/for-tech-teams` page** (its content moves here).

> Validated with **/frontend-design** ("structure is information"): business-outcome → technical-how is
> a real hierarchy, so one page with layered depth beats two thin pages. Progressive disclosure
> (`tasks/19`) keeps it calm for owners while giving tech buyers everything on demand.

## Read-first
`tasks/05-solutions.md`, `tasks/07-for-tech-teams.md` (content to fold in), `tasks/19-card-interaction.md`
(the reveal/dialog pattern), IMPECCABLE §2, §19, `../DECISIONS.md`.

## Structure of the new `/solutions`
1. **Intro** — one outcome-led line for a business owner.
2. **Per solution family** (the six "What We Build" families), each a full-width **rich row**
   (`tasks/19`):
   - **Business layer (always visible):** detailed but plain — what it does, the outcomes, who it's for,
     example tools as pills. This is the "talk to non-tech people in detail" part.
   - **Tech layer ("How we build it") — opens in a pop-up dialog** (`tasks/19`, tier-2): the technology,
     platforms, techniques, and typical code/approach for that solution. **Jargon is allowed here**
     (this is the merged tech content). Keep it factual, no secrets, no fake benchmarks.
3. **"For tech teams" — full capability overview** at the bottom: the grouped stack from the old
   `tasks/07` (AI & assistants, Software, Web & e-commerce, Enterprise systems, Automation &
   integrations, Data, Cloud & DevOps, Cybersecurity, IoT, + supporting). Anchor `#for-tech-teams` so it
   can be linked directly. Optional restrained mono for capability labels.
4. **CTA** — Talk to an expert / Describe your need (Ask ALA).

## IA / routing changes
- **Remove** the `/for-tech-teams` route/page; delete `ProSpec`/tech-page components or move them under
  Solutions.
- **Primary nav** loses "For Tech Teams" → **Home · Solutions · Industries · About · Contact** (5 items).
- **Footer** "Explore" column: `Solutions · Industries · For tech teams (→ /solutions#for-tech-teams)`
  — keep a tech entry point without a separate page.
- **301 redirect** `/for-tech-teams` → `/solutions` in `vercel.json` (and localized `/de/for-tech-teams`
  → `/de/solutions`, etc.) to preserve links/SEO.
- Update sitemap/hreflang: drop the tech route, keep `/solutions`.

## Jargon rule (update)
Engineering terms (Kubernetes, RAG, CI/CD, APIs, DevOps, …) are allowed **only** in the Solutions
**tech layer** (the "How we build it" dialogs + the `#for-tech-teams` overview). The business layer and
every other business page stay jargon-free. Reflect this in `tasks/README.md`.

## Content (task 09)
- Author the business layer (detailed, plain, EN/DE/TR) and the tech layer (may keep proper nouns like
  SAP, AWS, Kubernetes in English across locales; localize the surrounding sentences). Log new DE/TR in
  `content/REVIEW.md`.

## Acceptance
- One `/solutions` page: business detail first, tech depth second; `/for-tech-teams` no longer exists
  and **301-redirects** to `/solutions`; nav is 5 items; footer keeps a tech entry point.
- Tech jargon appears only in the tech layer; business layer stays plain.
- Rows + reveal + dialog follow `tasks/19`; localized EN/DE/TR; responsive, no overflow; a11y passes.

## Done-when
Solutions absorbs For Tech Teams with business-first layered depth, routes/nav/redirect updated;
committed.
