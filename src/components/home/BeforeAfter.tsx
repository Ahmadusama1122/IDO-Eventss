import Image from "next/image";

const TRANSFORMATIONS = [
  {
    title: "Yarra Valley Wedding",
    description: "Full venue transformation with florals, draping & signage",
    before: "/gallery/drapes/drapes-1.jpg",
    after: "/gallery/weddings/weddings-5.jpg",
  },
  {
    title: "Christening Celebration",
    description: "Custom backdrop, dessert table styling & balloon installation",
    before: "/gallery/drapes/drapes-10.jpg",
    after: "/gallery/christenings-baptisms/christenings-baptisms-6.jpg",
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
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={t.before}
                    alt={`${t.title} — before styling`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <span className="absolute bottom-2 left-2 rounded bg-charcoal/60 px-2 py-0.5 text-xs font-semibold text-white">
                    BEFORE
                  </span>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={t.after}
                    alt={`${t.title} — after styling`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <span className="absolute bottom-2 left-2 rounded bg-sage/80 px-2 py-0.5 text-xs font-semibold text-white">
                    AFTER
                  </span>
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
