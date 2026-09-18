"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Code2,
  Globe2,
  GraduationCap,
  Upload,
} from "lucide-react";
import { useState } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import styles from "./careers.module.css";

const benefits = [
  ["Learning & Growth", "Continuous learning budget, mentorship from founders, and clear career progression paths.", GraduationCap],
  ["Modern Tech Stack", "Work with React, Django, PostgreSQL, AWS, and the latest tools in the industry.", Code2],
  ["Remote-Friendly", "Flexible working hours and the ability to work from anywhere in India.", Globe2],
  ["Impact & Ownership", "Own your projects end-to-end with direct customer interaction and real business impact.", BriefcaseBusiness],
] as const;

const openings = [
  { title: "Full Stack Developer Intern", type: "Full-time", location: "Hyderabad / Remote", responsibilities: ["Build and maintain web applications using React and Django", "Design and optimize PostgreSQL databases", "Collaborate with product team on new features", "Participate in code reviews and technical discussions"], tags: ["React", "Django", "PostgreSQL", "TypeScript", "AWS"] },
  { title: "Frontend Developer Intern", type: "Full-time", location: "Hyderabad", responsibilities: ["Develop responsive user interfaces with React", "Implement pixel-perfect designs from Figma", "Optimize application performance", "Write clean, maintainable code"], tags: ["React", "TypeScript", "CSS", "Figma", "Jest"] },
  { title: "Business Development Associate Intern", type: "Full-time", location: "Hyderabad", responsibilities: ["Generate and qualify leads for VORN HR", "Conduct product demos to potential clients", "Build relationships with key stakeholders", "Meet monthly sales targets"], tags: ["Sales", "Communication", "CRM", "Presentation Skills"] },
  { title: "QA Engineer Intern", type: "Full-time", location: "Hyderabad / Remote", responsibilities: ["Design and execute test cases", "Perform functional and regression testing", "Report and track bugs", "Collaborate with development team"], tags: ["Manual Testing", "Selenium", "API Testing", "Jira"] },
  { title: "Software Development Intern", type: "Internship", location: "Hyderabad", responsibilities: ["Learn and contribute to real projects", "Work closely with senior developers", "Participate in daily standups", "Build features under mentorship"], tags: ["Python", "Django", "Problem Solving", "Quick Learner"] },
] as const;

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function applyForRole(title: string) {
    setSelectedRole(title);
    setSubmitted(false);
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Navbar />
      <main className={`${styles.page} bg-white text-[#17364f]`}>
        <section className="px-5 pb-12 pt-12 text-center sm:px-6 sm:pb-16 sm:pt-16">
          <ScrollReveal>
            <h1 className="text-[28px] font-bold tracking-[-0.04em] sm:text-5xl">Join Our <span className="text-[#08afe8]">Growing Team</span></h1>
            <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-relaxed text-[#718697] sm:text-lg">Build the future of enterprise software with us. We’re looking for passionate individuals who want to make a real impact.</p>
          </ScrollReveal>
          <div className="mx-auto mt-14 max-w-5xl">
            <ScrollReveal><h2 className="text-2xl font-bold tracking-[-0.02em] sm:text-3xl">Why Work With Us?</h2><p className="mt-3 text-base text-[#718697] sm:text-lg">Benefits that matter for your career and life</p></ScrollReveal>
            <div className="mt-8 grid gap-7 sm:grid-cols-4">
              {benefits.map(([title, text, Icon], index) => <ScrollReveal key={title} delay={index * 80}><article className={styles.benefit}><div className={styles.icon}><Icon className="h-4 w-4" /></div><h3 className="mt-3 text-[14px] font-bold">{title}</h3><p className="mt-2 text-[12px] leading-relaxed text-[#718697]">{text}</p></article></ScrollReveal>)}
            </div>
          </div>
        </section>

        <section className="bg-[#f7fafc] px-5 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal><div className="text-center"><h2 className="text-2xl font-bold tracking-[-0.02em] sm:text-3xl">Open Positions</h2><p className="mt-2 text-[14px] text-[#718697]">Find your perfect role and apply today</p></div></ScrollReveal>
            <div className="mt-8 space-y-3">
              {openings.map((job, index) => <ScrollReveal key={job.title} delay={index * 70}><article className={styles.jobCard}><div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"><div><h3 className="text-[15px] font-bold text-[#092c48] sm:text-lg">{job.title}</h3><p className="mt-1 text-[12px] text-[#718697]">{job.type} <span className="mx-1">•</span> {job.location}</p></div><button type="button" onClick={() => applyForRole(job.title)} className={styles.applyButton}>Apply Now <ArrowRight className="h-2.5 w-2.5" /></button></div><h4 className="mt-3 text-[12px] font-bold text-[#17364f]">Responsibilities:</h4><ul className="mt-1 space-y-0.5">{job.responsibilities.map((item) => <li key={item} className="flex gap-1 text-[12px] text-[#718697]"><CheckCircle2 className="mt-px h-2.5 w-2.5 shrink-0 text-[#08afe8]" />{item}</li>)}</ul><div className="mt-2 flex flex-wrap gap-1">{job.tags.map((tag) => <span key={tag} className={styles.tag}>{tag}</span>)}</div></article></ScrollReveal>)}
            </div>
          </div>
        </section>

        <section className="px-5 py-12 text-center sm:px-6 sm:py-16">
          <ScrollReveal><h2 className="text-2xl font-bold tracking-[-0.02em] sm:text-3xl">How to Apply</h2><p className="mt-2 text-[14px] text-[#718697]">Our simple 3-step hiring process</p></ScrollReveal>
          <div className="mx-auto mt-8 grid max-w-3xl gap-8 sm:grid-cols-3">{[["1", "Submit Application", "Fill out the form or email your CV to careers@abhivorn.com"], ["2", "Technical Interview", "Code review or project discussion based on your role"], ["3", "Final Round", "Meet the founders and discuss culture fit"]].map(([number, title, text], index) => <ScrollReveal key={number} delay={index * 90}><article><div className={styles.step}>{number}</div><h3 className="mt-2 text-[14px] font-bold">{title}</h3><p className="mx-auto mt-1 max-w-[160px] text-[12px] leading-relaxed text-[#718697]">{text}</p></article></ScrollReveal>)}</div>
          <p className="mt-6 text-[13px] text-[#718697]">Average timeline: <strong className="text-[#17364f]">1-2 weeks</strong></p>
        </section>

        <section id="apply" className="bg-[#f7fafc] px-5 py-12 sm:px-6 sm:py-16">
          <ScrollReveal><div className="text-center"><h2 className="text-2xl font-bold tracking-[-0.02em] sm:text-3xl">Apply Now</h2><p className="mt-2 text-[14px] text-[#718697]">Take the first step towards your new career</p></div></ScrollReveal>
          <ScrollReveal className="mx-auto mt-8 max-w-lg">
            <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className={styles.form}>
              {submitted && <div className="mb-3 rounded border border-green-200 bg-green-50 p-2 text-[14px] text-green-700">Application received. We’ll be in touch soon.</div>}
              <div className="grid gap-3 sm:grid-cols-2">{[["Full Name *", "Your full name", "text"], ["Email *", "you@email.com", "email"], ["Phone *", "+91 9876543210", "tel"]].map(([label, placeholder, type]) => <label key={label} className={styles.label}>{label}<input required type={type} placeholder={placeholder} className={styles.input} /></label>)}<label className={styles.label}>Position *<select required value={selectedRole} onChange={(event) => setSelectedRole(event.target.value)} className={styles.input}><option value="">Select a position</option>{openings.map((job) => <option key={job.title}>{job.title}</option>)}</select><ChevronDown className={styles.selectIcon} /></label><label className={styles.label}>Years of Experience<input required placeholder="e.g., 2" className={styles.input} /></label><label className={styles.label}>Portfolio / GitHub<input placeholder="https://github.com/username" className={styles.input} /></label></div>
              <label className={`${styles.label} mt-3`}>Resume *<span className={styles.upload}><Upload className="h-4 w-4 text-[#718697]" /><span>Click to upload or drag and drop<br /><small>PDF, DOC up to 5MB</small></span><input required type="file" accept=".pdf,.doc,.docx" /></span></label>
              <label className={`${styles.label} mt-3`}>Cover Letter<textarea placeholder="Tell us why you’d be a great fit..." className={`${styles.input} h-16 resize-y`} /></label>
              <button type="submit" className={`${styles.submit} mt-3`}>Submit Application <ArrowRight className="h-3 w-3" /></button>
            </form>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
