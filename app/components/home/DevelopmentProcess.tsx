import { developmentProcess } from "@/data/home";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function DevelopmentProcess() {
  return (
    <section className="bg-[#f7fafc] pb-16 pt-2 sm:pb-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Our Development Process"
            subtitle="Transparent and agile methodology"
          />
        </ScrollReveal>

        <div className="mt-9 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {developmentProcess.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 80}>
              <article className="h-full rounded-xl border border-[#d4e2e9] bg-white px-4 py-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <span className="text-lg font-semibold text-[#0caee7]">
                  {step.number}
                </span>

                <h3 className="mt-3 text-sm font-bold text-[#1d3b51]">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-[#7890a0]">
                  {step.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}