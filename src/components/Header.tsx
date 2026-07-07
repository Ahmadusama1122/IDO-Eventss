"use client";

import { useState } from "react";
import Link from "next/link";
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

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-warm-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOccasionsOpen(true)}
                onMouseLeave={() => setOccasionsOpen(false)}
              >
                <button className="flex items-center gap-1 py-2 text-sm font-medium text-charcoal transition-colors hover:text-sage-dark">
                  {link.label}
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {occasionsOpen && (
                  <div className="absolute left-0 top-full min-w-[220px] rounded-lg border border-black/5 bg-white pt-2 pb-2 shadow-lg">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-charcoal transition-colors hover:bg-cream-light hover:text-sage-dark"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal transition-colors hover:text-sage-dark"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <Link href="/quote" className="btn-primary hidden sm:inline-block">
            Enquire Now
          </Link>
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-black/5 bg-white px-4 pb-4 lg:hidden">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label}>
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
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-sm font-medium text-charcoal hover:text-sage-dark"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/quote"
            className="btn-primary mt-4 block w-full text-center"
            onClick={() => setMobileOpen(false)}
          >
            Enquire Now
          </Link>
        </div>
      )}
    </header>
  );
}
