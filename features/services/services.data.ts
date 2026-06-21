export type Service = {
  image: string;
  title: string;
  subtitle: string;
  price: string;
};

export const services: Service[] = [
  {
    image: "/images/svc-fridge.jpg",
    title: "Холодильники и морозильники",
    subtitle: "Не морозит, течёт, шумит — найдём причину",
    price: "от 5 000 ₸",
  },
  {
    image: "/images/svc-washer.jpg",
    title: "Стиральные машины",
    subtitle: "Не сливает, не отжимает, не включается",
    price: "от 4 000 ₸",
  },
  {
    image: "/images/svc-dishwasher.jpg",
    title: "Посудомоечные машины",
    subtitle: "Не моет, не набирает воду, ошибки на дисплее",
    price: "от 4 000 ₸",
  },
  {
    image: "/images/svc-ac.jpg",
    title: "Кондиционеры",
    subtitle: "Ремонт, чистка, заправка фреоном, установка",
    price: "от 6 000 ₸",
  },
  {
    image: "/images/svc-oven.jpg",
    title: "Плиты и духовые шкафы",
    subtitle: "Электроплиты, варочные панели, духовки",
    price: "от 4 000 ₸",
  },
  {
    image: "/images/svc-other.jpg",
    title: "Другая бытовая техника",
    subtitle: "Микроволновки, водонагреватели, мелкая техника",
    price: "по запросу",
  },
];
