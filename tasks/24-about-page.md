# Task 24 — About page (`/about`) — full build

Replace the placeholder `/about` (task 08) with the full company page below. ALA CORE's positioning here
is **"an engineering company — not an agency, not a consultancy."** This is the credibility page, so it
may carry more engineering seriousness than the business-first pages — see the tone flag.

## Read-first
`tasks/08-about-contact.md` (current About), `tasks/17-how-we-work.md` (process overlap — reconcile),
IMPECCABLE §2 (**no fake stats/claims**) + §30, `../PRODUCT.md` (voice), `../DESIGN.md`.

## Page structure (all copy → content model `about.json`, EN/DE/TR; log DE/TR in `content/REVIEW.md`)

1. **Opening statement (the page's signature).** "We are an engineering company." + "Not an agency.
   Not a consultancy. An engineering company that builds complete technology systems for businesses that
   take technology seriously." Set with typographic confidence within the brand scale (≤ brand hero max,
   letter-spacing ≥ -0.02em). This is the one bold moment — keep the rest disciplined.
2. **Mission** — "To deliver complete technology ecosystems that create lasting business value —
   engineered with precision, built to scale, and supported over the long term."
3. **Vision** — "To be the most trusted technology partner for international companies navigating digital
   transformation — known for engineering excellence, transparency, and outcomes." (Mission + Vision may
   sit as two columns or stacked bands.)
4. **Values (01–04)** — numbered set (numbering earned: a defined set): **Engineering integrity ·
   Radical transparency · Long-term thinking · Client success.** Each = number + title + the 1–2 line
   body provided. Clean rows or a restrained grid — **not** four identical stamped cards; vary.
5. **Engineering principles (4)** — Documentation is not optional · Test coverage is a minimum, not a
   stretch goal · Monitoring and observability from day one · Simplicity over cleverness. Use the exact
   bodies provided. Frame as "the actual technical constraints we impose on every project." (⚠ tone flag.)
6. **Our process (01–05)** — Discovery & scoping · Architecture & design · Engineering & development ·
   Testing & quality · Deployment & support (bodies as provided). Numbered sequence (earned). Reuse/
   extend the `ProcessSteps` component to 5 steps (horizontal desktop / vertical mobile). (⚠ reconcile
   with How We Work — see flag.)
7. **Global vision** — "ALA CORE operates internationally with delivery capability across Europe, the
   Middle East, and beyond. We build technology without borders — serving clients in multiple languages,
   currencies, and regulatory environments."
8. **Stats strip** — see the FAKE-STATS flag before building. Present modestly (small labels, honest
   numbers) — **not** the big-gradient-number "hero-metric" template (that's a slop tell).
9. **CTA** — "Start a project" → `/contact` (+ optional "Describe your need" → Ask ALA).

## ⚠ Flags to resolve (do not ship until settled)

### FLAG 1 — Stats must be REAL (hard requirement, §2/§30)
Provided: `3 Languages supported · 12+ Countries served · Global time zones · 5+ Deployment regions`.
- "3 languages" = true (EN/DE/TR). ✅
- **"12+ countries served" and "5+ deployment regions" must be verifiable.** If ALA CORE cannot back
  them, **do not invent them** — replace with honest, non-numeric statements ("Delivery across Europe &
  the Middle East", "Multi-region cloud deployment", "Multiple languages & currencies"). Confirm the real
  numbers with the client before shipping.

### FLAG 2 — Tone (engineering jargon on a business page)
This page intentionally uses engineering terms (API contracts, test coverage, observability, structured
logging, UAT). That's acceptable **here** as credibility for "companies that take technology seriously" —
About + the Solutions tech layer + the `#for-tech-teams` overview are the only places such terms belong.
Keep the homepage / industries / solutions business layer **jargon-free**. (Update the global jargon rule
in `tasks/README.md` to add "About credibility sections" to the allowed list.) If the client prefers a
softer About, swap the 3–4 hardest terms for plain phrasing — flag, don't decide silently.

### FLAG 3 — Reconcile with How We Work (task 17)
About now has a detailed 5-step "Our process"; `/how-we-work` (task 17) has a 4-step version. Two process
sections is redundant. **Pick one:**
- **(a) Recommended:** make this 5-step engineering process canonical. Fold How We Work into About
  (`/about#process`), **301-redirect `/how-we-work` → `/about`**, drop it from the footer, and keep the
  homepage's simple 4-step teaser linking to `/about#process`.
- **(b)** Keep `/how-we-work` as the detailed process page and have About show a short process summary
  linking to it (avoid duplicating all five steps).
Confirm with the user; update `tasks/17`, `tasks/02` (footer), `tasks/03` (home teaser), and `DECISIONS.md`
accordingly.

## Design
Brand tokens, both themes, responsive (test 320→1440, no overflow). Numbering (01–05 / 01–04) is earned
(real set/sequence) — fine. Avoid: the hero-metric slop for stats, identical stamped value cards, an
eyebrow above every section. Values/principles as calm rows or a restrained grid; the opening statement
is the signature. a11y AA, reduced motion.

## Acceptance
- `/about` renders all sections in EN/DE/TR with the provided copy; opening statement lands; process is a
  real 5-step sequence; stats are **real** (flag 1 resolved); jargon confined to About/tech surfaces.
- How We Work overlap resolved (flag 3); no duplicate process sections; footer/home/redirect consistent.
- Responsive, a11y AA, both themes; "Start a project" → `/contact`.

## Done-when
About is fully built and localized, all three flags resolved; committed.
