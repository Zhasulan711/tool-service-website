import { Container } from "@/components/ui/Container";

const stats = [
  { value: "12+", label: "лет на рынке" },
  { value: "15 000+", label: "ремонтов выполнено" },
  { value: "50+", label: "брендов обслуживаем" },
  { value: "6 мес.", label: "гарантия на работы" },
];

export function Stats() {
  return (
    <section className="border-b border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-950">
      <Container>
        <div className="grid grid-cols-2 gap-y-10 py-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span className="font-display text-3xl font-extrabold text-slate-900 sm:text-4xl dark:text-white">
                {stat.value}
              </span>
              <span className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
