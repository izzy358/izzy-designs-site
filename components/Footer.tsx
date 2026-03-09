import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

const socialLinks = [
  { href: "https://www.instagram.com", label: "Instagram" },
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  { href: "https://www.facebook.com", label: "Facebook" }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-sand">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="max-w-md space-y-4">
          <p className="text-lg font-semibold tracking-[0.22em] text-ink">IZZY DESIGNS</p>
          <p className="text-sm leading-7 text-slate-600">
            Practical consulting for founders who need strategy, a better website, and the
            systems to keep growth moving.
          </p>
          <a href="mailto:izzy@izzydesigns.io" className="text-sm font-semibold text-accent">
            izzy@izzydesigns.io
          </a>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Quick Links
          </p>
          <div className="mt-4 flex flex-col gap-3">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-slate-600 transition hover:text-accent">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Social
          </p>
          <div className="mt-4 flex flex-col gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-slate-600 transition hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="container-shell flex flex-col gap-2 py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Izzy Designs. All rights reserved.</p>
          <p>Design the life and business you want.</p>
        </div>
      </div>
    </footer>
  );
}
