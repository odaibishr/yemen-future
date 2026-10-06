"use client";

import * as React from "react";
import Image from "next/image";
import { CheckCircle2, MessageSquare, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [ticketId, setTicketId] = React.useState("");
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.firstName.trim()) {
      errs.firstName = "يرجى إدخال الاسم الأول";
    }
    if (!formData.email.trim()) {
      errs.email = "يرجى إدخال البريد الإلكتروني";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "يرجى إدخال بريد إلكتروني صالح";
    }
    if (!formData.message.trim()) {
      errs.message = "يرجى كتابة تفاصيل مشكلتك أو اقتراحك";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      const generatedId = `YF-${Math.floor(10000 + Math.random() * 90000)}`;
      setTicketId(generatedId);
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const openWhatsAppDirect = () => {
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const text = encodeURIComponent(
      `مرحباً يمن فيوتشر،\nرقم التذكرة: #${ticketId || "طلب دعم"}\nالاسم: ${fullName}\nالبريد: ${formData.email}\nالرسالة: ${formData.message}`
    );
    window.open(`https://wa.me/967777000888?text=${text}`, "_blank");
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
    setErrors({});
  };

  if (submitted) {
    return (
      <div className="flex h-full min-h-[480px] w-full flex-col justify-center rounded-3xl border border-brand-cyan/20 bg-brand-cyan-tint/40 p-8 sm:p-12 text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <div className="space-y-3">
          <span className="inline-block rounded-full border border-brand-cyan/40 bg-white px-4 py-1.5 text-xs font-bold text-brand-navy">
            رقم التذكرة: {ticketId}
          </span>
          <h4 className="text-2xl sm:text-3xl font-extrabold text-[#18181A]">
            تم استلام رسالتك بنجاح!
          </h4>
          <p className="mx-auto max-w-md text-sm sm:text-base leading-relaxed text-slate-600">
            شكراً لتواصلك مع يمن فيوتشر. تم إرسال تذكرتك مباشرة إلى قائد الفريق، وسيقوم فريقنا بمتابعة استفسارك والتواصل معك بأقرب وقت ممكن.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Button
            type="button"
            onClick={openWhatsAppDirect}
            className="w-full sm:w-auto h-12 gap-2 rounded-2xl bg-emerald-700 px-6 font-bold text-white hover:bg-emerald-800 cursor-pointer"
          >
            <MessageSquare className="h-4 w-4" />
            <span>متابعة الطلب عبر واتساب فوراً</span>
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={handleReset}
            className="w-full sm:w-auto h-12 rounded-2xl border-slate-300 bg-white px-6 font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            إرسال استفسار آخر
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-4 sm:gap-5"
      dir="rtl"
      noValidate
    >
      {/* Row 1: First Name & Last Name */}
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
        {/* First Name */}
        <div className="flex flex-1 flex-col">
          <label className="mb-1 text-start text-lg sm:text-xl font-bold text-[#18181A]">
            الاسم الأول
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => {
              setFormData({ ...formData, firstName: e.target.value });
              if (errors.firstName) setErrors({ ...errors, firstName: "" });
            }}
            placeholder="الاسم"
            disabled={loading}
            className={`h-[58px] sm:h-[62px] w-full rounded-2xl bg-[#ECF0F3] px-5 text-start font-medium text-slate-900 placeholder-[#6B7280] outline-none text-base sm:text-lg transition-all focus:border-brand-navy/30 focus:bg-white ${errors.firstName ? "border-2 border-red-500 bg-red-50/30" : "border border-transparent"
              }`}
          />
          {errors.firstName && (
            <span className="mt-1 text-xs sm:text-sm font-medium text-red-500 text-start">
              {errors.firstName}
            </span>
          )}
        </div>

        {/* Last Name */}
        <div className="flex flex-1 flex-col">
          <label className="mb-1 text-start text-lg sm:text-xl font-bold text-[#18181A]">
            الاسم الآخير
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            placeholder="اللقب"
            disabled={loading}
            className="h-[58px] sm:h-[62px] w-full rounded-2xl border border-transparent bg-[#ECF0F3] px-5 text-start font-medium text-slate-900 placeholder-[#6B7280] outline-none text-base sm:text-lg transition-all focus:border-brand-navy/30 focus:bg-white"
          />
        </div>
      </div>

      {/* Row 2: Email */}
      <div className="flex flex-col">
        <label className="mb-1 text-start text-lg sm:text-xl font-bold text-[#18181A]">
          البريد الإلكتروني
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (errors.email) setErrors({ ...errors, email: "" });
          }}
          placeholder="البريد الإلكتروني"
          disabled={loading}
          dir="ltr"
          className={`h-[58px] sm:h-[62px] w-full rounded-2xl bg-[#ECF0F3] px-5 text-start font-medium text-slate-900 placeholder-[#6B7280] outline-none text-base sm:text-lg transition-all focus:border-brand-navy/30 focus:bg-white ${errors.email ? "border-2 border-red-500 bg-red-50/30" : "border border-transparent"
            }`}
        />
        {errors.email && (
          <span className="mt-1 text-xs sm:text-sm font-medium text-red-500 text-start">
            {errors.email}
          </span>
        )}
      </div>

      {/* Row 3: Problem Description / Suggestion */}
      <div className="flex flex-col">
        <label className="mb-1 text-start text-lg sm:text-xl font-bold text-[#18181A]">
          صف مشكلتك أو اكتب اقتراحك
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => {
            if (e.target.value.length <= 200) {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: "" });
            }
          }}
          placeholder="قائد فريقنا يتلقى جميع الرسائل، فريقنا يتابعك بأقرب وقت."
          maxLength={200}
          disabled={loading}
          rows={4}
          className={`min-h-[160px] sm:min-h-[177px] w-full rounded-2xl bg-[#ECF0F3] px-5 py-4 text-start font-medium text-slate-900 placeholder-[#6B7280] outline-none text-base sm:text-lg resize-none transition-all focus:border-brand-navy/30 focus:bg-white ${errors.message ? "border-2 border-red-500 bg-red-50/30" : "border border-transparent"
            }`}
        />
        <div className="mt-1.5 flex items-center justify-between text-xs sm:text-sm text-[#4F5258]">
          <span className="select-none text-start">
            {formData.message.length === 0
              ? "الحد الأقصى 200 حرف"
              : `متبقي ${200 - formData.message.length} حرف`}
          </span>
          {errors.message && (
            <span className="font-medium text-red-500">{errors.message}</span>
          )}
        </div>
      </div>

      {/* Row 4: Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="group mt-2 flex h-[58px] sm:h-[62px] w-full items-center justify-center rounded-2xl bg-brand-navy hover:bg-brand-navy-light text-2xl sm:text-3xl font-medium text-white transition-all duration-300 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
            <span className="text-lg font-medium">جاري الإرسال...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-3 transition-all duration-300 group-hover:gap-6">
            <span>إرسال</span>
          </div>
        )}
      </button>

      {/* Privacy & Security Note */}
      <div className="flex items-center justify-center gap-2 pt-1 text-xs text-slate-500">
        <ShieldCheck className="h-4 w-4 text-brand-navy" />
        <span>بياناتكم تحظى بأعلى معايير السرية والأمان المصرفي.</span>
      </div>
    </form>
  );
}
