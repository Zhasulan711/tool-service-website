import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryItems } from "./gallery.data";

export function Gallery() {
  return (
    <Section id="gallery" className="bg-slate-50 dark:bg-slate-900">
      <SectionHeading
        eyebrow="Наши работы"
        title="Инструмент, мастера и оборудование"
        description="Несколько кадров из нашей мастерской — чтобы вы понимали, кому доверяете свой инструмент."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <div key={item.src} className="group relative overflow-hidden rounded-2xl">
            <div className="relative aspect-[4/3]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
            <span className="absolute bottom-4 left-4 right-4 font-display text-lg font-bold text-white">
              {item.caption}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
