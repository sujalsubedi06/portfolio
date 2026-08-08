# Sujal Subedi — Portfolio

A single-page portfolio site for Sujal Subedi, a software developer and
cybersecurity student based in Kathmandu, Nepal. Built as **100% static
HTML, CSS, and vanilla JavaScript** — no framework, no build step, no
dependencies to install.

Live at: **https://sujalsubedi.name.np**

---

## Tech stack

- **HTML5** — semantic markup, JSON-LD structured data
- **CSS3** — custom properties, `clamp()`-based fluid type, flexbox
- **Vanilla JavaScript** — page transitions, focus management
- **[GSAP](https://gsap.com/) + ScrollTrigger** (loaded from CDN) — entrance
  animations, ambient motion, scroll/mouse parallax

No npm, no bundler, no build process. Open `index.html` in a browser and it
works.

---

## Project structure

```text
portfolio-ui/
├── assets/
│   └── favicon.svg        # Brand mark (ring + gold dot), source for all icons
├── css/
│   └── style.css          # All styles
├── js/
│   └── script.js          # Page transitions, GSAP animation timelines
├── CNAME                  # Custom domain for GitHub Pages
├── index.html             # The entire site (Home + Connect sections)
├── robots.txt             # Crawler rules + sitemap pointer
├── sitemap.xml            # Single homepage URL
├── site.webmanifest       # PWA manifest
└── README.md
```

---

## Features

- **Two "pages," one document** — Home and Connect are both present in the
  DOM at all times; `script.js` toggles `hidden` and animates between them.
  There's no real routing/URL change, so this stays crawlable as a single
  page (see [SEO](#seo) below).
- **Reduced-motion support** — every entrance/ambient animation is gated
  behind `prefers-reduced-motion`. Users who prefer reduced motion get an
  instant, static layout instead of the animated one.
- **Keyboard & screen-reader friendly** — skip link, `aria-hidden` on
  decorative SVGs, focus is moved to the new section's heading on page
  transitions.

---

## Local development

No build step — just serve the folder so relative paths and `fetch`-based
fonts work correctly:

```bash
# from the portfolio-ui/ folder
python3 -m http.server 8000
# then open http://localhost:8000
```

Any static file server works equally well (`npx serve`, VS Code's Live
Server extension, etc.).

---

## SEO

- `robots.txt` and `sitemap.xml` live at the project root and allow full
  crawling — this is the standard, expected location for both files.
- `index.html` includes meta description, canonical URL, Open Graph,
  Twitter Card, and `Person`/`WebSite` JSON-LD — all built from real content
  already on the page (no invented data).
- Heading hierarchy is a single `<h1>` (Home) with `<h2>`/`<h3>` for the
  Connect section and hidden section labels.

---

## Deployment

This project ships with a `CNAME` file, which is the convention for
**GitHub Pages custom domains**:

1. Push this repo to GitHub and enable Pages (Settings → Pages → deploy
   from the branch containing these files).
2. At your DNS provider, point `sujalsubedi.name.np` at GitHub Pages
   (an `A` record to GitHub's IPs, or a `CNAME` record if using a
   subdomain).
3. GitHub Pages reads the `CNAME` file automatically and serves the site
   on your custom domain over HTTPS once DNS propagates.
4. Double-check `/robots.txt` and `/sitemap.xml` are reachable at the site
   root once live — they're already positioned correctly in this project,
   so no rewrite rules are needed.

If deploying elsewhere (Netlify, Vercel, Cloudflare Pages), the `CNAME`
file is unnecessary — configure the custom domain in that platform's
dashboard instead.

---

## License

No license specified. All rights reserved by Sujal Subedi unless stated
otherwise.