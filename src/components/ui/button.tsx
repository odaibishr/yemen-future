import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        default:
          "bg-brand-navy text-white hover:bg-brand-navy-light active:bg-brand-navy-dark",
        primary:
          "bg-brand-navy text-white hover:bg-brand-navy-light active:bg-brand-navy-dark",
        cyan:
          "bg-brand-cyan text-white hover:bg-brand-cyan-light active:bg-brand-cyan-dark",
        secondary:
          "bg-brand-cyan-tint text-brand-navy border border-brand-cyan/30 hover:bg-brand-cyan/20",
        outline:
          "border border-border-subtle bg-white text-slate-800 hover:bg-surface-muted hover:border-brand-cyan/50 hover:text-brand-navy",
        ghost:
          "text-slate-700 hover:bg-surface-muted hover:text-brand-navy",
        link:
          "text-brand-navy underline-offset-4 hover:underline p-0 h-auto font-normal",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        lg: "h-12 rounded-xl px-7 text-base font-semibold",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
