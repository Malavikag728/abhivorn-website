import ScrollReveal from "@/components/ui/ScrollReveal";

interface PageIntroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function PageIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: PageIntroProps) {
  const textAlign = align === "center" ? "text-center" : "text-left";

  return (
    <ScrollReveal>
      <div className={`mx-auto max-w-4xl ${textAlign}`}>
        {eyebrow && (
          <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-700">
            {eyebrow}
          </span>
        )}

        <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#17364f] sm:text-5xl">
          {title}
        </h1>

        {description && (
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
