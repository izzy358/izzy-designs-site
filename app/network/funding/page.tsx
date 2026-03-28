import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { CTASection } from "@/components/CTASection";
import { SectionIntro } from "@/components/SectionIntro";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Business Funding",
  "Get connected to a vetted funding broker who shops multiple lenders and helps your business find the right capital.",
  "/network/funding"
);

const fundingTypes = [
  "Working capital",
  "Equipment financing",
  "Expansion loans",
  "Lines of credit",
  "SBA loans",
  "Merchant cash advances"
];

const fitItems = [
  "Businesses looking to scale without stalling cash flow",
  "Owners covering seasonal gaps or short-term working capital needs",
  "Teams purchasing equipment or vehicles to support growth",
  "Businesses funding a project, expansion, or major opportunity"
];

const steps = ["Book a call", "Get matched with funding options", "Get funded"];

const faqs = [
  {
    question: "What types of businesses can get funding support?",
    answer:
      "Most established small businesses can explore options, especially if they need working capital, equipment financing, expansion money, or a line of credit."
  },
  {
    question: "Do I have to apply with multiple lenders myself?",
    answer:
      "No. The point of the connection is to work with a vetted funding broker who shops multiple lenders on your behalf."
  },
  {
    question: "Can I still explore funding if my credit or financials are not perfect?",
    answer:
      "Yes. Different lenders have different requirements, and a broker can help identify which options are realistic based on your situation."
  },
  {
    question: "How fast can funding happen?",
    answer:
      "Timing depends on the product and your documents, but some options move quickly while others, like SBA loans, take longer."
  },
  {
    question: "Will I be pushed into one funding product?",
    answer:
      "No. The goal is to compare options and terms so you can make a better decision instead of settling for the first offer."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Business Funding Connections",
  serviceType: "Business Funding Referral",
  url: "https://izzydesigns.io/network/funding",
  description:
    "Izzy Designs connects business owners with a vetted funding broker who shops multiple lenders for working capital, equipment financing, expansion loans, and more.",
  provider: {
    "@type": "Organization",
    name: "Izzy Designs",
    url: "https://izzydesigns.io"
  },
  areaServed: "United States"
};

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

export default function FundingPage() {
  return (
    <>
      <Script id="funding-service-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Script id="funding-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Business Funding</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Get the Capital Your Business Needs
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Most small business owners do not know their funding options or end up stuck with
              bad terms. We connect you to someone who can help you compare the market before you
              commit.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact#book" className="btn-primary">
                Let&apos;s Talk About Funding
              </Link>
              <Link href="#faq" className="btn-secondary">
                View FAQ
              </Link>
            </div>
          </div>

          <div className="card-surface p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              What We Offer
            </p>
            <div className="mt-6 grid gap-4">
              {[
                "Direct connection to a vetted funding broker",
                "Multiple lenders shopped on your behalf",
                "Clearer visibility into rates, terms, and fit",
                "Support for growth, equipment, cash flow, and project funding"
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
            eyebrow="The Problem"
            title="Most owners do not know what good funding looks like until it is too late."
            description="The wrong product, the wrong timing, or the wrong terms can create more pressure instead of solving the problem. The first goal is getting visibility into real options."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="card-surface p-8">
              <h2 className="text-2xl font-semibold text-ink">Why people get stuck</h2>
              <div className="mt-6 space-y-3">
                {[
                  "They only see one lender or one offer",
                  "They do not know which product actually fits the need",
                  "They accept bad terms because they need cash fast",
                  "They waste time applying in the wrong places"
                ].map((item) => (
                  <p key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="dark-panel p-8">
              <h2 className="text-2xl font-semibold text-white">What changes with the right connection</h2>
              <div className="mt-6 space-y-3">
                {[
                  "A vetted broker compares multiple lenders for you",
                  "You get matched to products that fit your business stage",
                  "You can weigh terms before making a decision",
                  "The process gets simpler and more focused"
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

      <section className="section-space pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <div className="card-surface p-8">
            <SectionIntro
              eyebrow="Funding Types"
              title="The kinds of capital business owners usually need."
              description="The goal is not to force one product. It is to identify the right structure for the actual use case."
            />
            <div className="mt-8 space-y-3">
              {fundingTypes.map((item) => (
                <p key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="card-surface p-8">
            <SectionIntro
              eyebrow="Who It&apos;s For"
              title="Built for businesses trying to move, not sit still."
              description="This is a fit when capital would help you create momentum instead of scrambling from one problem to the next."
            />
            <div className="mt-8 space-y-3">
              {fitItems.map((item) => (
                <p key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionIntro
            eyebrow="How It Works"
            title="Three steps. No mystery."
            description="Start with the conversation, get matched to real options, then decide what makes sense for the business."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step} className="card-surface p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  Step {index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-ink">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section-space pt-0">
        <div className="container-shell">
          <SectionIntro
            eyebrow="FAQ"
            title="Common questions about business funding."
            description="These are the questions most owners ask before they decide to explore options."
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

      <CTASection
        title="Let&apos;s talk about the funding path that fits the business."
        description="Start with a quick conversation so we can understand what you need and connect you with the right funding partner."
        primaryHref="/contact#book"
        primaryLabel="Let&apos;s Talk About Funding"
      />
    </>
  );
}
