import type { Metadata } from "next";

const siteName = "Izzy Designs";
const baseUrl = "https://izzydesigns.io";

export function createPageMetadata(
  title: string,
  description: string,
  path = "/"
): Metadata {
  const url = new URL(path, baseUrl).toString();
  const fullTitle = `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-default.png`,
          width: 1200,
          height: 630,
          alt: fullTitle
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${baseUrl}/og-default.png`]
    }
  };
}
