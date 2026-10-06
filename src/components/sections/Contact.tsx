"use client";

import * as React from "react";
import Image from "next/image";
import {
  Send,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [submitted, setSubmitted] = React.useState(false);
  const [ticketId, setTicketId] = React.useState("");
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    type: "استفسار عام عن الخدمات",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.phone) return;

    // Generate friendly ticket ID
    const generatedId = `YF-${Math.floor(10000 + Math.random() * 90000)}`;
    setTicketId(generatedId);
    setSubmitted(true);
  };

  const openWhatsAppDirect = () => {
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const text = encodeURIComponent(
      `مرحباً يمن فيوتشر،\nرقم الطلب: #${ticketId || "طلب دعم"}\nالاسم: ${fullName}\nالهاتف: ${formData.phone}\nنوع الاستفسار: ${formData.type}\nالرسالة: ${formData.message}`
    );
    window.open(`https://wa.me/967777000888?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-surface-muted scroll-mt-20">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          badge="تواصل معنا"
          title="تواصل مع فريق يمن فيوتشر"
          description="يسعد فريق خدمة العملاء والدعم الفني في يمن فيوتشر بالإجابة على استفساراتكم ومتابعة طلباتكم على مدار الساعة."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Right Column (In RTL): Inquiries / Complaint & Support Form */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="p-6 sm:p-9 rounded-3xl bg-white border border-border-subtle text-start h-full flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan-tint border border-brand-cyan/30 text-xs font-bold text-brand-navy mb-3">
                    <Zap className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>خدمة سريعة ومباشرة</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                    أرسل استفسارك أو مشكلتك
                  </h3>
                  <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    سواء كنت فرداً أو صاحب متجر أو ترغب بالانضمام كوكيل، املأ البيانات التالية وسيتواصل معك مستشارنا المالي فوراً.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-brand-cyan-tint border border-brand-cyan/30 text-center space-y-5 my-auto">
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-white text-brand-navy text-xs font-bold border border-brand-cyan/40">
                        رقم التذكرة: {ticketId}
                      </span>
                      <h4 className="text-2xl font-bold text-brand-navy">
                        تم استلام طلبك بنجاح!
                      </h4>
                      <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                        شكراً لتواصلك مع يمن فيوتشر. تم تسجيل طلبك برقم{" "}
                        <strong className="text-brand-navy">{ticketId}</strong>. سيتواصل معك أحد ممثلي الدعم الفني في غضون دقائق.
                      </p>
                    </div>

                    <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
                      <Button
                        onClick={openWhatsAppDirect}
                        variant="default"
                        className="gap-2 bg-emerald-700 hover:bg-emerald-800 text-white cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4 text-emerald-200" />
                        <span>متابعة الطلب عبر واتساب مباشرة</span>
                      </Button>
                      <Button
                        variant="outline"
                        className="cursor-pointer"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            firstName: "",
                            lastName: "",
                            phone: "",
                            email: "",
                            type: "استفسار عام عن الخدمات",
                            message: "",
                          });
                        }}
                      >
                        إرسال استفسار جديد
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* First & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">
                          الاسم الأول <span className="text-red-500">*</span>
                        </label>
                        <Input
                          required
                          placeholder="مثال: محمد"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({ ...formData, firstName: e.target.value })
                          }
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">
                          الاسم الأخير / العائلة
                        </label>
                        <Input
                          placeholder="مثال: الريمي"
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({ ...formData, lastName: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    {/* Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">
                          رقم الهاتف / الواتساب <span className="text-red-500">*</span>
                        </label>
                        <div className="relative flex items-center">
                          <Input
                            required
                            type="tel"
                            dir="ltr"
                            className="text-start pe-16"
                            placeholder="770000000"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                          />
                          <span className="absolute end-3 text-xs font-semibold text-slate-400 select-none">
                            967+ 🇾🇪
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">
                          البريد الإلكتروني (اختياري)
                        </label>
                        <Input
                          type="email"
                          dir="ltr"
                          className="text-start"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    {/* Topic / Problem Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        نوع الاستفسار أو المشكلة
                      </label>
                      <select
                        className="flex h-11 w-full rounded-xl border border-border-subtle bg-white px-4 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:border-brand-navy focus-visible:ring-2 focus-visible:ring-brand-cyan/20 cursor-pointer"
                        value={formData.type}
                        onChange={(e) =>
                          setFormData({ ...formData, type: e.target.value })
                        }
                      >
                        <option value="استفسار عام عن الخدمات">استفسار عام عن خدمات المحفظة</option>
                        <option value="مشكلة في سداد الفواتير أو الاتصالات">مشكلة في سداد فاتورة أو شحن باقات</option>
                        <option value="مساعدة في التحويل المالي أو السحب">مساعدة في عملية تحويل أو سحب/إيداع</option>
                        <option value="طلب ربط متجر / بوابة دفع إلكتروني">طلب ربط متجر إلكتروني / بوابة دفع (API)</option>
                        <option value="طلب جهاز نقطة بيع POS لمتجر">طلب جهاز نقطة بيع ذكي (POS) لمتجر</option>
                        <option value="طلب الانضمام كوكيل معتمد">طلب الانضمام كوكيل أو نقطة خدمة معتمدة</option>
                        <option value="صرف رواتب الشركات والمؤسسات">حلول صرف رواتب موظفي الشركات</option>
                        <option value="بلاغ أمني أو شكوى طارئة">بلاغ أمني أو شكوى طارئة</option>
                      </select>
                    </div>

                    {/* Message Area */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold text-slate-700">
                          تفاصيل الاستفسار أو المشكلة <span className="text-red-500">*</span>
                        </label>
                        <span className="text-[10px] text-slate-400">
                          {formData.message.length} حرف
                        </span>
                      </div>
                      <Textarea
                        required
                        placeholder="أخبرنا بتفاصيل استفسارك أو رقم العملية أو بيانات نشاطك التجاري والمدينة..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gap-2 text-base font-bold rounded-xl mt-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-brand-cyan-light" />
                      <span>إرسال الاستفسار الآن</span>
                    </Button>

                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-navy" />
                      <span>بياناتكم تحظى بأعلى معايير السرية والأمان المصرفي.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Left Column (In RTL): Pure Logo Showcase (No text, pure brand presence) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-border-subtle h-full flex items-center justify-center relative overflow-hidden group">
              {/* Subtle Decorative Geometry Watermark */}
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1a2754_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
              <div className="absolute -top-24 -start-24 w-64 h-64 rounded-full bg-brand-cyan-tint/60 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -end-24 w-64 h-64 rounded-full bg-brand-cyan-tint/60 blur-3xl pointer-events-none" />

              {/* Pure Official Brand Logo (Large, Centered, Clean) */}
              <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/svgs/logo.svg"
                  alt="شعار يمن فيوتشر للخدمات المالية والمدفوعات الإلكترونية"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
