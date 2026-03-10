import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const baseUrl = "https://izzydesigns.io";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Izzy Designs | Design the life and business you want",
    template: "%s | Izzy Designs"
  },
  description:
    "Izzy Designs offers business coaching, web design consulting, and AI business consulting for small business growth.",
  openGraph: {
    title: "Izzy Designs",
    description:
      "Business coaching, websites, and AI systems built for practical small business growth.",
    url: baseUrl,
    siteName: "Izzy Designs",
    images: [
      {
        url: "/widget-icon.png",
        alt: "Izzy Designs brand mark"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Izzy Designs",
    description:
      "Design the life and business you want with strategic coaching, websites, and AI automation.",
    images: ["/widget-icon.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.14),transparent_55%)]" />
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
