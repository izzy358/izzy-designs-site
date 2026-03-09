import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionIntro } from "@/components/SectionIntro";
import { TestimonialCard } from "@/components/TestimonialCard";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Business Coaching",
  "Business coaching and strategy support for solopreneurs and small business owners doing $5K-$50K per month."
);

const tiers = [
  {
    name: "Launch Pad",
    price: "$500",
    description: "Get online fast with focused guidance on offer clarity, positioning, and the simplest path to launch."
  },
  {
    name: "90-Day Business Sprint",
    price: "$3,000",
    description: "Build the foundation with weekly coaching, tighter execution, and a clear operating rhythm over 90 days."
  },
  {
    name: "6-Month Transformation",
    price: "$5,000",
    description: "A longer-term growth partnership for founders who want strategy, accountability, and deeper business support."
  }
];

export default function CoachingPage() {
  return (
    <>
      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionIntro
              eyebrow="Coaching"
              title="Strategic support for business owners who need clarity and follow-through."
              description="This is built for solopreneurs and small business owners doing roughly $5K to $50K per month who want a better plan, stronger execution, and someone in their corner who understands the pressure."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Weekly calls to review strategy, priorities, and current bottlenecks",
                "Action plans that turn ideas into specific next steps",
                "Direct text access for quick questions between sessions",
                "Accountability so progress keeps moving after the call ends"
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
                  <p className="text-sm leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="dark-panel p-8 sm:p-10">
            <p className="eyebrow text-sky-200">Who It&apos;s For</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              <p>Owners who are stuck and need a sharper plan.</p>
              <p>Businesses that are growing but feel operationally messy.</p>
              <p>Founders who know what to do in theory but need help executing consistently.</p>
              <p>Operators who want practical guidance from someone who has built businesses firsthand.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Packages"
            title="Three ways to work together."
            description="Each coaching option is designed to meet a different stage of momentum, from getting online quickly to building a full growth partnership."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div key={tier.name} className="card-surface p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{tier.name}</p>
                <p className="mt-5 text-4xl font-semibold text-ink">{tier.price}</p>
                <p className="mt-4 text-base leading-7 text-slate-600">{tier.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 rounded-[2rem] border border-sky-100 bg-sky-50 p-6 sm:grid-cols-2">
            <p className="text-sm leading-7 text-slate-700">
              Financing is available for clients who want to move forward without delaying the work.
            </p>
            <p className="text-sm leading-7 text-slate-700">
              Monthly maintenance is required at <span className="font-semibold">$150/mo</span> to keep support and systems active.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Testimonials"
            title="Coaching that creates movement."
            description="Placeholder quotes below can be swapped with final client testimonials."
            center
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <TestimonialCard
              quote="I stopped spinning between ideas and started making better decisions every week. The accountability changed everything."
              name="Jordan P."
              title="Consulting Founder"
            />
            <TestimonialCard
              quote="The sessions were focused, direct, and useful. We fixed problems in the business instead of just talking about them."
              name="Nicole F."
              title="Local Service Owner"
            />
            <TestimonialCard
              quote="Izzy helped me build structure around the business and get serious about execution. Revenue became more predictable."
              name="Chris M."
              title="Small Business Owner"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Want coaching that turns into action?"
        description="Book a discovery call to talk through your current stage, revenue range, and what kind of support will actually move the business forward."
        primaryHref="/contact#book"
        primaryLabel="Book a Discovery Call"
      />
    </>
  );
}
