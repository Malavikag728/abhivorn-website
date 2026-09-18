"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { faqItems } from "@/data/home";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#102d45] sm:text-[36px] lg:text-[42px]">
              Frequently Asked Questions
            </h2>

            <p className="mt-3 text-base text-[#71879a] sm:text-lg lg:text-xl">
              Get answers to common questions about our solutions
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-8">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <ScrollReveal key={item.question} delay={index * 80}>
                <div className="border-b border-[#d8e4ea]">
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left"
                  >
                    <span className="text-sm font-medium text-[#304e63] sm:text-base">
                      {item.question}
                    </span>

                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#6c8393] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pb-4 pr-8">
                      <p className="text-sm leading-relaxed text-[#718697]">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}