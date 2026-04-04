import type { Metadata } from "next";
import Script from "next/script";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Business Consulting & Partner Network",
  "Izzy Designs helps businesses grow with strategic consulting, funding connections, and a curated partner network. One call, full access to the team.",
  "/"
);

const capabilities = [
  {
    letter: "A",
    title: "Automotive",
    description:
      "Industry consulting, dealer licensing, vendor connections. We know the business inside and out.",
    tag: "Industry"
  },
  {
    letter: "R",
    title: "Real Estate",
    description:
      "Investment strategy, market connections, tools. Access our real estate network.",
    tag: "Industry"
  },
  {
    letter: "S",
    title: "Small Business",
    description:
      "Growth consulting for local businesses. Don't know where to start? That's exactly where we come in.",
    tag: "Consulting"
  },
  {
    letter: "D",
    title: "Digital & Web",
    description:
      "Websites, SEO, online presence. Built and managed by our design & development partners.",
    tag: "Services"
  },
  {
    letter: "F",
    title: "Business Funding",
    description:
      "Need capital? Our broker network connects you with the right funding for your stage and goals.",
    tag: "Capital"
  },
  {
    letter: "$",
    title: "Financial Services",
    description:
      "Business formation, taxes, credit repair, financial planning. Get your foundation right first.",
    tag: "Finance"
  },
  {
    letter: "T",
    title: "Technology & AI",
    description:
      "Automation, integrations, smart tools. Implemented by specialists who know your industry.",
    tag: "Services"
  },
  {
    letter: "N",
    title: "The Network",
    description:
      "You don't need five vendors. You need one call. Developers, designers, marketers, brokers, specialists — we bring the team.",
    tag: "Access",
    featured: true
  }
];

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Izzy Designs",
  url: "https://izzydesigns.io",
  description:
    "Izzy Designs helps businesses grow with strategic consulting, funding connections, and a curated partner network. One call, full access to the team.",
  areaServed: "United States",
  serviceType: [
    "Automotive Consulting",
    "Real Estate Strategy",
    "Small Business Consulting",
    "Digital and Web Presence",
    "Business Funding",
    "Financial Services",
    "Technology and AI",
    "Curated Partner Network"
  ],
  email: "izzy@izzydesigns.io"
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Izzy Designs",
  url: "https://izzydesigns.io",
  email: "izzy@izzydesigns.io",
  description:
    "Business consulting firm with a curated partner network for strategy, funding, digital execution, and specialist connections."
};

export default function HomePage() {
  return (
    <>
      <Script id="home-professional-service-schema" type="application/ld+json">
        {JSON.stringify(professionalServiceSchema)}
      </Script>
      <Script id="home-organization-schema" type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </Script>

      <section className="section-space pb-10 sm:pb-14">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl pt-10 text-center sm:pt-16">
            <p className="eyebrow">Consulting · Strategy · Connections</p>
            <h1 className="mt-8 text-5xl font-black tracking-[-0.08em] text-white sm:text-6xl lg:text-[72px] lg:leading-[0.95]">
              Your business.
              <br />
              Our <span className="text-[#555555]">network</span>.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-[#707070] sm:text-base">
              We help businesses grow with the right strategy, the right systems, and the right
              people. One conversation is all it takes.
            </p>
            <div className="mx-auto mt-10 h-px w-12 bg-[#222222]" />
          </div>
        </div>
      </section>

      <section id="about" className="pb-20">
        <div className="container-shell">
          <div className="grid gap-8 border-y border-[#111111] py-12 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
            <div>
              <p className="eyebrow">About</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                One firm. Full access to the right operators.
              </h2>
            </div>
            <div className="grid gap-6 text-sm leading-7 text-[#767676] sm:grid-cols-2">
              <p>
                Izzy Designs is built for business owners who need clarity, traction, and trusted
                execution without assembling five separate vendors.
              </p>
              <p>
                We lead the strategy, identify the real bottlenecks, and connect you to specialists
                across funding, digital, finance, operations, and industry-specific growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="pb-10">
        <div className="container-shell">
          <div className="mb-10 text-center">
            <p className="eyebrow">How We Help</p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className={[
                  "flex min-h-[16rem] flex-col justify-between overflow-hidden rounded-[1.6rem] border bg-sand p-8 transition",
                  item.featured
                    ? "border-[#1e1e1e] bg-[#0c0c0c] hover:border-[#2c2c2c]"
                    : "border-[#161616] hover:border-[#2a2a2a] hover:bg-[#0d0d0d]"
                ].join(" ")}
              >
                <div>
                  <div
                    className={[
                      "text-[44px] font-black tracking-[-0.08em] text-white",
                      item.featured ? "opacity-15" : "opacity-[0.1]"
                    ].join(" ")}
                  >
                    {item.letter}
                  </div>
                  <h3 className="mt-4 text-[17px] font-semibold text-white">{item.title}</h3>
                  <p
                    className={[
                      "mt-3 text-[13px] leading-6",
                      item.featured ? "text-[#666666]" : "text-[#555555]"
                    ].join(" ")}
                  >
                    {item.description}
                  </p>
                </div>
                <span className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#333333]">
                  {item.tag}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 pt-12">
        <div className="container-shell text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#333333]">
            Trusted by small businesses across industries
          </p>
        </div>
      </section>

      <section id="contact" className="section-space pt-0">
        <div className="container-shell">
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow">Let&apos;s Talk</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
              Book a Consultation
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#7b7b7b] sm:text-[15px]">
              No pitch deck. No pressure. Just a conversation about where you&apos;re trying to
              go.
            </p>
          </div>
          <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="card-surface p-7 sm:p-8">
              <form action="https://formspree.io/f/xbdaaddp" method="POST" className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#686868]">
                      Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full rounded-2xl px-4 py-3 text-sm"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#686868]">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-2xl px-4 py-3 text-sm"
                    />
                  </label>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#686868]">
                      Business Name
                    </span>
                    <input
                      type="text"
                      name="business_name"
                      className="w-full rounded-2xl px-4 py-3 text-sm"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#686868]">
                      Service Interest
                    </span>
                    <select
                      name="service_interest"
                      defaultValue=""
                      className="w-full rounded-2xl px-4 py-3 text-sm"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option>Business Consulting &amp; Strategy</option>
                      <option>Automotive Industry</option>
                      <option>Real Estate</option>
                      <option>Business Funding</option>
                      <option>Financial Services (Credit, Taxes, Formation)</option>
                      <option>Digital &amp; Web Presence</option>
                      <option>Technology &amp; AI</option>
                      <option>Not Sure — Let&apos;s Talk</option>
                    </select>
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#686868]">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={7}
                    required
                    placeholder="Tell us what you&apos;re building, where things feel stuck, and what kind of support would move things forward."
                    className="w-full rounded-[1.5rem] px-4 py-3 text-sm"
                  />
                </label>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Inquiry
                </button>
              </form>
            </div>

            <div className="card-surface p-4 sm:p-5">
              <div className="overflow-hidden rounded-[1.5rem] border border-[#161616]">
                <iframe
                  src="https://api.izzydesigns.io/widget/booking/hH3rCiPa9z5dAdA53gGG"
                  style={{ width: "100%", border: "none", overflow: "hidden" }}
                  scrolling="no"
                  id="hH3rCiPa9z5dAdA53gGG_1773725614891"
                  title="Book a consultation"
                  className="h-[32rem] w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <Script src="https://api.izzydesigns.io/js/form_embed.js" strategy="lazyOnload" />
      </section>
    </>
  );
}
