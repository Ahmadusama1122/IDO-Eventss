"use client";

import {
  ScrollReveal,
  Stagger,
  motion,
  fadeUp,
  scaleIn,
  springBouncy,
  easeOut,
  TextReveal,
  LineReveal,
  blurIn,
  easeSlow,
} from "@/components/motion";

const STEPS = [
  {
    number: "1",
    title: "Browse & Add",
    description: "Explore our collection of props and packages. Add your favourites to your quote list.",
  },
  {
    number: "2",
    title: "Tell Us Your Vision",
    description: "Share your event details — date, venue, style. We'll craft a personalised quote.",
  },
  {
    number: "3",
    title: "We Style It",
    description: "We deliver, set up, and pack down. You enjoy your event. That's it.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal variants={blurIn} transition={easeSlow}>
          <span className="mb-3 block font-script text-lg text-sage">simple as 1, 2, 3</span>
        </ScrollReveal>
        <TextReveal
          text="How It Works"
          tag="h2"
          className="mb-3 font-heading text-3xl sm:text-4xl lg:text-5xl"
        />
        <ScrollReveal delay={0.2}>
          <p className="mx-auto mb-4 max-w-xl text-base text-charcoal/60">
            From browsing to your beautifully styled event in three simple steps.
          </p>
        </ScrollReveal>
        <LineReveal className="mx-auto mb-14 h-[1px] w-16 bg-sage/40" delay={0.4} />

        <Stagger className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative text-center"
              variants={fadeUp}
              transition={easeOut}
            >
              {/* Connecting line between steps (desktop) */}
              {i < STEPS.length - 1 && (
                <LineReveal
                  className="absolute right-0 top-7 hidden h-[1px] w-[calc(50%+20px)] bg-cream sm:block"
                  delay={0.6 + i * 0.2}
                />
              )}
              <motion.div
                className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-cream font-heading text-2xl font-bold text-sage-dark ring-4 ring-cream-light"
                variants={scaleIn}
                transition={springBouncy}
                whileHover={{ scale: 1.15, rotate: 5, transition: { duration: 0.2 } }}
              >
                {step.number}
              </motion.div>
              <h3 className="mb-2 font-heading text-xl">{step.title}</h3>
              <p className="text-sm leading-relaxed text-charcoal/60">{step.description}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
