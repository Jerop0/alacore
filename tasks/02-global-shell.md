# Task 02 — Global shell (header, mobile menu, footer, language switcher)

## Goal
Build the persistent dark header and footer + mobile menu + language switcher used on every page, all
localized and accessible. After this task, every route shares the same shell.

## Read-first
IMPECCABLE §8, §17, §20, §23; `../DESIGN.md` (Components); `content/site-copy.json` (`nav`).

## Steps
1. **`components/layout/SiteHeader.astro`** (dark, Core Ink):
   - Height 76px desktop / 64px mobile; sticky after scroll begins with a subtle border/opacity/shadow
     change (small island or CSS `position:sticky` + scroll listener).
   - Left: light horizontal logo (`public/brand/ala-core-horizontal-light.svg`, min 160px; compact mark
     on mobile).
   - Nav (center/right): **Home, Solutions, Industries, About, Contact** (5 items — "For Tech Teams" is
     merged into Solutions, `tasks/20`) — labels from the `nav` copy for the active locale; mark the
     current route `aria-current="page"`.
   - Right cluster: `LanguageSwitcher`, `ThemeToggle`, primary **"Talk to an expert"** button (→ `/contact`).
2. **`components/layout/MobileMenu.astro`** (island): hamburger → tall/full-height drawer. Focus-trap,
   `Esc` to close, **lock body scroll** while open, return focus to the toggle on close. Nav stacked with
   large tap targets; language switcher visible; CTA full-width. `aria-expanded`/`aria-controls`.
3. **`components/layout/LanguageSwitcher.astro`**: EN / DE / TR. Switching **preserves the current
   route** (map the current path to its localized equivalent via `Astro.currentLocale` + a path helper
   in `lib/i18n.ts`) and persists choice to `localStorage`. Show active locale state. Keyboard operable.
4. **`components/layout/SiteFooter.astro`** (dark, Core Ink) — **grouped-columns layout**, aligned via
   CSS grid:
   - **Brand block (left):** light logo/mark + one-line positioning ("One partner. Every business
     solution.").
   - **Three labeled link columns (right):**
     - **Explore** — Solutions · Industries · For tech teams (→ `/solutions#for-tech-teams`)
     - **Company** — About · How we work · Products · Work
     - **Connect** — Contact · WhatsApp · `support@alacore.net` (mailto)
   - **Bottom bar** (thin `--line` divider above): `© {year} ALA CORE` · theme toggle · EN / DE / TR.
   - Column labels localized (add keys in task 09). **No** unapproved phone/address/socials/certs.
   - Responsive: brand on top, then columns 2-up (tablet) → stacked (mobile); bottom bar stacks/centers.
     Keep it simple and well-aligned — tidy columns, consistent baseline, generous spacing.
5. Wire `SiteHeader`/`SiteFooter` into `Layout.astro`. Add a visually-hidden skip-link to `#main`.

## Acceptance
- Shell renders identically on all routes in EN/DE/TR; nav + footer labels localized; active route
  marked.
- Language switch stays on the same page in the target language and persists after reload.
- Mobile menu: opens/closes via keyboard + pointer, traps focus, locks scroll, returns focus; CTA
  full-width; language visible.
- Header logo uses the **light** SVG on the dark bar; contrast AA; sticky state is subtle.

## Done-when
Header, mobile menu, footer, and language switcher work across locales and pass keyboard + a11y checks;
committed.
