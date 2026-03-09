import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { SectionIntro } from "@/components/SectionIntro";
import { getAllPosts } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Blog",
  "Insights from Izzy Designs on business strategy, website performance, and AI automation for small business owners."
);

export default async function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionIntro
          eyebrow="Blog"
          title="Strategy, website, and AI insights for small business owners."
          description="Short, practical articles focused on what helps service businesses clarify their message, improve follow-up, and create more operational leverage."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_18rem]">
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <aside className="space-y-6">
            <div className="dark-panel p-8">
              <p className="eyebrow text-sky-200">Free Guide</p>
              <h2 className="mt-4 text-2xl font-semibold">AI Integration for Small Business</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Get a practical overview of where AI fits first, what to automate, and how to keep the customer experience strong.
              </p>
              <form
                action="https://formspree.io/f/xbdaaddp"
                method="POST"
                className="mt-6 space-y-3"
              >
                <input type="hidden" name="form" value="lead-magnet" />
                <label className="block">
                  <span className="sr-only">Email address</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your email"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400"
                  />
                </label>
                <button type="submit" className="btn-primary w-full">
                  Send Me the Guide
                </button>
              </form>
            </div>
            <div className="card-surface p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Newsletter</p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Subscribe for practical notes on growth, websites, and automation.
              </p>
              <form
                action="https://formspree.io/f/xbdaaddp"
                method="POST"
                className="mt-6 space-y-3"
              >
                <input type="hidden" name="form" value="newsletter" />
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
                <button type="submit" className="btn-secondary w-full">
                  Join the Newsletter
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
