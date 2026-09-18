import {
  Cloud,
  Code2,
  Database,
  HeartPulse,
  ArrowRight,
  Check,
  ShieldCheck,
  UsersRound,
  Workflow,
} from "lucide-react";
import Link from "next/link";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import styles from "./services.module.css";

const customServices = [
  ["Web Application Development", "Custom web applications built with modern frameworks", Code2, ["React", "Django", "PostgreSQL", "TypeScript"]],
  ["Healthcare Technology", "HIPAA-compliant healthcare management systems", HeartPulse, ["Patient Management", "Telemedicine", "Data Security"]],
  ["HRMS Implementation", "VORN HR deployment with custom configurations", UsersRound, ["Attendance Integration", "Payroll Setup", "Training"]],
  ["System Integration", "Connect your existing systems seamlessly", Workflow, ["API Development", "ERP Integration", "Data Sync"]],
  ["Cloud Architecture", "Scalable cloud infrastructure on AWS", Cloud, ["AWS", "DevOps", "CI/CD", "Kubernetes"]],
  ["Data Processing", "ETL pipelines and document processing", Database, ["OCR", "Data Validation", "Automation"]],
] as const;

const workModels = [
  ["Fixed Project", "Best for well-defined projects with clear requirements", "6-12 weeks", "₹2,00,000 - ₹20,00,000", ["Fixed scope & budget", "Milestone-based delivery", "Clear timeline"]],
  ["Time & Material", "Best for evolving requirements and agile development", "Flexible", "₹2,000/hr or ₹50/hour", ["Flexible scope", "Pay for actual work", "Agile methodology"]],
  ["Retainer Model", "Best for ongoing support and maintenance", "20-40 hours/month", "₹25,000 - ₹50,000/month", ["Dedicated support", "Priority response", "Regular updates"]],
] as const;

const process = [
  ["01", "Discovery & Planning", "We understand your requirements, analyze your needs, and create a detailed project plan."],
  ["02", "Design & Development", "Our team designs the solution and develops it using agile methodology with regular updates."],
  ["03", "Testing & Deployment", "Rigorous testing ensures quality, followed by a smooth deployment to your environment."],
  ["04", "Support & Maintenance", "Ongoing support, updates, and maintenance to keep your solution running optimally."],
];

const products = [
  {
    name: "VORN HR",
    description: "Complete HR Management System",
    icon: UsersRound,
    href: "/products/vorn-hr",
    action: "Get Demo",
    features: [
      "Employee Management & Database",
      "Attendance Tracking (Facial Recognition)",
      "Leave Management & Workflow",
      "Performance Management (OKRs)",
      "Payroll & Compensation",
      "HR Analytics & Reports",
      "Mobile Apps (iOS & Android)",
      "Role-Based Access Control",
    ],
    badges: ["10+ companies", "99.8% uptime"],
    price: "Starting at ₹499/month",
  },
  {
    name: "VorQard",
    description: "QR-Based Healthcare Management",
    icon: ShieldCheck,
    href: "/products/vorqard",
    action: "Join Beta Program",
    features: [
      "Patient Management System",
      "Appointment Scheduling",
      "QR-Based Check-in",
      "Billing & Invoicing",
      "Medical Records Management",
      "Analytics Dashboard",
    ],
    badges: ["HIPAA compliant", "40% wait time reduction"],
    price: "Early access available",
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className={`${styles.page} bg-white text-[#17364f]`}>
        <section className="px-5 pb-14 pt-12 text-center sm:px-6 sm:pb-20 sm:pt-16">
          <ScrollReveal>
            <h1 className="mx-auto max-w-2xl text-[28px] font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl">
              Comprehensive <span className="text-[#08afe8]">Technology<br className="sm:hidden" /> Solutions</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-[11px] leading-relaxed text-[#718697] sm:text-sm">
              From ready-to-deploy SaaS products to custom enterprise solutions, we have the expertise to transform your business.
            </p>
          </ScrollReveal>
        </section>

        <section id="products" className="px-6 py-10 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="text-center">
                <h2 className="text-xl font-bold sm:text-2xl">Our SaaS Products</h2>
                <p className="mt-2 text-[10px] text-[#718697]">Ready-to-deploy solutions for modern businesses</p>
              </div>
            </ScrollReveal>
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {products.map((product, index) => {
                return (
                  <ScrollReveal key={product.name} delay={index * 100}>
                    <Link href={product.href} className="group block h-full">
                    <article className="relative h-full rounded-lg border border-[#cfe1e9] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#08afe8] hover:shadow-[0_14px_35px_rgba(8,174,232,0.13)]">
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e0f6fd] text-[#08afe8]">
                          <product.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold">{product.name}</h3>
                          <p className="text-[9px] text-[#718697]">{product.description}</p>
                        </div>
                      </div>
                      <div className="mt-5 grid gap-x-5 gap-y-2 sm:grid-cols-2">
                        {product.features.map((feature) => <p key={feature} className="flex items-start gap-1 text-[9px] text-[#5f7587]"><Check className="mt-px h-2.5 w-2.5 shrink-0 text-[#08afe8]" /> {feature}</p>)}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5">{product.badges.map((badge) => <span key={badge} className="rounded bg-[#eaf8fc] px-2 py-1 text-[7px] font-medium text-[#25768e]">{badge}</span>)}</div>
                      <p className="mt-3 text-[9px] font-semibold text-[#17364f]">{product.price}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        <span className="rounded-md bg-[#08b7f2] px-4 py-2 text-[9px] font-bold text-white transition group-hover:bg-[#079fd5]">{product.action} <ArrowRight className="ml-1 inline h-3 w-3" /></span>
                        <span className="rounded-md border border-[#08789e] px-4 py-2 text-[9px] font-semibold text-[#075a7c]">View Pricing</span>
                      </div>
                    </article>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="custom" className="bg-[#f7fafc] px-6 py-14 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal><div className="text-center"><h2 className="text-xl font-bold sm:text-2xl">Custom Development Services</h2><p className="mt-2 text-[10px] text-[#718697]">Enterprise-grade solutions tailored to your needs</p></div></ScrollReveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {customServices.map(([title, text, Icon, tags], index) => (
                <ScrollReveal key={title} delay={index * 70}>
                  <Link href="/contact" className="group block h-full">
                  <article className="h-full rounded-lg border border-[#cfe1e9] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#08afe8] hover:shadow-[0_14px_30px_rgba(8,174,232,0.1)]">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e0f6fd] text-[#08afe8]"><Icon className="h-4 w-4" /></div>
                    <h3 className="mt-4 text-xs font-bold">{title}</h3>
                    <p className="mt-2 text-[9px] leading-relaxed text-[#718697]">{text}</p>
                    <div className="mt-3 flex flex-wrap gap-1">{tags.map((tag) => <span key={tag} className="rounded border border-[#d9e8ee] px-1.5 py-1 text-[7px] text-[#718697]">{tag}</span>)}</div>
                  </article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-14 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal><div className="text-center"><h2 className="text-xl font-bold sm:text-2xl">How We Work</h2><p className="mt-2 text-[10px] text-[#718697]">Flexible engagement models to suit your needs</p></div></ScrollReveal>
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {workModels.map(([title, text, timeline, investment, items], index) => (
                <ScrollReveal key={title} delay={index * 90}>
                  <article className={`h-full rounded-lg border p-5 ${index === 1 ? "border-[#056b86] bg-[#056b86] text-white" : "border-[#cfe1e9] bg-white"}`}>
                    <h3 className="text-sm font-bold">{title}</h3><p className={`mt-2 text-[9px] leading-relaxed ${index === 1 ? "text-white/80" : "text-[#718697]"}`}>{text}</p>
                    <p className="mt-4 text-[8px] font-semibold uppercase text-[#08afe8]">Timeline</p><p className="text-xs font-bold">{timeline}</p>
                    <p className="mt-3 text-[8px] font-semibold uppercase text-[#08afe8]">Investment</p><p className="text-xs font-bold">{investment}</p>
                    <ul className="mt-4 space-y-2">{items.map((item) => <li key={item} className="text-[9px]">◉ {item}</li>)}</ul>
                    <Link href="/contact" className={`mt-5 block rounded-md px-3 py-2 text-center text-[9px] font-bold ${index === 1 ? "bg-[#08b7f2] text-white" : "border border-[#08789e] text-[#075a7c]"}`}>{index === 1 ? "Get Quote" : index === 2 ? "Subscribe" : "Discuss Your Project"} →</Link>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7fafc] px-6 py-14 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal><div className="text-center"><h2 className="text-xl font-bold sm:text-2xl">Our Development Process</h2><p className="mt-2 text-[10px] text-[#718697]">A proven methodology for successful project delivery</p></div></ScrollReveal>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {process.map(([number, title, text], index) => (
                <ScrollReveal key={number} delay={index * 80}><article className="text-center"><div className="text-3xl font-bold text-[#b9eafa]">{number}</div><h3 className="mt-3 text-xs font-bold">{title}</h3><p className="mt-2 text-[9px] leading-relaxed text-[#718697]">{text}</p></article></ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#056b86] px-6 py-14 text-center text-white sm:py-20">
          <ScrollReveal><h2 className="text-2xl font-bold">Ready to Start Your Project?</h2><p className="mt-3 text-[10px] text-white/80">Let&apos;s discuss your requirements and find the perfect solution for your business.</p><Link href="/contact" className="mt-6 inline-flex rounded-md bg-[#08b7f2] px-5 py-2 text-[10px] font-bold hover:bg-[#079fd5]">Get a Free Consultation →</Link></ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
