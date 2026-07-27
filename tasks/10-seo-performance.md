# Task 10 — SEO & performance

## Goal
Per-page metadata + hreflang, a sitemap and robots, and a performance pass that keeps Core Web Vitals
in the green.

## Read-first
IMPECCABLE §25 (performance), §26 (SEO); `astro.config.mjs` (`site`, i18n).

## SEO steps
1. Per-page `<title>`, meta description, canonical, OG title/description (from the content model,
   localized). Homepage uses the §26 patterns:
   - Title: `ALA CORE — One Partner for Every Business Solution`
   - Description: `ALA CORE builds apps, websites, chatbots, automation, dashboards, and business
     systems that make companies easier to run.`
2. **hreflang alternates** for every route across en/de/tr + `x-default`. A `SeoHead.astro` partial in
   `Layout.astro` renders these from the current path + locale map.
3. `@astrojs/sitemap` (i18n-aware) + `robots.txt` referencing it. Exclude `/styleguide`.
4. Structured data only if accurate (e.g. `Organization`) — no invented ratings/reviews.

## Performance steps
5. Ship minimal JS: Astro islands only for header menu, theme toggle, Ask ALA, WhatsApp, contact form;
   defer them (`client:idle`/`client:visible`). Don't block first render on chat.
6. Fonts: self-hosted **subset** Manrope, only used weights, `font-display:swap`, preload the 1–2
   critical weights.
7. SVG for logos/icons/orbit; lazy-load any non-critical raster (`loading="lazy"`, width/height set to
   avoid CLS). No layout shift on theme toggle or font swap.
8. Cache headers in `vercel.json` for hashed assets/fonts. Keep the orbit animation on
   transform/opacity only.

## Acceptance
- Every route: unique localized title/description/canonical/OG + hreflang + x-default; sitemap +
  robots present; `/styleguide` excluded.
- Lighthouse (built preview, mobile throttle): Performance & Best-Practices green, a11y ≥ 95, no CLS,
  fast LCP; chat/WhatsApp JS deferred.

## Done-when
Meta + hreflang + sitemap complete and Lighthouse targets met; committed.
