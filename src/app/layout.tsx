import type { Metadata } from "next";
import "./globals.css";
import { SmothScroll } from "@/components/providers/SmothScroll";

export const metadata: Metadata = {
  title: "يمن فيوتشر للخدمات المالية والمدفوعات الإلكترونية | Yemen Future",
  description:
    "شركة يمن فيوتشر للخدمات المالية والمدفوعات الإلكترونية - حلول دفع رقمية مبتكرة، تحويلات مالية فورية، سداد فواتير، ومحفظة إلكترونية تلبي تطلعات الأفراد والتجار في اليمن.",
  keywords: [
    "يمن فيوتشر",
    "Yemen Future",
    "خدمات مالية اليمن",
    "محفظة إلكترونية اليمن",
    "دفع إلكتروني",
    "تحويلات مالية فورية",
    "سداد فواتير يمن موبايل سبأفون يو",
    "نقاط بيع",
    "بوابات دفع إلكتروني",
  ],
  authors: [{ name: "Yemen Future" }],
  icons: {
    icon: "/svgs/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 selection:bg-brand-cyan/20 selection:text-brand-navy">
        <SmothScroll>
          {children}
        </SmothScroll>
      </body>
    </html>
  );
}
