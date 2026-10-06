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
  Search,
  ChevronDown,
  ThumbsUp,
  ThumbsDown,
  HelpCircle,
  Headphones,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  LucideIcon,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  contactChannels,
  supportCategories,
  supportFaqs,
  type SupportCategory,
} from "@/data/contact";
import { cn } from "@/lib/utils";

const channelIcons: Record<string, LucideIcon> = {
  phone: Phone,
  whatsapp: MessageSquare,
  email: Mail,
  location: MapPin,
};

export function Contact() {
  // Search & Filter state for FAQs
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<SupportCategory["id"]>("all");
  const [expandedFaqId, setExpandedFaqId] = React.useState<string | null>("faq-1");
  const [feedbackGiven, setFeedbackGiven] = React.useState<Record<string, "yes" | "no">>({});

  // Support ticket form state
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

  // Filter FAQs based on query & category
  const filteredFaqs = React.useMemo(() => {
    return supportFaqs.filter((faq) => {
      const matchesCategory =
        selectedCategory === "all" || faq.category === selectedCategory;
      const cleanQuery = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !cleanQuery ||
        faq.question.toLowerCase().includes(cleanQuery) ||
        faq.answer.toLowerCase().includes(cleanQuery) ||
        (faq.badge && faq.badge.toLowerCase().includes(cleanQuery));
      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const handleToggleFaq = (id: string) => {
    setExpandedFaqId((prev) => (prev === id ? null : id));
  };

  const handleFeedback = (faqId: string, rating: "yes" | "no") => {
    setFeedbackGiven((prev) => ({ ...prev, [faqId]: rating }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.phone) return;

    // Generate random friendly ticket ID
    const generatedId = `YF-${Math.floor(10000 + Math.random() * 90000)}`;
    setTicketId(generatedId);
    setSubmitted(true);
  };

  const openWhatsAppDirect = () => {
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const text = encodeURIComponent(
      `مرحباً يمن فيوتشر،\nرقم التذكرة: #${ticketId || "طلب دعم"}\nالاسم: ${fullName}\nالهاتف: ${formData.phone}\nنوع الاستفسار: ${formData.type}\nالرسالة: ${formData.message}`
    );
    window.open(`https://wa.me/967777000888?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-surface-muted scroll-mt-20">
      <Container>
        {/* Support Section Heading */}
        <SectionHeading
          badge="مركز المساعدة والدعم الفني | 24/7"
          title="نحن هنا للإجابة على جميع استفساراتكم"
          description="تصفح الأسئلة الشائعة للوصول إلى إجابات سريعة، أو تواصل مباشرة مع فريق خدمة العملاء والدعم المالي على مدار الساعة."
        />

        {/* Live Search Bar for Knowledge Base */}
        <div className="mt-10 max-w-3xl mx-auto">
          <div className="relative flex items-center rounded-2xl bg-white border-2 border-border-subtle focus-within:border-brand-navy transition-all p-2">
            <div className="ps-3 pe-2 text-slate-400">
              <Search className="w-5 h-5 text-brand-navy" />
            </div>
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن سؤالك هنا (مثال: فتح حساب، التحويلات، سداد يمن موبايل، نقاط البيع...)"
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base h-11 bg-transparent px-2 text-slate-800 placeholder:text-slate-400"
            />
            {searchQuery ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSearchQuery("")}
                className="h-8 px-3 text-xs text-slate-500 hover:text-brand-navy rounded-lg"
              >
                مسح
              </Button>
            ) : (
              <span className="hidden sm:inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-lg bg-surface-muted text-slate-500 border border-border-subtle me-1">
                بحث فوري
              </span>
            )}
          </div>
          {searchQuery && (
            <p className="text-xs text-slate-500 mt-2 text-start px-2">
              نتائج البحث عن &quot;{searchQuery}&quot;: وجدنا {filteredFaqs.length} إجابة
            </p>
          )}
        </div>

        {/* Categories / Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {supportCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 border",
                  isActive
                    ? "bg-brand-navy text-white border-brand-navy"
                    : "bg-white text-slate-600 border-border-subtle hover:border-brand-cyan/60 hover:text-brand-navy"
                )}
              >
                <span>{cat.label}</span>
                <span
                  className={cn(
                    "px-1.5 py-0.5 rounded-full text-[10px] font-bold",
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-brand-cyan-tint text-brand-navy"
                  )}
                >
                  {cat.id === "all" ? supportFaqs.length : cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* FAQs Accordion List */}
        <div className="mt-10 max-w-4xl mx-auto space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isExpanded = expandedFaqId === faq.id;
              const feedback = feedbackGiven[faq.id];

              return (
                <div
                  key={faq.id}
                  className={cn(
                    "rounded-2xl transition-all duration-200 border bg-white overflow-hidden",
                    isExpanded
                      ? "border-brand-navy bg-white"
                      : "border-border-subtle hover:border-brand-cyan/50"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => handleToggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-start flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors border",
                          isExpanded
                            ? "bg-brand-navy text-white border-brand-navy"
                            : "bg-brand-cyan-tint text-brand-navy border-brand-cyan/30"
                        )}
                      >
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          {faq.badge && (
                            <Badge
                              variant="secondary"
                              className="text-[10px] px-2 py-0.5 font-bold bg-brand-cyan-tint text-brand-navy border border-brand-cyan/30"
                            >
                              {faq.badge}
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-brand-navy leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={cn(
                        "w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center shrink-0 transition-transform duration-200 text-slate-500",
                        isExpanded ? "rotate-180 bg-brand-navy text-white border-brand-navy" : "bg-surface-muted"
                      )}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Expanded FAQ Answer & Micro-Feedback */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-100 bg-surface-muted/40">
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed ps-12">
                        {faq.answer}
                      </p>

                      {/* Helpful Feedback Widget */}
                      <div className="mt-4 pt-4 border-t border-slate-200/80 ps-12 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                        <span>هل كانت هذه الإجابة مفيدة لك؟</span>
                        {feedback ? (
                          <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            شكراً لتقييمك ومساعدتنا في تحسين خدماتنا!
                          </span>
                        ) : (
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => handleFeedback(faq.id, "yes")}
                              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border-subtle bg-white hover:border-emerald-500 hover:text-emerald-600 transition-colors cursor-pointer"
                            >
                              <ThumbsUp className="w-3.5 h-3.5" />
                              <span>نعم، مفيدة</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => handleFeedback(faq.id, "no")}
                              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border-subtle bg-white hover:border-rose-400 hover:text-rose-600 transition-colors cursor-pointer"
                            >
                              <ThumbsDown className="w-3.5 h-3.5" />
                              <span>غير كافية</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            /* Search Not Found State */
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-border-subtle text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-cyan-tint border border-brand-cyan/30 text-brand-navy flex items-center justify-center">
                <Search className="w-6 h-6 text-brand-navy" />
              </div>
              <h4 className="text-lg font-bold text-brand-navy">
                لم نجد إجابة مطابقة لبحثك: &quot;{searchQuery}&quot;
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                لا تقلق! يمكنك إعادة ضبط البحث أو كتابة استفسارك مباشرة في نموذج الدعم أدناه وسيتواصل معك خبراؤنا فوراً.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>إعادة ضبط البحث</span>
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => {
                    const formElement = document.getElementById("support-form");
                    formElement?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="gap-2"
                >
                  <Headphones className="w-3.5 h-3.5 text-brand-cyan-light" />
                  <span>التحدث مع الدعم الفني</span>
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Separator / Callout Inspired by e-jaib: "ما لقيت أجوبة وحلول؟ تواصل معنا وخلينا نساعدك!" */}
        <div className="mt-20 pt-10 border-t border-border-subtle">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan-tint border border-brand-cyan/40 text-xs font-bold text-brand-navy mb-3">
              <Sparkles className="w-3.5 h-3.5 text-brand-navy" />
              <span>فريق الدعم دائماً في خدمتك</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
              لم تجد الإجابة التي تبحث عنها؟ تواصل معنا ودعنا نساعدك!
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              اختر القناة الأنسب لك، سواء عبر الاتصال المباشر، أو محادثة واتساب الفورية، أو إرسال استفسارك عبر النموذج.
            </p>
          </div>

          <div
            id="support-form"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Direct Channels Column */}
            <div className="lg:col-span-5 space-y-4 text-start">
              <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
                <h4 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                  <Headphones className="w-5 h-5 text-brand-navy" />
                  <span>قنوات التواصل المباشر</span>
                </h4>
                <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  متاح الآن 24/7
                </span>
              </div>

              {contactChannels.map((channel, idx) => {
                const IconComp = channelIcons[channel.type] || Phone;
                return (
                  <div
                    key={idx}
                    className="group p-5 rounded-2xl bg-white border border-border-subtle hover:border-brand-navy transition-colors flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-brand-cyan-tint border border-brand-cyan/30 text-brand-navy shrink-0 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="space-y-1 flex-1">
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

              {/* Working Hours & Security Assurance Box */}
              <div className="p-5 rounded-2xl bg-brand-navy text-white border border-brand-navy-light space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 shrink-0">
                    <Clock className="w-5 h-5 text-brand-cyan-light" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">
                      أوقات العمل والدعم الفني
                    </h5>
                    <p className="text-xs text-slate-300">
                      خدمة العملاء الإلكترونية: متاح 24/7 دون انقطاع
                    </p>
                  </div>
                </div>
                <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs text-brand-cyan-light">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>معاملاتكم واستفساراتكم تحظى بأعلى معايير السرية والأمان.</span>
                </div>
              </div>
            </div>

            {/* Support Ticket & Inquiries Form Column */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-9 rounded-3xl bg-white border border-border-subtle text-start">
                <div className="mb-6">
                  <h4 className="text-2xl font-bold text-brand-navy">
                    أرسل استفسارك أو مشكلتك
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    املأ البيانات التالية وسيقوم أحد ممثلي الدعم الفني بمتابعة طلبك والرد عليك بأسرع وقت.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-brand-cyan-tint border border-brand-cyan/30 text-center space-y-5">
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-white text-brand-navy text-xs font-bold border border-brand-cyan/40">
                        رقم التذكرة: {ticketId}
                      </span>
                      <h5 className="text-2xl font-bold text-brand-navy">
                        تم استلام طلبك بنجاح!
                      </h5>
                      <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                        شكراً لتواصلك مع يمن فيوتشر. تم فتح تذكرة دعم برقم{" "}
                        <strong className="text-brand-navy">{ticketId}</strong>. سيتواصل معك فريق خدمة العملاء في غضون دقائق.
                      </p>
                    </div>

                    <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
                      <Button
                        onClick={openWhatsAppDirect}
                        variant="default"
                        className="gap-2 bg-emerald-700 hover:bg-emerald-800 text-white"
                      >
                        <MessageSquare className="w-4 h-4 text-emerald-200" />
                        <span>متابعة التذكرة عبر واتساب مباشرة</span>
                      </Button>
                      <Button
                        variant="outline"
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

                    {/* Topic / Service Type */}
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
                        <option value="مساعدة في التحويل أو السحب والإيداع">مساعدة في عملية تحويل أو سحب/إيداع نقدي</option>
                        <option value="مشكلة في سداد الفواتير أو الاتصالات">مشكلة في سداد فاتورة أو شحن رصيد باقات</option>
                        <option value="طلب ربط متجر / بوابة دفع إلكتروني">طلب ربط متجر إلكتروني / بوابة دفع (API)</option>
                        <option value="طلب جهاز نقطة بيع POS لمتجر">طلب جهاز نقطة بيع ذكي (POS) لمتجر</option>
                        <option value="طلب الانضمام كوكيل معتمد">طلب الانضمام كوكيل أو نقطة خدمة معتمدة</option>
                        <option value="صرف رواتب الشركات والمؤسسات">حلول صرف رواتب موظفي الشركات</option>
                        <option value="بلاغ أمني أو اشتباه احتيال">بلاغ أمني أو شكوى طارئة</option>
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
                        placeholder="يرجى كتابة تفاصيل استفسارك أو رقم العملية أو بيانات نشاطك التجاري والمدينة..."
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
                      <span>إرسال طلب الدعم الآن</span>
                    </Button>

                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-navy" />
                      <span>بياناتك الشخصية محمية ولا تتم مشاركتها مع أي طرف ثالث.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
