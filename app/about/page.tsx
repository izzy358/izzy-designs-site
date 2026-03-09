import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionIntro } from "@/components/SectionIntro";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "About",
  "Learn how Izzy Designs combines sales experience, business ownership, and digital execution to help small businesses grow."
);

export default function AboutPage() {
  return (
    <>
      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionIntro
              eyebrow="About Izzy"
              title="Built from sales floors, business ownership, and seeing where small businesses get stuck."
              description="Izzy’s path started in sales, where outcomes depend on trust, clarity, and execution. That foundation led into building and operating businesses, including in the automotive space, and seeing firsthand how many owners struggle to bridge the gap between great service and the systems needed to scale it."
            />
            <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Over time, one pattern kept showing up: smart business owners were losing momentum
                because their website was weak, their follow-up was inconsistent, or the right tech
                was never implemented in a practical way.
              </p>
              <p>
                Izzy Designs was built to solve that gap. The work combines strategy, digital
                execution, and hands-on guidance so business owners can make confident decisions and
                actually follow through on them.
              </p>
            </div>
            <Link href="/contact" className="btn-primary mt-8">
              Let&apos;s see if we&apos;re a good fit
            </Link>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-sand p-5 shadow-soft">
            <div className="flex h-[28rem] items-end rounded-[1.5rem] bg-[linear-gradient(160deg,#dbeafe_0%,#e2e8f0_50%,#cbd5e1_100%)] p-8">
              <div className="rounded-3xl bg-white/85 p-6 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Photo Placeholder
                </p>
                <p className="mt-3 max-w-xs text-sm leading-7 text-slate-600">
                  Replace with professional brand photography that feels modern, minimal, and grounded.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["10+ years", "In sales and revenue-driven client work"],
              ["7+ years", "Running businesses and refining operations"],
              ["Multiple industries", "Experience across automotive, service, and digital work"]
            ].map(([value, label]) => (
              <div key={label} className="card-surface p-8">
                <p className="text-3xl font-semibold text-ink">{value}</p>
                <p className="mt-3 text-base leading-7 text-slate-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="dark-panel p-8 sm:p-10 lg:p-12">
            <p className="eyebrow text-sky-200">Philosophy</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              I don&apos;t give textbook advice. I give you what works because I&apos;ve done it myself.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
              That means recommendations are grounded in real sales conversations, real business
              tradeoffs, and the reality of limited time, limited attention, and the need to see
              results. The goal is not to impress you with theory. The goal is to help you move.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Need a growth partner who understands both business and execution?"
        description="If you want strategic guidance that connects directly to sales, websites, and systems, the next step is a conversation."
        primaryHref="/contact"
        primaryLabel="Contact Izzy"
      />
    </>
  );
}
