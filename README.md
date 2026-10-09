# beetlelm.github.io

Website for **Beetle** — a controlled framework and model suite for studying how
training experience shapes bilingual language models (second-language learning,
cross-lingual transfer and human bilingual processing).

Live at **https://beetlelm.github.io**.

Paper: *Beetle: A Bilingual Model Suite for Modelling Second-Language Processing*
(EMNLP 2026) — <https://arxiv.org/abs/2609.22633>.

## Structure

A small, static multi-page research site with a deliberately sparse homepage and
dedicated pages for the detail:

- `index.html` — **Home.** The research question, key numbers, one figure, and
  links to the main destinations.
- `research.html` — **Research.** Motivation, the four controlled variables, key
  findings, results figures, the full abstract and the citation.
- `models.html` — **Models & Data.** A searchable catalogue of every released
  checkpoint, tokenizer and dataset on the Hugging Face Hub.
- `framework.html` — **Framework.** Architecture, tokenisation, the B1–B5 exposure
  curricula, data scales, checkpoints and matched baselines.
- `docs.html` — **Documentation.** Install, CPU quickstart, tutorials, loading
  checkpoints, Colab notebooks and the ecosystem repositories.

Shared assets:

- `assets/css/site.css` — the design system (one stylesheet, all pages).
- `assets/js/site.js` — mobile nav, stat count-up, Hub catalogue filter.
- `assets/img/logo.svg` — the beetle logo; `favicon.ico` + `assets/img/favicon-*`
  / `apple-touch-icon.png` are rendered from it.
- `assets/paper/` — the figures and PDF used across the site.
- `assets/vendor/bootstrap-icons/` — icon font.

## Development

It's a static site — open `index.html`, or serve locally:

```bash
python serve.py 8931      # http://localhost:8931
```

## Deployment

Deployed via GitHub Pages "Deploy from a branch" (`main` / root). The site is
plain static files, so there is no build step.

Site by [Suchir Salhan](https://www.cst.cam.ac.uk/people/sas245). Icons by
[Bootstrap Icons](https://icons.getbootstrap.com/). Released under Apache-2.0.
