# Task 12 — Deploy to Vercel (alacore.net)

## Goal
Ship the site to Vercel on **alacore.net**, verified in preview before production.

## Read-first
`../DECISIONS.md` (hosting, WhatsApp # confirmation), `astro.config.mjs`, `vercel.json`.

## Steps
1. Ensure `astro.config.mjs` has `site: 'https://alacore.net'` and the Vercel adapter (or static output
   Vercel auto-detects). Confirm `vercel.json` headers/caching.
2. Connect the repo to Vercel (Framework preset: Astro). Build: `astro build`, output auto.
3. **Config:** `WHATSAPP_NUMBER` lives in `src/lib/config.ts` — **confirm with the user it is current**
   before production. If it should be env-driven, expose a public build-time value and read it in config.
4. **Preview deploy** first: walk every route in EN/DE/TR, test theme toggle, WhatsApp + Ask ALA flows,
   contact form, hreflang tags, favicons/manifest, and run Lighthouse on the live preview URL.
5. Add the **alacore.net** domain (+ `www` redirect) and configure DNS. Verify HTTPS + HSTS.
6. Promote to **production**. Re-check the live domain: routes, sitemap.xml, robots.txt, OG previews,
   Core Web Vitals.

## Acceptance
- Production `https://alacore.net` serves all routes/locales with pretty URLs, valid hreflang, working
  floats/forms, correct favicons, and green Core Web Vitals.
- Only `support@alacore.net` and the confirmed WhatsApp number are exposed.

## Done-when
Production live on alacore.net and post-deploy checks pass. Note the deployment URL + date here.
