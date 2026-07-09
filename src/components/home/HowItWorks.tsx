"use client";

import { ScrollReveal, Stagger, motion, fadeUp, scaleIn, springBouncy, easeOut } from "@/components/motion";

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
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <h2 className="mb-3 font-heading text-3xl sm:text-4xl">How It Works</h2>
          <p className="mx-auto mb-12 max-w-xl text-base text-charcoal/60">
            From browsing to your beautifully styled event in three simple steps.
          </p>
        </ScrollReveal>
        <Stagger className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {STEPS.map((step) => (
            <motion.div
              key={step.number}
              className="text-center"
              variants={fadeUp}
              transition={easeOut}
            >
              <motion.div
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cream font-heading text-2xl font-bold text-sage-dark"
                variants={scaleIn}
                transition={springBouncy}
              >
                {step.number}
              </motion.div>
              <h3 className="mb-2 font-heading text-xl">{step.title}</h3>
              <p className="text-sm text-charcoal/60">{step.description}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
