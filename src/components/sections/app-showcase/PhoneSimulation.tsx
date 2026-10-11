"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ShieldCheck,
  Smartphone,
} from "@/components/icons";
import { cn } from "@/lib/utils";

type ScreenView = "home" | "splash";

export function PhoneSimulation() {
  const [activeScreen, setActiveScreen] = useState<ScreenView>("home");

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
          onClick={() => setActiveScreen("home")}
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
          onClick={() => setActiveScreen("splash")}
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

      {/* Official Verification Note */}
      <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-slate-300 font-medium">
        <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
        <span>واجهات محفظة دَفْع الرسمية المعتمدة لشركة يمن فيوتشر</span>
      </div>
    </div>
  );
}
