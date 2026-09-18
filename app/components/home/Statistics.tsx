"use client";

import { useEffect, useRef, useState } from "react";
import IconBox from "@/components/ui/IconBox";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { statistics } from "@/data/home";

function AnimatedStat({ value }: { value: string }) {
  const [display, setDisplay] = useState("0");
  const started = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const numericValue = Number.parseFloat(value.replace(/[^0-9.]/g, ""));
    const suffix = value.endsWith("+") ? "+" : value.endsWith("%") ? "%" : "";
    const decimals = value.includes(".") ? 1 : 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return;
      started.current = true;
      const startTime = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / 1100, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = numericValue * eased;
        const formatted = decimals
          ? current.toFixed(decimals)
          : Math.round(current).toLocaleString("en-US");
        setDisplay(`${formatted}${suffix}`);
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.35 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{display}</span>;
}

export default function Statistics() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-5 gap-y-12 px-6 sm:grid-cols-4 lg:px-8">
        {statistics.map((stat, index) => (
          <ScrollReveal key={stat.label} delay={index * 80}>
            <div className="flex flex-col items-center text-center">
              <IconBox icon={stat.icon} size="sm" />

              <p className="mt-4 text-3xl font-bold tracking-tight text-[#17364f] sm:text-4xl">
                <AnimatedStat value={stat.value} />
              </p>

              <p className="mt-2 text-xs text-[#71889a] sm:text-sm">
                {stat.label}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}