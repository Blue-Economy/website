# Mursel Ventures — Blue Economy Website

A full-featured Next.js + TypeScript + Tailwind CSS website for Mursel Ventures, a Blue Economy venture platform (venture studio + accelerator + consulting + fund).

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + @tailwindcss/postcss
- **Icons:** Lucide React + custom SVG icons (LinkedIn, Twitter)
- **Fonts:** Poppins (headings) + Inter (body) via Google Fonts

## Project Layout

```
src/
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Homepage
│   ├── studio/           # Venture Studio page
│   ├── accelerator/      # Accelerator page
│   ├── consulting/       # Consulting page
│   ├── invest/           # Investment page
│   ├── focus-areas/      # Focus Areas page
│   ├── team/             # Team page
│   ├── insights/         # Insights/Blog page
│   ├── apply/            # Multi-step application form
│   ├── contact/          # Contact page
│   ├── about/            # About page
│   ├── api/contact/      # Contact form API route
│   └── layout.tsx        # Root layout (Navbar + Footer)
├── components/
│   ├── layout/           # Navbar, Footer, Container
│   ├── sections/         # Hero, TrustBar, Pillars, FocusAreas, HowItWorks, CTA, TeamPreview
│   ├── ui/               # Button, Card, SectionTitle
│   └── icons.tsx         # Custom SVG social icons
├── data/                 # Static data (site config, navigation, focus areas, team, posts)
└── lib/                  # Utilities and constants
public/
└── logo.png              # Mursel logo
```

## Design Theme

- **Dark ocean theme:** `ocean-deep: #0A1929`, `ocean-primary: #1E3A5F`, `ocean-secondary: #2E5984`, `ocean-accent: #40E0D0` (turquoise)
- Gradient backgrounds, glassmorphism cards, smooth transitions

## Development

Runs on port 5000 via the "Start application" workflow:
```
npm run dev -- -H 0.0.0.0 -p 5000
```

## Deployment

Configured for autoscale deployment:
- Build: `npm run build`
- Run: `npm run start`

## Notes

- Contact API (`/api/contact`) currently logs to console — no email provider integrated yet
- Apply page has multi-step form (3 steps) with tabs for Startup/Partner/Mentor
- Legacy Jekyll files (Gemfile, _config.yml, etc.) still exist in root but are unused
