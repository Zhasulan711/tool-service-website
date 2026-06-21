import { WhatsappIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site.config";

export function WhatsappButton() {
  return (
    <a
      href={whatsappLink("Здравствуйте! Хочу узнать про ремонт техники.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white animate-pulse-ring sm:h-16 sm:w-16"
    >
      <WhatsappIcon className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}
