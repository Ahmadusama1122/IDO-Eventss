import type { Metadata } from "next";
import { OCCASIONS } from "@/data/occasions";
import { OccasionPage } from "@/components/OccasionPage";
import gallery from "@/data/gallery.json";

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

export default function BabyShowersPage() {
  return <OccasionPage data={data} gallery={gallery} />;
}
