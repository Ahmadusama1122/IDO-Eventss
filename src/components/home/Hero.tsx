import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-charcoal">
      {/* Placeholder gradient — replace with real photo later */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3a3a2e] via-[#5a5a4a] to-[#4a4a3a] opacity-50" />
      <div className="absolute inset-0 bg-charcoal/55" />

      <div className="relative z-10 max-w-3xl px-6 text-center">
        <span className="mb-3 block font-script text-xl text-accent-gold-light">
          styled with love
        </span>
        <h1 className="mb-5 font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
          Melbourne&apos;s Event Styling &amp; Prop Hire Specialists
        </h1>
        <p className="mx-auto mb-9 max-w-xl text-lg text-white/85">
          Weddings. Birthdays. Christenings. Corporate. Beautifully styled and delivered to your door.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/hire" className="btn-ghost px-7 py-3.5 text-[15px]">
            Browse Our Collection
          </Link>
          <Link href="/quote" className="btn-primary px-8 py-4 text-base">
            Get a Free Quote
          </Link>
        </div>
        <p className="mt-5 text-sm text-white/50">
          Serving all Melbourne suburbs — setup &amp; pack-down included
        </p>
      </div>
    </section>
  );
}
