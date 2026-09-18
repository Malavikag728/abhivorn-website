export interface Solution {
  title: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  icon: string;
  badge?: string;
}

export interface WhyChooseItem {
  value: string;
  title: string;
  description: string;
}

export interface Industry {
  name: string;
  icon: string;
}

export interface Statistic {
  value: string;
  label: string;
  icon: string;
}

export interface Project {
  category: string;
  title: string;
  metrics: string[];
}

export interface Technology {
  name: string;
  icon: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}