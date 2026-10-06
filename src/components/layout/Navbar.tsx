"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ArrowDownToLine, ChevronLeft } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#hero", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#values", label: "القيم والأهداف" },
  { href: "#app", label: "تطبيق المحفظة" },
  { href: "#contact", label: "اتصل بنا" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Header floating smoothly over the viewport */}
      <header className="fixed top-0 inset-x-0 z-50 pointer-events-none flex justify-center">
        <div
          className={cn(
            "pointer-events-auto transition-all duration-300 ease-out",
            scrolled
              ? "mt-3 sm:mt-4 w-[92%] sm:w-[90%] max-w-5xl xl:max-w-6xl rounded-2xl border border-border-subtle bg-white/95 backdrop-blur-md px-4 sm:px-6"
              : "mt-0 w-full max-w-full rounded-none border-b border-transparent bg-transparent px-4 sm:px-6 lg:px-8"
          )}
        >
          <div
            className={cn(
              "mx-auto flex items-center justify-between transition-all duration-300 ease-out w-full",
              scrolled ? "h-16 max-w-full" : "h-20 max-w-7xl"
            )}
          >
            {/* Brand Logo */}
            <div
              className={cn(
                "transition-transform duration-300 origin-right shrink-0",
                scrolled && "scale-95"
              )}
            >
              <Logo size="md" variant={scrolled ? "default" : "light"} />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-semibold rounded-xl transition-all duration-200",
                    scrolled
                      ? "text-slate-700 hover:text-brand-navy hover:bg-brand-cyan-tint/70 px-3 py-1.5 text-xs xl:text-sm"
                      : "text-slate-200 hover:text-white hover:bg-white/10 px-3.5 py-2 text-sm"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Sidebar Navigation Drawer (shadcn Sheet) */}
            <div className="flex lg:hidden items-center gap-2">
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <button
                    className={cn(
                      "p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-colors",
                      scrolled
                        ? "text-slate-700 hover:bg-slate-100"
                        : "text-white hover:bg-white/10"
                    )}
                    aria-label="فتح القائمة الرئيسية"
                  >
                    <Menu className={cn("h-6 w-6", scrolled ? "text-brand-navy" : "text-white")} />
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[85vw] max-w-xs flex flex-col justify-between bg-white p-6 border-s border-border-subtle"
                >
                  <div className="space-y-6">
                    <SheetHeader className="pb-4 border-b border-border-subtle">
                      <Logo size="md" />
                      <SheetTitle className="sr-only">قائمة التنقل الرئيسية</SheetTitle>
                      <SheetDescription className="text-xs text-slate-500 pt-1">
                        المنظومة المالية والمدفوعات الإلكترونية المعتمدة
                      </SheetDescription>
                    </SheetHeader>

                    {/* Drawer Navigation Links */}
                    <nav className="flex flex-col space-y-1">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:text-brand-navy hover:bg-surface-muted transition-colors"
                        >
                          <span>{link.label}</span>
                          <ChevronLeft className="w-4 h-4 text-slate-400" />
                        </Link>
                      ))}
                    </nav>
                  </div>

                  {/* Drawer Footer Actions */}
                  <div className="space-y-3 pt-6 border-t border-border-subtle">
                    <Button
                      asChild
                      variant="default"
                      className="w-full h-11 justify-center rounded-xl font-bold gap-2 bg-brand-navy text-white hover:bg-brand-navy-light"
                    >
                      <Link href="#app" onClick={() => setMobileOpen(false)}>
                        <ArrowDownToLine className="w-4 h-4 text-brand-cyan-light" />
                        <span>تحميل تطبيق المحفظة</span>
                      </Link>
                    </Button>

                    <div className="text-center pt-1">
                      <p className="text-xs text-slate-400">
                        خدمة العملاء: 8000000 • متاح 24/7
                      </p>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
