import type { MetadataRoute } from "next";
import { hireItems } from "@/data/hire-items";
import { SUBURBS } from "@/data/suburbs";
import { blogPosts } from "@/data/blog-posts";
import { getAllServiceSuburbPairs } from "@/data/service-suburbs";

const BASE_URL = "https://idoeventss.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/hire`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/gallery`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/quote`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/links`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const occasionPages: MetadataRoute.Sitemap = [
    "weddings",
    "birthdays",
    "christenings-baptisms",
    "baby-showers",
    "engagements",
    "corporate",
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const hireItemPages: MetadataRoute.Sitemap = hireItems.map((item) => ({
    url: `${BASE_URL}/hire/${item.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const suburbPages: MetadataRoute.Sitemap = SUBURBS.map((suburb) => ({
    url: `${BASE_URL}/event-styling/${suburb.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  // Service × Suburb local SEO pages
  const serviceSuburbPages: MetadataRoute.Sitemap = getAllServiceSuburbPairs().map((pair) => ({
    url: `${BASE_URL}/${pair.service}/${pair.suburb}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    ...staticPages,
    ...occasionPages,
    ...hireItemPages,
    ...suburbPages,
    ...serviceSuburbPages,
    ...blogPostPages,
  ];
}
