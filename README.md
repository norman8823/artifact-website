# ARtifact — Marketing Website

A calm, editorial marketing site for **ARtifact**, an iOS museum companion app.
Built to establish credibility, qualify for App Store submission, and drive
visitors into the TestFlight beta.

## Stack

- [Astro](https://astro.build) — static output (no SSR)
- [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/vite`)
- Self-hosted **Playfair Display** (serif display) + system sans stack
- Vendored **devices.css** (iPhone 14 Pro frame only, MIT)
- Deployed to **Cloudflare Pages**

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve the production build
```

## Deploying to Cloudflare Pages

- **Build command:** `npm run build`
- **Output directory:** `dist`
- No environment variables or server runtime required.

## Structure

```
src/
  consts.ts              CTA_URL / CTA_LABEL / contact — single source of truth
  layouts/Base.astro     <head>, header, footer, reveal-on-scroll
  components/
    DeviceFrame.astro    reusable iPhone 14 Pro frame (scales via JS)
    HeroVideo.astro      Cloudflare Stream embed (reduced-motion → poster)
    StoryVideo.astro     looping UI recordings (autoplay in-view / pause off)
    StorySection.astro   alternating text / media row
    Faq.astro            native <details> accordion
    Header.astro / Footer.astro
  pages/
    index.astro          hero + three experiences + FAQ
    support.astro        /support — contact
    privacy.astro        /privacy — renders src/content/privacy-policy.md verbatim
  styles/
    global.css           design tokens + Tailwind
    devices.css          vendored iPhone 14 Pro subset (MIT)
public/assets/           images + local mp4 loops
```

## TestFlight → App Store transition

When ARtifact ships, this is a **config/content change only** — no component
edits:

1. Update `CTA_URL` and `CTA_LABEL` in [`src/consts.ts`](src/consts.ts).
2. Adjust the two FAQ answers that mention TestFlight/beta in
   [`src/components/Faq.astro`](src/components/Faq.astro).

The FAQ answers were written so this stays an edit, never a rewrite.
