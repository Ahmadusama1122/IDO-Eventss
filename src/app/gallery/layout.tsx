import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Styling Gallery | Real Melbourne Events",
  description:
    "See our work — 155+ photos of real weddings, birthdays, christenings, baby showers, and corporate events styled by IDO Events across Melbourne.",
  openGraph: {
    title: "Event Styling Gallery | IDO Events Melbourne",
    description:
      "Browse 155+ photos of real events we have styled across Melbourne. Weddings, birthdays, christenings, baby showers, engagements, and corporate functions.",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
