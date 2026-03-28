import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { CTASection } from "@/components/CTASection";
import { SectionIntro } from "@/components/SectionIntro";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Real Estate Connections",
  "Get connected to trusted Bay Area real estate and mortgage partners for commercial and residential property moves.",
  "/network/real-estate"
);

const commercialOptions = [
  "Office space",
  "Retail locations",
  "Warehouses",
  "Investment properties"
];

const residentialOptions = [
  "First-time buyers",
  "Upgrading",
  "Investment properties",
  "Relocations"
];

const steps = ["Tell us what you need", "Get matched", "Move forward with confidence"];

const faqs = [
  {
    question: "Do you help with both commercial and residential real estate?",
    answer:
      "Yes. We can connect you with trusted partners for business property needs as well as residential purchases, upgrades, investments, and relocations."
  },
  {
    question: "Can you connect me with a mortgage broker too?",
    answer:
      "Yes. The real estate connection includes access to a trusted mortgage broker who may help you secure better rates and financing options."
  },
  {
    question: "Is this focused on the Bay Area only?",
    answer:
      "The network is built with a Bay Area focus, especially for people buying, leasing, or investing in that market."
  },
  {
    question: "What if I am not ready to buy right away?",
    answer:
      "That is fine. A good introduction early can help you understand the market, financing path, and next steps before you are under pressure."
  },
  {
    question: "Why go through Izzy Designs instead of searching on my own?",
    answer:
      "Because the goal is to shortcut the noise and get introduced to trusted people through one relationship instead of starting from scratch."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Real Estate Connections",
  serviceType: "Real Estate Referral",
  url: "https://izzydesigns.io/network/real-estate",
  description:
    "Izzy Designs connects clients with trusted Bay Area real estate and mortgage partners for commercial and residential property needs.",
  provider: {
    "@type": "Organization",
    name: "Izzy Designs",
    url: "https://izzydesigns.io"
  },
  areaServed: {
    "@type": "Place",
    name: "Bay Area"
  }
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

export default function RealEstateConnectionsPage() {
  return (
    <>
      <Script id="real-estate-service-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Script id="real-estate-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Real Estate Connections</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Find the Right Property. Get the Best Rate.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Navigating real estate alone usually means leaving money on the table. We connect
              you with a trusted real estate agent and a mortgage broker so you can move with
              better information and leverage.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact#book" className="btn-primary">
                Let&apos;s Find Your Next Property
              </Link>
              <Link href="#faq" className="btn-secondary">
                View FAQ
              </Link>
            </div>
          </div>

          <div className="card-surface p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Bay Area Focus
            </p>
            <div className="mt-6 grid gap-4">
              {[
                "Trusted Bay Area real estate agent connection",
                "Mortgage broker support to help you compare rates",
                "Commercial and residential guidance",
                "A simpler path through one relationship"
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
            title="Going in alone usually costs more than people realize."
            description="Without the right agent, the right financing partner, and local context, it is easy to overpay, miss opportunities, or waste time on the wrong properties."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="card-surface p-8">
              <h2 className="text-2xl font-semibold text-ink">What we offer</h2>
              <div className="mt-6 space-y-3">
                {[
                  "A direct connection to a trusted real estate agent",
                  "A direct connection to a mortgage broker who can help you secure better rates",
                  "Support for commercial and residential needs",
                  "Bay Area market context through vetted local partners"
                ].map((item) => (
                  <p key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="dark-panel p-8">
              <h2 className="text-2xl font-semibold text-white">Why this matters</h2>
              <div className="mt-6 space-y-3">
                {[
                  "You avoid starting cold with random brokers and agents",
                  "You can compare financing more intelligently",
                  "You get a clearer path whether you are buying, leasing, or investing",
                  "You move faster with more confidence"
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
              eyebrow="Commercial"
              title="Property support for business and investment moves."
              description="Use the network when you need the right property and a financing path that matches the deal."
            />
            <div className="mt-8 space-y-3">
              {commercialOptions.map((item) => (
                <p key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="card-surface p-8">
            <SectionIntro
              eyebrow="Residential"
              title="Support for buyers, movers, and investors."
              description="The same network can help if you are entering the market, moving up, relocating, or buying with an investment lens."
            />
            <div className="mt-8 space-y-3">
              {residentialOptions.map((item) => (
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
            title="Simple handoff. Better next step."
            description="Tell us what you need, get matched to the right partner, and move forward with confidence."
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
            title="Common questions about real estate connections."
            description="These are the questions people usually ask before they want an introduction."
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
        title="Let&apos;s find the right property and financing path."
        description="Start with a conversation and we will connect you to the Bay Area partner who fits what you are trying to do."
        primaryHref="/contact#book"
        primaryLabel="Let&apos;s Find Your Next Property"
      />
    </>
  );
}
