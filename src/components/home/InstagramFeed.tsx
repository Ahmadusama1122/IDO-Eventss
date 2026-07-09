"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ScrollReveal,
  Stagger,
  motion,
  fadeUp,
  springBouncy,
  TextReveal,
  Magnetic,
  LineReveal,
  blurIn,
  easeSlow,
} from "@/components/motion";

const placeholderImages = [
  "/gallery/weddings/weddings-1.jpg",
  "/gallery/birthdays/birthdays-3.jpg",
  "/gallery/engagements/engagements-5.jpg",
  "/gallery/baby-showers/baby-showers-1.jpg",
  "/gallery/christenings-baptisms/christenings-baptisms-2.jpg",
  "/gallery/drapes/drapes-3.jpg",
  "/gallery/weddings/weddings-7.jpg",
  "/gallery/birthdays/birthdays-10.jpg",
  "/gallery/engagements/engagements-10.jpg",
  "/gallery/baby-showers/baby-showers-5.jpg",
  "/gallery/corporate/corporate-1.jpg",
  "/gallery/birthdays/birthdays-15.jpg",
];

export function InstagramFeed() {
  return (
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl text-center">
        <ScrollReveal variants={blurIn} transition={easeSlow}>
          <span className="mb-3 block font-script text-lg text-sage">follow along</span>
        </ScrollReveal>
        <TextReveal
          text="Follow Us on Instagram"
          tag="h2"
          className="mb-3 font-heading text-3xl sm:text-4xl lg:text-5xl"
        />
        <ScrollReveal delay={0.2}>
          <p className="mb-4 text-base text-charcoal/60">
            @ido.eventss — Behind the scenes, styling inspiration, and our latest setups.
          </p>
        </ScrollReveal>
        <LineReveal className="mx-auto mb-10 h-[1px] w-16 bg-sage/40" delay={0.4} />

        <Stagger fast className="mb-10 grid grid-cols-3 gap-1.5 sm:grid-cols-4 lg:grid-cols-6">
          {placeholderImages.map((src, i) => (
            <motion.div
              key={i}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg"
              variants={fadeUp}
              transition={{ ...springBouncy, delay: i * 0.03 }}
              whileHover={{ scale: 1.05, transition: { type: "spring", damping: 15, stiffness: 200 } }}
            >
              <Image
                src={src}
                alt={`IDO Events Instagram post ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
              />
              {/* Instagram hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/40">
                <svg className="h-7 w-7 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </Stagger>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Magnetic strength={0.15}>
            <Link
              href="https://www.instagram.com/ido.eventss/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 shadow-lg shadow-sage/20"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Follow @ido.eventss
            </Link>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
