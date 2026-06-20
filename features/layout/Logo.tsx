import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

type LogoProps = {
  tone?: "dark" | "light";
};

export function Logo({ tone = "dark" }: LogoProps) {
  const textColor =
    tone === "light" ? "text-white" : "text-slate-900 dark:text-white";
  const subColor =
    tone === "light" ? "text-white/60" : "text-slate-500 dark:text-slate-400";

  return (
    <Link href="/" className="group inline-flex items-center gap-2.5">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white shadow-lg shadow-accent/30 transition-transform group-hover:rotate-12">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 6a3.5 3.5 0 0 0 4.6 4.6L21 8.7a5.5 5.5 0 0 1-7.3 7.3L7 22.6a2.1 2.1 0 0 1-3-3l6.6-6.6A5.5 5.5 0 0 1 17.9 5L16 6.9" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-extrabold tracking-tight ${textColor}`}>
          {siteConfig.name}
        </span>
        <span className={`text-[11px] font-medium ${subColor}`}>
          ремонт электроинструмента
        </span>
      </span>
    </Link>
  );
}
