import type { Metadata } from "next";
import { OCCASIONS } from "@/data/occasions";
import { OccasionPage } from "@/components/OccasionPage";
import gallery from "@/data/gallery.json";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/lib/schema";

const data = OCCASIONS.find((o) => o.slug === "engagements")!;

export const metadata: Metadata = {
  title: "Engagement Party Styling & Prop Hire Melbourne",
  description:
    "Engagement party styling Melbourne. Modern arches, neon signs, floral centrepieces and full venue styling. Setup and pack-down included. Free quotes.",
  openGraph: {
    title: "Engagement Party Styling | IDO Events Melbourne",
    description:
      "Celebrate your engagement in style with professional event styling. Arches, neon signs, florals and full venue setups across Melbourne.",
  },
};

const faqLd = buildFaqSchema(data.faqs);
const breadcrumbLd = buildBreadcrumbSchema([
  { name: "Home", url: "https://idoeventss.com" },
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
