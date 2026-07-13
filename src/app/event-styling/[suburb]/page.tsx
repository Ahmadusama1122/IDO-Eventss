import { SUBURBS } from "@/data/suburbs";
import { OCCASIONS } from "@/data/occasions";
import gallery from "@/data/gallery.json";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildLocalBusinessSchema, buildBreadcrumbSchema, BASE_URL } from "@/lib/schema";

export async function generateStaticParams() {
  return SUBURBS.map((s) => ({ suburb: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ suburb: string }>;
}) {
  const { suburb } = await params;
  const data = SUBURBS.find((s) => s.slug === suburb);
  if (!data) return {};
  return {
    title: `Event Styling in ${data.name}, Melbourne`,
    description: `iDo Events provides event styling and prop hire in ${data.name}, Melbourne. Weddings, birthdays, christenings and more — setup and pack-down included. Free quotes.`,
    alternates: { canonical: `https://idoeventss.com/event-styling/${data.slug}` },
    openGraph: {
      title: `Event Styling in ${data.name} | iDo Events`,
      description: `Prop hire and event styling in ${data.name}. Backdrops, florals, balloons, signage and full setup across ${data.name} and surrounding suburbs.`,
      images: [{ url: "/gallery/weddings/weddings-1.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function SuburbPage({
  params,
}: {
  params: Promise<{ suburb: string }>;
}) {
  const { suburb } = await params;
  const data = SUBURBS.find((s) => s.slug === suburb);
  if (!data) notFound();

  const allPhotos = gallery as {
    file: string;
    occasion: string;
    alt: string;
    width: number;
  }[];

  // Pick 4 gallery images spread across occasions
  const heroPhoto = allPhotos[0];
  const galleryPhotos = [
    allPhotos[1],
    allPhotos[3],
    allPhotos[4],
    allPhotos[12],
  ];

  const introParagraphs = data.intro.split("\n\n");

  const jsonLd = buildLocalBusinessSchema(data, heroPhoto.file);
  const breadcrumbLd = buildBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Event Styling", url: `${BASE_URL}/event-styling` },
    { name: data.name },
  ]);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center bg-charcoal">
        {heroPhoto && (
          <Image
            src={heroPhoto.file}
            alt={`Event styling in ${data.name}, Melbourne`}
            fill
            className="object-cover opacity-40"
            priority
          />
        )}
        <div className="relative z-10 px-6 text-center">
          <h1 className="mb-3 font-heading text-4xl font-bold text-white sm:text-5xl">
            Event Styling &amp; Prop Hire in {data.name}
          </h1>
          <p className="mb-6 text-lg text-white/80">
            Weddings, birthdays, christenings &amp; more — beautifully styled in{" "}
            {data.name} and {data.region} Melbourne.
          </p>
          <Link href="/quote" className="btn-primary px-8 py-4 text-base">
            Request a Free Quote
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-warm-white px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl">
          {introParagraphs.map((paragraph, i) => (
            <p
              key={i}
              className="mb-6 text-base leading-relaxed text-charcoal/70 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Occasion Links Grid */}
      <section className="bg-cream-light px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center font-heading text-3xl">
            What We Style in {data.name}
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {OCCASIONS.map((occasion) => (
              <Link
                key={occasion.slug}
                href={`/${occasion.slug}`}
                className="group rounded-xl border border-black/5 bg-white p-6 text-center transition-colors hover:border-sage hover:shadow-md"
              >
                <h3 className="font-heading text-lg font-semibold group-hover:text-sage">
                  {occasion.name}
                </h3>
                <p className="mt-1 text-xs text-charcoal/50">
                  {occasion.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center font-heading text-3xl">
            Our Recent Work
          </h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {galleryPhotos.map((photo) => (
              <div
                key={photo.file}
                className="relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                <Image
                  src={photo.file}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/gallery"
              className="text-sm font-semibold text-sage hover:text-sage-dark"
            >
              View Full Gallery &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-cream-light px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="rounded-xl bg-white p-8 shadow-sm sm:p-10">
            <p className="font-script text-2xl text-sage">&ldquo;</p>
            <p className="mb-4 text-base italic leading-relaxed text-charcoal/70">
              {data.testimonial.text}
            </p>
            <p className="text-sm font-semibold text-charcoal">
              {data.testimonial.name}
            </p>
            <p className="text-xs text-charcoal/50">
              {data.testimonial.event}
            </p>
          </div>
        </div>
      </section>

      {/* Nearby Suburbs */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center font-heading text-2xl">
            We Also Service Nearby Suburbs
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {data.nearbySuburbs.map((s) => {
              const linked = SUBURBS.find(
                (sub) => sub.name.toLowerCase() === s.toLowerCase()
              );
              return linked ? (
                <Link
                  key={s}
                  href={`/event-styling/${linked.slug}`}
                  className="rounded-full border border-black/5 bg-cream-light px-4 py-2 text-[13px] font-medium text-charcoal transition-colors hover:border-sage hover:bg-sage hover:text-white"
                >
                  {s}
                </Link>
              ) : (
                <span
                  key={s}
                  className="rounded-full border border-black/5 bg-cream-light px-4 py-2 text-[13px] font-medium text-charcoal/60"
                >
                  {s}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local Venues */}
      <section className="bg-cream-light px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center font-heading text-2xl">
            Popular Venues Near {data.name}
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {data.localVenues.map((venue) => (
              <div
                key={venue}
                className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage/10 text-sm text-sage">
                  &#9733;
                </span>
                <span className="text-sm font-medium">{venue}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center font-heading text-2xl">
            Find Us Near {data.name}
          </h2>
          <div className="overflow-hidden rounded-xl border border-black/5">
            <iframe
              title={`Map of ${data.name}, Melbourne`}
              src={`https://maps.google.com/maps?q=${data.lat},${data.lng}&z=13&output=embed`}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-sage px-4 py-14 text-center sm:px-6">
        <h2 className="mb-2 font-heading text-3xl font-bold text-white">
          Ready to Style Your Event in {data.name}?
        </h2>
        <p className="mb-6 text-white/80">
          Tell us about your vision and we&apos;ll get back to you within the
          hour.
        </p>
        <Link href="/quote" className="btn-white">
          Get a Free Quote &rarr;
        </Link>
      </section>
    </>
  );
}
