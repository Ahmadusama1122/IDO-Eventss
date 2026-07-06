"use client";

import { useCart } from "@/context/CartContext";

const PACKAGES = [
  { id: "pkg-rustic-romance", name: "Rustic Romance", price: "From $450" },
  { id: "pkg-modern-luxe", name: "Modern Luxe", price: "From $650" },
  { id: "pkg-garden-party", name: "Garden Party", price: "From $380" },
  { id: "pkg-classic-elegance", name: "Classic Elegance", price: "From $550" },
];

export function FeaturedPackages() {
  const { addItem, items } = useCart();

  return (
    <section className="bg-cream-light px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-3 font-heading text-3xl sm:text-4xl">Popular Packages</h2>
        <p className="mx-auto mb-12 max-w-xl text-base text-charcoal/60">
          Our most-requested styling packages, ready to customise for your event.
        </p>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {PACKAGES.map((pkg) => {
            const inCart = items.some((i) => i.id === pkg.id);
            return (
              <div
                key={pkg.id}
                className="overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-cream to-sage-light text-sm italic text-charcoal/40">
                  [ Event photo ]
                </div>
                <div className="p-5">
                  <h4 className="mb-1 font-heading text-lg">{pkg.name}</h4>
                  <p className="mb-3 text-[15px] font-semibold text-sage-dark">{pkg.price}</p>
                  <button
                    onClick={() => addItem({ id: pkg.id, name: pkg.name, price: pkg.price })}
                    disabled={inCart}
                    className={`w-full rounded-md border-2 py-2.5 text-[13px] font-semibold transition-colors ${
                      inCart
                        ? "border-sage bg-sage text-white cursor-default"
                        : "border-sage text-sage-dark hover:bg-sage hover:text-white"
                    }`}
                  >
                    {inCart ? "Added ✓" : "+ Add to Quote"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
