# Izzy Designs Website Build Brief

## What You're Building
A 7-page Next.js website for izzydesigns.io — a business growth consulting brand.

## Brand Identity
- **Name:** Izzy Designs
- **Tagline:** "Design the life and business you want."
- **Colors:** Modern neutrals (white #FFFFFF, charcoal #1a1a2e) with teal/blue accent (#0ea5e9 or similar)
- **Typography:** Inter (already used across brand materials) — clean, modern
- **Tone:** Professional but approachable. Not corporate-cold, not startup-bro. Think trusted advisor.
- **Logo:** Text-based "IZZY DESIGNS" for now (same style as the pricing PDF)

## Tech Stack
- Next.js 14+ (App Router)
- Tailwind CSS
- MDX for blog posts
- Static export (deployable to Vercel)
- No database needed
- Formspree for contact form (ID: xbdaaddp or new one)
- Calendly embed for booking: https://calendly.com/izzydesigns (placeholder URL — will update)

## Pages to Build (Phase 1 — build ALL of these)

### 1. Homepage (/)
- Hero section: "Design the life and business you want." + subtext about helping solopreneurs + CTA button "Book a Free Strategy Call"
- "How I Help" section with 3 cards:
  - 🧠 Business Coaching & Strategy — "For owners who are stuck, scaling, or just getting started"
  - 💻 Web Design & Development — "Conversion-focused sites that generate leads, not just look pretty"
  - 🤖 AI & Automation — "Chatbots, AI receptionists, automated follow-ups. Your competitors don't have this yet."
- "Why Work With Me?" section — 10+ years in sales, runs multiple businesses, real experience not textbook advice
- Testimonials section (use placeholder quotes for now — we'll swap in real ones)
- Latest blog posts section (3 cards linking to /blog)
- Final CTA section: "Ready to grow your business?" + button

### 2. About (/about)
- Izzy's story — sales background → automotive business → saw the tech gap → built the bridge
- Key stats/highlights: 10+ years sales, 7+ years running businesses, multiple industries
- Philosophy: "I don't give textbook advice. I give you what works because I've done it myself."
- Placeholder for photo
- CTA: "Let's see if we're a good fit" → links to /contact

### 3. Services Hub (/services)
- Overview page with 3 service categories as cards/sections
- Each links to its detail page
- Brief description of each + "Learn More" links

### 4. Coaching (/services/coaching)
- What coaching includes (weekly calls, action plans, direct text access, accountability)
- Who it's for (solopreneurs, small biz owners doing $5K-$50K/mo)
- Three tiers:
  - Launch Pad — $500 (get online fast)
  - 90-Day Business Sprint — $3,000 (build the foundation)
  - 6-Month Transformation — $5,000 (full growth partner)
- Financing available note
- Monthly maintenance required ($150/mo)
- Testimonials section
- CTA: Book a discovery call

### 5. Web & AI (/services/digital)
- Web development section: custom sites, landing pages, SEO, conversion optimization
- AI section: chatbots, AI receptionists, automated email/text, CRM setup
- Process: Discovery → Build → Launch → Optimize
- AI Receptionist comparison (same data as pricing PDF: $4,500 human vs $200/mo AI)
- CTA: "Get a free website audit" + "Book a call"

### 6. Blog (/blog)
- Blog listing page with cards for each post
- Individual blog post layout (/blog/[slug])
- Start with 1 placeholder post so the layout is proven
- Lead magnet CTA sidebar or banner: "Free Guide: AI Integration for Small Business"
- Newsletter signup form

### 7. Contact (/contact)
- Contact form (name, email, business name, message, service interest dropdown)
- Calendly embed placeholder
- Email: izzy@izzydesigns.io
- Social links section

## Global Components
- **Navbar:** Logo (text), Home, About, Services (dropdown: Coaching, Web & AI), Blog, Contact, "Book a Call" CTA button
- **Footer:** Logo, quick links, email, social links, copyright
- **Mobile:** Fully responsive, hamburger menu on mobile
- **SEO:** Each page gets its own title tag, meta description, and Open Graph tags

## Design Guidelines
- Clean, spacious layout — lots of white space
- Cards with subtle shadows and rounded corners
- Dark sections for emphasis (charcoal #1a1a2e backgrounds with white text)
- Teal/blue accent for CTAs and highlights
- Professional photography style placeholders (use Unsplash placeholder URLs or solid color blocks)
- NO stock photo energy — modern, minimal
- Subtle animations on scroll (fade-in sections) if easy to add

## File Structure Suggestion
```
/app
  /page.tsx          (homepage)
  /about/page.tsx
  /services/page.tsx
  /services/coaching/page.tsx
  /services/digital/page.tsx
  /blog/page.tsx
  /blog/[slug]/page.tsx
  /contact/page.tsx
  /layout.tsx        (global layout with nav + footer)
/components
  /Navbar.tsx
  /Footer.tsx
  /Hero.tsx
  /ServiceCard.tsx
  /TestimonialCard.tsx
  /BlogCard.tsx
  /CTASection.tsx
/content
  /blog             (MDX files go here)
/public
  /images           (placeholder images)
```

## Important Rules
- This should be PRODUCTION QUALITY — not a prototype. Clean code, real content, proper SEO.
- Use real copy from this brief — don't put "Lorem ipsum" anywhere.
- Every page needs a clear CTA
- Mobile-first responsive design
- Run `npm run build` at the end to make sure it compiles clean
- Commit everything to git when done
