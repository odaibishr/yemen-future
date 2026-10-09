"use client";

import React, { useSyncExternalStore } from "react";
import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { LUXURY_EASE } from "@/lib/animations";

interface SectionHeadingProps {
  badge?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: "center" | "start";
  className?: string;
}

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined" || !window.matchMedia) return () => { };
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function SectionHeading({
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  // Use useSyncExternalStore for flawless React 19 external media-query subscription
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  // Motion variants tailored for institutional fintech authority
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
        delayChildren: prefersReducedMotion ? 0 : 0.08,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: prefersReducedMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 22, filter: "blur(6px)" },
    visible: prefersReducedMotion
      ? { opacity: 1, transition: { duration: 0.3 } }
      : {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 1.0,
          ease: LUXURY_EASE,
        },
      },
  };

  const accentLineVariants: Variants = {
    hidden: prefersReducedMotion
      ? { opacity: 0 }
      : { opacity: 0, scaleX: 0 },
    visible: prefersReducedMotion
      ? { opacity: 1, transition: { duration: 0.3 } }
      : {
        opacity: 1,
        scaleX: 1,
        transition: {
          duration: 0.9,
          ease: LUXURY_EASE,
        },
      },
  };

  const descriptionVariants: Variants = {
    hidden: prefersReducedMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 16 },
    visible: prefersReducedMotion
      ? { opacity: 1, transition: { duration: 0.3 } }
      : {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.95,
          ease: LUXURY_EASE,
        },
      },
  };

  const isCenter = align === "center";

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -70px 0px" }}
      className={cn(
        "group flex flex-col max-w-3xl space-y-4",
        isCenter ? "mx-auto text-center items-center" : "text-start items-start",
        className
      )}
    >
      {/* Title with optical elevation reveal & ascender padding */}
      <div className="overflow-hidden pb-1 w-full">
        <motion.h2
          variants={titleVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-navy leading-tight"
        >
          {title}
        </motion.h2>
      </div>

      {/* Architectural fintech accent indicator with micro-interaction */}
      <div
        className={cn(
          "flex items-center gap-1.5",
          isCenter ? "justify-center" : "justify-start"
        )}
        aria-hidden="true"
      >
        <motion.div
          variants={accentLineVariants}
          className={cn(
            "h-[2.5px] w-12 sm:w-16 rounded-full group-hover:w-20 transition-all duration-300",
            isCenter
              ? "bg-linear-to-r from-brand-cyan/20 via-brand-cyan to-brand-cyan/20 origin-center"
              : "bg-linear-to-l from-brand-cyan via-brand-cyan to-brand-cyan/20 origin-right"
          )}
        />
        <motion.div
          variants={accentLineVariants}
          className="h-[2.5px] w-2 rounded-full bg-brand-navy/60 group-hover:bg-brand-navy transition-colors duration-300"
        />
      </div>

      {/* Supporting editorial description */}
      {description && (
        <motion.p
          variants={descriptionVariants}
          className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

