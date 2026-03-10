import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { CTASection } from "@/components/CTASection";
import { SectionIntro } from "@/components/SectionIntro";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "AI & Automation",
  "AI receptionists and automation systems that answer calls, follow up with leads, manage reviews, and book appointments around the clock.",
  "/services/ai"
);

const automationTiers = [
  {
    name: "Starter",
    price: "$200/mo",
    description: "Best for: solo operators who just need calls handled",
    features: [
      "AI Receptionist only",
      "24/7 call answering",
      "Call summaries to your phone"
    ]
  },
  {
    name: "Growth",
    price: "$400/mo",
    description: "Best for: businesses ready to stop losing leads",
    featured: true,
    features: [
      "AI Receptionist",
      "Automated Lead Follow-Up",
      "Instant text/email within 60 seconds",
      "Day 1/3/7 sequence",
      "Review Management",
      "Automated review requests, monitoring, alerts"
    ]
  },
  {
    name: "Full Suite",
    price: "$600/mo",
    description: "Best for: businesses that want full automation",
    features: [
      "Everything in Growth",
      "Appointment Booking",
      "AI scheduling and reminders",
      "Reduces no-shows 30-40%",
      "Smart CRM Setup",
      "Customer tracking and automated follow-ups"
    ]
  }
];

const faqs = [
  {
    question: "Do I need to be tech-savvy?",
    answer: "No. We handle everything. You just answer your phone like normal."
  },
  {
    question: "Will it sound like a robot?",
    answer: "No. Modern AI sounds natural and conversational, and most callers cannot tell the difference."
  },
  {
    question: "What if a caller needs a real person?",
    answer: "Your AI can transfer urgent calls to you or your team instantly."
  },
  {
    question: "How long does setup take?",
    answer: "Most businesses are live within 48 hours."
  },
  {
    question: "Can I try it before committing?",
    answer: "Yes. Book a free demo and we will show you exactly how it works for your business."
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

export default function AiServicesPage() {
  return (
    <>
      <Script id="ai-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">AI &amp; Automation</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Your Business, Running 24/7 — Without Hiring Anyone
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              AI-powered tools that answer calls, follow up with leads, manage reviews, and
              book appointments while you sleep.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Get a Free AI Audit
              </Link>
              <Link href="#stack" className="btn-secondary">
                Explore Packages
              </Link>
            </div>
          </div>

          <div className="dark-panel p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="text-4xl">☎️</span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">
                  AI Receptionist
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-white">The lead-capture layer.</h2>
              </div>
            </div>
            <div className="mt-8 grid gap-4">
              {[
                "Answers calls 24/7 in your brand's voice",
                "Qualifies leads, books appointments, answers FAQs",
                "Transfers urgent calls to you"
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-200">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[2rem] border border-accent/30 bg-accent/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-100">
                Cost Comparison
              </p>
              <p className="mt-3 text-3xl font-semibold text-white">$200/mo vs $4,500/mo</p>
              <p className="mt-2 text-sm text-slate-200">for a human receptionist</p>
            </div>
            <p className="mt-6 text-lg font-medium italic text-white">
              &quot;Your customers don&apos;t leave voicemails. They call the next business.&quot;
            </p>
          </div>
        </div>
      </section>

      <section id="stack" className="section-space pt-0">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Automation Stack"
            title="Build the system you need now, then layer on more later."
            description="Start with the receptionist, or roll out a fuller automation stack if you are ready to tighten lead handling, reviews, scheduling, and follow-up."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {automationTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-3xl p-8 shadow-soft ${
                  tier.featured
                    ? "border-2 border-accent bg-white"
                    : "border border-slate-200 bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                      {tier.name}
                    </p>
                    <p className="mt-4 text-4xl font-semibold text-ink">{tier.price}</p>
                  </div>
                  {tier.featured ? (
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                      Most Popular
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
            eyebrow="Comparison"
            title="What automation changes in real life."
            description="The difference is not theory. It is whether leads get handled immediately or sit waiting for you to find the time."
          />
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
            <div className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-slate-200 bg-slate-50 px-6 py-5 text-sm font-semibold text-slate-700">
              <p>Task</p>
              <p>You (Manual)</p>
              <p>With AI</p>
            </div>
            {[
              ["Answering calls", "Miss 60%+ after hours", "24/7, every call answered"],
              ["Following up on leads", "\"I'll call them back\" (you won't)", "Instant response, auto follow-up"],
              ["Asking for reviews", "Forget most of the time", "Automatic after every job"],
              ["Booking appointments", "Phone tag, back and forth", "Customer self-books instantly"],
              ["Time spent per week", "10-15 hours on admin", "Near zero"]
            ].map(([task, manual, automated]) => (
              <div
                key={task}
                className="grid grid-cols-1 gap-3 border-t border-slate-200 px-6 py-5 text-sm leading-7 text-slate-600 sm:grid-cols-[1.1fr_1fr_1fr] sm:gap-6"
              >
                <p className="font-semibold text-ink">{task}</p>
                <p>{manual}</p>
                <p className="font-medium text-accent">{automated}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="dark-panel grid gap-6 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow text-sky-200">Live Demo</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Want to see how it works?
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
                Click the chat bubble in the bottom right to talk to our AI receptionist — live,
                right now.
              </p>
              <p className="mt-3 text-base leading-8 text-slate-300">
                No signup. No download. Just click and talk.
              </p>
            </div>
            <div className="flex items-center justify-end text-5xl text-accent motion-safe:animate-bounce">
              ↘
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionIntro
            eyebrow="FAQ"
            title="Questions small business owners usually ask first."
            description="You do not need to figure out the tooling. The goal is a clean handoff and a system that sounds like your business."
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
              Many of our AI clients also use our web design services to complete their digital
              presence.
            </p>
            <Link href="/services/web" className="mt-6 inline-flex text-sm font-semibold text-accent">
              Explore Web Design →
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Stop Missing Calls. Start Closing More Deals."
        description="Get a free AI audit and see exactly where an AI receptionist or automation stack will recover missed revenue."
        primaryHref="/contact"
        primaryLabel="Get a Free AI Audit →"
      />
    </>
  );
}
