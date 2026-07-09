"use client";

import Image from "next/image";
import { ScrollReveal, Stagger, motion, fadeUp, springSmooth } from "@/components/motion";

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
    <section className="bg-cream-light px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl text-center">
        <ScrollReveal>
          <h2 className="mb-3 font-heading text-3xl sm:text-4xl">Recent Events</h2>
          <p className="mx-auto mb-12 max-w-xl text-base text-charcoal/60">
            A glimpse of the events we&apos;ve styled across Melbourne.
          </p>
        </ScrollReveal>
        <Stagger className="columns-2 gap-3 space-y-3 md:columns-3 lg:columns-4">
          {recentImages.map((img, i) => (
            <motion.div
              key={i}
              className="relative break-inside-avoid overflow-hidden rounded-lg"
              style={{ aspectRatio: i % 3 === 0 ? "3/4" : i % 2 === 0 ? "1/1" : "4/3" }}
              variants={fadeUp}
              transition={{ ...springSmooth, delay: i * 0.05 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
