import Link from "next/link";

export function Hero() {
  return (
    <section className="section-space pb-10 pt-16 sm:pt-20">
      <div className="container-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-fade-up space-y-8">
            <p className="eyebrow">Business Growth Consulting</p>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-ink sm:text-6xl">
                Design the life and business you want.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                Izzy Designs helps solopreneurs and small business owners get clear on strategy,
                tighten their online presence, and build practical systems that create momentum.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact#book" className="btn-primary">
                Book a Free Strategy Call
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
            <div className="grid max-w-2xl gap-4 sm:grid-cols-3">
              {[
                ["10+ years", "Sales experience"],
                ["7+ years", "Running businesses"],
                ["3 focus areas", "Coaching, web, AI"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
                  <p className="text-xl font-semibold text-ink">{value}</p>
                  <p className="mt-1 text-sm text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft [animation-delay:120ms]">
            <div className="grid-overlay rounded-[1.5rem] bg-sand p-6 sm:p-8">
              <div className="dark-panel p-8">
                <p className="text-sm uppercase tracking-[0.24em] text-sky-200">How growth gets easier</p>
                <div className="mt-8 space-y-5">
                  {[
                    "Clarify what to sell, how to sell it, and where to focus next.",
                    "Launch a site that turns traffic into booked calls and qualified leads.",
                    "Use AI and automation to stop losing time on repetitive tasks."
                  ].map((item) => (
                    <div key={item} className="flex gap-4">
                      <div className="mt-1 h-3 w-3 rounded-full bg-accent" />
                      <p className="text-sm leading-7 text-slate-200">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-3xl bg-white/8 p-5">
                  <p className="text-sm font-semibold text-white">Trusted advisor, not textbook consultant.</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Every recommendation is shaped by real sales experience, real operating lessons,
                    and what actually works when the pressure is on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
