"use client";

import Link from "next/link";
import { ScrollReveal, motion, fadeUp, easeOut } from "@/components/motion";

export function CtaBand() {
  return (
    <div className="bg-sage px-4 py-16 text-center sm:px-6">
      <ScrollReveal variants={fadeUp} transition={easeOut}>
        <span className="mb-2 block font-script text-xl text-white/80">
          let&apos;s create something beautiful
        </span>
        <h2 className="mb-2 font-heading text-3xl font-bold text-white sm:text-4xl">
          Ready to Bring Your Vision to Life?
        </h2>
        <p className="mb-7 text-white/80">
          Tell us about your event and we&apos;ll get back to you within the hour.
        </p>
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block"
        >
          <Link href="/quote" className="btn-white">
            Get a Free Quote →
          </Link>
        </motion.div>
      </ScrollReveal>
    </div>
  );
}
