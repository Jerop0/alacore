# Task 08 — About + Contact

## Goal
`/about` (who ALA CORE is + how it works) and `/contact` (a client-only contact flow that builds a
prefilled WhatsApp message, shows only `support@alacore.net`, and offers Ask ALA).

## Read-first
IMPECCABLE §16, §21, §23; `../DECISIONS.md` (no backend); `../PRODUCT.md` (voice: capable/clear/calm).

## `/about`
> **Superseded by [`24-about-page.md`](24-about-page.md)** — the full "engineering company" About page
> (statement · mission · vision · values · engineering principles · 5-step process · global vision ·
> stats · CTA). Build About from task 24; this task only owns `/contact` below.
- Constraint that still applies: **no fake stats, clients, awards, or unverifiable claims** (see task 24
  flag 1 on the stats). Author copy into the content model (EN/DE/TR).

## `/contact`
1. **`components/forms/ContactForm.astro`** (island) — fields: Name, Business name, Email or phone,
   Industry (select), "What would you like to improve?", Preferred contact method, Consent checkbox.
2. On submit (no backend): validate client-side, show **inline** errors near fields (no alert boxes),
   **preserve entered values** on recoverable error, prevent duplicate submit, show loading + success
   states → build a prefilled WhatsApp message via `lib/whatsapp.ts` and open it. Success state confirms
   what happens next.
3. Show `support@alacore.net` (mailto) and an **Ask ALA** entry (`open-ask-ala` event). Optionally the
   WhatsApp needs-form as an alternative path. **No** phone numbers/addresses beyond the configured
   WhatsApp.
4. Accessible: labels tied to inputs, error text linked via `aria-describedby`, 44px targets, keyboard
   flow, focus moved to the first error on failed submit.

## Acceptance
- `/about` on-voice, no fake claims, localized, responsive.
- Contact form validates, preserves values on error, prevents duplicates, and opens a correct prefilled
  WhatsApp message; only `support@alacore.net` shown; Ask ALA opens from the page.
- Both pages localized EN/DE/TR; no overflow.

## Done-when
`/about` and `/contact` complete in all locales, accessible; committed.
