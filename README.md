# MAT Transport

A multilingual Next.js marketing site for MAT Transport, a passenger transport company offering executive cars, minibuses, buses, and coaches with driver rental.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- next-intl for localized routes and content
- EmailJS for contact form submissions

## Local development

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## Environment variables

Create a `.env.local` file with the keys required by the app:

```bash
NEXT_PUBLIC_EMAILJS=your_emailjs_public_key
```

## Project structure

- `app/[locale]` — localized route pages and layout
- `components` — shared UI
- `messages` — language files for Polish and English
- `public/images` — static assets and fleet photography
- `site-config.ts` — centralized business metadata and external links

## Production notes

- The site is static by default and optimized for brochure-style marketing usage.
- Localization routes use Polish as the default locale and English as the secondary locale.
- Contact submissions are sent via EmailJS using the public key in `NEXT_PUBLIC_EMAILJS`.
