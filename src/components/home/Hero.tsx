"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "@/components/motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-charcoal">
      {/* Animated background photo zoom */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <Image
          src="/gallery/drapes/drapes-7.jpg"
          alt="Elegant drape styling by IDO Events Melbourne"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-charcoal/55" />

      <motion.div
        className="relative z-10 max-w-3xl px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className="mb-3 block font-script text-xl text-accent-gold-light"
          variants={itemVariants}
          transition={transition}
        >
          styled with love
        </motion.span>
        <motion.h1
          className="mb-5 font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
          variants={itemVariants}
          transition={transition}
        >
          Melbourne&apos;s Event Styling &amp; Prop Hire Specialists
        </motion.h1>
        <motion.p
          className="mx-auto mb-9 max-w-xl text-lg text-white/85"
          variants={itemVariants}
          transition={transition}
        >
          Weddings. Birthdays. Christenings. Corporate. Beautifully styled and delivered to your door.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={itemVariants}
          transition={transition}
        >
          <Link href="/hire" className="btn-ghost px-7 py-3.5 text-[15px]">
            Browse Our Collection
          </Link>
          <Link href="/quote" className="btn-primary px-8 py-4 text-base">
            Get a Free Quote
          </Link>
        </motion.div>
        <motion.p
          className="mt-5 text-sm text-white/50"
          variants={itemVariants}
          transition={transition}
        >
          Serving all Melbourne suburbs — setup &amp; pack-down included
        </motion.p>
      </motion.div>
    </section>
  );
}
