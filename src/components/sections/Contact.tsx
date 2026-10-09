"use client";

import { motion } from "motion/react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ContactForm } from "./contact/ContactForm";
import { ContactIllustration } from "./contact/ContactIllustration";
import {
  fadeInUpVariants,
  staggerContainerVariants,
} from "@/lib/animations";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#f8fafc] scroll-mt-20 overflow-hidden">
      <Container>
        {/* Header Section with Authored Motion Architecture */}
        <SectionHeading
          title="لديك استفسار أو تحتاج مساعدة؟"
          description="يسعد فريق يمن فيوتشر بتلقي استفساراتكم وملاحظاتكم، وسيقوم فريقنا بمتابعة طلبكم والتواصل معكم بأقرب وقت."
          className="mb-10 md:mb-14"
        />

        {/* Jaib-Style 2-Column Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
          className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-14 items-center"
        >
          {/* RTL Column 1 (Right): Contact Form */}
          <motion.div variants={fadeInUpVariants} className="w-full">
            <ContactForm />
          </motion.div>

          {/* RTL Column 2 (Left): Illustration */}
          <motion.div variants={fadeInUpVariants} className="w-full flex justify-center">
            <ContactIllustration />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
