import Link from "next/link";
import { ArrowLeft, ArrowDownToLine, ShieldCheck, Zap, Users, Store } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-surface-muted border-b border-border-subtle py-16 lg:py-24"
    >
      {/* Subtle geometric pattern background (clean lines, no shadows) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1a2754_1px,transparent_1px)] [background-size:24px_24px]" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-start space-y-6">
            <Badge
              variant="secondary"
              className="px-4 py-1.5 text-xs sm:text-sm font-semibold text-brand-navy border border-brand-cyan/40 bg-brand-cyan-tint"
            >
              <Zap className="w-3.5 h-3.5 me-1.5 text-brand-cyan" />
              الجيل القادم من الخدمات المالية الرقمية في اليمن
            </Badge>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy leading-[1.2] tracking-tight">
              حلول مالية ذكية <br />
              <span className="text-brand-cyan">تصنع المستقبل</span> بين يديك
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              تقدم شركة <strong>يمن فيوتشر</strong> منظومة دفع رقمية متكاملة تمنحك سرعة فائقة في تحويل الأموال، وسداد الفواتير وشحن الرصيد لكافة الشبكات، وإدارة مدفوعاتك اليومية والتجارية بأعلى معايير الأمان المصرفي.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto text-base gap-2"
              >
                <Link href="#app">
                  <ArrowDownToLine className="w-5 h-5 text-brand-cyan-light" />
                  <span>حمّل تطبيق المحفظة</span>
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-base gap-2"
              >
                <Link href="#services">
                  <span>استكشف الخدمات</span>
                  <ArrowLeft className="w-4 h-4 text-brand-cyan" />
                </Link>
              </Button>
            </div>

            {/* Quick Metrics (Flat cards, no shadows) */}
            <div className="pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              <div className="p-3 rounded-xl bg-white border border-border-subtle">
                <span className="block text-2xl font-black text-brand-navy">
                  24/7
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  سداد وتحويل فوري
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white border border-border-subtle">
                <span className="block text-2xl font-black text-brand-navy">
                  +4,500
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  وكيل ونقطة خدمة
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white border border-border-subtle">
                <span className="block text-2xl font-black text-brand-navy">
                  100%
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  أمان مالي وتشفير
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white border border-border-subtle">
                <span className="block text-2xl font-black text-brand-navy">
                  كل اليمن
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  تغطية شاملة للمحافظات
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Feature Card Display (Flat modern fintech card, no shadows) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white border-2 border-brand-cyan/30 rounded-3xl p-6 sm:p-8 space-y-6">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-border-subtle">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy flex items-center justify-center text-white font-bold text-sm">
                    YF
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy text-base">
                      محفظة يمن فيوتشر
                    </h3>
                    <p className="text-xs text-slate-500">
                      الحساب الرقمي المعتمد
                    </p>
                  </div>
                </div>

                <Badge variant="success" className="text-xs">
                  نشط وآمن
                </Badge>
              </div>

              {/* Balance Widget Simulation */}
              <div className="bg-brand-navy text-white rounded-2xl p-6 border border-brand-navy-light space-y-3">
                <span className="text-xs text-brand-cyan-light font-medium block">
                  الرصيد المتاح بالمحفظة
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-black tracking-tight" dir="ltr">
                    250,000 <span className="text-sm font-normal text-brand-cyan-light">YER</span>
                  </span>
                  <span className="text-xs bg-white/10 px-2.5 py-1 rounded-lg text-brand-cyan-light">
                    محفظة ذكية
                  </span>
                </div>
              </div>

              {/* Fast Action Shortcuts */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-700 block">
                  العمليات الأكثر استخداماً
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl border border-border-subtle bg-surface-muted hover:border-brand-cyan/50 transition-colors">
                    <Zap className="w-4 h-4 text-brand-cyan mb-1" />
                    <span className="text-xs font-bold text-brand-navy block">
                      سداد باقات وفواتير
                    </span>
                    <span className="text-[11px] text-slate-500">
                      يمن موبايل، يو، سبأفون
                    </span>
                  </div>

                  <div className="p-3 rounded-xl border border-border-subtle bg-surface-muted hover:border-brand-cyan/50 transition-colors">
                    <Users className="w-4 h-4 text-brand-cyan mb-1" />
                    <span className="text-xs font-bold text-brand-navy block">
                      تحويل مالي فوري
                    </span>
                    <span className="text-[11px] text-slate-500">
                      برقم الهاتف أو الهوية
                    </span>
                  </div>

                  <div className="p-3 rounded-xl border border-border-subtle bg-surface-muted hover:border-brand-cyan/50 transition-colors">
                    <Store className="w-4 h-4 text-brand-cyan mb-1" />
                    <span className="text-xs font-bold text-brand-navy block">
                      دفع مشتريات QR
                    </span>
                    <span className="text-[11px] text-slate-500">
                      لدى آلاف المتاجر
                    </span>
                  </div>

                  <div className="p-3 rounded-xl border border-border-subtle bg-surface-muted hover:border-brand-cyan/50 transition-colors">
                    <ShieldCheck className="w-4 h-4 text-brand-cyan mb-1" />
                    <span className="text-xs font-bold text-brand-navy block">
                      سحب وإيداع نقد
                    </span>
                    <span className="text-[11px] text-slate-500">
                      من أقرب وكيل معتمد
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
