import { OCCASIONS } from "@/data/occasions";
import { OccasionPage } from "@/components/OccasionPage";
import gallery from "@/data/gallery.json";

const data = OCCASIONS.find((o) => o.slug === "christenings-baptisms")!;

export const metadata = {
  title: "Christening & Baptism Styling Melbourne",
  description: data.intro.slice(0, 160),
};

export default function ChristeningsPage() {
  return <OccasionPage data={data} gallery={gallery} />;
}
