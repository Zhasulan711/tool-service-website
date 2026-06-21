import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  CheckIcon,
  PhoneIcon,
  WhatsappIcon,
  ShieldIcon,
  BoltIcon,
} from "@/components/icons";
import { phoneLink, siteConfig, whatsappLink } from "@/lib/site.config";

const highlights = [
  "Выезд мастера на дом",
  "Оригинальные запчасти",
  "Гарантия до 1 года",
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
              Выезд мастера по {siteConfig.city}
            </span>

            <h1 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight [hyphens:auto] break-words sm:text-5xl lg:text-6xl">
              Ремонт <span className="text-accent">бытовой техники</span> на дому
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-slate-300">
              Чиним холодильники, стиральные и посудомоечные машины, кондиционеры, плиты и духовки всех марок. Мастер приедет в день обращения — быстро, с гарантией и оригинальными запчастями.
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
                href={whatsappLink("Здравствуйте! Хочу записаться на ремонт техники.")}
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
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-2xl sm:aspect-square lg:aspect-[4/5]">
              <Image
                src="/images/hero-appliance.jpg"
                alt="Мастер ремонтирует бытовую технику"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
            </div>

            <div className="absolute -left-4 top-6 flex items-center gap-3 rounded-2xl bg-accent px-4 py-3 shadow-xl sm:-left-6">
              <BoltIcon className="h-7 w-7 text-white" />
              <div>
                <p className="text-xs font-medium text-white/80">Выезд мастера</p>
                <p className="font-display text-base font-extrabold text-white">в день обращения</p>
              </div>
            </div>

            <div className="absolute -bottom-5 left-6 right-6 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-md sm:left-auto sm:right-6">
              <div className="flex items-center gap-2.5">
                <ShieldIcon className="h-7 w-7 text-accent" />
                <div>
                  <p className="font-display text-lg font-bold text-white">1 год</p>
                  <p className="text-xs text-slate-300">гарантия</p>
                </div>
              </div>
              <span className="h-9 w-px bg-white/15" />
              <div className="flex items-center gap-2.5">
                <CheckIcon className="h-7 w-7 text-accent" />
                <div>
                  <p className="font-display text-lg font-bold text-white">15 000+</p>
                  <p className="text-xs text-slate-300">ремонтов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
