"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

const primaryLinks = [
  { href: "/#about", label: "About" },
  { href: "/#results", label: "Results" }
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#111111] bg-ink/92 backdrop-blur">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link
          href="/"
          className="text-sm font-bold uppercase tracking-[0.32em] text-white transition hover:text-[#cfcfcf]"
        >
          Izzy Designs
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {primaryLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "text-[12px] font-medium uppercase tracking-[0.22em] transition",
                pathname === "/" ? "text-[#7d7d7d] hover:text-white" : "text-[#8d8d8d] hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn-secondary">
            Let&apos;s Talk
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#222222] md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </span>
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-[#111111] bg-[#060606] md:hidden">
          <div className="container-shell flex flex-col gap-2 py-5">
            {primaryLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#9a9a9a] transition hover:bg-[#0c0c0c] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-secondary mt-2"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
