export function TestimonialCard({
  quote,
  name,
  title
}: {
  quote: string;
  name: string;
  title: string;
}) {
  return (
    <div className="card-surface h-full p-8">
      <p className="text-lg leading-8 text-ink">“{quote}”</p>
      <div className="mt-6 border-t border-slate-200 pt-5">
        <p className="font-semibold text-ink">{name}</p>
        <p className="text-sm text-slate-500">{title}</p>
      </div>
    </div>
  );
}
