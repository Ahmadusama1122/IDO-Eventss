# IDO Events — Project Instructions

## Project Context

This is the **IDO Events** website — an event styling and prop hire business serving Melbourne and suburbs. The site is a lead-generation tool: visitors browse props/packages, add items to a quote cart, and submit an enquiry. No online payment, no prices shown except "starting from" anchors on packages.

**Business model:** Quote-request only. First-to-reply wins the job.

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 (CSS-based `@theme inline` in globals.css — no tailwind.config.ts)
- **Content:** TypeScript data files for occasions/suburbs/hire items/gallery/blog
- **Email:** Resend (API) — lazy-initialized to avoid build-time errors
- **Deploy:** Railway (`next start -p ${PORT:-3000}`, `output: "standalone"`)
- **Domain:** `idoeventss.com` + `www.idoeventss.com` (Namecheap DNS → Railway CNAME)
- **Fonts:** Google Fonts via next/font (Cormorant Garamond headings, DM Sans body, Dancing Script accents)
- **Images:** next/image, JPEG source files, WebP served via Next.js image optimization, lazy loading
- **Social:** Instagram [@ido.eventss](https://www.instagram.com/ido.eventss/)

## Brand Tokens

Defined in `src/app/globals.css` via `@theme inline`:

```
Sage:         #8AA275  (primary CTA, accents)
Sage Dark:    #6C7E5A  (hover states, secondary text)
Sage Light:   #A8B89A  (backgrounds, subtle accents)
Cream:        #DDE4D3  (light backgrounds, cards)
Cream Light:  #F5F7F2  (page background)
Charcoal:     #1C1A17  (body text, headings)
Warm White:   #FAFAF8  (card backgrounds)
Accent Gold:  #D4A574  (badges, stars, review accents)
```

## Project Structure

```
ido-events/
├── public/
│   ├── gallery/                    # Sorted event photos (JPEG, 7 categories)
│   │   ├── birthdays/ (45)
│   │   ├── engagements/ (28)
│   │   ├── christenings-baptisms/ (21)
│   │   ├── drapes/ (20)
│   │   ├── baby-showers/ (19)
│   │   ├── weddings/ (16)
│   │   └── corporate/ (6)
│   └── logos/                      # SVG logo variants
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout (fonts, CartProvider, header, footer, mobile bar)
│   │   ├── globals.css             # Tailwind v4 @theme + component classes
│   │   ├── page.tsx                # Homepage (11 sections)
│   │   ├── api/quote/route.ts      # Quote submission endpoint (Resend)
│   │   ├── weddings/page.tsx       # Occasion page
│   │   ├── birthdays/page.tsx      # Occasion page
│   │   ├── christenings-baptisms/  # Occasion page
│   │   ├── baby-showers/page.tsx   # Occasion page
│   │   ├── engagements/page.tsx    # Occasion page
│   │   ├── corporate/page.tsx      # Occasion page
│   │   ├── hire/page.tsx           # Prop collection (filterable)
│   │   ├── hire/[slug]/            # Item detail + HireItemDetail client component
│   │   ├── gallery/page.tsx        # Photo gallery with lightbox
│   │   ├── about/page.tsx          # About page
│   │   ├── blog/page.tsx           # Blog index
│   │   ├── blog/[slug]/page.tsx    # Blog post (106 posts)
│   │   ├── contact/page.tsx        # Contact page
│   │   ├── quote/page.tsx          # 3-step quote wizard
│   │   ├── event-styling/[suburb]/ # Suburb SEO pages (10 suburbs)
│   │   ├── links/page.tsx          # Instagram link-in-bio
│   │   ├── privacy/page.tsx        # Privacy policy
│   │   ├── terms/page.tsx          # Terms & conditions
│   │   ├── sitemap.ts              # Auto-generated sitemap (all routes)
│   │   ├── robots.ts               # robots.txt (allow all, disallow /api/)
│   │   ├── icon.svg                # Branded favicon (iDo. sage dot)
│   │   ├── hire/layout.tsx         # Metadata wrapper for client component
│   │   ├── gallery/layout.tsx      # Metadata wrapper for client component
│   │   └── quote/layout.tsx        # Metadata wrapper for client component
│   ├── components/
│   │   ├── Header.tsx              # Sticky header with nav, cart, occasions dropdown
│   │   ├── Footer.tsx              # 5-column footer
│   │   ├── MobileBar.tsx           # Sticky bottom bar (mobile: Call, WhatsApp, Quote)
│   │   ├── Logo.tsx                # Text-based logo component
│   │   ├── OccasionPage.tsx        # Reusable occasion page component
│   │   └── home/                   # 11 homepage section components
│   ├── context/
│   │   └── CartContext.tsx          # Cart state (React context + localStorage)
│   └── data/
│       ├── gallery.json            # 155-photo manifest (file, occasion, alt, width)
│       ├── occasions.ts            # 6 occasion data (slug, name, tagline, intro, FAQs)
│       ├── suburbs.ts              # 10 suburb SEO data (localized copy, venues, coords)
│       ├── hire-items.ts           # 20 hire items/packages (8 categories)
│       ├── blog-posts.ts           # Main blog file — 6 original + imports 4 batch files (106 total)
│       ├── blog-batch-wedding.ts   # 25 wedding SEO blog posts
│       ├── blog-batch-birthday.ts  # 25 birthday + baby shower blog posts
│       ├── blog-batch-events.ts    # 25 christening + engagement + corporate blog posts
│       └── blog-batch-general.ts   # 25 general event styling blog posts
├── docs/superpowers/
│   ├── specs/                      # Design spec
│   └── plans/                      # Implementation plan
├── next.config.ts                  # standalone output, turbopack root fix
├── package.json
└── .env.example                    # RESEND_API_KEY, OWNER_EMAIL, NEXT_PUBLIC_SITE_URL
```

## Coding Rules

### General
- Use **TypeScript** for all files. No `any` types — use explicit types or `unknown`.
- Use **named exports** only. No default exports except Next.js page/layout conventions.
- Keep components **modular** — one component per file, one responsibility per component.
- All components are **React Server Components** by default. Only add `"use client"` when the component needs interactivity (state, effects, event handlers).
- **No inline styles.** Use Tailwind utilities exclusively.
- **No `console.log` in committed code.**

### Tailwind v4 Notes
- Theme is defined in `globals.css` using `@theme inline { }` — NOT in a config file.
- Custom colors use `--color-*` CSS variables. Use them as `bg-sage`, `text-charcoal`, etc.
- Custom fonts use `--font-*` CSS variables. Use them as `font-heading`, `font-body`, `font-script`.
- Component classes (`.btn-primary`, `.btn-ghost`, `.btn-white`) are defined in `@layer components`.

### Components
- Props interfaces defined in the same file.
- Images always use `next/image` with explicit width/height or fill + sizes.
- Links always use `next/link`.

### Data
- All content-driven pages read from TypeScript data files in `src/data/`.
- Photo manifest is `src/data/gallery.json` — all gallery/occasion/suburb pages read from it.
- No hardcoded content in page components — pull from data files.

### SEO
- Every page has explicit `metadata` (title + description) via Next.js Metadata API.
- OpenGraph tags on all pages (homepage, occasions, suburbs, hire, gallery, quote, blog).
- Homepage and suburb pages include JSON-LD structured data (LocalBusiness + EventPlanner).
- Auto-generated `sitemap.xml` covering all routes (pages, blog posts, hire items, suburbs).
- `robots.txt` allows all crawlers, disallows `/api/`.
- Client component pages (hire, gallery, quote) use `layout.tsx` wrappers for metadata.
- 106 blog posts with internal linking to hire items, occasion pages, and suburb pages.
- Blog posts use `generateStaticParams` + `generateMetadata`.
- Hire items use `generateStaticParams` + `generateMetadata`.
- Canonical URL base set in root layout via `alternates`.

### Forms & API
- Server-side validation on all form submissions.
- Email validation: RFC-compliant check before sending.
- Honeypot field for spam prevention (no CAPTCHA).
- Environment variables for secrets: `RESEND_API_KEY`, `OWNER_EMAIL`, `NEXT_PUBLIC_SITE_URL`.
- Resend client uses lazy initialization (`getResend()`) to avoid build-time failures.

### Git
- Commit after each logical unit of work.
- Commit message format: `type: short description` (feat, fix, chore, docs, refactor).
- Never commit `.env` files or secrets.

## Build Phases (Completed)

1. ✅ Scaffold (routes, layout, header, footer, homepage)
2. ✅ Quote cart + form + email API
3. ✅ Photo sorting + gallery.json generation (155 photos classified)
4. ✅ Occasion pages (6 pages, 1 reusable component)
5. ✅ Suburb SEO pages (10 suburbs, JSON-LD schema, Google Maps)
6. ✅ Hire collection (20 items) + Gallery (lightbox) + Blog (3 posts) + About + Contact + Links + Privacy + Terms
7. ✅ SEO optimisation (sitemap, robots.txt, metadata, OpenGraph, JSON-LD, canonical URLs)
8. ✅ Branded favicon (iDo. SVG icon)
9. ✅ Instagram integration (@ido.eventss linked across all pages)
10. ✅ 100 additional SEO blog posts (106 total) with internal linking
11. ✅ Google Search Console setup + sitemap submitted
12. 🔲 Polish + trust signals + Lighthouse audit

## Deployment

- **Railway:** Service IDO-Eventss, PORT=8080, HOSTNAME=0.0.0.0
- **Domain:** idoeventss.com (Namecheap)
- **DNS:** CNAME @ → qax12afk.up.railway.app, CNAME www → hmhz7my1.up.railway.app
- **Git remote:** https://github.com/Ahmadusama1122/IDO-Eventss (branch: master)
- **Auto-deploy:** Railway deploys on push to master

## Key Files to Never Break

- `src/app/layout.tsx` — Root layout, fonts, CartProvider, global metadata
- `src/app/globals.css` — Tailwind v4 theme tokens + component classes
- `src/components/Header.tsx` — Sticky header (appears on every page)
- `src/components/Footer.tsx` — Footer (appears on every page)
- `src/context/CartContext.tsx` — Cart state management
- `src/data/gallery.json` — Photo manifest (feeds gallery, occasions, suburbs, hire)
- `src/data/blog-posts.ts` — Main blog data (imports all batch files, exports `blogPosts` array)
- `src/app/sitemap.ts` — Auto-generated sitemap (imports blog, hire, suburbs)
- `next.config.ts` — standalone output + turbopack root fix
