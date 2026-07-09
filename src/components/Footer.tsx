import Link from "next/link";

const OCCASION_LINKS = [
  { label: "Weddings", href: "/weddings" },
  { label: "Birthdays", href: "/birthdays" },
  { label: "Christenings", href: "/christenings-baptisms" },
  { label: "Baby Showers", href: "/baby-showers" },
  { label: "Engagements", href: "/engagements" },
  { label: "Corporate", href: "/corporate" },
];

const SERVICE_LINKS = [
  { label: "Prop Hire", href: "/hire" },
  { label: "Event Styling", href: "/hire" },
  { label: "Setup & Pack Down", href: "/about" },
  { label: "Delivery", href: "/about" },
];

const SUBURB_LINKS = [
  { label: "Oakleigh", href: "/event-styling/oakleigh" },
  { label: "Preston", href: "/event-styling/preston" },
  { label: "Coburg", href: "/event-styling/coburg" },
  { label: "Doncaster", href: "/event-styling/doncaster" },
  { label: "Point Cook", href: "/event-styling/point-cook" },
  { label: "+ More Areas", href: "/contact" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const SOCIALS = [
  { label: "IG", href: "https://www.instagram.com/ido.eventss/" },
  { label: "FB", href: "https://www.facebook.com/balloonheadquarters/" },
  { label: "TK", href: "#" },
  { label: "PT", href: "#" },
];

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="mb-4 font-body text-sm font-bold uppercase tracking-wider text-white">
        {title}
      </h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-sage-light"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-10">
        <div className="mb-12 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="font-heading text-[28px] font-bold leading-none text-white">
              iDo<span className="text-sage">.</span>
            </div>
            <div className="mb-3 -mt-1 font-body text-[11px] font-medium tracking-[4px] text-sage-light">
              EVENTS
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              Melbourne&apos;s trusted event styling and prop hire specialists. Weddings,
              birthdays, christenings, and more — beautifully styled and delivered to your door.
            </p>
            <a href="mailto:contact@idoeventss.com" className="mt-3 inline-block text-sm text-sage-light transition-colors hover:text-white">
              contact@idoeventss.com
            </a>
          </div>

          <FooterColumn title="Occasions" links={OCCASION_LINKS} />
          <FooterColumn title="Services" links={SERVICE_LINKS} />
          <FooterColumn title="Areas We Serve" links={SUBURB_LINKS} />
          <FooterColumn title="Company" links={COMPANY_LINKS} />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-[13px] text-white/50">
            &copy; {new Date().getFullYear()} IDO Events. All rights reserved. ABN: XX XXX XXX XXX
          </p>
          <div className="flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-sm text-white/60 transition-colors hover:border-sage hover:bg-sage hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
