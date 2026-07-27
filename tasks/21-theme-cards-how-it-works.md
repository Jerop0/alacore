# Task 21 — Theme cards with "how it works" (Industries + Solutions)

## Goal
Fix the card **grouping**: a whole **theme** is **one card**, not one card per item. E.g. the
restaurant theme **"Take orders & serve faster"** is a single rich card that holds its items (QR menu,
online ordering, reservations, POS/kitchen screen, WhatsApp ordering) — each with a one-line benefit
**and a short "how it works"** explanation. Fewer, richer cards; clearer story.

> Decided with **/impeccable** + **/frontend-design**: fewer, content-rich cards beat a stamped grid of
> tiny one-liners ("cards are the lazy answer — use richer ones"). The card groups a real theme; the
> "how it works" encodes real information, not decoration.

## Read-first (old tasks this refines)
`tasks/14` (the catalog content), `tasks/19` (reveal + pop-up interaction), `tasks/06` (industries),
`tasks/05`/`tasks/20` (solutions). This task changes the **card unit + adds a "how it works" field**;
14 stays the content source, 19 stays the interaction.

## The unit: one card per theme (full-width row)
- **Card = a theme** (≈6 per industry: *Take orders/serve · Get more customers · Look unforgettable ·
  Run smoothly · See your numbers · Save time*). One card per row (`tasks/19`).
- **Inside the card:** a one-line theme intro + its **items**. Each item shows: **name · one-line
  benefit** (always visible) and a **"how it works"** (2–3 plain steps) revealed per `tasks/19`
  (hover/focus/tap inline). If a theme is large, a single **"How it works" pop-up dialog** lists all
  items with their steps. **No "Learn more"; no collapse on the one-line benefit** (only "how it works"
  is revealed).

## Content model (extend `tasks/14` / `tasks/09`)
Per industry: `themes[] → { title, intro, items[] → { name, benefit, howItWorks[] } }` where
`howItWorks` is 2–3 short steps in plain business language. Author EN then DE/TR (log in `REVIEW.md`).

## Worked example — Restaurant › "Take orders & serve faster" (ONE card)
Intro: *Everything to take orders and get food out quickly.*
- **Digital QR menu** — customers scan and see your menu.
  *How it works:* 1) We put a QR code on each table. 2) Guests scan with their phone. 3) Your menu opens
  instantly — change items and prices anytime.
- **Online ordering & delivery** — take orders on your own site.
  *How it works:* 1) Customers order from your website. 2) The order reaches your kitchen and staff.
  3) You fulfill for pickup or delivery — and keep more of the money (no high commissions).
- **Table reservations** — bookings online and on WhatsApp.
  *How it works:* 1) Guests pick a time online or on WhatsApp. 2) You see every booking in one place.
  3) Automatic reminders cut no-shows.
- **POS & kitchen screen** — orders go straight to the kitchen.
  *How it works:* 1) Staff ring up the order on the POS. 2) It appears on the kitchen screen instantly.
  3) The kitchen cooks in order — fewer mistakes, faster service.
- **WhatsApp ordering & chatbot** — customers order on WhatsApp.
  *How it works:* 1) Customers message your WhatsApp. 2) The chatbot shows the menu and takes the order.
  3) You confirm and prepare — common questions answered automatically.

Build every theme (all 7 industries, and the Solutions families) to this depth.

## Apply to
- **Industries** (`tasks/06`+`14`): theme cards as above.
- **Solutions** (`tasks/05`+`20`): each family card carries its items + "how it works"; the **tech
  layer** ("How we build it") is the separate pop-up from `tasks/20`.

## Acceptance
- The card unit is the **theme**, not the item; ≈6 theme cards per industry, one per row.
- Each item shows a one-line benefit always, plus a plain **"how it works"** on reveal (hover/focus/tap)
  or in a pop-up when the theme is large; no "Learn more"; benefit line never collapsed.
- Localized EN/DE/TR; revealed text in the DOM (SEO); responsive; a11y per `tasks/19`.

## Done-when
Industries + Solutions use theme cards with "how it works" content; committed.
