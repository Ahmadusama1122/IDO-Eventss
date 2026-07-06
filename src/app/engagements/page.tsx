import { OCCASIONS } from "@/data/occasions";
import { OccasionPage } from "@/components/OccasionPage";
import gallery from "@/data/gallery.json";

const data = OCCASIONS.find((o) => o.slug === "engagements")!;

export const metadata = {
  title: "Engagement Party Styling & Prop Hire Melbourne",
  description: data.intro.slice(0, 160),
};

export default function EngagementsPage() {
  return <OccasionPage data={data} gallery={gallery} />;
}
