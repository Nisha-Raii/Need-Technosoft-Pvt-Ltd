# Need Technosoft Pvt. Ltd. — Website

A React.js corporate website built with Vite, React Router and Lucide icons.

## Getting started

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

`npm run build` outputs static files to `dist/`, ready to deploy to any static host
(Netlify, Vercel, an Nginx server, etc).

## Project structure

```
src/
  components/   Reusable UI pieces (Navbar, Footer, cards, form, etc.)
  pages/        One file per route (Home, About, Services, Projects,
                Technologies, Careers, Contact, NotFound)
  data/         Editable content — services, projects, technologies, stats
  styles/       global.css (design tokens + component styles)
                responsive.css (breakpoints)
```

## Content that still needs real data

Per the brief, no facts were invented. Before this goes live, replace the
placeholder content in:

- `src/data/stats.js` — statistics are illustrative (50+, 30+, 99%, 24/7).
  Replace with verified figures.
- `src/data/projects.js` — project entries are generic examples. Replace
  with real project names, descriptions and (ideally) screenshots.
- Footer social links — none were added since no real URLs were provided.
- Contact form / Careers form — both are client-side only right now (they
  simulate a successful submission). Connect them to a real backend or a
  form service (e.g. Formspree, a serverless function, your own API)
  before relying on them to receive messages.
- The hero/about "visual" sections use simple abstract UI mockups built in
  CSS rather than real screenshots. Swap in real product/dashboard imagery
  when available — the layout is already set up for that.
- The map on the Contact page is a placeholder. Drop in a Google Maps
  embed (or your preferred provider) using the address already shown.

## Design tokens

All colors, radii and spacing are defined as CSS variables at the top of
`src/styles/global.css`, so the palette can be adjusted in one place if
needed.
