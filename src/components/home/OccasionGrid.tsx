"use client";

import Link from "next/link";
import { ScrollReveal, Stagger, motion, fadeUp, springSmooth } from "@/components/motion";

const OCCASIONS = [
  { name: "Weddings", href: "/weddings", icon: "💒" },
  { name: "Birthdays", href: "/birthdays", icon: "🎂" },
  { name: "Christenings", href: "/christenings-baptisms", icon: "✝️" },
  { name: "Baby Showers", href: "/baby-showers", icon: "👶" },
  { name: "Engagements", href: "/engagements", icon: "💍" },
  { name: "Corporate", href: "/corporate", icon: "🏢" },
];

export function OccasionGrid() {
  return (
    <section className="bg-cream-light px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl text-center">
        <ScrollReveal>
          <h2 className="mb-3 font-heading text-3xl sm:text-4xl">
            What Are You Celebrating?
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-base text-charcoal/60">
            Every event deserves to feel extraordinary. Choose your occasion and let us bring your vision to life.
          </p>
        </ScrollReveal>
        <Stagger className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
          {OCCASIONS.map((o) => (
            <motion.div
              key={o.href}
              variants={fadeUp}
              transition={springSmooth}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <Link
                href={o.href}
                className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-cream"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sage-light to-cream transition-transform duration-400 group-hover:scale-105">
                  <span className="text-5xl opacity-40">{o.icon}</span>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal/70 to-transparent p-5 sm:p-6">
                  <h3 className="mb-1 font-heading text-xl text-white sm:text-2xl">
                    {o.name}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-gold-light">
                    View Packages →
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
