import { ArrowRight, CheckCircle2 } from "lucide-react";

import { solutions } from "@/data/home";
import Button from "@/components/ui/Button";
import IconBox from "@/components/ui/IconBox";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Solutions() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Our Solutions"
            subtitle="Built for modern businesses with enterprise-grade security and scalability"
          />
        </ScrollReveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <ScrollReveal key={solution.title} delay={index * 90}>
              <article
                className="relative h-full rounded-xl border border-[#d5e4eb] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg sm:p-7"
              >
                {solution.badge && (
                  <span className="absolute right-5 top-5 rounded-full bg-[#e7f8fc] px-3 py-1 text-xs font-semibold text-[#08a9df]">
                    {solution.badge}
                  </span>
                )}

                <IconBox icon={solution.icon} />

                <h3 className="mt-5 text-lg font-bold text-[#18364d]">
                  {solution.title}
                </h3>

                <p className="mt-2 text-sm text-[#718697]">
                  {solution.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {solution.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-[#5f7587]"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#08afe8]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href={solution.href}
                  variant="secondary"
                  className="mt-7 w-full border-[#007ab0] text-sm text-[#075a7c]"
                >
                  {solution.cta}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}