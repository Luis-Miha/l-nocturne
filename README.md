# L. Nocturne — Gothic Beauty & Artistry

Editorial portfolio website for a makeup artist. Built with React + Vite, deployable as a static site on Vercel.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

> Note: this project lives in a folder whose path contains spaces. If `npm run dev`/`npm run build` fail with a path error, invoke Vite directly:
> `node node_modules/vite/bin/vite.js` (dev) or `node node_modules/vite/bin/vite.js build`.

## Customization

- **Artist identity & contact:** edit `src/config/site.js` (name, title, intro, email, social links, location).
- **Portfolio items & categories:** edit `src/data/portfolio.js`.
- **Images:** replace files in `public/images/` keeping the same filenames, or update paths in `src/data/portfolio.js`. Images are local and easily swappable.
- **Copy:** hero headline in `src/components/Hero.jsx`, statement in `src/components/Statement.jsx`.

## Deployment

Static site — deploy the `dist/` folder to Vercel (or any static host). No backend, database, or secrets required.
