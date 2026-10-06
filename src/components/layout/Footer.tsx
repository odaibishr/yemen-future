import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck } from "lucide-react";
import { Container } from "@/components/common/Container";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white border-t border-brand-navy-light pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 pb-12 border-b border-white/10">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-white rounded-xl">
                <Image
                  src="/svgs/logo.svg"
                  alt="شعار يمن فيوتشر"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">
                  يمن فيوتشر
                </span>
                <span className="text-xs text-brand-cyan-light font-medium">
                  للخدمات المالية والمدفوعات
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              صرح وطني رائد في التكنولوجيا المالية والمدفوعات الإلكترونية، يبتكر حلول دفع رقمية موثوقة تلبي احتياجات المواطنين والتجار والشركات في اليمن.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white border-s-2 border-brand-cyan ps-2.5">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="#hero" className="hover:text-brand-cyan transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-brand-cyan transition-colors">
                  من نحن والرؤية
                </Link>
              </li>
              <li>
                <Link href="#values" className="hover:text-brand-cyan transition-colors">
                  القيم والأهداف
                </Link>
              </li>
              <li>
                <Link href="#app" className="hover:text-brand-cyan transition-colors">
                  تطبيق المحفظة الرقمية
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-brand-cyan transition-colors">
                  تواصل معنا والدعم
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Channels */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white border-s-2 border-brand-cyan ps-2.5">
              خدمة العملاء
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span dir="ltr" className="text-end">8000088 / 01-445566</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span>info@yemenfuture.ye</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span>صنعاء - شارع الخمسين</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} شركة يمن فيوتشر للخدمات المالية والمدفوعات الإلكترونية. جميع الحقوق محفوظة.
          </p>

          <Link
            href="#hero"
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-brand-cyan transition-colors p-2 rounded-lg hover:bg-white/5"
          >
            <span>العودة للأعلى</span>
            <ArrowUp className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
