import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Links — IDO Events Melbourne",
  description:
    "All our important links in one place. Browse our gallery, request a quote, hire props, and follow us on social media.",
};

const LINKS = [
  {
    label: "Get a Free Quote",
    href: "/quote",
    description: "Tell us about your event",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    primary: true,
  },
  {
    label: "Browse Our Gallery",
    href: "/gallery",
    description: "See our latest work",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
      </svg>
    ),
    primary: false,
  },
  {
    label: "Hire Collection",
    href: "/hire",
    description: "Props, backdrops & more",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    primary: false,
  },
  {
    label: "About Us",
    href: "/about",
    description: "Our story",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    primary: false,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/idoevents",
    description: "@idoevents",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    primary: false,
    external: true,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/idoevents",
    description: "IDO Events",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    primary: false,
    external: true,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@idoevents",
    description: "@idoevents",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
    primary: false,
    external: true,
  },
];

export default function LinksPage() {
  return (
    <div className="flex min-h-[80vh] items-start justify-center bg-cream-light px-4 py-12 sm:px-6">
      <div className="w-full max-w-md">
        {/* Profile area */}
        <div className="mb-8 text-center">
          <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full ring-3 ring-sage/30">
            <Image
              src="/gallery/weddings/weddings-1.jpg"
              alt="IDO Events Melbourne"
              fill
              className="object-cover"
              sizes="96px"
              priority
            />
          </div>
          <div className="font-heading text-[28px] font-bold leading-none text-charcoal">
            iDo<span className="text-sage">.</span>
          </div>
          <div className="-mt-0.5 font-body text-[11px] font-medium tracking-[4px] text-sage-dark">
            EVENTS
          </div>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
            Melbourne&apos;s Event Styling &amp; Prop Hire Specialists
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3">
          {LINKS.map((link) => {
            const isExternal = "external" in link && link.external;
            const Component = isExternal ? "a" : Link;
            const extraProps = isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <Component
                key={link.label}
                href={link.href}
                {...extraProps}
                className={`flex w-full items-center gap-4 rounded-xl px-5 py-4 font-body text-sm font-semibold transition-all ${
                  link.primary
                    ? "bg-sage text-white shadow-sm hover:bg-sage-dark hover:shadow-md"
                    : "bg-white text-charcoal shadow-sm ring-1 ring-black/5 hover:bg-cream hover:shadow-md"
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                    link.primary
                      ? "bg-white/20 text-white"
                      : "bg-sage/10 text-sage"
                  }`}
                >
                  {link.icon}
                </span>
                <span className="flex-1">
                  <span className="block">{link.label}</span>
                  <span
                    className={`block text-xs font-normal ${
                      link.primary ? "text-white/70" : "text-charcoal/40"
                    }`}
                  >
                    {link.description}
                  </span>
                </span>
                {isExternal && (
                  <svg
                    className={`h-4 w-4 shrink-0 ${
                      link.primary ? "text-white/50" : "text-charcoal/30"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                )}
              </Component>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="text-xs text-charcoal/30">
            &copy; {new Date().getFullYear()} IDO Events. Melbourne, Australia.
          </p>
        </div>
      </div>
    </div>
  );
}
