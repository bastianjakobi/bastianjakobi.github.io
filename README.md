# Portfolio Website

This repository contains the newest version of my personal portfolio website, which can be found [here](https://bastianjakobi.com).

## Available Commands

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
```

`npm run build` creates the deployable static site in `dist/`. The post-build step keeps the existing
German URL at `/de/`, preserves the legal document URLs ending in `.html`, emits clean directory URLs
for the blog and its posts, and generates `sitemap.xml` from the canonical URLs of all built pages.

## Project Markdown

```md
---
title: Example project
locale: en
order: 3
projectUrl: https://example.com
codeUrl: https://github.com/example/project
annotation: optional short note
---

The project description is regular **Markdown**.
```

If a locale has no project entries, its landing page displays a localized empty state.

## Blog Markdown

```md
---
title: My post
description: A short summary used on post cards and in page metadata.
pubDate: 2026-08-01
updatedDate: 2026-08-02 # optional
draft: false # optional; defaults to false
lang: en # optional; en or de, defaults to en
---

The complete article is written in **Markdown**.
```

Published posts appear on both `/blog/` and `/de/blog/`, with localized page chrome. The three
newest posts also appear on each landing page. When no published posts exist, the landing-page
section and navigation link are omitted. `_template.md` is intentionally a draft and can be copied
when starting a post.
