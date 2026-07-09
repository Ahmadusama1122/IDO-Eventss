"use client";

import { motion, useInView, useMotionValue, useTransform, animate, type Variants, type Transition } from "framer-motion";
import { useRef, useEffect, type ReactNode } from "react";

/* ── Shared variant presets ── */

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

export const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const staggerContainerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

/* ── Transition presets ── */

export const springSmooth = { type: "spring" as const, damping: 25, stiffness: 120 };
export const springBouncy = { type: "spring" as const, damping: 15, stiffness: 100 };
export const easeOut = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

/* ── ScrollReveal wrapper ── */

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  transition?: Transition;
  delay?: number;
  once?: boolean;
  amount?: number;
}

export function ScrollReveal({
  children,
  className,
  variants = fadeUp,
  transition = easeOut,
  delay = 0,
  once = true,
  amount = 0.2,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger wrapper ── */

interface StaggerProps {
  children: ReactNode;
  className?: string;
  fast?: boolean;
  once?: boolean;
  amount?: number;
}

export function Stagger({
  children,
  className,
  fast = false,
  once = true,
  amount = 0.2,
}: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={fast ? staggerContainerFast : staggerContainer}
    >
      {children}
    </motion.div>
  );
}

/* ── Animated counter ── */

interface CounterProps {
  value: string;
  className?: string;
}

export function AnimatedCounter({ value, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const numericPart = parseFloat(value.replace(/[^0-9.]/g, ""));
  const prefix = value.match(/^[^0-9.]*/)?.[0] ?? "";
  const suffix = value.match(/[^0-9.]*$/)?.[0] ?? "";
  const hasDecimal = value.includes(".");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) =>
    hasDecimal ? v.toFixed(1) : Math.round(v).toString()
  );

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, numericPart, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    });
    return controls.stop;
  }, [isInView, count, numericPart]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

/* ── Re-export motion for direct use ── */
export { motion };
