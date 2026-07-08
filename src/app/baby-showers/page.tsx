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
