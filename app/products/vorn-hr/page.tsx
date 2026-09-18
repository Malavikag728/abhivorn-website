"use client";

import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  Clock3,
  DollarSign,
  FileCheck2,
  Headphones,
  LockKeyhole,
  Sparkles,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import styles from "./vorn-hr.module.css";

const modules = [
  ["Core HR", "Centralize every employee record and HR workflow.", UsersRound, ["Employee Database", "Org Chart", "Document Management", "Self-Service Portal"]],
  ["Time & Attendance", "Make attendance and shifts effortless.", Clock3, ["GPS Tracking", "Biometric Integration", "Shift Management", "Overtime Calculation"]],
  ["Payroll", "Run accurate payroll with confidence.", DollarSign, ["Tax Automation", "Direct Deposit", "Benefits Administration", "Statutory Compliance"]],
  ["Performance", "Keep teams aligned around meaningful goals.", BarChart3, ["Goal Setting", "360° Reviews", "Continuous Feedback", "Progress Reports"]],
  ["Compliance", "Stay ready with secure, auditable records.", FileCheck2, ["Policy Management", "Audit Trails", "Role-Based Access", "Secure Documents"]],
  ["Employee Experience", "Give people a better way to work.", Sparkles, ["Self-Service Tools", "Announcements", "Leave Requests", "Mobile Access"]],
] as const;

const pricing = [
  ["Starter Plan", "₹499", "Up to 10 employees", ["Employee Management", "Attendance Tracking", "Leave Management", "Employee Directory", "Basic Reports", "Email Support"]],
  ["Growth Plan", "₹1,499", "Up to 25 employees", ["Everything in Starter", "Payroll Management", "Payslip Generation", "Performance Tracking", "Employee Self-Service", "Email Notifications", "150 AI Credits"], "BEST VALUE"],
  ["Business Plan", "₹3,499", "Up to 50 employees", ["Everything in Growth", "Advanced HR Analytics", "Role-Based Access Control", "HR Insights Dashboard", "Priority Support", "500 AI Credits"]],
] as const;

const faqs = [
  ["How long does implementation take?", "Most teams can be fully onboarded in one to two weeks with guided setup and data migration support."],
  ["Do you offer training?", "Yes. Every plan includes guided onboarding, product training, and help documentation for your team."],
  ["Can I integrate with our existing systems?", "VORN HR integrates with common payroll, attendance, and business systems through supported connectors."],
  ["Is our data secure?", "Your data is protected with role-based access, secure storage, backups, and audit-friendly controls."],
  ["What happens if we need customization?", "Our team can scope custom workflows, integrations, and reporting for growing organizations."],
];

export default function VornHrPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className={`${styles.page} bg-white text-[#17364f]`}>
        <section className="px-5 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
            <ScrollReveal>
              <div>
                <span className={styles.badge}><Sparkles className="h-3 w-3" /> Smart HR Automation</span>
                <h1 className="mt-4 text-[30px] font-bold leading-[1.02] tracking-[-0.05em] sm:text-6xl">Simplifying <span className="text-[#08afe8]">HR<br />Management</span></h1>
                <p className="mt-4 max-w-md text-[10px] leading-relaxed text-[#718697] sm:text-sm">Empower your workforce with an intelligent, data-driven HR platform. From payroll to performance, we automate it all with precision and ease.</p>
                <div className="mt-5 flex flex-wrap gap-2"><Link href="/contact" className={styles.primaryButton}>Get Started Free <ArrowRight className="h-3 w-3" /></Link><Link href="/contact" className={styles.secondaryButton}>Book Demo</Link></div>
                <div className="mt-5 flex items-center gap-1 text-[8px] text-[#718697]"><span className="text-[#ffc400]">★★★★★</span> 5+ Companies</div>
                <div className="mt-4 grid max-w-sm grid-cols-3 text-center"><div><b className="text-sm">200+</b><p className="text-[7px] text-[#718697]">Active Users</p></div><div><b className="text-sm">99.9%</b><p className="text-[7px] text-[#718697]">Uptime SLA</p></div><div><b className="text-sm">4.9/5</b><p className="text-[7px] text-[#718697]">Rating</p></div></div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={130}>
              <div className={styles.videoCard}><video autoPlay muted loop playsInline poster="/images/about.jpeg"><source src="/videos/vornhr_video-C1yqt6XA.mp4" type="video/mp4" /></video><span>Explore More <ArrowRight className="h-2.5 w-2.5" /></span></div>
            </ScrollReveal>
          </div>
        </section>

        <section className="border-y border-[#d9e5eb] bg-[#f7fafc] px-5 py-5 sm:px-6">
          <div className="mx-auto grid max-w-6xl grid-cols-3 gap-4 sm:grid-cols-6">{[["Smart Recruitment", UsersRound], ["Time Tracking", Clock3], ["Payroll Access", DollarSign], ["Performance", BarChart3], ["Compliance", FileCheck2], ["Mobile App", Headphones]].map(([title, Icon], index) => <ScrollReveal key={title as string} delay={index * 50}><div className="text-center"><div className={styles.featureIcon}><Icon className="h-3.5 w-3.5" /></div><h3 className="mt-2 text-[7px] font-bold">{title as string}</h3><p className="mt-1 hidden text-[6px] text-[#718697] sm:block">Simple, powerful workflows</p></div></ScrollReveal>)}</div>
        </section>

        <section className="px-5 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal><div className="text-center"><span className="text-[7px] font-semibold text-[#08afe8]">Comprehensive Solution</span><h2 className="mt-1 text-xl font-bold sm:text-2xl">Everything You Need in One Platform</h2><p className="mx-auto mt-2 max-w-lg text-[9px] text-[#718697]">From core HR management to advanced analytics, our platform provides a complete suite of tools to streamline your entire workforce operations.</p></div></ScrollReveal>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{modules.map(([title, text, Icon, items], index) => <ScrollReveal key={title} delay={index * 70}><article className={styles.moduleCard}><div className={styles.moduleIcon}><Icon className="h-4 w-4" /></div><h3 className="mt-3 text-[10px] font-bold">{title}</h3><p className="mt-1 text-[8px] text-[#718697]">{text}</p><ul className="mt-3 space-y-1">{items.map((item) => <li key={item} className="flex items-center gap-1 text-[7px] text-[#718697]"><Check className="h-2.5 w-2.5 text-[#079fd5]" />{item}</li>)}</ul></article></ScrollReveal>)}</div>
          </div>
        </section>

        <section className="bg-[#f7fafc] px-5 py-12 text-center sm:px-6 sm:py-16"><ScrollReveal><span className="text-[7px] font-semibold text-[#08afe8]">Proven Results</span><h2 className="mt-1 text-xl font-bold sm:text-2xl">Industry-Leading Performance</h2><div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-7 sm:grid-cols-4">{[["70%", "Admin Time Reduced", "Average reduction in manual HR tasks"], ["99.9%", "Payroll Accuracy", "Accuracy rate across all clients"], ["60%", "Ticket Volume Down", "Reduction in HR support tickets"], ["92%", "Employee Satisfaction", "Improvement in employee experience"]].map(([value, label, text]) => <div key={label}><b className="text-2xl text-[#00aeea] sm:text-3xl">{value}</b><h3 className="mt-1 text-[8px] font-bold">{label}</h3><p className="mt-1 text-[7px] text-[#718697]">{text}</p></div>)}</div></ScrollReveal></section>

        <section className="px-5 py-12 sm:px-6 sm:py-16"><div className="mx-auto max-w-6xl"><ScrollReveal><div className="text-center"><h2 className="text-xl font-bold sm:text-2xl">Simple, Transparent Pricing</h2><p className="mt-2 text-[9px] text-[#718697]">Choose the plan that fits your needs</p></div></ScrollReveal><div className="mt-8 grid gap-3 lg:grid-cols-4">{pricing.map(([name, price, limit, items, flag], index) => <ScrollReveal key={name} delay={index * 80}><article className={`${styles.priceCard} ${flag ? styles.featuredPrice : ""}`}>{flag && <span className={styles.bestValue}>{flag}</span>}<h3 className="text-[10px] font-bold">{name}</h3><p className="mt-2 text-2xl font-bold">{price}<small className="text-[8px] font-normal">/month</small></p><p className="text-[7px] text-[#718697]">{limit}</p><ul className="mt-4 space-y-2">{items.map((item) => <li key={item} className="flex gap-1 text-[7px] text-[#718697]"><Check className="h-2.5 w-2.5 shrink-0 text-[#079fd5]" />{item}</li>)}</ul><Link href="/contact" className={styles.priceButton}>{flag ? "Start 7-Day Trial" : "Start 7-Day Trial"} <ArrowRight className="h-2.5 w-2.5" /></Link></article></ScrollReveal>)}<ScrollReveal delay={260}><article className={styles.enterpriseCard}><LockKeyhole className="h-6 w-6 text-[#08afe8]" /><h3 className="mt-4 text-sm font-bold">Enterprise</h3><p className="mt-3 text-[8px] leading-relaxed text-[#718697]">Tailored for teams with 50+ employees, custom workflows, dedicated account manager, and API access.</p><Link href="/contact" className={styles.enterpriseButton}>Contact Sales <ArrowRight className="h-2.5 w-2.5" /></Link></article></ScrollReveal></div><p className="mt-5 text-center text-[8px] text-[#718697]">All plans include free implementation support</p></div></section>

        <section className="bg-[#f7fafc] px-5 py-12 sm:px-6 sm:py-16"><ScrollReveal><div className="text-center"><h2 className="text-xl font-bold sm:text-2xl">Frequently Asked Questions</h2></div></ScrollReveal><div className="mx-auto mt-7 max-w-3xl space-y-2">{faqs.map(([question, answer], index) => <ScrollReveal key={question} delay={index * 60}><div className={styles.faq}><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span><ChevronDown className={`h-3 w-3 transition-transform ${openFaq === index ? "rotate-180" : ""}`} /></button>{openFaq === index && <p>{answer}</p>}</div></ScrollReveal>)}</div></section>

        <section className="bg-[#056b86] px-5 py-12 text-center text-white sm:py-14"><ScrollReveal><h2 className="text-xl font-bold sm:text-2xl">Ready to Transform Your HR Processes?</h2><p className="mx-auto mt-3 max-w-md text-[9px] text-white/80">Join 50+ companies already using VORN HR to manage their workforce efficiently.</p><div className="mt-5 flex justify-center gap-2"><Link href="/contact" className={styles.primaryButton}>Book a Demo <ArrowRight className="h-3 w-3" /></Link><Link href="/contact" className={styles.ctaOutline}>Start Free Trial</Link></div></ScrollReveal></section>
      </main>
      <Footer />
    </>
  );
}
