import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/features/layout/Header";
import { Footer } from "@/features/layout/Footer";
import { WhatsappButton } from "@/features/whatsapp/WhatsappButton";
import { themeScript } from "@/features/theme/theme-script";
import { siteConfig } from "@/lib/site.config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ремонт электроинструмента в ${siteConfig.city}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "ремонт электроинструмента",
    "ремонт перфоратора",
    "ремонт болгарки",
    "ремонт шуруповёрта",
    "сервисный центр инструмента",
    siteConfig.city,
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: `${siteConfig.name} — ремонт электроинструмента в ${siteConfig.city}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-white font-sans text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
