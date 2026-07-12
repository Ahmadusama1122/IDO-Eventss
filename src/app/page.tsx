import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";
import { OccasionGrid } from "@/components/home/OccasionGrid";
import { HowItWorks } from "@/components/home/HowItWorks";

/* Below-fold sections: lazy-loaded for faster initial page load */
const FeaturedPackages = dynamic(() => import("@/components/home/FeaturedPackages").then(m => ({ default: m.FeaturedPackages })));
const ProofBand = dynamic(() => import("@/components/home/ProofBand").then(m => ({ default: m.ProofBand })));
const BeforeAfter = dynamic(() => import("@/components/home/BeforeAfter").then(m => ({ default: m.BeforeAfter })));
const RecentGallery = dynamic(() => import("@/components/home/RecentGallery").then(m => ({ default: m.RecentGallery })));
const Testimonials = dynamic(() => import("@/components/home/Testimonials").then(m => ({ default: m.Testimonials })));
const InstagramFeed = dynamic(() => import("@/components/home/InstagramFeed").then(m => ({ default: m.InstagramFeed })));
const CtaBand = dynamic(() => import("@/components/home/CtaBand").then(m => ({ default: m.CtaBand })));
const SuburbLinks = dynamic(() => import("@/components/home/SuburbLinks").then(m => ({ default: m.SuburbLinks })));

export const metadata: Metadata = {
  title: "Event Styling & Prop Hire Melbourne | iDo Events",
  description:
    "iDo Events provides event styling and prop hire across 30+ Melbourne suburbs. Weddings, birthdays, christenings, baby showers, engagements and corporate events — full setup and pack-down included. Free quotes.",
  alternates: { canonical: "https://idoeventss.com" },
  openGraph: {
    title: "Event Styling & Prop Hire Melbourne | iDo Events",
    description:
      "Professional event styling and prop hire across 30+ Melbourne suburbs. Backdrops, florals, balloons, signage, draping and lighting — delivered and set up for you.",
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
