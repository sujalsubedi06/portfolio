# ✦ Client Portfolio Website

> A custom personal portfolio website designed and developed for a client — lightweight, responsive, accessible, and intentionally free from unnecessary complexity.

🌐 **Live Website:** [sujalsubedi.name.np](https://sujalsubedi.name.np/)

---

## 🧭 About the Project

This repository contains the source code for a **custom client portfolio website**.

The project was built as a lightweight static website with a strong focus on:

* Clean visual design
* Responsive behavior
* Smooth interaction
* Accessibility
* Search-engine readiness
* Easy long-term maintenance

The website deliberately avoids a heavy application stack.

Because not every portfolio needs a backend, a database, three microservices, and a Kubernetes cluster just to display someone's projects.

Sometimes:

```text
HTML + CSS + JavaScript
            ↓
       a good website
```

And that is perfectly fine.

---

## ✨ Highlights

* 🎨 Custom-designed interface
* 📱 Responsive across desktop, tablet, and mobile
* ⚡ Lightweight static architecture
* 🎞️ GSAP-powered motion
* 🧭 Smooth section transitions
* ♿ Accessibility considerations
* 🔍 SEO-ready metadata and structured data
* 🌐 Custom domain
* 🚀 GitHub Pages deployment
* 🧹 Minimal dependency footprint

---

## 🛠️ Technology Stack

| Technology             | Purpose                                              |
| ---------------------- | ---------------------------------------------------- |
| **HTML5**              | Semantic structure and content                       |
| **CSS3**               | Layout, styling, typography, and responsive behavior |
| **Vanilla JavaScript** | Navigation, interaction, and UI behavior             |
| **GSAP**               | Animation and motion                                 |
| **ScrollTrigger**      | Scroll-based animations                              |
| **GitHub Pages**       | Hosting and deployment                               |
| **Custom Domain**      | `sujalsubedi.name.np`                                |

### Why a static architecture?

The website doesn't require:

* a database
* authentication
* an API
* server-side rendering
* a content management system
* a complicated build pipeline

Keeping the architecture small makes the project easier to maintain and deploy.

Less infrastructure.

Less maintenance.

Fewer opportunities for something to catch fire at 2 AM.

---

## 🎨 Design Direction

The visual design was created specifically for the client's identity rather than relying on a generic portfolio template.

The interface aims to balance:

**professional**
`+`
**memorable**
`+`
**modern**
`+`
**a little personality**

The result is intentionally more distinctive than a standard:

> "Hello, I'm a developer. Here's my resume. Please hire me."

There are enough of those already.

---

## ⚡ Features

### Responsive Interface

The layout adapts across different screen sizes using fluid sizing, responsive layouts, and viewport-aware typography.

The goal is for the same design system to feel natural on:

```text
Desktop
   ↓
Laptop
   ↓
Tablet
   ↓
Mobile
```

without requiring a completely different website at every breakpoint.

---

### 🎞️ Motion & Interaction

GSAP and ScrollTrigger provide the animation layer.

Motion is used for:

* entrance animations
* section transitions
* scroll interactions
* ambient movement
* pointer interactions

The animations are there to support the design rather than compete with the content.

In other words:

> **The portfolio should move. The user shouldn't have to chase it.**

---

### ♿ Accessibility

Accessibility is considered throughout the interface.

The project includes:

* Semantic HTML
* Keyboard navigation
* Skip navigation
* Focus management
* Accessible section transitions
* Screen-reader considerations
* Decorative SVG handling
* Reduced-motion support

When a user prefers less motion, the interface respects that preference.

The website can be dramatic without being annoying.

---

### 🔍 SEO

The project includes the core technical foundations required for search-engine discoverability:

* `robots.txt`
* `sitemap.xml`
* Canonical URL
* Meta description
* Open Graph metadata
* Twitter Card metadata
* JSON-LD structured data
* `Person` schema
* `WebSite` schema
* Semantic heading hierarchy

Because apparently the search engines also need an invitation.

---

## 📁 Project Structure

```text
portfolio-ui/
├── assets/
│   └── favicon.svg
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── CNAME
├── index.html
├── robots.txt
├── sitemap.xml
├── site.webmanifest
└── README.md
```

The project is intentionally compact.

Small codebase.

Straightforward structure.

Very little archaeology required.

---

## 🚀 Local Development

No build system is required.

Clone the repository:

```bash
git clone <repository-url>
cd portfolio-ui
```

Start a local static server:

```bash
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000
```

That's it.

No:

```bash
npm install
```

No:

```bash
npm run build
```

No:

```bash
npm install
```

followed by an error that somehow requires deleting `node_modules` and questioning every decision that led to this point.

---

## 🌐 Deployment

The production website is hosted using **GitHub Pages**.

### Production

**→ [sujalsubedi.name.np](https://sujalsubedi.name.np/)**

The repository includes a `CNAME` file for the custom domain configuration.

The site can also be deployed to other static hosting services such as:

* Cloudflare Pages
* Netlify
* Vercel

The architecture is portable by design.

---

## 🧩 Development Environment

The project is developed and maintained primarily on:

```text
OS       → Arch Linux
Desktop  → Hyprland
Editor   → VS Code
Terminal → Kitty
```

The website itself does not require Arch Linux.

The developer apparently does.

---

## 📌 Project Status

🟢 **LIVE**

The project is currently deployed and maintained for the client.

Future updates may include design refinements, content updates, accessibility improvements, and additional polish as the client's needs evolve.

Because apparently websites are never truly finished.

They just enter **maintenance mode**.

---

## 🤝 Client Project

This repository represents a **client-developed website**.

The visual identity, content, branding, and personal information belong to the client.

The source code is maintained as part of the project's development workflow and should not be treated as a reusable template or starter kit.

---

## ⭐ Made it to the bottom?

Respect.

You have successfully reviewed the architecture, survived the jokes, and avoided opening `node_modules`.

There is only one thing left to do.

<p align="center">

### ⭐ [Star the repository](https://github.com/KarlowsMorris/Portfolio-ui)

</p>

It costs approximately:

**$0.00**

and takes:

**~1 second**

while providing:

**+1 tiny dopamine particle**

A fairly good deal.

> **Your star → better discoverability → happy developer → probably more CSS**

A beautiful ecosystem.

---

<p align="center">

### Built with HTML, CSS, JavaScript, GSAP & an unreasonable commitment to making things look nice.

<sub>Client project • Designed for simplicity • Built to last</sub>

</p>
