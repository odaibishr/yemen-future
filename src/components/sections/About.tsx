import { Target, Compass } from "lucide-react";
import { Container } from "@/components/common/Container";
import { companyOverview } from "@/data/values";

export function About() {
  return (
    <section id="about" className="py-20 bg-white border-b border-border-subtle">
      <Container>
        {/* Company Identity & Story */}
        <div className="space-y-6 text-start">
          {/* Company Brand */}
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-navy tracking-tight">
              يمن <span className="text-brand-cyan">فيوتشر</span>
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 leading-snug">
              {companyOverview.name}
            </h3>
          </div>

          {/* Company Story - Full Width, No Background, No Border, Bigger Font */}
          <div className="w-full text-start">
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-700 leading-relaxed font-normal">
              {companyOverview.story}
            </p>
          </div>
        </div>

        {/* Row 2: Vision & Mission Full-Width 2-Column Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
          {/* Mission Card */}
          <div className="p-8 rounded-2xl bg-white border-2 border-brand-cyan/30 text-start space-y-4 transition-colors hover:border-brand-cyan/60">
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
          <div className="p-8 rounded-2xl bg-brand-navy text-white border border-brand-navy-light text-start space-y-4 transition-colors hover:border-brand-cyan">
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
