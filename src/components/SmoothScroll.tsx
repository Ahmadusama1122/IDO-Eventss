"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    let instance: { destroy: () => void; raf: (time: number) => void } | null = null;
    let rafId: number;

    async function init() {
      try {
        const Lenis = (await import("lenis")).default;
        instance = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        function raf(time: number) {
          instance?.raf(time);
          rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);
      } catch {
        // Lenis not available — graceful fallback to native scroll
      }
    }

    init();

    return () => {
      cancelAnimationFrame(rafId);
      instance?.destroy();
    };
  }, []);

  return null;
}
