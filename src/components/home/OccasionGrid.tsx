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
  LineReveal,
  blurIn,
  easeSlow,
} from "@/components/motion";

const OCCASIONS = [
  { name: "Weddings", href: "/weddings", image: "/gallery/weddings/weddings-5.jpg" },
  { name: "Birthdays", href: "/birthdays", image: "/gallery/birthdays/birthdays-8.jpg" },
  { name: "Christenings", href: "/christenings-baptisms", image: "/gallery/christenings-baptisms/christenings-baptisms-3.jpg" },
  { name: "Baby Showers", href: "/baby-showers", image: "/gallery/baby-showers/baby-showers-2.jpg" },
  { name: "Engagements", href: "/engagements", image: "/gallery/engagements/engagements-5.jpg" },
  { name: "Corporate", href: "/corporate", image: "/gallery/corporate/corporate-2.jpg" },
];

export function OccasionGrid() {
  return (
    <section className="bg-cream-light px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl text-center">
        <ScrollReveal variants={blurIn} transition={easeSlow}>
          <span className="mb-3 block font-script text-lg text-sage">every moment matters</span>
        </ScrollReveal>
        <TextReveal
          text="What Are You Celebrating?"
          tag="h2"
          className="mb-3 font-heading text-3xl sm:text-4xl lg:text-5xl"
        />
        <ScrollReveal delay={0.3}>
          <p className="mx-auto mb-4 max-w-xl text-base text-charcoal/60">
            Every event deserves to feel extraordinary. Choose your occasion and let us bring your vision to life.
          </p>
        </ScrollReveal>
        <LineReveal className="mx-auto mb-14 h-[1px] w-16 bg-sage/40" delay={0.5} />

        <Stagger className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
          {OCCASIONS.map((o, i) => (
            <motion.div
              key={o.href}
              variants={fadeUp}
              transition={springSmooth}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Link
                href={o.href}
                className="group relative block aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <ImageReveal direction="up" delay={i * 0.08} className="h-full w-full">
                  <Image
                    src={o.image}
                    alt={`${o.name} event styling by IDO Events`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                </ImageReveal>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
                  <h3 className="mb-1 font-heading text-xl text-white sm:text-2xl">
                    {o.name}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-gold-light transition-[letter-spacing] duration-300 group-hover:tracking-[0.2em]">
                    View Packages &rarr;
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
