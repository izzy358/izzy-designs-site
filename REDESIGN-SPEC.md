# Izzy Designs Website Redesign — Full Spec for Gilfoyle

## Overview
Complete redesign of izzydesigns.io from a multi-page consulting site to a **single-page, dark, minimal landing page** inspired by [Frontier](https://frontier.m1c.vc/). The positioning shifts from "tech/AI consulting" to **"business consulting firm with a curated partner network."**

**Repo:** `izzy358/izzy-designs-site` at `/Users/bot/Projects/izzy-designs-site`
**Stack:** Next.js 14, Tailwind CSS 3, TypeScript, deployed on Vercel
**Domain:** izzydesigns.io

---

## Design Direction

### Vibe
- **Dark** — near-black background (#050505 or similar)
- **Minimal** — lots of negative space, no clutter
- **Premium** — feels like a firm, not a freelancer
- **Reference:** https://frontier.m1c.vc/ (same energy: bold typography, grid layout, clean cards)

### Typography
- Font: Inter (already in project)
- Hero: 60-72px, font-weight 900, tight letter-spacing
- Body: 13-16px, color #555-#777 on dark bg
- Labels/eyebrows: 11-12px, uppercase, wide letter-spacing, #444

### Color Palette
- Background: #050505
- Cards: #0a0a0a with #161616 borders
- Text primary: #ffffff
- Text secondary: #666
- Text muted: #444
- Accent (subtle): keep #0ea5e9 for hover states or CTA
- Card hover border: #2a2a2a

---

## Page Structure (Single Page)

### 1. Navigation (sticky)
- Left: **IZZY DESIGNS** (logo text, uppercase, bold, letter-spaced)
- Right: **About** | **Results** | **Let's Talk** (border button)
- About and Results can be anchor links to sections on the same page
- "Let's Talk" scrolls to the contact/booking section
- Dark background, minimal

### 2. Hero Section
```
Your business.
Our network.
```
- "network" in muted color (#555)
- Subtitle: "We help businesses grow — with the right strategy, the right systems, and the right people. One conversation is all it takes."
- Below subtitle: small caps tagline: `CONSULTING · STRATEGY · CONNECTIONS`
- Thin divider line below

### 3. Grid Section — "How We Help"
**Layout:** 4 columns × 2 rows (responsive: 2×4 on tablet, 1×8 on mobile)

Each card has:
- Large faded letter (opacity 0.08-0.15, font-weight 900, ~44px)
- Title (16-18px, font-weight 600)
- Description (12-13px, color #555)
- Small category tag at bottom (10px, uppercase, color #333)

**The 8 tiles (in this exact order):**

| Letter | Title | Description | Tag |
|--------|-------|-------------|-----|
| A | Automotive | Industry consulting, dealer licensing, vendor connections. We know the business inside and out. | Industry |
| R | Real Estate | Investment strategy, market connections, tools. Access our real estate network. | Industry |
| S | Small Business | Growth consulting for local businesses. Don't know where to start? That's exactly where we come in. | Consulting |
| D | Digital & Web | Websites, SEO, online presence. Built and managed by our design & development partners. | Services |
| F | Business Funding | Need capital? Our broker network connects you with the right funding for your stage and goals. | Capital |
| $ | Financial Services | Business formation, taxes, credit repair, financial planning. Get your foundation right first. | Finance |
| T | Technology & AI | Automation, integrations, smart tools. Implemented by specialists who know your industry. | Services |
| N | The Network | You don't need five vendors. You need one call. Developers, designers, marketers, brokers, specialists — we bring the team. | Access |

**The Network card** should have slightly elevated styling — brighter border (#1e1e1e), the letter at higher opacity (0.15), slightly brighter description text (#666).

### 4. Social Proof Bar (optional/simple)
- Centered text: `TRUSTED BY SMALL BUSINESSES ACROSS INDUSTRIES`
- Small caps, #333, letter-spaced
- Can be removed or replaced with real logos later

### 5. Contact Section — TWO COLUMNS

**Left column: Contact Form (Formspree → GHL)**
Keep the existing Formspree form but restyle for dark theme.

```
Form action: https://formspree.io/f/xbdaaddp
Method: POST
```

Fields (keep these exact `name` attributes — they map to GHL):
- `name` (text, required)
- `email` (email, required)  
- `business_name` (text, optional)
- `service_interest` (select, optional) — UPDATE options to:
  - Business Consulting & Strategy
  - Automotive Industry
  - Real Estate
  - Business Funding
  - Financial Services (Credit, Taxes, Formation)
  - Digital & Web Presence
  - Technology & AI
  - Not Sure — Let's Talk
- `message` (textarea, required)
- Submit button: "Send Inquiry"

Style: dark card background (#0a0a0a), light borders (#1a1a1a), white text inputs with dark backgrounds

**Right column: GHL Booking Calendar**
Keep the existing iframe embed:
```html
<iframe
  src="https://api.izzydesigns.io/widget/booking/hH3rCiPa9z5dAdA53gGG"
  style="width:100%; border:none; overflow:hidden;"
  scrolling="no"
  id="hH3rCiPa9z5dAdA53gGG_1773725614891"
  title="Book a consultation"
  class="h-[32rem] w-full"
/>
```
Plus the script:
```html
<script src="https://api.izzydesigns.io/js/form_embed.js" />
```

Section header: "Book a Consultation" with subtitle "No pitch deck. No pressure. Just a conversation about where you're trying to go."

### 6. Footer
- Left: © 2026 Izzy Designs. All rights reserved.
- Right: Privacy | Terms (can be placeholder links)
- Top border: 1px solid #111
- Minimal, dark

---

## Global Integrations (Keep These)

### Bland AI Widget (layout.tsx)
Keep in the root layout — do NOT remove:
```js
window.blandSettings = { widget_id: "aee7578c-ff25-4fc0-a4e9-7fa7a48ce7a3" };
```
```html
<script src="https://widget.bland.ai/loader.js" />
```

### SEO / Meta
Update metadata to reflect new positioning:
- Title: "Izzy Designs | Business Consulting & Partner Network"
- Description: "Izzy Designs helps businesses grow with strategic consulting, funding connections, and a curated partner network. One call, full access to the team."
- OG image: keep existing or update later
- Schema: Update `serviceType` array to match new 8 categories

---

## What to Remove / Simplify

### Remove these pages (consolidate to single page):
- `/services/web/page.tsx`
- `/services/ai/page.tsx`  
- `/services/coaching/page.tsx`
- `/services/page.tsx`
- `/network/page.tsx`
- `/network/real-estate/page.tsx`
- `/network/funding/page.tsx`
- `/about/page.tsx` (fold key info into the main page if needed)

### Keep:
- `/contact/page.tsx` — redirect to `/#contact` or keep as standalone with same form
- `/blog/` and `/blog/[slug]/` — keep blog functionality but remove from main nav (accessible via direct URL or footer link)
- All blog content in `/content/` — don't delete

### Components to update:
- `Hero.tsx` — complete rewrite for dark theme
- `Navbar.tsx` — simplify for dark theme, fewer links
- `Footer.tsx` — simplify for dark theme
- `ServiceCard.tsx` — replace with new grid card component

### Components to remove:
- `CTASection.tsx` — CTA is now inline on the page
- `TestimonialCard.tsx` — remove for now (add back later with real testimonials)
- `SectionIntro.tsx` — may still be useful, restyle for dark

---

## Tailwind Config Updates

Update `tailwind.config.ts`:
```ts
colors: {
  ink: "#050505",        // was #1a1a2e — now the bg
  accent: "#0ea5e9",     // keep
  sand: "#0a0a0a",       // repurpose for card bg
  muted: "#666",
  subtle: "#444",
}
```

Update `globals.css`:
- `body` → dark background, light text
- Remove the radial gradient glow from layout (the light blue one)
- Remove `.grid-overlay` (light theme pattern)
- Update `.dark-panel`, `.card-surface`, `.btn-primary`, `.btn-secondary` for dark context

---

## Responsive Behavior

- **Desktop (1200+):** 4×2 grid, two-column contact section
- **Tablet (768-1199):** 2×4 grid, stacked contact sections
- **Mobile (<768):** 1-column grid, stacked everything, smaller hero text (40-48px)
- Navigation: hamburger menu on mobile (simple slide-out or overlay)

---

## File Reference

| Current File | Action |
|---|---|
| `app/page.tsx` | Complete rewrite — single page with all sections |
| `app/layout.tsx` | Update bg, keep Bland widget, update meta |
| `app/globals.css` | Restyle all utilities for dark theme |
| `app/contact/page.tsx` | Redirect to `/#contact` or keep with matching dark style |
| `app/services/*` | Remove all service subpages |
| `app/network/*` | Remove all network subpages |
| `app/about/page.tsx` | Remove (fold into main if needed) |
| `app/blog/*` | Keep but remove from main nav |
| `components/Hero.tsx` | Complete rewrite |
| `components/Navbar.tsx` | Simplify + dark theme |
| `components/Footer.tsx` | Simplify + dark theme |
| `components/ServiceCard.tsx` | Replace with `GridCard.tsx` |
| `components/CTASection.tsx` | Remove |
| `components/TestimonialCard.tsx` | Remove |
| `tailwind.config.ts` | Update colors, remove light-theme values |
| `package.json` | No changes needed |

---

## Acceptance Criteria

1. ✅ Single dark landing page with all 8 grid tiles
2. ✅ Formspree contact form with updated service options (same `action` URL)
3. ✅ GHL booking calendar iframe working
4. ✅ Bland AI widget loading
5. ✅ Blog still accessible at `/blog` (just not in main nav)
6. ✅ Responsive across desktop/tablet/mobile
7. ✅ SEO meta tags updated
8. ✅ Clean, builds without errors, deploys to Vercel
9. ✅ No light theme remnants — fully dark
10. ✅ Feels premium and minimal — closer to Frontier than the current site

---

## Reference Mockup
See `/Users/bot/.openclaw/workspace/izzy-designs-mockup.html` for the visual direction (run locally to preview).
