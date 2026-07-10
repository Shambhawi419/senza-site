# Senza AI — Website

Marketing site for Senza AI: voice agents that answer every call.

Built with Next.js (App Router, static export), GSAP for animation, and Lenis smooth scroll. Fully static — no server required.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

> Note: don't run `npm run build` while the dev server is running — they share the `.next` folder and the dev server will crash. Stop the dev server (Ctrl+C) first.

## Production build

```bash
npm run build
```

The static site is emitted to the `out/` folder.

## Deploying to Cloudflare Pages

1. Push this repo to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git** and select the repo.
3. Use these build settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. Deploy. Every push to `main` redeploys automatically.

Alternative without GitHub: build locally, then drag-and-drop the `out/` folder in **Workers & Pages → Create → Pages → Upload assets**.

## Editing content

All site copy (tagline, services, testimonials, about text, contact details, Calendly link) lives in one file: [`lib/content.ts`](lib/content.ts). Edit it and the whole site updates.

## Structure

```
app/            pages: / (home), /services, /about, /contact
components/     Nav, Footer, Hero (entrance animation), Preloader, Reveal, ContactForm
lib/content.ts  all copy in one place
public/fonts/   self-hosted assets
```
