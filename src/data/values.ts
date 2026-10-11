import { GoalItem, ValueItem, TrustMetricItem } from "@/types";

export const companyOverview = {
  name: "حلول وتقنيات مالية",
  fullName: "شركة يمن فيوتشر للخدمات المالية",
  story:
    "شركة يمنية نُعنى بتقديم خدمات التكنولوجيا المالية (الفنتك) وحلول وخدمات الدفع الإلكتروني المطلوبة لتسهيل ومواكبة حاجة المواطن في الدفع وتحسين تعاملاته المالية بما يتناسب مع التقدم المالي الرقمي، بل وتذهب إلى أكثر من ذلك من خلال تقديم خدمات تفوق توقعات العملاء وفق مستوى ملائم من الأمان والسهولة والجودة، وبأساليب وتقنيات رقمية متطورة ونخبة من الإداريين والموظفين المختارين بعناية وتفرد.",
  mission:
    "رفع الوعي بالدفع الإلكتروني وسهولته في إدارة الأموال، والكفاءة والحرص في تسخير خدمات مالية رقمية متكاملة ومواكبة للتغيرات المحلية والدولية.",
  vision:
    "رواد الفنتك والدفع الإلكتروني في اليمن.",
};

export const valuesData: ValueItem[] = [
  {
    id: "uniqueness",
    title: "التفرد",
    description:
      "في الخدمات، الكادر الإداري والوظيفي في الشركة، والتفرد في بيئة العمل ومحتوياته بما يُقدم للعميل الشعور بالتميز والفخر لتعامله مع شركة يمن فيوتشر.",
    icon: "/svgs/values/innovation.svg",
  },
  {
    id: "suitability",
    title: "المُلائمة",
    description:
      "من أجل أن يكون التفرد ناجحاً لابد من ملاءمته وملامسته لاحتياجات العميل وتطلعاته وتقديم حلول تتوافق تماماً مع متطلباته اليومية.",
    icon: "/svgs/values/convenience.svg",
  },
  {
    id: "persistence",
    title: "الإصرار",
    description:
      "نسعى دائماً بإصرار أن نكون الشركة التي تستحق الولاء بتفرد خدماتها وتميزها وملاءمتها المستمرة لكافة فئات المجتمع.",
    icon: "/svgs/values/inclusion.svg",
  },
  {
    id: "security",
    title: "الأمان والموثوقية",
    description:
      "مستوى متقدم من الأمان والسرية المصرفية عبر أحدث معايير التشفير والتقنيات الرقمية المعتمدة لحماية كافة العمليات المالية.",
    icon: "/svgs/values/security.svg",
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
    title: "نشر وتشجيع الدفع الإلكتروني",
    description: "نشر وتشجيع التعاملات عبر الدفع الإلكتروني وتوضيح إيجابياته ومميزاته للعميل.",
    icon: "/svgs/goals/digital-culture.svg",
  },
  {
    id: "g2",
    title: "تطوير المجتمع المالي والتكنولوجي",
    description: "المشاركة الفعّالة في رفع وتطوير المجتمع المالي والتكنولوجي في عموم اليمن.",
    icon: "/svgs/icons/financial-inclusion.svg",
  },
  {
    id: "g3",
    title: "استبدال التعاملات النقدية",
    description: "استبدال التعاملات النقدية بتعاملات أكثر أماناً وسهولة تدعم التكنولوجيا المالية الرقمية.",
    icon: "/svgs/goals/cashless-exchange.svg",
  },
  {
    id: "g4",
    title: "التطوير والتحسين المستمر",
    description: "تحسين وتطوير الخدمات المالية الرقمية أولاً بأول بما يتناسب مع احتياجات العميل.",
    icon: "/svgs/goals/fintech-growth.svg",
  },
  {
    id: "g5",
    title: "تنمية الأفكار الاستثمارية",
    description: "توظيف خدمات الدفع الإلكتروني بما يُنمّي الأفكار الاستثمارية في البلاد.",
    icon: "/svgs/goals/merchant-pos.svg",
  },
  {
    id: "g6",
    title: "دراسة وتيسير الفرص المالية",
    description: "دراسة الفرص والأفكار التي تحقق التسهيلات والنجاحات في إدارة التعاملات المالية الرقمية.",
    icon: "/svgs/goals/banking-partnerships.svg",
  },
];
