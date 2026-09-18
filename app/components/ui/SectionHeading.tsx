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
      <h2 className="text-[20px] font-bold leading-tight text-[#102d45] sm:text-[24px]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-[10px] leading-relaxed text-[#71879a] sm:text-[11px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}