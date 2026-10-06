import Image from "next/image";
import { Container } from "@/components/common/Container";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-linear-to-b from-brand-navy via-[#142048] to-[#0a1024] text-white border-b border-brand-navy-light/30 pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-32"
    >
      {/* Subtle brand cyan radial ambient light (Zero shadows) */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_20%,rgba(115,167,193,0.18),transparent_70%)]"
        aria-hidden="true"
      />

      {/* Yemen Future Branded Watermark (Fades out early so it does not show all over the hero) */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden select-none"
        aria-hidden="true"
      >
        <Image
          src="/images/yemen-future-background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-20 mask-[linear-gradient(to_bottom,black_10%,rgba(0,0,0,0.35)_30%,transparent_50%)]"
        />
      </div>

      <Container className="relative">
        {/* Centered Editorial Proposition */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6 sm:space-y-8">
          {/* Main Display Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.18] tracking-tight">
            حلول مالية ذكية <br />
            <span className="text-brand-cyan">تصنع المستقبل</span> بين يديك
          </h1>

          {/* Descriptive Mission Copy */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            تقدم شركة <strong>يمن فيوتشر</strong> منظومة دفع رقمية متكاملة تمنحك سرعة فائقة في تحويل الأموال، وسداد الفواتير وشحن الرصيد لكافة الشبكات، وإدارة مدفوعاتك اليومية والتجارية بأعلى معايير الأمان المصرفي.
          </p>
        </div>
      </Container>
    </section>
  );
}
