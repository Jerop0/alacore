# Task 14 — Deep industry & solution pages (progressive disclosure)

## Goal
Turn each **industry** page (and the **Solutions** families) into a rich but effortless "here's
*everything* we can build for you" experience — app, website, chatbots, automation, dashboards,
systems, **plus** design/branding, menu design, photography, 3D/AR & hologram-style displays, digital
signage, ads/marketing, and SEO — all in **plain business language**, revealed progressively so the
page stays calm. Deep content, low cognitive load.

This task defines the **pattern + depth**; it upgrades the depth portion of `tasks/05` (Solutions) and
`tasks/06` (Industries). Build those pages' shells first, then apply this.

## Read-first
IMPECCABLE §2 (plain voice, no fake claims), §11–13; `../PRODUCT.md` (outcomes over apparatus);
`tasks/05`, `tasks/06`; the 23-service list in `../ala-core-website-assets/IMPECCABLE.md` §19 /
`../PRODUCT.md` (source for *what* we can offer — to be **simplified** here).

## Interaction pattern (decision)
**Use the rich-row + reveal + pop-up pattern in [`19-card-interaction.md`](19-card-interaction.md)** —
one card per row, always-visible business summary, deeper info on **hover + focus + tap** (never
hover-only), a **pop-up dialog** for heavy content, **no "Learn more"**, and **no collapse for
one-liners**. All revealed text stays in the DOM (SEO-crawlable). Task 19 owns the interaction; this
file owns the *content* (the catalog + glossary below).

## Page structure (each industry page, and mirrored on Solutions)
1. **Intro** — one line: the outcome for this business ("Everything your restaurant needs, from one
   partner").
2. **Capability catalog** — grouped **themes** (below), each theme a short intro + a set of
   expandable items. Collapsed = name + one plain-benefit line. Expanded = 2–3 lines ("what it does ·
   what you get · a quick example") + a small **Talk to an expert / Ask ALA** CTA.
3. **A typical setup** — a suggested *combination* for this business (a starter bundle idea) — **no
   prices, no fake results**, just a sensible mix.
4. **CTA** — Talk to an expert / Describe your need (Ask ALA).

## Worked example — Restaurants & Cafes (build to this depth, then replicate per industry)

**Take orders & serve faster**
- **Digital QR menu** — customers scan and see your menu; change prices anytime.
- **Online ordering & delivery** — take orders on your own site, keep more of the money.
- **Table reservations** — bookings online and on WhatsApp.
- **POS & kitchen screen** — orders go straight to the kitchen.
- **WhatsApp ordering & chatbot** — customers order and ask questions on WhatsApp.

**Get more customers**
- **Website** — a fast, mobile site with your menu, location, and hours.
- **Be found on Google (SEO)** — show up when people search "restaurants near me."
- **Social media & ads** — reach new customers on Instagram, Google, and TikTok.
- **Loyalty & rewards** — bring customers back with points and offers.
- **Reviews** — automatically invite happy customers to leave a review.

**Look unforgettable (design & branding)**
- **Logo & brand** — a look customers remember.
- **Menu design** — print and digital menus that sell.
- **Food photography & video** — make dishes look irresistible.
- **3D / AR menu & hologram-style displays** — let customers see a dish in 3D before ordering.
- **Digital signage** — in-store screens for offers and menus.

**Run the day smoothly**
- **Stock & inventory** — know what's running low.
- **Staff & shifts** — schedules and roles in one place.
- **Suppliers & purchasing** — track orders and costs.
- **Accounting & invoices** — simple financial records.

**See your numbers**
- **Sales dashboard** — today's sales, best dishes, busy hours.
- **Reports** — daily, weekly, monthly — clear and simple.

**Save time with automation**
- **Reminders** — booking and pickup reminders by WhatsApp.
- **Marketing automation** — birthday offers, "we miss you" messages.
- **Ask ALA / chatbot** — answer common questions automatically.

## Reuse the theme headers per industry (customize the items)
Same six themes work everywhere — swap the items to fit:
*Take orders/serve · Get more customers · Look unforgettable · Run smoothly · See your numbers · Save
time.* Examples of the industry-specific twist:
- **Hospitals & Clinics** — appointments & reminders · patient portal · records · reports · digital
  signage/wayfinding · automation.
- **Schools & Training** — enrollment & payments · student/parent portal · attendance · results
  dashboards · branding & site · automation.
- **Warehouses & Logistics** — inventory & barcodes · delivery tracking · supplier portal · stock
  dashboards · driver app · automation.
- **Retail & E-commerce** — online store · POS · loyalty · ads & SEO · product photography/3D ·
  stock & reports.
- **Companies & Offices** — CRM · HR & approvals · internal apps · dashboards · brand & site ·
  automation.
- **Factories & Manufacturing** — production tracking · machine monitoring · inventory · maintenance
  · reports · automation.

## Plain-language glossary (use these translations everywhere on business pages)
| Capability | Say it like this |
| --- | --- |
| SEO | "Be found on Google when customers search for you." |
| Paid ads / SEM | "Reach new customers on Google, Instagram, and TikTok." |
| Branding | "A logo and look customers remember." |
| UI/UX design | "Screens that are easy and pleasant to use." |
| 3D / AR / hologram | "Eye-catching 3D or hologram-style displays of your products." |
| Automation | "Let repetitive tasks happen by themselves." |
| Dashboard / BI | "See your numbers at a glance." |
| CRM | "Keep every customer and lead in one place." |
| POS | "Ring up sales and send orders to the kitchen/stock." |
Keep the banned engineering words (Kubernetes, RAG, CI/CD, APIs, DevOps, …) **off** these pages — they
belong on For Tech Teams only.

## Content model & cross-linking
- Drive the catalog from data: `src/content/industries/<slug>.json` (themes → items → short + long +
  optional link). Authored EN then DE/TR (task 09), logged in `content/REVIEW.md`.
- Each item may `link` to the matching **Solutions** family or a **For Tech Teams** section for readers
  who want more — the business page stays simple; depth is one click away.
- Mirror the same expandable pattern on **Solutions** (each of the 6 families expands into "what's
  included · who it's for · an example").

## Acceptance
- Every industry page shows the full grouped catalog; collapsed view is scannable, expanded view adds
  helpful plain-language detail; all content is in the DOM (SEO-crawlable).
- Accordions/cards are keyboard-accessible (`<summary>` focusable, `aria-expanded` correct), respect
  reduced motion, and cause no layout shift.
- Zero engineering jargon; glossary translations used; **no fake results/prices**.
- Works in EN/DE/TR; German-length labels don't break the accordion rows; no overflow at 320px.
- Solutions families use the same expandable depth pattern.

## Done-when
Industries (7) + Solutions carry the deep, simplified, progressive-disclosure catalog in all locales;
committed.
