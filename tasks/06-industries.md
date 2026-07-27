# Task 06 — Industries (overview + 7 pages)

## Goal
An `/industries` overview plus a dedicated page per industry (pretty URLs, good SEO), each speaking to
that business's real needs with relevant solution examples — not one generic sentence repeated 7×.

## Read-first
IMPECCABLE §12–13, §19; `brand/build-spec.md` (industry route table); `../DECISIONS.md`.

## Routes (localized under `/de/…`, `/tr/…`)
`/industries` + `/industries/{restaurants-cafes, hospitals-clinics, schools-training,
companies-offices, warehouses-logistics, retail-ecommerce, factories-manufacturing}`.

## Steps
1. **Overview** (`src/pages/industries/index.astro`): intro `SectionHeading` + tab/selectable-card grid
   of the 7 industries (icon + name + one-line need). Each card links to its page. Mobile = horizontally
   scrollable tab row with visible scroll affordance.
2. **Shared `components/sections/IndustryPanel.astro`** + an `IndustryLayout`: renders
   **business type · common needs · relevant solution examples (pills) · one CTA**. Drive it from a
   per-industry content entry so each reads specifically:
   - Restaurants & Cafes — digital menu, online orders, reservations, loyalty, WhatsApp ordering.
   - Hospitals & Clinics — appointments, patient records, reminders, reports.
   - Schools & Training — student portal, payments, attendance, parent communication.
   - Companies & Offices — CRM, HR, approvals, internal dashboards.
   - Warehouses & Logistics — inventory, barcode tracking, delivery dashboards, stock reports.
   - Retail & E-commerce — catalogs, orders, stock, payments, customer support.
   - Factories & Manufacturing — production workflows, inventory, maintenance, reporting.
3. Each page: unique `<title>`/description/canonical/OG + hreflang (task 10 helper), a relevant
   Example-Solution callout, and a CTA to `/contact` / Ask ALA.
4. Author all copy into the content model (task 09), EN/DE/TR. Keep shared framing once; customize the
   examples per industry.
5. **Depth:** each industry page carries the deep, simplified capability catalog (app → website → 3D/AR
   → menu design → ads → SEO → automation) — **content** from
   [`14-industry-and-solution-depth.md`](14-industry-and-solution-depth.md), **card grouping** (one card
   per **theme**, each item with a plain "how it works") from
   [`21-theme-cards-how-it-works.md`](21-theme-cards-how-it-works.md), **interaction** (rich rows,
   hover/focus/tap reveal, pop-up for heavy items, no "Learn more", no one-liner collapse) from
   [`19-card-interaction.md`](19-card-interaction.md). Build the page shell here; apply 14 + 19 + 21.

## Acceptance
- 8 industry routes render in all 3 locales with correct pretty URLs + hreflang; overview tabs link
   correctly; mobile tab row scrolls.
- Each page is specific (not a duplicated generic sentence); no jargon; responsive, no overflow.

## Done-when
Overview + 7 pages complete and localized; committed.
