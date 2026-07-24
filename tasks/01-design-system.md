# Task 01 — Design system

## Goal
Implement the full token + primitive layer so every later page composes from consistent building
blocks: light/dark theme tokens, type scale, spacing/rhythm, buttons, cards, section heading, pills,
icon wrapper, and a working theme toggle. Ship an internal `/styleguide` page to eyeball all states.

## Read-first
`../DESIGN.md` (all sections), `brand/brand-tokens.css`, IMPECCABLE §4–6, §9–10, §22–23.

## Steps
1. **`src/styles/tokens.css`:** brand constants (`--ala-*`) + semantic **light** tokens on `:root`
   and **dark** tokens on `[data-theme="dark"]` exactly as in `DESIGN.md` (bg, surface, surface-2,
   line, text, text-muted, text-subtle, accent, shadow-card, blue-hover, blue-tint). Include the type
   scale tokens (`--text-xs…xl`, `--heading-sm/md/hero`), radii (10/16/24), `--ala-content-width`,
   `--ala-section-space`, z-index scale.
2. **`src/styles/base.css`:** reset, `html{scroll-behavior:smooth}` (guarded by reduced-motion), body
   font/color/bg from tokens, `.container`, `.section` padding rhythm, `:focus-visible` ring, selection
   color, `text-wrap` defaults (`balance` on h1–h3, `pretty` on p), reduced-motion block that neutralizes
   transitions/animations.
3. **UI primitives** in `components/ui/`:
   - `Button.astro` — variants `primary` (solid blue, white, 48px min, radius 10, weight 700, hover
     `--blue-hover`, active .98), `secondary` (border), `ghost` (blue label + arrow). `:focus-visible`
     ring. Renders `<a>` or `<button>`. Supports on-dark variant.
   - `Card.astro` — surface bg, `--line` border, radius 16, `--ala-shadow-card`, hover = blue border +
     ≤2px lift (opt-in). Slot-based.
   - `SectionHeading.astro` — optional blue eyebrow (prop, off by default), title (≤720px), supporting
     line (≤680px). Use eyebrow sparingly, never on every section.
   - `Pill.astro` — small rounded label for capability lists.
   - `Icon.astro` — Lucide wrapper, `stroke-width:1.75–2`, `currentColor`, size prop, `aria-hidden`
     unless labeled.
4. **`ThemeToggle.astro`** (island): sun/moon button, toggles `data-theme`, persists to
   `localStorage('ala-theme')`; first visit follows OS `prefers-color-scheme` (the pre-paint script from
   task 00 handles initial state — the toggle only flips + stores). Accessible label reflecting state.
   No layout shift on switch.
5. **`/styleguide`** (dev-only page, exclude from sitemap): render every token swatch, all type steps,
   all button/card/pill/icon states, both themes. Use it to verify contrast.

## Acceptance
- Body text ≥4.5:1, large ≥3:1 in **both** themes (check muted on surface/surface-2 — use text-subtle
  where needed). Verify on `/styleguide`.
- Theme toggle: light default, dark works, persists across reload, respects OS on first visit, zero CLS.
- Primitives are keyboard-focusable with visible rings; buttons ≥44px tap target.

## Done-when
`/styleguide` shows all primitives in both themes passing contrast; committed.
