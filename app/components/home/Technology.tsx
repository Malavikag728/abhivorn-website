import IconBox from "@/components/ui/IconBox";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { technologies } from "@/data/home";

export default function Technology() {
  return (
    <section className="bg-[#f7fafc] py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Built with Modern Technology"
            subtitle="Enterprise-grade tech stack for reliability and performance"
          />
        </ScrollReveal>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((technology, index) => (
            <ScrollReveal key={technology.name} delay={index * 60}>
              <div className="flex min-h-[76px] items-center gap-3 rounded-xl border border-[#d4e2e9] bg-white px-4 py-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-md">
                <IconBox icon={technology.icon} size="sm" />

                <span className="text-sm font-semibold text-[#17364f] sm:text-base">
                  {technology.name}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}