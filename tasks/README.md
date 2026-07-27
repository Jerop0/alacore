# ALA CORE — Build Tasks (opencode work queue)

You are building the ALA CORE website. Work through the numbered task files **in order**
(`00 → 31`), committing after each. Each file is self-contained:
**Goal · Read-first · Steps · Files · Acceptance · Done-when.**

**Later tracks:**
- `21 → 24` — post-launch fixes and the About page.
- `25 → 28` — **Arabic locale** (RTL). Read `25-arabic-preferences.md` **first** (user-filled decisions);
  it is canonical for `26` (retranslate EN→AR, reviewed), `27` (RTL + Arabic impeccable redesign), `28` (audit).
- `29` — header + hero rebuilt with the supplied brand assets (transparent white logo + reception-wall hero).
- `30` — homepage: move "Industries We Help" directly after the hero.
- `31` — **on finish, commit + push to `origin/main` and verify every image/logo/font is on the remote.**
  Run it as the closing step of each task and as a final sweep.

## Read before you start (once)

1. [`../DECISIONS.md`](../DECISIONS.md) — stack + architecture (Astro, no backend, routes, WhatsApp #).
2. [`../ala-core-website-assets/IMPECCABLE.md`](../ala-core-website-assets/IMPECCABLE.md) — **canonical** standard.
3. [`../ala-core-website-assets/brand/build-spec.md`](../ala-core-website-assets/brand/build-spec.md).
4. [`../DESIGN.md`](../DESIGN.md) — visual system.  5. [`../PRODUCT.md`](../PRODUCT.md) — voice/audience.

**Source-of-truth rule:** the asset pack wins on brand/tokens/visual/copy/routes; `DECISIONS.md` wins
on framework/build/backend. If a task and the pack disagree, follow the pack and flag it. If genuinely
unclear, **stop and ask the user** — never invent brand, numbers, claims, or translations.

## Global non-negotiables (apply to every task)

- **Business-first, zero jargon** on every page **except the Solutions tech layer** (the "How we build
  it" dialogs + the `/solutions#for-tech-teams` overview). Never use (anywhere on business pages/layers):
  Kubernetes, RAG, CI/CD, APIs, DevOps, microservices, containers, vector databases, LLM orchestration.
  Lead with the outcome (save time, reduce manual work, serve customers faster, organize operations,
  see reports, grow).
- **Copy** comes only from the content model (`content/site-copy.json` for the homepage; extend in
  task 09). Sentence case in body; UPPERCASE only for the hero H1 and short UI labels. Short sentences,
  ≤3-line paragraphs. **No fake** stats, testimonials, clients, awards, phone numbers, or addresses.
- **Only public email:** `support@alacore.net`. **WhatsApp number:** only from `src/lib/config.ts`.
- **Brand:** use the supplied SVG logos/orbit as-is (never redraw the mark). Blue is an accent only;
  green is WhatsApp only. Tokens from `brand/brand-tokens.css` + `DESIGN.md`.
- **i18n:** EN/DE/TR on every route. Locale-prefixed pretty URLs (`/`, `/de/…`, `/tr/…`) + hreflang.
  Language switch preserves route + persists. Reviewed copy only — no runtime machine translation;
  log every newly authored non-EN string in `content/REVIEW.md`.
- **A11y:** WCAG 2.2 AA. Semantic landmarks, logical headings, `:focus-visible`, 44px tap targets,
  focus trap + return in dialogs/menus, accessible names for icon buttons, no color-only meaning.
- **Motion:** restrained, ease-out, 160–220ms; respect `prefers-reduced-motion`; never gate content
  behind a reveal; no parallax on mobile; never animate the logo A forms.
- **Responsive:** verify 320/375/430/768/1024/1280/1440. No horizontal scroll, no heading overflow.
- **Performance:** static-first, minimal JS (Astro islands only where needed), SVG, lazy non-critical
  media, self-hosted font subset, defer chat/WhatsApp JS. Target Core Web Vitals green.

## Definition of Done (whole project)

The website is complete only when it passes the **IMPECCABLE.md §30 acceptance checklist** and the
verification steps in `tasks/11`. Record results there.

## How to run / verify

```bash
npm install
npm run dev          # http://localhost:4321
npm run build && npm run preview
```

Screenshot each page and compare against `ala-core-website-assets/visuals/website-homepage-concept.png`.
Run Lighthouse on the built preview (CWV green, a11y ≥ 95).

## Commit convention

One commit per task: `feat(site): <task-nn> <short summary>`. Keep commits scoped to the task.

## Task index

| # | File | Outcome |
|---|---|---|
| 00 | `00-project-setup.md` | Astro+TS scaffold, i18n routing, assets, fonts, base layout, config |
| 01 | `01-design-system.md` | Tokens (light/dark), type, UI primitives, theme toggle, `/styleguide` |
| 02 | `02-global-shell.md` | Header, mobile menu, footer, language switcher |
| 03 | `03-home.md` | Homepage sections (hero → final CTA) |
| 04 | `04-floating-actions.md` | WhatsApp float + needs form, Ask ALA float + panel |
| 05 | `05-solutions.md` | `/solutions` page |
| 06 | `06-industries.md` | `/industries` overview + 7 dedicated pages |
| 07 | `07-for-tech-teams.md` | `/for-tech-teams` (the only technical page) |
| 08 | `08-about-contact.md` | `/about` + `/contact` (WhatsApp form) |
| 09 | `09-content-i18n.md` | Full EN/DE/TR content model + REVIEW.md |
| 10 | `10-seo-performance.md` | Meta, sitemap, hreflang, perf pass |
| 11 | `11-qa-a11y-responsive.md` | QA sweep + §30 acceptance checklist |
| 12 | `12-deploy-vercel.md` | Vercel + alacore.net deploy |
| 13 | `13-products-and-work.md` | Products + Work pages, homepage teasers, footer links |
| 14 | `14-industry-and-solution-depth.md` | Deep, simplified capability catalog + progressive disclosure (industries + solutions) |
| 15 | `15-chat-ui-polish.md` | Visual/CSS polish for WhatsApp flow + Ask ALA |
| 16 | `16-i18n-audit.md` | Verify EN/DE/TR completeness, correctness, and layout fit on every page |
| 17 | `17-how-we-work.md` | Dedicated `/how-we-work` page (expands the homepage process strip) |
| 18 | `18-home-positioning.md` | Remove Products/Work teasers from home; add "any idea → reality" band |
| 19 | `19-card-interaction.md` | Rich-row cards: hover/focus/tap reveal + pop-up dialog (no "Learn more") |
| 20 | `20-merge-solutions-tech.md` | Merge For Tech Teams into Solutions (business-first, then tech) |
| 21 | `21-theme-cards-how-it-works.md` | Card = a theme (not per item); each item gets a plain "how it works" |
| 22 | `22-fix-cards-and-orbit.md` | **FIX**: reveal-card layout bug (full-width body) + `--text-base` + clipped hero orbit |
| 23 | `23-fix-anyidea-width.md` | **FIX**: home "Whatever you need, we build it." band too narrow (empty 2nd column) |
| 24 | `24-about-page.md` | Full About page ("engineering company": mission/vision/values/principles/process/global/stats) |

> **Note on 07:** `/for-tech-teams` is **merged into Solutions** (task 20) — no standalone page; it
> 301-redirects to `/solutions`. Primary nav is **5 items** (Home · Solutions · Industries · About ·
> Contact). Task 07 is now a content reference for the Solutions tech layer.
>
> **Enhancement tasks (13–20) modify earlier pages.** 13 → footer (02) + Products/Work pages;
> 14 → industry (06) + solutions (05) content depth; 15 → chat widgets (04); 17 → home strip (03) +
> footer (02) + about (08); 18 → homepage (03: teasers→positioning band); **19 → card interaction for
> industries (06) + solutions (05), supersedes 14's interaction spec; 20 → merge tech (07) into
> solutions (05), nav (02), redirect (10/12).** Build the base pages/widgets in `02–08` first, then
> apply `13–20`. Then run the audits **16 (language)** and **11 (QA/a11y/responsive)** before deploy (12).
