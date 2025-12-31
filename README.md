# Devesh Machinery & Tools — Demo Site

This repository contains a small responsive marketing site and contact page.

Files created:


Preview locally:


Notes:
- To wire Formspree, replace the placeholder ID in `contact.html` action (https://formspree.io/f/REPLACE_WITH_YOUR_ID) with your form ID.
- To deploy permanently: connect this repo to Netlify (root publish) or enable GitHub Pages in repository Settings.
Deployment options

- GitHub Pages (automatic): A GitHub Action is included at `.github/workflows/deploy-pages.yml`. On every push to `main` the workflow will publish the repository root to GitHub Pages. To use:
	1. Commit & push your changes to `main`.
	2. In the repository Settings → Pages, ensure the Pages permissions allow GitHub Actions to deploy (the workflow has `pages: write` permission).
	3. The Pages site URL will be shown in Settings → Pages when deployment completes.

- Netlify: A `netlify.toml` is included. To deploy:
	1. Sign in to Netlify and create a new site from GitHub.
	2. Select this repository and set the publish directory to `/` (root). There is no build command for this static demo.
	3. Netlify will publish the site and provide a public URL.


Added features in this update:

- Homepage image slider/carousel
- Full menu structure and subpages (`about.html`, `products*.html`, `services*.html`, `projects.html`, `news.html`, `careers.html`)
- Placeholder SVG images in `assets/images`
- Client-side `search.html` with a lightweight index
- SEO helpers: `sitemap.xml`, `robots.txt`, meta descriptions and structured pages
- Social share helper (uses `navigator.share` when available)

If you want real production SEO values, update the host URLs in `sitemap.xml` and add unique descriptive meta tags per page.
# devesh-machinery-and-tools
webiste for teting
