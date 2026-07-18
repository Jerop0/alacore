# ALA Core Website

Professional, responsive, bilingual (Arabic/English) company website for ALA Core.

## Run locally

The site has no build step or external JavaScript dependencies.

```bash
python3 -m http.server 8080 --directory .
```

Then open `http://localhost:8080`.

## Pages

The site is split into focused pages so the home page stays simple and conversion-oriented:

- `index.html` — Lean home: hero, a short capabilities teaser, and the contact section
- `services.html` — Full detail for all service categories
- `solutions.html` — Six practical solution examples
- `about.html` — Why ALA Core, how we work (process), and FAQ

The header, footer, language switcher, and chat assistant are shared across every page (`script.js` is loaded on each and guards for elements that only exist on some pages).

## Included

- Responsive design with EN / TR / DE language switcher
- Structured presentation of all service categories
- Six practical solution examples with challenge, architecture, and expected outcome
- FAQ section explaining discovery, platform selection, MVP delivery, support, and security
- Interactive multilingual service assistant
- WhatsApp contact form and floating direct-contact button
- SEO/Open Graph metadata
- Accessible navigation, keyboard support, and reduced-motion support

## Contact configuration

- WhatsApp: `+49 176 218 122 12`
- Email: `louaychalabi917@gmail.com`

The assistant currently runs fully in the browser using a curated services knowledge base, so it needs no API key. For open-ended generative conversations or lead storage, connect it to a secure backend and an AI/CRM API before production deployment.
# alacore
