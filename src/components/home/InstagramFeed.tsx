"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, Stagger, motion, fadeUp, springBouncy } from "@/components/motion";

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
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl text-center">
        <ScrollReveal>
          <h2 className="mb-3 font-heading text-3xl sm:text-4xl">Follow Us on Instagram</h2>
          <p className="mb-8 text-base text-charcoal/60">
            @ido.eventss — Behind the scenes, styling inspiration, and our latest setups.
          </p>
        </ScrollReveal>
        <Stagger fast className="mb-8 grid grid-cols-3 gap-1 sm:grid-cols-4 lg:grid-cols-6">
          {placeholderImages.map((src, i) => (
            <motion.div
              key={i}
              className="relative aspect-square cursor-pointer overflow-hidden rounded"
              variants={fadeUp}
              transition={{ ...springBouncy, delay: i * 0.03 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.25 } }}
            >
              <Image
                src={src}
                alt={`IDO Events Instagram post ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
              />
            </motion.div>
          ))}
        </Stagger>
        <ScrollReveal delay={0.2}>
          <Link href="https://www.instagram.com/ido.eventss/" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Follow @ido.eventss
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
