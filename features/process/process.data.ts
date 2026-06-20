export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Заявка",
    description:
      "Оставьте заявку в WhatsApp или по телефону, либо привезите инструмент к нам в сервис.",
  },
  {
    number: "02",
    title: "Диагностика",
    description:
      "Бесплатно находим причину поломки и рассчитываем точную стоимость ремонта.",
  },
  {
    number: "03",
    title: "Согласование",
    description:
      "Озвучиваем стоимость и сроки. Приступаем к работе только после вашего согласия.",
  },
  {
    number: "04",
    title: "Ремонт и выдача",
    description:
      "Выполняем ремонт, тестируем инструмент и возвращаем его вам с гарантией.",
  },
];
