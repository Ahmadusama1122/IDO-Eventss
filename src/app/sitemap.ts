import type { MetadataRoute } from "next";
import { hireItems } from "@/data/hire-items";
import { SUBURBS } from "@/data/suburbs";
import { blogPosts } from "@/data/blog-posts";

const BASE_URL = "https://idoeventss.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/hire`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/gallery`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/quote`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/links`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE_URL}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/terms`, changeFrequency: "yearly", priority: 0.2 },
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
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const hireItemPages: MetadataRoute.Sitemap = hireItems.map((item) => ({
    url: `${BASE_URL}/hire/${item.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const suburbPages: MetadataRoute.Sitemap = SUBURBS.map((suburb) => ({
    url: `${BASE_URL}/event-styling/${suburb.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...occasionPages,
    ...hireItemPages,
    ...suburbPages,
    ...blogPostPages,
  ];
}
