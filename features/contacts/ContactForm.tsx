"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { WhatsappIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site.config";

const inputStyles =
  "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500";

const labelStyles = "text-sm font-medium text-slate-700 dark:text-slate-300";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [tool, setTool] = useState("");
  const [message, setMessage] = useState("");

  const isValid = name.trim().length > 1 && phone.trim().length > 4;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid) return;

    const text = [
      "Здравствуйте! Заявка на ремонт с сайта.",
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      tool.trim() ? `Инструмент: ${tool}` : null,
      message.trim() ? `Проблема: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className={labelStyles}>
            Ваше имя <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Как к вам обращаться"
            className={inputStyles}
            required
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className={labelStyles}>
            Телефон <span className="text-accent">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+7 ___ ___ __ __"
            className={inputStyles}
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="tool" className={labelStyles}>
          Инструмент
        </label>
        <input
          id="tool"
          type="text"
          value={tool}
          onChange={(e) => setTool(e.target.value)}
          placeholder="Например: перфоратор Bosch GBH 2-26"
          className={inputStyles}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className={labelStyles}>
          Опишите проблему
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Что случилось с инструментом?"
          rows={4}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
        />
      </div>

      <Button type="submit" variant="whatsapp" size="lg" className="mt-1 w-full" disabled={!isValid}>
        <WhatsappIcon className="h-5 w-5" />
        Отправить заявку в WhatsApp
      </Button>

      <p className="text-center text-xs text-slate-500">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
      </p>
    </form>
  );
}
