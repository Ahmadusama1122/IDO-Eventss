"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  useScroll,
  useSpring,
  useReducedMotion,
  animate,
  type Variants,
  type Transition,
} from "framer-motion";
import { useRef, useEffect, useState, useCallback, type ReactNode, type MouseEvent } from "react";

/* ═══════════════════════════════════════════════════════════
   VARIANT PRESETS
   ═══════════════════════════════════════════════════════════ */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

/* Premium: clip-reveal from bottom */
export const clipRevealUp: Variants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)" },
  visible: { clipPath: "inset(0% 0% 0% 0%)" },
};

/* Premium: clip-reveal from left */
export const clipRevealLeft: Variants = {
  hidden: { clipPath: "inset(0% 100% 0% 0%)" },
  visible: { clipPath: "inset(0% 0% 0% 0%)" },
};

/* Premium: blur + fade */
export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)" },
  visible: { opacity: 1, filter: "blur(0px)" },
};

/* ═══════════════════════════════════════════════════════════
   TRANSITION PRESETS
   ═══════════════════════════════════════════════════════════ */

export const springSmooth: Transition = { type: "spring", damping: 25, stiffness: 120 };
export const springBouncy: Transition = { type: "spring", damping: 15, stiffness: 100 };
export const springSnappy: Transition = { type: "spring", damping: 30, stiffness: 300 };
export const easeOut: Transition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };
export const easeSlow: Transition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };
export const easeClip: Transition = { duration: 0.9, ease: [0.77, 0, 0.175, 1] as [number, number, number, number] };

/* ═══════════════════════════════════════════════════════════
   SCROLL REVEAL
   ═══════════════════════════════════════════════════════════ */

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
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

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

/* ═══════════════════════════════════════════════════════════
   STAGGER CONTAINER
   ═══════════════════════════════════════════════════════════ */

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
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

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

/* ═══════════════════════════════════════════════════════════
   ANIMATED COUNTER
   ═══════════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════════
   PREMIUM: TEXT REVEAL (word-by-word)
   ═══════════════════════════════════════════════════════════ */

interface TextRevealProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
}

export function TextReveal({
  text,
  className,
  tag = "h2",
  delay = 0,
  staggerDelay = 0.04,
  once = true,
}: TextRevealProps) {
  const prefersReduced = useReducedMotion();
  const words = text.split(" ");
  const Tag = tag;

  if (prefersReduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  const containerVars: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const wordVars: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <Tag className={className}>
      <motion.span
        className="flex flex-wrap justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.3 }}
        variants={containerVars}
      >
        {words.map((word, i) => (
          <span key={i} className="overflow-hidden inline-block">
            <motion.span className="inline-block" variants={wordVars}>
              {word}
            </motion.span>
            {i < words.length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

/* ═══════════════════════════════════════════════════════════
   PREMIUM: PARALLAX SCROLL
   ═══════════════════════════════════════════════════════════ */

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  offset?: number;
}

export function Parallax({ children, className, speed = 0.3, offset = 100 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset * speed, -offset * speed]);
  const smoothY = useSpring(y, { damping: 30, stiffness: 100 });

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <motion.div style={{ y: smoothY }}>{children}</motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PREMIUM: PARALLAX IMAGE (with scale)
   ═══════════════════════════════════════════════════════════ */

interface ParallaxImageProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxImage({ children, className, speed = 0.15 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.05, 1]);

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <motion.div style={{ y, scale, width: "100%", height: "100%" }}>
        {children}
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PREMIUM: MAGNETIC BUTTON
   ═══════════════════════════════════════════════════════════ */

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function Magnetic({ children, className, strength = 0.3 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { damping: 20, stiffness: 300 });
  const smoothY = useSpring(y, { damping: 20, stiffness: 300 });

  const handleMouse = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((e.clientX - centerX) * strength);
      y.set((e.clientY - centerY) * strength);
    },
    [x, y, strength]
  );

  const handleLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: smoothX, y: smoothY }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PREMIUM: IMAGE WIPE REVEAL
   ═══════════════════════════════════════════════════════════ */

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
  once?: boolean;
}

export function ImageReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  once = true,
}: ImageRevealProps) {
  const variants: Record<string, Variants> = {
    up: clipRevealUp,
    left: clipRevealLeft,
    right: {
      hidden: { clipPath: "inset(0% 0% 0% 100%)" },
      visible: { clipPath: "inset(0% 0% 0% 0%)" },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={variants[direction]}
      transition={{ ...easeClip, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PREMIUM: FLOATING ELEMENT
   ═══════════════════════════════════════════════════════════ */

interface FloatingProps {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
}

export function Floating({ children, className, amplitude = 10, duration = 4 }: FloatingProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [-amplitude, amplitude, -amplitude] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PREMIUM: SCROLL PROGRESS (for section progress bars)
   ═══════════════════════════════════════════════════════════ */

interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({ className }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className={className}
      style={{
        scaleX,
        transformOrigin: "0%",
      }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════
   PREMIUM: HORIZONTAL SCROLL MARQUEE
   ═══════════════════════════════════════════════════════════ */

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "left" | "right";
}

export function Marquee({ children, className, speed = 30, direction = "left" }: MarqueeProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return (
      <div className={`overflow-hidden ${className ?? ""}`}>
        <div className="flex w-max gap-8">{children}</div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="flex w-max gap-8"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PREMIUM: SPLIT LINE REVEAL
   ═══════════════════════════════════════════════════════════ */

interface LineRevealProps {
  className?: string;
  delay?: number;
  once?: boolean;
}

export function LineReveal({ className, delay = 0, once = true }: LineRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once, amount: 0.5 }}
      transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] as [number, number, number, number], delay }}
      style={{ transformOrigin: "left" }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════
   PREMIUM: SMOOTH SCROLL (Lenis integration)
   ═══════════════════════════════════════════════════════════ */

export function useSmoothScroll() {
  const [lenis, setLenis] = useState<unknown>(null);

  useEffect(() => {
    let instance: { destroy: () => void; raf: (time: number) => void } | null = null;

    async function init() {
      try {
        const Lenis = (await import("lenis")).default;
        instance = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        setLenis(instance);

        function raf(time: number) {
          instance?.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      } catch {
        // Lenis not available, graceful fallback
      }
    }

    init();

    return () => {
      instance?.destroy();
    };
  }, []);

  return lenis;
}

/* ═══════════════════════════════════════════════════════════
   RE-EXPORTS
   ═══════════════════════════════════════════════════════════ */
export { motion, useScroll, useTransform, useSpring, useMotionValue, useInView, useReducedMotion };
