import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Prop Hire Melbourne | Browse Our Collection",
  description:
    "Browse event props and styling packages for hire in Melbourne. Backdrops, florals, balloons, signage, draping, lighting — delivered, set up, and packed down for you.",
  openGraph: {
    title: "Event Prop Hire Melbourne | IDO Events",
    description:
      "Explore our full collection of event styling props and packages. Backdrops, florals, balloons, furniture, signage, draping and lighting for hire across Melbourne.",
  },
};

export default function HireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
