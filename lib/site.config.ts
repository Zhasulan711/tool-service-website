export const siteConfig = {
  name: "Мастер 1",
  legalName: "Сервисный центр «Мастер 1»",
  tagline: "Ремонт бытовой техники на дому",
  description:
    "Ремонт бытовой техники на дому в Алматы: холодильники, стиральные и посудомоечные машины, кондиционеры, плиты и духовки. Выезд мастера в день обращения, оригинальные запчасти, гарантия до 1 года.",
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
  "Мастер 1 ремонт техники",
  "сервисный центр Мастер 1",
  "ремонт бытовой техники Алматы",
  "ремонт бытовой техники на дому",
  "ремонт холодильников Алматы",
  "ремонт стиральных машин Алматы",
  "ремонт посудомоечных машин",
  "ремонт кондиционеров Алматы",
  "ремонт морозильных камер",
  "ремонт духовых шкафов",
  "ремонт плит",
  "вызов мастера на дом Алматы",
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
