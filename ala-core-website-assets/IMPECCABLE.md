---
title: ALA CORE Website Design and Brand Implementation Standard
status: Approved implementation source of truth
version: 1.0.0
updated: 2026-07-24
target: Impeccable / coding agents / designers
stack: React + Vite + TypeScript + Express
---

# ALA CORE Website Design Pattern

Build a professional multilingual B2B website for ALA CORE using the rules in this document. This is not an inspiration list. It is the implementation standard.

When a visual preference conflicts with this file, follow this file and the supplied brand assets.

## 1. What the website is branding ALA CORE for

ALA CORE must be perceived as:

- One accountable partner for every business technology need.
- A company that understands business before proposing technology.
- A clear, reliable, international B2B partner.
- A team that can connect customer service, operations, staff, sales, stock, reporting, and growth.
- A long-term partner that designs, builds, and supports complete solutions.

The website is not branding ALA CORE as a narrow software agency, a hosting provider, an AI experiment, or a collection of unrelated technical services.

### Brand purpose

Make useful technology simple for businesses.

### Brand promise

One partner. Every business solution.

### Brand essence

One intelligent core connecting the tools a business needs.

### Customer outcomes

Every public-facing page should emphasize one or more of these outcomes:

- Save time.
- Reduce manual work.
- Serve customers faster.
- Organize daily operations.
- Improve staff coordination.
- See clear reports.
- Reduce mistakes.
- Grow without adding unnecessary complexity.

### Audience

Write first for non-technical business decision-makers:

- Business owners
- Managers
- Restaurants and cafes
- Hospitals and clinics
- Schools and training centers
- Companies and offices
- Warehouses and logistics businesses
- Retail and e-commerce businesses
- Factories and manufacturing businesses
- Service businesses

Technical buyers are served by the separate **For Tech Teams** page.

## 2. Communication standard

### Voice

ALA CORE sounds:

- Clear
- Calm
- Professional
- Helpful
- Direct
- Reliable
- International

### Writing rules

- Lead with the business benefit.
- Use short sentences.
- Keep paragraphs to a maximum of three short lines.
- Use familiar business words.
- Explain what the customer can achieve.
- Use sentence case in body copy.
- Use uppercase only for important display headings and small UI labels.
- Never exaggerate capabilities, timelines, savings, or results.
- Never use fake statistics, fake testimonials, fake clients, or fake awards.

### Homepage exclusions

Do not use the following words on the homepage:

- Kubernetes
- RAG
- CI/CD
- APIs
- DevOps
- Microservices
- Containers
- Vector databases
- LLM orchestration

Technical terminology belongs only on **For Tech Teams**.

## 3. Approved logo system

The symbol represents:

- A large left **A**
- A smaller right **A**
- A blue Core between them
- Two restrained orbital segments

The two A forms must remain visibly independent.

### Never

- Do not connect the two A forms into an M.
- Do not make both A forms the same size.
- Do not close either A with a crossbar.
- Do not turn the symbol into an airplane or rocket.
- Do not add extra atoms, electrons, circuit lines, gradients, bevels, shadows, or colors.
- Do not move the blue Core outside the space between the A forms.
- Do not stretch, rotate, skew, outline, or redraw the supplied logo.

### Required assets

| Use | Asset |
| --- | --- |
| Dark header and footer | `logos/ala-core-horizontal-light.svg` |
| White pages and documents | `logos/ala-core-horizontal-dark.svg` |
| Compact dark-background placement | `logos/ala-core-mark-light.svg` |
| Compact light-background placement | `logos/ala-core-mark-dark.svg` |
| Browser/app icon | `logos/ala-core-favicon.svg` |
| Hero technology visual | `visuals/core-orbit-hero.svg` |

Use SVG in the website. PNG files are previews and platform fallbacks.

### Clear space

Maintain clear space equal to at least half the blue Core diameter on every side of the logo.

### Minimum sizes

- Horizontal logo: 160px wide on web.
- Standalone mark: 32px.
- Favicon: use the dedicated favicon asset.

## 4. Color system

```css
--core-ink: #0B1220;
--technology-blue: #155EEF;
--pure-white: #FFFFFF;
--interface-mist: #F4F7FB;
--text-dark: #111827;
--text-muted: #667085;
--border: #E4E7EC;
--success: #12B76A;
```

### Color roles

| Color | Role |
| --- | --- |
| Core Ink | Header, hero, final CTA, footer, dark mode |
| Technology Blue | Core, primary buttons, active states, links, focus |
| Pure White | Main surfaces and reversed text |
| Interface Mist | Alternate section backgrounds and subtle panels |
| Text Dark | Main text on light surfaces |
| Text Muted | Secondary copy |
| Success | WhatsApp only |

### Color restrictions

- Blue is an accent, not a full-page background.
- Green is reserved for WhatsApp.
- Do not add gold, purple, cyan, red, yellow, or decorative multicolor effects.
- Do not use heavy gradients.
- A soft blue Core glow is allowed only in the hero and event-style visuals.

## 5. Typography

### Families

- Primary Latin: `Manrope`, with `Inter` and `Noto Sans` fallbacks.
- Arabic fallback if added later: `Noto Sans Arabic`.

### Type scale

```css
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-md: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--heading-sm: clamp(1.75rem, 3vw, 2.5rem);
--heading-md: clamp(2.25rem, 5vw, 4rem);
--heading-hero: clamp(2.75rem, 6vw, 5.25rem);
```

### Typography behavior

- Hero: 700–800 weight, uppercase, tight line height around 0.98–1.05.
- Section headings: 700 weight.
- Body: 400–500 weight, 1.55–1.7 line height.
- Buttons: 650–700 weight.
- Do not use ultra-thin display text.
- Never allow headings to overflow at 320px.

## 6. Layout system

### Grid

- Maximum content width: 1200px.
- Desktop grid: 12 columns.
- Tablet grid: 6 columns.
- Mobile grid: 1 column.
- Desktop gutters: 24px.
- Mobile gutters: 16px.

### Spacing

Use an 8px spacing base:

`4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 120`

- Standard section padding: 96px desktop, 72px tablet, 56px mobile.
- Card padding: 24–32px desktop, 20–24px mobile.
- Do not compress sections to fit more content above the fold.

### Shape

- Small radius: 10px.
- Card radius: 16px.
- Large panel radius: 24px.
- Button radius: 10px.
- Use thin `#E4E7EC` borders.
- Shadows must be subtle and optional. Cards should not float heavily.

## 7. Page shell

The official light-first pattern is:

1. Dark header
2. Dark hero
3. White or mist content
4. Dark final CTA
5. Dark footer

Dark mode may be provided, but it must preserve the same hierarchy and blue-only accent system. Save the user preference and respect the operating-system preference.

## 8. Header pattern

### Desktop

- Height: 76px.
- Dark Core Ink background.
- Light horizontal logo left.
- Navigation center/right:
  - Home
  - Solutions
  - Industries
  - For Tech Teams
  - About
  - Contact
- Language switcher: `EN / DE / TR`.
- Primary CTA: `Talk to an expert`.
- Sticky after the user begins scrolling.
- Add a subtle border or background opacity change when sticky.

### Mobile

- Height: 64px.
- Mark or compact horizontal logo left.
- Menu button right.
- Full-screen or tall drawer menu.
- Keep the language switcher visible.
- CTA becomes full width inside the drawer.
- Lock body scrolling while the menu is open.

## 9. Hero pattern

### Required copy

**Headline**

`ONE PARTNER. EVERY BUSINESS SOLUTION.`

**Supporting copy**

`We build apps, websites, chatbots, and systems that make your business easier to run.`

**Actions**

- Primary: `Explore solutions`
- Secondary: `Talk to an expert`

### Composition

- Desktop: copy left, Core Orbit visual right.
- Mobile: copy first, actions second, compact visual third.
- Desktop minimum height: 600px including header.
- Text column maximum width: 650px.
- Keep at least 48px between copy and visual.
- Do not place decorative lines behind the headline.

### Core Orbit visual

- Use `visuals/core-orbit-hero.svg`.
- Orbits move slowly and independently.
- Motion duration: 18–32 seconds.
- Core glow may pulse subtly.
- Disable motion under `prefers-reduced-motion`.
- Do not animate the A forms.

## 10. Section heading pattern

Each major section uses:

1. Optional small blue eyebrow
2. Short title
3. One sentence of supporting copy

Maximum title width: 720px.
Maximum supporting copy width: 680px.

Do not add long introductions before cards.

## 11. What We Build cards

Display six cards:

1. Business Apps
2. Websites & Portals
3. Chatbots & WhatsApp
4. Automation
5. Dashboards & Reports
6. Business Systems

### Card anatomy

- One thin line icon
- Short title
- One plain-language sentence
- Optional `Learn more` link

### Grid

- Desktop: 3 × 2 or 6 × 1 when space is sufficient.
- Tablet: 2 × 3.
- Mobile: 1 × 6.

### Interaction

- Border becomes blue on hover/focus.
- Icon receives a light blue background.
- Maximum lift: 2px.
- No 3D tilt, glassmorphism, or large shadows.

## 12. Industries pattern

Industries:

- Restaurants & Cafes
- Hospitals & Clinics
- Schools & Training Centers
- Companies & Offices
- Warehouses & Logistics
- Retail & E-commerce
- Factories & Manufacturing

### Desktop

Use horizontal tabs or compact selectable cards. The active industry shows one clear panel containing:

- Business type
- Common needs
- Relevant solution examples
- One CTA

### Mobile

Use a horizontally scrollable tab row with visible scroll affordance, followed by the active panel.

Do not repeat the same long generic sentence seven times. Keep shared language once and customize the selected example.

## 13. Example Solutions pattern

Use five business scenarios:

| Scenario | Example tools |
| --- | --- |
| Restaurant | Digital menu, online orders, reservations, loyalty, WhatsApp |
| Hospital | Appointments, patient records, reminders, reports |
| School | Student portal, payments, attendance, parent communication |
| Warehouse | Inventory, barcode tracking, deliveries, stock reports |
| Company | CRM, HR, approvals, internal dashboards |

Cards should describe a recognizable business situation and outcome, not a technical architecture.

## 14. Process pattern

Use exactly four steps:

1. `01 Understand`
2. `02 Design`
3. `03 Build`
4. `04 Support`

Supporting copy:

`We understand your business, design the right solution, build it, then support you after launch.`

Desktop uses one horizontal sequence. Mobile uses a vertical sequence. Decorative connectors must not imply that work stops after launch.

## 15. Why ALA CORE pattern

Use three points:

- One partner for all digital needs
- Clear business communication
- Built around your workflow

Each point uses one icon, one heading, and no more than two short sentences.

## 16. Final CTA pattern

Use a Core Ink panel before the footer.

**Headline**

`BUILD THE CORE OF YOUR BUSINESS.`

**Primary action**

`Talk to an expert`

An optional secondary action, `Describe your need`, must open **Ask ALA**. It must not navigate to an unrelated page.

## 17. Footer pattern

Footer contains:

- Light horizontal logo
- Short one-sentence positioning statement
- Solutions
- Industries
- For Tech Teams
- About
- Contact
- Language links
- Email: `support@alacore.net`

Do not display unapproved phone numbers, addresses, certifications, or social accounts.

## 18. Floating actions

### WhatsApp

- Green circular button.
- Desktop: bottom-right, above the safe area.
- Mobile: do not cover navigation, forms, or Ask ALA.
- Opens the business-needs flow before generating the WhatsApp message.
- WhatsApp number comes from `VITE_WHATSAPP_NUMBER`.
- Never invent or hard-code a number.

### Ask ALA

- Blue circular button labeled `Ask ALA`.
- Must remain visually separate from WhatsApp.
- Opens a bottom-right panel on desktop.
- Opens a bottom sheet on mobile.
- Preserve keyboard focus and provide an accessible close button.

Initial question:

`What would you like to improve in your business?`

Initial choices:

- Get more customers
- Save staff time
- Organize operations
- See better reports

Ask no more than three follow-up questions before recommending one or two solution categories.

Ask ALA must:

- Use simple business language.
- Avoid promises about prices or delivery dates.
- Offer WhatsApp or the contact form.
- Preserve the selected language.
- Never present technical implementation details unless the user explicitly chooses a technical path.

## 19. Page architecture

### Primary routes

- `/`
- `/solutions`
- `/industries`
- `/industries/restaurants-cafes`
- `/industries/hospitals-clinics`
- `/industries/schools-training`
- `/industries/companies-offices`
- `/industries/warehouses-logistics`
- `/industries/retail-ecommerce`
- `/industries/factories-manufacturing`
- `/for-tech-teams`
- `/about`
- `/contact`

### Secondary routes

- `/products`
- `/careers`
- `/privacy`
- `/terms`

Products and Careers are not added to the primary navigation unless explicitly approved. They may appear in the footer.

### For Tech Teams

Technical details are allowed here:

- AI and intelligent assistants
- Software development
- ERP and CRM
- Automation
- Integrations
- Cloud
- Cybersecurity
- Data
- IoT

Organize these by business capability and delivery approach. Do not publish internal architecture, security secrets, or unsupported claims.

## 20. Multilingual pattern

Required languages:

- English: `en`
- German: `de`
- Turkish: `tr`

Use route-aware localization or a persistent language preference. Do not rely on automatic browser translation.

### Rules

- Copy comes from `content/site-copy.json`.
- Every interactive label must be translated.
- Preserve the selected language across pages and chatbot sessions.
- Do not place text inside raster images.
- Layout must tolerate German labels that are 30–40% longer.
- Add localized metadata, titles, descriptions, and Open Graph text.

## 21. Forms

### Contact form

Fields:

- Name
- Business name
- Email or phone
- Industry
- What would you like to improve?
- Preferred contact method
- Consent

Send submissions to the Express backend. Public contact email is only `support@alacore.net`.

### Validation

- Validate client-side and server-side.
- Preserve form values after recoverable errors.
- Use inline errors near the field.
- Do not use alert boxes.
- Prevent duplicate submissions.
- Provide clear loading and success states.

## 22. Interaction and motion

- Motion is restrained and functional.
- Standard transition: 160–220ms.
- Section reveal: maximum 400ms.
- Do not animate every element.
- Do not use parallax on mobile.
- Never delay access to content for animation.
- Respect `prefers-reduced-motion`.

## 23. Accessibility

- Meet WCAG 2.2 AA.
- Use semantic landmarks.
- Maintain a logical heading order.
- Support keyboard navigation.
- Add visible `:focus-visible` states.
- Minimum tap target: 44 × 44px.
- Avoid color-only meaning.
- Provide accessible names for icon-only buttons.
- Trap focus inside open dialogs and mobile menus.
- Return focus when a dialog closes.
- Test at 200% zoom and 320px width.

## 24. Responsive breakpoints

```ts
const breakpoints = {
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1200,
  xxl: 1440
};
```

### Required checks

- 320px
- 375px
- 430px
- 768px
- 1024px
- 1280px
- 1440px

No horizontal page scrolling is allowed.

## 25. Performance

- Use SVG for logos, icons, and Core Orbit.
- Lazy-load non-critical imagery.
- Use route-level code splitting.
- Self-host or efficiently load only required font weights.
- Avoid large UI libraries.
- Target Core Web Vitals in the green range.
- Do not block the first render on chatbot code.
- Load Ask ALA and WhatsApp flow after the main page becomes interactive.

## 26. SEO and metadata

Each page requires:

- Unique title
- Unique meta description
- Canonical URL
- Open Graph title and description
- Language alternatives
- Structured data only when accurate

Homepage title pattern:

`ALA CORE — One Partner for Every Business Solution`

Homepage description:

`ALA CORE builds apps, websites, chatbots, automation, dashboards, and business systems that make companies easier to run.`

## 27. Target implementation architecture

### Frontend

- React
- Vite
- TypeScript
- React Router
- i18next or equivalent reviewed localization system
- CSS variables from `brand/brand-tokens.css`
- CSS Modules or a similarly scoped styling approach
- Lucide React for line icons

### Backend

Use Express only for functionality that requires a server:

- Contact submissions
- Ask ALA server proxy
- Email delivery
- Rate limiting
- Input validation
- Secure configuration

Do not put secrets in Vite environment variables. Only public configuration may use the `VITE_` prefix.

### Suggested source boundaries

```text
src/
  app/
  assets/
  components/
    brand/
    layout/
    sections/
    chat/
    forms/
  content/
  i18n/
  pages/
  styles/
  types/
server/
  routes/
  services/
  middleware/
  validation/
```

Keep page sections independent and reusable. Do not place the entire homepage in one component.

## 28. Component inventory

Required components:

- `SiteHeader`
- `MobileMenu`
- `LanguageSwitcher`
- `Hero`
- `CoreOrbit`
- `SectionHeading`
- `SolutionCard`
- `IndustryTabs`
- `IndustryPanel`
- `ExampleSolutionCard`
- `ProcessSteps`
- `WhyAlaCore`
- `FinalCta`
- `SiteFooter`
- `WhatsAppButton`
- `WhatsAppNeedsForm`
- `AskAlaButton`
- `AskAlaPanel`
- `ContactForm`
- `ThemeToggle`

Each component must define its empty, loading, error, focus, hover, and mobile states when applicable.

## 29. Asset usage

The project must import assets from this package. Do not redraw the logo in component code.

Recommended public paths:

```text
public/brand/ala-core-horizontal-light.svg
public/brand/ala-core-horizontal-dark.svg
public/brand/ala-core-mark-light.svg
public/brand/ala-core-mark-dark.svg
public/brand/ala-core-favicon.svg
public/brand/core-orbit-hero.svg
```

## 30. Acceptance checklist

The website is ready only when:

- The symbol reads as two separate A forms, not an M.
- The left A is larger than the right A.
- The blue Core is the only colored logo element.
- Header, hero, CTA, and footer use Core Ink.
- Main content is white or Interface Mist.
- Homepage copy is understandable to a non-technical owner within seconds.
- Homepage contains no restricted engineering jargon.
- EN, DE, and TR work on every route.
- WhatsApp uses a configured number, not a hard-coded guess.
- Ask ALA opens from its floating button and `Describe your need`.
- Mobile menus, forms, cards, and headings have no overflow.
- Keyboard navigation and focus states work.
- Reduced-motion mode works.
- Contact email is exactly `support@alacore.net`.
- All primary routes render without errors.
- No fake claims, clients, awards, reviews, or statistics exist.

## Final instruction to Impeccable

Create the website from this system without inventing a new visual identity. Preserve the supplied logo, colors, messaging hierarchy, routes, localization, and business-first language. Prefer clarity and consistency over decorative creativity. When uncertain, choose the simpler solution that helps a business owner understand what ALA CORE can do.
