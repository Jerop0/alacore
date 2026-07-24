# Task 04 — Floating actions (WhatsApp + Ask ALA)

## Goal
Two persistent, visually-distinct floating buttons and their flows: a green **WhatsApp** button with a
business-needs mini-form that generates a prefilled `wa.me` message, and a blue **Ask ALA** assistant
that guides a visitor to a solution — both client-side, both language-preserving, both accessible.

## Read-first
IMPECCABLE §18; `../DECISIONS.md` (no backend, WhatsApp #); `src/lib/config.ts`; the old site
(`../legacy/script.js` — `knowledgeBase`, WhatsApp templates) for logic to port into business language.

## Steps
1. **`src/lib/whatsapp.ts`** — `buildWhatsappUrl({...fields}, locale)` → `https://wa.me/${WHATSAPP_NUMBER}
   ?text=${encodeURIComponent(message)}`. Message templated per locale; never embed a raw number
   elsewhere.
2. **`components/chat/WhatsAppButton.astro`** (island): green (`--ala-success`) circle, bottom-right,
   above the safe area, must not overlap Ask ALA / nav / forms (stack the two floats). Optional subtle
   pulse ring (motion-safe). Accessible label.
3. **`components/chat/WhatsAppNeedsForm.astro`**: short flow before sending — (1) business type,
   (2) main challenge, (3) desired outcome, (4) name + preferred contact time → build the prefilled
   WhatsApp message and open it. Keyboard accessible; validates lightly; localized labels.
4. **`components/chat/AskAlaButton.astro`** (island): blue circle labeled **"Ask ALA"**, visually
   separate from WhatsApp. Listens for the `open-ask-ala` custom event (fired by the homepage Final CTA
   "Describe your need" and the contact page).
5. **`components/chat/AskAlaPanel.astro`**: desktop = bottom-right panel; mobile = bottom sheet.
   Accessible close button, focus trap, return focus on close, `aria-live` for messages. **Client-side
   guided flow** (no LLM):
   - Opening: `askAla.question` — "What would you like to improve in your business?"
   - Choices (`askAla.choices`): Get more customers · Save staff time · Organize operations · See better
     reports.
   - Ask **≤3** follow-ups, then recommend **1–2** solution categories in plain business language
     (map choices → the 6 "What We Build" families / relevant industries). Offer **WhatsApp** or the
     **contact form** as the next step.
   - Preserve the selected language. **Never** quote prices or delivery dates; never expose technical
     implementation unless the user explicitly picks a technical path. Port the old `knowledgeBase`
     mapping but rewrite all copy to business language.
6. **Performance:** load both islands **after** the page is interactive (`client:idle` /
   `client:visible`) so they never block first render.
7. Mount both floats globally (in `Layout.astro` or a `FloatingActions.astro` included there) so they
   appear on every page.

## Acceptance
- Two distinct floats on every page; they never overlap each other or cover nav/forms; both keyboard
  operable with visible focus.
- WhatsApp flow opens `wa.me` with a correct prefilled, localized message using the config number only.
- Ask ALA: opening question + 4 choices → ≤3 follow-ups → 1–2 plain-language recommendations →
  WhatsApp/contact handoff; language preserved; no price/date claims; panel traps + returns focus.
- Neither island blocks first paint (verify in a throttled Lighthouse run).

## Done-when
Both flows work in all locales, accessible, deferred, and mounted site-wide; committed.
