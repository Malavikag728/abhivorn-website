"use client";

import { ArrowRight, Check, ChevronRight, Star, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import styles from "./projects.module.css";

const categories = ["All", "Healthcare", "Finance", "Enterprise", "HRMS"] as const;
type Category = (typeof categories)[number];

const projects = [
  {
    category: "Healthcare",
    timeline: "9 weeks",
    title: "How Elevate Rootz onboarded 100+ patients in their first month",
    challenge: "The wellness center had no patient management system, relied on manual appointment booking, and struggled with follow-up tracking.",
    solution: "We built a custom CRM with an integrated booking system, automated reminders, and a patient portal for seamless engagement.",
    metrics: [["100+", "Patients in Month 1"], ["80%", "Booking Time Reduction"], ["95%", "Patient Satisfaction"]],
    technologies: ["React", "Django", "PostgreSQL", "AWS"],
  },
  {
    category: "Finance",
    timeline: "8 weeks",
    title: "Achieving 98.5% data extraction accuracy for mortgage documents",
    challenge: "Manual processing of mortgage documents was time-consuming, error-prone, and created bottlenecks in the approval process.",
    solution: "We developed an OCR-powered document extraction system that automatically captures and validates data from mortgage applications.",
    metrics: [["98.5%", "Extraction Accuracy"], ["85%", "Time Reduction"], ["3x", "Processing Capacity"]],
    technologies: ["Python", "OCR", "AWS Lambda", "PostgreSQL"],
  },
  {
    category: "Healthcare",
    timeline: "In Progress",
    title: "Revolutionizing Patient Flow with QR-Based Management",
    challenge: "Clinics struggled with manual patient registration, long queues, and managing physical patient records efficiently.",
    solution: "We implemented VorQard, a comprehensive QR-based system for instant check-ins, digital medical records, and automated billing.",
    metrics: [["40%", "Wait Time Reduction"], ["100%", "Digital Data"], ["HIPAA", "Compliant"]],
    technologies: ["React", "Node.js", "PostgreSQL", "QR Integration"],
  },
  {
    category: "HRMS",
    timeline: "3 weeks",
    title: "Transforming HR operations for a leading insurance company",
    challenge: "Manual attendance tracking, no performance analytics, and compliance issues with labor regulations.",
    solution: "We deployed VORN HR with biometric integration, automated compliance tracking, and custom HR analytics dashboards.",
    metrics: [["90%", "Conflict Reduction"], ["70%", "Admin Time Saved"], ["100%", "Compliance Rate"]],
    technologies: ["VORN HR", "Biometric Integration", "Power BI"],
  },
  {
    category: "Enterprise",
    timeline: "Ongoing",
    title: "Internal AI-Powered Ticketing and Project Management System",
    challenge: "Managers complex development cycles and client issues across multiple projects without a centralized, intelligent tracking system.",
    solution: "We developed an internal pilot system that uses AI to categorize, prioritize, and assign development tickets based on team velocity and expertise.",
    metrics: [["100%", "Internal Adoption"], ["40%", "Issue Resolution Speed"], ["25%", "Planning Efficiency"]],
    technologies: ["React", "Node.js", "PostgreSQL", "AI/ML"],
  },
  {
    category: "Finance",
    timeline: "12 weeks",
    title: "Advanced Cost Tracking and Budget Optimization Platform",
    challenge: "A growing enterprise struggled with disparate cost centers and lacked a unified view of real-time expenditures vs budgets.",
    solution: "Built a robust finance dashboard that aggregates costs from multiple departments, providing real-time alerts and predictive budget forecasting.",
    metrics: [["15%", "Average Cost Savings"], ["Real-time", "Visibility"], ["100%", "Compliance Rate"]],
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
  },
] as const;

const testimonials = [
  ["“Abhivorn’s HRMS solution transformed our operations. We saw a 70% reduction in administrative work.”", "HR Director", "Insurance Company"],
  ["“The document extraction system reduced our processing time with 98.5% accuracy. It’s been a game-changer for our mortgage processing.”", "Operations Manager", "Mortgage Processing Firm"],
  ["“Professional team, excellent communication, and delivery on time. We highly recommend Abhivorn for healthcare solutions.”", "Founder", "Elevate Rootz"],
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const visibleProjects = useMemo(
    () => activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  return (
    <>
      <Navbar />
      <main className={`${styles.page} bg-white text-[#17364f]`}>
        <section className="px-5 pb-5 pt-12 text-center sm:px-6 sm:pb-8 sm:pt-16">
          <ScrollReveal>
            <h1 className="text-[28px] font-bold tracking-[-0.04em] sm:text-5xl">
              Real Results for <span className="text-[#08afe8]">Real Businesses</span>
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-[10px] text-[#718697] sm:text-sm">
              Case studies showcasing our expertise across industries
            </p>
          </ScrollReveal>
        </section>

        <section className="border-b border-[#d9e5eb] px-5 pb-3 sm:px-6">
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-1.5">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`${styles.filter} ${activeCategory === category ? styles.activeFilter : ""}`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="px-5 py-9 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-5xl space-y-4">
            {visibleProjects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 70}>
                <article className={styles.projectCard} tabIndex={0}>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={styles.category}>{project.category}</span>
                    <span className="text-[8px] text-[#718697]">Timeline: {project.timeline}</span>
                  </div>
                  <h2 className="mt-3 text-sm font-bold text-[#092c48] sm:text-lg">{project.title}</h2>
                  <div className="mt-3 grid gap-4 text-[8px] leading-relaxed text-[#718697] sm:grid-cols-2 sm:text-[10px]">
                    <div><h3 className="mb-1 font-bold text-[#17364f]">Challenge</h3><p>{project.challenge}</p></div>
                    <div><h3 className="mb-1 font-bold text-[#17364f]">Solution</h3><p>{project.solution}</p></div>
                  </div>
                  <div className={styles.results}>
                    <p className="flex items-center gap-1 text-[8px] font-semibold text-[#087f9c]"><TrendingUp className="h-2.5 w-2.5" /> Results</p>
                    <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                      {project.metrics.map(([value, label]) => <div key={label}><p className="text-sm font-bold text-[#00aeea] sm:text-lg">{value}</p><p className="text-[7px] text-[#718697] sm:text-[8px]">{label}</p></div>)}
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-1.5 text-[7px] text-[#718697]">
                    <span className="mr-1 font-semibold text-[#17364f]">Technologies:</span>
                    {project.technologies.map((technology) => <span key={technology} className={styles.tech}><Check className="h-2 w-2 text-[#079fd5]" />{technology}</span>)}
                  </div>
                  <Link href="/contact" className={styles.cardLink}>Discuss a similar project <ChevronRight className="h-3 w-3" /></Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="bg-[#f7fafc] px-5 py-12 sm:px-6 sm:py-16">
          <ScrollReveal>
            <div className="text-center"><h2 className="text-xl font-bold sm:text-2xl">What Our Clients Say</h2><p className="mt-2 text-[9px] text-[#718697]">Hear from businesses we’ve helped transform</p></div>
          </ScrollReveal>
          <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-3">
            {testimonials.map(([quote, role, company], index) => <ScrollReveal key={role} delay={index * 90}><article className={styles.testimonial}><div className="flex gap-0.5 text-[#00aeea]">{Array.from({ length: 5 }).map((_, starIndex) => <Star key={starIndex} className="h-3 w-3 fill-current" />)}</div><p className="mt-3 text-[9px] italic leading-relaxed text-[#526a7b]">{quote}</p><p className="mt-4 text-[8px] font-bold text-[#17364f]">{role}</p><p className="text-[8px] text-[#718697]">{company}</p></article></ScrollReveal>)}
          </div>
        </section>

        <section className="bg-[#056b86] px-5 py-12 text-center text-white sm:py-14">
          <ScrollReveal><h2 className="text-xl font-bold sm:text-2xl">Ready to See Similar Results?</h2><p className="mt-3 text-[9px] text-white/80">Let’s discuss how we can help transform your business operations.</p><Link href="/contact" className="mt-5 inline-flex items-center gap-1 rounded-md bg-[#08b7f2] px-5 py-2.5 text-[9px] font-bold transition hover:bg-[#079fd5]">Start Your Project <ArrowRight className="h-3 w-3" /></Link></ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
