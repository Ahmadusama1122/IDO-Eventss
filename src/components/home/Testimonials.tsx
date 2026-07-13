"use client";

import {
  ScrollReveal,
  Stagger,
  motion,
  fadeUp,
  springSmooth,
  TextReveal,
  LineReveal,
  blurIn,
  easeSlow,
  scaleIn,
  springBouncy,
} from "@/components/motion";

const REVIEWS = [
  {
    text: "IDO Events transformed our wedding venue beyond anything I imagined. The team was professional, creative, and so easy to work with. Every detail was perfect.",
    name: "Sarah M.",
    event: "Wedding — Brighton Savoy",
    initial: "S",
  },
  {
    text: "Our daughter's christening was absolutely beautiful. They understood our vision perfectly and the setup was stunning. Highly recommend for any celebration.",
    name: "Maria K.",
    event: "Christening — Oakleigh",
    initial: "M",
  },
  {
    text: "Booked IDO for our corporate end-of-year event. The styling elevated the whole experience. Our team was blown away. Will be using them again next year.",
    name: "James T.",
    event: "Corporate — South Wharf",
    initial: "J",
  },
];

export function Testimonials() {
  return (
    <section className="bg-cream-light px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl text-center">
        <ScrollReveal variants={blurIn} transition={easeSlow}>
          <span className="mb-3 block font-script text-lg text-sage">real stories</span>
        </ScrollReveal>
        <TextReveal
          text="What Our Clients Say"
          tag="h2"
          className="mb-3 text-balance font-heading text-3xl sm:text-4xl lg:text-5xl"
        />
        <ScrollReveal delay={0.2}>
          <p className="mx-auto mb-4 max-w-xl text-base text-charcoal/70">
            Real reviews from real events across Melbourne.
          </p>
        </ScrollReveal>
        <LineReveal className="mx-auto mb-14 h-[1px] w-16 bg-sage/40" delay={0.4} />

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <motion.div
              key={r.name}
              className="group rounded-2xl bg-white p-8 text-left shadow-sm transition-shadow duration-500 hover:shadow-xl"
              variants={fadeUp}
              transition={springSmooth}
              whileHover={{ y: -6, transition: { type: "spring", damping: 20, stiffness: 300 } }}
            >
              {/* Star rating with pop-in */}
              <motion.div
                className="mb-4 text-base text-accent-gold"
                variants={scaleIn}
                transition={springBouncy}
              >
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </motion.div>
              <p className="mb-6 text-[15px] leading-relaxed italic text-charcoal/70">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <motion.div
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-sage/10 font-bold text-sage-dark ring-2 ring-sage/20"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", damping: 10, stiffness: 200 }}
                >
                  {r.initial}
                </motion.div>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-charcoal/70">{r.event}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
