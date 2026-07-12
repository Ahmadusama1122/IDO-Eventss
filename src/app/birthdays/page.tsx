import type { Metadata } from "next";
import { OCCASIONS } from "@/data/occasions";
import { OccasionPage } from "@/components/OccasionPage";
import gallery from "@/data/gallery.json";
import { buildFaqSchema, buildBreadcrumbSchema, BASE_URL } from "@/lib/schema";

const data = OCCASIONS.find((o) => o.slug === "birthdays")!;

export const metadata: Metadata = {
  title: "Birthday Party Styling Melbourne",
  description:
    "iDo Events provides birthday party styling and prop hire in Melbourne. Balloon garlands, themed backdrops, dessert tables — from first birthdays to milestones. Free quotes.",
  alternates: { canonical: "https://idoeventss.com/birthdays" },
  openGraph: {
    title: "Birthday Party Styling Melbourne | iDo Events",
    description:
      "Make every birthday unforgettable with professional event styling. Balloon installations, themed setups, dessert tables and full venue styling across Melbourne.",
    images: [{ url: "/gallery/birthdays/birthdays-1.jpg", width: 1200, height: 630 }],
  },
};

const faqLd = buildFaqSchema(data.faqs);
const breadcrumbLd = buildBreadcrumbSchema([
  { name: "Home", url: BASE_URL },
  { name: "Birthdays" },
]);

export default function BirthdaysPage() {
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
