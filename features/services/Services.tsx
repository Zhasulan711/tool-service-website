import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsappIcon } from "@/components/icons";
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

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <a
            key={service.title}
            href={whatsappLink(`Здравствуйте! Нужен ремонт по направлению: ${service.title}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-950 dark:hover:shadow-black/40"
          >
            <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-52">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
                {service.subtitle}
              </p>

              <div className="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors group-hover:text-accent dark:text-slate-200">
                    <WhatsappIcon className="h-4 w-4 text-[#25D366]" />
                    Написать в WhatsApp
                  </span>
                  <span className="whitespace-nowrap font-display text-base font-bold text-accent-dark dark:text-accent">
                    {service.price}
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
