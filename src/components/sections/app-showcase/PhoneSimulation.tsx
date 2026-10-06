"use client";

import Image from "next/image";
import {
  Smartphone,
  Receipt,
  ArrowLeftRight,
  QrCode,
  Bell,
  Send,
  PlusCircle,
  Home,
  Clock,
  User,
  CheckCircle2,
} from "lucide-react";
import { dafaaData } from "@/data/dafaa-app";

export function PhoneSimulation() {
  const { phoneMockup } = dafaaData;

  return (
    <div className="relative flex justify-center items-center w-full max-w-[270px] sm:max-w-[290px] mx-auto">
      {/* Physical Phone Device Container (Flat border, Zero shadows, compact height) */}
      <div className="w-full bg-slate-950 rounded-[38px] p-2.5 sm:p-3 border-[3px] border-slate-700 relative z-10">
        {/* Phone Screen Glass */}
        <div className="bg-slate-50 rounded-[30px] overflow-hidden text-slate-900 border border-slate-200">
          {/* Status Bar */}
          <div className="bg-brand-navy text-white px-4 pt-2.5 pb-2 flex justify-between items-center text-[10px] border-b border-brand-navy-light/40">
            <span className="font-bold tracking-tight">09:41</span>
            {/* Speaker & Sensor Notch */}
            <div className="w-16 h-3.5 bg-slate-950 rounded-full flex items-center justify-center gap-1 px-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
              <div className="w-5 h-1 bg-slate-800 rounded-full" />
            </div>
            <div className="flex items-center gap-1 text-[9px] font-medium text-brand-cyan-light">
              <span>4G LTE</span>
            </div>
          </div>

          {/* App Header Inside Phone: Dafaa Logo & User Bar */}
          <div className="bg-brand-navy text-white px-4 pt-2.5 pb-3 space-y-2.5">
            {/* Top Bar with Dafaa Logo & Notification */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-lg p-1 border border-brand-cyan/30 flex items-center justify-center shrink-0">
                  <Image
                    src="/images/dafaa-logo-official.png"
                    alt="تطبيق دَفْع"
                    width={26}
                    height={26}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col text-start">
                  <span className="text-[11px] font-black text-white leading-tight">
                    محفظة دَفْع
                  </span>
                  <span className="text-[9px] font-bold text-brand-cyan-light leading-none">
                    Dafaa e-Wallet
                  </span>
                </div>
              </div>

              <div className="w-6 h-6 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-brand-cyan-light">
                <Bell className="w-3 h-3" />
              </div>
            </div>

            {/* User Greeting */}
            <div className="flex items-center justify-between pt-0.5">
              <div className="flex items-center gap-1.5 text-start">
                <p className="text-[10px] text-slate-300 font-medium">مرحباً،</p>
                <p className="text-[11px] font-bold text-white">{phoneMockup.userName}</p>
                <CheckCircle2 className="w-3 h-3 text-brand-cyan shrink-0" />
              </div>
              <span className="text-[8px] font-semibold bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded-full border border-emerald-500/30">
                موثق
              </span>
            </div>

            {/* Dafaa Digital Card (Compact, zero shadows) */}
            <div className="bg-linear-to-r from-brand-navy-dark to-[#16234b] rounded-xl p-3 border border-brand-cyan/30 text-start space-y-2">
              <div className="flex items-center justify-between text-[9px]">
                <span className="text-brand-cyan-light font-medium">
                  الرصيد المتاح
                </span>
                <span className="font-mono text-slate-400">
                  DAFAA • 9821
                </span>
              </div>

              <div className="flex items-baseline justify-between">
                <p className="text-lg font-black text-white tracking-tight" dir="ltr">
                  {phoneMockup.walletBalance}{" "}
                  <span className="text-[10px] font-bold text-brand-cyan">
                    {phoneMockup.currency}
                  </span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-1.5 border-t border-white/10 grid grid-cols-2 gap-1.5">
                <div className="bg-white/10 border border-white/10 rounded-lg py-1 px-1.5 flex items-center justify-center gap-1 text-[9px] font-bold text-white">
                  <Send className="w-2.5 h-2.5 text-brand-cyan" />
                  <span>تحويل</span>
                </div>
                <div className="bg-white/10 border border-white/10 rounded-lg py-1 px-1.5 flex items-center justify-center gap-1 text-[9px] font-bold text-white">
                  <PlusCircle className="w-2.5 h-2.5 text-emerald-400" />
                  <span>إيداع</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Services Section (Compact) */}
          <div className="p-3 bg-slate-50 text-start space-y-2.5">
            <div className="flex items-center justify-between">
              <h4 className="text-[10px] font-bold text-slate-800">
                الخدمات السريعة
              </h4>
              <span className="text-[9px] font-bold text-brand-navy">
                الكل
              </span>
            </div>

            <div className="grid grid-cols-4 gap-1.5">
              <div className="p-1.5 rounded-lg bg-white border border-border-subtle flex flex-col items-center gap-0.5 text-center">
                <div className="w-6 h-6 rounded-md bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                  <Smartphone className="w-3 h-3" />
                </div>
                <span className="text-[8px] font-bold text-slate-800 leading-tight">
                  باقات
                </span>
              </div>

              <div className="p-1.5 rounded-lg bg-white border border-border-subtle flex flex-col items-center gap-0.5 text-center">
                <div className="w-6 h-6 rounded-md bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                  <Receipt className="w-3 h-3" />
                </div>
                <span className="text-[8px] font-bold text-slate-800 leading-tight">
                  فواتير
                </span>
              </div>

              <div className="p-1.5 rounded-lg bg-white border border-border-subtle flex flex-col items-center gap-0.5 text-center">
                <div className="w-6 h-6 rounded-md bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700">
                  <ArrowLeftRight className="w-3 h-3" />
                </div>
                <span className="text-[8px] font-bold text-slate-800 leading-tight">
                  تحويل
                </span>
              </div>

              <div className="p-1.5 rounded-lg bg-white border border-border-subtle flex flex-col items-center gap-0.5 text-center">
                <div className="w-6 h-6 rounded-md bg-brand-cyan-tint border border-brand-cyan/40 flex items-center justify-center text-brand-navy">
                  <QrCode className="w-3 h-3" />
                </div>
                <span className="text-[8px] font-bold text-slate-800 leading-tight">
                  دفع QR
                </span>
              </div>
            </div>

            {/* 1 Transaction Highlight */}
            <div className="p-2 rounded-lg bg-white border border-border-subtle flex items-center justify-between text-[10px]">
              <div className="text-start space-y-0.5">
                <p className="font-bold text-slate-800 text-[9px] leading-tight">
                  سداد باقة فورجي - يمن موبايل
                </p>
                <p className="text-[8px] text-slate-400">اليوم - 11:24 ص</p>
              </div>
              <span className="font-bold text-[9px] text-red-600" dir="ltr">
                - 4,800 YER
              </span>
            </div>
          </div>

          {/* Bottom Compact App Bar */}
          <div className="bg-white border-t border-border-subtle px-3 py-1.5 flex items-center justify-around text-slate-400">
            <div className="flex flex-col items-center gap-0.5 text-brand-navy">
              <Home className="w-3.5 h-3.5" />
              <span className="text-[8px] font-bold">الرئيسية</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-[8px]">العمليات</span>
            </div>
            <div className="-mt-3 w-7 h-7 rounded-full bg-brand-navy text-white border border-white flex items-center justify-center">
              <QrCode className="w-3.5 h-3.5 text-brand-cyan" />
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <User className="w-3.5 h-3.5" />
              <span className="text-[8px]">حسابي</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
