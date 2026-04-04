import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <article className="card-surface flex h-full flex-col p-8 transition hover:border-[#2a2a2a] hover:bg-[#0d0d0d]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-subtle">
        {post.category}
      </p>
      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">{post.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-[#7d7d7d]">{post.description}</p>
      <div className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[#555555]">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
      <Link href={`/blog/${post.slug}`} className="mt-6 text-sm font-semibold text-white">
        Read Article
      </Link>
    </article>
  );
}
