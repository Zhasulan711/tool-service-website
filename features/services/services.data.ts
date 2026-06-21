export type Service = {
  image: string;
  title: string;
  subtitle: string;
  price: string;
};

export const services: Service[] = [
  {
    image: "/images/svc-drill.jpg",
    title: "Перфораторы и дрели",
    subtitle: "Дрели, шуруповёрты, отбойные молотки",
    price: "от 3 000 ₸",
  },
  {
    image: "/images/svc-grinder.jpg",
    title: "Болгарки (УШМ)",
    subtitle: "Подшипники, статор, ротор, кнопка пуска",
    price: "от 2 500 ₸",
  },
  {
    image: "/images/svc-saw.jpg",
    title: "Пилы и лобзики",
    subtitle: "Дисковые, сабельные пилы и электролобзики",
    price: "от 3 000 ₸",
  },
  {
    image: "/images/svc-welder.jpg",
    title: "Сварочные аппараты",
    subtitle: "Инверторы и полуавтоматы любой мощности",
    price: "от 4 000 ₸",
  },
  {
    image: "/images/svc-compressor.jpg",
    title: "Компрессоры",
    subtitle: "Клапаны, поршневая группа, реле давления",
    price: "от 5 000 ₸",
  },
  {
    image: "/images/svc-garden.jpg",
    title: "Садовая техника",
    subtitle: "Бензопилы, триммеры, газонокосилки, мотокосы",
    price: "от 4 000 ₸",
  },
  {
    image: "/images/svc-maintenance.jpg",
    title: "Техобслуживание",
    subtitle: "Чистка, смазка и профилактика инструмента",
    price: "от 2 000 ₸",
  },
  {
    image: "/images/work-6.jpg",
    title: "Запчасти и расходники",
    subtitle: "Оригинальные щётки, диски и аксессуары",
    price: "по запросу",
  },
];
