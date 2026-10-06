import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({
  className,
  showText = true,
  size = "md",
}: LogoProps) {
  const dimensions = {
    sm: { width: 36, height: 36, textSize: "text-lg", subSize: "text-[10px]" },
    md: { width: 44, height: 44, textSize: "text-xl", subSize: "text-xs" },
    lg: { width: 56, height: 56, textSize: "text-2xl", subSize: "text-sm" },
  }[size];

  return (
    <Link
      href="#hero"
      className={cn(
        "inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-xl p-1",
        className
      )}
      aria-label="يمن فيوتشر للخدمات المالية والمدفوعات الإلكترونية"
    >
      <div className="relative shrink-0 flex items-center justify-center p-1 rounded-xl bg-white border border-brand-cyan/20 transition-transform group-hover:scale-105">
        <Image
          src="/svgs/logo.svg"
          alt="شعار يمن فيوتشر"
          width={dimensions.width}
          height={dimensions.height}
          priority
          className="object-contain"
        />
      </div>

      {showText && (
        <div className="flex flex-col text-start">
          <span
            className={cn(
              "font-extrabold tracking-tight text-brand-navy leading-none font-sans",
              dimensions.textSize
            )}
          >
            يمن فيوتشر
          </span>
          <span
            className={cn(
              "font-medium text-brand-cyan leading-tight mt-0.5",
              dimensions.subSize
            )}
          >
            للخدمات المالية والمدفوعات
          </span>
        </div>
      )}
    </Link>
  );
}
