# Izzy Designs Website V2 — Build Brief

## IMPORTANT: Read this ENTIRE brief before writing any code.

You are updating an existing Next.js 14 + Tailwind site. The site is already built and deployed. You are making content and structural changes to the service pages, adding an AI chat widget, and improving CTAs.

## Current File Structure (DO NOT break what works)
```
app/
  page.tsx              (homepage - minor updates only)
  about/page.tsx        (no changes)
  services/page.tsx     (update for 3 categories)
  services/coaching/page.tsx  (rewrite content)
  services/digital/page.tsx   (DELETE this - replaced by web + ai)
  blog/page.tsx         (no changes)
  blog/[slug]/page.tsx  (update CTAs in blog posts)
  contact/page.tsx      (no changes)
  layout.tsx            (add Bland AI widget script)
components/
  Navbar.tsx            (update dropdown)
  Footer.tsx            (add lead magnet banner)
content/blog/           (update CTAs in posts)
```

## Changes Required (in this order)

### 1. Add Bland AI Widget to Global Layout

In `app/layout.tsx`, add the Bland AI widget using Next.js Script component:

```tsx
import Script from 'next/script'

// Add before closing </body> or at end of layout:
<Script id="bland-settings" strategy="lazyOnload">
  {`window.blandSettings = { widget_id: "aee7578c-ff25-4fc0-a4e9-7fa7a48ce7a3" };`}
</Script>
<Script src="https://widget.bland.ai/loader.js" strategy="lazyOnload" />
```

This adds a chat bubble on every page. DO NOT use raw `<script>` tags — use Next.js `Script` component.

### 2. Create NEW Page: /services/ai

Create `app/services/ai/page.tsx`

**Hero:**
- Title: "Your Business, Running 24/7 — Without Hiring Anyone"
- Sub: "AI-powered tools that answer calls, follow up with leads, manage reviews, and book appointments while you sleep."
- CTA Button: "Get a Free AI Audit"

**Section: AI Receptionist (LEAD service — biggest visual emphasis)**
- Icon: ☎️
- "Answers calls 24/7 in your brand's voice"
- "Qualifies leads, books appointments, answers FAQs"
- "Transfers urgent calls to you"
- Cost comparison callout box: "$200/mo vs $4,500/mo for a human receptionist"
- Quote: "Your customers don't leave voicemails. They call the next business."

**Section: Build Your Automation Stack (tiered pricing)**
Display as 3 cards side by side:

Card 1 — Starter: $200/mo
- AI Receptionist only
- 24/7 call answering
- Call summaries to your phone
- Best for: solo operators who just need calls handled

Card 2 — Growth: $400/mo (mark as "Most Popular")
- AI Receptionist
- Automated Lead Follow-Up (instant text/email within 60 seconds, Day 1/3/7 sequence)
- Review Management (automated review requests, monitoring, alerts)
- Best for: businesses ready to stop losing leads

Card 3 — Full Suite: $600/mo
- Everything in Growth, PLUS:
- Appointment Booking (AI scheduling, reminders, reduces no-shows 30-40%)
- Smart CRM Setup (customer tracking, automated follow-ups)
- Best for: businesses that want full automation

**Section: Comparison Table**
Side-by-side: "Doing It Yourself" vs "With AI Automation"
| Task | You (Manual) | With AI |
|------|-------------|---------|
| Answering calls | Miss 60%+ after hours | 24/7, every call answered |
| Following up on leads | "I'll call them back" (you won't) | Instant response, auto follow-up |
| Asking for reviews | Forget most of the time | Automatic after every job |
| Booking appointments | Phone tag, back and forth | Customer self-books instantly |
| Time spent per week | 10-15 hours on admin | Near zero |

**Section: Live Demo Callout**
- "Want to see how it works? Click the chat bubble in the bottom right to talk to our AI receptionist — live, right now."
- "No signup. No download. Just click and talk."
- Arrow animation pointing to bottom-right

**Section: FAQ (3-5 questions)**
- "Do I need to be tech-savvy?" → No. We handle everything. You just answer your phone like normal.
- "Will it sound like a robot?" → No. Modern AI sounds natural — most callers can't tell the difference.
- "What if a caller needs a real person?" → Your AI can transfer urgent calls to you or your team instantly.
- "How long does setup take?" → Most businesses are live within 48 hours.
- "Can I try it before committing?" → Yes — book a free demo and we'll show you exactly how it works for your business.

Use FAQ schema markup (`<script type="application/ld+json">`) for SEO.

**CTA Section:**
- "Stop Missing Calls. Start Closing More Deals."
- Button: "Get a Free AI Audit →" (link to /contact)

### 3. Rewrite Page: /services/web

Replace content in `app/services/digital/page.tsx` AND move it to `app/services/web/page.tsx`. Delete the old digital page.

**Hero:**
- Title: "Look Like a Fortune 500. Price of a Freelancer."
- Sub: "Custom websites, landing pages, and everything that makes your business look professional online."
- CTA Button: "See Examples of Our Work" (link to #portfolio section or /contact for now)

**Section: Quick Launch — $500 Landing Page**
- 1-page conversion-focused site
- Mobile responsive
- Contact form + Google Maps integration
- Basic SEO setup
- "Perfect for new businesses that need to get online THIS WEEK"
- Turnaround: 3-5 business days
- Badge: "Limited to 2 per month" (creates urgency)

**Section: Full Custom Website — Starting at $2,500**
- Multi-page site (5-10 pages)
- Blog/content hub for organic traffic
- Appointment booking integration
- Analytics dashboard
- Ongoing SEO optimization
- "For established businesses ready to level up their online presence"

**Section: Pro Business Setup — $750 (bundled, one price)**
Present as a premium package card, NOT a list of add-ons:

"Everything that makes a small business look established — in one package."

Includes:
- **Custom Domain Email** — yourname@yourbusiness.com (not @gmail.com)
  - Google Workspace setup + configuration
  - Professional email signatures with logo
  - Sub-text: "Nothing says 'I started last week' like a Gmail address on your business card"
- **Google Business Profile Optimization**
  - Complete setup with photos, hours, services, posts
  - Local SEO boost
- **Social Media Profile Setup**
  - Consistent branding across Instagram, Facebook, LinkedIn
  - Profile photos, cover images, bio copy
- **Brand Essentials Kit**
  - Logo refinement
  - Brand colors + fonts documented
  - Digital business card + email signature template

**Section: Monthly Maintenance — $150/mo**
- Hosting, updates, security
- Minor content edits (up to 2 per month)
- Monthly analytics report
- Priority support

**Section: FAQ**
- "What if I already have a website?" → We can redesign it or optimize what you have. Book a call and we'll look at it together.
- "Can I update the site myself?" → Yes — we build on platforms you can manage, and we train you on how.
- "What's included in the $500 landing page?" → Everything you need to start getting leads: responsive design, contact form, Google Maps, basic SEO, and hosting setup.
- "Do you do e-commerce?" → Yes — custom online stores starting at $3,500.

FAQ schema markup for SEO.

**CTA:**
- "Your Website Should Be Your Best Salesperson"
- Sub: "It works 24/7, never calls in sick, and costs less than one month of rent."
- Button: "Get a Free Website Review →" (link to /contact)

### 4. Rewrite Page: /services/coaching

Update `app/services/coaching/page.tsx`

**Hero:**
- Title: "Stop Guessing. Start Growing."
- Sub: "Strategic coaching for business owners who are done winging it."
- CTA: "Book a Free Strategy Call"

**Section: Who This Is For / Who This Isn't For**
Two-column layout:

✅ This IS for you if:
- You're doing $5K-$50K/mo but can't break through
- You're working IN your business, not ON it
- You know you need systems but don't know where to start
- You want accountability, not just advice

❌ This is NOT for you if:
- You're looking for motivation (try a podcast)
- You want someone to do the work FOR you
- You're not willing to implement
- You're happy where you are

**Section: Pricing Tiers (NO $500 tier)**

Card 1 — Strategy Session: $750 (one-time)
- 90-minute deep dive into your business
- Walk away with a custom action plan
- Recording of the session for reference
- 7 days of follow-up support via text
- "Perfect first step — get clarity on exactly what to do next"

Card 2 — 90-Day Business Sprint: $3,000
- Weekly 1-on-1 strategy calls (30 min)
- Custom action plan with specific milestones
- Direct text/voice access between sessions
- Full business audit (operations, marketing, pricing, systems)
- "Most clients see ROI within the first 30 days"
- Best for: doing $5K-$20K/mo, stuck

Card 3 — 6-Month Transformation: $5,000 (mark as "Best Value")
- Everything in the Sprint, PLUS:
- Bi-weekly calls with deeper strategy
- Quarterly business review with data
- Pricing strategy overhaul
- Marketing plan development
- Hiring/delegation framework
- "Go from doing everything yourself to running a real business"
- Best for: doing $10K-$50K/mo, want to scale

**Section: Why Me?**
- "I've built multiple businesses from scratch. I know what works because I've done it — not because I read a book about it."
- "10+ years in sales taught me one thing: every business problem is a people problem or a systems problem. I help you fix both."
- "You don't need more information. You need someone who's been where you are to tell you what to do NEXT."

**Section: FAQ**
- "What kind of results can I expect?" → Every business is different, but most Sprint clients identify $1,000-$5,000 in monthly revenue they were leaving on the table within the first 30 days.
- "Is this just motivational coaching?" → No. This is strategy and execution. We build systems, fix pricing, optimize operations. You'll have homework.
- "Can I start with just a strategy session?" → Absolutely. That's what it's there for. Most people book one, see the value, and upgrade.
- "Do you work with startups?" → Yes, if you're past the idea stage and actively building. Pre-revenue businesses start with a Strategy Session.

FAQ schema markup.

**CTA:**
- "This Isn't Therapy. It's a Game Plan."
- Sub: "Book a free 30-minute strategy call — no sales pitch, just value."
- Button: "Book My Free Strategy Call →" (link to /contact or Calendly)

### 5. Update Services Hub Page (/services)

Update `app/services/page.tsx` to show 3 service categories:

Three cards:
1. 🧠 Business Coaching & Strategy → /services/coaching
   - "For owners who are stuck, scaling, or just getting started"
2. 💻 Web Design & Digital Presence → /services/web
   - "Websites, branding, and everything that makes your business look legit"
3. 🤖 AI & Automation → /services/ai
   - "Stop working harder. Let AI handle the repetitive stuff."

### 6. Update Navbar

In `components/Navbar.tsx`:
- Services dropdown shows 3 items: Coaching, Web Design, AI & Automation
- Links: /services/coaching, /services/web, /services/ai
- Mobile hamburger menu handles all 3 cleanly

### 7. Update Blog Post CTAs

In each blog post content file, update the closing CTA:
- "AI Integration for Small Business" → CTA links to /services/ai
- "Why Your Website Isn't Booking Calls" → CTA links to /services/web
- "Stop Running Your Business Reactively" → CTA links to /services/coaching

### 8. Add Lead Magnet Banner to Footer

In `components/Footer.tsx`, add a banner ABOVE the footer:

Background: accent color or dark with accent border
Text: "📥 Free Guide: How to Add AI to Your Business Without Breaking Anything"
Button: "Download the Guide" (link to /contact with ?ref=ai-guide or mailto)
Keep it clean — one line on desktop, stacked on mobile.

### 9. Update Homepage

On `app/page.tsx`, update the "How I Help" cards to match new service structure:
- 🧠 Business Coaching & Strategy → /services/coaching
- 💻 Web Design & Digital Presence → /services/web  
- 🤖 AI & Automation → /services/ai

Update any internal links that point to /services/digital → /services/web

### 10. Cross-Linking

On each service page, add a subtle "You might also need..." section before the CTA:
- AI page: "Many of our AI clients also use our web design services to complete their digital presence."
- Web page: "Want your website to work even harder? Add an AI receptionist."
- Coaching page: "Coaching clients get priority pricing on web design and AI automation."

### 11. Clean Up

- DELETE `app/services/digital/page.tsx` (replaced by /services/web and /services/ai)
- Make sure no links anywhere reference /services/digital
- Run `npm run build` — MUST compile with zero errors
- Run `git add -A && git commit -m "V2: service page overhaul, AI widget, FAQ sections, lead magnet" && git push origin main`

## Design Guidelines (KEEP CURRENT STYLE)
- Keep the existing color scheme (white/charcoal/teal)
- Keep existing component patterns (cards, sections, CTAs)
- Pricing cards: highlight the "recommended" tier with accent border/shadow
- FAQ sections: use collapsible/accordion pattern if easy, otherwise clean Q&A blocks
- All pages fully responsive
- Keep Inter font throughout

## VERIFICATION CHECKLIST (do all of these before pushing)
- [ ] `npm run build` passes with zero errors
- [ ] All 8 pages render (/, /about, /services, /services/coaching, /services/web, /services/ai, /blog, /contact)
- [ ] All 3 blog post pages render
- [ ] Navbar dropdown shows 3 service items
- [ ] No links point to /services/digital (old URL)
- [ ] Bland AI widget script is in layout.tsx
- [ ] FAQ schema markup on all 3 service pages
- [ ] Lead magnet banner in footer
- [ ] Git pushed to origin main

## DO NOT
- Change the overall design/color scheme
- Remove or break existing pages (homepage, about, blog, contact)
- Use raw `<script>` tags (use Next.js Script component)
- Leave console.logs in the code
- Skip the build verification
