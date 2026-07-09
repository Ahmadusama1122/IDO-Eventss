"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, Stagger, motion, fadeUp, springSmooth } from "@/components/motion";

const PACKAGES = [
  { slug: "rustic-romance-package", name: "Rustic Romance", image: "/gallery/weddings/weddings-9.jpg" },
  { slug: "modern-luxe-package", name: "Modern Luxe", image: "/gallery/engagements/engagements-3.jpg" },
  { slug: "garden-party-package", name: "Garden Party", image: "/gallery/baby-showers/baby-showers-8.jpg" },
  { slug: "classic-elegance-package", name: "Classic Elegance", image: "/gallery/weddings/weddings-14.jpg" },
];

export function FeaturedPackages() {
  return (
    <section className="bg-cream-light px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl text-center">
        <ScrollReveal>
          <h2 className="mb-3 font-heading text-3xl sm:text-4xl">Popular Packages</h2>
          <p className="mx-auto mb-12 max-w-xl text-base text-charcoal/60">
            Our most-requested styling packages, ready to customise for your event.
          </p>
        </ScrollReveal>
        <Stagger className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {PACKAGES.map((pkg) => (
            <motion.div
              key={pkg.slug}
              variants={fadeUp}
              transition={springSmooth}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={`${pkg.name} package`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
              <div className="p-5">
                <h4 className="mb-3 font-heading text-lg">{pkg.name}</h4>
                <Link
                  href={`/quote?item=${pkg.slug}`}
                  className="block w-full rounded-md border-2 border-sage py-2.5 text-center text-[13px] font-semibold text-sage-dark transition-colors hover:bg-sage hover:text-white"
                >
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
