# Snowlake Jekyll Theme

A full-featured Jekyll static site theme with multiple home page layouts, blog, portfolio, shop, and more.

## Stack

- **Framework:** Jekyll 4.3+
- **Language:** Ruby 3.2
- **Plugins:** jekyll-feed, jekyll-paginate-v2, jekyll-archives
- **Package Manager:** Bundler

## Project Layout

```
/
├── home-pages/       # Multiple home page layout variants (index.html = root page)
├── _layouts/         # Jekyll layout templates
├── _includes/        # Reusable template partials
├── _posts/           # Blog posts
├── _portfolio/       # Portfolio items
├── _shop_items/      # Shop items
├── _authors/         # Author profiles
├── _data/            # YAML data files (nav, etc.)
├── assets/           # CSS, JS, images
├── blogs/            # Blog listing pages
├── features/         # Features pages
├── elements/         # UI elements demo pages
├── contact/          # Contact page
├── services/         # Services page
├── _config.yml       # Jekyll configuration
└── Gemfile           # Ruby dependencies
```

## Development

The app runs on port 5000 via the "Start application" workflow:
```
bundle exec jekyll serve --host 0.0.0.0 --port 5000 --livereload
```

## Key Config Notes

- Root homepage: `home-pages/index.html` (has `permalink: /`)
- Feed path changed to `/feed.xml` (from `/index.xml` to avoid root conflict)
- Live reload enabled for development

## Deployment

Configured as a static site. Build: `bundle exec jekyll build`. Output: `_site/`.
