"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

const serviceLinks = [
  { href: "/services", label: "Services" },
  { href: "/services/coaching", label: "Coaching" },
  { href: "/services/digital", label: "Web & AI" }
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-[0.22em] text-ink">
          IZZY DESIGNS
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.slice(0, 2).map((item) => (
            <NavLink key={item.href} href={item.href} pathname={pathname}>
              {item.label}
            </NavLink>
          ))}
          <div
            className="group relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={clsx(
                "text-sm font-medium transition hover:text-accent",
                pathname.startsWith("/services") ? "text-accent" : "text-ink"
              )}
            >
              Services
            </button>
            <div
              className={clsx(
                "absolute left-1/2 top-full mt-4 w-56 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-3 shadow-soft transition",
                servicesOpen ? "visible opacity-100" : "invisible opacity-0"
              )}
            >
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 transition hover:bg-sand hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {navLinks.slice(2).map((item) => (
            <NavLink key={item.href} href={item.href} pathname={pathname}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact#book" className="btn-primary">
            Book a Call
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
          </span>
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-shell flex flex-col gap-2 py-5">
            {[...navLinks.slice(0, 2), { href: "/services", label: "Services" }, ...navLinks.slice(2)].map(
              (item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-ink transition hover:bg-sand"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="grid grid-cols-2 gap-2 px-1 pt-1">
              {serviceLinks.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-600 transition hover:border-accent hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href="/contact#book"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-3"
            >
              Book a Call
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function NavLink({
  href,
  pathname,
  children
}: {
  href: string;
  pathname: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "text-sm font-medium transition hover:text-accent",
        pathname === href ? "text-accent" : "text-ink"
      )}
    >
      {children}
    </Link>
  );
}
