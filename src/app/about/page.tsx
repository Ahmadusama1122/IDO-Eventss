import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Our Story",
  description:
    "Meet the family behind IDO Events. Melbourne-based event styling and prop hire specialists serving 200+ events across 30+ suburbs with personalised service.",
  openGraph: {
    title: "About IDO Events — Melbourne Event Styling",
    description:
      "Family-run, Melbourne-based event styling and prop hire. Full setup and pack-down included across 30+ suburbs.",
  },
};

const WHY_CHOOSE_US = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Full Setup & Pack-Down",
    description:
      "We handle everything from delivery and installation to pack-down at the end of your event. You never lift a finger.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "30+ Melbourne Suburbs",
    description:
      "From the inner city to the outer suburbs, we deliver and style events across the greater Melbourne area.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Personalised Service",
    description:
      "Every event is unique. We work closely with you to understand your vision and bring it to life with care and attention to detail.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Quality Props & Styling",
    description:
      "Our curated collection of premium props, backdrops, draping, and decor ensures your event looks polished and beautiful.",
  },
];

const STATS = [
  { value: "200+", label: "Events Styled" },
  { value: "5.0", label: "Google Rating", stars: true },
  { value: "30+", label: "Melbourne Suburbs" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-charcoal">
        <Image
          src="/gallery/weddings/weddings-5.jpg"
          alt="Beautifully styled event by IDO Events Melbourne"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative z-10 px-6 text-center">
          <span className="mb-3 block font-script text-xl text-accent-gold-light">
            who we are
          </span>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Our Story
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/gallery/engagements/engagements-1.jpg"
              alt="IDO Events styling in action"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <span className="mb-2 block font-script text-lg text-sage">
              a passion for beautiful events
            </span>
            <h2 className="mb-6 font-heading text-3xl font-bold text-charcoal sm:text-4xl">
              From a Love of Styling to Melbourne&apos;s Trusted Event Team
            </h2>
            <div className="space-y-4 text-charcoal/70 leading-relaxed">
              <p>
                iDo. Events started the way so many good things do — with a genuine love
                for making spaces beautiful. What began as helping friends and family style
                their celebrations quickly grew into something bigger. Word spread, bookings
                grew, and before long we were transforming venues across Melbourne every
                weekend.
              </p>
              <p>
                We are a family-run business based right here in Melbourne, and that family
                spirit runs through everything we do. Every event we style gets the same
                care and attention we would give our own celebrations. We believe that your
                milestone moments deserve to look and feel extraordinary, without the stress
                of pulling it all together yourself.
              </p>
              <p>
                Today, we have styled over 200 events across more than 30 Melbourne suburbs.
                From intimate backyard christenings to grand wedding receptions, from
                colourful kids&apos; birthdays to elegant engagement parties, we bring the
                same passion and professionalism to every single one. We deliver, we set up,
                we make it beautiful, and we pack it all down when the party is over.
              </p>
              <p>
                Our growing collection of premium props, backdrops, draping, balloon
                installations, and styling elements means we can create virtually any look
                you can imagine. And because we genuinely care about our clients, we work
                closely with you from the first enquiry to make sure every detail is exactly
                right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-cream-light px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <span className="mb-2 block font-script text-lg text-sage">
              the iDo. difference
            </span>
            <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
              Why Choose Us
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sage/10 text-sage">
                  {item.icon}
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold text-charcoal">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-charcoal/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <div className="bg-charcoal px-4 py-12 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 sm:gap-16">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8 sm:gap-16">
              <div className="text-center">
                {stat.stars && (
                  <div className="mb-1 text-xl tracking-wider text-accent-gold">
                    ★★★★★
                  </div>
                )}
                <div className="font-heading text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/50">
                  {stat.label}
                </div>
              </div>
              {i < STATS.length - 1 && (
                <div className="hidden h-12 w-px bg-white/15 sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Band */}
      <div className="bg-sage px-4 py-16 text-center sm:px-6">
        <span className="mb-2 block font-script text-xl text-white/80">
          let&apos;s create something beautiful
        </span>
        <h2 className="mb-2 font-heading text-3xl font-bold text-white sm:text-4xl">
          Ready to Bring Your Vision to Life?
        </h2>
        <p className="mb-7 text-white/80">
          Tell us about your event and we&apos;ll get back to you within the hour.
        </p>
        <Link href="/quote" className="btn-white">
          Get a Free Quote →
        </Link>
      </div>
    </>
  );
}
