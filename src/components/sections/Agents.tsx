import { MapPin, Building, Users, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { governorateNetworks } from "@/data/contact";

export function Agents() {
  return (
    <section id="agents" className="py-20 bg-white ">
      <Container>
        <SectionHeading
          badge="الانتشار والوكلاء"
          title="شبكة متنامية تغطي جميع أرجاء اليمن"
          description="أينما كنت، خدمات يمن فيوتشر قريبة منك عبر آلاف الوكلاء ونقاط الخدمة المعتمدة في كافة المدن والمحافظات."
        />

        {/* Governorates Grid (Flat cards, zero shadows) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {governorateNetworks.map((gov, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-surface-muted border border-border-subtle hover:border-brand-cyan/60 transition-colors text-start space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-white border border-border-subtle text-brand-navy">
                    <MapPin className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy">
                    {gov.name}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 bg-white rounded-xl border border-border-subtle">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                    <Building className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>فروع رئيسية</span>
                  </div>
                  <span className="text-lg font-black text-brand-navy">
                    {gov.branches}
                  </span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-border-subtle">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                    <Users className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>وكيل معتمد</span>
                  </div>
                  <span className="text-lg font-black text-brand-navy">
                    +{gov.agents}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                {gov.highlight}
              </p>
            </div>
          ))}
        </div>

        {/* Agent Onboarding Banner (Zero Shadows) */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-brand-cyan-tint border-2 border-brand-cyan/40 text-start flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold text-brand-navy">
              هل تملك محلاً تجارياً أو مركزاً مالياً؟
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              انضم إلى شبكة وكلاء يمن فيوتشر المعتمدين، وزد من عوائدك اليومية عبر تقديم خدمات السحب والإيداع والحوالات لجمهورك.
            </p>
          </div>

          <Button asChild size="lg" className="shrink-0 gap-2">
            <Link href="#contact">
              <span>طلب الانضمام كوكيل</span>
              <ArrowLeft className="w-4 h-4 text-brand-cyan-light" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
