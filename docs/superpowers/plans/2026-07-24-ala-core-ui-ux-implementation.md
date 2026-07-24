# ALA CORE UI/UX Improvement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Evolve the existing ALA CORE marketing site into a distinctive, credible, accessible, and conversion-focused technology-partner experience.

**Architecture:** Keep the existing React + Vite single-page application, but replace manual page state with a small URL/history router, centralize shared UI tokens and primitives, and progressively redesign the shell, Home page, supporting pages, and conversion flows. Keep content data in typed modules and preserve the existing theme/language context.

**Tech Stack:** React 19, TypeScript, Vite 8, Tailwind CSS v4, Framer Motion, Lucide React, Playwright.

## Global Constraints

- Keep React + Vite + TypeScript + Tailwind v4 + Framer Motion unless a concrete need requires otherwise.
- Preserve the existing EN, DE, and TR language options.
- Preserve dark mode as a designed experience rather than a simple color inversion.
- Use sentence case for interface copy and make CTA labels describe their actual outcomes.
- Avoid unrelated backend or architectural rewrites.
- Do not overwrite existing user changes in `src/components/Footer.tsx`, `src/components/Nav.tsx`, `src/i18n.ts`, `src/pages/Home.tsx`, or untracked assets.
- Verify each task with `npm run build`; use local Playwright smoke checks for rendered behavior.

---

### Task 1: Establish shared UI tokens, primitives, and route model

**Files:**
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/Field.tsx`
- Create: `src/components/ui/Disclosure.tsx`
- Create: `src/components/ui/PageHero.tsx`
- Create: `src/components/ui/SectionHeading.tsx`
- Create: `src/router.ts`
- Modify: `src/types.ts`
- Modify: `src/App.tsx`
- Modify: `src/index.css`

**Interfaces:**
- `router.ts` exports `readPage(pathname: string): Page`, `pagePath(page: Page): string`, and `navigateTo(page: Page): void`.
- `Button` accepts `variant: 'primary' | 'secondary' | 'ghost'`, `size?: 'sm' | 'md' | 'lg'`, and normal button props.
- `Disclosure` accepts `id`, `title`, `open`, `onToggle`, and children.
- `PageHero` accepts `eyebrow`, `title`, `description`, and optional `children`.
- `SectionHeading` accepts `eyebrow`, `title`, `description`, and optional alignment.

- [ ] **Step 1: Add typed route definitions and path helpers.**

  Extend `Page` support with stable paths: `/`, `/solutions`, `/products`, `/about`, `/careers`, and `/contact`. Unknown paths must resolve to `home` without throwing.

- [ ] **Step 2: Add shared primitives using the existing CSS variables.**

  Build the primitives as small semantic components. Primary buttons use `var(--blue)`, secondary buttons use transparent surfaces with `var(--border)`, and all variants expose visible `:focus-visible` styles.

- [ ] **Step 3: Add shared CSS tokens and motion preferences.**

  Add spacing/radius/shadow tokens only where they reduce repetition. Add a `@media (prefers-reduced-motion: reduce)` rule that disables marquee and non-essential animations while preserving readable state changes.

- [ ] **Step 4: Update `App.tsx` to derive page state from `window.location.pathname`.**

  Register `popstate`, use `history.pushState` for internal navigation, and keep the existing context API (`page`, `setPage`) so pages can migrate incrementally. Navigation must scroll to the top after route changes.

- [ ] **Step 5: Verify the foundation.**

  Run:

  ```bash
  npm run build
  ```

  Expected: production build succeeds with no TypeScript or Vite errors.

  Then use Playwright to visit `/solutions`, click Home, press browser Back, and verify the URL and rendered heading change correctly.

- [ ] **Step 6: Commit the foundation.**

  ```bash
  git add src/components/ui src/router.ts src/types.ts src/App.tsx src/index.css
  git commit -m "feat: add shared UI primitives and URL navigation"
  ```

### Task 2: Replace placeholder metadata and complete localization boundaries

**Files:**
- Modify: `index.html`
- Modify: `.figma/make/site.json`
- Modify: `src/i18n.ts`
- Modify: `src/components/Nav.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/pages/Solutions.tsx`
- Modify: `src/pages/Products.tsx`
- Modify: `src/pages/About.tsx`
- Modify: `src/pages/Careers.tsx`
- Modify: `src/pages/Contact.tsx`

**Interfaces:**
- All visible labels and paragraphs consumed by pages/components must come from the typed translation object or clearly marked, language-neutral product data.
- Site metadata must identify ALA CORE and use a real description.

- [ ] **Step 1: Replace document and site metadata.**

  Set the document title to `ALA CORE — Technology Partner`, set a specific description, and remove the generic Figma Make description. Keep `noindex` only if the user confirms this is still a private preview; otherwise set the intended production indexing behavior.

- [ ] **Step 2: Inventory hardcoded user-facing strings.**

  Move navigation, footer headings, section labels, form helper copy, solution/product labels, and status text into the translation shape. Keep email addresses and technology/product names outside translations where they are proper names.

- [ ] **Step 3: Add German and Turkish translations for every new key.**

  Ensure `useTranslations('de')` and `useTranslations('tr')` return complete values without falling back silently for visible page content.

- [ ] **Step 4: Verify language switching across every page.**

  Playwright smoke check: select DE and TR from the desktop and mobile controls, navigate to each page, and assert that the main heading and at least one CTA change from English.

- [ ] **Step 5: Build and commit.**

  ```bash
  npm run build
  git add index.html .figma/make/site.json src/i18n.ts src/components/Nav.tsx src/components/Footer.tsx src/pages
  git commit -m "feat: complete site metadata and localization coverage"
  ```

### Task 3: Redesign the shared shell and Home page hierarchy

**Files:**
- Modify: `src/components/Nav.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/components/FloatingActions.tsx`
- Modify: `src/components/AIChat.tsx`
- Modify: `src/pages/Home.tsx`
- Modify: `src/index.css`

**Interfaces:**
- Shared shell consumes the primitives from Task 1 and route helpers from `src/router.ts`.
- Home remains composed from typed section data and uses `useApp()` for navigation, language, theme, and AI actions.

- [ ] **Step 1: Rework the desktop and mobile navigation.**

  Add `aria-expanded`, `aria-controls`, a labeled mobile panel, visible focus states, and a close action when navigation completes. Preserve the existing language and theme controls. Use route links/buttons that update the URL.

- [ ] **Step 2: Refine the footer hierarchy.**

  Keep department contact routing, but reduce low-priority density, make legal links explicit, and remove or disable placeholder social links until real destinations exist. Add a clear newsletter state instead of a dead input.

- [ ] **Step 3: Redesign the Home hero around one thesis and one primary conversion path.**

  Use a concise eyebrow, headline, supporting paragraph, primary project CTA, secondary capability CTA, and proof stats. Introduce one distinctive systems-oriented signature visual that remains quiet in dark mode and collapses cleanly on mobile.

- [ ] **Step 4: Reorder and simplify Home sections.**

  Use this sequence: hero, proof/ecosystem, business outcomes, selected capabilities, process, products, FAQ, final CTA. Remove repeated explanations and ensure every section has a distinct job.

- [ ] **Step 5: Make marquee, counters, FAQ, and floating actions accessible.**

  Pause or replace marquee motion under reduced motion, render counters as meaningful text when animation is disabled, convert FAQ rows to `Disclosure`, and keep floating actions within mobile safe areas.

- [ ] **Step 6: Verify Home at three widths and both themes.**

  Use Playwright at 390px, 768px, and 1440px. Assert no horizontal overflow, one visible `h1`, visible focus on keyboard navigation, and readable primary CTA text in light and dark themes.

- [ ] **Step 7: Build and commit.**

  ```bash
  npm run build
  git add src/components src/pages/Home.tsx src/index.css
  git commit -m "feat: redesign shared shell and home experience"
  ```

### Task 4: Improve supporting pages and conversion flows

**Files:**
- Modify: `src/pages/Solutions.tsx`
- Modify: `src/pages/Products.tsx`
- Modify: `src/pages/About.tsx`
- Modify: `src/pages/Careers.tsx`
- Modify: `src/pages/Contact.tsx`
- Modify: `src/components/Footer.tsx`
- Create: `src/lib/forms.ts`

**Interfaces:**
- `src/lib/forms.ts` exports `validateContactForm(form: ContactForm): FormErrors` and `submitContactForm(form: ContactForm): Promise<void>`.
- Contact form defines a typed `ContactForm` model and renders field-level errors from `FormErrors`.
- Product interest and newsletter actions use one explicit destination or show a clear unavailable state; they must not pretend to submit.

- [ ] **Step 1: Refactor supporting-page heroes and headings to shared primitives.**

  Preserve each page’s content but align hero spacing, title scale, CTA placement, and section heading behavior with the shared system.

- [ ] **Step 2: Improve Solutions scanning.**

  Keep the eight capability areas, but use stronger grouping, shorter summaries, consistent capability lists, and a clear CTA after visitors understand the service range.

- [ ] **Step 3: Improve Products credibility.**

  Present the development status once, make SmartStock AI the primary case, and connect “Register interest” to the contact flow with product context rather than a no-op button.

- [ ] **Step 4: Implement contact validation and submission states.**

  Require name, company, preferred contact method, and description. Show inline errors, disable the submit action while pending, show a success state after the configured submission resolves, and show a retryable failure state when it rejects. Until a real endpoint exists, use a clearly labeled mailto fallback rather than claiming server delivery.

- [ ] **Step 5: Add product-interest and newsletter outcomes.**

  Product interest navigates to Contact with the product preselected in the inquiry context. Newsletter either submits to an agreed endpoint or is replaced by a direct email/update link.

- [ ] **Step 6: Verify every primary CTA.**

  Playwright smoke check each page’s primary CTA, product interest action, form validation, successful submission state, and Contact-to-AI path.

- [ ] **Step 7: Build and commit.**

  ```bash
  npm run build
  git add src/pages src/components/Footer.tsx src/lib/forms.ts
  git commit -m "feat: improve supporting pages and conversion flows"
  ```

### Task 5: Accessibility, dialog behavior, and final polish

**Files:**
- Modify: `src/components/AIChat.tsx`
- Modify: `src/components/Nav.tsx`
- Modify: `src/pages/Home.tsx`
- Modify: `src/pages/Contact.tsx`
- Modify: `src/index.css`
- Create: `scripts/ui-smoke.mjs`

**Interfaces:**
- AI chat exposes `role="dialog"`, `aria-modal="true"`, an accessible title, Escape-to-close, and focus return to its launch button.
- `scripts/ui-smoke.mjs` exits nonzero when route, overflow, heading, form, or dialog checks fail.

- [ ] **Step 1: Harden keyboard and semantic behavior.**

  Add focus-visible styles to all interactive controls, use semantic links/buttons, label all form controls, and ensure mobile menu and AI dialog can be operated without a pointer.

- [ ] **Step 2: Implement AI dialog focus behavior.**

  Capture the opener before opening, focus the dialog close button or input on open, close on Escape, and restore focus on close. Keep the assistant copy honest about its demo/live status.

- [ ] **Step 3: Add reduced-motion behavior to Framer Motion components.**

  Use `useReducedMotion()` for entrance, hover, counter, and panel transitions. Disable decorative marquee movement with CSS when the user requests reduced motion.

- [ ] **Step 4: Add the Playwright smoke script.**

  The script must visit all six routes at 390px and 1440px, assert `scrollWidth === innerWidth`, assert one `h1`, verify Home-to-Contact navigation, verify the contact form’s required-field errors, open/close AI chat with Escape, and verify at least one language switch.

- [ ] **Step 5: Run final checks.**

  ```bash
  npm run build
  node scripts/ui-smoke.mjs
  ```

  Expected: both commands exit with status 0.

- [ ] **Step 6: Review the final diff and commit.**

  ```bash
  git diff --check
  git status --short
  git add src scripts
  git commit -m "fix: complete accessibility and interaction polish"
  ```

## Final handoff checklist

- [ ] Home, Solutions, Products, About, Careers, and Contact render at desktop and mobile widths.
- [ ] Internal navigation updates URL and browser history.
- [ ] EN, DE, and TR content is complete for visible UI.
- [ ] Light and dark themes preserve contrast and hierarchy.
- [ ] Contact, newsletter, product interest, AI, and external links have honest outcomes.
- [ ] Keyboard focus, Escape behavior, dialog semantics, and reduced motion are verified.
- [ ] `npm run build` and `node scripts/ui-smoke.mjs` pass.
