import Link from "next/link";

export function ServiceCard({
  icon,
  title,
  description,
  href
}: {
  icon: string;
  title: string;
  description: string;
  href?: string;
}) {
  const content = (
    <div className="card-surface h-full p-8 transition hover:-translate-y-1">
      <div className="text-3xl">{icon}</div>
      <h3 className="mt-6 text-2xl font-semibold text-ink">{title}</h3>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
      {href ? <p className="mt-6 text-sm font-semibold text-accent">Learn More</p> : null}
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
