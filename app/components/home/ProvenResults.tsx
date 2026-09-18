import { BarChart3, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/home";

export default function ProvenResults() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Proven Results"
            subtitle="Outcomes that help businesses grow faster and operate smarter"
          />
        </ScrollReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 90}>
              <article className="flex h-full flex-col rounded-2xl border border-[#d8e5ec] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">
                <span className="inline-flex w-fit rounded-full bg-[#e6f9ff] px-3 py-1.5 text-xs font-semibold text-[#079fd5]">
                  {project.category}
                </span>

                <h3 className="mt-6 text-lg font-bold text-[#17364f]">
                  {project.title}
                </h3>

                <ul className="mt-5 space-y-4">
                  {project.metrics.map((metric) => (
                    <li
                      key={metric}
                      className={`flex items-start gap-2 text-sm leading-relaxed ${metric === project.metrics[1] ? "text-[#00aeef]" : "text-[#5f7587]"}`}
                    >
                      {metric === project.metrics[1] ? (
                        <BarChart3 className="mt-0.5 h-5 w-5 shrink-0 text-[#00aeef]" strokeWidth={1.8} />
                      ) : (
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#9cb0bd]" />
                      )}
                      {metric}
                    </li>
                  ))}
                </ul>

                <a href="/projects" className="mt-auto flex items-center gap-2 pt-8 text-sm font-semibold text-[#075a7c] transition hover:text-[#00aeef]">
                  Read Case Study <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
