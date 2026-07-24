# Legacy site (reference only — not deployed)

The previous single-page vanilla ALA CORE site (all-dark theme). Kept for reference while the new
Astro site is built. **Do not deploy this.**

Useful to port into the new build:
- `script.js` — `translations` (EN/TR/DE), `applyLanguage()`, the browser chatbot (`knowledgeBase`,
  `chatCopy`, quick replies), the WhatsApp deep-link + prefilled-message builder, and the contact-form
  → WhatsApp flow. **Rewrite all chatbot copy into plain business language** for Ask ALA (tasks/04).
- `assets/` — old logo/avatar/fonts. The new build uses `ala-core-website-assets/` + Manrope instead.

Superseded details (do **not** reuse): the old email `louaychalabi917@gmail.com` (now only
`support@alacore.net`), the all-dark theme, and the single-page structure.
