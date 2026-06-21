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
      "Оставьте заявку в WhatsApp или по телефону. Опишите технику и поломку.",
  },
  {
    number: "02",
    title: "Выезд мастера",
    description:
      "Мастер приезжает в удобное время с инструментом и запчастями.",
  },
  {
    number: "03",
    title: "Диагностика",
    description:
      "Находим причину поломки на месте и называем точную стоимость ремонта.",
  },
  {
    number: "04",
    title: "Ремонт с гарантией",
    description:
      "Ремонтируем технику у вас дома и даём гарантию на работу и запчасти.",
  },
];
