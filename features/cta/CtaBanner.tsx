import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, WhatsappIcon, BoltIcon } from "@/components/icons";
import { phoneLink, siteConfig, whatsappLink } from "@/lib/site.config";

export function CtaBanner() {
  return (
    <section className="bg-white py-12 dark:bg-slate-950">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-accent px-8 py-12 sm:px-14 sm:py-16">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                <BoltIcon className="h-4 w-4" />
                Выезд мастера на дом
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Сломалась техника? Отремонтируем с выездом на дом
              </h2>
              <p className="mt-3 text-base text-white/90 sm:text-lg">
                Оставьте заявку — ответим и рассчитаем стоимость ремонта в течение 15 минут.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
              <Button
                href={whatsappLink("Здравствуйте! Хочу оставить заявку на ремонт техники.")}
                external
                size="lg"
                className="!bg-white !text-accent-dark hover:!bg-slate-100"
              >
                <WhatsappIcon className="h-5 w-5" />
                Написать в WhatsApp
              </Button>
              <Button
                href={phoneLink()}
                size="lg"
                className="!bg-slate-950 !text-white hover:!bg-slate-800"
              >
                <PhoneIcon className="h-5 w-5" />
                {siteConfig.phoneDisplay}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
