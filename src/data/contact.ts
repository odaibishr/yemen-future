import { ContactChannel, GovernorateNetwork } from "@/types";

export const contactChannels: ContactChannel[] = [
  {
    type: "phone",
    label: "الرقم المجاني / خدمة العملاء",
    value: "8000088 / 01-445566",
    href: "tel:+9671445566",
    description: "فريق دعم متخصص متاح للرد على استفساراتكم",
  },
  {
    type: "whatsapp",
    label: "خدمة واتساب المباشرة",
    value: "+967 777 000 888",
    href: "https://wa.me/967777000888",
    description: "رد سريع ومباشر عبر تطبيق واتساب",
  },
  {
    type: "email",
    label: "البريد الإلكتروني الرسمي",
    value: "info@yemenfuture.ye",
    href: "mailto:info@yemenfuture.ye",
    description: "للاستفسارات العامة والمراسلات المؤسسية",
  },
  {
    type: "location",
    label: "المقر الرئيسي",
    value: "اليمن - صنعاء - شارع الزبيري / فرع عدن - المعلا",
    href: "#",
    description: "أوقات الدوام: من السبت إلى الخميس (8:00 ص - 9:00 م)",
  },
];

export const governorateNetworks: GovernorateNetwork[] = [
  {
    name: "صنعاء وأمانة العاصمة",
    branches: 12,
    agents: 850,
    highlight: "تغطية مكثفة لجميع المراكز التجارية والمديريات",
  },
  {
    name: "عدن",
    branches: 8,
    agents: 520,
    highlight: "نقاط خدمة في المعلا، المنصورة، كريتر، والشيخ عثمان",
  },
  {
    name: "تعز",
    branches: 7,
    agents: 480,
    highlight: "انتشار في مركز المدينة والتربة والحوبان",
  },
  {
    name: "حضرموت (المكلا وسيئون)",
    branches: 9,
    agents: 610,
    highlight: "شبكة واسعة لخدمة ساحل ووادي حضرموت",
  },
  {
    name: "الحديدة وإب وذمار",
    branches: 15,
    agents: 940,
    highlight: "سهولة الوصول للخدمات في المدن الرئيسية والأرياف",
  },
  {
    name: "باقي المحافظات اليمنية",
    branches: 20,
    agents: 1200,
    highlight: "وكلاء معتمدون في مأرب، شبوة، المهرة، ولحج",
  },
];
