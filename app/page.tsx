import type { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { SectionIntro } from "@/components/SectionIntro";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { getAllPosts } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Home",
  "Izzy Designs helps solopreneurs grow with business coaching, conversion-focused websites, and practical AI automation."
);

export default async function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <Hero />

      <section className="section-space">
        <div className="container-shell">
          <SectionIntro
            eyebrow="How I Help"
            title="Support that covers strategy, execution, and systems."
            description="Whether you need clarity on your next move, a website that actually converts, or automation that saves your team time, the work stays practical and focused on growth."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <ServiceCard
              icon="🧠"
              title="Business Coaching & Strategy"
              description="For owners who are stuck, scaling, or just getting started."
              href="/services/coaching"
            />
            <ServiceCard
              icon="💻"
              title="Web Design & Digital Presence"
              description="Websites, branding, and everything that makes your business look legit."
              href="/services/web"
            />
            <ServiceCard
              icon="🤖"
              title="AI & Automation"
              description="Stop working harder. Let AI handle the repetitive stuff."
              href="/services/ai"
            />
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="dark-panel grid gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:p-12">
            <div>
              <p className="eyebrow text-sky-200">Why Work With Me?</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Real operating experience, not textbook advice.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
                Izzy brings more than a decade in sales, years of running businesses across
                multiple industries, and a front-row view of where most small businesses get stuck
                with strategy and technology.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                "10+ years in sales and client-facing growth work",
                "7+ years running businesses and making real-world decisions",
                "Hands-on across automotive, service, and digital delivery models",
                "Built to bridge the gap between business strategy and execution"
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Client Feedback"
            title="What clients say after the business gets clearer."
            description="Placeholder testimonials are used for now and can be swapped with final client quotes later."
            center
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <TestimonialCard
              quote="Izzy helped me simplify my offer, tighten my site, and finally create a process for follow-up. I stopped guessing."
              name="Maya R."
              title="Service Business Owner"
            />
            <TestimonialCard
              quote="The strategy sessions were direct, practical, and exactly what I needed. Every call ended with a plan I could execute."
              name="Derek L."
              title="Founder, Local Agency"
            />
            <TestimonialCard
              quote="The website looks better, but more importantly it converts better. We started getting better quality inquiries almost immediately."
              name="Angela T."
              title="Consultant"
            />
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionIntro
              eyebrow="From the Blog"
              title="Recent insights for small business growth."
              description="Articles on business strategy, conversion-focused web design, and practical AI implementation."
            />
            <Link href="/blog" className="btn-secondary">
              View All Posts
            </Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to grow your business?"
        description="Start with a focused conversation about where the bottlenecks are, what should happen next, and how Izzy Designs can help."
        primaryHref="/contact#book"
        primaryLabel="Book a Free Strategy Call"
        secondaryHref="/services"
        secondaryLabel="See Services"
      />
    </>
  );
}
