import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionIntro } from "@/components/SectionIntro";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Web & AI Services",
  "Custom websites, landing pages, SEO, conversion optimization, AI receptionists, and automation systems from Izzy Designs."
);

export default function DigitalServicesPage() {
  return (
    <>
      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <div className="card-surface p-8 sm:p-10">
            <p className="eyebrow">Web Development</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Websites built to convert, not just exist.
            </h1>
            <div className="mt-8 space-y-4 text-base leading-8 text-slate-600">
              <p>Custom websites that reflect the quality of your business and make the next step obvious.</p>
              <p>Landing pages built around a clear offer and a stronger call to action.</p>
              <p>SEO improvements that help the right people find you.</p>
              <p>Conversion optimization that reduces friction and increases inquiries.</p>
            </div>
          </div>
          <div className="card-surface p-8 sm:p-10">
            <p className="eyebrow">AI & Automation</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Practical systems that recover time and capture more leads.
            </h2>
            <div className="mt-8 space-y-4 text-base leading-8 text-slate-600">
              <p>Chatbots that answer questions and qualify leads on your site.</p>
              <p>AI receptionists that respond when your team cannot.</p>
              <p>Automated email and text follow-ups that stop leads from going cold.</p>
              <p>CRM setup that keeps customer data and communication organized.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Process"
            title="A simple four-step process."
            description="The work is structured so there is clarity at every step and every deliverable ties back to lead generation, efficiency, or customer experience."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              ["01", "Discovery", "Understand goals, current gaps, and the highest-value opportunities."],
              ["02", "Build", "Design and implement the website, systems, or automation plan."],
              ["03", "Launch", "Go live cleanly with testing, handoff, and tracking in place."],
              ["04", "Optimize", "Refine based on data, feedback, and where the next bottleneck appears."]
            ].map(([step, title, copy]) => (
              <div key={step} className="card-surface p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{step}</p>
                <h3 className="mt-4 text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="dark-panel p-8 sm:p-10 lg:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="eyebrow text-sky-200">AI Receptionist Comparison</p>
                <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                  Compare a traditional front desk cost to an AI-first system.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-300">
                Based on the pricing comparison referenced in the brief, AI can cover repetitive
                intake and first-response work for a fraction of the cost.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Human Receptionist</p>
                <p className="mt-4 text-5xl font-semibold text-white">$4,500</p>
                <p className="mt-3 text-sm text-slate-300">Typical monthly cost for full coverage.</p>
              </div>
              <div className="rounded-[2rem] border border-accent/30 bg-accent/10 p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-100">AI Receptionist</p>
                <p className="mt-4 text-5xl font-semibold text-white">$200/mo</p>
                <p className="mt-3 text-sm text-slate-200">
                  Always-on lead response, qualification, and handoff support.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Get a Free Website Audit
              </Link>
              <Link href="/contact#book" className="btn-secondary border-white/20 text-white hover:border-white hover:text-white">
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need a better website or smarter systems?"
        description="Let&apos;s review what is underperforming now and build a plan that improves visibility, lead flow, and operational efficiency."
        primaryHref="/contact"
        primaryLabel="Get a Free Website Audit"
        secondaryHref="/contact#book"
        secondaryLabel="Book a Call"
      />
    </>
  );
}
