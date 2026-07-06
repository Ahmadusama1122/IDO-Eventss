import { OCCASIONS } from "@/data/occasions";
import { OccasionPage } from "@/components/OccasionPage";
import gallery from "@/data/gallery.json";

const data = OCCASIONS.find((o) => o.slug === "weddings")!;

export const metadata = {
  title: "Wedding Styling & Prop Hire Melbourne",
  description: data.intro.slice(0, 160),
};

export default function WeddingsPage() {
  return <OccasionPage data={data} gallery={gallery} />;
}
