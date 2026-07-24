# ALA CORE UI/UX Improvement Design

## Goal

Evolve the existing ALA CORE marketing site into a distinctive, credible, and usable technology-partner experience while preserving its premium engineering positioning.

## Product context

ALA CORE is positioned as an international engineering company and technology partner. The site serves prospective business clients, existing clients, prospective employees, and product-interest visitors. Its primary job is to establish trust and move qualified visitors toward a project conversation.

## Approved approach

Use a balanced end-to-end pass: improve the visual identity and page hierarchy while fixing the foundational interaction, accessibility, localization, routing, and metadata issues that affect credibility.

## Design direction

- Keep the black/white/blue foundation, but make the visual system more intentional and less like a generic SaaS template.
- Use typography, spacing, rules, and restrained motion to communicate engineering precision.
- Spend the main visual risk on a memorable home-page signature element tied to systems, operations, or connected technology; keep supporting sections disciplined.
- Preserve dark mode as a designed experience rather than a simple color inversion.
- Use sentence case for interface copy and make CTA labels describe their actual outcomes.

## Experience structure

### Shared shell

- Replace state-only navigation with URL-based page navigation and browser history.
- Keep the shared header, footer, theme switcher, language switcher, AI entry point, and responsive mobile menu.
- Define shared tokens and reusable primitives for typography, buttons, cards, fields, badges, disclosures, and page heroes.

### Home

- Make the hero thesis and primary CTA immediately clear.
- Reduce repetition and improve the sequence from positioning to proof, capabilities, process, and conversion.
- Make the technology ecosystem content support credibility instead of acting as decorative motion.
- Ensure the page remains legible and purposeful on small screens.

### Supporting pages

- Solutions: improve scanning and comparison across capabilities.
- Products: make the coming-soon state credible and give interest actions a clear outcome.
- About and Careers: strengthen narrative hierarchy and reduce interchangeable content blocks.
- Contact: center the experience on one clear inquiry path with helpful guidance.

## Functional requirements

- Contact form must provide client-side validation, loading, success, and failure states, with submission wired to an agreed destination.
- Newsletter and product-interest actions must either work or be removed until their destination exists.
- External social and WhatsApp links must use real destinations or be hidden.
- AI assistant must clearly communicate whether it is a demo or live service and provide useful navigation outcomes.
- All supported user-facing copy must respond to EN, DE, and TR switching.

## Accessibility requirements

- Use semantic buttons and disclosure controls for interactive content.
- Add visible keyboard focus states and accessible names for icon-only controls.
- Add expanded/controlled state attributes to menus and disclosures.
- Treat the AI panel as a dialog with appropriate labeling and focus behavior.
- Respect `prefers-reduced-motion` for marquee, counters, transitions, and decorative animation.
- Verify contrast and touch-target sizing in light, dark, desktop, and mobile states.

## Technical and content requirements

- Replace placeholder document title, description, and social metadata.
- Decide and configure the intended indexing behavior before launch; the current `noindex` setting is temporary.
- Keep React + Vite + TypeScript + Tailwind v4 + Framer Motion unless a concrete need requires otherwise.
- Avoid unrelated backend or architectural rewrites.

## Success criteria

- The site has a recognizable ALA CORE visual identity and clearer conversion hierarchy.
- Primary navigation, page URLs, browser history, forms, language switching, theme switching, and dialogs behave consistently.
- No primary CTA is a dead end or placeholder.
- Keyboard, reduced-motion, responsive, and basic contrast checks pass.
- Production build succeeds after each implementation phase.

## Planned implementation phases

1. Shared design system, routing, metadata, and localization foundations.
2. Home-page hierarchy and responsive redesign.
3. Supporting-page UX improvements and working conversion actions.
4. Accessibility, motion, responsive, and cross-page polish.
5. Production verification and final UX audit.
