import type { Metadata } from "next";
import { SectionIntro } from "@/components/SectionIntro";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Contact",
  "Book a free strategy call, request business consulting, or get a web design quote from Izzy Designs.",
  "/contact"
);

export default function ContactPage() {
  return (
    <section className="section-space">
      <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <SectionIntro
            eyebrow="Contact"
            title="Let&apos;s talk about what your business needs next."
            description="Use the form to share what you&apos;re building, what feels stuck, and which service you&apos;re interested in. If you&apos;re ready to talk live, book a call below."
          />
          <form
            action="https://formspree.io/f/xbdaaddp"
            method="POST"
            className="mt-10 space-y-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-ink"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-ink"
                />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink">Business Name</span>
                <input
                  type="text"
                  name="business_name"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-ink"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink">Service Interest</span>
                <select
                  name="service_interest"
                  defaultValue=""
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-ink"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="coaching">Business Coaching & Strategy</option>
                  <option value="web">Web Design & Digital Presence</option>
                  <option value="ai">AI & Automation</option>
                  <option value="multiple">Multiple Services</option>
                </select>
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-ink">Message</span>
              <textarea
                name="message"
                rows={6}
                required
                className="w-full rounded-3xl border border-slate-200 px-4 py-3 text-sm text-ink"
                placeholder="Tell me about your business, where things feel stuck, and what kind of support you need."
              />
            </label>
            <button type="submit" className="btn-primary">
              Send Inquiry
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div id="book" className="dark-panel p-8">
            <p className="eyebrow text-sky-200">Book a Call</p>
            <h2 className="mt-4 text-2xl font-semibold">Schedule a strategy conversation.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The embed below uses the current placeholder Calendly URL from the brief and can be swapped later without changing the page layout.
            </p>
            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10">
              <iframe
                src="https://calendly.com/izzydesigns"
                title="Calendly booking"
                className="h-[32rem] w-full bg-white"
              />
            </div>
          </div>
          <div className="card-surface p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Direct Contact</p>
            <a href="mailto:izzy@izzydesigns.io" className="mt-4 block text-lg font-semibold text-accent">
              izzy@izzydesigns.io
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                ["Instagram", "https://www.instagram.com"],
                ["LinkedIn", "https://www.linkedin.com"],
                ["Facebook", "https://www.facebook.com"]
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-accent hover:text-accent"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
