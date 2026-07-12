# IDO Events — Project Instructions

## Project Context

This is the **IDO Events** website — an event styling and prop hire business serving Melbourne and suburbs. The site is a lead-generation tool: visitors browse props/packages, add items to a quote cart, and submit an enquiry. No online payment, no prices shown except "starting from" anchors on packages.

**Business model:** Quote-request only. First-to-reply wins the job.

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 (CSS-based `@theme inline` in globals.css — no tailwind.config.ts)
- **Animations:** Framer Motion — premium motion primitives in `src/components/motion.tsx`
- **Smooth Scroll:** Lenis (lazy-loaded via `src/components/SmoothScroll.tsx`)
- **Content:** TypeScript data files for occasions/suburbs/hire items/gallery/blog/service-suburbs
- **Analytics:** Google Analytics 4 via @next/third-parties (G-EKNJBST7QP, production-only)
- **Email:** Resend (API) — lazy-initialized to avoid build-time errors
- **Deploy:** Railway (`next start -p ${PORT:-3000}`, `output: "standalone"`)
- **Domain:** `idoeventss.com` + `www.idoeventss.com` (Namecheap DNS → Railway CNAME)
- **Fonts:** Google Fonts via next/font (Cormorant Garamond headings, DM Sans body, Dancing Script accents)
- **Images:** next/image, JPEG source files, WebP served via Next.js image optimization, lazy loading
- **Social:** Instagram [@ido.eventss](https://www.instagram.com/ido.eventss/), Facebook [balloonheadquarters](https://www.facebook.com/balloonheadquarters/)
- **Contact:** contact@idoeventss.com, 0406 179 786

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
│   ├── logos/                      # SVG + PNG logo variants
│   │   └── iDo-logo-circle-white.png
│   └── favicon.ico                 # 32x32 ICO for Google Search
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout (fonts, SmoothScroll, header, footer, mobile bar, Receptflow widget)
│   │   ├── globals.css             # Tailwind v4 @theme + component classes + Lenis CSS
│   │   ├── page.tsx                # Homepage (11 sections, 8 lazy-loaded via next/dynamic)
│   │   ├── api/quote/route.ts      # Quote submission endpoint (Resend, XSS-safe, rate-limited)
│   │   ├── icon.png                # 192x192 PNG favicon (iDo. logo)
│   │   ├── apple-icon.png          # 180x180 Apple touch icon
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
│   │   ├── blog/[slug]/page.tsx    # Blog post (113 posts)
│   │   ├── contact/page.tsx        # Contact page
│   │   ├── quote/page.tsx          # Quote wizard (with venue field)
│   │   ├── faq/page.tsx            # FAQ hub (26 questions, FAQPage JSON-LD)
│   │   ├── event-styling/[suburb]/ # Suburb SEO pages (25 suburbs)
│   │   ├── [service]/[suburb]/     # Service × Suburb pages (105 pages)
│   │   ├── links/page.tsx          # Instagram link-in-bio
│   │   ├── privacy/page.tsx        # Privacy policy
│   │   ├── terms/page.tsx          # Terms & conditions
│   │   ├── sitemap.ts              # Auto-generated sitemap (280 URLs)
│   │   ├── robots.ts               # robots.txt (allow all + AI crawlers, disallow /api/)
│   │   ├── hire/layout.tsx         # Metadata wrapper for client component
│   │   ├── gallery/layout.tsx      # Metadata wrapper for client component
│   │   └── quote/layout.tsx        # Metadata wrapper for client component
│   ├── components/
│   │   ├── Header.tsx              # Glass header with scroll shrink, progress bar, animated dropdown
│   │   ├── Footer.tsx              # 5-column footer (IG, FB, email, phone)
│   │   ├── TrackedPhoneLink.tsx    # GA4-tracked phone link (client component)
│   │   ├── MobileBar.tsx           # Sticky bottom bar (mobile: Quote button only)
│   │   ├── SmoothScroll.tsx        # Lenis smooth scroll integration (lazy-loaded)
│   │   ├── motion.tsx              # Premium Framer Motion primitives (TextReveal, Parallax, Magnetic, ImageReveal, etc.)
│   │   ├── Logo.tsx                # Text-based logo component
│   │   ├── OccasionPage.tsx        # Reusable occasion page component
│   │   └── home/                   # 11 homepage section components (all with Framer Motion)
│   │       ├── Hero.tsx            # Parallax bg, word-by-word text reveal, magnetic CTAs
│   │       ├── OccasionGrid.tsx    # 6 occasions with image wipe reveals
│   │       ├── HowItWorks.tsx      # 3 steps with bouncy number pop-in
│   │       ├── FeaturedPackages.tsx # 4 packages with image reveals + magnetic buttons
│   │       ├── ProofBand.tsx       # Animated counters (200+ events, 5.0 rating, 30+ suburbs)
│   │       ├── BeforeAfter.tsx     # Slide-in before/after comparisons
│   │       ├── RecentGallery.tsx   # Masonry grid with hover zoom
│   │       ├── Testimonials.tsx    # Review cards with star pop-in
│   │       ├── InstagramFeed.tsx   # 6-image grid with IG hover overlay
│   │       ├── CtaBand.tsx         # Floating magnetic CTA with animated bg
│   │       └── SuburbLinks.tsx     # Pill wave-in for 23 suburbs
│   ├── lib/
│   │   ├── schema.ts               # JSON-LD schema builders (BlogPosting, FAQPage, Product, BreadcrumbList, LocalBusiness)
│   │   └── analytics.ts            # GA4 event helpers (generate_lead, phone_call_click)
│   ├── types/
│   │   └── gtag.d.ts               # Window.gtag type declaration
│   ├── context/
│   │   └── CartContext.tsx          # Cart state (React context + localStorage)
│   └── data/
│       ├── gallery.json            # 153-photo manifest (file, occasion, alt, width)
│       ├── occasions.ts            # 6 occasion data (slug, name, tagline, intro, FAQs)
│       ├── suburbs.ts              # 25 suburb SEO data (localized copy, venues, coords)
│       ├── hire-items.ts           # 20 hire items/packages (8 categories)
│       ├── blog-posts.ts           # Main blog file — imports batch files (113 total)
│       ├── blog-batch-wedding.ts   # 25 wedding SEO blog posts
│       ├── blog-batch-birthday.ts  # 25 birthday + baby shower blog posts
│       ├── blog-batch-events.ts    # 25 christening + engagement + corporate blog posts
│       ├── blog-batch-general.ts   # 25 general event styling blog posts
│       ├── blog-batch-seo-authority.ts # 6 authority blog posts (pricing, venues, mehndi)
│       ├── service-suburbs.ts      # Main service-suburb data (7 services, 15 suburbs, imports batches)
│       ├── service-suburb-batch-birthday.ts    # 12 birthday suburb entries
│       ├── service-suburb-batch-baby-shower.ts # 13 baby shower suburb entries
│       ├── service-suburb-batch-engagement.ts  # 13 engagement suburb entries
│       ├── service-suburb-batch-corporate.ts   # 13 corporate suburb entries
│       ├── service-suburb-batch-bridal.ts      # 13 bridal shower suburb entries
│       └── service-suburb-batch-mehndi.ts      # 10 mehndi suburb entries
├── docs/superpowers/
│   ├── specs/                      # Design spec
│   └── plans/                      # Implementation plan
├── next.config.ts                  # standalone output, turbopack root fix, security headers
├── package.json
└── .env.example                    # RESEND_API_KEY, OWNER_EMAIL, NEXT_PUBLIC_SITE_URL
```

## Motion / Animation System

Premium Framer Motion primitives in `src/components/motion.tsx`:

- **ScrollReveal** — fade/slide elements into view on scroll
- **Stagger** — staggered children animation container
- **TextReveal** — word-by-word text reveal with overflow masking
- **Parallax / ParallaxImage** — scroll-driven depth with spring physics
- **Magnetic** — elements that follow cursor on hover
- **ImageReveal** — clip-path wipe reveals (up/left/right)
- **Floating** — continuous bobbing animation for CTAs
- **ScrollProgress** — thin progress bar tracking page scroll
- **Marquee** — infinite horizontal scroll loop
- **LineReveal** — decorative divider line grow animation
- **AnimatedCounter** — numbers count up when scrolled into view

**Variant presets:** `fadeUp`, `fadeIn`, `slideLeft`, `slideRight`, `scaleIn`, `clipRevealUp`, `clipRevealLeft`, `blurIn`
**Transition presets:** `springSmooth`, `springBouncy`, `springSnappy`, `easeOut`, `easeSlow`, `easeClip`

**Performance:** Homepage uses `next/dynamic` to lazy-load 8 below-fold sections. Only Hero, OccasionGrid, and HowItWorks load eagerly.

## Coding Rules

### General
- Use **TypeScript** for all files. No `any` types — use explicit types or `unknown`.
- Use **named exports** only. No default exports except Next.js page/layout conventions.
- Keep components **modular** — one component per file, one responsibility per component.
- All components are **React Server Components** by default. Only add `"use client"` when the component needs interactivity (state, effects, event handlers, Framer Motion).
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
- OpenGraph tags on all pages (homepage, occasions, suburbs, hire, gallery, quote, blog, service-suburbs).
- **JSON-LD structured data** via `src/lib/schema.ts` utility (exports `BASE_URL` constant):
  - `LocalBusiness + EventPlanner` on 25 suburb pages + 105 service-suburb pages
  - `BlogPosting` on 113 blog posts
  - `FAQPage` on 6 occasion pages + 105 service-suburb pages + FAQ hub
  - `Product` on 20 hire items
  - `BreadcrumbList` on all page types (blog, hire, suburb, occasion, service-suburb)
- Auto-generated `sitemap.xml` covering all 280 routes.
- `robots.txt` allows all crawlers + AI crawlers (GPTBot, ClaudeBot, PerplexityBot), disallows `/api/`.
- `llms.txt` at site root for AI crawler business summary.
- Client component pages (hire, gallery, quote) use `layout.tsx` wrappers for metadata.
- 113 blog posts with internal linking to hire items, occasion pages, and suburb pages.
- Blog posts use `generateStaticParams` + `generateMetadata`.
- Hire items use `generateStaticParams` + `generateMetadata`.
- Service-suburb pages use `generateStaticParams` + `generateMetadata`.
- Canonical URL base set in root layout via `alternates`.
- Favicon: `icon.png` (192x192), `apple-icon.png` (180x180), `favicon.ico` (32x32) in public.

### Analytics
- GA4 tracking via `@next/third-parties/google` (G-EKNJBST7QP, production-only).
- Conversion events: `generate_lead` on quote form, `phone_call_click` on tel: links.
- GA only loads when `NEXT_PUBLIC_GA_ID` env var is set.
- Event helpers in `src/lib/analytics.ts`, type declarations in `src/types/gtag.d.ts`.

### Security
- **XSS prevention:** All user input HTML-escaped (`esc()`) before insertion into email templates.
- **Header injection prevention:** Newlines stripped from email subject values (`sanitizeHeaderValue()`).
- **Rate limiting:** In-memory rate limiter on `/api/quote` — 5 requests per IP per 15 minutes.
- **Field length limits:** All form fields truncated (name: 100, email: 254, message: 2000 chars).
- **Security headers** in `next.config.ts`: X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy, Permissions-Policy.
- **Honeypot field** for bot prevention on quote form.
- Environment variables for secrets: `RESEND_API_KEY`, `OWNER_EMAIL`, `NEXT_PUBLIC_SITE_URL`.
- Resend client uses lazy initialization (`getResend()`) to avoid build-time failures.

### Forms & API
- Server-side validation on all form submissions.
- Email validation: RFC 5322-compliant regex before sending.
- Quote form includes venue/location field.
- Owner notification + customer auto-reply emails sent on submission.

### Git
- Commit after each logical unit of work.
- Commit message format: `type: short description` (feat, fix, chore, docs, refactor).
- Never commit `.env` files or secrets.

## Build Phases (Completed)

1. ✅ Scaffold (routes, layout, header, footer, homepage)
2. ✅ Quote cart + form + email API
3. ✅ Photo sorting + gallery.json generation (153 photos classified)
4. ✅ Occasion pages (6 pages, 1 reusable component)
5. ✅ Suburb SEO pages (25 suburbs, JSON-LD schema, Google Maps)
6. ✅ Hire collection (20 items) + Gallery (lightbox) + Blog (3 posts) + About + Contact + Links + Privacy + Terms
7. ✅ SEO optimisation (sitemap, robots.txt, metadata, OpenGraph, JSON-LD, canonical URLs)
8. ✅ Branded favicon (iDo. circle logo, 192x192 PNG + 32x32 ICO)
9. ✅ Instagram integration (@ido.eventss linked across all pages)
10. ✅ 100 additional SEO blog posts (106 total) with internal linking
11. ✅ Google Search Console setup + sitemap submitted
12. ✅ SEO schema expansion (BlogPosting, FAQPage, Product, BreadcrumbList JSON-LD)
13. ✅ Suburb expansion (10 → 25 suburbs)
14. ✅ Receptflow AI chat widget installed
15. ✅ Premium Framer Motion upgrade (parallax, text reveals, glass header, Lenis smooth scroll)
16. ✅ Performance optimisation (code splitting, lazy-load below-fold, removed duplicate motion package)
17. ✅ Security hardening (XSS prevention, rate limiting, security headers, input sanitisation)
18. ✅ SEO & AI visibility (llms.txt, FAQ hub, authority blog posts, service-suburb pages)
19. ✅ Service × Suburb expansion (105 pages — 7 services × 15 suburbs, all unique content)
20. ✅ Google Analytics 4 (GA4 tracking, generate_lead + phone_call_click events)
21. 🔲 Lighthouse audit + further optimisation

## Deployment

- **Railway:** Service IDO-Eventss, PORT=8080, HOSTNAME=0.0.0.0
- **Domain:** idoeventss.com (Namecheap)
- **DNS:** CNAME @ → qax12afk.up.railway.app, CNAME www → hmhz7my1.up.railway.app
- **Git remote:** https://github.com/Ahmadusama1122/IDO-Eventss (branch: master)
- **Auto-deploy:** Railway deploys on push to master

## Key Files to Never Break

- `src/app/layout.tsx` — Root layout, fonts, SmoothScroll, GA4, global metadata, favicon config
- `src/app/globals.css` — Tailwind v4 theme tokens + component classes + Lenis CSS
- `src/components/motion.tsx` — Premium Framer Motion primitives (used by all animated components)
- `src/components/Header.tsx` — Glass header with scroll progress (appears on every page)
- `src/components/Footer.tsx` — Footer (appears on every page)
- `src/components/SmoothScroll.tsx` — Lenis smooth scroll (loaded on every page)
- `src/context/CartContext.tsx` — Cart state management
- `src/data/gallery.json` — Photo manifest (feeds gallery, occasions, suburbs, hire)
- `src/lib/schema.ts` — JSON-LD schema builders + `BASE_URL` constant
- `src/data/blog-posts.ts` — Main blog data (imports all batch files, exports `blogPosts` array)
- `src/data/service-suburbs.ts` — Main service-suburb data (imports 6 batch files, 105 entries)
- `src/data/suburbs.ts` — 25 suburb entries (feeds suburb pages, sitemap, schema)
- `src/app/sitemap.ts` — Auto-generated sitemap (imports blog, hire, suburbs, service-suburbs)
- `src/app/api/quote/route.ts` — Quote API with security (XSS escape, rate limiter, input validation)
- `next.config.ts` — standalone output, turbopack root fix, security headers
