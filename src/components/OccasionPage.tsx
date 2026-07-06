"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { OccasionData } from "@/data/occasions";

interface GalleryItem {
  file: string;
  occasion: string;
  alt: string;
  width: number;
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/5">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-[15px] font-semibold">{q}</span>
        <span className="ml-4 text-xl text-sage">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="pb-5 text-sm leading-relaxed text-charcoal/60">{a}</p>}
    </div>
  );
}

export function OccasionPage({
  data,
  gallery,
}: {
  data: OccasionData;
  gallery: GalleryItem[];
}) {
  const photos = gallery.filter((g) => g.occasion === data.slug).slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center bg-charcoal">
        {photos[0] && (
          <Image
            src={photos[0].file}
            alt={photos[0].alt}
            fill
            className="object-cover opacity-40"
            priority
          />
        )}
        <div className="relative z-10 px-6 text-center">
          <h1 className="mb-3 font-heading text-4xl font-bold text-white sm:text-5xl">
            {data.name} Styling & Hire Melbourne
          </h1>
          <p className="mb-6 text-lg text-white/80">{data.tagline}</p>
          <Link href="/quote" className="btn-primary px-8 py-4 text-base">
            Request a Free Quote
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-warm-white px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base leading-relaxed text-charcoal/70">{data.intro}</p>
        </div>
      </section>

      {/* Gallery */}
      {photos.length > 0 && (
        <section className="bg-cream-light px-4 py-16 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center font-heading text-3xl">
              Our {data.name} Styling
            </h2>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {photos.map((p) => (
                <div key={p.file} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={p.file}
                    alt={p.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What We Style */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-heading text-3xl">What We Style</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {data.whatWeStyle.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-black/5 bg-cream-light p-4 text-center text-sm font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-warm-white px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-heading text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="rounded-xl bg-white p-6 shadow-sm sm:p-8">
            {data.faqs.map((faq) => (
              <FAQ key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-sage px-4 py-14 text-center sm:px-6">
        <h2 className="mb-2 font-heading text-3xl font-bold text-white">
          Ready to Plan Your {data.name === "Corporate Events" ? "Event" : data.name.replace(/s$/, "")}?
        </h2>
        <p className="mb-6 text-white/80">
          Tell us about your vision and we&apos;ll get back to you within the hour.
        </p>
        <Link href="/quote" className="btn-white">
          Get a Free Quote →
        </Link>
      </div>
    </>
  );
}
