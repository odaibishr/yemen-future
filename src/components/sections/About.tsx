"use client";

import React, { useRef } from "react";
import { Target, Compass } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
  MotionValue,
} from "motion/react";
import { Container } from "@/components/common/Container";
import { companyOverview } from "@/data/values";
import {
  fadeInUpVariants,
  staggerContainerVariants,
} from "@/lib/animations";

function StoryWord({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.25, 1]);
  const color = useTransform(progress, range, ["#94a3b8", "#1e293b"]);

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block me-[0.28em]"
    >
      {word}
    </motion.span>
  );
}

function StoryScrollReveal({ story }: { story: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const maxProgress = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.08"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > maxProgress.get()) {
      maxProgress.set(Math.min(latest, 1));
    }
  });

  const words = story.split(" ");

  return (
    <p
      ref={containerRef}
      className="text-xl sm:text-2xl lg:text-3xl text-slate-800 leading-[1.8] font-normal"
    >
      {words.map((word, i) => {
        const start = (i / words.length) * 0.88;
        const end = Math.min(start + 0.22, 1);
        return (
          <StoryWord
            key={i}
            word={word}
            progress={maxProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 bg-white border-b border-border-subtle overflow-hidden">
      <Container>
        {/* Company Identity & Story */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="space-y-6 text-start"
        >
          {/* Company Brand */}
          <motion.div variants={fadeInUpVariants} className="space-y-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-navy tracking-tight">
              يمن <span className="text-brand-cyan">فيوتشر</span>
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 leading-snug">
              {companyOverview.name}
            </h3>
          </motion.div>

          {/* Company Story - Scroll Driven Word-by-Word Illumination (Once Only) */}
          <motion.div variants={fadeInUpVariants} className="w-full text-start">
            <StoryScrollReveal story={companyOverview.story} />
          </motion.div>
        </motion.div>

        {/* Row 2: Vision & Mission Full-Width 2-Column Cards with Sequenced Entrance */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full"
        >
          {/* Mission Card */}
          <motion.div
            variants={fadeInUpVariants}
            className="p-8 rounded-2xl bg-white border-2 border-brand-cyan/30 text-start space-y-4 transition-colors hover:border-brand-cyan/60"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-cyan-tint border border-brand-cyan/30 flex items-center justify-center text-brand-navy">
              <Compass className="w-6 h-6 text-brand-navy" />
            </div>
            <h3 className="text-2xl font-bold text-brand-navy">
              رسالتنا
            </h3>
            <p className="text-base text-slate-600 leading-relaxed">
              {companyOverview.mission}
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={fadeInUpVariants}
            className="p-8 rounded-2xl bg-brand-navy text-white border border-brand-navy-light text-start space-y-4 transition-colors hover:border-brand-cyan"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-brand-cyan-light">
              <Target className="w-6 h-6 text-brand-cyan-light" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              رؤيتنا
            </h3>
            <p className="text-base text-slate-200 leading-relaxed">
              {companyOverview.vision}
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
