import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CheckIcon, WhatsappIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site.config";

const points = [
  "Собственная мастерская с профессиональным оборудованием",
  "Мастера с профильным образованием и стажем от 10 лет",
  "Склад оригинальных запчастей и расходников",
  "Честная диагностика — говорим, когда ремонт невыгоден",
];

export function About() {
  return (
    <Section id="about" className="bg-white dark:bg-slate-950">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/about-workshop.jpg"
              alt="Мастера сервисного центра за работой"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-8 -right-4 hidden w-44 overflow-hidden rounded-2xl border-4 border-white shadow-xl dark:border-slate-950 sm:block">
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/about-master.jpg"
                alt="Мастер сервисного центра"
                fill
                sizes="180px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute -left-4 bottom-10 rounded-2xl bg-accent px-5 py-4 shadow-xl">
            <p className="font-display text-3xl font-extrabold text-white">12+</p>
            <p className="text-sm text-white/90">лет на рынке</p>
          </div>
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="О сервисе"
            title="Сервисный центр, которому доверяют ремонт"
            description="Мы специализируемся только на электроинструменте — и знаем его до последнего винтика. От бытовой дрели до профессионального перфоратора: находим причину поломки и устраняем её надолго."
          />

          <ul className="mt-8 flex flex-col gap-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-dark dark:bg-accent/15 dark:text-accent">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-base text-slate-700 dark:text-slate-300">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <Button
              href={whatsappLink("Здравствуйте! Хочу узнать про ремонт инструмента.")}
              external
              variant="whatsapp"
              size="lg"
            >
              <WhatsappIcon className="h-5 w-5" />
              Задать вопрос мастеру
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
