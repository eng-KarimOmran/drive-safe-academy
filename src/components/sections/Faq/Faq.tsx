"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import SectionHeading from "../../ui/SectionHeading";
import { faqData } from "./faqData";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="container mx-auto px-4 py-24">
      <SectionHeading
        title="الأسئلة الشائعة"
        description="إجابات على أكثر الأسئلة شيوعاً حول برامجنا التدريبية."
      />

      <div className="mt-12 mx-auto max-w-3xl space-y-4">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="rounded-2xl border bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between p-5 text-right font-bold"
              >
                <span>{faq.question}</span>

                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}