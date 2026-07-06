"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import type { HireItem } from "@/data/hire-items";
import { CATEGORY_LABELS } from "@/data/hire-items";

export function HireItemDetail({
  item,
  related,
  categoryLabel,
}: {
  item: HireItem;
  related: HireItem[];
  categoryLabel: string;
}) {
  const { addItem, items } = useCart();
  const inCart = items.some((i) => i.id === item.slug);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-cream-light px-4 py-3 text-sm sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <Link href="/hire" className="text-sage-dark hover:underline">
            Hire Collection
          </Link>
          <span className="mx-2 text-charcoal/30">/</span>
          <span className="text-charcoal/60">{item.name}</span>
        </div>
      </div>

      {/* Main Detail */}
      <section className="bg-warm-white px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-cream-light">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-sage">
              {categoryLabel}
            </p>
            <h1 className="mb-3 font-heading text-3xl font-bold sm:text-4xl">
              {item.name}
            </h1>
            <p className="mb-6 text-lg font-semibold text-sage-dark">
              From ${item.price}
            </p>
            <p className="mb-8 leading-relaxed text-charcoal/70">
              {item.description}
            </p>

            {/* What's Included */}
            <div className="mb-8">
              <h3 className="mb-3 font-heading text-xl">
                What&apos;s Included
              </h3>
              <ul className="space-y-2">
                {item.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 text-sage">&#10003;</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Occasions */}
            <div className="mb-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-charcoal/40">
                Suitable for
              </p>
              <div className="flex flex-wrap gap-2">
                {item.occasions.map((occ) => (
                  <span
                    key={occ}
                    className="rounded-full bg-cream px-3 py-1 text-xs font-medium capitalize text-charcoal/70"
                  >
                    {occ.replace(/-/g, " ")}
                  </span>
                ))}
              </div>
            </div>

            {/* Add to Quote */}
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
              className={`w-full rounded-md py-4 text-base font-semibold transition-colors sm:w-auto sm:px-12 ${
                inCart
                  ? "cursor-default bg-sage text-white"
                  : "bg-sage text-white hover:bg-sage-dark"
              }`}
            >
              {inCart ? "Added to Quote \u2713" : "+ Add to Quote"}
            </button>
          </div>
        </div>
      </section>

      {/* Related Items */}
      {related.length > 0 && (
        <section className="bg-cream-light px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center font-heading text-3xl">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
              {related.map((rel) => {
                const relInCart = items.some((i) => i.id === rel.slug);
                return (
                  <div
                    key={rel.slug}
                    className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                  >
                    <Link href={`/hire/${rel.slug}`} className="block">
                      <div className="relative aspect-[4/3] overflow-hidden bg-cream-light">
                        <Image
                          src={rel.image}
                          alt={rel.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 50vw, 25vw"
                        />
                      </div>
                    </Link>
                    <div className="p-4">
                      <Link href={`/hire/${rel.slug}`}>
                        <h3 className="mb-1 font-heading text-base leading-tight transition-colors group-hover:text-sage-dark">
                          {rel.name}
                        </h3>
                      </Link>
                      <p className="mb-1 text-xs text-charcoal/40">
                        {CATEGORY_LABELS[rel.category]}
                      </p>
                      <p className="mb-3 text-sm font-semibold text-sage-dark">
                        From ${rel.price}
                      </p>
                      <button
                        onClick={() =>
                          addItem({
                            id: rel.slug,
                            name: rel.name,
                            price: `From $${rel.price}`,
                            image: rel.image,
                          })
                        }
                        disabled={relInCart}
                        className={`w-full rounded-md border-2 py-2 text-[12px] font-semibold transition-colors ${
                          relInCart
                            ? "cursor-default border-sage bg-sage text-white"
                            : "border-sage text-sage-dark hover:bg-sage hover:text-white"
                        }`}
                      >
                        {relInCart ? "Added \u2713" : "+ Add to Quote"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Band */}
      <div className="bg-sage px-4 py-16 text-center sm:px-6">
        <span className="mb-2 block font-script text-xl text-white/80">
          let&apos;s create something beautiful
        </span>
        <h2 className="mb-2 font-heading text-3xl font-bold text-white sm:text-4xl">
          Ready to Bring Your Vision to Life?
        </h2>
        <p className="mb-7 text-white/80">
          Tell us about your event and we&apos;ll get back to you within the
          hour.
        </p>
        <Link href="/quote" className="btn-white">
          Get a Free Quote &rarr;
        </Link>
      </div>
    </>
  );
}
