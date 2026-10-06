"use client";

import {
  Smartphone,
  Download,
  QrCode,
  CheckCircle2,
  Apple,
  Play,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AppShowcase() {
  return (
    <section id="app" className="py-20 bg-surface-muted border-b border-border-subtle">
      <Container>
        <div className="bg-brand-navy rounded-3xl border border-brand-navy-light text-white p-8 sm:p-12 lg:p-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Right Column: Copy & Download CTAs */}
            <div className="lg:col-span-7 space-y-6 text-start">
              <Badge
                variant="secondary"
                className="bg-white/10 text-brand-cyan-light border border-white/15 px-3.5 py-1 text-xs"
              >
                <Smartphone className="w-3.5 h-3.5 me-1.5 text-brand-cyan-light" />
                تطبيق يمن فيوتشر للهواتف الذكية
              </Badge>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                محفظتك المالية الذكية <br />
                <span className="text-brand-cyan">معك أينما كنت</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                حمّل تطبيق يمن فيوتشر الآن وتحكم في كافة مدفوعاتك المالية: سدد الفواتير، أرسل الحوالات، وادفع مشترياتك في ثوانٍ بأمان وسهولة لا مثيل لها.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0" />
                  <span>تسجيل سريع برقم هاتفك وبطاقة الهوية خلال دقائق</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0" />
                  <span>دعم كامل لكافة شبكات الاتصالات اليمنية وخدمات الإنترنت</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0" />
                  <span>حماية متطورة بنظام البصمة وتشفير مصرفي معتمد</span>
                </div>
              </div>

              {/* Download Buttons and QR Dialog */}
              <div className="pt-6 flex flex-wrap items-center gap-4">
                {/* Google Play Button */}
                <a
                  href="#download"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white text-brand-navy hover:bg-slate-100 transition-colors border border-white"
                >
                  <Play className="w-6 h-6 fill-current text-brand-navy" />
                  <div className="flex flex-col text-start">
                    <span className="text-[10px] text-slate-500 font-medium leading-none">
                      احصل عليه من
                    </span>
                    <span className="text-sm font-bold leading-tight">
                      Google Play
                    </span>
                  </div>
                </a>

                {/* App Store Button */}
                <a
                  href="#download"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/15 text-white transition-colors border border-white/20"
                >
                  <Apple className="w-6 h-6 fill-current text-white" />
                  <div className="flex flex-col text-start">
                    <span className="text-[10px] text-slate-300 font-medium leading-none">
                      حمّله من
                    </span>
                    <span className="text-sm font-bold leading-tight">
                      App Store
                    </span>
                  </div>
                </a>

                {/* Direct APK / QR Code Modal */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="cyan"
                      className="gap-2 px-5 py-3 h-auto rounded-2xl font-bold text-sm"
                    >
                      <QrCode className="w-5 h-5" />
                      <span>مسح رمز QR أو تحميل APK</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-sm text-center">
                    <DialogHeader>
                      <DialogTitle className="text-center text-brand-navy">
                        تحميل تطبيق يمن فيوتشر
                      </DialogTitle>
                      <DialogDescription className="text-center">
                        امسح الرمز بكاميرا هاتفك للتحميل المباشر
                      </DialogDescription>
                    </DialogHeader>

                    {/* QR Code graphic container (zero shadows) */}
                    <div className="my-4 p-6 bg-surface-muted rounded-2xl border-2 border-dashed border-brand-cyan/40 inline-flex flex-col items-center justify-center">
                      <div className="w-48 h-48 bg-white p-4 rounded-xl border border-border-subtle flex flex-col items-center justify-center space-y-2">
                        <QrCode className="w-32 h-32 text-brand-navy stroke-[1.5]" />
                        <span className="text-[11px] font-bold text-brand-cyan">
                          yemenfuture.ye/app
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-3 font-medium">
                        متوافق مع أجهزة Android و iOS
                      </p>
                    </div>

                    <Button asChild variant="default" className="w-full gap-2">
                      <a href="#download">
                        <Download className="w-4 h-4 text-brand-cyan-light" />
                        <span>تحميل ملف APK المباشر</span>
                      </a>
                    </Button>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Left Column: Phone UI Simulation (Flat border, zero shadows) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-xs bg-slate-950 rounded-[44px] p-3 border-4 border-slate-700">
                {/* Phone Inner Screen */}
                <div className="bg-white rounded-[36px] overflow-hidden text-slate-900 border border-slate-200">
                  {/* Status Bar */}
                  <div className="bg-brand-navy text-white px-6 pt-3 pb-4 flex justify-between items-center text-xs">
                    <span className="font-bold">09:41</span>
                    <div className="w-16 h-3.5 bg-black/40 rounded-full" />
                    <span className="text-[10px] text-brand-cyan-light">4G LTE</span>
                  </div>

                  {/* App Screen Header */}
                  <div className="bg-brand-navy text-white px-6 pb-6 pt-1 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-brand-cyan text-brand-navy font-bold flex items-center justify-center text-xs">
                          ي.ف
                        </div>
                        <div>
                          <p className="text-[10px] text-brand-cyan-light">مرحباً بك</p>
                          <p className="text-xs font-bold">محمد اليماني</p>
                        </div>
                      </div>
                      <ShieldCheck className="w-5 h-5 text-brand-cyan" />
                    </div>

                    {/* Balance Pill */}
                    <div className="bg-white/10 rounded-2xl p-4 border border-white/10 text-start space-y-1">
                      <p className="text-[11px] text-slate-300">الرصيد المتاح</p>
                      <p className="text-xl font-black text-white" dir="ltr">
                        450,000 <span className="text-xs font-normal text-brand-cyan-light">YER</span>
                      </p>
                    </div>
                  </div>

                  {/* App Screen Services Grid */}
                  <div className="p-4 space-y-4 text-start">
                    <p className="text-xs font-bold text-slate-700">الخدمات السريعة</p>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2.5 rounded-xl bg-surface-muted border border-border-subtle flex flex-col items-center gap-1">
                        <Smartphone className="w-4 h-4 text-brand-cyan" />
                        <span className="text-[10px] font-bold text-slate-800">شحن باقات</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-surface-muted border border-border-subtle flex flex-col items-center gap-1">
                        <QrCode className="w-4 h-4 text-brand-cyan" />
                        <span className="text-[10px] font-bold text-slate-800">دفع QR</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-surface-muted border border-border-subtle flex flex-col items-center gap-1">
                        <Download className="w-4 h-4 text-brand-cyan" />
                        <span className="text-[10px] font-bold text-slate-800">تحويل</span>
                      </div>
                    </div>

                    {/* Recent Transactions List */}
                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-bold text-slate-700">آخر العمليات</p>
                      <div className="p-2.5 rounded-xl bg-surface-muted border border-border-subtle flex items-center justify-between text-xs">
                        <div>
                          <p className="font-bold text-slate-800">سداد باقة يمن موبايل</p>
                          <p className="text-[10px] text-slate-500">اليوم - 10:20 ص</p>
                        </div>
                        <span className="font-bold text-red-600" dir="ltr">- 5,000 YER</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-surface-muted border border-border-subtle flex items-center justify-between text-xs">
                        <div>
                          <p className="font-bold text-slate-800">حوالة واردة من صنعاء</p>
                          <p className="text-[10px] text-slate-500">أمس - 04:15 م</p>
                        </div>
                        <span className="font-bold text-emerald-600" dir="ltr">+ 80,000 YER</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
