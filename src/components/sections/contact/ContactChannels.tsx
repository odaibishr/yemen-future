import { Phone, MessageSquare, Mail, MapPin } from "lucide-react";
import { contactChannels } from "@/data/contact";

export function ContactChannels() {
  const getIcon = (type: string) => {
    switch (type) {
      case "phone":
        return <Phone className="h-6 w-6 text-brand-navy" />;
      case "whatsapp":
        return <MessageSquare className="h-6 w-6 text-emerald-600" />;
      case "email":
        return <Mail className="h-6 w-6 text-brand-cyan" />;
      case "location":
      default:
        return <MapPin className="h-6 w-6 text-brand-navy" />;
    }
  };

  return (
    <div className="mt-16 sm:mt-20">
      <div className="mb-8 text-center">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#18181A]">
          قنوات الاتصال المباشرة
        </h3>
        <p className="mt-2 text-sm sm:text-base text-[#4F5258]">
          فريقنا في خدمتكم على مدار الساعة عبر كافة القنوات الرسمية
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {contactChannels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            target={channel.type === "whatsapp" ? "_blank" : undefined}
            rel={channel.type === "whatsapp" ? "noopener noreferrer" : undefined}
            className="group flex flex-col justify-between rounded-2xl border border-border-subtle bg-white p-6 transition-all duration-300 hover:border-brand-cyan/40 hover:bg-brand-cyan-tint/20 text-start"
          >
            <div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#ECF0F3] group-hover:bg-white group-hover:border group-hover:border-brand-cyan/30 transition-colors">
                {getIcon(channel.type)}
              </div>
              <h4 className="text-sm font-semibold text-slate-500">
                {channel.label}
              </h4>
              <p
                className="mt-1 text-base sm:text-lg font-bold text-brand-navy group-hover:text-brand-navy-light transition-colors"
                dir={channel.type === "phone" || channel.type === "whatsapp" ? "ltr" : undefined}
              >
                {channel.value}
              </p>
            </div>
            <p className="mt-3 text-xs text-slate-500 leading-relaxed">
              {channel.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
