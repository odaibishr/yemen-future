"use client";

import {
  ArrowLeftRight,
  Receipt,
  Wallet,
  Banknote,
  CreditCard,
  Globe,
  Building2,
  Store,
  Check,
  LucideIcon,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/services";
import { ServiceItem } from "@/types";

const serviceIcons: Record<string, LucideIcon> = {
  ArrowLeftRight,
  Receipt,
  Wallet,
  Banknote,
  CreditCard,
  Globe,
  Building2,
  Store,
};

function ServiceCard({ item }: { item: ServiceItem }) {
  const IconComp = serviceIcons[item.icon] || Wallet;

  return (
    <div className="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white border border-border-subtle hover:border-brand-cyan/60 transition-colors text-start">
      <div className="space-y-4">
        {/* Header Icon + Badge */}
        <div className="flex items-center justify-between">
          <div className="w-14 h-14 rounded-2xl bg-brand-cyan-tint border border-brand-cyan/30 flex items-center justify-center text-brand-navy">
            <IconComp className="w-7 h-7 text-brand-navy" />
          </div>

          {item.badge && (
            <Badge variant="secondary" className="text-xs">
              {item.badge}
            </Badge>
          )}
        </div>

        {/* Titles */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-brand-navy">
            {item.title}
          </h3>
          <p className="text-xs font-semibold text-brand-cyan mt-1">
            {item.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed">
          {item.description}
        </p>

        {/* Features Checklist */}
        <div className="pt-2 border-t border-slate-100 space-y-2">
          {item.features.map((feat, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
              <Check className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 mt-4 border-t border-slate-100">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="w-full justify-between text-xs"
        >
          <Link href="#contact">
            <span>طلب الخدمة أو الاستفسار</span>
            <ArrowLeft className="w-3.5 h-3.5 text-brand-cyan" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export function Services() {
  const individualServices = servicesData.filter((s) => s.category === "individuals");
  const businessServices = servicesData.filter((s) => s.category === "business");

  return (
    <section id="services" className="py-20 bg-white border-b border-border-subtle">
      <Container>
        <SectionHeading
          badge="خدماتنا وحلولنا"
          title="باقة مالية متكاملة لجميع الاحتياجات"
          description="نوفر حلول دفع رقمية مبتكرة مصممة بعناية لتناسب الأفراد في حياتهم اليومية، وتلبي متطلبات التجار والمؤسسات في نمو أعمالهم."
        />

        <div className="mt-12">
          <Tabs defaultValue="individuals" className="w-full text-center">
            <TabsList className="mb-8">
              <TabsTrigger value="individuals" className="gap-2">
                <span>خدمات الأفراد</span>
                <span className="text-xs opacity-75">({individualServices.length})</span>
              </TabsTrigger>
              <TabsTrigger value="business" className="gap-2">
                <span>حلول الأعمال والتجار</span>
                <span className="text-xs opacity-75">({businessServices.length})</span>
              </TabsTrigger>
            </TabsList>

            {/* Individual Services Content */}
            <TabsContent value="individuals">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {individualServices.map((svc) => (
                  <ServiceCard key={svc.id} item={svc} />
                ))}
              </div>
            </TabsContent>

            {/* Business Services Content */}
            <TabsContent value="business">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {businessServices.map((svc) => (
                  <ServiceCard key={svc.id} item={svc} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </section>
  );
}
