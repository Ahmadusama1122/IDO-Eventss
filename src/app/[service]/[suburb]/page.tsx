import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  SERVICES,
  SERVICE_SUBURBS,
  getAllServiceSuburbPairs,
  getServiceSuburbContent,
} from "@/data/service-suburbs";
import { buildLocalBusinessSchema, buildBreadcrumbSchema, buildFaqSchema, BASE_URL } from "@/lib/schema";
import gallery from "@/data/gallery.json";

export function generateStaticParams() {
  return getAllServiceSuburbPairs().map((pair) => ({
    service: pair.service,
    suburb: pair.suburb,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; suburb: string }>;
}): Promise<Metadata> {
  const { service, suburb } = await params;
  const serviceData = SERVICES.find((s) => s.slug === service);
  const suburbData = SERVICE_SUBURBS.find((s) => s.slug === suburb);
  if (!serviceData || !suburbData) return { title: "Not Found" };

  const title = `${serviceData.name} in ${suburbData.name}`;
  const description = `iDo Events provides ${serviceData.name.toLowerCase()} in ${suburbData.name}, Melbourne. ${serviceData.description.split(".")[0]}. Full setup and pack-down included. Free quotes.`;

  return {
    title,
    description,
    alternates: { canonical: `https://idoeventss.com/${service}/${suburb}` },
    openGraph: {
      title: `${title} | iDo Events`,
      description,
      images: [{ url: "/gallery/weddings/weddings-1.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function ServiceSuburbPage({
  params,
}: {
  params: Promise<{ service: string; suburb: string }>;
}) {
  const { service, suburb } = await params;
  const serviceData = SERVICES.find((s) => s.slug === service);
  const suburbData = SERVICE_SUBURBS.find((s) => s.slug === suburb);
  const content = getServiceSuburbContent(service, suburb);

  if (!serviceData || !suburbData || !content) notFound();

  const allPhotos = gallery as { file: string; occasion: string; alt: string; width: number }[];
  const occasionMap: Record<string, string> = {
    "wedding-styling": "weddings",
    "engagement-party-styling": "engagements",
    "birthday-prop-hire": "birthdays",
    "baby-shower-styling": "baby-showers",
    "bridal-shower-setup": "baby-showers",
    "corporate-event-styling": "corporate",
    "mehndi-nikkah-styling": "weddings",
  };
  const relevantOccasion = occasionMap[service] || "weddings";
  const photos = allPhotos.filter((p) => p.occasion === relevantOccasion).slice(0, 4);

  const breadcrumbLd = buildBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: serviceData.name, url: `${BASE_URL}/${service}` },
    { name: suburbData.name },
  ]);

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EventPlanner"],
    name: "iDo Events",
    description: `${serviceData.name} in ${suburbData.name}, Melbourne.`,
    url: `${BASE_URL}/${service}/${suburb}`,
    telephone: "+61406179786",
    areaServed: {
      "@type": "City",
      name: suburbData.name,
      containedInPlace: { "@type": "State", name: "Victoria" },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: suburbData.lat,
      longitude: suburbData.lng,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: suburbData.name,
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    serviceType: serviceData.keywords,
    priceRange: "$$",
    sameAs: [
      "https://www.instagram.com/ido.eventss/",
      "https://www.facebook.com/balloonheadquarters/",
    ],
  };

  const faqLd = buildFaqSchema(content.faqs);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-center justify-center bg-charcoal">
        {photos[0] && (
          <Image
            src={`/gallery/${photos[0].file}`}
            alt={`${serviceData.name} in ${suburbData.name} by iDo Events`}
            fill
            className="object-cover opacity-40"
            sizes="100vw"
            priority
          />
        )}
        <div className="relative z-10 max-w-3xl px-6 py-16 text-center">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {serviceData.name} in {suburbData.name}
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Professional {serviceData.name.toLowerCase()} delivered, set up, and packed down across {suburbData.name} and surrounding suburbs.
          </p>
          <Link href="/quote" className="btn-primary mt-8 inline-block px-8 py-3">
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-lg leading-relaxed text-charcoal/90">{content.intro}</p>
      </section>

      {/* Popular Props */}
      <section className="bg-cream-light px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-charcoal">
            Popular Props for {serviceData.shortName} Events in {suburbData.name}
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {content.popularProps.map((prop) => (
              <li key={prop} className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sage/10 text-sage">✓</span>
                <span className="font-medium text-charcoal">{prop}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-charcoal/70">
            <Link href="/hire" className="text-sage-dark underline">Browse our full collection</Link> — all props include delivery, setup, and pack-down.
          </p>
        </div>
      </section>

      {/* Gallery */}
      {photos.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="font-heading text-2xl font-bold text-charcoal">
            Our Work Near {suburbData.name}
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {photos.map((photo) => (
              <div key={photo.file} className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={`/gallery/${photo.file}`}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-charcoal/70">
            {/* TODO: Replace with suburb-specific event photos when available */}
            <Link href="/gallery" className="text-sage-dark underline">View full gallery</Link>
          </p>
        </section>
      )}

      {/* Venue & Setup Notes */}
      <section className="bg-cream-light px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-charcoal">
            Venues &amp; Setup in {suburbData.name}
          </h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-charcoal">Local Venues We Style</h3>
              <p className="mt-2 text-charcoal/80">{content.venueNotes}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {suburbData.localVenues.map((venue) => (
                  <li key={venue} className="rounded-full bg-sage/10 px-3 py-1 text-sm text-sage-dark">
                    {venue}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-charcoal">Setup &amp; Logistics</h3>
              <p className="mt-2 text-charcoal/80">{content.setupNotes}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-heading text-2xl font-bold text-charcoal">
          Frequently Asked Questions — {serviceData.name} in {suburbData.name}
        </h2>
        <div className="mt-8 space-y-6">
          {content.faqs.map((faq) => (
            <details key={faq.q} className="group rounded-lg border border-cream bg-white p-6">
              <summary className="cursor-pointer font-semibold text-charcoal group-open:text-sage">
                {faq.q}
              </summary>
              <p className="mt-3 text-charcoal/80">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Nearby Suburbs */}
      <section className="bg-cream-light px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-xl font-bold text-charcoal">
            {serviceData.name} Near {suburbData.name}
          </h2>
          <p className="mt-2 text-sm text-charcoal/70">
            We also service these nearby suburbs:
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {suburbData.nearbySuburbs.map((nearby) => {
              const nearbySlug = nearby.toLowerCase().replace(/\s+/g, "-");
              const hasPage = SERVICE_SUBURBS.some((s) => s.slug === nearbySlug);
              return hasPage ? (
                <Link
                  key={nearby}
                  href={`/${service}/${nearbySlug}`}
                  className="rounded-full border border-sage/30 px-4 py-2 text-sm text-sage-dark transition hover:bg-sage/10"
                >
                  {serviceData.name} in {nearby}
                </Link>
              ) : (
                <span
                  key={nearby}
                  className="rounded-full border border-charcoal/10 px-4 py-2 text-sm text-charcoal/70"
                >
                  {nearby}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sage px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-white">
            Ready to Style Your Event in {suburbData.name}?
          </h2>
          <p className="mt-4 text-lg text-white">
            Request a free, no-obligation quote and we will respond within the hour.
          </p>
          <Link href="/quote" className="btn-white mt-8 inline-block px-10 py-4 text-base">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
