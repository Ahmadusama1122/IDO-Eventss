"use client";

import Link from "next/link";
import {
  ScrollReveal,
  Stagger,
  motion,
  fadeUp,
  springSmooth,
  TextReveal,
  Marquee,
  blurIn,
  easeSlow,
} from "@/components/motion";

const SUBURBS = [
  "Oakleigh", "Preston", "Reservoir", "Coburg", "Brunswick", "Northcote",
  "Bundoora", "Mill Park", "Epping", "Craigieburn", "Doncaster", "Templestowe",
  "Essendon", "Keilor", "Point Cook", "Werribee", "Tarneit", "Sunshine",
  "Dandenong", "Springvale", "Narre Warren", "Berwick", "Cranbourne",
];

function toSlug(suburb: string) {
  return suburb.toLowerCase().replace(/\s+/g, "-");
}

export function SuburbLinks() {
  return (
    <section className="bg-cream-light px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl text-center">
        <ScrollReveal variants={blurIn} transition={easeSlow}>
          <span className="mb-2 block font-script text-lg text-sage">across the city</span>
        </ScrollReveal>
        <TextReveal
          text="We Style Events Across Melbourne"
          tag="h2"
          className="mb-8 font-heading text-2xl sm:text-3xl"
        />

        <Stagger fast className="flex flex-wrap justify-center gap-2.5">
          {SUBURBS.map((s, i) => (
            <motion.div
              key={s}
              variants={fadeUp}
              transition={{ ...springSmooth, delay: i * 0.02 }}
              whileHover={{ scale: 1.08, transition: { type: "spring", damping: 15, stiffness: 300 } }}
            >
              <Link
                href={`/event-styling/${toSlug(s)}`}
                className="inline-block rounded-full border border-black/5 bg-white px-4 py-2 text-[13px] font-medium text-charcoal shadow-sm transition-colors duration-300 hover:border-sage hover:bg-sage hover:text-white hover:shadow-md hover:shadow-sage/15"
              >
                {s}
              </Link>
            </motion.div>
          ))}
          <motion.div
            variants={fadeUp}
            transition={{ ...springSmooth, delay: SUBURBS.length * 0.02 }}
            whileHover={{ scale: 1.08 }}
          >
            <Link
              href="/contact"
              className="inline-block rounded-full border border-sage/30 bg-white px-4 py-2 text-[13px] font-medium text-sage-dark shadow-sm transition-colors duration-300 hover:bg-sage hover:text-white hover:shadow-md"
            >
              + More Areas
            </Link>
          </motion.div>
        </Stagger>
      </div>
    </section>
  );
}
