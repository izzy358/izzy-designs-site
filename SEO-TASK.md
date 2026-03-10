# SEO/AEO Optimization Task — izzydesigns.io

## Overview
Full SEO and AEO optimization pass on the Izzy Designs Next.js site. Target: 95+ across all SEO metrics.

## 1. JSON-LD Structured Data (HIGH PRIORITY)

### Homepage (`app/page.tsx`)
Add `ProfessionalService` schema:
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Izzy Designs",
  "url": "https://izzydesigns.io",
  "description": "Business coaching, conversion-focused websites, and practical AI automation for solopreneurs and small business owners.",
  "founder": {
    "@type": "Person",
    "name": "Izzy Cortez"
  },
  "areaServed": "United States",
  "serviceType": ["Business Coaching", "Web Design", "AI Automation", "Digital Marketing"],
  "priceRange": "$500 - $5,000",
  "email": "izzy@izzydesigns.io",
  "sameAs": []
}
```

### About page (`app/about/page.tsx`)
Add `Person` schema for E-E-A-T:
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Izzy Cortez",
  "jobTitle": "Founder & Business Consultant",
  "worksFor": {
    "@type": "Organization",
    "name": "Izzy Designs",
    "url": "https://izzydesigns.io"
  },
  "description": "Business consultant with 10+ years in sales and 7+ years running businesses across automotive, service, and digital industries.",
  "knowsAbout": ["Business Strategy", "Web Design", "AI Automation", "Sales", "Small Business Growth"]
}
```

### Services page (`app/services/page.tsx`)
Add `Service` schema listing all three service categories.

### Blog posts (`app/blog/[slug]/page.tsx`)
Add `BlogPosting` schema with author, datePublished, description. Use `generateMetadata` data.
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "<title>",
  "description": "<description>",
  "author": {
    "@type": "Person",
    "name": "Izzy Cortez"
  },
  "datePublished": "<date>",
  "publisher": {
    "@type": "Organization",
    "name": "Izzy Designs"
  }
}
```

### Web + AI + Coaching pages already have FAQ schemas — KEEP THOSE. ✅

## 2. Open Graph + Twitter Cards (HIGH PRIORITY)

The layout.tsx already has base OG/Twitter. BUT each page needs page-specific OG images.

Update `lib/seo.ts` `createPageMetadata` to also include:
- `openGraph.url` — set to `https://izzydesigns.io/<path>`
- `openGraph.images` — set a default OG image (create `/public/og-default.png` — 1200x630, can be a simple branded card with "Izzy Designs" logo and tagline)
- Blog posts already handle their own OG — good ✅

**Actually, for now just make sure every page's metadata includes url.** The OG image can use the site default from layout.tsx.

## 3. Fix ALL Image Alt Text (HIGH PRIORITY)

- `app/about/page.tsx` — `izzy-about.png` has alt text ✅
- Check ALL components for `<img>` tags or Next `<Image>` tags missing alt text
- The `widget-icon.png` in Navbar — needs descriptive alt
- Any other images throughout the site

## 4. FAQ Section on Services Main Page (HIGH PRIORITY — AEO)

Add a FAQ section to `app/services/page.tsx` with these questions + FAQ schema:
- "How much does a business website cost?" → "Landing pages start at $500. Full custom websites start at $2,500. We scope every project individually."
- "What is AI automation for small business?" → "AI automation handles repetitive tasks like answering calls, following up with leads, managing reviews, and booking appointments — without hiring staff."
- "How long does a website take to build?" → "Landing pages are delivered in 3-5 business days. Full custom sites take 2-4 weeks depending on scope."
- "Do you offer payment plans?" → "Yes. We can break larger projects into milestone-based payments."
- "What makes Izzy Designs different from other agencies?" → "Real business experience. Izzy has 10+ years in sales and 7+ years running businesses. The advice comes from doing it, not reading about it."

## 5. Meta Descriptions — Make Keyword-Rich (MEDIUM)

Update meta descriptions for each page to naturally include target keywords:
- **Homepage**: Include "web design consultant", "AI business consulting", "small business website"
- **Services**: Include "business coaching", "web design services", "AI automation for small business"
- **About**: Include "business consultant", "small business growth", "digital strategy"
- **Blog**: Include "small business tips", "AI automation insights", "website conversion"
- **Contact**: Include "free strategy call", "business consulting", "web design quote"

## 6. Internal Linking (MEDIUM)

- Blog posts should link to relevant service pages (add links within blog MDX content)
- Services pages already cross-link ✅
- About page → links to contact ✅
- Add a "Read our blog" link somewhere on the about page
- Blog sidebar already links to related posts ✅

In each of the 3 blog MDX files, add 1-2 natural internal links to relevant service pages.

## 7. Core Web Vitals Optimization (MEDIUM)

- Replace ALL `<img>` tags with Next.js `<Image>` component (import from 'next/image')
  - `app/about/page.tsx` — the izzy-about.png image
  - Any other raw `<img>` tags
- The Bland widget script already uses `strategy="lazyOnload"` ✅
- Add `priority` prop to above-the-fold images

## 8. Author Attribution on Blog Posts (MEDIUM)

In `app/blog/[slug]/page.tsx`, add author info below the date/readTime:
```tsx
<span>By Izzy Cortez</span>
```
Link "Izzy Cortez" to `/about` page.

## 9. XML Sitemap (NICE TO HAVE)

Install and configure `next-sitemap`:
```bash
npm install next-sitemap
```

Create `next-sitemap.config.js`:
```js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://izzydesigns.io',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
}
```

Add to `package.json` scripts:
```json
"postbuild": "next-sitemap"
```

## 10. robots.txt (NICE TO HAVE)

If next-sitemap generates it, great. Otherwise create `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://izzydesigns.io/sitemap.xml
```

## 11. LocalBusiness Schema (NICE TO HAVE)

Add to homepage or contact page:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Izzy Designs",
  "url": "https://izzydesigns.io",
  "email": "izzy@izzydesigns.io",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  }
}
```

## IMPORTANT RULES
- Do NOT break existing FAQ schemas on web/ai/coaching pages
- Do NOT change any visual design or layout
- Do NOT change any copy/content (except adding FAQ to services page and internal links in blog posts)
- Test that the site builds successfully: `npm run build`
- Commit with clear message describing what was added
