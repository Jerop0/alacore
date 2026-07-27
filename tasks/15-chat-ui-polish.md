# Task 15 — Chat UI polish (WhatsApp flow + Ask ALA) & CSS

## Goal
Make the **WhatsApp** flow and the **Ask ALA** assistant feel premium, on-brand, and consistent — a
design/CSS pass over the two floating buttons, their panels, bubbles, inputs, and states. This is the
visual + interaction polish layer on top of the functional build in `tasks/04`.

## Read-first
`tasks/04-floating-actions.md` (behavior — don't break it), `../DESIGN.md` (tokens, radii, motion,
z-index), IMPECCABLE §18, §22–23; the old widget in `../legacy/` for reference only.

## Scope — polish, don't re-architect
Keep all behavior from task 04 (guided flow, ≤3 follow-ups, WhatsApp deep-link, language preservation,
focus trap). This task only improves **look, spacing, motion, and CSS quality**.

### Floating buttons
- Two distinct floats, bottom-right, stacked with consistent gap; never overlap each other, nav, or
  forms; safe-area aware (`env(safe-area-inset-*)`). Ask ALA = blue (`--ala-technology-blue`) with a
  clear "Ask ALA" label/pill; WhatsApp = green (`--ala-success`). Circular, `--ala-shadow-card`,
  44–56px, hover lift + subtle scale, motion-safe pulse (off under reduced motion). Visible focus ring.
- Consistent icon sizing/stroke (Lucide, 1.75–2px). Optional small unread/attention dot — never fake.

### Panels (desktop panel / mobile bottom sheet)
- Rounded (`--ala-radius-lg`), `--ala-shadow-card`/lg, `--line` border, respects light **and** dark
  theme tokens (no hard-coded colors). Header with title, small avatar/mark, close button (≥44px,
  labeled). Mobile = bottom sheet with drag-handle affordance, max-height, internal scroll, safe-area
  padding. Open/close = ease-out slide/scale + fade (≤220ms), instant under reduced motion. Correct
  `z-index` from the scale (panel = 400, above floats 200).

### Conversation styling (Ask ALA)
- Message bubbles: assistant vs user visually distinct (assistant = `--surface`/tinted, user =
  `--brand-blue-tint` or blue on light text), radius, comfortable padding, ≤75ch, good line-height,
  timestamps subtle. Choice/quick-reply **chips** = `Pill` styling, wrap neatly, keyboard-focusable,
  hover/active states. Typing indicator (three-dot) motion-safe. `aria-live` region unobtrusive.
- Recommendation cards inside the chat reuse the `Card` look, with WhatsApp / Contact CTAs.

### WhatsApp needs-form
- Style the mini-form (business type → challenge → outcome → name/time) to match: token inputs,
  `--line` border, blue focus ring, 44px targets, inline validation styling (no alert boxes), a clear
  primary "Continue on WhatsApp" button in `--ala-success` context. Step progress is simple and quiet.

### CSS quality pass (both widgets + general)
- All colors/spacing/radii/shadows from tokens — remove any hard-coded hex left from porting.
- Check selector specificity (no `.section`/`.card` rules canceling each other); scope widget CSS.
- No layout shift when panels open or theme toggles; no horizontal overflow; text never clipped.
- Verify contrast AA for bubbles/chips/inputs in **both** themes.

## Acceptance
- Both widgets look polished and consistent in light **and** dark, on desktop panel and mobile sheet;
  match the brand tokens (no stray hex).
- All task-04 behavior still works (flows, language, focus trap, WhatsApp deep-link).
- Keyboard + reduced-motion + AA contrast all pass; safe-area respected; no CLS/overflow.
- Screenshots (light+dark, desktop+mobile) attached to the QA notes in `tasks/11`.

## Done-when
WhatsApp + Ask ALA are visually polished, tokenized, accessible, and behavior-preserving; committed.
