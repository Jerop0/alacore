# Product

> **Strategic companion doc.** Implementation is governed by the approved asset pack
> (`ala-core-website-assets/IMPECCABLE.md`, `brand/`, `content/`) plus `DECISIONS.md` (stack =
> Astro, no backend, Industries = 1 overview + 7 dedicated pages) and `DESIGN.md` (visual system).
> This file defines who/what/why; it never overrides the pack on brand, tokens, copy, or routes.

## Register

brand

## Users

**Primary: non-technical business owners and managers.** Restaurants, cafés, hospitals & clinics,
schools & training centers, companies & offices, warehouses & logistics, retail & e-commerce,
factories & manufacturing. They run a real business, not an IT department. When they land on the
site they are usually stressed by an operational problem — "orders are messy," "we lose bookings,"
"stock is a guess," "customers wait too long," "I can't see my numbers." They scan on a phone, in a
hurry, in English, German, or Turkish. They must understand *what ALA CORE can do for them* in
seconds, without a single technical word.

**Secondary: technical decision-makers** (a CTO, IT manager, or developer the owner asks to vet us).
They arrive at the **For Tech Teams** page and want proof of depth: real stack, real capabilities,
real engineering seriousness. This audience is served on one dedicated page only — it never bleeds
into the business pages.

The job to be done: *"Show me you understand my business and can build the tool that fixes my
problem — then make it easy to talk to a human."*

## Product Purpose

ALA CORE is a **B2B technology partner**: one company that designs, builds, and supports the custom
apps, websites, chatbots, automation, dashboards, and business systems a company needs to run
smarter. The site's job is to make that promise legible to a business person and convert interest
into a conversation (WhatsApp or the Ask ALA assistant), while giving technical evaluators a place
to confirm the depth behind the simple language.

Success = a restaurant owner or clinic manager reads the homepage, thinks *"these people can build
the thing I need,"* and clicks **Talk to an expert** or opens **Ask ALA** — without ever feeling
they're being sold software they don't understand.

**Strategic tension to hold:** we are deeply technical (23 capability areas, AI, ERP, cloud, IoT,
cybersecurity) but we sell **outcomes** (save time, reduce manual work, serve customers faster,
organize operations, see reports, grow). The homepage speaks outcomes; the depth lives one click
away in *For Tech Teams*.

## Brand Personality

Three words: **capable, clear, calm.**

- **Capable** — a partner who has done this before and can build almost anything you need. Quiet
  confidence, not hype. "One partner. Every business solution."
- **Clear** — plain business language, short sentences, no jargon on customer-facing pages. If a
  restaurant owner can't understand a sentence, it's rewritten. Words like *Kubernetes, RAG, CI/CD,
  APIs, DevOps* are banned everywhere except For Tech Teams.
- **Calm** — spacious, uncrowded, premium. White space is a feature. No wall of 23 services, no
  competing CTAs, no noise. The design breathes so the visitor feels in control.

Voice: sentence case, active verbs, second person ("your business," "the tools you need"). Warm and
direct, never salesy or academic. Speaks in three languages (EN / DE / TR) and stays this short in
all of them.

## Anti-references

- **The enterprise-consultancy wall of jargon** (Accenture / Cognizant / Capgemini style): dense,
  corporate, cold, feature-listy, written for procurement. We are the opposite — we speak to the
  owner, in their language, about their problem.
- **The all-in-one SMB platform clutter** (feature-grid overload, twelve modules on one screen).
  We show six things we build and let the rest live deeper.
- **Dev-tool coldness** (Linear/Vercel-for-developers): we admire the craft and whitespace, but our
  audience is a café owner, not an engineer. Warmth and plain language win over terminal aesthetics.
- **Generic AI-agency slop:** blurred purple gradient hero, identical icon-card grid, a tiny tracked
  uppercase eyebrow above every section, hero-metric template. If it looks like every other 2026
  tech landing page, it has failed.
- **Full-dark tech site.** The category default is dark-blue-on-black everywhere. We deliberately use
  a **clean white body** between a dark header and footer — calmer, more premium, and a real
  differentiator in a blue-and-black category.

## Design Principles

1. **Outcome over apparatus.** Every business-facing line names what the owner *gets* (faster
   service, fewer manual steps, clear reports), never the technology that delivers it. Tech names
   live only in For Tech Teams.
2. **Say less, mean more.** Short sentences, few words, generous space. When in doubt, cut. Never
   list all 23 categories on the homepage; six is the story.
3. **One partner, every business.** The through-line is breadth made simple: whatever your
   business, we can build the tools it needs. Reassurance, not a menu.
4. **Depth on demand.** The seriousness is real and one click away. Business owners get clarity;
   technical evaluators get proof — on separate surfaces, never mixed.
5. **Calm premium, one bold note.** The interface is quiet and disciplined; spend the single bold
   move on the orbital "ecosystem" hero visual and the blue accent. Everything else stays restrained.
6. **Talking to a human is always one tap away.** WhatsApp and Ask ALA are persistent, friendly,
   and speak the visitor's language. The site's real conversion is a conversation.

## Accessibility & Inclusion

- **Target: WCAG 2.1 AA.** Body text ≥ 4.5:1 contrast (the palette's muted `#667085` on white is
  ~4.98:1 — passes; anything smaller or on tinted surfaces uses a darker step). Large text ≥ 3:1.
- **Trilingual, equal quality.** EN / DE / TR are first-class; copy stays short and natural in each.
  Language switcher in the header; selection persists. Correct `lang` attribute per language.
- **Reduced motion respected.** The orbital animation, reveals, and hover motion all honor
  `prefers-reduced-motion: reduce` with a static or crossfade fallback. Content is visible by
  default — never gated behind a reveal that can fail to fire.
- **Keyboard + screen reader.** Visible focus rings, logical tab order, labeled controls, the chat
  and menu operable by keyboard, `aria-live` on chat messages.
- **Mobile-first quality.** Large tap targets (≥ 44px), no text overflow at any breakpoint, stacked
  cards, simple menu — the phone experience is the primary experience for this audience.
- **Light + dark themes** both meet contrast; the toggle persists and respects the OS preference on
  first visit.
