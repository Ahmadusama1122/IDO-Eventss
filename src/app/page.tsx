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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does event styling cost in Melbourne?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Birthday styling starts from $350, baby showers from $350, engagement parties from $450, wedding ceremony-only from $650, full wedding styling from $1,800, and mehndi night styling from $1,200. All prices include delivery, full setup, and pack-down across 30+ Melbourne suburbs.",
      },
    },
    {
      "@type": "Question",
      name: "What areas does iDo Events service in Melbourne?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We deliver and set up across 30+ Melbourne suburbs including Point Cook, Tarneit, Truganina, Werribee, Hoppers Crossing, Craigieburn, Epping, Dandenong, Clayton, Glen Waverley, Doncaster, Preston, Brunswick, Footscray, Sunshine, Oakleigh, Coburg, and more. Delivery is included at no extra charge for all suburbs.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in event styling packages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every booking includes prop delivery to your venue, full professional setup, and pack-down after the event. You do not need to be present for setup or help with anything. There are no hidden fees, weekend surcharges, or distance charges.",
      },
    },
    {
      "@type": "Question",
      name: "How far in advance should I book an event stylist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend booking 4 to 8 weeks ahead for most events. For weddings during peak season (October to March), book at least 3 months ahead. We can accommodate shorter notice if we have availability.",
      },
    },
    {
      "@type": "Question",
      name: "Do you style mehndi nights and South Asian celebrations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide specialised mehndi, nikkah, and walima styling with vibrant stage setups, marigold installations, and traditional draping. We serve Melbourne's Pakistani, Indian, Afghan, and Bangladeshi communities with culturally informed styling starting from $1,200.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
