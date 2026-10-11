"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowUpLeft,
  Zap,
  Smartphone,
  QrCode,
  Building,
} from "@/components/icons";
import { motion } from "motion/react";
import { Container } from "@/components/common/Container";
import { dafaaData } from "@/data/dafaa-app";
import { DownloadButtons } from "./app-showcase/DownloadButtons";
import { PhoneSimulation } from "./app-showcase/PhoneSimulation";
import { LUXURY_EASE } from "@/lib/animations";

export function AppShowcase() {
  const { app } = dafaaData;

  const appHighlights = [
    {
      icon: <Zap className="w-4 h-4 text-emerald-400" />,
      title: "تحويلات مالية ومصارفة",
      desc: "تحويل فوري بين الحسابات ومصارفة لحظية للعملات بأفضل الأسعار",
    },
    {
      icon: <Smartphone className="w-4 h-4 text-brand-cyan" />,
      title: "شحن رصيد وباقات",
      desc: "سداد وشحن باقات فورية لـ: يمن موبايل، يو، سبأفون، وواي",
    },
    {
      icon: <QrCode className="w-4 h-4 text-blue-400" />,
      title: "دفع المشتريات بالـ QR",
      desc: "تسوق وادفع في آلاف المتاجر والمطاعم والكافيهات بلمسة واحدة",
    },
    {
      icon: <Building className="w-4 h-4 text-amber-400" />,
      title: "مدفوعات وسحب نقدي",
      desc: "سداد فواتير الخدمات وسحب وإيداع نقدي عبر شبكة وكلاء يمن فيوتشر",
    },
  ];

  return (
    <section
      id="app"
      className="py-16 sm:py-24 bg-surface-muted relative overflow-hidden"
    >
      <Container>
        {/* Main Showcase Container (Zero shadows, clean metallic border, deep contrast) */}
        <div className="bg-linear-to-b from-brand-navy via-[#142048] to-[#0d1633] rounded-[36px] sm:rounded-[44px] border border-brand-navy-light/60 text-white p-6 sm:p-10 lg:p-12 xl:p-14 overflow-hidden relative">
          {/* Subtle Ambient Radial Glows (Zero shadows) */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center relative z-10">
            {/* Copy & Features Column */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7, ease: LUXURY_EASE }}
              className="lg:col-span-7 space-y-6 text-start"
            >
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-brand-cyan-light text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                <span>تطبيق محفظة دَفْع للهواتف الذكية</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.18] tracking-tight text-white">
                {app.name} <br />
                <span className="text-brand-cyan">تجربة مالية ذكية</span> في راحة يدك
              </h2>

              {/* Editorial Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
                {app.description} سدد فواتيرك، حوّل أموالك، وادفع مشترياتك في ثوانٍ مع أحدث واجهات الدفع الإلكتروني المصرفية في اليمن.
              </p>

              {/* 4 App Highlights Grid from the Real App Interface */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {appHighlights.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white/[0.06] border border-white/10 hover:border-brand-cyan/40 transition-colors flex items-start gap-3 text-start"
                  >
                    <div className="p-2 rounded-xl bg-white/10 border border-white/10 shrink-0">
                      {feat.icon}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                        {feat.title}
                      </h4>
                      <p className="text-[11px] text-slate-300 leading-snug mt-1 font-normal">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Learn More via Official Website Link */}
              <div className="pt-1">
                <a
                  href={app.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-cyan hover:text-white transition-colors group"
                >
                  <span className="underline underline-offset-4 decoration-brand-cyan/40 group-hover:decoration-white">
                    {app.websiteLinkText}
                  </span>
                  <ArrowUpLeft className="w-3.5 h-3.5 text-brand-cyan-light group-hover:text-white transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Enhanced Download Buttons (Google Play, App Store) */}
              <div className="pt-2 space-y-2.5">
                <p className="text-sm font-bold text-slate-200">
                  {app.downloadTitle || "لتحميل تطبيق دَفْع"}
                </p>
                <DownloadButtons />
              </div>

              {/* Central Bank Licensing Notice */}
              <div className="pt-2 flex items-center gap-2 text-xs text-brand-cyan-light font-medium">
                <Image
                  src="/svgs/app/central-bank.svg"
                  alt="مرخص من البنك المركزي"
                  width={18}
                  height={18}
                  className="w-4.5 h-4.5 shrink-0"
                />
                <span>إحدى خدمات يمن فيوتشر المعتمدة والمرخصة من البنك المركزي اليمني</span>
              </div>
            </motion.div>

            {/* Authentic Interactive Smartphone Simulation Column */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.75, delay: 0.15, ease: LUXURY_EASE }}
              className="lg:col-span-5 flex justify-center items-center w-full"
            >
              <PhoneSimulation />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
