import { OCCASIONS } from "@/data/occasions";
import { OccasionPage } from "@/components/OccasionPage";
import gallery from "@/data/gallery.json";

const data = OCCASIONS.find((o) => o.slug === "corporate")!;

export const metadata = {
  title: "Corporate Event Styling Melbourne",
  description: data.intro.slice(0, 160),
};

export default function CorporatePage() {
  return <OccasionPage data={data} gallery={gallery} />;
}
