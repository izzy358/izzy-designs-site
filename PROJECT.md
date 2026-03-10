# Izzy Designs Website — Project Reference

## Quick Facts
- **Tech Stack:** Next.js 14, Tailwind CSS, TypeScript, static export
- **Repo:** https://github.com/izzy358/izzy-designs-site
- **Live URL:** Deployed on Vercel (auto-deploys from GitHub on push)
- **Local path:** `/Users/bot/.openclaw/workspace/projects/izzy-designs-site/`
- **Backup:** `/Users/bot/.openclaw/backups/2026-03-09-izzy-designs-site/`

## Pages
| Page | File | Description |
|------|------|-------------|
| Home | `app/page.tsx` | Hero, services overview, testimonials, blog preview, CTA |
| About | `app/about/page.tsx` | Izzy's story, experience stats, philosophy |
| Services Hub | `app/services/page.tsx` | 3 service cards linking to sub-pages |
| Coaching | `app/services/coaching/page.tsx` | Business coaching & strategy service |
| Web Design | `app/services/web/page.tsx` | Web design & digital presence service |
| AI & Automation | `app/services/ai/page.tsx` | AI consulting service |
| Blog | `app/blog/page.tsx` | Blog listing + sidebar (guide + newsletter) |
| Blog Post | `app/blog/[slug]/page.tsx` | Dynamic blog post template |
| Contact | `app/contact/page.tsx` | Contact form + Calendly embed + direct contact |

## Blog Posts (MDX)
- `content/blog/ai-integration-for-small-business.mdx`
- `content/blog/how-to-stop-running-your-business-reactively.mdx`
- `content/blog/why-your-website-isnt-booking-calls.mdx`

## Key Components
| Component | File | Used For |
|-----------|------|----------|
| Navbar | `components/Navbar.tsx` | Site navigation, services dropdown, mobile menu |
| Footer | `components/Footer.tsx` | Footer with guide CTA, links, social |
| Hero | `components/Hero.tsx` | Homepage hero section |
| BlogCard | `components/BlogCard.tsx` | Blog post preview card |
| CTASection | `components/CTASection.tsx` | Reusable CTA blocks |
| ServiceCard | `components/ServiceCard.tsx` | Service category cards |
| TestimonialCard | `components/TestimonialCard.tsx` | Client quotes |
| MarkdownContent | `components/MarkdownContent.tsx` | MDX rendering for blog |

## Integrations
- **Formspree:** Form ID `xbdaaddp` — handles contact form, newsletter, lead magnet
- **Bland AI Widget:** Widget ID `aee7578c-ff25-4fc0-a4e9-7fa7a48ce7a3` — voice widget (loaded in layout.tsx)
- **Calendly:** Embedded on contact page (placeholder URL: calendly.com/izzydesigns)

## Design System
- **Colors:** `ink` (dark text), `accent` (sky blue), `sand` (warm bg)
- **Font:** Inter
- **Cards:** `card-surface` class (rounded-2xl, border, shadow)
- **Dark panels:** `dark-panel` class (dark bg sections)
- **Spacing:** `section-space` class, `container-shell` wrapper

## How to Edit
1. Edit the source files in `app/` or `components/`
2. Run `npm run build` to verify (or just push — Vercel builds on deploy)
3. `git add . && git commit -m "description" && git push` → auto-deploys

## How to Add a Blog Post
1. Create `content/blog/your-slug.mdx`
2. Add frontmatter: title, date, category, excerpt, readTime
3. Add entry to the posts array in `app/blog/page.tsx`
4. Add entry to the blog section on `app/page.tsx` (if you want it on homepage)
5. Push to deploy

## Build Commands
```bash
cd /Users/bot/.openclaw/workspace/projects/izzy-designs-site
npm install        # first time or after package changes
npm run build      # builds static export to /out
npm run dev        # local dev server on localhost:3000
```
