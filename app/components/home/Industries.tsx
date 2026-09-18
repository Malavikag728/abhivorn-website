import IconBox from "@/components/ui/IconBox";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { industries } from "@/data/home";

export default function Industries() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Industries We Serve"
            subtitle="Custom solutions for every sector"
          />
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry, index) => (
            <ScrollReveal key={industry.name} delay={index * 75}>
              <article className="flex min-h-[132px] flex-col items-center justify-center rounded-xl border border-[#d8e5ec] bg-white p-4 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg">
                <IconBox icon={industry.icon} size="sm" />

                <p className="mt-3 text-xs font-semibold text-[#214158] sm:text-sm">
                  {industry.name}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}