import { Container } from "@/components/ui/Container";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  WhatsappIcon,
} from "@/components/icons";
import {
  navLinks,
  phoneLink,
  siteConfig,
  whatsappLink,
} from "@/lib/site.config";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-5">
            <Logo tone="light" />
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Профессиональный ремонт электроинструмента всех брендов в {siteConfig.city}. Диагностика, запчасти, гарантия.
            </p>
            <a
              href={whatsappLink("Здравствуйте! Хочу записаться на ремонт.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1fb457]"
            >
              <WhatsappIcon className="h-5 w-5" />
              Написать в WhatsApp
            </a>
          </div>

          <div>
            <h3 className="mb-5 font-display text-sm font-bold uppercase tracking-wider text-white">
              Навигация
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-display text-sm font-bold uppercase tracking-wider text-white">
              Контакты
            </h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <a href={phoneLink()} className="flex items-start gap-3 transition-colors hover:text-accent">
                  <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 transition-colors hover:text-accent">
                  <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                {siteConfig.address}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-display text-sm font-bold uppercase tracking-wider text-white">
              Режим работы
            </h3>
            <div className="flex items-start gap-3 text-sm">
              <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div className="flex flex-col gap-1">
                <span>Понедельник — Суббота</span>
                <span className="text-white">9:00 — 19:00</span>
                <span className="mt-2">Воскресенье — выходной</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year} {siteConfig.legalName}. Все права защищены.
          </p>
          <p>{siteConfig.city}, Казахстан</p>
        </div>
      </Container>
    </footer>
  );
}
