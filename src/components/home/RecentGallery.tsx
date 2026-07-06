export function RecentGallery() {
  const placeholders = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <section className="bg-cream-light px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-3 font-heading text-3xl sm:text-4xl">Recent Events</h2>
        <p className="mx-auto mb-12 max-w-xl text-base text-charcoal/60">
          A glimpse of the events we&apos;ve styled across Melbourne.
        </p>
        <div className="columns-2 gap-3 space-y-3 md:columns-3 lg:columns-4">
          {placeholders.map((n) => (
            <div
              key={n}
              className="break-inside-avoid overflow-hidden rounded-lg bg-gradient-to-br from-cream to-sage-light"
              style={{ aspectRatio: n % 3 === 0 ? "3/4" : n % 2 === 0 ? "1/1" : "4/3" }}
            >
              <div className="flex h-full w-full items-center justify-center text-sm text-charcoal/30">
                Gallery {n}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
