import { Hero } from "@/features/hero/Hero";
import { Stats } from "@/features/stats/Stats";
import { About } from "@/features/about/About";
import { Services } from "@/features/services/Services";
import { Advantages } from "@/features/advantages/Advantages";
import { Process } from "@/features/process/Process";
import { Gallery } from "@/features/gallery/Gallery";
import { Brands } from "@/features/brands/Brands";
import { CtaBanner } from "@/features/cta/CtaBanner";
import { Contacts } from "@/features/contacts/Contacts";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Advantages />
      <Process />
      <Gallery />
      <Brands />
      <CtaBanner />
      <Contacts />
    </>
  );
}
