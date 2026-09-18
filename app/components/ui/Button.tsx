import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-2.5 text-[12px] font-semibold transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-[#079fd5] text-white shadow-md shadow-cyan-500/20 hover:bg-[#007eae] active:bg-[#00688f]",
    secondary:
      "border-2 border-[#8ac8df] bg-white text-[#075a7c] hover:border-[#08afe8] hover:bg-[#e9f9ff] active:bg-[#d8f3fc]",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={styles}>
      {children}
    </button>
  );
}