import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brands } from "./brands.data";

export function Brands() {
  const row = [...brands, ...brands];

  return (
    <section id="brands" className="overflow-hidden bg-white py-20 sm:py-28 dark:bg-slate-950">
      <Container>
        <SectionHeading
          eyebrow="Бренды"
          title="Обслуживаем инструмент всех марок"
          description="Работаем с профессиональным и бытовым инструментом ведущих производителей."
        />
      </Container>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent dark:from-slate-950" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent dark:from-slate-950" />
        <div className="flex w-max animate-marquee gap-4">
          {row.map((brand, index) => (
            <span
              key={`${brand}-${index}`}
              className="flex h-16 items-center whitespace-nowrap rounded-xl border border-slate-200 bg-slate-50 px-8 font-display text-xl font-bold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
