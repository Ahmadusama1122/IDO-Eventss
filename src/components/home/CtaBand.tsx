"use client";

import Link from "next/link";
import {
  ScrollReveal,
  motion,
  fadeUp,
  easeOut,
  Magnetic,
  TextReveal,
  Floating,
  blurIn,
  easeSlow,
} from "@/components/motion";

export function CtaBand() {
  return (
    <div className="relative overflow-hidden bg-sage px-4 py-20 text-center sm:px-6">
      {/* Animated background circles */}
      <motion.div
        className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5"
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-white/5"
        animate={{ scale: [1, 1.3, 1], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative">
        <ScrollReveal variants={blurIn} transition={easeSlow}>
          <span className="mb-3 block font-script text-xl text-white/70">
            let&apos;s create something beautiful
          </span>
        </ScrollReveal>
        <TextReveal
          text="Ready to Bring Your Vision to Life?"
          tag="h2"
          className="mb-3 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          delay={0.2}
        />
        <ScrollReveal delay={0.4}>
          <p className="mx-auto mb-9 max-w-lg text-white/75">
            Tell us about your event and we&apos;ll get back to you within the hour.
          </p>
        </ScrollReveal>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, ...easeOut }}
        >
          <Magnetic strength={0.2}>
            <Floating amplitude={3} duration={3}>
              <Link href="/quote" className="btn-white shadow-xl shadow-black/10">
                Get a Free Quote &rarr;
              </Link>
            </Floating>
          </Magnetic>
        </motion.div>
      </div>
    </div>
  );
}
