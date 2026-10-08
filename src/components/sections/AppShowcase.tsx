"use client";

import Image from "next/image";
import { ArrowUpLeft, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/common/Container";
import { dafaaData } from "@/data/dafaa-app";
import { DownloadButtons } from "./app-showcase/DownloadButtons";
import {
  ambientFloatingVariants,
  fadeInUpVariants,
  staggerContainerVariants,
} from "@/lib/animations";

export function AppShowcase() {
  const { app } = dafaaData;

  return (
    <section
      id="app"
      className="py-10 sm:py-14 bg-surface-muted  relative overflow-hidden"
    >
      <Container>
        {/* Main Brand Showcase Card (Zero shadows, clean borders, high-contrast, compact height) */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="bg-brand-navy rounded-3xl border border-brand-navy-light text-white p-5 sm:p-7 lg:p-8 overflow-hidden relative"
        >
          {/* Subtle Ambient Radial Glow (Zero shadows) */}
          <div
            className="absolute top-0 right-0 w-72 h-72 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
            {/* Copy & Actions Column */}
            <motion.div variants={fadeInUpVariants} className="lg:col-span-7 space-y-4 text-start">
              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.2] tracking-tight">
                {app.name} <br />
                <span className="text-brand-cyan">{app.slogan}</span>
              </h2>

              {/* Concise Editorial Copy */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
                {app.description}
              </p>

              {/* Learn More via Official Website Link */}
              <div>
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
              <div className="pt-1">
                <DownloadButtons />
              </div>

              {/* Compliance & Supervision Note */}
              <div className="pt-2 flex items-center gap-2 text-xs text-brand-cyan-light font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>إحدى خدمات يمن فيوتشر المعتمدة والمرخصة من البنك المركزي اليمني</span>
              </div>
            </motion.div>

            {/* Official Dafaa Logo Showcase Column with Ambient Floating */}
            <div className="lg:col-span-5 flex justify-center items-center w-full">
              <motion.div
                variants={ambientFloatingVariants}
                animate="animate"
                className="w-full max-w-70 sm:max-w-80 bg-white rounded-3xl p-6 sm:p-7 border border-brand-cyan/25 flex items-center justify-center"
              >
                <div className="relative w-full aspect-square max-w-50 sm:max-w-57.5 flex items-center justify-center">
                  <Image
                    src="/images/dafaa-logo-official.png"
                    alt="شعار محفظة دَفْع الرسمي"
                    width={260}
                    height={260}
                    priority
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
