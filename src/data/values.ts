import { GoalItem, ValueItem, TrustMetricItem } from "@/types";

export const companyOverview = {
  name: "للخدمات المالية والمدفوعات الإلكترونية",
  story:
    "انطلقت شركة يمن فيوتشر كصرح وطني متخصص في التكنولوجيا المالية (الفنتك) وحلول المدفوعات الرقمية، لتواكب التحول المالي وتلبي الاحتياج الحقيقي للمواطن والمؤسسات في اليمن. نحن نقدم منظومة دفع متكاملة تجمع بين أقصى درجات الأمان والسهولة والابتكار، بقيادة كفاءات مصرفية وتقنية متمرسة.",
  mission:
    "قيادة التحول المالي الرقمي في اليمن عبر توفير حلول دفع إلكتروني مبتكرة وسلسة، تعزز الشمول المالي وتمكّن الأفراد والشركات من إدارة أموالهم بكفاءة وموثوقية عالية.",
  vision:
    "أن نكون الخيار الأول والأكثر موثوقية في اليمن لخدمات التكنولوجيا المالية والمدفوعات الرقمية الذكية.",
};

export const valuesData: ValueItem[] = [
  {
    id: "security",
    title: "الأمان والموثوقية المصرفية",
    description: "تشفير متقدم متعدد الطبقات وبروتوكولات أمان صارمة تضمن سلامة وسرية كل عملية مالية.",
    icon: "/svgs/values/security.svg",
  },
  {
    id: "convenience",
    title: "السهولة والانسيابية الرقمية",
    description: "حلول دفع مصممة خصيصاً لتختصر الجهد وتلبي متطلبات التعاملات اليومية بكل يسر وسرعة.",
    icon: "/svgs/values/convenience.svg",
  },
  {
    id: "innovation",
    title: "التفرد والابتكار المستمر",
    description: "بنية برمجية مرنة ومنظومات فنتك حديثة تتكامل بسلاسة عبر واجهات ربط سحابية متقدمة.",
    icon: "/svgs/values/innovation.svg",
  },
  {
    id: "inclusion",
    title: "الشمول المالي والعدالة الرقمية",
    description: "إتاحة التعاملات المالية غير النقدية لكافة أفراد المجتمع في عموم مدن وأرياف اليمن.",
    icon: "/svgs/values/inclusion.svg",
  },
];

export const trustMetricsData: TrustMetricItem[] = [
  {
    id: "availability",
    value: "99.98%",
    label: "جاهزية واستقرار الأنظمة",
    sublabel: "استمرارية تشغيلية على مدار الساعة دون انقطاع",
    icon: "/svgs/values/innovation.svg",
  },
  {
    id: "encryption",
    value: "256-Bit",
    label: "تشفير مالي ومصرفي صارم",
    sublabel: "حماية فائقة لسرية الحسابات وسلامة العمليات",
    icon: "/svgs/values/security.svg",
  },
  {
    id: "speed",
    value: "< 1s",
    label: "سرعة معالجة العمليات",
    sublabel: "تنفيذ وتسوية فورية للحوالات والمدفوعات",
    icon: "/svgs/values/convenience.svg",
  },
  {
    id: "monitoring",
    value: "24/7",
    label: "رقابة ودعم تشغيلي متواصل",
    sublabel: "فريق رقابة تقنية لحماية كل عملية مالية",
    icon: "/svgs/contact/support.svg",
  },
];

export const goalsData: GoalItem[] = [
  {
    id: "g1",
    title: "ترسيخ ثقافة الدفع الإلكتروني",
    description: "تيسير الحلول الرقمية غير النقدية للأفراد والتجار وتوسيع الاعتماد على التعاملات الآمنة.",
    icon: "/svgs/goals/digital-culture.svg",
  },
  {
    id: "g2",
    title: "الحد من أعباء التداول الورقي",
    description: "تقديم بدائل مالية رقمية موثوقة تقلص تكاليف ومخاطر نقل وتداول السيولة النقدية الورقية.",
    icon: "/svgs/goals/cashless-exchange.svg",
  },
  {
    id: "g3",
    title: "استدامة التطوير والابتكار التقني",
    description: "تحديث وتطوير منظومتنا البرمجية باستمرار لمواكبة أحدث معايير الفنتك والأنظمة الدولية.",
    icon: "/svgs/goals/fintech-growth.svg",
  },
  {
    id: "g4",
    title: "تمكين بيئة الأعمال ورواد المشاريع",
    description: "تزويد المتاجر والشركات بنقاط بيع وبوابات دفع ذكية ترفع كفاءة عملياتها واستثماراتها.",
    icon: "/svgs/goals/merchant-pos.svg",
  },
  {
    id: "g5",
    title: "بناء شراكات مصرفية متكاملة",
    description: "تكامل تقني وتشغيلي وثيق مع القطاع المصرفي والبنوك وأوسع شبكة وكلاء في المحافظات.",
    icon: "/svgs/goals/banking-partnerships.svg",
  },
  {
    id: "g6",
    title: "توطين التقنيات وبناء الكفاءات الوطنية",
    description: "الاستثمار في الكوادر والخبرات اليمنية لبناء بنية رقمية وطنية تتمتع بالسيادة والاستدامة.",
    icon: "/svgs/goals/national-competence.svg",
  },
];
