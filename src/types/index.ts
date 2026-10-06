export type ServiceCategory = "individuals" | "business";

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: ServiceCategory;
  icon: string;
  badge?: string;
  features: string[];
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GoalItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactChannel {
  type: "phone" | "whatsapp" | "email" | "location";
  label: string;
  value: string;
  href: string;
  description?: string;
}

export interface GovernorateNetwork {
  name: string;
  branches: number;
  agents: number;
  highlight: string;
}

export interface FaqItem {
  id: string;
  category: "all" | "account" | "transfers" | "bills" | "security" | "merchants";
  question: string;
  answer: string;
  badge?: string;
}
