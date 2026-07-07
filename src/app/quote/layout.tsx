import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Quote | IDO Events Melbourne",
  description:
    "Request a free, no-obligation quote for event styling and prop hire in Melbourne. Tell us about your event and we will respond within the hour.",
  openGraph: {
    title: "Get a Free Quote | IDO Events Melbourne",
    description:
      "Send us your event details and receive a personalised quote within the hour. Event styling and prop hire across 30+ Melbourne suburbs.",
  },
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
