import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hireItems, getHireItem, getRelatedItems, CATEGORY_LABELS } from "@/data/hire-items";
import { HireItemDetail } from "./HireItemDetail";
import { buildProductSchema, buildBreadcrumbSchema, BASE_URL } from "@/lib/schema";

export function generateStaticParams() {
  return hireItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getHireItem(slug);
  if (!item) return { title: "Item Not Found" };

  return {
    title: `${item.name} — Prop Hire Melbourne`,
    description: item.description,
    alternates: { canonical: `https://idoeventss.com/hire/${item.slug}` },
    openGraph: {
      title: `${item.name} | iDo Events Prop Hire`,
      description: item.description,
      images: [{ url: item.image, width: 1200, height: 630 }],
    },
  };
}

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
    { name: "Home", url: BASE_URL },
    { name: "Prop Hire", url: `${BASE_URL}/hire` },
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
