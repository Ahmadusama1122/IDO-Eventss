"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import galleryData from "@/data/gallery.json";

interface GalleryPhoto {
  file: string;
  occasion: string;
  alt: string;
  width: number;
}

const photos = galleryData as GalleryPhoto[];

const TABS: { key: string; label: string }[] = [
  { key: "all", label: "All" },
  { key: "weddings", label: "Weddings" },
  { key: "birthdays", label: "Birthdays" },
  { key: "christenings-baptisms", label: "Christenings" },
  { key: "baby-showers", label: "Baby Showers" },
  { key: "engagements", label: "Engagements" },
  { key: "corporate", label: "Corporate" },
  { key: "drapes", label: "Drapes" },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeTab === "all"
      ? photos
      : photos.filter((p) => p.occasion === activeTab);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev < filtered.length - 1 ? prev + 1 : 0;
    });
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev > 0 ? prev - 1 : filtered.length - 1;
    });
  }, [filtered.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal px-4 py-20 text-center sm:px-6 lg:px-10">
        <span className="mb-2 block font-script text-xl text-sage-light">
          our work
        </span>
        <h1 className="mx-auto mb-4 max-w-3xl font-heading text-4xl font-bold text-white sm:text-5xl">
          Event Gallery
        </h1>
        <p className="mx-auto max-w-xl text-base text-white/70">
          Browse real events we&apos;ve styled across Melbourne. Every detail
          planned, every moment perfected.
        </p>
      </section>

      {/* Filter Tabs + Gallery */}
      <section className="bg-warm-white px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          {/* Tabs */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`rounded-full px-5 py-2 text-[13px] font-semibold transition-colors ${
                  activeTab === tab.key
                    ? "bg-sage text-white"
                    : "bg-cream text-charcoal/70 hover:bg-sage-light hover:text-charcoal"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="mb-6 text-center text-sm text-charcoal/50">
            {filtered.length} photo{filtered.length !== 1 ? "s" : ""}
          </p>

          {/* Masonry Grid */}
          {filtered.length === 0 ? (
            <div className="flex min-h-[30vh] items-center justify-center text-center">
              <p className="font-heading text-2xl text-charcoal/40">
                No photos in this category yet.
              </p>
            </div>
          ) : (
            <div className="columns-2 gap-3 space-y-3 md:columns-3 lg:columns-4">
              {filtered.map((photo, index) => (
                <button
                  key={photo.file}
                  onClick={() => openLightbox(index)}
                  className="group block w-full break-inside-avoid overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sage"
                >
                  <div
                    className="relative overflow-hidden bg-cream-light"
                    style={{
                      aspectRatio:
                        index % 5 === 0
                          ? "3/4"
                          : index % 3 === 0
                            ? "1/1"
                            : "4/3",
                    }}
                  >
                    <Image
                      src={photo.file}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="p-3 text-xs font-medium text-white capitalize">
                        {photo.occasion.replace(/-/g, " ")}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label="Close lightbox"
          >
            &times;
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-lg text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label="Previous photo"
          >
            &#8249;
          </button>

          {/* Image */}
          <div
            className="relative h-[80vh] w-[90vw] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxIndex].file}
              alt={filtered[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-lg text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label="Next photo"
          >
            &#8250;
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-xs text-white backdrop-blur-sm">
            {lightboxIndex + 1} / {filtered.length}
          </div>
        </div>
      )}

      {/* CTA Band */}
      <div className="bg-sage px-4 py-16 text-center sm:px-6">
        <span className="mb-2 block font-script text-xl text-white/80">
          let&apos;s create something beautiful
        </span>
        <h2 className="mb-2 font-heading text-3xl font-bold text-white sm:text-4xl">
          Love What You See?
        </h2>
        <p className="mb-7 text-white/80">
          Tell us about your event and we&apos;ll create something just as
          stunning for you.
        </p>
        <Link href="/quote" className="btn-white">
          Get a Free Quote &rarr;
        </Link>
      </div>
    </>
  );
}
