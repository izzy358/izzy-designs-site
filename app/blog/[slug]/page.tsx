import type { Metadata } from "next";
import Link from "next/link";
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
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      siteName: "Izzy Designs",
      type: "article"
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

  return (
    <section className="section-space">
      <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <article className="min-w-0">
          <p className="eyebrow">{post.metadata.category}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {post.metadata.title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500">
            <span>{post.metadata.date}</span>
            <span>{post.metadata.readTime}</span>
          </div>
          <div className="mt-10">
            <MarkdownContent content={post.content} />
          </div>
        </article>

        <aside className="space-y-6">
          <div className="card-surface p-8 lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Free Guide</p>
            <h2 className="mt-4 text-2xl font-semibold text-ink">AI Integration for Small Business</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
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
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-ink placeholder:text-slate-400"
                />
              </label>
              <button type="submit" className="btn-primary w-full">
                Get the Guide
              </button>
            </form>
          </div>
          <div className="card-surface p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">More Reading</p>
            <div className="mt-5 space-y-4">
              {related.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`} className="block rounded-2xl border border-slate-200 p-4 transition hover:border-accent">
                  <p className="text-sm font-semibold text-ink">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{item.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
