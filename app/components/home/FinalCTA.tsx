import Link from "next/link";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FinalCTA() {
  return (
    <section className="bg-[#087b99] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        

        <ScrollReveal delay={120}>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
           Ready to transform your business?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cyan-50/80 sm:text-base">
            Join 10+ companies already using our solutions to streamline operations and boost productivity.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-cyan-400"
            >
              Schedule a Demo
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}