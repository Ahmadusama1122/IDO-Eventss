"use client";

import Image from "next/image";
import {
  ScrollReveal,
  Stagger,
  motion,
  fadeUp,
  springSmooth,
  TextReveal,
  ImageReveal,
  LineReveal,
  blurIn,
  easeSlow,
} from "@/components/motion";

const recentImages = [
  { src: "/gallery/weddings/weddings-3.jpg", alt: "Wedding styling Melbourne" },
  { src: "/gallery/birthdays/birthdays-5.jpg", alt: "Birthday party setup" },
  { src: "/gallery/engagements/engagements-8.jpg", alt: "Engagement party styling" },
  { src: "/gallery/christenings-baptisms/christenings-baptisms-4.jpg", alt: "Christening celebration" },
  { src: "/gallery/drapes/drapes-7.jpg", alt: "Venue draping installation" },
  { src: "/gallery/baby-showers/baby-showers-3.jpg", alt: "Baby shower styling" },
  { src: "/gallery/weddings/weddings-12.jpg", alt: "Wedding reception decor" },
  { src: "/gallery/birthdays/birthdays-20.jpg", alt: "Milestone birthday party" },
];

export function RecentGallery() {
  return (
    <section className="bg-cream-light px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl text-center">
        <ScrollReveal variants={blurIn} transition={easeSlow}>
          <span className="mb-3 block font-script text-lg text-sage">our recent work</span>
        </ScrollReveal>
        <TextReveal
          text="Recent Events"
          tag="h2"
          className="mb-3 font-heading text-3xl sm:text-4xl lg:text-5xl"
        />
        <ScrollReveal delay={0.2}>
          <p className="mx-auto mb-4 max-w-xl text-base text-charcoal/60">
            A glimpse of the events we&apos;ve styled across Melbourne.
          </p>
        </ScrollReveal>
        <LineReveal className="mx-auto mb-14 h-[1px] w-16 bg-sage/40" delay={0.4} />

        <Stagger className="columns-2 gap-3 space-y-3 md:columns-3 lg:columns-4">
          {recentImages.map((img, i) => (
            <motion.div
              key={i}
              className="group relative break-inside-avoid overflow-hidden rounded-xl"
              style={{ aspectRatio: i % 3 === 0 ? "3/4" : i % 2 === 0 ? "1/1" : "4/3" }}
              variants={fadeUp}
              transition={{ ...springSmooth, delay: i * 0.06 }}
            >
              <ImageReveal direction="up" delay={i * 0.05}>
                <div className="relative h-full w-full" style={{ aspectRatio: i % 3 === 0 ? "3/4" : i % 2 === 0 ? "1/1" : "4/3" }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </ImageReveal>
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/30">
                <motion.svg
                  className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </motion.svg>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
