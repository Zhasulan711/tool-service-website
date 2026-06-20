import { Hero } from "@/features/hero/Hero";
import { Stats } from "@/features/stats/Stats";
import { Services } from "@/features/services/Services";
import { Advantages } from "@/features/advantages/Advantages";
import { Process } from "@/features/process/Process";
import { Brands } from "@/features/brands/Brands";
import { CtaBanner } from "@/features/cta/CtaBanner";
import { Contacts } from "@/features/contacts/Contacts";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Advantages />
      <Process />
      <Brands />
      <CtaBanner />
      <Contacts />
    </>
  );
}
