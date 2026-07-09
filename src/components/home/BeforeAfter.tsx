"use client";

import Image from "next/image";
import {
  ScrollReveal,
  Stagger,
  motion,
  slideLeft,
  slideRight,
  springSmooth,
  TextReveal,
  ImageReveal,
  LineReveal,
  blurIn,
  easeSlow,
} from "@/components/motion";

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
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl text-center">
        <ScrollReveal variants={blurIn} transition={easeSlow}>
          <span className="mb-3 block font-script text-lg text-sage">see the magic</span>
        </ScrollReveal>
        <TextReveal
          text="The Transformation"
          tag="h2"
          className="mb-3 font-heading text-3xl sm:text-4xl lg:text-5xl"
        />
        <ScrollReveal delay={0.2}>
          <p className="mx-auto mb-4 max-w-xl text-base text-charcoal/60">
            See how we turn empty venues into unforgettable spaces.
          </p>
        </ScrollReveal>
        <LineReveal className="mx-auto mb-14 h-[1px] w-16 bg-sage/40" delay={0.4} />

        <Stagger className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {TRANSFORMATIONS.map((t) => (
            <motion.div
              key={t.title}
              className="group overflow-hidden rounded-2xl bg-cream-light transition-shadow duration-500 hover:shadow-lg"
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
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <motion.span
                    className="absolute bottom-2 left-2 rounded-md bg-charcoal/70 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    Before
                  </motion.span>
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
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <motion.span
                    className="absolute bottom-2 left-2 rounded-md bg-sage/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    After
                  </motion.span>
                </motion.div>
              </div>
              <div className="p-5 text-left">
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
