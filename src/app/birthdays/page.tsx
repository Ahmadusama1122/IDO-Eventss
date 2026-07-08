import type { Metadata } from "next";
import { OCCASIONS } from "@/data/occasions";
import { OccasionPage } from "@/components/OccasionPage";
import gallery from "@/data/gallery.json";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/lib/schema";

const data = OCCASIONS.find((o) => o.slug === "birthdays")!;

export const metadata: Metadata = {
  title: "Birthday Party Styling & Prop Hire Melbourne",
  description:
    "Birthday party styling Melbourne. Balloon garlands, themed backdrops, dessert tables and more. From first birthdays to milestone celebrations. Free quotes.",
  openGraph: {
    title: "Birthday Party Styling | IDO Events Melbourne",
    description:
      "Make every birthday unforgettable with professional event styling. Balloon installations, themed setups, dessert tables and full venue styling across Melbourne.",
  },
};

const faqLd = buildFaqSchema(data.faqs);
const breadcrumbLd = buildBreadcrumbSchema([
  { name: "Home", url: "https://idoeventss.com" },
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
