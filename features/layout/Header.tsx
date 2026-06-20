"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, MenuIcon, CloseIcon, WhatsappIcon } from "@/components/icons";
import { navLinks, phoneLink, siteConfig, whatsappLink } from "@/lib/site.config";
import { ThemeToggle } from "@/features/theme/ThemeToggle";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90"
          : "border-b border-transparent bg-white dark:bg-slate-950"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-20">
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-accent dark:text-slate-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={phoneLink()}
              className="flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-accent dark:text-white"
            >
              <PhoneIcon className="h-4.5 w-4.5 text-accent" />
              {siteConfig.phoneDisplay}
            </a>
            <ThemeToggle />
            <Button href={whatsappLink("Здравствуйте! Хочу узнать про ремонт инструмента.")} external variant="primary">
              Оставить заявку
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Меню"
              className="flex h-11 w-11 items-center justify-center rounded-xl text-slate-900 ring-1 ring-slate-200 dark:text-white dark:ring-slate-700"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <Container>
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-slate-100 py-3.5 text-base font-medium text-slate-700 dark:border-slate-800 dark:text-slate-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pb-6">
              <Button href={phoneLink()} variant="outline" size="lg">
                <PhoneIcon className="h-5 w-5 text-accent" />
                {siteConfig.phoneDisplay}
              </Button>
              <Button
                href={whatsappLink("Здравствуйте! Хочу узнать про ремонт инструмента.")}
                external
                variant="whatsapp"
                size="lg"
              >
                <WhatsappIcon className="h-5 w-5" />
                Написать в WhatsApp
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
