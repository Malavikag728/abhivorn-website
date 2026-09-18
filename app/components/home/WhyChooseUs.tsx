import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/data/home";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f7fafc] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Why Choose Abhivorn"
            subtitle="Your trusted software development partner"
          />
        </ScrollReveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 90}>
              <article className="h-full rounded-xl border border-[#d8e5ec] bg-white px-5 py-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg">
                <p className="text-2xl font-bold tracking-tight text-[#0caee7] sm:text-3xl">
                  {item.value}
                </p>

                <h3 className="mt-2 text-sm font-bold text-[#214158] sm:text-base">
                  {item.title}
                </h3>

                <p className="mx-auto mt-2 max-w-[190px] text-xs leading-relaxed text-[#7890a0]">
                  {item.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}