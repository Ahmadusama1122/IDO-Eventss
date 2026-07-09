"use client";

import Image from "next/image";
import { ScrollReveal, Stagger, motion, slideLeft, slideRight, springSmooth } from "@/components/motion";

const TRANSFORMATIONS = [
  {
    title: "Yarra Valley Wedding",
    description: "Full venue transformation with florals, draping & signage",
    before: "/gallery/drapes/drapes-1.jpg",
    after: "/gallery/weddings/weddings-5.jpg",
  },
  {
    title: "Christening Celebration",
    description: "Custom backdrop, dessert table styling & balloon installation",
    before: "/gallery/drapes/drapes-10.jpg",
    after: "/gallery/christenings-baptisms/christenings-baptisms-6.jpg",
  },
];

export function BeforeAfter() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl text-center">
        <ScrollReveal>
          <h2 className="mb-3 font-heading text-3xl sm:text-4xl">The Transformation</h2>
          <p className="mx-auto mb-12 max-w-xl text-base text-charcoal/60">
            See how we turn empty venues into unforgettable spaces.
          </p>
        </ScrollReveal>
        <Stagger className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {TRANSFORMATIONS.map((t) => (
            <motion.div
              key={t.title}
              className="overflow-hidden rounded-xl bg-cream-light"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              transition={springSmooth}
            >
              <div className="grid grid-cols-2 gap-0.5">
                <motion.div
                  className="relative aspect-[4/3] overflow-hidden"
                  variants={slideLeft}
                  transition={springSmooth}
                >
                  <Image
                    src={t.before}
                    alt={`${t.title} — before styling`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <span className="absolute bottom-2 left-2 rounded bg-charcoal/60 px-2 py-0.5 text-xs font-semibold text-white">
                    BEFORE
                  </span>
                </motion.div>
                <motion.div
                  className="relative aspect-[4/3] overflow-hidden"
                  variants={slideRight}
                  transition={springSmooth}
                >
                  <Image
                    src={t.after}
                    alt={`${t.title} — after styling`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <span className="absolute bottom-2 left-2 rounded bg-sage/80 px-2 py-0.5 text-xs font-semibold text-white">
                    AFTER
                  </span>
                </motion.div>
              </div>
              <div className="p-4 text-left">
                <p className="font-heading text-lg font-semibold">{t.title}</p>
                <p className="text-sm text-charcoal/60">{t.description}</p>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
