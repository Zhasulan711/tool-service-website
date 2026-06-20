import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  CheckIcon,
  PhoneIcon,
  WhatsappIcon,
  ShieldIcon,
  BoltIcon,
  StarIcon,
} from "@/components/icons";
import { phoneLink, siteConfig, whatsappLink } from "@/lib/site.config";

const highlights = [
  "Бесплатная диагностика",
  "Оригинальные запчасти",
  "Гарантия до 6 месяцев",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="bg-grid absolute inset-0 opacity-[0.07]" />
      <div className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-accent/30 blur-3xl" />
      <div className="absolute -bottom-48 -left-32 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-14 py-20 lg:grid-cols-2 lg:py-28">
          <div className="flex flex-col gap-7">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium ring-1 ring-white/15">
              <span className="flex h-2 w-2 rounded-full bg-accent" />
              Сервисный центр в {siteConfig.city}
            </span>

            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Ремонт <span className="text-accent">электроинструмента</span> любой сложности
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-slate-300">
              Чиним перфораторы, дрели, болгарки, сварочные аппараты и садовую технику всех брендов. Быстро, с гарантией и оригинальными запчастями.
            </p>

            <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button
                href={whatsappLink("Здравствуйте! Хочу записаться на ремонт инструмента.")}
                external
                variant="whatsapp"
                size="lg"
              >
                <WhatsappIcon className="h-5 w-5" />
                Оставить заявку
              </Button>
              <Button href={phoneLink()} variant="outline" size="lg" className="!bg-white/10 !text-white !ring-white/20 hover:!bg-white/15">
                <PhoneIcon className="h-5 w-5 text-accent" />
                {siteConfig.phoneDisplay}
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between rounded-2xl bg-accent px-5 py-4">
                <div>
                  <p className="text-sm font-medium text-white/80">Бесплатная диагностика</p>
                  <p className="font-display text-2xl font-extrabold text-white">за 1 день</p>
                </div>
                <BoltIcon className="h-10 w-10 text-white" />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <ShieldIcon className="h-8 w-8 text-accent" />
                  <p className="mt-3 font-display text-xl font-bold text-white">6 мес.</p>
                  <p className="text-sm text-slate-300">гарантия на ремонт</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <div className="flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                  </div>
                  <p className="mt-3 font-display text-xl font-bold text-white">12+ лет</p>
                  <p className="text-sm text-slate-300">опыта работы</p>
                </div>
                <div className="col-span-2 flex items-center gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent">
                    <CheckIcon className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="font-display text-xl font-bold text-white">15 000+</p>
                    <p className="text-sm text-slate-300">отремонтированных инструментов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
