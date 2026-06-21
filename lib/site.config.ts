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
  priceRange: "₸₸",
  geo: {
    latitude: 43.238949,
    longitude: 76.889709,
  },
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "19:00",
  },
} as const;

export const seoKeywords = [
  "Мастер 1",
  "Мастер 1 Алматы",
  "Мастер 1 ремонт инструмента",
  "сервисный центр Мастер 1",
  "ремонт электроинструмента Алматы",
  "ремонт электроинструмента",
  "ремонт перфоратора",
  "ремонт болгарки",
  "ремонт шуруповёрта",
  "ремонт дрели",
  "ремонт сварочного аппарата",
  "ремонт компрессора",
  "ремонт бензопилы",
  "сервисный центр инструмента Алматы",
];

export const navLinks = [
  { label: "О сервисе", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Как мы работаем", href: "#process" },
  { label: "Работы", href: "#gallery" },
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
