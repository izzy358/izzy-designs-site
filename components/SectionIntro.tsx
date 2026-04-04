import clsx from "clsx";

export function SectionIntro({
  eyebrow,
  title,
  description,
  center = false
}: {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
}) {
  return (
    <div className={clsx(center ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-5 text-sm leading-7 text-[#7d7d7d] sm:text-[15px]">{description}</p>
    </div>
  );
}
