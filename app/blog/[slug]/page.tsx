import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/lib/blog";
import MarkdownContent from "@/components/MarkdownContent";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    alternates: {
      canonical: `/blog/${params.slug}`
    },
    openGraph: {
      title: `${post.metadata.title} | Izzy Designs`,
      description: post.metadata.description,
      url: `https://izzydesigns.io/blog/${params.slug}`,
      siteName: "Izzy Designs",
      type: "article",
      images: [
        {
          url: "https://izzydesigns.io/og-default.png",
          width: 1200,
          height: 630,
          alt: `${post.metadata.title} | Izzy Designs`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.metadata.title} | Izzy Designs`,
      description: post.metadata.description
    }
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  const allPosts = getAllPosts();

  if (!post) {
    notFound();
  }

  const related = allPosts.filter((item) => item.slug !== params.slug).slice(0, 2);
  const publishedDate = new Date(post.metadata.date).toISOString();
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metadata.title,
    description: post.metadata.description,
    author: {
      "@type": "Person",
      name: "Izzy Cortez"
    },
    datePublished: publishedDate,
    publisher: {
      "@type": "Organization",
      name: "Izzy Designs"
    },
    mainEntityOfPage: `https://izzydesigns.io/blog/${params.slug}`,
    url: `https://izzydesigns.io/blog/${params.slug}`
  };

  return (
    <section className="section-space">
      <Script id={`blog-post-schema-${params.slug}`} type="application/ld+json">
        {JSON.stringify(blogPostingSchema)}
      </Script>
      <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <article className="min-w-0">
          <p className="eyebrow">{post.metadata.category}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            {post.metadata.title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-[#5f5f5f]">
            <span>{post.metadata.date}</span>
            <span>{post.metadata.readTime}</span>
            <span>By Izzy Cortez</span>
          </div>
          <div className="mt-10">
            <MarkdownContent content={post.content} />
          </div>
        </article>

        <aside className="space-y-6">
          <div className="card-surface p-8 lg:sticky lg:top-28">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-subtle">
              Free Guide
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
              AI Integration for Small Business
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#7d7d7d]">
              Want the practical version? Get the guide and start with the highest-impact automation first.
            </p>
            <form action="https://formspree.io/f/xbdaaddp" method="POST" className="mt-6 space-y-3">
              <input type="hidden" name="form" value="blog-guide" />
              <label className="block">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email address"
                  className="w-full rounded-2xl px-4 py-3 text-sm"
                />
              </label>
              <button type="submit" className="btn-secondary w-full">
                Get the Guide
              </button>
            </form>
          </div>
          <div className="card-surface p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-subtle">
              More Reading
            </p>
            <div className="mt-5 space-y-4">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="block rounded-2xl border border-[#1a1a1a] p-4 transition hover:border-[#2a2a2a]"
                >
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#666666]">{item.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
