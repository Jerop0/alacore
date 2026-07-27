# Task 23 — FIX: "Whatever you need, we build it." section width (home)

Bug-fix. The homepage positioning band (`AnyIdea.astro`, heading "Whatever you need, we build it.")
renders too narrow on desktop — content is squeezed into the left ~55% with empty space on the right.

## Root cause
`src/components/sections/AnyIdea.astro` sets a **two-column grid** on the wrapper:
```css
@media (min-width: 1024px) {
  .any-idea__inner { grid-template-columns: 1.25fr 1fr; align-items: center; }
}
```
…but `.any-idea__inner` has **only one child** (`.any-idea__copy`). So the `1fr` second column is empty
and the whole band collapses into the first `1.25fr` track (~55% of the container).

## Fix (pick one)
**Simplest — make it full width (recommended):** remove the 2-column grid so the content spans the
full `.container`. The 3 points already form their own `repeat(3, 1fr)` grid, so they'll sit 3-across
full width.
```css
.any-idea__inner { display: block; }            /* or: display:grid; gap:2rem; (single column) */
/* delete the @media(min-width:1024px){ grid-template-columns:1.25fr 1fr } block */
```
Keep readability caps: `.any-idea__title` and `.any-idea__support` retain a `max-width` (~40ch / ~64ch)
so long lines don't run edge-to-edge, while the section itself fills the container.

**Alternative — actually use two columns:** if a right-hand visual is wanted, add real content to a
second child (e.g. a small orbit echo or an image) so `1.25fr 1fr` is balanced. Only do this if there's
real content for the right column — don't leave it empty.

## Also (quick wins in the same file)
- `align-items: center` is pointless with one child — drop it with the grid.
- Confirm tokens resolve (`--text-primary`/`--text-secondary` are defined; fine). No `--text-base` here.

## Verify
`npm run build && npm run preview` → home at **1024 / 1280 / 1440**: the band fills the container width,
heading/support wrap at a comfortable measure (not full-bleed), 3 points span 3-across, no empty right
gap; still stacks cleanly on mobile. Both themes.

## Done-when
The "Whatever you need, we build it." band uses the full content width (no empty half-column); committed.
