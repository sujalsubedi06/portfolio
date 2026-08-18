# Sujal Subedi — Portfolio

> Personal portfolio and digital home of **Sujal Subedi** — software developer and cybersecurity student from Nepal.

**Live site:** [sujalsubedi.name.np](https://sujalsubedi.name.np)

A lightweight, performance-focused portfolio built entirely with **HTML, CSS, and vanilla JavaScript**. No framework. No build pipeline. Just a fast, intentionally crafted web experience.

---

## Overview

This repository contains the source code for my personal portfolio.

The site is designed to showcase my work, technical interests, projects, and ways to connect — while keeping the underlying stack deliberately simple.

The entire experience runs as static files, making it easy to develop, deploy, maintain, and host almost anywhere.

### Built with

* **HTML5** — semantic structure, accessibility, and structured data
* **CSS3** — responsive layouts, custom properties, fluid typography, and motion
* **JavaScript** — navigation, transitions, focus management, and interaction
* **GSAP + ScrollTrigger** — scroll-driven and ambient animations
* **GitHub Pages** — deployment and custom-domain hosting

No framework.
No bundler.
No application server.
No database.

---

## ✦ Features

### Responsive by design

The interface adapts across desktop, tablet, and mobile without relying on a separate mobile application or layout.

### Accessible interactions

Accessibility is treated as part of the implementation rather than an afterthought.

* Semantic HTML
* Keyboard navigation
* Skip navigation
* Focus management
* Screen-reader considerations
* Decorative SVGs hidden from assistive technology
* `prefers-reduced-motion` support

### Lightweight architecture

The portfolio is intentionally static.

There is no dependency installation or compilation required. The source can be served directly by any static web server.

### Motion & interaction

Animations are powered by GSAP and ScrollTrigger and are used to give the interface depth without turning the portfolio into an animation showcase.

Users who prefer reduced motion receive a simplified, static experience.

### SEO-ready

The site includes:

* Canonical URL
* Meta description
* Open Graph metadata
* Twitter Card metadata
* `robots.txt`
* XML sitemap
* JSON-LD structured data
* `Person` schema
* `WebSite` schema
* Semantic heading hierarchy

---

## Project structure

```text
portfolio-ui/
├── assets/
│   └── favicon.svg
├── css/
│   └── style.css
├── js/
│   └── script.js
├── CNAME
├── index.html
├── robots.txt
├── sitemap.xml
├── site.webmanifest
└── README.md
```

### Architecture

The portfolio currently uses a single HTML document containing the site's sections.

Navigation between the Home and Connect experiences is handled client-side through JavaScript rather than traditional routing. This keeps the project simple while allowing the interface to behave like a multi-view experience.

---

## Getting started

Because there is no build process, getting the project running locally takes one command.

```bash
git clone https://github.com/<your-username>/<your-repository>.git
cd portfolio-ui

python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Any static HTTP server can be used instead.

> Opening `index.html` directly also works for most of the site, but serving it locally is recommended for a more accurate development environment.

---

## Deployment

The project is configured for **GitHub Pages** and includes a `CNAME` file for the custom domain.

### GitHub Pages

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Configure deployment from the appropriate branch.
4. Configure the custom domain.
5. Point the domain's DNS records to GitHub Pages.
6. Wait for DNS propagation and HTTPS provisioning.

The production site is available at:

**https://sujalsubedi.name.np**

The repository can also be deployed to other static hosting platforms such as Netlify, Vercel, or Cloudflare Pages. When doing so, the `CNAME` file should be removed or ignored and the custom domain configured through the hosting provider.

---

## Development philosophy

This portfolio follows a simple principle:

> **The technology should support the experience, not become the experience.**

A personal portfolio does not need a complex application stack to be effective.

Keeping the site static means:

* fewer moving parts
* faster load times
* easier maintenance
* simpler deployment
* minimal attack surface
* no runtime backend
* no database
* no unnecessary dependencies

The complexity belongs in the work being showcased — not in the portfolio itself.

---

## Status

**Live and actively maintained.**

The portfolio will continue to evolve alongside my projects, skills, and technical interests.

---

## License

Copyright © Sujal Subedi.

All rights reserved unless otherwise stated.

The source code is publicly visible for educational and reference purposes, but the site's content, branding, design, assets, and personal information may not be reused without permission.
