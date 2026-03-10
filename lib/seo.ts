import type { Metadata } from "next";

const siteName = "Izzy Designs";
const baseUrl = "https://izzydesigns.io";

export function createPageMetadata(
  title: string,
  description: string,
  path = "/"
): Metadata {
  const url = new URL(path, baseUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url,
      siteName,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description
    }
  };
}
