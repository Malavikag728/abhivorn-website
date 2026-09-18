"use client";

import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Plus,
} from "lucide-react";
import { useState } from "react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import styles from "./contact.module.css";

const faqs = [
  ["What industries do you serve?", "We build solutions for healthcare, finance, HR, and modern enterprise teams."],
  ["Do you offer free trials?", "Yes. We can arrange a product walkthrough and trial based on your needs."],
  ["What is your typical project timeline?", "Most projects launch in 6–12 weeks, depending on scope and integrations."],
  ["Do you provide ongoing support?", "Every engagement includes launch support, maintenance, and an ongoing improvement path."],
  ["Can you integrate with existing systems?", "Yes. We connect with existing tools, data sources, and internal workflows."],
  ["What are your pricing models?", "We offer product subscriptions and scoped project engagements tailored to your goals."],
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sent, setSent] = useState(false);

  return (
    <>
      <Navbar />
      <main className={`${styles.page} bg-white text-[#17364f]`}>
        <section className="px-5 pb-12 pt-12 text-center sm:px-6 sm:pb-16 sm:pt-16">
          <ScrollReveal>
            <h1 className="text-[28px] font-bold tracking-[-0.04em] sm:text-5xl">Let&apos;s Build Something <span className="text-[#08afe8]">Great Together</span></h1>
            <p className="mx-auto mt-3 max-w-xl text-base text-[#718697] sm:text-lg">Get in touch with our team. We typically respond within 24 hours.</p>
          </ScrollReveal>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 text-left lg:grid-cols-[1fr_1.05fr]">
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <div className="mt-5 space-y-4">
                  {[
                    [Mail, "General Inquiries", "hello@abhivorn.com"],
                    [Phone, "Phone", "+91 9966629766"],
                    [MapPin, "Office (HITEC City)", "Cyber Towers - HITEC City, Hyderabad"],
                    [MapPin, "Office (Kukatpally)", "KPHB, Hyderabad 500072"],
                    [Clock3, "Business Hours", "Mon-Fri: 9 AM - 6 PM IST"],
                  ].map(([Icon, label, value]) => <div key={label as string} className="flex gap-3"><span className={styles.contactIcon}><Icon className="h-3.5 w-3.5" /></span><div><p className="text-[13px] text-[#718697]">{label as string}</p><p className="mt-0.5 text-[14px] text-[#17364f]">{value as string}</p></div></div>)}
                </div>
                <div className="mt-6 border-t border-[#d9e5eb] pt-4"><h3 className="text-lg font-bold">Product-Specific Contact</h3><div className="mt-3 space-y-2"><div className={styles.productContact}><b>VORN HR Product</b><span>hr@abhivorn.com · www.vornhr.com</span></div><div className={styles.productContact}><b>VorQard (Healthcare)</b><span>support@vorqard.com · www.vorqard.com</span></div></div></div>
                <div className={styles.response}><Clock3 className="h-3 w-3" /><span><b>Response Time</b><br />We aim to respond to all inquiries within 24 hours during business days.</span></div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <form onSubmit={(event) => { event.preventDefault(); setSent(true); }} className={styles.form}>
                <h2 className="text-2xl font-bold">Send us a message</h2>
                {sent && <p className="mt-2 rounded bg-green-50 p-2 text-[13px] text-green-700">Thanks! Your message has been sent successfully.</p>}
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <label className={styles.label}>Name *<input required className={styles.input} placeholder="Your name" /></label>
                  <label className={styles.label}>Email *<input required type="email" className={styles.input} placeholder="you@company.com" /></label>
                  <label className={styles.label}>Phone<input className={styles.input} placeholder="+91 9876543210" /></label>
                  <label className={styles.label}>Company<input className={styles.input} placeholder="Your company" /></label>
                  <label className={`${styles.label} sm:col-span-2`}>Inquiry Type *<select required className={styles.input} defaultValue=""><option value="" disabled>Select an option</option><option>Product Demo</option><option>Custom Development</option><option>Partnership</option><option>General Inquiry</option></select></label>
                  <label className={`${styles.label} sm:col-span-2`}>Message *<textarea required rows={4} className={styles.input} placeholder="Tell us about your project or inquiry..." /></label>
                </div>
                <label className="mt-3 flex items-start gap-1 text-[12px] text-[#718697]"><input type="checkbox" required className="mt-px" /> I agree to be contacted by Abhivorn Technologies regarding my inquiry.</label>
                <button type="submit" className={styles.submit}>Send Message <ArrowRight className="h-3 w-3" /></button>
              </form>
            </ScrollReveal>
          </div>
        </section>

        <section className="bg-[#f7fafc] px-5 py-12 sm:px-6 sm:py-16">
          <ScrollReveal><div className="text-center"><h2 className="text-2xl font-bold tracking-[-0.02em] sm:text-3xl">Frequently Asked Questions</h2><p className="mt-2 text-[14px] text-[#718697]">Quick answers to common questions</p></div></ScrollReveal>
          <div className="mx-auto mt-8 max-w-3xl space-y-2">{faqs.map(([question, answer], index) => <ScrollReveal key={question} delay={index * 50}><div className={styles.faq}><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span>{openFaq === index ? <Plus className="h-3 w-3 rotate-45" /> : <Plus className="h-3 w-3" />}</button>{openFaq === index && <p>{answer}</p>}</div></ScrollReveal>)}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
