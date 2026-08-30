# beetlelm.github.io

Landing site for **beetle** — a minimal, transparent framework for training tiny
language models end-to-end on CPU (zero downloads, reproducible baseline).

Live at **https://beetlelm.github.io**.

## Development

It's a static site — open `index.html`, or serve locally:

```bash
python serve.py        # http://localhost:8000
```

## Deployment

Pushing to `main` deploys to GitHub Pages via the workflow in
`.github/workflows/pages.yml` (GitHub Actions → Pages).

## Structure

- `index.html` — the single-page site
- `assets/css/main.css` — base template styles (theme overrides are inline in `index.html`)
- `assets/js/main.js` — nav, scroll, AOS init
- `assets/vendor/` — Bootstrap, Bootstrap Icons, AOS, GLightbox, Swiper
- `assets/img/logo.svg` — beetle logo

Design ported from [babyvlm.github.io](https://babyvlm.github.io). Site by
[Suchir Salhan](https://www.cst.cam.ac.uk/people/sas245); template by
[BootstrapMade](https://bootstrapmade.com/).
