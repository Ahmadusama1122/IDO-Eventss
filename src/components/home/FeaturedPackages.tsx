"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ScrollReveal,
  Stagger,
  motion,
  fadeUp,
  springSmooth,
  TextReveal,
  ImageReveal,
  Magnetic,
  LineReveal,
  blurIn,
  easeSlow,
} from "@/components/motion";

const PACKAGES = [
  { slug: "rustic-romance-package", name: "Rustic Romance", image: "/gallery/weddings/weddings-9.jpg" },
  { slug: "modern-luxe-package", name: "Modern Luxe", image: "/gallery/engagements/engagements-3.jpg" },
  { slug: "garden-party-package", name: "Garden Party", image: "/gallery/baby-showers/baby-showers-8.jpg" },
  { slug: "classic-elegance-package", name: "Classic Elegance", image: "/gallery/weddings/weddings-14.jpg" },
];

export function FeaturedPackages() {
  return (
    <section className="bg-cream-light px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl text-center">
        <ScrollReveal variants={blurIn} transition={easeSlow}>
          <span className="mb-3 block font-script text-lg text-sage">curated for you</span>
        </ScrollReveal>
        <TextReveal
          text="Popular Packages"
          tag="h2"
          className="mb-3 font-heading text-3xl sm:text-4xl lg:text-5xl"
        />
        <ScrollReveal delay={0.2}>
          <p className="mx-auto mb-4 max-w-xl text-base text-charcoal/60">
            Our most-requested styling packages, ready to customise for your event.
          </p>
        </ScrollReveal>
        <LineReveal className="mx-auto mb-14 h-[1px] w-16 bg-sage/40" delay={0.4} />

        <Stagger className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.slug}
              variants={fadeUp}
              transition={springSmooth}
              whileHover={{ y: -10, transition: { type: "spring", damping: 20, stiffness: 300 } }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <ImageReveal direction="up" delay={i * 0.1} className="relative aspect-square overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={`${pkg.name} package`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </ImageReveal>
              <div className="p-5">
                <h4 className="mb-3 font-heading text-lg">{pkg.name}</h4>
                <Magnetic strength={0.1}>
                  <Link
                    href={`/quote?item=${pkg.slug}`}
                    className="block w-full rounded-lg border-2 border-sage py-2.5 text-center text-[13px] font-semibold text-sage-dark transition-all duration-300 hover:bg-sage hover:text-white hover:shadow-md hover:shadow-sage/20"
                  >
                    Enquire Now
                  </Link>
                </Magnetic>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
