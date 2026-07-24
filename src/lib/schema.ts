import type { SuburbData } from "@/data/suburbs";

export const BASE_URL = "https://idoeventss.com";

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
    telephone: "+61406179786",
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
      "https://www.facebook.com/balloonheadquarters/",
    ],
  };
}
