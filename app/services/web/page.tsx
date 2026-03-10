import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { CTASection } from "@/components/CTASection";
import { SectionIntro } from "@/components/SectionIntro";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Web Design",
  "Custom websites, landing pages, branding, and digital presence packages for small businesses that need to look established online.",
  "/services/web"
);

const faqs = [
  {
    question: "What if I already have a website?",
    answer: "We can redesign it or optimize what you have. Book a call and we will look at it together."
  },
  {
    question: "Can I update the site myself?",
    answer: "Yes. We build on platforms you can manage, and we train you on how."
  },
  {
    question: "What's included in the $500 landing page?",
    answer: "Everything you need to start getting leads: responsive design, contact form, Google Maps, basic SEO, and hosting setup."
  },
  {
    question: "Do you do e-commerce?",
    answer: "Yes. Custom online stores start at $3,500."
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

export default function WebServicesPage() {
  return (
    <>
      <Script id="web-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow">Web Design</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Look Like a Fortune 500. Price of a Freelancer.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Custom websites, landing pages, and everything that makes your business look
              professional online.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                See Examples of Our Work
              </Link>
              <Link href="#quick-launch" className="btn-secondary">
                View Packages
              </Link>
            </div>
          </div>

          <div className="card-surface p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Built to Sell
            </p>
            <div className="mt-6 grid gap-4">
              {[
                "Custom websites and landing pages built around one clear next step",
                "Professional digital presence across your site, email, Google listing, and social profiles",
                "Content structure that helps customers trust you fast",
                "Systems and reporting that show what is actually generating leads"
              ].map((item) => (
                <div key={item} className="rounded-3xl bg-slate-50 p-5 text-sm leading-7 text-slate-600">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="quick-launch" className="section-space pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card-surface p-8 sm:p-10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="eyebrow">Quick Launch</p>
                <h2 className="mt-4 text-3xl font-semibold text-ink">$500 Landing Page</h2>
              </div>
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Limited to 2 per month
              </span>
            </div>
            <div className="mt-8 space-y-3">
              {[
                "1-page conversion-focused site",
                "Mobile responsive",
                "Contact form + Google Maps integration",
                "Basic SEO setup"
              ].map((item) => (
                <p key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-6 text-base leading-7 text-slate-700">
              Perfect for new businesses that need to get online THIS WEEK.
            </p>
            <p className="mt-2 text-sm font-medium text-accent">Turnaround: 3-5 business days</p>
          </div>

          <div className="dark-panel p-8 sm:p-10">
            <p className="eyebrow text-sky-200">Full Custom Website</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Starting at $2,500</h2>
            <div className="mt-8 space-y-3">
              {[
                "Multi-page site (5-10 pages)",
                "Blog/content hub for organic traffic",
                "Appointment booking integration",
                "Analytics dashboard",
                "Ongoing SEO optimization"
              ].map((item) => (
                <p key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-slate-200">
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-6 text-base leading-7 text-slate-300">
              For established businesses ready to level up their online presence.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="rounded-[2rem] border-2 border-accent bg-white p-8 shadow-soft sm:p-10">
            <p className="eyebrow">Pro Business Setup</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-ink">$750</h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
                  Everything that makes a small business look established — in one package.
                </p>
              </div>
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                Premium Package
              </span>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-ink">Custom Domain Email</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  yourname@yourbusiness.com, not @gmail.com
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                  <li>Google Workspace setup + configuration</li>
                  <li>Professional email signatures with logo</li>
                </ul>
                <p className="mt-4 text-sm font-medium text-slate-700">
                  Nothing says &quot;I started last week&quot; like a Gmail address on your business
                  card.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-ink">Google Business Profile Optimization</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                  <li>Complete setup with photos, hours, services, posts</li>
                  <li>Local SEO boost</li>
                </ul>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-ink">Social Media Profile Setup</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                  <li>Consistent branding across Instagram, Facebook, LinkedIn</li>
                  <li>Profile photos, cover images, bio copy</li>
                </ul>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-ink">Brand Essentials Kit</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                  <li>Logo refinement</li>
                  <li>Brand colors + fonts documented</li>
                  <li>Digital business card + email signature template</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="card-surface p-8 sm:p-10">
            <p className="eyebrow">Monthly Maintenance</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-3xl font-semibold text-ink">$150/mo</h2>
              <p className="text-sm font-medium text-accent">Keep the site secure and current.</p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Hosting, updates, security",
                "Minor content edits (up to 2 per month)",
                "Monthly analytics report",
                "Priority support"
              ].map((item) => (
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
            eyebrow="FAQ"
            title="Clear answers before you commit."
            description="The work is scoped to move fast, look polished, and support the sales process instead of becoming another creative project that drags on."
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
              Want your website to work even harder? Add an AI receptionist.
            </p>
            <Link href="/services/ai" className="mt-6 inline-flex text-sm font-semibold text-accent">
              Explore AI &amp; Automation →
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Your Website Should Be Your Best Salesperson"
        description="It works 24/7, never calls in sick, and costs less than one month of rent."
        primaryHref="/contact"
        primaryLabel="Get a Free Website Review →"
      />
    </>
  );
}
