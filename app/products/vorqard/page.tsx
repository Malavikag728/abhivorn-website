"use client";

import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  ChevronDown,
  FileHeart,
  HeartPulse,
  QrCode,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import styles from "./vorqard.module.css";

const capabilities = [
  ["Patient Management", "Comprehensive patient records with medical history, prescriptions, and treatment plans.", UsersRound],
  ["Smart Appointments", "QR-based check-in, automated scheduling, and real-time queue management.", CalendarDays],
  ["QR-Based Access", "Unique QR codes for patients enabling quick identification and record access.", QrCode],
  ["Analytics Dashboard", "Track patient flow, appointment trends, and operational metrics in real-time.", BarChart3],
  ["HIPAA Compliant", "Enterprise-grade security with encrypted data storage and access controls.", ShieldCheck],
  ["Billing & Invoicing", "Automated billing, insurance integration, and payment tracking.", FileHeart],
] as const;

const healthcareSettings = [
  ["Clinics & Wellness Centers", "Perfect for small to medium clinics looking to modernize their operations.", ["Appointment Booking", "Patient Records", "Billing"]],
  ["Hospitals & Multi-specialty", "Scalable solution for hospitals with multiple departments and high patient volume.", ["Department Management", "Bed Tracking", "Lab Integration"]],
  ["Diagnostic Centers", "Streamline sample collection, report generation, and patient communication.", ["Test Scheduling", "Report Delivery", "SMS Notifications"]],
] as const;

const faqs = [
  ["What makes VorQard different from other HMS solutions?", "VorQard combines QR-powered patient flow, digital records, appointment coordination, and analytics in one simple healthcare workspace."],
  ["Is VorQard HIPAA compliant?", "VorQard is designed with enterprise-grade access controls and encrypted data workflows to support compliant healthcare operations."],
  ["Can VorQard integrate with existing systems?", "Yes. Our team can connect VorQard to existing clinic, billing, and notification systems through supported integrations."],
  ["How long does implementation take?", "Most teams can begin using the core workflow in a few weeks with guided onboarding and configuration support."],
  ["Is there a mobile app for patients?", "The QR-first experience is designed for mobile access, making check-in and patient updates quick and convenient."],
];

const imageAssets = [
  "/images/healthcare.webp",
  "/images/qr1.jpeg",
  "/images/qr3.jpeg",
  "/images/qr2.jpeg",
  "/images/qr4.jpeg",
];

export default function VorqardPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [joined, setJoined] = useState(false);

  return (
    <>
      <Navbar />
      <main className={`${styles.page} bg-white text-[#17364f]`}>
        <section className="bg-[#e9fbfe] px-5 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16">
          <div className="mx-auto grid max-w-6xl items-center gap-9 lg:grid-cols-[1fr_1.02fr]">
            <ScrollReveal>
              <div>
                <div className="flex flex-wrap gap-1.5"><span className={styles.badge}>Beta Access</span><span className={styles.badge}>HIPAA Compliant</span><span className={styles.badge}>QR-Powered</span></div>
                <h1 className="mt-4 text-[28px] font-bold leading-[1.02] tracking-[-0.04em] sm:text-5xl">QR-Based Healthcare<br /><span className="text-[#08afe8]">Management System</span></h1>
                <p className="mt-4 max-w-md text-[10px] leading-relaxed text-[#718697] sm:text-sm">Revolutionize patient care with smart QR-based identification, streamlined appointments, and comprehensive healthcare analytics. Built for modern clinics and hospitals.</p>
                <div className="mt-5 flex flex-wrap gap-2"><Link href="/contact" className={styles.primaryButton}>Join Beta Program <ArrowRight className="h-3 w-3" /></Link><Link href="/contact" className={styles.secondaryButton}>Request Demo</Link></div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}><div className={styles.heroImage}><img src={imageAssets[0]} alt="VorQard healthcare management" onError={(event) => { event.currentTarget.src = "/images/about.jpeg"; }} /><span>VorQard<br /><small>QR-Powered Patient Management</small></span></div></ScrollReveal>
          </div>
        </section>

        <section className="px-5 py-12 sm:px-6 sm:py-16"><div className="mx-auto max-w-6xl"><ScrollReveal><div className="text-center"><h2 className="text-xl font-bold sm:text-2xl">Complete Healthcare Management</h2><p className="mt-2 text-[9px] text-[#718697]">Everything you need to run a modern healthcare facility efficiently</p></div></ScrollReveal><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{capabilities.map(([title, text, Icon], index) => <ScrollReveal key={title} delay={index * 70}><article className={styles.card}><div className={styles.cardIcon}><Icon className="h-4 w-4" /></div><h3 className="mt-3 text-[10px] font-bold">{title}</h3><p className="mt-2 text-[8px] leading-relaxed text-[#718697]">{text}</p></article></ScrollReveal>)}</div></div></section>

        <section className="bg-[#f7fafc] px-5 py-12 sm:px-6 sm:py-16"><div className="mx-auto max-w-6xl"><ScrollReveal><div className="text-center"><span className="text-[7px] font-semibold text-[#08afe8]">Transform Your Practice</span><h2 className="mt-1 text-xl font-bold sm:text-2xl">Why Choose VorQard?</h2><p className="mt-2 text-[9px] text-[#718697]">Transform your healthcare operations with measurable results</p></div></ScrollReveal><div className="mt-8 grid gap-9">{[["40% Reduction in Wait Times", "Smart queue management and QR-based check-ins eliminate bottlenecks at reception, reducing patient wait times significantly.", "40% faster patient flow", imageAssets[1]], ["Zero Paperwork", "Digital records, e-prescriptions, and automated documentation eliminate paper-based processes entirely.", "100% digital workflow", imageAssets[2]], ["Real-Time Patient Tracking", "Monitor patient journey from check-in to checkout with live status updates and notifications.", "Complete visibility", imageAssets[3]], ["Enhanced Patient Experience", "Patients can book appointments, access records, and receive reminders through our mobile-friendly platform.", "Patient satisfaction 60%+", imageAssets[4]]].map(([title, text, badge, image], index) => <ScrollReveal key={title} delay={index * 80} direction={index % 2 === 0 ? "left" : "right"}><div className={`${styles.story} ${index % 2 ? styles.storyReverse : ""}`}><div><h3 className="text-sm font-bold">{title}</h3><p className="mt-3 text-[9px] leading-relaxed text-[#718697]">{text}</p><span className={styles.storyBadge}>{badge}</span></div><img src={image} alt={title} onError={(event) => { event.currentTarget.src = "/images/about.jpeg"; }} /></div></ScrollReveal>)}</div></div></section>

        <section className="px-5 py-12 sm:px-6 sm:py-16"><div className="mx-auto max-w-6xl"><ScrollReveal><div className="text-center"><h2 className="text-xl font-bold sm:text-2xl">Built For Healthcare</h2><p className="mt-2 text-[9px] text-[#718697]">Tailored solutions for different healthcare settings</p></div></ScrollReveal><div className="mt-8 grid gap-3 sm:grid-cols-3">{healthcareSettings.map(([title, text, tags], index) => <ScrollReveal key={title} delay={index * 80}><article className={styles.setting}><HeartPulse className="h-4 w-4 text-[#08afe8]" /><h3 className="mt-3 text-[10px] font-bold">{title}</h3><p className="mt-2 text-[8px] leading-relaxed text-[#718697]">{text}</p><div className="mt-3 flex flex-wrap gap-1">{tags.map((tag) => <span key={tag} className={styles.tag}>{tag}</span>)}</div></article></ScrollReveal>)}</div></div></section>

        <section className="border-y border-[#d9e5eb] px-5 py-4 sm:px-6"><div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-2 text-[7px] text-[#718697]"><b className="mr-2 text-[#17364f]">Built with:</b>{["React", "Django", "PostgreSQL", "AWS", "Mobile Apps", "HIPAA Compliant"].map((item) => <span key={item} className={styles.tag}>{item}</span>)}</div></section>

        <section className="bg-[#e2f9fd] px-5 py-12 text-center sm:px-6 sm:py-16"><ScrollReveal><span className={styles.badge}>Limited Beta Access</span><h2 className="mt-3 text-xl font-bold sm:text-2xl">Be Among the First to Experience VorQard</h2><p className="mx-auto mt-3 max-w-lg text-[9px] text-[#718697]">Join our exclusive beta program and help shape the future of healthcare management. Get early access, priority support, and special founding member pricing.</p><form onSubmit={(event) => { event.preventDefault(); setJoined(true); }} className="mx-auto mt-5 flex max-w-sm gap-2"><input required type="email" placeholder="Enter your email" className={styles.emailInput} /><button type="submit" className={styles.primaryButton}>Join Beta <ArrowRight className="h-3 w-3" /></button></form>{joined && <p className="mt-3 text-[8px] font-semibold text-[#087f9c]">You’re on the list. We’ll be in touch soon.</p>}<p className="mt-2 text-[7px] text-[#718697]">Limited to 50 beta partners. No credit card required.</p></ScrollReveal></section>

        <section className="px-5 py-12 sm:px-6 sm:py-16"><ScrollReveal><div className="text-center"><h2 className="text-xl font-bold sm:text-2xl">Frequently Asked Questions</h2></div></ScrollReveal><div className="mx-auto mt-7 max-w-3xl space-y-2">{faqs.map(([question, answer], index) => <ScrollReveal key={question} delay={index * 60}><div className={styles.faq}><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span><ChevronDown className={`h-3 w-3 transition-transform ${openFaq === index ? "rotate-180" : ""}`} /></button>{openFaq === index && <p>{answer}</p>}</div></ScrollReveal>)}</div></section>

        <section className="bg-[#08aec8] px-5 py-12 text-center text-white sm:py-14"><ScrollReveal><h2 className="text-xl font-bold sm:text-2xl">Ready to Modernize Your Healthcare Facility?</h2><p className="mx-auto mt-3 max-w-lg text-[9px] text-white/85">Join our beta program and transform patient care with VorQard’s innovative QR-based system.</p><div className="mt-5 flex justify-center gap-2"><Link href="/contact" className={styles.lightButton}>Request Demo <ArrowRight className="h-3 w-3" /></Link><Link href="/contact" className={styles.ctaOutline}>Contact Sales</Link></div></ScrollReveal></section>
      </main>
      <Footer />
    </>
  );
}
