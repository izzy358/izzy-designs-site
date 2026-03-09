import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <article className="card-surface flex h-full flex-col p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
        {post.category}
      </p>
      <h3 className="mt-4 text-2xl font-semibold text-ink">{post.title}</h3>
      <p className="mt-4 flex-1 text-base leading-7 text-slate-600">{post.description}</p>
      <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
      <Link href={`/blog/${post.slug}`} className="mt-6 text-sm font-semibold text-accent">
        Read Article
      </Link>
    </article>
  );
}
