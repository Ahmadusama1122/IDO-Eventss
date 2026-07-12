import type { Metadata } from "next";
import { OCCASIONS } from "@/data/occasions";
import { OccasionPage } from "@/components/OccasionPage";
import gallery from "@/data/gallery.json";
import { buildFaqSchema, buildBreadcrumbSchema, BASE_URL } from "@/lib/schema";

const data = OCCASIONS.find((o) => o.slug === "baby-showers")!;

export const metadata: Metadata = {
  title: "Baby Shower Styling Melbourne",
  description:
    "iDo Events provides baby shower styling and decorations in Melbourne. Balloon installations, backdrops, dessert tables — styled and delivered. Free quotes.",
  alternates: { canonical: "https://idoeventss.com/baby-showers" },
  openGraph: {
    title: "Baby Shower Styling Melbourne | iDo Events",
    description:
      "Create a stunning baby shower with professional styling. Balloon garlands, backdrops, dessert tables and themed setups delivered across Melbourne.",
    images: [{ url: "/gallery/baby-showers/baby-showers-1.jpg", width: 1200, height: 630 }],
  },
};

const faqLd = buildFaqSchema(data.faqs);
const breadcrumbLd = buildBreadcrumbSchema([
  { name: "Home", url: BASE_URL },
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
