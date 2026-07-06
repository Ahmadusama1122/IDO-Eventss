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

export default function HomePage() {
  return (
    <>
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
