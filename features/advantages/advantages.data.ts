import type { ComponentType, SVGProps } from "react";
import {
  UsersIcon,
  BoltIcon,
  ShieldIcon,
  PackageIcon,
  CoinIcon,
  GearIcon,
} from "@/components/icons";

export type Advantage = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

export const advantages: Advantage[] = [
  {
    icon: UsersIcon,
    title: "Опытные мастера",
    description:
      "Инженеры со стажем более 10 лет. Знаем устройство инструмента всех популярных брендов.",
  },
  {
    icon: BoltIcon,
    title: "Срочный ремонт",
    description:
      "Большинство поломок устраняем в день обращения. Есть услуга экспресс-ремонта.",
  },
  {
    icon: ShieldIcon,
    title: "Гарантия до 6 месяцев",
    description:
      "На все виды работ и установленные запчасти даём официальную гарантию.",
  },
  {
    icon: PackageIcon,
    title: "Оригинальные запчасти",
    description:
      "Используем оригинальные и качественные совместимые комплектующие со склада.",
  },
  {
    icon: CoinIcon,
    title: "Честные цены",
    description:
      "Стоимость согласовываем заранее. Никаких скрытых платежей и навязанных услуг.",
  },
  {
    icon: GearIcon,
    title: "Любая сложность",
    description:
      "Беремся за ремонт, от которого отказались другие сервисы. Полная диагностика.",
  },
];
