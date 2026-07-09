"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FaCircleQuestion,
  FaCarBurst,
  FaUserCheck,
  FaLocationDot,
  FaBolt,
  FaIdCard,
} from "react-icons/fa6";

const faqs = [
  {
    question: "لو العربية اتخبطت أثناء التدريب؟",
    answer:
      "ماتقلقش، مش هتدفع حاجة. إحنا مدربين على التعامل مع المواقف دي كويس جدًا، ودايمًا متوقعين رد فعلك. أهم حاجة تلتزم بتعليمات المدرب علشان تحقق أقصى استفادة.",
    icon: FaCarBurst,
  },
  {
    question: "بعد الكورس، هقدر أسوق لوحدي؟",
    answer:
      "أيوه، بنسبة ١٠٠٪ هتقدر تسوق وتتحرك لوحدك. إحنا بندربك على كل المواقف اللي ممكن تواجها، وبنتابع معاك خطوة بخطوة لحد ما نضمن إنك جاهز تمامًا.",
    icon: FaUserCheck,
  },
  {
    question: "فين هتكون أماكن التدريب بتاعتي؟",
    answer: "بنوفر التدريب فى اكثر من مكان بتختار الاقرب ليك",
    icon: FaLocationDot,
  },
  {
    question: "هل هبدأ عملي من أول حصة؟",
    answer:
      "طبعًا! إحنا بنبدأ العملي من أول يوم، لأننا مؤمنين إن أفضل طريقة للتعلم هي الممارسة الفعلية، وبنبدأ معاك على حسب مستواك.",
    icon: FaBolt,
  },
  {
    question: "هل في تسهيلات في استخراج الرخصة؟",
    answer:
      "أيوه، بنساعدك في كل خطوات استخراج الرخصة ونعرفك الأوراق المطلوبة ونوجهك لأفضل الأماكن. إحنا معاك لحد ما تمسك الرخصة في إيدك.",
    icon: FaIdCard,
  },
];

export default function Faq() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-neutral-950 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 -translate-y-1/3 rounded-full bg-green-500/10 blur-[120px]" />

      {/* Heading */}
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 text-green-400">
          <FaCircleQuestion className="h-7 w-7" />
        </div>
        <span className="mt-4 block text-sm font-semibold tracking-wide text-green-400">
          الأسئلة الشائعة
        </span>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          الأسئلة الشائعة
        </h2>
        <p className="mt-4 text-base text-neutral-400 sm:text-lg">
          إجابات على أكثر الأسئلة شيوعاً حول برامجنا التدريبية
        </p>
      </div>

      {/* Accordion */}
      <div className="relative mx-auto mt-14 max-w-3xl px-6 sm:mt-16">
        <Accordion type="single" collapsible className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              value={`item-${i}`}
              className="rounded-2xl border border-white/10 bg-white/3 px-5 backdrop-blur-sm data-[state=open]:border-green-500/40 data-[state=open]:bg-white/5 sm:px-6"
            >
              <AccordionTrigger className="py-5 text-right text-base font-semibold text-white hover:no-underline sm:text-lg [&>svg]:text-green-400">
                <span className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                    <faq.icon className="h-4 w-4" />
                  </span>
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 pr-11 text-sm leading-relaxed text-neutral-400 sm:text-base">
                {faq.answer || (
                  <span className="text-neutral-600">
                    الإجابة هتتضاف قريبًا.
                  </span>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
