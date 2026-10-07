"use client";

import {
  ShieldCheck,
  Sparkles,
  Cpu,
  Users,
  Smartphone,
  Repeat,
  TrendingUp,
  ShoppingBag,
  Handshake,
  Award,
  Activity,
  Zap,
  Clock,
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { valuesData, goalsData } from "@/data/values";
import {
  fadeInUpVariants,
  staggerContainerVariants,
  fastStaggerContainerVariants,
} from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Sparkles,
  Cpu,
  Users,
  Smartphone,
  Repeat,
  TrendingUp,
  ShoppingBag,
  Handshake,
  Award,
  Activity,
  Zap,
  Clock,
};

export function Values() {
  return (
    <section id="values" className="py-24 sm:py-28 bg-surface-muted border-b border-border-subtle relative overflow-hidden">
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

        {/* 4 Values Cards Grid with Staggered In-View Motion */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {valuesData.map((val, idx) => {
            const IconComponent = iconMap[val.icon] || Sparkles;
            const indexFormatted = String(idx + 1).padStart(2, "0");

            return (
              <motion.div
                key={val.id}
                variants={fadeInUpVariants}
                className="group relative p-7 rounded-3xl bg-white border border-border-subtle hover:border-brand-cyan transition-all duration-300 ease-out hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden cursor-default"
              >
                {/* Top Glowing Indicator Line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-transparent via-brand-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Watermark Index Number */}
                <span className="absolute top-4 left-4 text-4xl font-black text-slate-100 group-hover:text-brand-cyan-tint transition-colors duration-300 select-none pointer-events-none">
                  {indexFormatted}
                </span>

                <div>
                  {/* Icon Housing */}
                  <div className="w-14 h-14 rounded-2xl bg-brand-cyan-tint border border-brand-cyan/25 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white group-hover:border-brand-navy transition-all duration-300 shrink-0 mb-6">
                    <IconComponent className="w-7 h-7 transition-transform duration-300 group-hover:scale-105" />
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
        </motion.div>

        {/* Elegant Section Divider */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-slate-200 to-transparent mt-24 mb-16" />

        {/* Strategic Goals Part (Balanced 6 Cards Grid - 3x2) */}
        <div>
          <SectionHeading
            badge="خارطة الطريق الوطنية"
            title="أهداف استراتيجية لقيادة التحول المالي الرقمي"
            description="محاور عمل مدروسة تستهدف تمكين الاقتصاد الوطني والانتقال بالتعاملات من النمط التقليدي إلى الآفاق الرقمية."
          />

          {/* Balanced 6 Goals Grid (3x2) with Fast Staggered In-View Motion */}
          <motion.div
            variants={fastStaggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          >
            {goalsData.map((goal) => {
              const GoalIcon = iconMap[goal.icon] || TrendingUp;

              return (
                <motion.div
                  key={goal.id}
                  variants={fadeInUpVariants}
                  className="group relative p-7 rounded-3xl bg-white border border-border-subtle hover:border-brand-cyan transition-all duration-300 ease-out hover:-translate-y-1.5 flex flex-col justify-between text-start overflow-hidden cursor-default"
                >
                  {/* Top Glowing Accent */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-transparent via-brand-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Header: Icon & Subtle Corner Arrow */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-brand-cyan-tint border border-brand-cyan/25 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white group-hover:border-brand-navy transition-all duration-300 shrink-0">
                        <GoalIcon className="w-7 h-7 transition-transform duration-300 group-hover:scale-105" />
                      </div>

                      <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-brand-navy group-hover:border-brand-cyan/40 group-hover:bg-brand-cyan-tint transition-all duration-300">
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
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
