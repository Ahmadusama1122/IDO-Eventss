import Link from "next/link";

const PACKAGES = [
  { slug: "rustic-romance-package", name: "Rustic Romance" },
  { slug: "modern-luxe-package", name: "Modern Luxe" },
  { slug: "garden-party-package", name: "Garden Party" },
  { slug: "classic-elegance-package", name: "Classic Elegance" },
];

export function FeaturedPackages() {
  return (
    <section className="bg-cream-light px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-3 font-heading text-3xl sm:text-4xl">Popular Packages</h2>
        <p className="mx-auto mb-12 max-w-xl text-base text-charcoal/60">
          Our most-requested styling packages, ready to customise for your event.
        </p>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.slug}
              className="overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-cream to-sage-light text-sm italic text-charcoal/40">
                [ Event photo ]
              </div>
              <div className="p-5">
                <h4 className="mb-3 font-heading text-lg">{pkg.name}</h4>
                <Link
                  href={`/quote?item=${pkg.slug}`}
                  className="block w-full rounded-md border-2 border-sage py-2.5 text-center text-[13px] font-semibold text-sage-dark transition-colors hover:bg-sage hover:text-white"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
