# Task 13 — Products & Work

## Goal
Two new sections: **Products** (apps/products ALA CORE *owns*) and **Work** (projects done *for
clients*). Each gets a dedicated page + a footer link. **No homepage teasers** (removed in `tasks/18` —
the homepage carries the positioning band instead). Top nav stays lean (6 items) — Products/Work are
**not** added to the primary nav either.

Critical guardrail: **Work must be real.** No fake client names, logos, testimonials, awards, or
invented metrics (IMPECCABLE §2). "Work" is distinct from the homepage **Example Solutions**, which are
clearly *illustrative scenarios, not case studies*. Until real, permissioned cases exist, Work ships as
an honest structure with a graceful "coming soon / talk to us" state.

## Read-first
IMPECCABLE §2 (no fake proof), §19 (routes — `/products` is a secondary route), §13 (Example Solutions
are scenarios); `../DECISIONS.md`; `../PRODUCT.md` (voice).

## Routes (localized under `/de/…`, `/tr/…`)
`/products`, `/work`.

## Steps

### Products (`/products`)
1. Data model `src/content/products.json` (or content collection). Each entry: `name`, `tagline`
   (one-line business value), `description` (2–3 short lines, outcome-led), `forWhom` (e.g. "for
   restaurants"), `status` (`live` | `beta` | `coming-soon`), optional `icon`/`logo` (SVG),
   optional `url`, `cta`.
2. `components/sections/ProductCard.astro` — icon/logo, name, tagline, status **badge**, short
   description, one CTA. Reuse `Card` styling; grid `repeat(auto-fit,minmax(280px,1fr))`.
3. `src/pages/products/index.astro` — intro `SectionHeading` ("Products we build and run"), the grid,
   and a Final CTA. If `status:coming-soon`, show the badge honestly (no fake "trusted by").
4. Copy authored into the content model (task 09), EN/DE/TR.

### Work (`/work`)
5. Data model `src/content/work.json`. Each entry: `industry` (e.g. "Restaurant chain"), `built` (what
   we built, plain language), `outcome` (honest result — **no fabricated numbers**), optional
   `client`/`logo`/`quote` **only when real + permissioned**, optional `image`, `tags`.
6. `components/sections/WorkCard.astro` — industry + what we built + outcome (+ real client/logo/quote
   only if present). No placeholder logos.
7. `src/pages/work/index.astro` — intro that frames these as real projects; the grid when entries
   exist; a **graceful empty/coming-soon state** when `work.json` is empty (an invitation: "We're
   preparing our case studies — tell us what you need" → Contact / Ask ALA), **never** filler cards.
8. Add a one-line note on the page distinguishing Work (real client projects) from the homepage Example
   Solutions (illustrative). Copy → content model, EN/DE/TR.

### Homepage
9. **No Products/Work teasers on the homepage** (per `tasks/18`). Do not build `ProductsTeaser` /
   `WorkTeaser`. The homepage links to these only implicitly via the footer.

### Footer + nav
10. Add **Products** and **Work** to the footer's **Company** column (task 02 footer). Do **not** add
    them to the primary nav.

## Acceptance
- `/products` and `/work` render in EN/DE/TR with pretty URLs + hreflang; footer links work; **no
  Products/Work sections on the homepage**.
- **Zero fake** client names/logos/quotes/metrics anywhere; Work empty-state is graceful (no filler).
- Products statuses are honest (live/beta/coming-soon).
- Data-driven: adding a real product or case = adding a JSON entry, no layout change.

## Done-when
Both pages + teasers + footer links complete and localized, with the no-fake guardrail respected;
committed.
