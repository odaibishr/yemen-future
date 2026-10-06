export interface AppTransaction {
  id: string;
  title: string;
  time: string;
  amount: string;
  type: "credit" | "debit";
}

export const dafaaData = {
  app: {
    name: "محفظة دَفْع",
    nameEn: "DAFAA",
    slogan: "سهولة .. وآمان",
    company: "شركة يمن فيوتشر للخدمات المالية والمدفوعات الإلكترونية",
    description:
      "إحدى خدمات شركة يمن فيوتشر للخدمات المالية والمدفوعات الإلكترونية التي انطلقت لتكون المحفظة الرائدة في عالم المدفوعات والشمول المالي الرقمي في اليمن.",
    websiteUrl: "https://yemenfuture.ye/dafaa",
    websiteLinkText: "تعرف على المزيد عن المحفظة عن طريق زيارة الموقع الرسمي",
    apkDownloadUrl: "#download-apk",
    googlePlayUrl: "#google-play",
    appStoreUrl: "#app-store",
  },
  phoneMockup: {
    userName: "وضاح الخالد",
    userInitials: "و.خ",
    walletBalance: "485,250",
    currency: "YER",
    quickServices: [
      { id: "telecom", label: "شحن باقات" },
      { id: "bills", label: "سداد فواتير" },
      { id: "transfer", label: "تحويل فوري" },
      { id: "qr_pay", label: "دفع QR" },
    ],
    recentTransactions: [
      {
        id: "tx-1",
        title: "سداد باقة فورجي - يمن موبايل",
        time: "اليوم - 11:24 ص",
        amount: "- 4,800 YER",
        type: "debit",
      },
      {
        id: "tx-2",
        title: "حوالة مالية واردة - شبكة يمن فيوتشر",
        time: "اليوم - 09:15 ص",
        amount: "+ 120,000 YER",
        type: "credit",
      },
      {
        id: "tx-3",
        title: "دفع مشتريات هايبر المستهلك (QR)",
        time: "أمس - 08:40 م",
        amount: "- 16,350 YER",
        type: "debit",
      },
    ] as AppTransaction[],
  },
};
