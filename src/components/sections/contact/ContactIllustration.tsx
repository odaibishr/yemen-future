import Image from "next/image";

export function ContactIllustration() {
  return (
    <div className="flex h-80 sm:h-120 lg:h-150.75 w-full shrink-0 items-center justify-center overflow-hidden rounded-[30px] bg-[#0c1222] border border-brand-cyan/15 relative">
      <Image
        src="/images/answers-solutions-brand.jpg"
        alt="مركز الدعم الفني والاستفسارات - يمن فيوتشر"
        fill
        sizes="(max-width: 1024px) 100vw, 585px"
        priority
        className="h-full w-full object-cover select-none pointer-events-none"
      />
    </div>
  );
}
