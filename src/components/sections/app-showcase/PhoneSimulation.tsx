"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckCircle2,
  QrCode,
  Sparkles,
  ShieldCheck,
  Smartphone,
  PlusCircle,
  Zap,
} from "@/components/icons";
import { cn } from "@/lib/utils";

type ScreenView = "home" | "splash";

interface Hotspot {
  id: string;
  title: string;
  description: string;
  top: string;
  left: string;
}

const hotspots: Hotspot[] = [
  {
    id: "balance",
    title: "حساب ومحفظة متكاملة",
    description: "إدارة رصيد الريال اليمني والعملات الأجنبية في مكان واحد مع كشف حساب فوري",
    top: "16%",
    left: "50%",
  },
  {
    id: "services",
    title: "خدمات مصرفية فورية",
    description: "سداد فواتير الكهرباء والمياه، شحن جميع شبكات الاتصالات، والمصارفة اللحظية",
    top: "56%",
    left: "50%",
  },
  {
    id: "action",
    title: "الدفع والتحويل السريع",
    description: "زر العمليات المباشرة لتحويل الأموال ودفع مشتريات الـ QR بلمسة واحدة",
    top: "89%",
    left: "50%",
  },
];

export function PhoneSimulation() {
  const [activeScreen, setActiveScreen] = useState<ScreenView>("home");
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-sm sm:max-w-md mx-auto py-2">
      {/* Ambient Radial Glow behind the smartphone (Zero shadows rule) */}
      <div
        className="absolute w-80 sm:w-96 h-80 sm:h-96 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute w-64 h-64 bg-blue-500/15 rounded-full blur-3xl pointer-events-none -z-10 -bottom-10"
        aria-hidden="true"
      />

      {/* Floating Micro-Card 1: Instant Remittance (Top-Start in RTL) */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:flex absolute top-6 -start-6 lg:-start-10 z-30 items-center gap-3 bg-slate-900/95 backdrop-blur-md border border-emerald-500/40 text-white rounded-2xl p-3 select-none pointer-events-none"
      >
        <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div className="flex flex-col text-start">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold text-white">حوالة واردة فورية</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <span className="text-[10px] text-emerald-300 font-mono font-bold" dir="ltr">
            + 120,000 YER
          </span>
          <span className="text-[9px] text-slate-400">شبكة يمن فيوتشر المعتمدة</span>
        </div>
      </motion.div>

      {/* Floating Micro-Card 2: QR Payment (Bottom-End in RTL) */}
      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:flex absolute bottom-24 -end-6 lg:-end-10 z-30 items-center gap-3 bg-slate-900/95 backdrop-blur-md border border-brand-cyan/50 text-white rounded-2xl p-3 select-none pointer-events-none"
      >
        <div className="w-9 h-9 rounded-xl bg-brand-cyan/15 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan shrink-0 relative">
          <QrCode className="w-5 h-5" />
          <span className="absolute inset-x-1 top-1 h-0.5 bg-brand-cyan-light rounded-full animate-bounce" />
        </div>
        <div className="flex flex-col text-start">
          <div className="flex items-center gap-1">
            <span className="text-[11px] font-bold text-white">دفع مشتريات QR</span>
            <span className="px-1.5 py-0.2 rounded bg-brand-cyan/20 text-brand-cyan text-[8px] font-bold">فوري</span>
          </div>
          <span className="text-[10px] text-slate-300">سداد فوري بنقاط البيع</span>
          <span className="text-[9px] text-slate-400">هايبرات، كافيهات، ومتاجر</span>
        </div>
      </motion.div>

      {/* Physical Smartphone Device Container (Zero shadows, precision metallic bezel) */}
      <div className="relative w-[285px] sm:w-[310px] md:w-[320px] aspect-[9/19.5] bg-linear-to-b from-slate-900 via-slate-950 to-[#070b16] rounded-[50px] sm:rounded-[54px] p-2.5 sm:p-3 border-[3.5px] border-slate-600/90 ring-1 ring-white/15 z-10 transition-transform duration-300 hover:scale-[1.015]">
        {/* Hardware Volume Buttons (Left Bezel) */}
        <div className="absolute -left-[5px] top-28 w-[3px] h-10 bg-slate-500 rounded-l-sm" />
        <div className="absolute -left-[5px] top-42 w-[3px] h-10 bg-slate-500 rounded-l-sm" />

        {/* Hardware Power Button (Right Bezel) */}
        <div className="absolute -right-[5px] top-32 w-[3px] h-14 bg-slate-500 rounded-r-sm" />

        {/* Phone Glass Screen Surface */}
        <div className="relative w-full h-full rounded-[40px] sm:rounded-[44px] overflow-hidden bg-black border border-slate-800/90">
          {/* Dynamic Island Notch Pill */}
          <div className="absolute top-2.5 inset-x-0 z-40 flex justify-center pointer-events-none">
            <div className="w-24 h-5 bg-black rounded-full border border-slate-800 flex items-center justify-between px-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-blue-900/90" />
              </div>
              <div className="w-8 h-1 bg-slate-900 rounded-full" />
            </div>
          </div>

          {/* Subtle Diagonal Glass Gloss (Zero shadows) */}
          <div
            className="absolute inset-0 z-20 pointer-events-none bg-linear-to-tr from-transparent via-white/[0.04] to-transparent"
            aria-hidden="true"
          />

          {/* Actual Screen Image Display with Smooth Crossfade */}
          <AnimatePresence mode="wait">
            {activeScreen === "home" ? (
              <motion.div
                key="home-screen"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src="/images/dafaa-app/dafaa-home.jpg"
                  alt="واجهة تطبيق محفظة دَفْع الرئيسية"
                  fill
                  priority
                  sizes="(max-width: 640px) 285px, 320px"
                  className="object-cover object-top select-none pointer-events-none"
                />

                {/* Interactive Hotspots Layer on Home Screen */}
                {hotspots.map((spot) => {
                  const isOpened = activeHotspot === spot.id;

                  return (
                    <div
                      key={spot.id}
                      style={{ top: spot.top, left: spot.left }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
                    >
                      {/* Pulse Ring Pin */}
                      <button
                        type="button"
                        onClick={() => setActiveHotspot(isOpened ? null : spot.id)}
                        className="relative group p-1.5 focus:outline-none cursor-pointer"
                        aria-label={spot.title}
                      >
                        <span className="absolute inset-0 rounded-full bg-brand-cyan/40 animate-ping" />
                        <span className="relative flex items-center justify-center w-5 h-5 rounded-full bg-brand-navy border-2 border-brand-cyan text-white text-[10px] font-bold group-hover:bg-brand-cyan group-hover:text-brand-navy transition-colors">
                          <Sparkles className="w-2.5 h-2.5 text-brand-cyan" />
                        </span>
                      </button>

                      {/* Tooltip Popup on Hotspot */}
                      <AnimatePresence>
                        {isOpened && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 p-2.5 rounded-xl bg-slate-900/95 border border-brand-cyan/50 text-white backdrop-blur-md z-40 text-start pointer-events-auto"
                          >
                            <div className="flex items-center justify-between gap-1 mb-1">
                              <span className="text-[10px] font-bold text-brand-cyan">
                                {spot.title}
                              </span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveHotspot(null);
                                }}
                                className="text-slate-400 hover:text-white text-[10px] px-1"
                              >
                                ✕
                              </button>
                            </div>
                            <p className="text-[9px] text-slate-300 leading-tight">
                              {spot.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="splash-screen"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="relative w-full h-full bg-white flex items-center justify-center"
              >
                <Image
                  src="/images/dafaa-app/dafaa-splash.jpg"
                  alt="شاشة ترحيب وهوية تطبيق محفظة دَفْع"
                  fill
                  priority
                  sizes="(max-width: 640px) 285px, 320px"
                  className="object-contain select-none pointer-events-none"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Interactive Screen Switcher Control Bar (Below Phone) */}
      <div className="mt-5 flex items-center gap-1.5 p-1 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-white/10 z-20">
        <button
          type="button"
          onClick={() => {
            setActiveScreen("home");
            setActiveHotspot(null);
          }}
          className={cn(
            "flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer",
            activeScreen === "home"
              ? "bg-brand-cyan text-brand-navy shadow-none"
              : "text-slate-300 hover:text-white hover:bg-white/5"
          )}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>الواجهة الرئيسية</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveScreen("splash");
            setActiveHotspot(null);
          }}
          className={cn(
            "flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer",
            activeScreen === "splash"
              ? "bg-brand-cyan text-brand-navy shadow-none"
              : "text-slate-300 hover:text-white hover:bg-white/5"
          )}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>شاشة الترحيب</span>
        </button>
      </div>

      {/* Interactive Helper Hint */}
      <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-slate-300 font-medium">
        <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
        <span>واجهات محفظة دَفْع الرسمية المعتمدة لشركة يمن فيوتشر</span>
      </div>
    </div>
  );
}
