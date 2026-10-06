"use client";

import * as React from "react";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  LucideIcon,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactChannels } from "@/data/contact";

const channelIcons: Record<string, LucideIcon> = {
  phone: Phone,
  whatsapp: MessageSquare,
  email: Mail,
  location: MapPin,
};

export function Contact() {
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: "",
    phone: "",
    type: "استفسار عام",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    // Simulate successful form receipt and offer direct WhatsApp dispatch
    setSubmitted(true);
  };

  const openWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `مرحباً يمن فيوتشر،\nالاسم: ${formData.fullName}\nالهاتف: ${formData.phone}\nنوع الطلب: ${formData.type}\nالرسالة: ${formData.message}`
    );
    window.open(`https://wa.me/967777000888?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-surface-muted">
      <Container>
        <SectionHeading
          badge="تواصل معنا"
          title="نحن هنا للإجابة على جميع استفساراتكم"
          description="يسعد فريق خدمة العملاء والدعم الفني في يمن فيوتشر بالتواصل معكم وتقديم المساعدة على مدار الساعة."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Information & Channels Column */}
          <div className="lg:col-span-5 space-y-4 text-start">
            <h3 className="text-xl font-bold text-brand-navy mb-2">
              قنوات الاتصال المباشرة
            </h3>

            {contactChannels.map((channel, idx) => {
              const IconComp = channelIcons[channel.type] || Phone;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-border-subtle hover:border-brand-cyan/60 transition-colors flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-brand-cyan-tint border border-brand-cyan/30 text-brand-navy shrink-0">
                    <IconComp className="w-5 h-5 text-brand-navy" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-slate-500 block">
                      {channel.label}
                    </span>
                    <a
                      href={channel.href}
                      className="text-base font-bold text-brand-navy hover:text-brand-cyan transition-colors block"
                    >
                      {channel.value}
                    </a>
                    {channel.description && (
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {channel.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Working Hours Info Box */}
            <div className="p-5 rounded-2xl bg-brand-navy text-white border border-brand-navy-light flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-white/10 shrink-0">
                <Clock className="w-5 h-5 text-brand-cyan-light" />
              </div>
              <div className="space-y-1 text-xs text-slate-200">
                <h4 className="text-sm font-bold text-white">
                  ساعات العمل والدعم
                </h4>
                <p>خدمة العملاء الإلكترونية: متاح 24/7 طوال أيام الأسبوع</p>
                <p>مكاتب الإدارة الرئيسية: السبت - الخميس (8:00 ص - 9:00 م)</p>
              </div>
            </div>
          </div>

          {/* Contact & Merchant Request Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-border-subtle text-start">
              <h3 className="text-2xl font-bold text-brand-navy mb-2">
                أرسل استفسارك أو طلبك
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                سواء كنت فرداً أو صاحب متجر أو ترغب بالانضمام كوكيل، املأ النموذج وسيتواصل معك مستشارنا المالي فوراً.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-brand-cyan-tint border border-brand-cyan/30 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-navy">
                    تم استلام طلبك بنجاح!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    شكراً لتواصلك مع يمن فيوتشر. سيقوم فريق خدمة العملاء بمراجعة تفاصيل طلبك والاتصال بك في أقرب وقت.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <Button onClick={openWhatsAppDirect} variant="default" className="gap-2">
                      <MessageSquare className="w-4 h-4 text-brand-cyan-light" />
                      <span>متابعة الطلب عبر واتساب مباشرة</span>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ fullName: "", phone: "", type: "استفسار عام", message: "" });
                      }}
                    >
                      إرسال طلب آخر
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        الاسم الكامل <span className="text-red-500">*</span>
                      </label>
                      <Input
                        required
                        placeholder="أدخل اسمك الكريم"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        رقم الهاتف / الواتساب <span className="text-red-500">*</span>
                      </label>
                      <Input
                        required
                        type="tel"
                        dir="ltr"
                        className="text-start"
                        placeholder="770000000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      نوع الطلب
                    </label>
                    <select
                      className="flex h-11 w-full rounded-xl border border-border-subtle bg-white px-4 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:border-brand-cyan focus-visible:ring-2 focus-visible:ring-brand-cyan/20"
                      value={formData.type}
                      onChange={(e) =>
                        setFormData({ ...formData, type: e.target.value })
                      }
                    >
                      <option value="استفسار عام">استفسار عام عن الخدمات</option>
                      <option value="طلب ربط متجر / بوابة دفع">طلب ربط متجر / بوابة دفع إلكتروني</option>
                      <option value="طلب نقطة بيع POS">طلب جهاز نقطة بيع (POS) لمتجر</option>
                      <option value="طلب الانضمام كوكيل">طلب الانضمام كوكيل معتمد</option>
                      <option value="خدمة صرف رواتب للشركات">طلب خدمة صرف رواتب لمؤسسة</option>
                      <option value="دعم فني ومساعدة">دعم فني ومساعدة للمحفظة</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      تفاصيل الرسالة أو المتجر
                    </label>
                    <Textarea
                      placeholder="أخبرنا بتفاصيل استفسارك أو نشاطك التجاري والمدينة..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2 text-base font-bold rounded-xl mt-2"
                  >
                    <Send className="w-4 h-4 text-brand-cyan-light" />
                    <span>إرسال الطلب الآن</span>
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
