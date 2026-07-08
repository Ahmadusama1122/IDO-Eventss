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
