import { OCCASIONS } from "@/data/occasions";
import { OccasionPage } from "@/components/OccasionPage";
import gallery from "@/data/gallery.json";

const data = OCCASIONS.find((o) => o.slug === "baby-showers")!;

export const metadata = {
  title: "Baby Shower Styling & Prop Hire Melbourne",
  description: data.intro.slice(0, 160),
};

export default function BabyShowersPage() {
  return <OccasionPage data={data} gallery={gallery} />;
}
