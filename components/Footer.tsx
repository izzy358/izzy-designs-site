import Link from "next/link";

export function Footer() {
  return (
    <footer className="surface-divider">
      <div className="container-shell flex flex-col gap-4 py-8 text-[11px] uppercase tracking-[0.22em] text-[#4d4d4d] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Izzy Designs. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <Link href="/blog" className="transition hover:text-white">
            Blog
          </Link>
          <Link href="/" className="transition hover:text-white">
            Privacy
          </Link>
          <Link href="/" className="transition hover:text-white">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
