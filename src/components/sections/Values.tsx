import {
  ShieldCheck,
  Sparkles,
  Cpu,
  Users,
  Smartphone,
  Repeat,
  TrendingUp,
  ShoppingBag,
  Handshake,
  Award,
  Activity,
  Zap,
  Clock,
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { valuesData, trustMetricsData, goalsData } from "@/data/values";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Sparkles,
  Cpu,
  Users,
  Smartphone,
  Repeat,
  TrendingUp,
  ShoppingBag,
  Handshake,
  Award,
  Activity,
  Zap,
  Clock,
};

export function Values() {
  return (
    <section id="values" className="py-24 sm:py-28 bg-surface-muted border-b border-border-subtle relative overflow-hidden">
      {/* Subtle Financial Vector Grid Texture (Zero Shadows) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #1a2754 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <Container className="relative z-10">
        {/* Core Values Section Header */}
        <SectionHeading
          badge="الركائز والقيم المؤسسية"
          title="قيم مصرفية وتقنية تصنع موثوقية المستقبل"
          description="تلتزم يمن فيوتشر بمبادئ تشغيلية صارمة تضمن أعلى درجات الحماية وتمنح المجتمع تجربة دفع رقمية رفيعة المستوى."
        />

        {/* 4 Values Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {valuesData.map((val, idx) => {
            const IconComponent = iconMap[val.icon] || Sparkles;
            const indexFormatted = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={val.id}
                className="group relative p-7 rounded-3xl bg-white border border-border-subtle hover:border-brand-cyan transition-all duration-300 ease-out hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden cursor-default"
              >
                {/* Top Glowing Indicator Line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Watermark Index Number */}
                <span className="absolute top-4 left-4 text-4xl font-black text-slate-100 group-hover:text-brand-cyan-tint transition-colors duration-300 select-none pointer-events-none">
                  {indexFormatted}
                </span>

                <div>
                  {/* Icon Housing */}
                  <div className="w-14 h-14 rounded-2xl bg-brand-cyan-tint border border-brand-cyan/25 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white group-hover:border-brand-navy transition-all duration-300 shrink-0 mb-6">
                    <IconComponent className="w-7 h-7 transition-transform duration-300 group-hover:scale-105" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-navy-light transition-colors mb-3 leading-snug">
                    {val.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {val.description}
                  </p>
                </div>

                {/* Interactive Bottom Accent Bar */}
                <div className="h-0.5 w-8 bg-brand-cyan/30 group-hover:w-full group-hover:bg-brand-cyan transition-all duration-300 rounded-full mt-6" />
              </div>
            );
          })}
        </div>

        {/* Banking Trust & Performance Operations Matrix (Dark Luxury Fintech Card) */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-brand-navy border border-brand-navy-dark text-white relative overflow-hidden">
          {/* Subtle Grid Pattern Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle, #73a7c1 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Top Multi-Color Accent Strip */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-cyan via-white to-brand-cyan-light" />

          {/* Header of Trust Strip */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-brand-cyan-light">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                <span>بنية تحتية معتمدة ومتصلة لحظياً</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                معايير تشغيلية عالمية لحماية وإدارة المدفوعات
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed text-start">
              أنظمة معالجة وتسوية مصرفية مؤمنة بأعلى المعايير الدولية لحماية بيانات وأموال العملاء والتجار في كافة المحافظات اليمنية.
            </p>
          </div>

          {/* 4 Performance Metric Cards with Interactive Hover */}
          <div className="relative z-10 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustMetricsData.map((metric) => {
              const MetricIcon = iconMap[metric.icon] || ShieldCheck;
              return (
                <div
                  key={metric.id}
                  className="group p-6 rounded-2xl bg-white/[0.04] border border-white/10 text-start space-y-3.5 hover:bg-white/[0.09] hover:border-brand-cyan/60 transition-all duration-300 ease-out hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white via-slate-100 to-brand-cyan-light bg-clip-text text-transparent tracking-tight">
                      {metric.value}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-brand-cyan-light group-hover:bg-brand-cyan group-hover:text-brand-navy group-hover:scale-105 transition-all duration-300 shrink-0">
                      <MetricIcon className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-brand-cyan-light transition-colors">
                      {metric.label}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {metric.sublabel}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Elegant Section Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mt-24 mb-16" />

        {/* Strategic Goals Part (Balanced 6 Cards Grid - 3x2) */}
        <div>
          <SectionHeading
            badge="خارطة الطريق الوطنية"
            title="أهداف استراتيجية لقيادة التحول المالي الرقمي"
            description="محاور عمل مدروسة تستهدف تمكين الاقتصاد الوطني والانتقال بالتعاملات من النمط التقليدي إلى الآفاق الرقمية."
          />

          {/* Balanced 6 Goals Grid (3x2) with Zero Shadows & Pure Icon Focus */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {goalsData.map((goal) => {
              const GoalIcon = iconMap[goal.icon] || TrendingUp;

              return (
                <div
                  key={goal.id}
                  className="group relative p-7 rounded-3xl bg-white border border-border-subtle hover:border-brand-cyan transition-all duration-300 ease-out hover:-translate-y-1.5 flex flex-col justify-between text-start overflow-hidden cursor-default"
                >
                  {/* Top Glowing Accent */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Header: Icon & Subtle Corner Arrow */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-brand-cyan-tint border border-brand-cyan/25 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white group-hover:border-brand-navy transition-all duration-300 shrink-0">
                        <GoalIcon className="w-7 h-7 transition-transform duration-300 group-hover:scale-105" />
                      </div>

                      <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-brand-navy group-hover:border-brand-cyan/40 group-hover:bg-brand-cyan-tint transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-brand-navy group-hover:text-brand-navy-light transition-colors mb-2.5 leading-snug">
                      {goal.title}
                    </h4>

                    {/* Concise Description */}
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {goal.description}
                    </p>
                  </div>

                  {/* Interactive Bottom Accent Bar */}
                  <div className="h-0.5 w-8 bg-brand-cyan/30 group-hover:w-full group-hover:bg-brand-cyan transition-all duration-300 rounded-full mt-6" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
