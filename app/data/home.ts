import type {
  FAQItem,
  Industry,
  ProcessStep,
  Project,
  Solution,
  Statistic,
  Technology,
  WhyChooseItem,
} from "@/types/home";

export const solutions: Solution[] = [
  {
    title: "VORN HR",
    description: "Complete HR Management System",
    features: [
      "Employee Management",
      "Attendance Tracking",
      "Leave Management",
      "Payroll",
    ],
    cta: "Learn More",
    href: "/products/vorn-hr",
    icon: "users",
  },
  {
    title: "VorQard",
    description: "QR-Based Healthcare Management",
    features: [
      "Patient Management",
      "Appointments",
      "Billing",
      "Analytics",
    ],
    cta: "Join Beta",
    href: "/products/vorqard",
    icon: "heart",
    badge: "Beta Access",
  },
  {
    title: "Custom Solutions",
    description: "Tailored for Your Business",
    features: [
      "Web Apps",
      "System Integration",
      "Cloud Architecture",
      "API Development",
    ],
    cta: "Start Your Project",
    href: "/services#custom",
    icon: "code",
  },
];

export const whyChooseUs: WhyChooseItem[] = [
  {
    value: "1+",
    title: "Year Experience",
    description: "Deep expertise in custom software development",
  },
  {
    value: "15+",
    title: "Companies Served",
    description: "Proven track record with happy clients",
  },
  {
    value: "5,000+",
    title: "Users",
    description: "Products used by thousands daily",
  },
  {
    value: "99.8%",
    title: "Uptime",
    description: "Enterprise-grade reliability",
  },
];

export const industries: Industry[] = [
  {
    name: "Healthcare",
    icon: "heart",
  },
  {
    name: "Finance",
    icon: "finance",
  },
  {
    name: "Retail",
    icon: "retail",
  },
  {
    name: "Manufacturing",
    icon: "manufacturing",
  },
  {
    name: "Education",
    icon: "education",
  },
  {
    name: "Logistics",
    icon: "logistics",
  },
];

export const statistics: Statistic[] = [
  {
    value: "10+",
    label: "Companies Trust Us",
    icon: "building",
  },
  {
    value: "5,000+",
    label: "Employees Managed",
    icon: "users",
  },
  {
    value: "99.8%",
    label: "System Uptime",
    icon: "activity",
  },
  {
    value: "95%",
    label: "Customer Satisfaction",
    icon: "chart",
  },
];

export const projects: Project[] = [
  {
    category: "Healthcare",
    title: "Elevate Rootz",
    metrics: [
      "100+ patients onboarded in first month",
      "80% reduction in booking time",
    ],
  },
  {
    category: "Finance",
    title: "US Mortgage Processing",
    metrics: [
      "98.5% extraction accuracy",
      "85% time reduction",
    ],
  },
  {
    category: "Enterprise",
    title: "HRMS Implementation",
    metrics: [
      "10+ companies deployed",
      "5,000+ employees managed",
    ],
  },
];

export const technologies: Technology[] = [
  {
    name: "React",
    icon: "react",
  },
  {
    name: "Django",
    icon: "django",
  },
  {
    name: "PostgreSQL",
    icon: "database",
  },
  {
    name: "AWS",
    icon: "cloud",
  },
  {
    name: "TypeScript",
    icon: "typescript",
  },
  {
    name: "Docker",
    icon: "docker",
  },
  {
    name: "Python",
    icon: "python",
  },
  {
    name: "Tailwind",
    icon: "tailwind",
  },
];

export const developmentProcess: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "Requirements analysis",
  },
  {
    number: "02",
    title: "Design",
    description: "UI/UX and architecture",
  },
  {
    number: "03",
    title: "Development",
    description: "Agile coding",
  },
  {
    number: "04",
    title: "Testing",
    description: "Quality assurance",
  },
  {
    number: "05",
    title: "Deployment",
    description: "Launch support",
  },
  {
    number: "06",
    title: "Support",
    description: "Ongoing maintenance",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "What industries do you serve?",
    answer:
      "We build custom software solutions for healthcare, finance, retail, manufacturing, education, logistics, and other business sectors.",
  },
  {
    question: "Do you offer free trials?",
    answer:
      "Yes. Depending on the product or solution, we can provide a demo or trial experience to help you evaluate the platform.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines depend on scope and complexity. After understanding your requirements, we provide a clear development roadmap and estimated timeline.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We provide post-launch maintenance, technical support, monitoring, and improvements based on the requirements of each project.",
  },
];