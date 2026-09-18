interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      <h2 className="text-[28px] font-bold leading-tight tracking-[-0.03em] text-[#102d45] sm:text-[36px] lg:text-[42px]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-[#71879a] sm:text-lg lg:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}