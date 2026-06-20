import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div
      className={`flex flex-col gap-4 ${isCenter ? "items-center text-center" : "items-start text-left"} ${className}`}
    >
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full bg-accent-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-dark dark:bg-accent/15 dark:text-accent">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description ? (
        <p className={`text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400 ${isCenter ? "max-w-2xl" : "max-w-xl"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
