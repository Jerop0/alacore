# Task 05 — Solutions page (`/solutions`)

## Goal
Explain what ALA CORE builds, one level deeper than the homepage. Organized around the six "What We
Build" families; **business people first (plain language, in detail), then a tech layer** for technical
buyers.

> **This page now also absorbs "For Tech Teams"** — see [`20-merge-solutions-tech.md`](20-merge-solutions-tech.md)
> (business-first, then a "How we build it" tech layer + a `#for-tech-teams` overview). Build the
> detail cards with the **rich-row + reveal + pop-up** pattern in
> [`19-card-interaction.md`](19-card-interaction.md). Jargon is allowed **only** in the tech layer.

## Read-first
IMPECCABLE §1–2 (voice, exclusions), §11; `../PRODUCT.md`; homepage `buildCards` copy for consistency.

## Steps
1. Page: dark header/footer shell, white/mist body. Intro `SectionHeading` (short, outcome-led).
2. Six family sections (reuse `Card`/section components), each: title, one-paragraph plain description,
   a short list of **example tools** (as `Pill`s, business words), and one CTA ("Talk to an expert" or
   "Describe your need" → Ask ALA). Families:
   - **Business Apps** — run daily work from one place (orders, bookings, staff, stock…).
   - **Websites & Portals** — help customers find, book, buy, and connect.
   - **Chatbots & WhatsApp** — answer customers and collect requests faster.
   - **Automation** — remove repetitive manual work.
   - **Dashboards & Reports** — see what's happening across the business.
   - **Business Systems** — organize customers, staff, stock, and operations.
3. Close with the Process recap (reuse `ProcessSteps`) and a Final CTA.
4. Author all copy into the content model (task 09) for EN/DE/TR. Keep sentences short; ≤3-line
   paragraphs; one primary CTA per section.
5. **Depth:** each family is a full-width **rich row** whose business summary is always visible; deeper
   info reveals per [`19-card-interaction.md`](19-card-interaction.md) (hover/focus/tap; pop-up dialog
   for the tech layer). Content depth per [`14`](14-industry-and-solution-depth.md); tech layer per
   [`20`](20-merge-solutions-tech.md). No "Learn more"; no collapse for one-liners.

## Acceptance
- Reads clearly to a non-technical owner; **zero** banned jargon; outcomes lead every section.
- Localized EN/DE/TR; German length tolerated; responsive with no overflow.
- Links to `/contact` / Ask ALA work.

## Done-when
`/solutions` (+ `/de`, `/tr`) complete, on-voice, responsive; committed.
