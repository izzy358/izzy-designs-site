import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { CTASection } from "@/components/CTASection";
import { SectionIntro } from "@/components/SectionIntro";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Business Coaching",
  "Strategic coaching for business owners who are done winging it and need structure, accountability, and a clearer growth plan.",
  "/services/coaching"
);

const tiers = [
  {
    name: "Strategy Session",
    price: "$750",
    description: "Perfect first step — get clarity on exactly what to do next",
    features: [
      "90-minute deep dive into your business",
      "Walk away with a custom action plan",
      "Recording of the session for reference",
      "7 days of follow-up support via text"
    ]
  },
  {
    name: "90-Day Business Sprint",
    price: "$3,000",
    description: "Best for: doing $5K-$20K/mo, stuck",
    featured: true,
    features: [
      "Weekly 1-on-1 strategy calls (30 min)",
      "Custom action plan with specific milestones",
      "Direct text/voice access between sessions",
      "Full business audit (operations, marketing, pricing, systems)",
      "Most clients see ROI within the first 30 days"
    ]
  },
  {
    name: "6-Month Transformation",
    price: "$5,000",
    description: "Best for: doing $10K-$50K/mo, want to scale",
    featuredLabel: "Best Value",
    features: [
      "Everything in the Sprint, PLUS:",
      "Bi-weekly calls with deeper strategy",
      "Quarterly business review with data",
      "Pricing strategy overhaul",
      "Marketing plan development",
      "Hiring/delegation framework",
      "Go from doing everything yourself to running a real business"
    ]
  }
];

const faqs = [
  {
    question: "What kind of results can I expect?",
    answer:
      "Every business is different, but most Sprint clients identify $1,000-$5,000 in monthly revenue they were leaving on the table within the first 30 days."
  },
  {
    question: "Is this just motivational coaching?",
    answer:
      "No. This is strategy and execution. We build systems, fix pricing, optimize operations, and you will have homework."
  },
  {
    question: "Can I start with just a strategy session?",
    answer:
      "Absolutely. That is what it is there for. Most people book one, see the value, and upgrade."
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes, if you are past the idea stage and actively building. Pre-revenue businesses start with a Strategy Session."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

export default function CoachingPage() {
  return (
    <>
      <Script id="coaching-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Coaching</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Stop Guessing. Start Growing.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Strategic coaching for business owners who are done winging it.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Book a Free Strategy Call
              </Link>
              <Link href="#pricing" className="btn-secondary">
                View Coaching Options
              </Link>
            </div>
          </div>
          <div className="card-surface p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Strategic Coaching
            </p>
            <div className="mt-6 grid gap-4">
              {[
                "Structure your priorities before the week runs you",
                "Fix pricing, operations, and follow-through bottlenecks",
                "Get direct feedback from someone who has built businesses from scratch",
                "Leave every session knowing exactly what happens next"
              ].map((item) => (
                <div key={item} className="rounded-3xl bg-slate-50 p-5 text-sm leading-7 text-slate-600">
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
            eyebrow="Fit Check"
            title="Who this is for, and who it is not."
            description="This works when you want clarity, accountability, and real implementation. It does not work if you want passive inspiration."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="card-surface p-8">
              <h2 className="text-2xl font-semibold text-ink">✅ This IS for you if:</h2>
              <div className="mt-6 space-y-3">
                {[
                  "You're doing $5K-$50K/mo but can't break through",
                  "You're working IN your business, not ON it",
                  "You know you need systems but don't know where to start",
                  "You want accountability, not just advice"
                ].map((item) => (
                  <p key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="dark-panel p-8">
              <h2 className="text-2xl font-semibold text-white">❌ This is NOT for you if:</h2>
              <div className="mt-6 space-y-3">
                {[
                  "You're looking for motivation (try a podcast)",
                  "You want someone to do the work FOR you",
                  "You're not willing to implement",
                  "You're happy where you are"
                ].map((item) => (
                  <p key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-slate-200">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="section-space pt-0">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Pricing"
            title="Three ways to get a real game plan."
            description="No low-ticket fluff. Each option is built to create clarity, implementation, and measurable business movement."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-3xl p-8 shadow-soft ${
                  tier.featured || tier.featuredLabel
                    ? "border-2 border-accent bg-white"
                    : "border border-slate-200 bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                      {tier.name}
                    </p>
                    <p className="mt-5 text-4xl font-semibold text-ink">{tier.price}</p>
                  </div>
                  {tier.featured ? (
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                      Most Popular
                    </span>
                  ) : null}
                  {tier.featuredLabel ? (
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                      {tier.featuredLabel}
                    </span>
                  ) : null}
                </div>
                <div className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <p key={feature} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
                      {feature}
                    </p>
                  ))}
                </div>
                <p className="mt-6 text-sm font-medium leading-6 text-slate-700">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Why Me?"
            title="Experience that comes from building, selling, and fixing real businesses."
            description="You do not need another person handing you abstract ideas. You need someone who can tell the difference between a systems problem and an execution problem."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              "I've built multiple businesses from scratch. I know what works because I've done it — not because I read a book about it.",
              "10+ years in sales taught me one thing: every business problem is a people problem or a systems problem. I help you fix both.",
              "You don't need more information. You need someone who's been where you are to tell you what to do NEXT."
            ].map((item) => (
              <div key={item} className="card-surface p-8">
                <p className="text-base leading-8 text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionIntro
            eyebrow="FAQ"
            title="Questions worth answering before you book."
            description="The work is tactical. Expect direct feedback, clear priorities, and accountability tied to revenue and operations."
          />
          <div className="mt-10 grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="card-surface p-6">
                <summary className="cursor-pointer list-none text-lg font-semibold text-ink">
                  {faq.question}
                </summary>
                <p className="mt-4 text-base leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              You might also need...
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              Coaching clients get priority pricing on web design and AI automation.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/services/web" className="text-sm font-semibold text-accent">
                Explore Web Design →
              </Link>
              <Link href="/services/ai" className="text-sm font-semibold text-accent">
                Explore AI &amp; Automation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="This Isn't Therapy. It's a Game Plan."
        description="Book a free 30-minute strategy call — no sales pitch, just value."
        primaryHref="/contact"
        primaryLabel="Book My Free Strategy Call →"
      />
    </>
  );
}
