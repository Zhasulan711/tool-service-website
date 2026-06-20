export const siteConfig = {
  name: "Мастер 1",
  legalName: "Сервисный центр «Мастер 1»",
  tagline: "Сервисный центр электроинструмента",
  description:
    "Профессиональный ремонт электроинструмента всех брендов в Алматы. Бесплатная диагностика, оригинальные запчасти, гарантия на ремонт до 6 месяцев.",
  phoneDisplay: "+7 777 376 77 60",
  phoneHref: "+77773767760",
  whatsapp: "77773767760",
  email: "info@master1.kz",
  city: "Алматы",
  address: "г. Алматы, ул. Толе би, 123",
  hours: "Пн–Сб: 9:00–19:00, Вс — выходной",
  hoursShort: "Пн–Сб 9:00–19:00",
  url: "https://master1.kz",
} as const;

export const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Как мы работаем", href: "#process" },
  { label: "Бренды", href: "#brands" },
  { label: "Контакты", href: "#contacts" },
] as const;

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function phoneLink(): string {
  return `tel:${siteConfig.phoneHref}`;
}
