import type { Metadata } from "next";

const siteName = "Izzy Designs";

export function createPageMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
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
