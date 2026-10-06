"use client";

import { AppleIcon, GooglePlayIcon } from "@/components/icons/StoreIcons";
import { dafaaData } from "@/data/dafaa-app";

export function DownloadButtons() {
  const { app } = dafaaData;

  return (
    <div className="flex flex-wrap items-center gap-3 pt-1">
      {/* Google Play Button */}
      <a
        href={app.googlePlayUrl}
        className="group inline-flex items-center gap-2.5 px-4 py-2.5 sm:px-4.5 sm:py-2.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 transition-colors border border-white hover:border-brand-cyan"
        aria-label="احصل على تطبيق دَفْع من Google Play"
      >
        <div className="w-5 h-5 shrink-0 flex items-center justify-center transition-transform group-hover:scale-105">
          <GooglePlayIcon className="w-5 h-5" />
        </div>
        <div className="flex flex-col text-start">
          <span className="text-[9px] text-slate-500 font-medium leading-none">
            احصل عليه من
          </span>
          <span className="text-xs sm:text-sm font-bold tracking-tight leading-tight font-sans text-brand-navy mt-0.5">
            Google Play
          </span>
        </div>
      </a>

      {/* App Store Button */}
      <a
        href={app.appStoreUrl}
        className="group inline-flex items-center gap-2.5 px-4 py-2.5 sm:px-4.5 sm:py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white transition-colors border border-white/20 hover:border-brand-cyan"
        aria-label="حمّل تطبيق دَفْع من App Store"
      >
        <div className="w-5 h-5 shrink-0 flex items-center justify-center transition-transform group-hover:scale-105">
          <AppleIcon className="w-5 h-5 fill-white" />
        </div>
        <div className="flex flex-col text-start">
          <span className="text-[9px] text-slate-300 font-medium leading-none">
            حمّله من
          </span>
          <span className="text-xs sm:text-sm font-bold tracking-tight leading-tight font-sans text-white mt-0.5">
            App Store
          </span>
        </div>
      </a>
    </div>
  );
}
