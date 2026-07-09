"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  TextReveal,
  Magnetic,
  ParallaxImage,
  LineReveal,
  Floating,
  ScrollReveal,
  blurIn,
  easeSlow,
} from "@/components/motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.4 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const transition = { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-charcoal">
      {/* Parallax background with cinematic zoom */}
      <ParallaxImage className="absolute inset-0" speed={0.1}>
        <motion.div
          className="h-full w-full"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <Image
            src="/gallery/hero-main.jpg"
            alt="Event styling by IDO Events Melbourne"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
      </ParallaxImage>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/80" />
      <motion.div
        className="absolute inset-0 bg-charcoal/20"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Script accent with blur-in */}
        <motion.span
          className="mb-4 block font-script text-2xl text-accent-gold-light"
          variants={blurIn}
          transition={easeSlow}
        >
          styled with love
        </motion.span>

        {/* Word-by-word text reveal */}
        <TextReveal
          text="Melbourne's Event Styling & Prop Hire Specialists"
          tag="h1"
          className="mb-6 font-heading text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-7xl"
          delay={0.6}
          staggerDelay={0.05}
        />

        {/* Decorative line */}
        <LineReveal
          className="mx-auto mb-6 h-[1px] w-20 bg-accent-gold-light/60"
          delay={1.2}
        />

        {/* Subtitle fade */}
        <motion.p
          className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl"
          variants={itemVariants}
          transition={{ ...transition, delay: 1.3 }}
        >
          Weddings. Birthdays. Christenings. Corporate. Beautifully styled and delivered to your door.
        </motion.p>

        {/* CTA buttons with magnetic effect */}
        <motion.div
          className="flex flex-wrap justify-center gap-5"
          variants={itemVariants}
          transition={{ ...transition, delay: 1.5 }}
        >
          <Magnetic strength={0.15}>
            <Link href="/hire" className="btn-ghost px-8 py-4 text-[15px] backdrop-blur-sm">
              Browse Our Collection
            </Link>
          </Magnetic>
          <Magnetic strength={0.15}>
            <Link href="/quote" className="btn-primary px-10 py-4 text-base shadow-lg shadow-sage/30">
              Get a Free Quote
            </Link>
          </Magnetic>
        </motion.div>

        {/* Floating sub-text */}
        <motion.p
          className="mt-6 text-sm text-white/40"
          variants={itemVariants}
          transition={{ ...transition, delay: 1.8 }}
        >
          Serving all Melbourne suburbs — setup &amp; pack-down included
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <Floating amplitude={6} duration={2}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[3px] text-white/30">Scroll</span>
            <svg className="h-5 w-5 text-white/30" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </div>
        </Floating>
      </motion.div>
    </section>
  );
}
