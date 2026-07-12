import type { Metadata } from "next";
import { OCCASIONS } from "@/data/occasions";
import { OccasionPage } from "@/components/OccasionPage";
import gallery from "@/data/gallery.json";
import { buildFaqSchema, buildBreadcrumbSchema, BASE_URL } from "@/lib/schema";

const data = OCCASIONS.find((o) => o.slug === "weddings")!;

export const metadata: Metadata = {
  title: "Wedding Styling & Prop Hire Melbourne",
  description:
    "iDo Events provides wedding styling and prop hire in Melbourne. Arches, florals, draping, centrepieces — full setup and pack-down included. Free quotes.",
  alternates: { canonical: "https://idoeventss.com/weddings" },
  openGraph: {
    title: "Wedding Styling & Prop Hire Melbourne | iDo Events",
    description:
      "Create your dream wedding with professional event styling. Ceremony backdrops, reception table styling, floral installations and more across Melbourne.",
    images: [{ url: "/gallery/weddings/weddings-1.jpg", width: 1200, height: 630 }],
  },
};

const faqLd = buildFaqSchema(data.faqs);
const breadcrumbLd = buildBreadcrumbSchema([
  { name: "Home", url: BASE_URL },
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
