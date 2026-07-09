"use client";

import { Stagger, motion, fadeUp, easeOut, AnimatedCounter, Marquee } from "@/components/motion";

const STATS = [
  { value: "200+", label: "Events Styled", stars: false },
  { value: "5.0", label: "Google Rating", stars: true },
  { value: "30+", label: "Melbourne Suburbs", stars: false },
  { value: "<1hr", label: "Response Time", stars: false },
];

export function ProofBand() {
  return (
    <div className="relative overflow-hidden bg-charcoal px-4 py-14 sm:px-6">
      {/* Subtle animated grain/noise overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />

      <Stagger className="relative mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-10 sm:gap-16">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex items-center gap-10 sm:gap-16"
            variants={fadeUp}
            transition={easeOut}
          >
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.08, transition: { type: "spring", damping: 15, stiffness: 200 } }}
            >
              {stat.stars && (
                <motion.div
                  className="mb-1 text-xl tracking-wider text-accent-gold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", damping: 12 }}
                >
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </motion.div>
              )}
              <AnimatedCounter
                value={stat.value}
                className="font-heading text-4xl font-bold text-white sm:text-5xl"
              />
              <div className="mt-1 text-[11px] uppercase tracking-[3px] text-white/40">{stat.label}</div>
            </motion.div>
            {i < STATS.length - 1 && (
              <div className="hidden h-14 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent sm:block" />
            )}
          </motion.div>
        ))}
      </Stagger>
    </div>
  );
}
