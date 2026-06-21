import type { ComponentType, SVGProps } from "react";
import {
  MapPinIcon,
  BoltIcon,
  ShieldIcon,
  UsersIcon,
  PackageIcon,
  CoinIcon,
} from "@/components/icons";

export type Advantage = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

export const advantages: Advantage[] = [
  {
    icon: MapPinIcon,
    title: "Выезд мастера на дом",
    description:
      "Приезжаем в удобное время по всему городу. Диагностика и ремонт прямо у вас дома.",
  },
  {
    icon: BoltIcon,
    title: "Ремонт в день обращения",
    description:
      "Большинство поломок устраняем за один визит. Есть срочный выезд в течение часа.",
  },
  {
    icon: ShieldIcon,
    title: "Гарантия до 1 года",
    description:
      "На все виды работ и установленные запчасти даём официальную гарантию.",
  },
  {
    icon: UsersIcon,
    title: "Опытные мастера",
    description:
      "Инженеры со стажем более 10 лет. Знаем технику всех популярных брендов.",
  },
  {
    icon: PackageIcon,
    title: "Оригинальные запчасти",
    description:
      "Привозим запчасти с собой. Используем оригинальные и качественные комплектующие.",
  },
  {
    icon: CoinIcon,
    title: "Честные цены",
    description:
      "Стоимость согласовываем заранее. Никаких скрытых платежей и навязанных услуг.",
  },
];
