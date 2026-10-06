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
  LucideIcon,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { valuesData, goalsData } from "@/data/values";

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
};

export function Values() {
  return (
    <section id="values" className="py-20 bg-surface-muted border-b border-border-subtle">
      <Container>
        {/* Core Values Part */}
        <SectionHeading
          badge="قيمنا المؤسسية"
          title="ركائز عملنا التي نلتزم بها"
          description="تستند يمن فيوتشر إلى منظومة قيم مصرفية وتقنية متينة توجه كافة خدماتنا وشراكاتنا اليومية."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesData.map((val) => {
            const IconComponent = iconMap[val.icon] || Sparkles;
            return (
              <div
                key={val.id}
                className="p-6 rounded-2xl bg-white border border-border-subtle text-start space-y-3 transition-colors hover:border-brand-cyan/60"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-cyan-tint border border-brand-cyan/30 flex items-center justify-center text-brand-navy">
                  <IconComponent className="w-6 h-6 text-brand-navy" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Strategic Goals Part */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <SectionHeading
            badge="أهدافنا الاستراتيجية"
            title="غاياتنا في قيادة الدفع الإلكتروني"
            description="نعمل وفق رؤية واضحة تستهدف إحداث نقلة نوعية في التعاملات المالية اليومية داخل اليمن."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goalsData.map((goal, idx) => {
              return (
                <div
                  key={goal.id}
                  className="p-6 rounded-2xl bg-white border border-border-subtle text-start flex items-start gap-4 transition-colors hover:border-brand-cyan/60"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center shrink-0 font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-lg font-bold text-brand-navy">
                      {goal.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
