import { Target, Compass, Building, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { companyOverview } from "@/data/values";

export function About() {
  return (
    <section id="about" className="py-20 bg-white border-b border-border-subtle">
      <Container>
        <SectionHeading
          badge="من نحن"
          title="رواد التكنولوجيا المالية والدفع الإلكتروني"
          description="نسخر الابتكار الرقمي والخبرات المصرفية لنمنح المجتمع اليمني تجربة مالية موثوقة وميسرة تواكب المستقبل."
        />

        {/* Story Paragraph */}
        <div className="mt-12 max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-surface-muted border border-border-subtle text-start">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-brand-navy text-white shrink-0 hidden sm:block">
              <Building className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-brand-navy">
                {companyOverview.name}
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                {companyOverview.story}
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-brand-navy">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                  ترخيص واعتماد رسمي
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                  كوادر إدارية وتقنية متخصصة
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                  بنية تحتية برمجية مؤمنة بالكامل
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Grid (Flat Cards, Zero Shadows) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Mission Card */}
          <div className="p-8 rounded-2xl bg-white border-2 border-brand-cyan/30 text-start space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brand-cyan-tint border border-brand-cyan/30 flex items-center justify-center text-brand-navy">
              <Compass className="w-6 h-6 text-brand-navy" />
            </div>
            <h3 className="text-2xl font-bold text-brand-navy">
              رسالتنا
            </h3>
            <p className="text-base text-slate-600 leading-relaxed">
              {companyOverview.mission}
            </p>
          </div>

          {/* Vision Card */}
          <div className="p-8 rounded-2xl bg-brand-navy text-white border border-brand-navy-light text-start space-y-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-brand-cyan-light">
              <Target className="w-6 h-6 text-brand-cyan-light" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              رؤيتنا
            </h3>
            <p className="text-base text-slate-200 leading-relaxed">
              {companyOverview.vision}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
