import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/data/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image }],
    },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 2);

  return (
    <>
      {/* Hero image */}
      <section className="relative flex min-h-[45vh] items-center justify-center overflow-hidden bg-charcoal">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-charcoal/30" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <span className="mb-3 inline-block rounded-full bg-sage px-3 py-1 text-xs font-semibold text-white">
            {post.category}
          </span>
          <h1 className="mb-4 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <time className="text-sm text-white/60">{formatDate(post.date)}</time>
        </div>
      </section>

      {/* Article content */}
      <article className="px-4 py-16 sm:px-6">
        <div
          className="prose prose-lg mx-auto max-w-3xl font-body text-charcoal/80
            [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-charcoal
            [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-charcoal
            [&_p]:mb-4 [&_p]:leading-relaxed
            [&_strong]:font-semibold [&_strong]:text-charcoal
            [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6
            [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6
            [&_li]:mb-2 [&_li]:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* CTA */}
      <section className="bg-cream-light px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-2 block font-script text-lg text-sage">
            ready to get started?
          </span>
          <h2 className="mb-3 font-heading text-3xl font-bold text-charcoal">
            Let Us Style Your Event
          </h2>
          <p className="mb-6 text-charcoal/60">
            From concept to pack-down, we handle every detail. Tell us about your
            vision and we&apos;ll create something beautiful.
          </p>
          <Link href="/quote" className="btn-primary">
            Get a Free Quote →
          </Link>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center font-heading text-2xl font-bold text-charcoal">
              More from Our Blog
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {relatedPosts.map((related) => (
                <article
                  key={related.slug}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md"
                >
                  <Link href={`/blog/${related.slug}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <time className="text-xs font-medium uppercase tracking-wider text-charcoal/40">
                      {formatDate(related.date)}
                    </time>
                    <Link href={`/blog/${related.slug}`}>
                      <h3 className="mt-2 font-heading text-lg font-bold text-charcoal transition-colors group-hover:text-sage-dark">
                        {related.title}
                      </h3>
                    </Link>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                      {related.excerpt}
                    </p>
                    <Link
                      href={`/blog/${related.slug}`}
                      className="mt-3 inline-block text-sm font-semibold text-sage transition-colors hover:text-sage-dark"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
