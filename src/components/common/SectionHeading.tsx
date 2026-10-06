import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "center" | "start";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-3 max-w-3xl",
        align === "center" ? "mx-auto text-center items-center" : "text-start items-start",
        className
      )}
    >
      {badge && (
        <Badge
          variant="secondary"
          className="px-3.5 py-1 text-xs font-semibold text-brand-navy border border-brand-cyan/40 bg-brand-cyan-tint"
        >
          {badge}
        </Badge>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-navy leading-tight">
        {title}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
