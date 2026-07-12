import type { Metadata } from "next";
import { OCCASIONS } from "@/data/occasions";
import { OccasionPage } from "@/components/OccasionPage";
import gallery from "@/data/gallery.json";
import { buildFaqSchema, buildBreadcrumbSchema, BASE_URL } from "@/lib/schema";

const data = OCCASIONS.find((o) => o.slug === "corporate")!;

export const metadata: Metadata = {
  title: "Corporate Event Styling Melbourne",
  description:
    "iDo Events provides corporate event styling in Melbourne. Product launches, gala dinners, conferences — professional prop hire with full setup. Free quotes.",
  alternates: { canonical: "https://idoeventss.com/corporate" },
  openGraph: {
    title: "Corporate Event Styling Melbourne | iDo Events",
    description:
      "Professional corporate event styling for product launches, gala dinners, conferences and team celebrations across Melbourne.",
    images: [{ url: "/gallery/corporate/corporate-1.jpg", width: 1200, height: 630 }],
  },
};

const faqLd = buildFaqSchema(data.faqs);
const breadcrumbLd = buildBreadcrumbSchema([
  { name: "Home", url: BASE_URL },
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
