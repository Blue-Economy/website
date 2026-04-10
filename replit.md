# Mursel Ventures — Blue Economy Website

A fully native Jekyll site for Mursel Ventures (murselventures.com), a Blue Economy venture platform combining venture studio, accelerator, consulting, and fund programs.

## Stack

- **Framework:** Jekyll 4.3.4 (static site generator)
- **Language:** Ruby 3.2 + Liquid templates
- **Styling:** Custom CSS (no frameworks)
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
├── stats.yml              # Key statistics
├── team.yml               # Founders (Nuri Murat Avci, Selçuk Ergin)
├── mentors.yml            # 5 mentors with bios and expertise
├── partners.yml           # Academic/institutional/corporate/ecosystem partners
└── posts.yml              # Insights/blog entries
assets/
├── css/main.css           # Full dark ocean theme styles
└── js/main.js             # Mobile nav, form tabs, multi-step forms
```

## Pages

- `index.html` — Homepage (hero, 4 pillars, stats, mentors, CTA)
- `about.html` — Brand story, Blue Economy, timeline, founders
- `programs/index.html` — Programs overview
- `programs/studio.html` — Venture Studio details
- `programs/accelerator.html` — Accelerator program
- `programs/consulting.html` — Consulting services
- `programs/fund.html` — Investment fund
- `ecosystem/index.html` — Ecosystem overview
- `ecosystem/mentors.html` — 5 mentor profiles
- `ecosystem/partners.html` — Partner categories
- `insights.html` — Blog/insights listing
- `apply.html` — Multi-tab application (Startup/Investor/Mentor/Partner)
- `contact.html` — Contact info + form
- `privacy.html` / `terms.html` — Legal pages
- `404.html` — Custom error page

## Design Theme

- **Dark ocean palette:** `#0A1929` (deep), `#1E3A5F` (primary), `#2E5984` (secondary), `#40E0D0` (turquoise accent), `#FF6B6B` (coral)
- Gradient backgrounds, glassmorphism cards, smooth transitions

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
- Mentors: İlkay Aydın, Sena Nomak, Kadir Demir, Prof. Taner Albayrak, Dr. Tahir Conka
- Founders: Nuri Murat Avci (linkedin: nurimuratavci), Selçuk Ergin (linkedin: selcukergin)
