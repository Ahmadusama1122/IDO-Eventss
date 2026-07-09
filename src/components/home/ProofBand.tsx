"use client";

import { Stagger, motion, fadeUp, easeOut, AnimatedCounter } from "@/components/motion";

const STATS = [
  { value: "200+", label: "Events Styled", stars: false },
  { value: "5.0", label: "Google Rating", stars: true },
  { value: "30+", label: "Melbourne Suburbs", stars: false },
  { value: "<1hr", label: "Response Time", stars: false },
];

export function ProofBand() {
  return (
    <div className="bg-charcoal px-4 py-12 sm:px-6">
      <Stagger className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 sm:gap-16">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex items-center gap-8 sm:gap-16"
            variants={fadeUp}
            transition={easeOut}
          >
            <div className="text-center">
              {stat.stars && (
                <div className="mb-1 text-xl tracking-wider text-accent-gold">★★★★★</div>
              )}
              <AnimatedCounter
                value={stat.value}
                className="font-heading text-4xl font-bold text-white"
              />
              <div className="mt-1 text-xs uppercase tracking-wider text-white/50">{stat.label}</div>
            </div>
            {i < STATS.length - 1 && (
              <div className="hidden h-12 w-px bg-white/15 sm:block" />
            )}
          </motion.div>
        ))}
      </Stagger>
    </div>
  );
}
