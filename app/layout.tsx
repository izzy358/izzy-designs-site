import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const baseUrl = "https://izzydesigns.io";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Izzy Designs | Business Consulting & Partner Network",
    template: "%s | Izzy Designs"
  },
  description:
    "Izzy Designs helps businesses grow with strategic consulting, funding connections, and a curated partner network. One call, full access to the team.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Izzy Designs | Business Consulting & Partner Network",
    description:
      "Izzy Designs helps businesses grow with strategic consulting, funding connections, and a curated partner network. One call, full access to the team.",
    url: baseUrl,
    siteName: "Izzy Designs",
    images: [
      {
        url: `${baseUrl}/og-default.png`,
        width: 1200,
        height: 630,
        alt: "Izzy Designs | Business Consulting & Partner Network"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Izzy Designs | Business Consulting & Partner Network",
    description:
      "Izzy Designs helps businesses grow with strategic consulting, funding connections, and a curated partner network. One call, full access to the team.",
    images: [`${baseUrl}/og-default.png`]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-ink">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
        <Script id="bland-settings" strategy="lazyOnload">
          {`window.blandSettings = { widget_id: "aee7578c-ff25-4fc0-a4e9-7fa7a48ce7a3" };`}
        </Script>
        <Script src="https://widget.bland.ai/loader.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
