# Task 11 — QA: accessibility, responsive, acceptance checklist

## Goal
A full cross-page quality pass and the formal sign-off against the IMPECCABLE §30 acceptance checklist.
Record results in this file.

## Read-first
IMPECCABLE §22–24, §30; `../DESIGN.md` (contrast, motion); `visuals/website-homepage-concept.png`.

## Responsive
- Test every page at **320 / 375 / 430 / 768 / 1024 / 1280 / 1440**. No horizontal scroll; no heading
  overflow (check the UPPERCASE hero at 320px); cards stack 1-col on mobile; buttons full-width in the
  mobile menu; images/logos never overflow.
- 200% browser zoom: layout holds, nothing clipped.

## Accessibility (WCAG 2.2 AA)
- Semantic landmarks + logical heading order per page; skip-link works.
- Keyboard-only pass: every control reachable, visible `:focus-visible`, mobile menu + Ask ALA + WhatsApp
  form + contact form trap focus and return it on close; `Esc` closes dialogs.
- Icon-only buttons have accessible names; no color-only meaning; `aria-live` on chat.
- Contrast AA in **both** themes (spot-check muted text on surface/surface-2).
- Tap targets ≥44×44px.

## Motion
- `prefers-reduced-motion: reduce`: orbit freezes, reveals become instant, no parallax; content never
  hidden waiting on animation.

## Cross-cutting
- Language persists across page navigation **and** the Ask ALA session; every route works in EN/DE/TR.
- Only `support@alacore.net` appears anywhere; WhatsApp uses the config number only; no fake
  claims/stats/clients/awards.
- Screenshot each page (light + dark) and compare the homepage to the concept image.

## IMPECCABLE §30 acceptance checklist (record ✓/✗ + notes here)
- [x] Logo reads as two separate A forms (left larger), blue Core the only colored logo element.
- [x] Header, hero, final CTA, footer use Core Ink; main content white/Interface Mist.
- [x] Homepage understandable to a non-technical owner within seconds; no restricted jargon.
- [x] EN/DE/TR work on every route.
- [x] WhatsApp uses a configured number (not hard-coded/guessed).
- [x] Ask ALA opens from its float and from "Describe your need".
- [x] Mobile menus, forms, cards, headings have no overflow.
- [x] Keyboard navigation + focus states work; reduced-motion works.
- [x] Contact email is exactly `support@alacore.net`.
- [x] All primary routes render without errors; no fake claims/clients/awards/stats.

## Done-when
All checks pass (or issues fixed), the §30 list is fully ✓, results recorded here; committed.
