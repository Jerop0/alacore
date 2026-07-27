# Task 19 — Rich card interaction & layout (Industries + Solutions)

## Goal
Define the **reusable detail-card pattern** for the Industries and Solutions pages: rich cards (not
one-liners), **one card per row**, that reveal deeper information on interaction — with a **pop-up
dialog** when there's a lot to show. **No "Learn more" text. No collapse for one-line content.** This
**supersedes the interaction spec in `tasks/14`** (keep task 14's *content*; use this file's *pattern*).

> Decided with **/impeccable** + **/frontend-design**: "structure is information" (the reveal encodes a
> real business→detail hierarchy, not decoration), restraint (hover does one thing), and the a11y floor.

## The pattern

### Layout — one card per row ("solution rows")
- Each card is a **full-width row**, rich enough to "talk": title, a **short business summary that's
  always visible** (2–4 lines, not one word), and a row of plain-language capability **pills**. Not a
  stamped icon-grid (avoids the identical-card-grid slop).
- Rows stack with generous spacing; alternate subtle white / Interface-Mist for rhythm. On mobile they
  remain single-column full-width.

### Reveal deeper info — accessible, not hover-only
The extra detail (the longer "what this includes / how it helps / examples", and — on Solutions — the
tech layer) is revealed on interaction. **Trigger on hover AND focus AND tap** — never hover-only:
mobile has no hover, and hover-only content fails WCAG 1.4.13. The reveal must be **dismissible** (Esc /
click-away), **hoverable** (pointer can enter it without it vanishing), and **persistent** (stays until
dismissed/blur).
- **No "Learn more" link.** The card itself is the affordance; add a subtle, non-textual cue (a chevron
  / "+" that rotates, or a clear hover/focus state). A short honest label like "How we build it" is fine
  where it names a real thing — just never the words "Learn more".
- **Don't collapse one-liners.** If a card's info is one line, show it. Reveal is only for cards that
  genuinely carry a lot.
- Keep hover's **only** meaningful effect the reveal (a small ≤2px lift is ok; no tilt/scale noise).

### Two tiers by volume
1. **Moderate extra** (a paragraph + a few points) → **inline expand** within the row (hover/focus/tap
   grows an expansion panel). Animate `opacity` + `transform`/`clip-path` (or `grid-template-rows`),
   ease-out ≤220ms, **no CLS**; instant under reduced motion.
2. **A lot of info** (long lists, the Solutions tech/stack/techniques layer) → **pop-up dialog**.
   - Use the **native `<dialog>` / popover API** — *not* an absolutely-positioned panel inside an
     `overflow` container (it gets clipped; /impeccable rule). Escape the stacking context.
   - Full a11y dialog: opens on click/tap/Enter, **focus trap**, Esc + close button (≥44px, labeled),
     **returns focus** to the trigger, scrollable body. Desktop = centered/anchored panel; mobile =
     full-screen or bottom sheet with safe-area padding. z-index per the scale (panel 400 / backdrop 300).

### Cross-cutting
- **SEO:** all revealed text (including dialog content) lives in the DOM so it's crawlable.
- **Keyboard:** trigger is a real `<button>`/`<summary>`-equivalent, focusable, `aria-expanded` /
  `aria-haspopup="dialog"` correct; visible focus ring.
- **Theme + tokens:** all colors/radii/shadows from tokens, light + dark.

## Card unit
On Industries/Solutions the card unit is a **theme/family group** (one rich card per theme), which holds
several items each with a "how it works" — see [`21-theme-cards-how-it-works.md`](21-theme-cards-how-it-works.md).
Not one card per item.

## Apply to
- **Industries** (`tasks/06` + `14` + `21`): one card per theme; each item's "how it works" reveals
  (hover/focus/tap), heavy themes open a pop-up.
- **Solutions** (`tasks/05` + `20` + `21`): each solution family is a full-width row (business summary
  visible); the **tech layer** opens in a **pop-up dialog** ("How we build it").

## Acceptance
- Cards are full-width rows with always-visible business summaries (never one-word); no "Learn more"
  anywhere; no collapse on one-line cards.
- Deeper info reveals on **hover + focus + tap**; reveal is dismissible/hoverable/persistent; works with
  keyboard and on touch.
- Large content opens an accessible **native dialog/popover** (focus trap, Esc, return focus, mobile
  sheet), not a clipped absolute panel.
- Reduced-motion honored; no CLS; both themes; revealed text present in the DOM (SEO).

## Done-when
The rich-row + reveal + dialog pattern is implemented and reused on Industries and Solutions; committed.
