import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRightIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site.config";
import { services } from "./services.data";

export function Services() {
  return (
    <Section id="services" className="bg-slate-50 dark:bg-slate-900">
      <SectionHeading
        eyebrow="Что мы ремонтируем"
        title="Услуги сервисного центра"
        description="Ремонтируем электрический и бензиновый инструмент любой сложности. Если вашего инструмента нет в списке — напишите нам, мы поможем."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <a
              key={service.title}
              href={whatsappLink(`Здравствуйте! Нужен ремонт по направлению: ${service.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-950 dark:hover:shadow-black/40"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-accent-dark transition-colors group-hover:bg-accent group-hover:text-white dark:bg-accent/15 dark:text-accent">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {service.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-dark">
                Подробнее
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
