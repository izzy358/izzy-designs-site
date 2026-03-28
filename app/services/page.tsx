import type { Metadata } from "next";
import Script from "next/script";
import { CTASection } from "@/components/CTASection";
import { SectionIntro } from "@/components/SectionIntro";
import { ServiceCard } from "@/components/ServiceCard";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Services",
  "Explore business coaching, web design services, AI automation, and vetted partner connections for small business from Izzy Designs.",
  "/services"
);

const services = [
  {
    name: "Business Coaching & Strategy",
    description:
      "Weekly support, action plans, accountability, and real-world guidance for solopreneurs and small business owners.",
    url: "https://izzydesigns.io/services/coaching"
  },
  {
    name: "Web Design & Digital Presence",
    description: "Websites, branding, and everything that makes your business look legit.",
    url: "https://izzydesigns.io/services/web"
  },
  {
    name: "AI & Automation",
    description: "Stop working harder. Let AI handle the repetitive stuff.",
    url: "https://izzydesigns.io/services/ai"
  },
  {
    name: "Our Network",
    description:
      "Trusted partner connections for business funding and Bay Area real estate through one relationship.",
    url: "https://izzydesigns.io/network"
  },
  {
    name: "Business Funding",
    description:
      "Get connected to a vetted funding broker who shops multiple lenders on your behalf.",
    url: "https://izzydesigns.io/network/funding"
  },
  {
    name: "Real Estate Connections",
    description:
      "Get connected to trusted Bay Area real estate and mortgage partners for commercial and residential property needs.",
    url: "https://izzydesigns.io/network/real-estate"
  }
];

const faqs = [
  {
    question: "How much does a business website cost?",
    answer:
      "Landing pages start at $500. Full custom websites start at $2,500. We scope every project individually."
  },
  {
    question: "What is AI automation for small business?",
    answer:
      "AI automation handles repetitive tasks like answering calls, following up with leads, managing reviews, and booking appointments — without hiring staff."
  },
  {
    question: "How long does a website take to build?",
    answer:
      "Landing pages are delivered in 3-5 business days. Full custom sites take 2-4 weeks depending on scope."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes. We can break larger projects into milestone-based payments."
  },
  {
    question: "What makes Izzy Designs different from other agencies?",
    answer:
      "Real business experience. Izzy has 10+ years in sales and 7+ years running businesses. The advice comes from doing it, not reading about it."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Izzy Designs Services",
  serviceType: services.map((service) => service.name),
  provider: {
    "@type": "Organization",
    name: "Izzy Designs",
    url: "https://izzydesigns.io"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Izzy Designs Service Categories",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: service.url
      }
    }))
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

export default function ServicesPage() {
  return (
    <>
      <Script id="services-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Script id="services-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section className="section-space">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Services"
            title="Three ways to build a stronger business."
            description="Each offer is designed to help small businesses solve a different part of the growth equation: strategic clarity, a stronger digital presence, and better systems behind the scenes."
            center
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <ServiceCard
              icon="🧠"
              title="Business Coaching & Strategy"
              description="Weekly support, action plans, accountability, and real-world guidance for solopreneurs and small business owners."
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
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          {[
            [
              "Coaching",
              "Ideal if you need direction, momentum, and accountability to tighten the business and make better decisions faster."
            ],
            [
              "Web",
              "Ideal if your site is not reflecting the quality of your business or is failing to make you look established online."
            ],
            [
              "AI",
              "Ideal if repetitive work, missed calls, and inconsistent follow-up are consuming hours every week."
            ]
          ].map(([title, copy]) => (
            <div key={title} className="card-surface p-8">
              <h3 className="text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionIntro
            eyebrow="FAQ"
            title="Questions business owners usually ask before getting started."
            description="These are the most common questions around pricing, timing, and what the work actually looks like."
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
        title="Not sure which path fits best?"
        description="Start with a discovery conversation and map the best next move based on your business stage, bottlenecks, and goals."
        primaryHref="/contact#book"
        primaryLabel="Book a Discovery Call"
      />
    </>
  );
}
