import type { Metadata } from "next";
import Script from "next/script";
import { CTASection } from "@/components/CTASection";
import { SectionIntro } from "@/components/SectionIntro";
import { ServiceCard } from "@/components/ServiceCard";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Our Network",
  "Vetted partner connections for business funding and Bay Area real estate through Izzy Designs.",
  "/network"
);

const networkSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Izzy Designs Network",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      url: "https://izzydesigns.io/network/funding",
      name: "Business Funding"
    },
    {
      "@type": "ListItem",
      position: 2,
      url: "https://izzydesigns.io/network/real-estate",
      name: "Real Estate Connections"
    }
  ]
};

export default function NetworkPage() {
  return (
    <>
      <Script id="network-schema" type="application/ld+json">
        {JSON.stringify(networkSchema)}
      </Script>

      <section className="section-space">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Our Network"
            title="Vetted partners. Real connections. One call away."
            description="Beyond strategy and web — we connect you with trusted partners who help your business move forward."
            center
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <ServiceCard
              icon="💰"
              title="Business Funding"
              description="Get connected to a vetted funding broker who can shop lenders, compare options, and help you find terms that fit the business."
              href="/network/funding"
            />
            <ServiceCard
              icon="🏠"
              title="Real Estate Connections"
              description="Get introduced to trusted Bay Area real estate and mortgage partners who can help you buy, lease, invest, or relocate with better guidance."
              href="/network/real-estate"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure what you need? Start with a conversation."
        description="Tell us what you are trying to do, where you are stuck, and we will point you toward the right next move."
        primaryHref="/contact#book"
        primaryLabel="Book a Call"
      />
    </>
  );
}
