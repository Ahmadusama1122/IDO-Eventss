import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hireItems, getHireItem, getRelatedItems, CATEGORY_LABELS } from "@/data/hire-items";
import { HireItemDetail } from "./HireItemDetail";

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
    title: `${item.name} — Hire`,
    description: item.description,
    openGraph: {
      title: `${item.name} | IDO Events Prop Hire Melbourne`,
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

  return <HireItemDetail item={item} related={related} categoryLabel={categoryLabel} />;
}
