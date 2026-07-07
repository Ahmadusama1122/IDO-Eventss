import type { Metadata } from "next";
import { OCCASIONS } from "@/data/occasions";
import { OccasionPage } from "@/components/OccasionPage";
import gallery from "@/data/gallery.json";

const data = OCCASIONS.find((o) => o.slug === "corporate")!;

export const metadata: Metadata = {
  title: "Corporate Event Styling Melbourne",
  description:
    "Corporate event styling Melbourne. Product launches, gala dinners, conferences — professional prop hire with full setup and pack-down. Free quotes from IDO Events.",
  openGraph: {
    title: "Corporate Event Styling | IDO Events Melbourne",
    description:
      "Professional corporate event styling for product launches, gala dinners, conferences and team celebrations across Melbourne.",
  },
};

export default function CorporatePage() {
  return <OccasionPage data={data} gallery={gallery} />;
}
