import type { Metadata } from "next";
import { OCCASIONS } from "@/data/occasions";
import { OccasionPage } from "@/components/OccasionPage";
import gallery from "@/data/gallery.json";
import { buildFaqSchema, buildBreadcrumbSchema, BASE_URL } from "@/lib/schema";

const data = OCCASIONS.find((o) => o.slug === "engagements")!;

export const metadata: Metadata = {
  title: "Engagement Party Styling Melbourne",
  description:
    "iDo Events provides engagement party styling and prop hire in Melbourne. Arches, neon signs, floral centrepieces — full setup and pack-down included. Free quotes.",
  alternates: { canonical: "https://idoeventss.com/engagements" },
  openGraph: {
    title: "Engagement Party Styling Melbourne | iDo Events",
    description:
      "Celebrate your engagement in style with professional event styling. Arches, neon signs, florals and full venue setups across Melbourne.",
    images: [{ url: "/gallery/engagements/engagements-1.jpg", width: 1200, height: 630 }],
  },
};

const faqLd = buildFaqSchema(data.faqs);
const breadcrumbLd = buildBreadcrumbSchema([
  { name: "Home", url: BASE_URL },
  { name: "Engagements" },
]);

export default function EngagementsPage() {
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
