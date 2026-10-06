import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:ring-offset-2 select-none",
  {
    variants: {
      variant: {
        default:
          "border border-transparent bg-brand-navy text-white",
        secondary:
          "border border-brand-cyan/30 bg-brand-cyan-tint text-brand-navy",
        cyan:
          "border border-transparent bg-brand-cyan text-white",
        outline:
          "border border-border-subtle bg-white text-slate-700",
        success:
          "border border-emerald-200 bg-emerald-50 text-emerald-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
