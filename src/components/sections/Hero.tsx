"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { Container } from "@/components/common/Container";
import {
  fadeInUpVariants,
  staggerContainerVariants,
} from "@/lib/animations";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll progress for the Hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax Float Up (حركة النص للأعلى عند التمرير مع بقائه ظاهراً تماماً)
  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, shouldReduceMotion ? 0 : -75]
  );

  // Stays fully visible while scrolling (يظل ظاهراً تماماً دون أن يختفي)
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.85, 1],
    [1, 1, 0.92]
  );

  // Fixed Background Parallax (الخلفية والزخارف تظل راسية وثابتة مع حركة تباينية ناعمة)
  const bgAmbientY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", shouldReduceMotion ? "0%" : "25%"]
  );

  const watermarkY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", shouldReduceMotion ? "0%" : "18%"]
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative overflow-hidden bg-linear-to-b from-brand-navy via-[#142048] to-[#0a1024] text-white border-b border-brand-navy-light/30 pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-32"
    >
      {/* Subtle brand cyan radial ambient light (Fixed parallax depth - Zero shadows) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ y: bgAmbientY }}
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_20%,rgba(115,167,193,0.18),transparent_70%)] will-change-transform"
        aria-hidden="true"
      />

      {/* Yemen Future Branded Watermark (Anchored background with gentle parallax) */}
      <motion.div
        style={{ y: watermarkY }}
        className="absolute inset-0 pointer-events-none overflow-hidden select-none will-change-transform"
        aria-hidden="true"
      >
        <Image
          src="/images/yemen-future-background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-20 mask-[linear-gradient(to_bottom,black_10%,rgba(0,0,0,0.35)_30%,transparent_50%)]"
        />
      </motion.div>

      <Container className="relative z-10">
        {/* Scroll-Driven Upward Parallax Wrapper: Moves UP on scroll while remaining completely visible */}
        <motion.div
          style={{
            y: textY,
            opacity: textOpacity,
          }}
          className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6 sm:space-y-8 will-change-transform"
        >
          {/* Initial Entrance Orchestration */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center space-y-6 sm:space-y-8"
          >
            {/* Main Display Headline */}
            <motion.h1
              variants={fadeInUpVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.18] tracking-tight"
            >
              حلول مالية ذكية <br />
              <span className="text-brand-cyan">تصنع المستقبل</span> بين يديك
            </motion.h1>

            {/* Descriptive Mission Copy */}
            <motion.p
              variants={fadeInUpVariants}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal"
            >
              تقدم شركة <strong>يمن فيوتشر</strong> منظومة دفع رقمية متكاملة تمنحك سرعة فائقة في تحويل الأموال، وسداد الفواتير وشحن الرصيد لكافة الشبكات، وإدارة مدفوعاتك اليومية والتجارية بأعلى معايير الأمان المصرفي.
            </motion.p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
