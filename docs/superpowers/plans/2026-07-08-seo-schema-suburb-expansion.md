# SEO Schema & Suburb Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add structured data (Article, FAQ, Product, Breadcrumb schemas) to all page types, fix the suburb JSON-LD URL bug, and expand suburb coverage from 10 to 25 suburbs.

**Architecture:** Create a shared `src/lib/schema.ts` utility with pure functions that return JSON-LD objects. Each page type injects the relevant schemas via `<script type="application/ld+json">` tags in server components. New suburb data is appended to the existing `SUBURBS` array in `src/data/suburbs.ts`.

**Tech Stack:** Next.js 16 (App Router), TypeScript, Schema.org JSON-LD

---

## File Structure

| File | Responsibility | Action |
|------|---------------|--------|
| `src/lib/schema.ts` | Schema builder functions (Article, FAQ, Breadcrumb, Product, LocalBusiness) | Create |
| `src/app/event-styling/[suburb]/page.tsx` | Suburb SEO page | Modify (fix URLs, use schema utility, add breadcrumbs) |
| `src/app/blog/[slug]/page.tsx` | Blog post page | Modify (add BlogPosting + Breadcrumb) |
| `src/app/hire/[slug]/page.tsx` | Hire item detail page | Modify (add Product + Breadcrumb) |
| `src/app/weddings/page.tsx` | Weddings occasion page | Modify (add FAQ + Breadcrumb) |
| `src/app/birthdays/page.tsx` | Birthdays occasion page | Modify (add FAQ + Breadcrumb) |
| `src/app/christenings-baptisms/page.tsx` | Christenings occasion page | Modify (add FAQ + Breadcrumb) |
| `src/app/baby-showers/page.tsx` | Baby showers occasion page | Modify (add FAQ + Breadcrumb) |
| `src/app/engagements/page.tsx` | Engagements occasion page | Modify (add FAQ + Breadcrumb) |
| `src/app/corporate/page.tsx` | Corporate occasion page | Modify (add FAQ + Breadcrumb) |
| `src/data/suburbs.ts` | Suburb data array | Modify (add 15 new suburbs) |

---

### Task 1: Create Schema Utility

**Files:**
- Create: `src/lib/schema.ts`

- [ ] **Step 1: Create `src/lib/schema.ts` with all schema builder functions**

```typescript
import type { SuburbData } from "@/data/suburbs";

const BASE_URL = "https://idoeventss.com";

const PUBLISHER = {
  "@type": "Organization",
  name: "IDO Events",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logos/ido-events-logo.svg`,
  },
};

interface BreadcrumbItem {
  name: string;
  url?: string;
}

export function buildBreadcrumbSchema(crumbs: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => {
      const item: Record<string, unknown> = {
        "@type": "ListItem",
        position: i + 1,
        name: crumb.name,
      };
      if (crumb.url) {
        item.item = crumb.url;
      }
      return item;
    }),
  };
}

export function buildArticleSchema(post: {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    image: post.image.startsWith("http")
      ? post.image
      : `${BASE_URL}${post.image}`,
    author: { "@type": "Organization", name: "IDO Events" },
    publisher: PUBLISHER,
    description: post.excerpt,
    mainEntityOfPage: `${BASE_URL}/blog/${post.slug}`,
  };
}

export function buildFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function buildProductSchema(item: {
  name: string;
  slug: string;
  description: string;
  image: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: item.name,
    description: item.description,
    image: item.image.startsWith("http")
      ? item.image
      : `${BASE_URL}${item.image}`,
    category: item.category,
    brand: { "@type": "Organization", name: "IDO Events" },
    offers: {
      "@type": "Offer",
      priceCurrency: "AUD",
      availability: "https://schema.org/InStock",
      url: `${BASE_URL}/hire/${item.slug}`,
    },
  };
}

export function buildLocalBusinessSchema(
  suburb: SuburbData,
  heroImage: string
) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EventPlanner"],
    name: "IDO Events",
    description: `Professional event styling and prop hire in ${suburb.name}, Melbourne.`,
    url: `${BASE_URL}/event-styling/${suburb.slug}`,
    telephone: "+61400000000",
    areaServed: {
      "@type": "City",
      name: suburb.name,
      containedInPlace: {
        "@type": "State",
        name: "Victoria",
      },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: suburb.lat,
      longitude: suburb.lng,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: suburb.name,
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: suburb.lat,
        longitude: suburb.lng,
      },
      geoRadius: "15000",
    },
    priceRange: "$$",
    image: `${BASE_URL}${heroImage}`,
    sameAs: [
      "https://www.instagram.com/ido.eventss/",
      "https://www.facebook.com/idoevents.au",
    ],
  };
}
```

- [ ] **Step 2: Verify the file compiles**

Run: `cd ido-events && npx tsc --noEmit src/lib/schema.ts`

If tsc standalone check fails (due to path aliases), verify with a full build later in Task 3.

- [ ] **Step 3: Commit**

```bash
git add src/lib/schema.ts
git commit -m "feat: add schema.ts utility with JSON-LD builder functions"
```

---

### Task 2: Fix Suburb JSON-LD URL Bug + Add Breadcrumbs

**Files:**
- Modify: `src/app/event-styling/[suburb]/page.tsx`

- [ ] **Step 1: Replace the inline `jsonLd` object with schema utility imports and add breadcrumb**

Replace the imports section (lines 1-6) with:

```typescript
import { SUBURBS } from "@/data/suburbs";
import { OCCASIONS } from "@/data/occasions";
import gallery from "@/data/gallery.json";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildLocalBusinessSchema, buildBreadcrumbSchema } from "@/lib/schema";
```

Then replace the entire `jsonLd` block (lines 61-102) inside the `SuburbPage` function with:

```typescript
  const jsonLd = buildLocalBusinessSchema(data, heroPhoto.file);
  const breadcrumbLd = buildBreadcrumbSchema([
    { name: "Home", url: "https://idoeventss.com" },
    { name: "Event Styling", url: "https://idoeventss.com/event-styling" },
    { name: data.name },
  ]);
```

Then replace the JSON-LD script tag (lines 106-110) with:

```tsx
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
```

- [ ] **Step 2: Verify build**

Run: `cd ido-events && npm run build`
Expected: Build succeeds with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/event-styling/[suburb]/page.tsx
git commit -m "fix: correct suburb JSON-LD URLs and add breadcrumb schema"
```

---

### Task 3: Add BlogPosting + Breadcrumb Schema to Blog Posts

**Files:**
- Modify: `src/app/blog/[slug]/page.tsx`

- [ ] **Step 1: Add schema imports**

Add to the imports at the top of the file (after line 5):

```typescript
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/schema";
```

- [ ] **Step 2: Add JSON-LD scripts inside the component**

In the `BlogPostPage` component, after `const relatedPosts = getRelatedPosts(slug, 2);` (line 53) and before `return (` (line 55), add:

```typescript
  const articleLd = buildArticleSchema({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    date: post.date,
    image: post.image,
  });
  const breadcrumbLd = buildBreadcrumbSchema([
    { name: "Home", url: "https://idoeventss.com" },
    { name: "Blog", url: "https://idoeventss.com/blog" },
    { name: post.title },
  ]);
```

Then inside the `return` block, add these two script tags right after the opening `<>` (line 56) and before `{/* Hero image */}`:

```tsx
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
```

- [ ] **Step 3: Verify build**

Run: `cd ido-events && npm run build`
Expected: Build succeeds. Blog pages now include BlogPosting and BreadcrumbList JSON-LD.

- [ ] **Step 4: Commit**

```bash
git add src/app/blog/[slug]/page.tsx
git commit -m "feat: add BlogPosting and breadcrumb schema to blog posts"
```

---

### Task 4: Add Product + Breadcrumb Schema to Hire Items

**Files:**
- Modify: `src/app/hire/[slug]/page.tsx`

- [ ] **Step 1: Add schema imports**

Add to the imports (after line 4):

```typescript
import { buildProductSchema, buildBreadcrumbSchema } from "@/lib/schema";
```

- [ ] **Step 2: Add JSON-LD to the component**

Replace the entire `HireItemPage` default export function (lines 30-43) with:

```typescript
export default async function HireItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getHireItem(slug);
  if (!item) notFound();

  const related = getRelatedItems(item, 4);
  const categoryLabel = CATEGORY_LABELS[item.category] || item.category;

  const productLd = buildProductSchema({
    name: item.name,
    slug: item.slug,
    description: item.description,
    image: item.image,
    category: categoryLabel,
  });
  const breadcrumbLd = buildBreadcrumbSchema([
    { name: "Home", url: "https://idoeventss.com" },
    { name: "Prop Hire", url: "https://idoeventss.com/hire" },
    { name: item.name },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <HireItemDetail item={item} related={related} categoryLabel={categoryLabel} />
    </>
  );
}
```

- [ ] **Step 3: Verify build**

Run: `cd ido-events && npm run build`
Expected: Build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/app/hire/[slug]/page.tsx
git commit -m "feat: add Product and breadcrumb schema to hire items"
```

---

### Task 5: Add FAQ + Breadcrumb Schema to All 6 Occasion Pages

**Files:**
- Modify: `src/app/weddings/page.tsx`
- Modify: `src/app/birthdays/page.tsx`
- Modify: `src/app/christenings-baptisms/page.tsx`
- Modify: `src/app/baby-showers/page.tsx`
- Modify: `src/app/engagements/page.tsx`
- Modify: `src/app/corporate/page.tsx`

All 6 files follow the exact same pattern. Each file currently looks like:

```typescript
import type { Metadata } from "next";
import { OCCASIONS } from "@/data/occasions";
import { OccasionPage } from "@/components/OccasionPage";
import gallery from "@/data/gallery.json";

const data = OCCASIONS.find((o) => o.slug === "<slug>")!;

export const metadata: Metadata = { /* ... */ };

export default function XxxPage() {
  return <OccasionPage data={data} gallery={gallery} />;
}
```

- [ ] **Step 1: Update `src/app/weddings/page.tsx`**

Replace the entire file content with:

```typescript
import type { Metadata } from "next";
import { OCCASIONS } from "@/data/occasions";
import { OccasionPage } from "@/components/OccasionPage";
import gallery from "@/data/gallery.json";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/lib/schema";

const data = OCCASIONS.find((o) => o.slug === "weddings")!;

export const metadata: Metadata = {
  title: "Wedding Styling & Prop Hire Melbourne",
  description:
    "Wedding styling and prop hire in Melbourne. Arches, florals, draping, centrepieces — full setup and pack-down included. Free quotes from IDO Events.",
  openGraph: {
    title: "Wedding Styling & Prop Hire | IDO Events Melbourne",
    description:
      "Create your dream wedding with professional event styling. Ceremony backdrops, reception table styling, floral installations and more across Melbourne.",
  },
};

const faqLd = buildFaqSchema(data.faqs);
const breadcrumbLd = buildBreadcrumbSchema([
  { name: "Home", url: "https://idoeventss.com" },
  { name: "Weddings" },
]);

export default function WeddingsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <OccasionPage data={data} gallery={gallery} />
    </>
  );
}
```

- [ ] **Step 2: Update `src/app/birthdays/page.tsx`**

Replace the entire file content with:

```typescript
import type { Metadata } from "next";
import { OCCASIONS } from "@/data/occasions";
import { OccasionPage } from "@/components/OccasionPage";
import gallery from "@/data/gallery.json";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/lib/schema";

const data = OCCASIONS.find((o) => o.slug === "birthdays")!;

export const metadata: Metadata = {
  title: "Birthday Party Styling & Prop Hire Melbourne",
  description:
    "Birthday party styling Melbourne. Balloon garlands, themed backdrops, dessert tables and more. From first birthdays to milestone celebrations. Free quotes.",
  openGraph: {
    title: "Birthday Party Styling | IDO Events Melbourne",
    description:
      "Make every birthday unforgettable with professional event styling. Balloon installations, themed setups, dessert tables and full venue styling across Melbourne.",
  },
};

const faqLd = buildFaqSchema(data.faqs);
const breadcrumbLd = buildBreadcrumbSchema([
  { name: "Home", url: "https://idoeventss.com" },
  { name: "Birthdays" },
]);

export default function BirthdaysPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <OccasionPage data={data} gallery={gallery} />
    </>
  );
}
```

- [ ] **Step 3: Update `src/app/christenings-baptisms/page.tsx`**

Replace the entire file content with:

```typescript
import type { Metadata } from "next";
import { OCCASIONS } from "@/data/occasions";
import { OccasionPage } from "@/components/OccasionPage";
import gallery from "@/data/gallery.json";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/lib/schema";

const data = OCCASIONS.find((o) => o.slug === "christenings-baptisms")!;

export const metadata: Metadata = {
  title: "Christening & Baptism Styling Melbourne",
  description:
    "Christening and baptism styling Melbourne. Elegant backdrops, florals, signage and dessert tables. Full setup included. Free quotes from IDO Events.",
  openGraph: {
    title: "Christening & Baptism Styling | IDO Events Melbourne",
    description:
      "Beautiful christening and baptism event styling across Melbourne. Backdrops, florals, plinths, signage and full dessert table setups with delivery and pack-down.",
  },
};

const faqLd = buildFaqSchema(data.faqs);
const breadcrumbLd = buildBreadcrumbSchema([
  { name: "Home", url: "https://idoeventss.com" },
  { name: "Christenings & Baptisms" },
]);

export default function ChristeningsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <OccasionPage data={data} gallery={gallery} />
    </>
  );
}
```

- [ ] **Step 4: Update `src/app/baby-showers/page.tsx`**

Replace the entire file content with:

```typescript
import type { Metadata } from "next";
import { OCCASIONS } from "@/data/occasions";
import { OccasionPage } from "@/components/OccasionPage";
import gallery from "@/data/gallery.json";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/lib/schema";

const data = OCCASIONS.find((o) => o.slug === "baby-showers")!;

export const metadata: Metadata = {
  title: "Baby Shower Styling & Decorations Melbourne",
  description:
    "Baby shower styling and decorations Melbourne. Balloon installations, backdrops, dessert tables — beautifully styled and delivered. Free quotes from IDO Events.",
  openGraph: {
    title: "Baby Shower Styling | IDO Events Melbourne",
    description:
      "Create a stunning baby shower with professional styling. Balloon garlands, backdrops, dessert tables and themed setups delivered across Melbourne.",
  },
};

const faqLd = buildFaqSchema(data.faqs);
const breadcrumbLd = buildBreadcrumbSchema([
  { name: "Home", url: "https://idoeventss.com" },
  { name: "Baby Showers" },
]);

export default function BabyShowersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <OccasionPage data={data} gallery={gallery} />
    </>
  );
}
```

- [ ] **Step 5: Update `src/app/engagements/page.tsx`**

Replace the entire file content with:

```typescript
import type { Metadata } from "next";
import { OCCASIONS } from "@/data/occasions";
import { OccasionPage } from "@/components/OccasionPage";
import gallery from "@/data/gallery.json";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/lib/schema";

const data = OCCASIONS.find((o) => o.slug === "engagements")!;

export const metadata: Metadata = {
  title: "Engagement Party Styling & Prop Hire Melbourne",
  description:
    "Engagement party styling Melbourne. Modern arches, neon signs, floral centrepieces and full venue styling. Setup and pack-down included. Free quotes.",
  openGraph: {
    title: "Engagement Party Styling | IDO Events Melbourne",
    description:
      "Celebrate your engagement in style with professional event styling. Arches, neon signs, florals and full venue setups across Melbourne.",
  },
};

const faqLd = buildFaqSchema(data.faqs);
const breadcrumbLd = buildBreadcrumbSchema([
  { name: "Home", url: "https://idoeventss.com" },
  { name: "Engagements" },
]);

export default function EngagementsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <OccasionPage data={data} gallery={gallery} />
    </>
  );
}
```

- [ ] **Step 6: Update `src/app/corporate/page.tsx`**

Replace the entire file content with:

```typescript
import type { Metadata } from "next";
import { OCCASIONS } from "@/data/occasions";
import { OccasionPage } from "@/components/OccasionPage";
import gallery from "@/data/gallery.json";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/lib/schema";

const data = OCCASIONS.find((o) => o.slug === "corporate")!;

export const metadata: Metadata = {
  title: "Corporate Event Styling Melbourne",
  description:
    "Corporate event styling Melbourne. Product launches, gala dinners, conferences — professional prop hire with full setup and pack-down. Free quotes from IDO Events.",
  openGraph: {
    title: "Corporate Event Styling | IDO Events Melbourne",
    description:
      "Professional corporate event styling for product launches, gala dinners, conferences and team celebrations across Melbourne.",
  },
};

const faqLd = buildFaqSchema(data.faqs);
const breadcrumbLd = buildBreadcrumbSchema([
  { name: "Home", url: "https://idoeventss.com" },
  { name: "Corporate Events" },
]);

export default function CorporatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <OccasionPage data={data} gallery={gallery} />
    </>
  );
}
```

- [ ] **Step 7: Verify build**

Run: `cd ido-events && npm run build`
Expected: Build succeeds. All 6 occasion pages now include FAQPage and BreadcrumbList JSON-LD.

- [ ] **Step 8: Commit**

```bash
git add src/app/weddings/page.tsx src/app/birthdays/page.tsx src/app/christenings-baptisms/page.tsx src/app/baby-showers/page.tsx src/app/engagements/page.tsx src/app/corporate/page.tsx
git commit -m "feat: add FAQ and breadcrumb schema to all 6 occasion pages"
```

---

### Task 6: Add 15 New Suburbs to Data File

**Files:**
- Modify: `src/data/suburbs.ts`

- [ ] **Step 1: Append 15 new suburb entries to the SUBURBS array**

Add the following entries after the last existing suburb (Cranbourne) in the `SUBURBS` array, before the closing `];`:

```typescript
  {
    slug: "south-yarra",
    name: "South Yarra",
    region: "Inner South",
    lat: -37.8388,
    lng: 144.9926,
    intro: `South Yarra is one of Melbourne's most prestigious inner-city suburbs, known for its tree-lined boulevards, boutique shopping along Chapel Street and Toorak Road, and a social scene that attracts style-conscious Melbournians from every corner of the city. When it comes to celebrating life's milestones, South Yarra sets the bar high — and IDO Events is here to match that standard with premium event styling and prop hire that brings sophistication, warmth, and personality to every occasion.

The events we style in South Yarra reflect the suburb's refined aesthetic. Our clients here gravitate towards elegant, understated designs — think lush floral installations in muted tones, quality fabric draping, statement centrepieces, and carefully curated signage that feels luxurious without being overdone. We have styled beautiful engagement parties in rooftop apartments overlooking the Yarra, intimate birthday celebrations in heritage homes near Fawkner Park, and christening receptions at some of the area's finest restaurants and private dining rooms. Every detail is tailored to complement the space and create an atmosphere that feels effortlessly chic.

Our team is well-versed in the logistics of working in South Yarra's inner-city environment. We coordinate with building management for apartment access, plan setups that work within compact but beautifully appointed spaces, and ensure that every prop and installation is delivered and removed with minimal disruption. South Yarra's central location, connected by Toorak Road, Chapel Street, and the South Yarra train station, makes it one of the easiest suburbs for our delivery team to service. If you are planning an event in South Yarra and want styling that matches the elegance of this iconic suburb, request a free quote today.`,
    nearbySuburbs: ["Toorak", "Prahran", "Richmond", "Cremorne", "Windsor"],
    localVenues: ["Como House & Garden", "The Royce Hotel", "Carousel Albert Park", "Victoria Barracks Officers Mess"],
    testimonial: {
      text: "IDO Events styled our engagement dinner in South Yarra with the most beautiful floral arrangements and candlelight. It was intimate, elegant, and exactly what we envisioned. Our guests were blown away.",
      name: "Olivia & James W.",
      event: "Engagement Dinner in South Yarra",
    },
  },
  {
    slug: "south-melbourne",
    name: "South Melbourne",
    region: "Inner South",
    lat: -37.8316,
    lng: 144.9568,
    intro: `South Melbourne is a suburb that effortlessly blends industrial heritage with contemporary sophistication, making it one of Melbourne's most exciting locations for events and celebrations. From the iconic South Melbourne Market to the converted warehouses and modern apartments that line its streets, this inner-city neighbourhood offers a unique backdrop for every type of occasion. IDO Events brings professional event styling and prop hire to families and businesses across South Melbourne, Albert Park, Port Melbourne, and the surrounding bayside area.

What makes South Melbourne particularly appealing for event styling is the diversity of spaces available. We have styled events in stunning warehouse conversions with exposed brick and soaring ceilings, in sleek penthouse apartments with sweeping city views, and in intimate restaurant private dining rooms along Clarendon Street. The suburb's industrial-chic character lends itself beautifully to modern styling — think geometric structures, metallic accents, lush greenery, and clean-lined backdrops that make a statement without overwhelming the space. Our team is skilled at reading a room and creating styling that enhances rather than competes with the existing architecture.

South Melbourne's central location makes it incredibly convenient for both our team and your guests. With easy access from the CBD, St Kilda Road, and the Westgate Freeway, and ample parking around the market precinct, logistics are straightforward. We handle everything — delivery, setup, and pack-down — so whether you are hosting a baby shower for twenty or a corporate event for two hundred, you can focus entirely on your guests. Get in touch for a free quote and let us bring your South Melbourne celebration to life.`,
    nearbySuburbs: ["Albert Park", "Port Melbourne", "Southbank", "Middle Park", "St Kilda"],
    localVenues: ["South Melbourne Town Hall", "The Woolshed Pub", "Albert Park Yacht Club", "Carousel Albert Park"],
    testimonial: {
      text: "We hosted our daughter's first birthday in a warehouse venue in South Melbourne and IDO Events absolutely nailed the styling. The balloon installation and dessert table were stunning. So professional and easy to work with.",
      name: "Kate & Ben H.",
      event: "1st Birthday in South Melbourne",
    },
  },
  {
    slug: "narre-warren",
    name: "Narre Warren",
    region: "South East",
    lat: -37.9833,
    lng: 145.3000,
    intro: `Narre Warren is the vibrant heart of Melbourne's outer south-east, a suburb that has grown from a quiet country town into a thriving multicultural community where families celebrate every milestone with genuine enthusiasm and flair. Home to the bustling Westfield Fountain Gate shopping centre, surrounded by beautiful parklands, and connected by the Princes Freeway and Cranbourne-Pakenham rail line, Narre Warren offers an ideal setting for events of every size and style. IDO Events provides premium event styling and prop hire throughout Narre Warren, Narre Warren South, Berwick, and the wider City of Casey.

The celebrations we style in Narre Warren are as diverse as the community itself. We regularly create stunning setups for Samoan and Tongan christenings with bold floral arrangements and traditional elements, elegant Indian engagement parties with rich colour palettes and ornate detailing, classic Australian birthday parties with modern balloon installations, and everything in between. Our team approaches every brief with cultural sensitivity and creative enthusiasm, ensuring that your event reflects your family's traditions while incorporating contemporary styling trends that make the celebration truly memorable.

Narre Warren's newer housing estates feature spacious homes with generous entertaining areas that are perfect for styled home events, and the suburb also boasts several excellent function centres and community halls that we have styled many times. Our all-inclusive service covers delivery, professional setup, and complete pack-down, so you never have to worry about the logistics. We arrive well before your guests and return after the celebration to clear everything away. If you are planning a wedding, birthday, baby shower, christening, or any celebration in the Narre Warren area, reach out for a free quote and discover why Casey families trust IDO Events.`,
    nearbySuburbs: ["Berwick", "Cranbourne", "Hallam", "Endeavour Hills", "Hampton Park"],
    localVenues: ["Fountain Gate Hotel", "Casey Civic Centre", "Bunjil Place", "Narre Warren Mechanics Hall"],
    testimonial: {
      text: "IDO Events styled our son's christening in Narre Warren and it was absolutely beautiful. The white and gold theme was executed perfectly, and the team was so respectful of our cultural traditions. Highly recommend.",
      name: "Sione & Ana M.",
      event: "Christening in Narre Warren",
    },
  },
  {
    slug: "berwick",
    name: "Berwick",
    region: "South East",
    lat: -38.0333,
    lng: 145.3500,
    intro: `Berwick is one of Melbourne's most charming south-eastern suburbs, a place where heritage village character meets modern family living. With its beautiful tree-lined High Street, historic Akoonah Park, and a community that takes pride in celebrating life's important moments, Berwick is a suburb where event styling is genuinely appreciated. IDO Events brings professional prop hire and event styling to families throughout Berwick, Beaconsfield, Officer, and the surrounding Casey-Cardinia corridor.

The events we style in Berwick often reflect the suburb's blend of traditional values and contemporary taste. Many of our clients here are planning milestone celebrations — weddings at heritage venues that require styling to complement period architecture, significant birthday celebrations in beautifully appointed homes, and christenings that balance classic elegance with modern design elements. Berwick families tend to have a clear vision for their events, and we love working collaboratively to bring those visions to life with precision, quality props, and thoughtful attention to every detail.

What makes servicing Berwick particularly rewarding is the strong sense of community in the area. Many of our clients come through word-of-mouth referrals from family and friends we have previously styled for, and we take that trust seriously. We arrive early, set up meticulously, and pack down quietly after your event so that your entire experience is seamless. Berwick's location along the Princes Freeway and close to Beaconsfield station makes it easily accessible for our delivery team. Whether you are planning an intimate gathering at home or a large reception at a local venue, IDO Events delivers beautiful, stress-free event styling every time.`,
    nearbySuburbs: ["Narre Warren", "Officer", "Beaconsfield", "Clyde North", "Pakenham"],
    localVenues: ["Berwick Church of Christ Hall", "Akoonah Park", "Cardinia Cultural Centre", "Berwick Inn"],
    testimonial: {
      text: "IDO Events styled our 40th birthday party in Berwick and it was magazine-worthy. The floral centrepieces and backdrop were gorgeous, and the setup was done so quickly and professionally. Cannot fault them.",
      name: "Rachel T.",
      event: "40th Birthday in Berwick",
    },
  },
  {
    slug: "pakenham",
    name: "Pakenham",
    region: "South East",
    lat: -38.0667,
    lng: 145.4833,
    intro: `Pakenham is one of Melbourne's fastest-growing outer south-east suburbs, a community that is rapidly expanding with new families, new estates, and a vibrant local culture that loves to celebrate. Positioned at the gateway to West Gippsland with the stunning backdrop of the Dandenong Ranges nearby, Pakenham offers a unique blend of semi-rural charm and modern suburban convenience. IDO Events is proud to bring professional event styling and prop hire to families throughout Pakenham, Officer, Beaconsfield Upper, and the wider Cardinia region.

The celebrations we create in Pakenham are full of personality and heart. Our clients here are often styling their first major events in new homes, and we love helping them transform their fresh, spacious living areas into stunning celebration spaces. From farmhouse-chic wedding receptions with rustic timber elements and fairy lights to colourful, fun-filled birthday parties with oversized balloon installations and themed backdrops, we bring creative energy and professional execution to every event. Pakenham's growing multicultural community also brings us wonderful diversity in styling requests, from traditional Maori celebrations to elegant European-inspired events.

Pakenham's position at the end of the Cranbourne-Pakenham rail line and along the Princes Freeway makes it accessible for our delivery team, and we plan our schedules to ensure we always arrive with plenty of time for a thorough setup. Many of the newer homes in estates like Cardinia Lakes, Heritage Springs, and Lakeside offer generous entertaining areas that are perfect for at-home celebrations, while local function centres and community halls provide excellent options for larger gatherings. Every IDO Events package includes full delivery, setup, and pack-down — your only job is to enjoy the celebration.`,
    nearbySuburbs: ["Officer", "Beaconsfield", "Nar Nar Goon", "Berwick", "Cardinia"],
    localVenues: ["Pakenham Hall", "Cardinia Cultural Centre", "Pakenham Racing Club", "Lakeside Community Centre"],
    testimonial: {
      text: "We had IDO Events style our gender reveal party at our new home in Pakenham and it was incredible. The balloon garland and backdrop were breathtaking, and the whole team was lovely to work with. Best decision we made.",
      name: "Jess & Ryan K.",
      event: "Gender Reveal in Pakenham",
    },
  },
  {
    slug: "bundoora",
    name: "Bundoora",
    region: "North",
    lat: -37.6983,
    lng: 145.0600,
    intro: `Bundoora is a well-established northern suburb that combines the leafy serenity of parkland reserves with the energy of two major university campuses, creating a community that values both tradition and innovation. Home to La Trobe University and RMIT Bundoora, surrounded by beautiful open spaces including Bundoora Park and the iconic homestead, this suburb offers a wonderful setting for celebrations of every kind. IDO Events provides premium event styling and prop hire to families across Bundoora, Kingsbury, Watsonia, and the broader Banyule-Whittlesea corridor.

What we enjoy about styling events in Bundoora is the wonderful mix of established and new communities that call this suburb home. Long-time Bundoora families planning golden wedding anniversaries and significant milestone birthdays sit alongside young families from the university community celebrating first birthdays and baby showers, and each brings a unique perspective that keeps our work fresh and exciting. We have styled events in everything from the grand heritage rooms near Bundoora Park to modern apartments and family homes across the suburb, adapting our designs to suit both the space and the client's vision perfectly.

Bundoora's excellent connectivity via Plenty Road, the Metropolitan Ring Road, and nearby Greensborough Highway means our delivery team can service the area efficiently and reliably. We work with local function centres, RSL clubs, and community halls, as well as private residences throughout the suburb. Our full-service approach includes delivery, professional setup, and complete pack-down, ensuring your event day is completely stress-free. If you are planning a celebration in Bundoora and want styling that exceeds your expectations, get in touch for a free quote.`,
    nearbySuburbs: ["Watsonia", "Kingsbury", "Mill Park", "Greensborough", "Macleod"],
    localVenues: ["Bundoora Homestead Art Centre", "La Trobe University Union Hall", "Bundoora Park", "Watsonia RSL"],
    testimonial: {
      text: "IDO Events styled the most beautiful baby shower for us in Bundoora. Soft pinks and whites with the most stunning balloon arch. Everything was set up perfectly when we arrived and cleaned up after. So impressed.",
      name: "Jenny L.",
      event: "Baby Shower in Bundoora",
    },
  },
  {
    slug: "thomastown",
    name: "Thomastown",
    region: "North",
    lat: -37.6833,
    lng: 145.0167,
    intro: `Thomastown is a hardworking, close-knit northern suburb where family and community are at the centre of everything. Known for its strong Italian, Greek, Arabic, and South-East Asian communities, Thomastown is a place where celebrations are generous, warm, and deeply meaningful. IDO Events has been styling events throughout Thomastown, Lalor, Epping, and the wider City of Whittlesea for years, building strong relationships with local families who return to us again and again for their most important occasions.

Event styling in Thomastown is wonderfully diverse. In any given month, our team might create an opulent Italian engagement party with cascading florals and crystal candelabras, a vibrant Assyrian christening with rich gold and white detailing, a fun-filled children's birthday party with character-themed balloon installations, or a modern minimalist baby shower in soft neutral tones. This cultural richness is something we embrace wholeheartedly, and our extensive prop catalogue ensures we can deliver any aesthetic — from grand and traditional to sleek and contemporary.

Thomastown's central northern location, well-connected via the South Moray rail line and Dalton Road, makes it straightforward for our delivery team to service. We frequently work with local function centres and community halls that are well-suited to large gatherings, as well as private homes across the suburb. Many of our Thomastown clients appreciate that we handle absolutely everything — from the initial design consultation through to the final pack-down — so they can focus on being present with their family and guests on the day. Reach out for a free quote and let us style your next celebration.`,
    nearbySuburbs: ["Lalor", "Epping", "Mill Park", "Bundoora", "Reservoir"],
    localVenues: ["Thomastown Recreation Centre", "Thomastown RSL", "Pacific Epping", "Lalor Community Hall"],
    testimonial: {
      text: "IDO Events are amazing! They styled our engagement party in Thomastown and every single detail was perfect. The floral columns, the neon sign, the draping — our guests couldn't stop taking photos. Thank you!",
      name: "Maria & Con S.",
      event: "Engagement Party in Thomastown",
    },
  },
  {
    slug: "broadmeadows",
    name: "Broadmeadows",
    region: "North",
    lat: -37.6833,
    lng: 144.9167,
    intro: `Broadmeadows is a suburb undergoing exciting transformation, evolving into a vibrant northern hub with new infrastructure, improved amenities, and a strong multicultural community that celebrates with passion and generosity. As the administrative centre of the City of Hume, Broadmeadows serves as a gateway to Melbourne's northern corridor, and IDO Events is proud to provide event styling and prop hire to families across Broadmeadows, Dallas, Jacana, Meadow Heights, and Campbellfield.

The celebrations we style in Broadmeadows are some of the most spirited and heartfelt events we work on. This suburb's remarkable cultural diversity — with strong Turkish, Lebanese, Iraqi, Somali, and Pacific Islander communities — means we are constantly inspired by new traditions, colour palettes, and styling approaches. We have created breathtaking henna night setups with rich jewel tones and ornate gold detailing, elaborate Pacific Islander christenings with tropical florals and traditional elements, and modern Australian birthday parties with sleek balloon installations and custom signage. Whatever the occasion and whatever the cultural context, IDO Events brings professionalism, creativity, and genuine respect to every event.

Broadmeadows is well-connected via the Tullamarine Freeway, the Craigieburn rail line, and Western Ring Road, making it easy for our delivery team to service efficiently. The suburb has several excellent function centres and community halls that are popular for large celebrations, and we have built strong working relationships with many of these venues. Our complete service includes delivery, setup, and pack-down, so you never have to worry about a thing. If you are planning a celebration in the Broadmeadows area, request a free quote and let us show you what IDO Events can create.`,
    nearbySuburbs: ["Dallas", "Meadow Heights", "Campbellfield", "Jacana", "Craigieburn"],
    localVenues: ["Hume Global Learning Centre", "Broadmeadows Town Hall", "Broadmeadows Leisure Centre", "Dallas Community Hall"],
    testimonial: {
      text: "Our wedding reception in Broadmeadows was styled so beautifully by IDO Events. The backdrop, the table settings, the floral arrangements — everything was exactly as we discussed. Professional, reliable, and incredibly talented.",
      name: "Fatima & Ali H.",
      event: "Wedding in Broadmeadows",
    },
  },
  {
    slug: "tarneit",
    name: "Tarneit",
    region: "West",
    lat: -37.8333,
    lng: 144.6833,
    intro: `Tarneit is one of Melbourne's fastest-growing western suburbs and a shining example of how new communities come together to create something special. With its modern housing estates, young families, and an increasingly diverse population drawn from across the globe, Tarneit is a suburb where celebrations happen frequently and are always full of life and colour. IDO Events is the trusted event styling and prop hire partner for families across Tarneit, Truganina, Hoppers Crossing, and the greater Wyndham area.

The variety of events we style in Tarneit is truly remarkable. Our client base here includes families from Indian, Sri Lankan, Filipino, African, and Middle Eastern backgrounds, alongside established Australian families — and each brings a unique and beautiful approach to celebrating. We have created stunning sangeet and mehndi night setups with vibrant marigold installations and rich silk draping, elegant christening receptions with classic white and gold themes, and fun-filled children's birthday parties with elaborate themed backdrops and balloon displays. No matter the cultural context or design brief, IDO Events brings the same level of creativity and professionalism.

Tarneit's newer estates feature modern homes with generous living and entertaining areas that are perfect for styled at-home events, and we have become experts at maximising these spaces. The suburb also has a growing number of function centres and restaurants that cater for larger celebrations. Connected by the Princes Freeway and Tarneit station on the regional rail network, the area is easily accessible for our delivery team. Every IDO Events package includes full delivery, setup, and pack-down — we handle everything so you can simply enjoy your special day.`,
    nearbySuburbs: ["Truganina", "Hoppers Crossing", "Werribee", "Point Cook", "Williams Landing"],
    localVenues: ["Tarneit Community Learning Centre", "Wyndham Civic Centre", "Elements at Emerald", "Eagle Stadium"],
    testimonial: {
      text: "IDO Events styled our daughter's first birthday in Tarneit and it was absolutely perfect. The butterfly theme came to life with the most beautiful balloon arch and flower wall. Setup and packdown was seamless. Love their work!",
      name: "Nisha & Ravi P.",
      event: "1st Birthday in Tarneit",
    },
  },
  {
    slug: "melton",
    name: "Melton",
    region: "West",
    lat: -37.6833,
    lng: 144.5833,
    intro: `Melton is a thriving outer western suburb that has grown into a major regional centre, offering families an affordable, community-focused lifestyle without sacrificing access to Melbourne's amenities. With its mix of established neighbourhoods and rapidly expanding new estates in Melton South, Brookfield, and Kurunjang, Melton is a suburb where families are building their lives and celebrating their milestones with genuine enthusiasm. IDO Events provides professional event styling and prop hire across Melton, Bacchus Marsh, Caroline Springs, and the wider City of Melton.

Event styling in Melton reflects the area's warm, family-oriented community. Our clients here plan celebrations with love and care, whether it is a first birthday party with an elaborate themed setup, a milestone anniversary dinner with elegant floral arrangements, or a christening reception that brings extended family together for a day of joy and tradition. We have styled events in Melton's newer homes with spacious living areas perfect for at-home celebrations, as well as at local function centres and community halls that accommodate larger gatherings. Whatever the setting, IDO Events brings a level of quality and professionalism that our Melton clients love.

Melton's position along the Western Freeway and on the Ballarat V/Line corridor makes it accessible for our delivery team, and we schedule our setups to ensure everything is perfect well before your first guest arrives. We understand that families in Melbourne's west value getting excellent quality at a fair price, and our packages are designed to deliver maximum visual impact within your budget. Setup and pack-down are always included, so your only job is to enjoy the celebration. Request a free quote and see what IDO Events can create for you.`,
    nearbySuburbs: ["Brookfield", "Kurunjang", "Bacchus Marsh", "Caroline Springs", "Hillside"],
    localVenues: ["Melton Community Hall", "Tabcorp Park Melton", "Willows Historical Park", "Arnolds Creek Community Centre"],
    testimonial: {
      text: "We hired IDO Events for our son's christening in Melton and couldn't be happier. The blue and white theme was beautifully executed, with the most stunning balloon garland and personalised signage. So professional.",
      name: "Stephanie & David C.",
      event: "Christening in Melton",
    },
  },
  {
    slug: "caroline-springs",
    name: "Caroline Springs",
    region: "West",
    lat: -37.7333,
    lng: 144.7333,
    intro: `Caroline Springs is one of Melbourne's most sought-after western suburbs, a master-planned community that combines modern convenience with beautiful lakeside parklands and a strong sense of neighbourhood. With its excellent schools, well-designed town centre, and family-friendly atmosphere, Caroline Springs has attracted a diverse population of young professionals and families who take pride in celebrating life's important moments beautifully. IDO Events brings premium event styling and prop hire to families across Caroline Springs, Burnside Heights, Deer Park, and the surrounding Brimbank-Melton area.

The events we style in Caroline Springs tend to reflect the suburb's polished, contemporary aesthetic. Our clients here appreciate clean, modern designs with quality materials — think elegant white and gold themes, organic floral arrangements, sleek balloon installations, and custom signage that adds a personal touch. We have styled stunning engagement parties in the beautiful homes overlooking Caroline Springs Lake, intimate baby showers in stylish open-plan living areas, and elaborate birthday celebrations at local function centres. The suburb's well-maintained parks and lakeside areas also provide gorgeous outdoor settings that we love enhancing with careful styling.

Caroline Springs is well-connected via the Western Freeway and Caroline Springs station on the Ballarat line, making it a straightforward area for our delivery team to service. The suburb's modern homes typically feature generous entertaining areas that are ideal for styled events, and we are experienced in making the most of these spaces. Our complete service includes delivery, professional setup, and pack-down after your event — everything is handled so you can be fully present for your celebration. Contact us for a free quote and let us bring your Caroline Springs event to life.`,
    nearbySuburbs: ["Burnside Heights", "Deer Park", "Hillside", "Taylors Hill", "Melton"],
    localVenues: ["Caroline Springs Civic Centre", "The Lakeside", "CS Square Function Room", "Burnside Community Hub"],
    testimonial: {
      text: "IDO Events created the most beautiful engagement party setup for us at our home in Caroline Springs. The lakeside views combined with their floral installations and draping made the whole evening feel magical. Absolutely loved it.",
      name: "Eleni & Michael K.",
      event: "Engagement Party in Caroline Springs",
    },
  },
  {
    slug: "box-hill",
    name: "Box Hill",
    region: "Inner East",
    lat: -37.8167,
    lng: 145.1167,
    intro: `Box Hill is one of Melbourne's most dynamic eastern suburbs, a major activity centre that blends a thriving Asian food and cultural scene with established residential streets and excellent transport connections. As a designated metropolitan activity centre, Box Hill has evolved into a vibrant, cosmopolitan neighbourhood that attracts families from diverse backgrounds — and the celebrations here reflect that wonderful diversity. IDO Events provides professional event styling and prop hire across Box Hill, Box Hill South, Mont Albert, and the surrounding Whitehorse area.

The events we style in Box Hill draw on the suburb's rich cultural mix. We regularly create stunning setups for Chinese and Vietnamese celebrations — from elaborate first birthday banquets with red and gold themes to modern engagement parties that blend Eastern traditions with contemporary Australian styling. We also work with families from Indian, Sri Lankan, and European backgrounds, creating everything from vibrant haldi ceremony setups to elegant, muted-tone reception styling. Our team approaches every cultural brief with respect, research, and creative enthusiasm, ensuring that your celebration authentically reflects your heritage while looking absolutely spectacular.

Box Hill's central eastern location, served by the Belgrave-Lilydale rail line, the Eastern Freeway, and multiple tram routes, makes it one of the most accessible suburbs for our delivery team. We work with restaurants, function centres, and private dining rooms throughout the Box Hill precinct, as well as homes across the wider area. Whether you need a simple backdrop and dessert table or a complete venue transformation, IDO Events delivers with professionalism and care. Setup and pack-down are always included. Get in touch for a free quote.`,
    nearbySuburbs: ["Mont Albert", "Surrey Hills", "Blackburn", "Doncaster", "Balwyn"],
    localVenues: ["Box Hill Town Hall", "Box Hill Community Arts Centre", "Whitehorse Centre", "Golden Dragon Palace"],
    testimonial: {
      text: "IDO Events styled our parents' 50th wedding anniversary dinner in Box Hill and it was absolutely gorgeous. The gold and ivory theme was executed with such attention to detail. Our parents were so happy. Thank you!",
      name: "Michelle C.",
      event: "Anniversary in Box Hill",
    },
  },
  {
    slug: "glen-waverley",
    name: "Glen Waverley",
    region: "East",
    lat: -37.8783,
    lng: 145.1650,
    intro: `Glen Waverley is one of Melbourne's premier eastern suburbs, renowned for its excellent schools, thriving restaurant strip along Kingsway, and a strong multicultural community that brings energy and diversity to every aspect of local life. Families in Glen Waverley set high standards for their celebrations, and IDO Events meets those standards with premium event styling and prop hire that transforms any space into something extraordinary. We service Glen Waverley, Mount Waverley, Wheelers Hill, and the broader Monash area with the same dedication and creativity.

The celebrations we create in Glen Waverley span a wonderful range of styles and traditions. We have styled elegant Chinese wedding banquets with luxurious red and gold installations, modern Australian christenings with soft pastel balloon arches and floral features, vibrant Indian birthday celebrations with marigold garlands and colourful fabric draping, and sophisticated corporate events at local restaurants and function centres. Glen Waverley families often have a keen eye for design and quality, and we consistently deliver styling that exceeds their expectations with premium props, fresh floral arrangements, and meticulous attention to detail.

Glen Waverley's excellent connectivity via the Glen Waverley rail line, Monash Freeway, and Springvale Road makes it highly accessible for our delivery team. The suburb offers a mix of beautiful family homes with spacious entertaining areas and well-appointed function venues that we have styled numerous times. Our complete service covers delivery, professional setup, and pack-down, ensuring that your event day runs seamlessly from start to finish. If you are planning a celebration in Glen Waverley and want event styling that reflects the quality of this outstanding suburb, request a free quote today.`,
    nearbySuburbs: ["Mount Waverley", "Wheelers Hill", "Mulgrave", "Notting Hill", "Burwood"],
    localVenues: ["Glen Waverley RSL", "Monash Civic Centre", "The Glen Hotel", "Century City Walk Function Room"],
    testimonial: {
      text: "IDO Events transformed the function room for our daughter's 21st birthday in Glen Waverley. The rose gold and white theme looked incredible — the balloon arch, the backdrop, the table styling. Everything was perfect. Highly recommended!",
      name: "Wendy & David L.",
      event: "21st Birthday in Glen Waverley",
    },
  },
  {
    slug: "frankston",
    name: "Frankston",
    region: "Bayside",
    lat: -38.1500,
    lng: 145.1167,
    intro: `Frankston is Melbourne's bayside gateway, a suburb that has undergone a remarkable revitalisation in recent years and now offers a vibrant blend of coastal lifestyle, arts and culture, and strong community spirit. With its beautiful foreshore, bustling CBD, and proximity to the stunning Mornington Peninsula, Frankston is a suburb where celebrations are infused with the relaxed, sun-soaked energy of the bay. IDO Events provides professional event styling and prop hire throughout Frankston, Frankston South, Seaford, and the wider bayside region.

Event styling in Frankston often draws on the suburb's coastal setting. Our clients here love styling that feels relaxed yet refined — think natural textures, organic floral arrangements, driftwood and greenery installations, and soft colour palettes that echo the blues and sandy neutrals of the nearby beach. We have styled beautiful beachside-inspired weddings and engagement parties, relaxed boho baby showers in homes overlooking the bay, and vibrant birthday celebrations at local restaurants and function centres. The Frankston Arts Centre and foreshore precinct also provide stunning venues for styled corporate events and private celebrations.

Frankston's position as the last stop on the Frankston rail line and at the junction of the Peninsula Link and EastLink freeways makes it an accessible hub for guests from across Melbourne. Our delivery team services the entire bayside corridor, from Carrum and Seaford through to Mount Eliza and Mornington. We handle full delivery, setup, and pack-down for every event, ensuring that your celebration is stress-free from start to finish. If you are planning an event in the Frankston area and want styling that captures the beauty of the bayside, get in touch for a free quote.`,
    nearbySuburbs: ["Seaford", "Carrum", "Langwarrin", "Mount Eliza", "Frankston South"],
    localVenues: ["Frankston Arts Centre", "Peninsula Docklands", "McClelland Sculpture Park", "Frankston RSL"],
    testimonial: {
      text: "IDO Events styled our wedding reception in Frankston with a beautiful coastal-inspired theme. The combination of greenery, white florals, and timber elements was stunning. They captured exactly the relaxed, elegant vibe we wanted.",
      name: "Sarah & Tom B.",
      event: "Wedding in Frankston",
    },
  },
  {
    slug: "moorabbin",
    name: "Moorabbin",
    region: "Bayside",
    lat: -37.9333,
    lng: 145.0500,
    intro: `Moorabbin is a well-established suburb in Melbourne's south-east bayside region, offering a convenient, family-friendly location with excellent transport links and a strong local community. Known for its proximity to Kingston's shopping and dining precincts, its easy access to Brighton and Mentone beaches, and its position as a commercial hub for the surrounding area, Moorabbin is a suburb where families value quality, reliability, and attention to detail in everything — including their celebrations. IDO Events provides professional event styling and prop hire across Moorabbin, Bentleigh, Highett, and the wider Kingston area.

The events we style in Moorabbin reflect the suburb's unpretentious yet quality-focused community. Our clients here appreciate styling that looks sophisticated without being over the top — clean, well-executed designs with quality props, beautiful floral arrangements, and thoughtful details that make the celebration feel special. We have styled elegant milestone birthday parties, heartfelt christening receptions, and intimate engagement dinners throughout the area, always tailoring our approach to the client's taste and the character of the space. Whether the event is at a local restaurant, a community hall, or a family home, we bring the same level of professionalism.

Moorabbin's central bayside location, connected by the Frankston rail line, Nepean Highway, and South Road, makes it one of the most accessible suburbs for our team to service. We are familiar with local function venues and community spaces throughout the Kingston area, and we work efficiently within these spaces to create maximum impact. Our full-service approach includes delivery, setup, and pack-down, so your event day is completely stress-free. Reach out for a free quote and let IDO Events style your next Moorabbin celebration.`,
    nearbySuburbs: ["Bentleigh", "Highett", "Hampton", "Cheltenham", "Mentone"],
    localVenues: ["Kingston City Hall", "Moorabbin RSL", "Highett Community Centre", "Kingston Arts Centre"],
    testimonial: {
      text: "We used IDO Events for our engagement party at a venue in Moorabbin and could not be happier. The styling was elegant, modern, and exactly what we asked for. The team was punctual, professional, and so easy to deal with.",
      name: "Anna & Chris G.",
      event: "Engagement Party in Moorabbin",
    },
  },
```

- [ ] **Step 2: Verify build**

Run: `cd ido-events && npm run build`
Expected: Build succeeds. `generateStaticParams` in `event-styling/[suburb]/page.tsx` now returns 25 suburb slugs. Sitemap now includes 25 suburb URLs.

- [ ] **Step 3: Commit**

```bash
git add src/data/suburbs.ts
git commit -m "feat: add 15 new Melbourne suburb pages for expanded local SEO coverage"
```

---

### Task 7: Final Build Verification

- [ ] **Step 1: Run full build**

Run: `cd ido-events && npm run build`
Expected: Build succeeds with no errors. Output should show:
- 25 suburb pages generated (previously 10)
- 106 blog post pages generated
- 20 hire item pages generated
- 6 occasion pages generated

- [ ] **Step 2: Verify JSON-LD output on a sample page**

Run: `cd ido-events && npm run start &` then:
```bash
curl -s http://localhost:3000/blog/10-trending-wedding-colour-palettes-melbourne | grep -o 'application/ld+json' | wc -l
```
Expected: 2 (one BlogPosting, one BreadcrumbList)

```bash
curl -s http://localhost:3000/weddings | grep -o 'application/ld+json' | wc -l
```
Expected: 2 (one FAQPage, one BreadcrumbList)

```bash
curl -s http://localhost:3000/event-styling/south-yarra | grep -o 'application/ld+json' | wc -l
```
Expected: 2 (one LocalBusiness, one BreadcrumbList)

```bash
curl -s http://localhost:3000/hire/rustic-romance-package | grep -o 'application/ld+json' | wc -l
```
Expected: 2 (one Product, one BreadcrumbList)

- [ ] **Step 3: Stop the dev server and commit any fixes if needed**

Kill the background server process. If any fixes were needed, commit them.
