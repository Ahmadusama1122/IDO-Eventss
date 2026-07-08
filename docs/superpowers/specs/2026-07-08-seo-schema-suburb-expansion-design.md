# SEO Schema & Suburb Expansion — Design Spec

**Date:** 2026-07-08
**Status:** Approved
**Domain:** `https://idoeventss.com`

## Problem

The IDO Events site has solid foundational SEO (sitemap, robots.txt, titles, meta descriptions, OpenGraph) but is missing structured data on most page types and has limited geographic coverage. This leaves rich snippet opportunities on the table and gaps in local search visibility across Melbourne.

### Current Issues

1. **JSON-LD URL mismatch** — suburb pages use `idoevents.com.au` instead of `idoeventss.com`
2. **No Article schema** on 106 blog posts — missing BlogPosting rich snippets
3. **No BreadcrumbList schema** on any page — weak navigation signals
4. **No FAQ schema** on 6 occasion pages despite having FAQ content — missing FAQ rich results
5. **No Product schema** on 20 hire items — no product rich snippets
6. **Only 10 suburb pages** — Melbourne has 300+ suburbs, significant local keyword gap

## Solution

### 1. Schema Utility — `src/lib/schema.ts`

A single utility file with pure functions returning JSON-LD objects. All functions use `https://idoeventss.com` as the `BASE_URL` constant.

```typescript
interface BreadcrumbItem {
  name: string;
  url: string;
}

// Returns BlogPosting schema
buildArticleSchema(post: { title, slug, excerpt, date, image, category }): object

// Returns FAQPage schema
buildFaqSchema(faqs: { q: string; a: string }[]): object

// Returns BreadcrumbList schema
buildBreadcrumbSchema(crumbs: BreadcrumbItem[]): object

// Returns Product schema (for hire items)
buildProductSchema(item: { name, slug, description, image, category }): object

// Returns LocalBusiness + EventPlanner schema (refactored from suburb page)
buildLocalBusinessSchema(suburb: SuburbData, heroImage: string): object
```

Shared publisher object used across schemas:
```typescript
const PUBLISHER = {
  "@type": "Organization",
  name: "IDO Events",
  url: "https://idoeventss.com",
  logo: { "@type": "ImageObject", url: "https://idoeventss.com/logos/ido-events-logo.svg" },
};
```

### 2. Blog Post Article Schema

**File:** `src/app/blog/[slug]/page.tsx`

Inject `<script type="application/ld+json">` in the server component with:

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "post.title",
  "datePublished": "post.date",
  "image": "post.image (absolute URL)",
  "author": { "@type": "Organization", "name": "IDO Events" },
  "publisher": { PUBLISHER },
  "description": "post.excerpt",
  "mainEntityOfPage": "https://idoeventss.com/blog/{slug}"
}
```

Also add BreadcrumbList: Home > Blog > Post Title.

### 3. Breadcrumb Schema

Add per-page breadcrumbs (not in layout — each page needs accurate data):

| Page Type | Breadcrumb Path |
|-----------|----------------|
| Blog posts | Home > Blog > {Post Title} |
| Hire items | Home > Prop Hire > {Item Name} |
| Suburb pages | Home > Event Styling > {Suburb Name} |
| Occasion pages | Home > {Occasion Name} |

Schema format:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://idoeventss.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://idoeventss.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "Post Title" }
  ]
}
```

### 4. FAQ Schema on Occasion Pages

The `OccasionPage` component is `"use client"`, so FAQ schema must be injected in the **server-side page file** (e.g., `weddings/page.tsx`, `birthdays/page.tsx`, etc.).

Each of the 6 occasion page files will add:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "faq.q",
      "acceptedAnswer": { "@type": "Answer", "text": "faq.a" }
    }
  ]
}
```

### 5. Product Schema on Hire Items

**File:** `src/app/hire/[slug]/page.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "item.name",
  "description": "item.description",
  "image": "item.image (absolute URL)",
  "category": "item.category label",
  "brand": { "@type": "Organization", "name": "IDO Events" },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "AUD",
    "availability": "https://schema.org/InStock",
    "url": "https://idoeventss.com/hire/{slug}"
  }
}
```

Also add BreadcrumbList: Home > Prop Hire > {Item Name}.

### 6. Fix Suburb JSON-LD URL Bug

**File:** `src/app/event-styling/[suburb]/page.tsx`

- Line 66: `https://idoevents.com.au/event-styling/${data.slug}` → `https://idoeventss.com/event-styling/${data.slug}`
- Line 97: `https://idoevents.com.au${heroPhoto.file}` → `https://idoeventss.com${heroPhoto.file}`

Also refactor to use `buildLocalBusinessSchema()` from the utility and add BreadcrumbList.

### 7. Suburb Expansion — 15 New Suburbs

Add to `src/data/suburbs.ts`, following the existing `SuburbData` interface:

| # | Suburb | Region | Lat | Lng |
|---|--------|--------|-----|-----|
| 1 | South Yarra | Inner South | -37.8388 | 144.9926 |
| 2 | South Melbourne | Inner South | -37.8316 | 144.9568 |
| 3 | Narre Warren | South East | -37.9833 | 145.3000 |
| 4 | Berwick | South East | -38.0333 | 145.3500 |
| 5 | Pakenham | South East | -38.0667 | 145.4833 |
| 6 | Bundoora | North | -37.6983 | 145.0600 |
| 7 | Thomastown | North | -37.6833 | 145.0167 |
| 8 | Broadmeadows | North | -37.6833 | 144.9167 |
| 9 | Tarneit | West | -37.8333 | 144.6833 |
| 10 | Melton | West | -37.6833 | 144.5833 |
| 11 | Caroline Springs | West | -37.7333 | 144.7333 |
| 12 | Box Hill | Inner East | -37.8167 | 145.1167 |
| 13 | Glen Waverley | East | -37.8783 | 145.1650 |
| 14 | Frankston | Bayside | -38.1500 | 145.1167 |
| 15 | Moorabbin | Bayside | -37.9333 | 145.0500 |

Each entry includes:
- 3-paragraph localized intro (~250 words) mentioning local landmarks, cultural context, and IDO Events services
- 5 nearby suburbs
- 4 local venues
- 1 testimonial (name, event type, suburb-specific quote)

No new routes or components needed — `generateStaticParams` and `sitemap.ts` already read from the `SUBURBS` array.

## Files Modified

| File | Change |
|------|--------|
| `src/lib/schema.ts` | **NEW** — schema builder functions |
| `src/app/blog/[slug]/page.tsx` | Add BlogPosting + BreadcrumbList JSON-LD |
| `src/app/hire/[slug]/page.tsx` | Add Product + BreadcrumbList JSON-LD |
| `src/app/event-styling/[suburb]/page.tsx` | Fix URL bug, refactor to use schema utility, add BreadcrumbList |
| `src/app/weddings/page.tsx` | Add FAQPage + BreadcrumbList JSON-LD |
| `src/app/birthdays/page.tsx` | Add FAQPage + BreadcrumbList JSON-LD |
| `src/app/christenings-baptisms/page.tsx` | Add FAQPage + BreadcrumbList JSON-LD |
| `src/app/baby-showers/page.tsx` | Add FAQPage + BreadcrumbList JSON-LD |
| `src/app/engagements/page.tsx` | Add FAQPage + BreadcrumbList JSON-LD |
| `src/app/corporate/page.tsx` | Add FAQPage + BreadcrumbList JSON-LD |
| `src/data/suburbs.ts` | Add 15 new suburb entries |

## Out of Scope

- Visual breadcrumb UI component (schema-only for now)
- Occasion + suburb combo pages (future phase)
- Review/rating schema (no review data source)
- Author profiles for blog posts (business is the author)
- OpenGraph images for static pages (separate task)
