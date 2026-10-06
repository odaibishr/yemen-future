import { Container } from "@/components/common/Container";
import { ContactForm } from "./contact/ContactForm";
import { ContactIllustration } from "./contact/ContactIllustration";
import { ContactChannels } from "./contact/ContactChannels";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#f8fafc] scroll-mt-20">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight mb-3">
            لديك استفسار أو تحتاج مساعدة؟
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            يسعد فريق يمن فيوتشر بتلقي استفساراتكم وملاحظاتكم، وسيقوم فريقنا بمتابعة طلبكم والتواصل معكم بأقرب وقت.
          </p>
        </div>

        {/* Jaib-Style 2-Column Grid */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-14 items-center">
          {/* RTL Column 1 (Right): Contact Form */}
          <div className="w-full">
            <ContactForm />
          </div>

          {/* RTL Column 2 (Left): 3D Illustration */}
          <div className="w-full flex justify-center">
            <ContactIllustration />
          </div>
        </div>
      </Container>
    </section>
  );
}
