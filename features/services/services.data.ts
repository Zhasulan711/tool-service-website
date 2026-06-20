import type { ComponentType, SVGProps } from "react";
import {
  DrillIcon,
  GrinderIcon,
  SawIcon,
  SparkIcon,
  CompressorIcon,
  LeafIcon,
  WrenchIcon,
  PackageIcon,
} from "@/components/icons";

export type Service = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: DrillIcon,
    title: "Перфораторы и дрели",
    description:
      "Ремонт перфораторов, дрелей, шуруповёртов и отбойных молотков: замена щёток, патронов, редукторов.",
  },
  {
    icon: GrinderIcon,
    title: "Болгарки (УШМ)",
    description:
      "Восстановление углошлифовальных машин: подшипники, статор, ротор, кнопка пуска и регулятор оборотов.",
  },
  {
    icon: SawIcon,
    title: "Пилы и лобзики",
    description:
      "Ремонт дисковых пил, электролобзиков и сабельных пил с заменой изношенных узлов.",
  },
  {
    icon: SparkIcon,
    title: "Сварочные аппараты",
    description:
      "Диагностика и ремонт инверторных и полуавтоматических сварочных аппаратов любой мощности.",
  },
  {
    icon: CompressorIcon,
    title: "Компрессоры",
    description:
      "Обслуживание и ремонт воздушных компрессоров: клапаны, поршневая группа, реле давления.",
  },
  {
    icon: LeafIcon,
    title: "Садовая техника",
    description:
      "Ремонт газонокосилок, триммеров, бензопил и мотокос — электрических и бензиновых.",
  },
  {
    icon: WrenchIcon,
    title: "Техобслуживание",
    description:
      "Плановое ТО, чистка, смазка и профилактика для продления срока службы инструмента.",
  },
  {
    icon: PackageIcon,
    title: "Запчасти и расходники",
    description:
      "Подбор и продажа оригинальных запчастей, щёток, дисков и аксессуаров под ваш инструмент.",
  },
];
