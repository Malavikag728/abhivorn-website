import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import styles from "./products.module.css";

const products = [
  {
    name: "VORN HR",
    description: "Complete HR Management System",
    href: "/products/vorn-hr",
    accent: "cyan",
    icon: UsersRound,
    summary:
      "Transform your HR operations with our comprehensive HRMS solution. From attendance tracking to performance management, VORN HR handles it all.",
    stats: [
      ["10+", "Companies"],
      ["5,000+", "Employees"],
      ["99.8%", "Uptime"],
    ],
    features: [
      "Employee Management & Database",
      "Facial Recognition Attendance",
      "Leave & Performance Management",
      "Payroll & Compensation",
      "Mobile Apps (iOS & Android)",
      "HR Analytics & Reports",
    ],
    price: "Starting at ₹499/month",
  },
  {
    name: "VorQard",
    description: "QR-Based Healthcare Management",
    href: "/products/vorqard",
    accent: "pink",
    icon: ShieldCheck,
    summary:
      "Streamline your healthcare operations with our intelligent patient management system. Reduce wait times and improve patient satisfaction.",
    stats: [
      ["HIPAA", "Compliant"],
      ["40%", "Wait time"],
      ["Beta", "Available"],
    ],
    features: [
      "Patient Management System",
      "QR-Based Check-in",
      "Appointment Scheduling",
      "Billing & Invoicing",
      "Medical Records Management",
      "Analytics Dashboard",
    ],
    price: "Beta Access Available",
  },
] as const;

const benefits = [
  {
    title: "Quick Deployment",
    description: "Get up and running in weeks, not months",
    icon: Sparkles,
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security and compliance",
    icon: LockKeyhole,
  },
  {
    title: "Powerful Analytics",
    description: "Data-driven insights for better decisions",
    icon: BarChart3,
  },
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className={`${styles.page} bg-white text-[#17364f]`}>
        <section className="px-5 pb-14 pt-12 text-center sm:px-6 sm:pb-20 sm:pt-16">
          <ScrollReveal>
            <h1 className="mx-auto max-w-2xl text-[28px] font-bold leading-tight tracking-[-0.035em] sm:text-5xl">
              Enterprise-Grade <span className="text-[#08afe8]">SaaS Solutions</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-[11px] leading-relaxed text-[#718697] sm:text-lg">
              Ready-to-deploy products built for modern businesses. Choose the solution that fits your needs.
            </p>
          </ScrollReveal>
        </section>

        <section className="px-5 pb-9 sm:px-6 sm:pb-16">
          <div className="mx-auto grid max-w-5xl gap-4 lg:grid-cols-2">
            {products.map((product, index) => {
              const ProductIcon = product.icon;
              return (
                <ScrollReveal key={product.name} delay={index * 110}>
                  <article className={`${styles.productCard} ${product.accent === "pink" ? styles.pinkCard : styles.cyanCard}`}>
                    <div className="block h-full">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#e4edf1] bg-white text-[#08afe8] shadow-sm">
                          <ProductIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold">{product.name}</h2>
                          <p className="text-[14px] text-[#718697]">{product.description}</p>
                        </div>
                      </div>

                      <p className="mt-4 text-[14px] leading-relaxed text-[#718697]">{product.summary}</p>

                      <div className="mt-4 grid grid-cols-3 rounded-md bg-[#f5f8fa] px-2 py-2.5 text-center">
                        {product.stats.map(([value, label]) => (
                          <div key={label}>
                            <p className="text-sm font-bold text-[#087492]">{value}</p>
                            <p className="mt-0.5 text-[12px] text-[#718697]">{label}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 grid gap-x-4 gap-y-2 sm:grid-cols-2">
                        {product.features.map((feature) => (
                          <p key={feature} className="flex items-start gap-1 text-[13px] text-[#5f7587]">
                            <CheckCircle2 className="mt-px h-2.5 w-2.5 shrink-0 text-[#087f9c]" />
                            {feature}
                          </p>
                        ))}
                      </div>

                      <p className="mt-4 text-[14px] font-semibold text-[#17364f]">{product.price}</p>
                      <div className="mt-3 flex gap-2">
                        <Link href={product.href} className="flex flex-1 items-center justify-center gap-1 rounded-md bg-[#08b7f2] px-3 py-2 text-[13px] font-bold text-white transition hover:bg-[#079fd5]">
                          Learn More <ArrowRight className="h-2.5 w-2.5" />
                        </Link>
                        <Link href="/contact" className="rounded-md border border-[#08789e] px-3 py-2 text-[13px] font-semibold text-[#075a7c] transition hover:bg-[#e9f9ff]">
                          Get Demo
                        </Link>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        <section className="bg-[#f7fafc] px-5 py-14 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="text-center">
                <h2 className="text-2xl font-bold tracking-[-0.02em] sm:text-3xl">Why Choose Our Products?</h2>
                <p className="mt-2 text-base text-[#718697]">Built with enterprise needs in mind</p>
              </div>
            </ScrollReveal>
            <div className="mt-9 grid gap-8 sm:grid-cols-3 sm:gap-5">
              {benefits.map(({ title, description, icon: Icon }, index) => (
                <ScrollReveal key={title} delay={index * 90}>
                  <article className="text-center transition duration-300 hover:-translate-y-1">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-md bg-[#e0f6fd] text-[#08afe8]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3 text-[15px] font-bold">{title}</h3>
                    <p className="mt-2 text-[13px] text-[#718697]">{description}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#056b86] px-5 py-12 text-center text-white sm:py-14">
          <ScrollReveal>
            <h2 className="text-2xl font-bold tracking-[-0.02em] sm:text-3xl">Ready to Transform Your Business?</h2>
            <p className="mx-auto mt-3 max-w-lg text-[14px] text-white/80">
              Schedule a demo to see how our products can help streamline your operations.
            </p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-1 rounded-md bg-[#08b7f2] px-5 py-2.5 text-[14px] font-bold transition hover:bg-[#079fd5]">
              Book a Free Demo <ArrowRight className="h-3 w-3" />
            </Link>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
