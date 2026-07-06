const TRANSFORMATIONS = [
  {
    title: "Yarra Valley Wedding",
    description: "Full venue transformation with florals, draping & signage",
  },
  {
    title: "Christening Celebration",
    description: "Custom backdrop, dessert table styling & balloon installation",
  },
];

export function BeforeAfter() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-3 font-heading text-3xl sm:text-4xl">The Transformation</h2>
        <p className="mx-auto mb-12 max-w-xl text-base text-charcoal/60">
          See how we turn empty venues into unforgettable spaces.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {TRANSFORMATIONS.map((t) => (
            <div key={t.title} className="overflow-hidden rounded-xl bg-cream-light">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="flex aspect-[4/3] items-center justify-center bg-[#d5d0c8] text-sm font-semibold text-charcoal/50">
                  BEFORE
                </div>
                <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-sage-light to-cream text-sm font-semibold text-charcoal/50">
                  AFTER
                </div>
              </div>
              <div className="p-4 text-left">
                <p className="font-heading text-lg font-semibold">{t.title}</p>
                <p className="text-sm text-charcoal/60">{t.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
