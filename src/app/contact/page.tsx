import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with IDO Events Melbourne. Phone, email, or visit us — we respond within the hour. Event styling and prop hire across 30+ Melbourne suburbs.",
  openGraph: {
    title: "Contact IDO Events Melbourne",
    description:
      "Reach out for a free quote on event styling and prop hire. We serve 30+ Melbourne suburbs with full setup and pack-down.",
  },
};

const CONTACT_DETAILS = [
  {
    label: "Phone",
    value: "0400 000 000",
    href: "tel:0400000000",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "hello@idoevents.com.au",
    href: "mailto:hello@idoevents.com.au",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@idoevents",
    href: "https://instagram.com/idoevents",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Melbourne, VIC",
    href: null,
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: "Business Hours",
    value: "Mon–Fri 9am–6pm, Sat 10am–4pm",
    href: null,
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-charcoal">
        <Image
          src="/gallery/christenings-baptisms/christenings-baptisms-3.jpg"
          alt="Event styling by IDO Events Melbourne"
          fill
          className="object-cover opacity-35"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative z-10 px-6 text-center">
          <span className="mb-3 block font-script text-xl text-accent-gold-light">
            we&apos;d love to hear from you
          </span>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Get In Touch
          </h1>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          {/* Left: Contact details */}
          <div>
            <h2 className="mb-2 font-heading text-3xl font-bold text-charcoal">
              Contact Details
            </h2>
            <p className="mb-8 leading-relaxed text-charcoal/60">
              Whether you have a question about our services, want to discuss your
              upcoming event, or are ready to request a quote, we are here to help.
              We typically respond within the hour during business hours.
            </p>

            <div className="space-y-6">
              {CONTACT_DETAILS.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/10 text-sage">
                    {detail.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-charcoal/40">
                      {detail.label}
                    </div>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-charcoal transition-colors hover:text-sage-dark"
                        target={detail.href.startsWith("http") ? "_blank" : undefined}
                        rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span className="text-charcoal">{detail.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-xl bg-cream-light p-6">
              <h3 className="mb-2 font-heading text-xl font-bold text-charcoal">
                Quick Quote
              </h3>
              <p className="mb-4 text-sm text-charcoal/60">
                For the fastest response, use our online quote form with all your
                event details.
              </p>
              <Link href="/quote" className="btn-primary">
                Request a Quote →
              </Link>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
            <h2 className="mb-6 font-heading text-2xl font-bold text-charcoal">
              Send Us a Message
            </h2>
            <form action="/quote" method="GET" className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-sm font-medium text-charcoal"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  placeholder="Jane Smith"
                  className="w-full rounded-lg border border-black/10 bg-warm-white px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/30 focus:border-sage focus:ring-1 focus:ring-sage"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-sm font-medium text-charcoal"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  placeholder="jane@example.com"
                  className="w-full rounded-lg border border-black/10 bg-warm-white px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/30 focus:border-sage focus:ring-1 focus:ring-sage"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-1.5 block text-sm font-medium text-charcoal"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  placeholder="0400 000 000"
                  className="w-full rounded-lg border border-black/10 bg-warm-white px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/30 focus:border-sage focus:ring-1 focus:ring-sage"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm font-medium text-charcoal"
                >
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your event..."
                  className="w-full resize-none rounded-lg border border-black/10 bg-warm-white px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/30 focus:border-sage focus:ring-1 focus:ring-sage"
                />
              </div>
              <button type="submit" className="btn-primary w-full text-center">
                Send Message
              </button>
              <p className="text-center text-xs text-charcoal/40">
                This will redirect you to our quote form with your details
                pre-filled.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-cream-light px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-center font-heading text-2xl font-bold text-charcoal">
            Serving All of Melbourne
          </h2>
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403218.6896822937!2d144.56293041887878!3d-37.81362293416498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IDO Events Melbourne service area"
            />
          </div>
          <p className="mt-4 text-center text-sm text-charcoal/50">
            We deliver and style events across 30+ Melbourne suburbs including
            Oakleigh, Preston, Coburg, Doncaster, Point Cook, and many more.
          </p>
        </div>
      </section>
    </>
  );
}
