import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  PhoneIcon,
  WhatsappIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
} from "@/components/icons";
import { phoneLink, siteConfig, whatsappLink } from "@/lib/site.config";
import { ContactForm } from "./ContactForm";

const contactItems = [
  {
    icon: PhoneIcon,
    label: "Телефон",
    value: siteConfig.phoneDisplay,
    href: phoneLink(),
  },
  {
    icon: WhatsappIcon,
    label: "WhatsApp",
    value: siteConfig.phoneDisplay,
    href: whatsappLink("Здравствуйте! Хочу записаться на ремонт инструмента."),
    external: true,
  },
  {
    icon: MailIcon,
    label: "Эл. почта",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPinIcon,
    label: "Адрес",
    value: siteConfig.address,
  },
  {
    icon: ClockIcon,
    label: "Режим работы",
    value: siteConfig.hours,
  },
];

export function Contacts() {
  return (
    <Section id="contacts" className="bg-slate-50 dark:bg-slate-900">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Контакты"
            title="Оставьте заявку на ремонт"
            description="Заполните форму — заявка придёт нам в WhatsApp, и мы ответим в течение 15 минут. Или свяжитесь с нами любым удобным способом."
          />

          <div className="mt-10 flex flex-col gap-3">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-accent shadow-sm ring-1 ring-slate-100 dark:bg-slate-800 dark:ring-slate-700">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {item.label}
                    </span>
                    <span className="text-base font-semibold text-slate-900 dark:text-white">
                      {item.value}
                    </span>
                  </span>
                </>
              );

              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-2xl bg-white/60 p-3 transition-colors hover:bg-white dark:bg-slate-950/40 dark:hover:bg-slate-950"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div key={item.label} className="flex items-center gap-4 rounded-2xl p-3">
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9 dark:border-slate-800 dark:bg-slate-950">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
