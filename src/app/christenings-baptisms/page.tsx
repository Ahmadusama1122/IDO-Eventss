import type { Metadata } from "next";
import { OCCASIONS } from "@/data/occasions";
import { OccasionPage } from "@/components/OccasionPage";
import gallery from "@/data/gallery.json";
import { buildFaqSchema, buildBreadcrumbSchema, BASE_URL } from "@/lib/schema";

const data = OCCASIONS.find((o) => o.slug === "christenings-baptisms")!;

export const metadata: Metadata = {
  title: "Christening & Baptism Styling Melbourne",
  description:
    "Christening and baptism styling Melbourne. Elegant backdrops, florals, signage and dessert tables. Full setup included. Free quotes from IDO Events.",
  openGraph: {
    title: "Christening & Baptism Styling | IDO Events Melbourne",
    description:
      "Beautiful christening and baptism event styling across Melbourne. Backdrops, florals, plinths, signage and full dessert table setups with delivery and pack-down.",
  },
};

const faqLd = buildFaqSchema(data.faqs);
const breadcrumbLd = buildBreadcrumbSchema([
  { name: "Home", url: BASE_URL },
  { name: "Christenings & Baptisms" },
]);

export default function ChristeningsPage() {
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
