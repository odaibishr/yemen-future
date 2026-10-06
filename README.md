# يمن فيوتشر (Yemen Future) — موقع الخدمات المالية والمدفوعات الإلكترونية

موقع الويب الرسمي لشركة **يمن فيوتشر للخدمات المالية والمدفوعات الإلكترونية**، يقدم تجربة رقمية متطورة وسريعة باللغة العربية لعرض الخدمات المصرفية والمدفوعات الرقمية (التحويلات، سداد الفواتير وشحن الباقات، المحفظة الرقمية، وحلول التجار ونقاط البيع).

---

## التقنيات المستخدمة (Tech Stack)

- **Framework**: [Next.js 16.3](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: [IBM Plex Sans Arabic](https://fonts.google.com/specimen/IBM+Plex+Sans+Arabic)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Class Utilities**: `clsx` + `tailwind-merge`
- **Direction**: Right-to-Left (`dir="rtl"`)

---

## هوية الألوان (Brand Colors)

الألوان مستخرجة مباشرة من الشعار الرسمي للشركة (`public/svgs/logo.svg`):
- **الكحلي الداكن الفخم (Brand Navy)**: `#1a2754`
- **الأزرق السماوي الناعم (Brand Cyan)**: `#73a7c1`
- **الخلفية والأسطح (Clean Banking White)**: `#ffffff` مع مساحات متباينة `#f8fafc`

---

## التشغيل والتطوير (Getting Started)

### المتطلبات الأساسية
- Node.js (الإصدار 18 فما فوق أو الإصدار 20+)
- npm أو pnpm أو yarn

### التثبيت
```bash
npm install
```

### تشغيل خادم التطوير
```bash
npm run dev
```
افتح المتصفح على: [http://localhost:3000](http://localhost:3000)

### بناء المشروع للإنتاج
```bash
npm run build
npm run start
```

### فحص الكود (Linting)
```bash
npm run lint
```

---

## هيكلية المشروع (Project Structure)

```
yemen-future/
├── public/                 # الشعار الرسمي والملفات الثابتة
├── src/
│   ├── app/                # صفحات وتخطيطات Next.js 16 App Router
│   ├── components/         # المكونات البرمجية (Sections, UI, Layout)
│   ├── data/               # البيانات والمحتوى العربي للخدمات والقيم
│   ├── lib/                # دوال مساعدة (cn / utils)
│   └── types/              # تعريفات الأنواع (TypeScript types)
├── AGENTS.md               # إرشادات وتعليمات الوكلاء البرمجيين
├── PROJECT.md              # سياق المشروع والقرارات المعمارية
└── ARCHITECTURE.md         # المخطط المعماري وتدفق البيانات
```

---

## التوثيق الإضافي

- [AGENTS.md](file:///e:/pythonProjects/webProjects/yemen-future/AGENTS.md): معايير وقواعد كتابة الكود للوكلاء.
- [PROJECT.md](file:///e:/pythonProjects/webProjects/yemen-future/PROJECT.md): أهداف المشروع والقرارات الفنية.
- [ARCHITECTURE.md](file:///e:/pythonProjects/webProjects/yemen-future/ARCHITECTURE.md): البنية البرمجية وتدفق البيانات.
