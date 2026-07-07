import type { Metadata } from "next";
import { OCCASIONS } from "@/data/occasions";
import { OccasionPage } from "@/components/OccasionPage";
import gallery from "@/data/gallery.json";

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

export default function BirthdaysPage() {
  return <OccasionPage data={data} gallery={gallery} />;
}
