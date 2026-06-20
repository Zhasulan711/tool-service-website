import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { advantages } from "./advantages.data";

export function Advantages() {
  return (
    <Section id="advantages" className="bg-white dark:bg-slate-950">
      <SectionHeading
        eyebrow="Почему выбирают нас"
        title="Преимущества работы с нами"
        description="Мы отвечаем за результат и делаем так, чтобы ваш инструмент служил долго."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {advantages.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-2xl bg-slate-50 p-7 ring-1 ring-slate-100 transition-colors hover:ring-accent/30 dark:bg-slate-900 dark:ring-slate-800"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-accent shadow-sm ring-1 ring-slate-100 dark:bg-slate-800 dark:ring-slate-700">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
