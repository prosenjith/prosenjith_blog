# Shuvo’s Notes — Astro + MDX Blog (Full)

## Quick start
```bash
npm install
npm run dev
```

## Features
- MDX posts with typed frontmatter
- Tailwind + Typography
- Dark mode (class strategy, persisted)
- Math (remark-math + rehype-katex)
- OG images per post at `/og/[slug].png`
- RSS at `/rss.xml`
- Giscus comments (fill in repo details)
- Cloudflare Pages deploy via GitHub Actions

## Configure
- `astro.config.mjs`: set `site` to your domain.
- `src/components/Giscus.astro`: replace placeholders:
  - `data-repo`, `data-repo-id`, `data-category-id` (create a public repo, enable Discussions; Giscus website will give you these values).
- For OG images, edit styling in `src/pages/og/[slug].png.ts`.
- Tailwind dark mode is enabled. Toggle in header.

## Cloudflare Pages via Actions
Add repository secrets:
- `CLOUDFLARE_API_TOKEN` (Pages:Edit + Account:Read permissions)
- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_PAGES_PROJECT`

Or connect the repo directly in Cloudflare Pages UI (no Actions needed).

## Writing posts
Create files in `src/content/posts/*.mdx` with frontmatter:
```yaml
---
title: "Your Title"
description: "One-line summary (<= 160 chars)"
pubDate: 2025-08-08
tags: ["android", "physics"]
layout: ../../layouts/PostLayout.astro
---
```
