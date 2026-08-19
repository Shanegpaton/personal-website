# Shane Paton Portfolio

Portfolio site for Shane Paton, built with Next.js, TypeScript, and Tailwind CSS.

Live site: [shanepaton.com](https://shanepaton.com)

## What It Shows

- Project case studies with screenshots, GitHub links, and live demos where available.
- Resume and contact paths for internship, full-time, and startup opportunities.
- Responsive layout with SEO metadata, sitemap, Open Graph image, and Vercel deployment.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Vercel

## Project Structure

```text
app/                 Pages, metadata, global styles, and resume route
components/          Portfolio sections and reusable UI components
hooks/               Scroll animation behavior
public/images/       Headshot, project screenshots, and social preview assets
public/resume.pdf    Resume displayed by the embedded viewer
```

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev          # Start the development server
npm run build        # Build for production
npm run start        # Start the production server
npm run lint         # Run linting
npm run type-check   # Run TypeScript checks
npm run format       # Format with Prettier
```

## Notes

This repository is intentionally small: it is a portfolio shell, not a product platform. The main goal is to make project work easy to inspect quickly from a recruiter or startup-founder point of view.
