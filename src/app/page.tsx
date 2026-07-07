import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { OccasionGrid } from "@/components/home/OccasionGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FeaturedPackages } from "@/components/home/FeaturedPackages";
import { ProofBand } from "@/components/home/ProofBand";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { RecentGallery } from "@/components/home/RecentGallery";
import { Testimonials } from "@/components/home/Testimonials";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { CtaBand } from "@/components/home/CtaBand";
import { SuburbLinks } from "@/components/home/SuburbLinks";

export const metadata: Metadata = {
  title: "IDO Events | Event Styling & Prop Hire Melbourne",
  description:
    "Melbourne's trusted event styling and prop hire specialists. Weddings, birthdays, christenings, baby showers, engagements, and corporate events — beautifully styled with full setup and pack-down included. Free quotes.",
  openGraph: {
    title: "IDO Events | Event Styling & Prop Hire Melbourne",
    description:
      "Professional event styling and prop hire across 30+ Melbourne suburbs. Backdrops, florals, balloons, signage, draping and lighting — delivered, set up, and packed down for you.",
    url: "https://idoeventss.com",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EventPlanner",
  name: "IDO Events",
  description:
    "Melbourne's trusted event styling and prop hire specialists. Weddings, birthdays, christenings, baby showers, engagements, and corporate events.",
  url: "https://idoeventss.com",
  areaServed: {
    "@type": "City",
    name: "Melbourne",
    "@id": "https://www.wikidata.org/wiki/Q3141",
  },
  serviceType: [
    "Event Styling",
    "Prop Hire",
    "Wedding Styling",
    "Birthday Party Styling",
    "Corporate Event Styling",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  priceRange: "$$",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <OccasionGrid />
      <HowItWorks />
      <FeaturedPackages />
      <ProofBand />
      <BeforeAfter />
      <RecentGallery />
      <Testimonials />
      <InstagramFeed />
      <CtaBand />
      <SuburbLinks />
    </>
  );
}
