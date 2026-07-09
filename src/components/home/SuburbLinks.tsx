"use client";

import Link from "next/link";
import { ScrollReveal, Stagger, motion, fadeUp, springSmooth } from "@/components/motion";

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
    <section className="bg-cream-light px-4 py-14 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl text-center">
        <ScrollReveal>
          <h2 className="mb-6 font-heading text-2xl">We Style Events Across Melbourne</h2>
        </ScrollReveal>
        <Stagger fast className="flex flex-wrap justify-center gap-2">
          {SUBURBS.map((s, i) => (
            <motion.div
              key={s}
              variants={fadeUp}
              transition={{ ...springSmooth, delay: i * 0.02 }}
            >
              <Link
                href={`/event-styling/${toSlug(s)}`}
                className="inline-block rounded-full border border-black/5 bg-white px-4 py-2 text-[13px] font-medium text-charcoal transition-colors hover:border-sage hover:bg-sage hover:text-white"
              >
                {s}
              </Link>
            </motion.div>
          ))}
          <motion.div
            variants={fadeUp}
            transition={{ ...springSmooth, delay: SUBURBS.length * 0.02 }}
          >
            <Link
              href="/contact"
              className="inline-block rounded-full border border-sage/30 bg-white px-4 py-2 text-[13px] font-medium text-sage-dark transition-colors hover:bg-sage hover:text-white"
            >
              + More Areas
            </Link>
          </motion.div>
        </Stagger>
      </div>
    </section>
  );
}
