# ALA CORE Website Build Specification

## Brand direction

ALA CORE is presented as a business partner, not as a technical supplier. Every public page should lead with business outcomes: save time, reduce manual work, serve customers faster, organize operations, see clear reports, and grow.

## Required routes

| Route | Purpose |
| --- | --- |
| `/` | Short business-focused homepage |
| `/solutions` | Apps, websites, chatbots, automation, dashboards, and business systems |
| `/industries` | Industry overview |
| `/industries/restaurants-cafes` | Orders, menus, reservations, loyalty, WhatsApp |
| `/industries/hospitals-clinics` | Appointments, patient flow, reminders, reports |
| `/industries/schools-training` | Attendance, payments, portals, parent communication |
| `/industries/companies-offices` | CRM, HR, approvals, dashboards |
| `/industries/warehouses-logistics` | Inventory, barcode tracking, delivery dashboards |
| `/industries/retail-ecommerce` | Catalogs, orders, stock, payments, customer support |
| `/industries/factories-manufacturing` | Production workflows, inventory, maintenance, reporting |
| `/for-tech-teams` | AI, software, ERP, CRM, automation, integrations, cloud, cybersecurity, data, and IoT |
| `/about` | Company positioning and working principles |
| `/contact` | Contact form, WhatsApp flow, and `support@alacore.net` |

## Homepage rules

- Keep the homepage short and outcome-focused.
- Do not list the full technical catalog.
- Do not use engineering terms such as Kubernetes, RAG, CI/CD, APIs, or DevOps.
- Use one primary CTA per section.
- Keep paragraphs below three short lines.
- The only public email is `support@alacore.net`.

## Responsive behavior

| Width | Behavior |
| --- | --- |
| `>= 1200px` | Two-column hero; six-column service cards; full navigation |
| `768–1199px` | Two-column hero with smaller visual; three-column cards |
| `< 768px` | Stacked hero; one-column cards; mobile menu; full-width buttons |

Mobile tap targets must be at least 44px high. Headings must not overflow at 320px. The language switcher remains visible inside the mobile menu.

## Image and icon policy

- Use the supplied ALA CORE logo SVGs.
- Use `core-orbit-hero.svg` in the hero; animate the orbit paths only when reduced-motion is not requested.
- Use thin 1.75–2px line icons. Recommended implementation: Lucide.
- Icon mapping: Briefcase Business Apps, Globe Websites, MessagesSquare Chatbots, Settings Automation, ChartNoAxesColumnIncreasing Reports, Database Business Systems.
- Avoid stock photos on the homepage.

## WhatsApp flow

The floating WhatsApp button opens a short business-needs form:

1. Business type
2. Main challenge
3. Desired outcome
4. Name and preferred contact time
5. Generate a prefilled WhatsApp message

The WhatsApp number is not present in the supplied material. Configure it through `VITE_WHATSAPP_NUMBER`; do not hard-code or invent a number.

## Ask ALA flow

Ask ALA begins with four choices:

1. Get more customers
2. Save staff time
3. Organize operations
4. See better reports

It asks at most three follow-up questions, recommends one or two relevant solution categories in plain language, and offers either WhatsApp or the contact form. The chatbot must never claim that a feature or price is confirmed.

## Accessibility and performance

- WCAG AA contrast.
- Visible keyboard focus.
- Respect `prefers-reduced-motion`.
- SVG logos and icons.
- Lazy-load non-critical visuals.
- Do not render a language by machine translation at runtime; use reviewed EN/DE/TR copy.
