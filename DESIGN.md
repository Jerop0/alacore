# Design

Visual system for the ALA CORE website. It is the **companion** to the approved asset pack — where
this file and `ala-core-website-assets/IMPECCABLE.md` / `brand/brand-tokens.css` ever disagree, the
asset pack wins on brand, tokens, copy, and routes. See `DECISIONS.md` for the stack/architecture
overrides (Astro, no backend).

Register: **brand**. Color strategy: **Restrained** — tinted neutrals + one blue accent (≤ ~10% of a
light section); the dark hero, dark final CTA, header, and footer are the only fields where Core Ink
dominates. Light is the default (dark header/footer, white/mist body, blue accent — the reference
look). A dark theme is a first-class toggle that inverts the body while keeping the same hierarchy and
blue-only accent (IMPECCABLE §7).

The **signature** is the supplied hero orbital system (`visuals/core-orbit-hero.svg`): restrained
elliptical rings + nodes + a soft blue Core glow around the two-A logomark. It is the single bold
element; everything else stays disciplined.

---

## Color

Base tokens are the approved brand tokens (`brand/brand-tokens.css`). The app layers semantic
light/dark themes on top of them.

### Brand constants (from brand-tokens.css — do not change values)

| Token | Value | Role |
|---|---|---|
| `--ala-core-ink` | `#0B1220` | Header, hero, final CTA, footer, dark-mode body |
| `--ala-technology-blue` | `#155EEF` | Core, primary buttons, active, links, focus |
| `--ala-pure-white` | `#FFFFFF` | Main surfaces, reversed text |
| `--ala-interface-mist` | `#F4F7FB` | Alternate section bg, subtle panels |
| `--ala-text-dark` | `#111827` | Main text on light |
| `--ala-text-muted` | `#667085` | Secondary copy (≥14px; ~4.98:1 on white — AA body) |
| `--ala-border` | `#E4E7EC` | Hairline borders (1px) |
| `--ala-success` | `#12B76A` | **WhatsApp only** (supersedes old `#25D366`) |

Derived (add to the system): `--blue-hover:#1149C7` (pressed/small-text-on-white), `--blue-tint:#EAF1FF`
(icon chips, active wash), `--text-subtle:#4B5563` (muted text that is small or sits on a tint).

### Color rules (IMPECCABLE §4)

- Blue is an accent, **not** a page background. Green is WhatsApp-only.
- No gold, purple, cyan, red, yellow, or decorative multicolor. No heavy gradients. A soft blue Core
  glow is allowed **only** in the hero/event visuals.

### Light theme (default) — semantic map

`--bg:#FFFFFF` · `--surface:#F4F7FB` · `--surface-2:#EAF1FF` · `--line:#E4E7EC` · `--text:#111827` ·
`--text-muted:#667085` · `--text-subtle:#4B5563` · `--accent:#155EEF` ·
`--shadow-card:0 8px 28px rgb(16 24 40 / 8%)`.

### Dark theme (toggle) — body inverts, header/footer stay Core Ink

`--bg:#0B1220` · `--surface:#111A2E` · `--surface-2:#16223B` · `--line:rgba(148,163,184,.14)` ·
`--text:#F4F7FB` · `--text-muted:#94A3B8` · `--text-subtle:#B4C0D3` · `--accent:#4C86FF` (lightened
blue for AA on dark) · `--shadow-card:0 24px 60px rgba(0,0,0,.5)`.

**Contrast (must hold):** `--text` on `--bg` ≥ 12:1 both themes. `--text-muted` on `--bg` ≥ 4.5:1
(light 4.98:1). White on `--ala-technology-blue` ≈ 4.6:1 — OK for buttons/large; use `--blue-hover`
for small blue-on-white text. Never put `--text-muted` body copy on `--surface-2` — use `--text-subtle`.

---

## Typography

Clean modern sans with full Latin-Extended for **German (ä ö ü ß)** and **Turkish (İ ı ş ğ ç ö ü)**.
Per the brief and `brand-tokens.css`:

- **Primary: Manrope**, fallbacks `Inter`, `Noto Sans`, `system-ui`. Self-host via Fontsource, only the
  weights used (400/500/600/700/800), preloaded. `--ala-font: "Manrope","Inter","Noto Sans",system-ui,
  sans-serif`. (The logo SVGs also render "Manrope" in `<text>`, so it must be present.)
- Single family across all weights (deliberate, not reflex). No second display face.
- Arabic (if added later): `--ala-font-arabic:"Noto Sans Arabic","Noto Sans",sans-serif`.

### Scale (IMPECCABLE §5 — fluid `clamp()`)

| Role | Token / size | Weight | Notes |
|---|---|---|---|
| Hero (h1) | `--heading-hero: clamp(2.75rem,6vw,5.25rem)` | 700–800 | **UPPERCASE**, line-height 0.98–1.05, `text-wrap:balance`, no overflow at 320px |
| Section (h2) | `--heading-md: clamp(2.25rem,5vw,4rem)` | 700 | sentence case, `text-wrap:balance` |
| Subsection (h3) | `--heading-sm: clamp(1.75rem,3vw,2.5rem)` | 700 | card/section titles |
| XL / lead | `--text-xl:1.25rem` | 400–500 | subtext, ≤680px wide |
| Large | `--text-lg:1.125rem` | 400–500 | |
| Body | `--text-md:1rem` | 400–500 | line-height 1.55–1.7, ≤68ch, `text-wrap:pretty` |
| Small | `--text-sm:0.875rem` | 500–600 | labels |
| XS | `--text-xs:0.75rem` | 600 | chips, meta |
| Buttons | — | 650–700 | |

No ultra-thin display text. All-caps only for the h1 and short UI labels — never body copy.
Light type on dark surfaces: add +0.05 line-height.

---

## Spacing, radius, layout (IMPECCABLE §6)

- **Container:** `--ala-content-width:1200px`; `width:min(100% - 2rem, 1200px);margin-inline:auto`
  (desktop gutter 24px, mobile 16px).
- **Spacing base 8px:** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 80 · 96 · 120. Section padding
  `--ala-section-space: clamp(72px,8vw,120px)` (96 desktop / 72 tablet / 56 mobile). Card padding
  24–32px desktop, 20–24px mobile. Vary rhythm — don't compress to cram content above the fold.
- **Radius:** `--ala-radius-sm:10px` (chips, inputs, **buttons**), `--ala-radius-md:16px` (cards),
  `--ala-radius-lg:24px` (large panels). Thin `#E4E7EC` borders; subtle optional shadows
  (`--ala-shadow-card`) — cards must not float heavily.
- **Grid:** 12-col desktop / 6-col tablet / 1-col mobile. Card fields use
  `repeat(auto-fit,minmax(280px,1fr))`. Hero = 2-col desktop (copy left ≤650px, orbit right, ≥48px
  gap), stacked mobile (copy → actions → compact visual).
- **Z-index (semantic):** header 100 · floats 200 · backdrop 300 · panel/drawer 400 · toast 500. No 9999.
- **Breakpoints:** sm 480 · md 768 · lg 1024 · xl 1200 · xxl 1440. Test 320/375/430/768/1024/1280/1440;
  no horizontal scroll anywhere.

---

## Components (see IMPECCABLE §8–18, §28 for the full inventory)

- **Header** (dark, sticky, 76px desktop / 64px mobile): light horizontal logo · nav (Home, Solutions,
  Industries, For Tech Teams, About, Contact) · language switcher EN/DE/TR · theme toggle · primary
  "Talk to an expert". Subtle border/opacity change when sticky. Mobile: mark/compact logo + hamburger
  → tall drawer, focus-trapped, body-scroll locked, full-width CTA, language visible.
- **Buttons:** primary = solid `--ala-technology-blue`, white text, radius 10, min-height 48px, weight
  700; hover → `--blue-hover` + `--ala-shadow-card`, active 0.98. Secondary = transparent + `--line`
  border (on dark: white 20% border). Ghost/text = blue label + arrow. `:focus-visible` = 2px blue
  ring + 2px offset. Min tap target 44px.
- **What We Build (6 cards):** thin line icon in a `--blue-tint` chip, short title, one plain sentence;
  the whole card is the link to `/solutions` (**no "Learn more" text**). Hover = blue border +
  light-blue icon fill + ≤2px lift; no 3D/glass/big shadow.
  Lucide map (build-spec §): Briefcase / Globe / MessagesSquare / Settings /
  ChartNoAxesColumnIncreasing / Database. Vary layout so it doesn't read as a stamped grid.
- **Industries:** overview uses horizontal tabs / selectable cards → one clear panel (business type ·
  common needs · relevant examples · one CTA); mobile = horizontally scrollable tab row + panel. Plus
  7 dedicated pages. Don't repeat one generic sentence 7×.
- **Example Solutions (5):** Restaurant / Hospital / School / Warehouse / Company — recognizable
  situation + outcome as plain-language pills, never architecture.
- **Process (4 steps):** `01 Understand · 02 Design · 03 Build · 04 Support` (numbers earned — it *is*
  a sequence). Horizontal desktop with connector, vertical mobile. Connector must not imply work stops
  after launch.
- **Why ALA CORE (3):** icon + heading + ≤2 short lines each (One partner · Clear communication ·
  Built around your workflow). Open columns, not heavy cards.
- **Final CTA:** Core Ink panel, faint orbit echo, "BUILD THE CORE OF YOUR BUSINESS.", primary "Talk to
  an expert", optional secondary "Describe your need" → opens **Ask ALA** (must not navigate).
- **Footer** (dark, **grouped columns**): brand block left (light logo + one-line positioning), then
  three labeled link columns — **Explore** (Solutions · Industries · For Tech Teams), **Company**
  (About · Products · Work), **Connect** (Contact · WhatsApp · `support@alacore.net`); thin-divider
  bottom bar with `© {year}` · theme toggle · EN/DE/TR. Aligned on a CSS grid, consistent baselines,
  generous spacing; stacks brand→columns→bar on mobile. No unapproved phone/address/socials/certs.
- **Product / Work cards:** reuse the base `Card` (surface bg, `--line` border, radius 16, subtle
  shadow, ≤2px hover lift). Product card = icon/logo + name + one-line value + honest **status badge**
  (live/beta/coming-soon) + one CTA. Work card = industry + what we built + honest outcome (+ real
  client/logo/quote **only when present** — never placeholders). Grid
  `repeat(auto-fit,minmax(280px,1fr))`. Work empty-state = a quiet invitation, never filler cards.
- **Accordion / expandable (progressive disclosure):** native `<details>/<summary>` (or a tiny island /
  `popover`) for the deep industry & solution catalogs. `<summary>` = title + one-line benefit, chevron
  that rotates on open, focusable with visible ring, `aria-expanded` correct; open reveals a short
  detail block + small CTA. Ease-out ≤220ms, no height-jank under reduced motion, no CLS. Content stays
  in the DOM (SEO-crawlable). No Bootstrap.
- **Chat widgets (WhatsApp + Ask ALA):** fully token-driven in both themes (no stray hex). Distinct
  bubbles (assistant `--surface`, user `--blue-tint`), `Pill` quick-replies, token inputs with blue
  focus ring, rounded panels (`--r-lg`) with `--shadow-card`, mobile bottom sheet with safe-area
  padding; panel z-index 400. Ease-out slide/scale+fade open. See `tasks/15` for the polish spec.
- **Language switcher:** EN/DE/TR in header + footer; persists; preserves the current route; updates
  `<html lang>` + hreflang.
- **Theme toggle:** sun/moon; persists to localStorage; defaults to OS `prefers-color-scheme`; sets
  `data-theme` on `<html>`. No layout shift on switch.
- **WhatsApp float:** green (`--ala-success`) circle, bottom-right above safe area, doesn't cover Ask
  ALA/nav/forms; opens the business-needs mini-flow → prefilled `wa.me` message. Number from a single
  config constant.
- **Ask ALA float + panel:** blue circle labeled "Ask ALA", visually separate from WhatsApp; desktop
  bottom-right panel / mobile bottom sheet; accessible close, focus trap + return. Client-side guided
  flow (opening question + 4 choices → ≤3 follow-ups → 1–2 plain-language recommendations → WhatsApp or
  contact). Preserves language; never quotes price/dates.
- **Contact form:** Mist inputs, `--line` border, blue focus ring, 44px min; fields per IMPECCABLE §21;
  client-side validation, inline errors (no alert boxes), preserve values on error, loading + success,
  no duplicate submit; builds a prefilled WhatsApp message (no backend). Only email = `support@alacore.net`.

---

## Motion (IMPECCABLE §9, §22)

Restrained, functional, ease-out only (`cubic-bezier(.22,1,.36,1)`); no bounce/elastic.

- **Hero orbit:** animate the supplied SVG's 4 ring `<ellipse>` groups slowly + independently (18–32s)
  and let the Core glow pulse subtly. **Never animate the A forms.**
- Standard transitions 160–220ms; section reveals ≤400ms and only enhance already-visible content
  (never gate visibility). Don't animate every element. No parallax on mobile.
- `@media (prefers-reduced-motion: reduce)`: freeze the orbit (static frame), drop parallax, replace
  reveals with instant/opacity. Never ship blank.

---

## Imagery & iconography (IMPECCABLE §3, §25, §29)

- **Icons:** one Lucide line set, 1.75–2px stroke, monochrome inheriting `currentColor`/blue in chips.
  No filled/duotone mix, no rounded-square icon tiles above every heading.
- **Logos:** use the supplied SVGs (never redraw the mark). Light horizontal on dark header/footer;
  dark horizontal on white; mark for favicon/compact. Two independent A forms (left larger), blue Core
  between them — never an M, never same-size, no crossbar/extra atoms/gradients. Clear space ≥ half the
  Core diameter; horizontal min 160px, mark min 32px.
- **Hero visual:** supplied `core-orbit-hero.svg` (treat as drop-in; SVGs are "still updating").
- **No stock photos** on the homepage. Visual weight carried by the orbit, type, and blue accent.
- Never place text inside raster images (breaks localization). All logos/icons/orbit as SVG for perf.

---

## Section heading pattern (IMPECCABLE §10)

Optional small blue eyebrow → short title (≤720px) → one supporting sentence (≤680px). The eyebrow is
**allowed but optional** — use it sparingly for rhythm, not above every section (that repetition is the
AI-scaffold tell). No long intros before cards.

## Slop guard (on top of the shared bans)

Keep the white body genuinely white. Spend all boldness on the orbit + blue. No gradient text, no
side-stripe borders, no default glassmorphism, no identical endless card grid, no eyebrow on every
section, no display type > ~96px. Zero engineering jargon anywhere except For Tech Teams.
