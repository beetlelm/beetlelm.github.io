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

- `index.html` — **Home.** A single-page academic project page (SuperBPE-style
  layout): title, authors, paper/arXiv/code links, a TL;DR, the framework figure
  and key results, an "Explore the research" grid, and the citation.
- `research.html` — **Research.** Research directions, the four controlled
  variables, key findings, results figures, the paper and a collaboration call.
- `models.html` — **Models & Data.** An interactive model finder over all ~930
  Hugging Face repositories (filter by language, training data, model type,
  curriculum and scale), a collection guide, a data/tokeniser guide and the
  final 24B release (`Beetle-FineWeb-24B-4` / `-5`). The repo dataset is
  generated from the Hub; see the regeneration scripts in the scratchpad notes.
- `framework.html` — **Framework.** Architecture, tokenisation, the B1–B5 exposure
  curricula, data scales, checkpoints and matched baselines.
- `docs.html` — **Documentation.** Loading released checkpoints and tokenizers,
  stepping through training checkpoints, reproducing the paper's evaluations,
  the analysis notebooks and the ecosystem repositories.

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
