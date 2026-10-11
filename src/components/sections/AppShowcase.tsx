"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowUpLeft,
  Sparkles,
} from "@/components/icons";
import { motion } from "motion/react";
import { Container } from "@/components/common/Container";
import { dafaaData } from "@/data/dafaa-app";
import { DownloadButtons } from "./app-showcase/DownloadButtons";
import { PhoneSimulation } from "./app-showcase/PhoneSimulation";
import { LUXURY_EASE } from "@/lib/animations";

export function AppShowcase() {
  const { app } = dafaaData;

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
            {/* Copy & Overview Column */}
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
                <span>خدماتنا • محفظة دَفْع الإلكترونية</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.2] tracking-tight text-white">
                {app.name} <br />
                <span className="text-brand-cyan">{app.slogan || "حلول وتقنيات مالية"}</span> في متناول يدك
              </h2>

              {/* Comprehensive Introductory Overview (نبذة تعريفية شاملة) */}
              <div className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  تُعد <strong className="text-white font-semibold">محفظة دَفْع</strong> الذراع التقني والمالي الرائد لشركة يمن فيوتشر للخدمات المالية، والتي أُطلقت لتمثل نقلة نوعية في قطاع المدفوعات الرقمية والشمول المالي في اليمن.
                </p>
                <p>
                  تمنح المحفظة الأفراد ورواد الأعمال تجربة مصرفية ذكية وفورية عبر الهاتف، تمكنهم من إدارة أرصدتهم، وإجراء التحويلات، وسداد الفواتير والمشتريات بكل سهولة وموثوقية، مدعومة بأعلى معايير الحماية والأمان المالي.
                </p>
              </div>

              {/* Wallet Portal Card / Outlink (التفاصيل الكاملة في موقع المحفظة) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.06] border border-brand-cyan/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1 text-start">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-white">
                      الموقع الرسمي لمحفظة دَفْع
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-normal">
                    للاطلاع على تفاصيل الخدمات، آليات فتح الحسابات، ودليل الاستخدام الشامل.
                  </p>
                </div>

                <a
                  href={app.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-cyan hover:bg-brand-cyan-light text-brand-navy font-bold text-xs sm:text-sm transition-colors shrink-0 cursor-pointer"
                >
                  <span>زيارة موقع المحفظة</span>
                  <ArrowUpLeft className="w-4 h-4" />
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
