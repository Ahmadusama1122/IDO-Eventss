const REVIEWS = [
  {
    text: "IDO Events transformed our wedding venue beyond anything I imagined. The team was professional, creative, and so easy to work with. Every detail was perfect.",
    name: "Sarah M.",
    event: "Wedding — Brighton Savoy",
    initial: "S",
  },
  {
    text: "Our daughter's christening was absolutely beautiful. They understood our vision perfectly and the setup was stunning. Highly recommend for any celebration.",
    name: "Maria K.",
    event: "Christening — Oakleigh",
    initial: "M",
  },
  {
    text: "Booked IDO for our corporate end-of-year event. The styling elevated the whole experience. Our team was blown away. Will be using them again next year.",
    name: "James T.",
    event: "Corporate — South Wharf",
    initial: "J",
  },
];

export function Testimonials() {
  return (
    <section className="bg-cream-light px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-3 font-heading text-3xl sm:text-4xl">What Our Clients Say</h2>
        <p className="mx-auto mb-12 max-w-xl text-base text-charcoal/60">
          Real reviews from real events across Melbourne.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <div key={r.name} className="rounded-xl bg-white p-8 text-left shadow-sm">
              <div className="mb-4 text-base text-accent-gold">★★★★★</div>
              <p className="mb-5 text-[15px] leading-relaxed italic text-charcoal/60">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cream font-bold text-sage-dark">
                  {r.initial}
                </div>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-charcoal/50">{r.event}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
