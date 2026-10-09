"use client";

import Image from "next/image";
import { ArrowUpRight } from "@/components/icons";
import { motion, type Variants } from "motion/react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { valuesData, goalsData } from "@/data/values";
import { LUXURY_EASE } from "@/lib/animations";

// Slow, graceful luxury card entrance with per-row staggered timing
const valueCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      delay: (i % 4) * 0.14,
      ease: LUXURY_EASE,
    },
  }),
};

const goalCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      delay: (i % 3) * 0.15,
      ease: LUXURY_EASE,
    },
  }),
};

export function Values() {
  return (
    <section id="values" className="py-24 sm:py-28 bg-surface-muted  relative overflow-hidden">
      {/* Subtle Financial Vector Grid Texture (Zero Shadows) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #1a2754 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <Container className="relative z-10">
        {/* Core Values Section Header */}
        <SectionHeading
          badge="الركائز والقيم المؤسسية"
          title="قيم مصرفية وتقنية تصنع موثوقية المستقبل"
          description="تلتزم يمن فيوتشر بمبادئ تشغيلية صارمة تضمن أعلى درجات الحماية وتمنح المجتمع تجربة دفع رقمية رفيعة المستوى."
        />

        {/* 4 Values Cards Grid - Triggering smoothly when user reaches them */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {valuesData.map((val, idx) => {
            const indexFormatted = String(idx + 1).padStart(2, "0");

            return (
              <motion.div
                key={val.id}
                custom={idx}
                variants={valueCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18, margin: "0px 0px -70px 0px" }}
                className="group relative p-7 rounded-3xl bg-white border border-border-subtle hover:border-brand-cyan transition-all duration-300 ease-out hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden cursor-default"
              >
                {/* Top Glowing Indicator Line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-transparent via-brand-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Watermark Index Number */}
                <span className="absolute top-4 left-4 text-4xl font-black text-slate-100 group-hover:text-brand-cyan-tint transition-colors duration-300 select-none pointer-events-none">
                  {indexFormatted}
                </span>

                <div>
                  {/* Icon Housing with Authentic Corporate SVG */}
                  <div className="w-16 h-16 rounded-2xl bg-brand-cyan-tint border border-brand-cyan/25 flex items-center justify-center p-3 shrink-0 mb-6 group-hover:border-brand-navy transition-all duration-300">
                    <Image
                      src={val.icon}
                      alt={val.title}
                      width={44}
                      height={44}
                      className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-navy-light transition-colors mb-3 leading-snug">
                    {val.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {val.description}
                  </p>
                </div>

                {/* Interactive Bottom Accent Bar */}
                <div className="h-0.5 w-8 bg-brand-cyan/30 group-hover:w-full group-hover:bg-brand-cyan transition-all duration-300 rounded-full mt-6" />
              </motion.div>
            );
          })}
        </div>

        {/* Elegant Section Divider */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-slate-200 to-transparent mt-24 mb-16" />

        {/* Strategic Goals Part (Balanced 6 Cards Grid - 3x2) */}
        <div>
          <SectionHeading
            badge="خارطة الطريق الوطنية"
            title="أهداف استراتيجية لقيادة التحول المالي الرقمي"
            description="محاور عمل مدروسة تستهدف تمكين الاقتصاد الوطني والانتقال بالتعاملات من النمط التقليدي إلى الآفاق الرقمية."
          />

          {/* Balanced 6 Goals Grid (3x2) - Each card animates gracefully as user scrolls to it */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {goalsData.map((goal, idx) => {
              return (
                <motion.div
                  key={goal.id}
                  custom={idx}
                  variants={goalCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.18, margin: "0px 0px -70px 0px" }}
                  className="group relative p-7 rounded-3xl bg-white border border-border-subtle hover:border-brand-cyan transition-all duration-300 ease-out hover:-translate-y-1.5 flex flex-col justify-between text-start overflow-hidden cursor-default"
                >
                  {/* Top Glowing Accent */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-transparent via-brand-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Header: Authentic Corporate SVG & Subtle Corner Arrow */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-brand-cyan-tint border border-brand-cyan/25 flex items-center justify-center p-2.5 shrink-0 group-hover:border-brand-navy transition-all duration-300">
                        <Image
                          src={goal.icon}
                          alt={goal.title}
                          width={40}
                          height={40}
                          className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-brand-navy group-hover:border-brand-cyan/40 group-hover:bg-brand-cyan-tint transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-brand-navy group-hover:text-brand-navy-light transition-colors mb-2.5 leading-snug">
                      {goal.title}
                    </h4>

                    {/* Concise Description */}
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {goal.description}
                    </p>
                  </div>

                  {/* Interactive Bottom Accent Bar */}
                  <div className="h-0.5 w-8 bg-brand-cyan/30 group-hover:w-full group-hover:bg-brand-cyan transition-all duration-300 rounded-full mt-6" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
