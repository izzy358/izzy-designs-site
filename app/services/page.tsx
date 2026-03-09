import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionIntro } from "@/components/SectionIntro";
import { ServiceCard } from "@/components/ServiceCard";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Services",
  "Explore coaching, custom web development, and AI automation services from Izzy Designs."
);

export default function ServicesPage() {
  return (
    <>
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
              title="Web Design & Development"
              description="Custom sites, landing pages, SEO improvements, and conversion-focused structure built to generate better leads."
              href="/services/digital"
            />
            <ServiceCard
              icon="🤖"
              title="AI & Automation"
              description="AI receptionists, chatbots, email and text automation, and CRM setup that reduce manual work and improve response speed."
              href="/services/digital"
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
              "Ideal if your site is not reflecting the quality of your business or is failing to turn visitors into booked calls."
            ],
            [
              "AI",
              "Ideal if leads are falling through the cracks and repetitive follow-up is consuming hours every week."
            ]
          ].map(([title, copy]) => (
            <div key={title} className="card-surface p-8">
              <h3 className="text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{copy}</p>
            </div>
          ))}
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
