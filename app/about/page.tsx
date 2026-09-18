import {
  Award,
  CalendarDays,
  Lightbulb,
  ShieldCheck,
  Target,
} from "lucide-react";
import Link from "next/link";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import styles from "./about.module.css";

const values = [
  ["Excellence", "We strive for the highest quality in every line of code and every user interaction.", Target],
  ["Innovation", "We embrace new technologies and creative solutions to solve complex problems.", Lightbulb],
  ["Integrity", "We build trust through transparency, honesty, and ethical business practices.", ShieldCheck],
  ["Ownership", "We take full responsibility for our work and deliver on our commitments.", Award],
] as const;

const milestones = [
  ["Oct 2025", "Company Founded", "Abhivorn Technologies Pvt Ltd established in Hyderabad"],
  ["Nov 2025", "First HRMS Deployment", "Successfully deployed VORN HR for the first client"],
  ["Dec 2025", "5 Companies Onboarded", "Rapid growth with multiple enterprise clients"],
  ["Jan 2026", "5,000+ Users Milestone", "Platform scaling with high user adoption"],
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className={`${styles.page} bg-white text-[#17364f]`}>
        <section className="px-6 pb-16 pt-14 text-center sm:pb-20 sm:pt-16">
          <ScrollReveal>
            <h1 className="mx-auto max-w-2xl text-3xl font-bold leading-tight sm:text-5xl">
              Building the Future of <span className="text-[#08afe8]">Enterprise Software</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-xs leading-relaxed text-[#718697] sm:text-sm">
              Founded in 2025, headquartered in Hyderabad. We&apos;re an MSME-registered software
              company specializing in HR and healthcare solutions.
            </p>
          </ScrollReveal>
        </section>

        <section className="px-6 py-10 sm:py-16">
          <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <h2 className="text-xl font-bold sm:text-2xl">Our Story</h2>
                <p className="mt-4 text-xs leading-relaxed text-[#718697]">
                  Abhivorn Technologies was founded with a clear vision: to make enterprise-grade
                  software accessible to businesses of all sizes across India.
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[#718697]">
                  Starting with our flagship product VORN HR, we&apos;ve helped companies streamline
                  their HR operations, reduce administrative overhead, and focus on what matters —
                  growth, service quality, and customer trust.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#e8f9fe] px-3 py-1 text-[9px] font-semibold text-[#078bb9]">MSME Registered</span>
                  <span className="rounded-full bg-[#e8f9fe] px-3 py-1 text-[9px] font-semibold text-[#078bb9]">10+ Team Members</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={120}>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <video
                  src="/videos/vornhr_video-C1yqt6XA.mp4"
                  width={720}
                  height={470}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-[260px] w-full object-cover sm:h-[330px]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#102d45]/90 to-transparent p-5 pt-12 text-white">
                  <p className="text-sm font-bold">Abhivorn Technologies</p>
                  <p className="text-[10px] text-white/80">Our Hyderabad Development Center</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="bg-[#f7fafc] px-6 py-14 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="text-center">
                <h2 className="text-xl font-bold sm:text-2xl">Our Core Values</h2>
                <p className="mt-2 text-[10px] text-[#718697]">The principles that guide everything we do</p>
              </div>
            </ScrollReveal>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map(([title, text, Icon], index) => (
                <ScrollReveal key={title} delay={index * 80}>
                  <article className="text-center">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-[#e0f6fd] text-[#08afe8]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3 text-xs font-bold">{title}</h3>
                    <p className="mt-2 text-[9px] leading-relaxed text-[#718697]">{text}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7fafc] px-6 pb-16 sm:pb-20">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="text-center">
                <h2 className="text-xl font-bold sm:text-2xl">Our Journey</h2>
                <p className="mt-2 text-[10px] text-[#718697]">Key milestones in our growth story</p>
              </div>
            </ScrollReveal>
            <div className="relative mt-10 space-y-5 before:absolute before:bottom-4 before:left-[15px] before:top-4 before:w-px before:bg-[#cfe5ed]">
              {milestones.map(([date, title, text], index) => (
                <ScrollReveal key={title} delay={index * 80}>
                  <article className="relative flex gap-4">
                    <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e0f6fd] text-[#08afe8]">
                      <CalendarDays className="h-4 w-4" />
                    </div>
                    <div className="pt-0.5">
                      <p className="text-[9px] text-[#08afe8]">{date}</p>
                      <h3 className="mt-1 text-xs font-bold">{title}</h3>
                      <p className="mt-1 text-[9px] text-[#718697]">{text}</p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#056b86] px-6 py-14 text-center text-white sm:py-20">
          <ScrollReveal>
            <h2 className="text-2xl font-bold">Want to Join Our Team?</h2>
            <p className="mx-auto mt-3 max-w-md text-[10px] leading-relaxed text-white/80">
              We&apos;re always looking for talented individuals to help us build the future of enterprise software.
            </p>
            <Link href="/careers" className="mt-6 inline-flex rounded-md bg-[#08b7f2] px-5 py-2 text-[10px] font-bold transition hover:bg-[#079fd5]">
              View Open Positions
            </Link>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
