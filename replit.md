# Mursel Ventures — Blue Economy Website

A fully native Jekyll site for Mursel Ventures (murselventures.com), a Blue Economy venture platform combining venture studio, accelerator, consulting, and fund programs.

## Stack

- **Framework:** Jekyll 4.3.4 (static site generator)
- **Language:** Ruby 3.2 + Liquid templates
- **Styling:** Custom CSS (no frameworks) — dark ocean theme with scroll animations
- **Fonts:** Poppins (headings) + Inter (body) via Google Fonts
- **Icons:** Inline SVG system via `_includes/icons.html`
- **Hosting:** GitHub Pages with custom domain (murselventures.com)

## Project Layout

```
_config.yml               # Jekyll configuration
Gemfile / Gemfile.lock     # Ruby dependencies
CNAME                     # Custom domain for GitHub Pages
_layouts/
├── default.html           # Root layout (nav + footer + Google Fonts)
└── page.html              # Simple page layout
_includes/
└── icons.html             # SVG icon library (anchor, rocket, compass, etc.)
_data/
├── navigation.yml         # Site navigation links
├── pillars.yml            # 4 program pillars
├── stats.yml              # Key statistics (with data-count for animated counters)
├── team.yml               # Founders (Nuri Murat Avci, Selçuk Ergin) + core values
├── mentors.yml            # 5 mentors with bios and expertise
├── partners.yml           # Academic/institutional/corporate/ecosystem partners
└── posts.yml              # Insights/blog entries
assets/
├── css/main.css           # Full dark ocean theme styles with scroll animations
└── js/main.js             # Mobile nav, IntersectionObserver reveals, particle canvas, animated counters, form tabs
```

## Pages

- `index.html` — Homepage (particle hero, trust bar, 4 pillars, stats with counters, focus areas, how it works, newsletter CTA)
- `about.html` — Brand story, timeline, Blue Economy stats, founders, core values
- `programs/index.html` — Programs overview with comparison table
- `programs/studio.html` — Venture Studio details
- `programs/accelerator.html` — Accelerator program
- `programs/consulting.html` — Consulting services (6 service cards)
- `programs/fund.html` — Investment fund
- `ecosystem/index.html` — Ecosystem overview with stats
- `ecosystem/mentors.html` — Mentor profiles grid
- `ecosystem/partners.html` — Partner categories (academic, institutional, corporate, ecosystem)
- `insights.html` — Blog/insights listing + featured reports
- `apply.html` — Multi-tab application (Startup/Investor/Mentor/Partner) with multi-step startup form
- `contact.html` — Contact info + form with founder cards
- `privacy.html` / `terms.html` — Legal pages
- `404.html` — Custom error page

## Design Theme

- **Dark ocean palette:** `#0A1929` (deep), `#1E3A5F` (primary), `#2E5984` (secondary), `#40E0D0` (turquoise accent), `#FF6B6B` (coral)
- Gradient backgrounds, glassmorphism cards, smooth transitions
- Scroll reveal animations (`.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-scale`) with progressive enhancement (`html.js-ready` scoping)
- Animated number counters via `data-count` attributes
- Particle canvas hero with connecting lines
- Header shrink on scroll
- `prefers-reduced-motion` respected

## Development

Runs on port 5000 via the "Start application" workflow:
```
bundle exec jekyll serve --host 0.0.0.0 --port 5000
```

## Deployment

- GitHub Pages via `.github/workflows/jekyll.yml` (Ruby 3.2)
- CNAME file points to murselventures.com
- Forms use `mailto:info@murselventures.com` (no backend needed)

## Key Details

- All content lives in `_data/` YAML files — no hardcoded data in templates
- Apply page has 4-tab form (Startup/Investor/Mentor/Partner) with multi-step startup form (3 steps)
- Mentors: Ilkay Aydin, Sena Nomak, Kadir Demir, Prof. Taner Albayrak, Dr. Tahir Conka
- Founders: Nuri Murat Avci (linkedin: nurimuratavci), Selcuk Ergin (linkedin: selcukergin)
- Animation system uses progressive enhancement: content visible by default, hidden only when JS confirmed via `html.js-ready` class
