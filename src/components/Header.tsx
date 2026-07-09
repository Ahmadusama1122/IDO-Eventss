"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, ScrollProgress } from "@/components/motion";
import { Logo } from "./Logo";

const NAV_LINKS = [
  {
    label: "Occasions",
    href: "#",
    children: [
      { label: "Weddings", href: "/weddings" },
      { label: "Birthdays", href: "/birthdays" },
      { label: "Christenings & Baptisms", href: "/christenings-baptisms" },
      { label: "Baby Showers", href: "/baby-showers" },
      { label: "Engagements", href: "/engagements" },
      { label: "Corporate", href: "/corporate" },
    ],
  },
  { label: "Hire", href: "/hire" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [occasionsOpen, setOccasionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  const headerHeight = useTransform(scrollY, [0, 100], [80, 64]);
  const smoothHeight = useSpring(headerHeight, { damping: 30, stiffness: 200 });
  const bgOpacity = useTransform(scrollY, [0, 80], [0.85, 0.98]);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`sticky top-0 z-50 border-b transition-shadow duration-300 ${
          scrolled
            ? "border-black/8 shadow-sm shadow-black/5"
            : "border-transparent"
        }`}
        style={{ height: smoothHeight }}
      >
        {/* Glass background */}
        <motion.div
          className="absolute inset-0 backdrop-blur-xl"
          style={{ backgroundColor: `rgba(250, 250, 248, ${bgOpacity.get()})` }}
        />
        <motion.div
          className="absolute inset-0"
          style={{ opacity: bgOpacity, backgroundColor: "rgba(250, 250, 248, 0.92)" }}
        />

        <div className="relative mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <Logo />
          </motion.div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link, i) =>
              link.children ? (
                <motion.div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOccasionsOpen(true)}
                  onMouseLeave={() => setOccasionsOpen(false)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <button className="flex items-center gap-1 py-2 text-sm font-medium text-charcoal transition-colors hover:text-sage-dark">
                    {link.label}
                    <motion.svg
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      animate={{ rotate: occasionsOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  {/* Dropdown with animation */}
                  {occasionsOpen && (
                    <motion.div
                      className="absolute left-0 top-full min-w-[220px] overflow-hidden rounded-xl border border-black/5 bg-white/95 pt-1 pb-1 shadow-xl backdrop-blur-lg"
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      {link.children.map((child, ci) => (
                        <motion.div
                          key={child.href}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: ci * 0.04, duration: 0.25 }}
                        >
                          <Link
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-charcoal transition-colors hover:bg-sage/8 hover:text-sage-dark"
                          >
                            {child.label}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className="relative text-sm font-medium text-charcoal transition-colors hover:text-sage-dark"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )
            )}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <Link href="/quote" className="btn-primary hidden sm:inline-block">
                Enquire Now
              </Link>
            </motion.div>
            <button
              className="flex h-10 w-10 items-center justify-center lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll progress bar */}
        <ScrollProgress className="absolute bottom-0 left-0 h-[2px] w-full bg-sage/70" />
      </motion.header>

      {/* Mobile menu with slide animation */}
      {mobileOpen && (
        <motion.div
          className="fixed inset-x-0 top-[64px] z-40 border-t border-black/5 bg-white/98 px-4 pb-6 pt-2 backdrop-blur-xl lg:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {NAV_LINKS.map((link, i) =>
            link.children ? (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
              >
                <div className="py-3 text-sm font-semibold uppercase tracking-wider text-sage-dark">
                  {link.label}
                </div>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block py-2 pl-4 text-sm text-charcoal hover:text-sage-dark"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  className="block py-3 text-sm font-medium text-charcoal hover:text-sage-dark"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            )
          )}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <Link
              href="/quote"
              className="btn-primary mt-4 block w-full text-center"
              onClick={() => setMobileOpen(false)}
            >
              Enquire Now
            </Link>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
