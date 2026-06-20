import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "./process.data";

export function Process() {
  return (
    <Section id="process" className="bg-slate-950 text-white">
      <SectionHeading
        eyebrow="Как мы работаем"
        title={<span className="text-white">Простой путь до рабочего инструмента</span>}
        description={
          <span className="text-slate-300">
            Прозрачный процесс без сюрпризов — от заявки до выдачи готового инструмента.
          </span>
        }
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <div key={step.number} className="relative">
            <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-7 transition-colors hover:border-accent/40">
              <span className="font-display text-5xl font-extrabold text-accent/30">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                {step.description}
              </p>
            </div>
            {index < processSteps.length - 1 ? (
              <span className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center text-accent lg:flex">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
