import Image from "next/image";
import {
  ShieldCheck,
  Zap,
  Store,
  Clock,
} from "lucide-react";
import { Container } from "@/components/common/Container";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-brand-navy via-[#142048] to-[#0a1024] text-white border-b border-brand-navy-light/30 pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-28"
    >
      {/* Subtle brand cyan radial ambient light (Zero shadows) */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_20%,rgba(115,167,193,0.18),transparent_70%)]"
        aria-hidden="true"
      />

      {/* Yemen Future Branded Watermark (Fades out early so it does not show all over the hero) */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden select-none"
        aria-hidden="true"
      >
        <Image
          src="/images/yemen-future-background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-20 [mask-image:linear-gradient(to_bottom,black_10%,rgba(0,0,0,0.35)_30%,transparent_50%)]"
        />
      </div>

      <Container className="relative">
        {/* Centered Editorial Proposition */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6 sm:space-y-8">
          {/* Main Display Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.18] tracking-tight">
            حلول مالية ذكية <br />
            <span className="text-brand-cyan">تصنع المستقبل</span> بين يديك
          </h1>

          {/* Descriptive Mission Copy */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            تقدم شركة <strong>يمن فيوتشر</strong> منظومة دفع رقمية متكاملة تمنحك سرعة فائقة في تحويل الأموال، وسداد الفواتير وشحن الرصيد لكافة الشبكات، وإدارة مدفوعاتك اليومية والتجارية بأعلى معايير الأمان المصرفي.
          </p>
        </div>

        {/* Unified Nationwide Performance & Metrics Ribbon */}
        <div className="mt-16 lg:mt-20 pt-10 border-t border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Metric 1 */}
            <div className="p-5 rounded-2xl bg-white/[0.05] border border-white/10 text-start space-y-2 hover:border-brand-cyan/40 hover:bg-white/[0.08] transition-colors">
              <div className="flex items-center gap-2 text-brand-cyan">
                <Clock className="w-5 h-5 shrink-0" />
                <span className="text-xs font-semibold text-brand-cyan-light">جاهزية مستمرة</span>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight" dir="ltr">
                24/7/365
              </div>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                سداد وتحويل فوري على مدار الساعة دون توقف
              </p>
            </div>

            {/* Metric 2 */}
            <div className="p-5 rounded-2xl bg-white/[0.05] border border-white/10 text-start space-y-2 hover:border-brand-cyan/40 hover:bg-white/[0.08] transition-colors">
              <div className="flex items-center gap-2 text-brand-cyan">
                <Store className="w-5 h-5 shrink-0" />
                <span className="text-xs font-semibold text-brand-cyan-light">شبكة واسعة</span>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight" dir="ltr">
                +4,500
              </div>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                وكيل ونقطة خدمة معتمدة في كافة المحافظات
              </p>
            </div>

            {/* Metric 3 */}
            <div className="p-5 rounded-2xl bg-white/[0.05] border border-white/10 text-start space-y-2 hover:border-brand-cyan/40 hover:bg-white/[0.08] transition-colors">
              <div className="flex items-center gap-2 text-brand-cyan">
                <Zap className="w-5 h-5 shrink-0" />
                <span className="text-xs font-semibold text-brand-cyan-light">معالجة فورية</span>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight" dir="ltr">
                &lt; 2s
              </div>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                سرعة تنفيذ الحوالات والمدفوعات الإلكترونية
              </p>
            </div>

            {/* Metric 4 */}
            <div className="p-5 rounded-2xl bg-white/[0.05] border border-white/10 text-start space-y-2 hover:border-brand-cyan/40 hover:bg-white/[0.08] transition-colors">
              <div className="flex items-center gap-2 text-brand-cyan">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <span className="text-xs font-semibold text-brand-cyan-light">معايير مصرفية</span>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight" dir="ltr">
                100%
              </div>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                أمان مالي وتشفير مصرفي معتمد
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
