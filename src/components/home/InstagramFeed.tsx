import Link from "next/link";

export function InstagramFeed() {
  const cells = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-3 font-heading text-3xl sm:text-4xl">Follow Us on Instagram</h2>
        <p className="mb-8 text-base text-charcoal/60">
          @ido.eventss — Behind the scenes, styling inspiration, and our latest setups.
        </p>
        <div className="mb-8 grid grid-cols-3 gap-1 sm:grid-cols-4 lg:grid-cols-6">
          {cells.map((n) => (
            <div
              key={n}
              className="flex aspect-square cursor-pointer items-center justify-center rounded bg-gradient-to-br from-cream to-sage-light text-[11px] text-charcoal/30 transition-opacity hover:opacity-80"
            >
              Post {n}
            </div>
          ))}
        </div>
        <Link href="https://www.instagram.com/ido.eventss/" target="_blank" rel="noopener noreferrer" className="btn-primary">
          Follow @ido.eventss
        </Link>
      </div>
    </section>
  );
}
