"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import {
  hireItems,
  CATEGORIES,
  CATEGORY_LABELS,
  OCCASION_LABELS,
} from "@/data/hire-items";

const OCCASION_KEYS = Object.keys(OCCASION_LABELS);

export default function HirePage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeOccasion, setActiveOccasion] = useState<string>("all");
  const { addItem, items } = useCart();

  const filtered = hireItems.filter((item) => {
    const matchCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchOccasion =
      activeOccasion === "all" || item.occasions.includes(activeOccasion);
    return matchCategory && matchOccasion;
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal px-4 py-20 text-center sm:px-6 lg:px-10">
        <span className="mb-2 block font-script text-xl text-sage-light">
          style your event
        </span>
        <h1 className="mx-auto mb-4 max-w-3xl font-heading text-4xl font-bold text-white sm:text-5xl">
          Prop Hire &amp; Styling Collection
        </h1>
        <p className="mx-auto max-w-xl text-base text-white/70">
          Browse our full range of hire items and packages. Add anything you love
          to your quote — we&apos;ll handle the rest.
        </p>
      </section>

      {/* Filters + Grid */}
      <section className="bg-warm-white px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          {/* Category Filters */}
          <div className="mb-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-charcoal/50">
              Category
            </p>
            <div className="flex flex-wrap gap-2">
              <FilterButton
                label="All"
                active={activeCategory === "all"}
                onClick={() => setActiveCategory("all")}
              />
              {CATEGORIES.map((cat) => (
                <FilterButton
                  key={cat}
                  label={CATEGORY_LABELS[cat]}
                  active={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                />
              ))}
            </div>
          </div>

          {/* Occasion Filters */}
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-charcoal/50">
              Occasion
            </p>
            <div className="flex flex-wrap gap-2">
              <FilterButton
                label="All"
                active={activeOccasion === "all"}
                onClick={() => setActiveOccasion("all")}
              />
              {OCCASION_KEYS.map((occ) => (
                <FilterButton
                  key={occ}
                  label={OCCASION_LABELS[occ]}
                  active={activeOccasion === occ}
                  onClick={() => setActiveOccasion(occ)}
                />
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="mb-6 text-sm text-charcoal/50">
            Showing {filtered.length} item{filtered.length !== 1 ? "s" : ""}
          </p>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="flex min-h-[30vh] items-center justify-center text-center">
              <div>
                <p className="mb-2 font-heading text-2xl">No items found</p>
                <p className="text-sm text-charcoal/50">
                  Try changing the filters above to see more items.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((item) => {
                const inCart = items.some((i) => i.id === item.slug);
                return (
                  <div
                    key={item.slug}
                    className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                  >
                    <Link href={`/hire/${item.slug}`} className="block">
                      <div className="relative aspect-[4/3] overflow-hidden bg-cream-light">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                      </div>
                    </Link>
                    <div className="p-4 sm:p-5">
                      <Link href={`/hire/${item.slug}`}>
                        <h3 className="mb-1 font-heading text-lg leading-tight transition-colors group-hover:text-sage-dark">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="mb-1 text-xs capitalize text-charcoal/40">
                        {CATEGORY_LABELS[item.category]}
                      </p>
                      <p className="mb-3 text-[15px] font-semibold text-sage-dark">
                        From ${item.price}
                      </p>
                      <button
                        onClick={() =>
                          addItem({
                            id: item.slug,
                            name: item.name,
                            price: `From $${item.price}`,
                            image: item.image,
                          })
                        }
                        disabled={inCart}
                        className={`w-full rounded-md border-2 py-2.5 text-[13px] font-semibold transition-colors ${
                          inCart
                            ? "cursor-default border-sage bg-sage text-white"
                            : "border-sage text-sage-dark hover:bg-sage hover:text-white"
                        }`}
                      >
                        {inCart ? "Added \u2713" : "+ Add to Quote"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Band */}
      <div className="bg-sage px-4 py-16 text-center sm:px-6">
        <span className="mb-2 block font-script text-xl text-white/80">
          let&apos;s create something beautiful
        </span>
        <h2 className="mb-2 font-heading text-3xl font-bold text-white sm:text-4xl">
          Can&apos;t Find What You Need?
        </h2>
        <p className="mb-7 text-white/80">
          We have many more items available. Send us a quote request and tell us
          your vision.
        </p>
        <Link href="/quote" className="btn-white">
          Get a Free Quote &rarr;
        </Link>
      </div>
    </>
  );
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${
        active
          ? "bg-sage text-white"
          : "bg-cream text-charcoal/70 hover:bg-sage-light hover:text-charcoal"
      }`}
    >
      {label}
    </button>
  );
}
