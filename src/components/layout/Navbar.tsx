"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Smartphone, ArrowDownToLine } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#hero", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#values", label: "القيم والأهداف" },
  { href: "#services", label: "خدماتنا" },
  { href: "#app", label: "تطبيق المحفظة" },
  { href: "#contact", label: "اتصل بنا" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
      if (isScrolled && mobileOpen) {
        setMobileOpen(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  return (
    <>
      {/* Invariant height placeholder in document flow to prevent any page jumps */}
      <div className="h-20 w-full shrink-0" aria-hidden="true" />

      {/* Fixed Header floating smoothly over the viewport */}
      <header className="fixed top-0 inset-x-0 z-50 pointer-events-none flex justify-center">
        <div
          className={cn(
            "pointer-events-auto transition-all duration-300 ease-out",
            scrolled
              ? "mt-3 sm:mt-4 w-[92%] sm:w-[90%] max-w-5xl xl:max-w-6xl rounded-2xl border border-border-subtle bg-white/95 backdrop-blur-md px-4 sm:px-6"
              : "mt-0 w-full max-w-full rounded-none border-b border-slate-100 bg-white px-4 sm:px-6 lg:px-8"
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
              <Logo size="md" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-semibold text-slate-700 hover:text-brand-navy hover:bg-brand-cyan-tint/70 rounded-xl transition-all duration-200",
                    scrolled
                      ? "px-3 py-1.5 text-xs xl:text-sm"
                      : "px-3.5 py-2 text-sm"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                asChild
                variant="default"
                size={scrolled ? "sm" : "default"}
                className={cn(
                  "gap-2 font-semibold rounded-xl transition-all duration-300",
                  scrolled ? "px-4 text-xs h-9" : "px-5 text-sm h-10"
                )}
              >
                <Link href="#app">
                  <ArrowDownToLine
                    className={cn(
                      "text-brand-cyan-light transition-all",
                      scrolled ? "w-3.5 h-3.5" : "w-4 h-4"
                    )}
                  />
                  <span>تحميل التطبيق</span>
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button & Quick CTA */}
            <div className="flex lg:hidden items-center gap-2">
              <Button
                asChild
                variant="default"
                size="sm"
                className={cn(
                  "text-xs transition-all",
                  scrolled ? "px-2.5 h-8 text-[11px]" : "px-3 h-9"
                )}
              >
                <Link href="#app">
                  <Smartphone className="w-3.5 h-3.5 text-brand-cyan-light" />
                  <span>التطبيق</span>
                </Link>
              </Button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-colors"
                aria-label="تبديل القائمة"
              >
                {mobileOpen ? (
                  <X className="h-6 w-6 text-brand-navy" />
                ) : (
                  <Menu className="h-6 w-6 text-brand-navy" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileOpen && (
            <div
              className={cn(
                "lg:hidden py-4 border-t border-border-subtle max-h-[75vh] overflow-y-auto",
                scrolled
                  ? "bg-white/95 backdrop-blur-md rounded-b-2xl"
                  : "bg-white"
              )}
            >
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-2.5 text-base font-semibold text-slate-700 hover:bg-brand-cyan-tint hover:text-brand-navy rounded-xl transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="pt-3 mt-2 border-t border-border-subtle px-4">
                <Button asChild className="w-full justify-center">
                  <Link href="#app" onClick={() => setMobileOpen(false)}>
                    <ArrowDownToLine className="w-4 h-4 me-2 text-brand-cyan-light" />
                    <span>تحميل تطبيق المحفظة</span>
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
