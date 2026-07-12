import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Event Styling Tips & Inspiration",
  description:
    "Event styling tips, trends, and inspiration from IDO Events Melbourne. Practical guides for weddings, birthdays, christenings, and more.",
  openGraph: {
    title: "IDO Events Blog — Styling Tips & Trends",
    description:
      "Discover the latest event styling trends and practical guides from Melbourne's trusted event styling team.",
  },
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-charcoal">
        <Image
          src="/gallery/engagements/engagements-10.jpg"
          alt="Event styling inspiration from IDO Events"
          fill
          className="object-cover opacity-35"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative z-10 px-6 text-center">
          <span className="mb-3 block font-script text-xl text-accent-gold-light">
            tips, trends &amp; inspiration
          </span>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Our Blog
          </h1>
        </div>
      </section>

      {/* Blog grid */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-sage px-3 py-1 text-xs font-semibold text-white">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <time className="text-xs font-medium uppercase tracking-wider text-charcoal/70">
                    {formatDate(post.date)}
                  </time>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="mt-2 font-heading text-xl font-bold text-charcoal transition-colors group-hover:text-sage-dark">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-sage-dark transition-colors hover:text-charcoal"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <div className="bg-sage px-4 py-16 text-center sm:px-6">
        <span className="mb-2 block font-script text-xl text-white/80">
          inspired by what you&apos;ve read?
        </span>
        <h2 className="mb-2 font-heading text-3xl font-bold text-white sm:text-4xl">
          Let Us Style Your Next Event
        </h2>
        <p className="mb-7 text-white/80">
          Tell us about your vision and we&apos;ll bring it to life.
        </p>
        <Link href="/quote" className="btn-white">
          Get a Free Quote →
        </Link>
      </div>
    </>
  );
}
