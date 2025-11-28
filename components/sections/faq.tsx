import React from "react";
import SectionTitle from "../section-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FaCarCrash } from "react-icons/fa";
import { FaRoad } from "react-icons/fa6";
import { FaMapLocation } from "react-icons/fa6";
import { PiSteeringWheelFill } from "react-icons/pi";
import { FaRegAddressCard } from "react-icons/fa";

export default function FAQ() {
  const faqs = [
    {
      id: "item-1",
      icon: <FaCarCrash />,
      question: "لو خبطت العربية أثناء التدريب، هيحصل إيه؟",
      answer:
        "ماتقلقش، مش هتدفع حاجة. إحنا مدربين على التعامل مع المواقف دي كويس جدًا، ودايمًا متوقعين رد فعلك. أهم حاجة تلتزم بتعليمات المدرب علشان تحقق أقصى استفادة.",
    },
    {
      id: "item-2",
      icon: <FaRoad />,
      question: "بعد الكورس، هقدر أسوق لوحدي؟",
      answer:
        "أيوه، بنسبة ١٠٠٪ هتقدر تسوق وتتحرك لوحدك. إحنا بندربك على كل المواقف اللي ممكن تواجها، وبنتابع معاك خطوة بخطوة لحد ما نضمن إنك جاهز تمامًا.",
    },
    {
      id: "item-3",
      icon: <FaMapLocation />,
      question: "فين هتكون أماكن التدريب بتاعتي؟",
      answer: "حالياً بنوفر التدريب في: الشاطبي, سموحة, السيوف",
    },
    {
      id: "item-4",
      icon: <PiSteeringWheelFill />,
      question: "هل هبدأ عملي من أول حصة؟",
      answer:
        "طبعًا! إحنا بنبدأ العملي من أول يوم، لأننا مؤمنين إن أفضل طريقة للتعلم هي الممارسة الفعلية، وبنبدأ معاك على حسب مستواك.",
    },
    {
      id: "item-5",
      icon: <FaRegAddressCard />,
      question: "هل في تسهيلات في استخراج الرخصة؟",
      answer:
        "أيوه، بنساعدك في كل خطوات استخراج الرخصة ونعرفك الأوراق المطلوبة ونوجهك لأفضل الأماكن. إحنا معاك لحد ما تمسك الرخصة في إيدك.",
    },
  ];

  return (
    <section id="faq" className="px-4 py-5">
      <SectionTitle label="الأسئلة الشائعة" />
      <p className="text-center">
        إجابات على أكثر الأسئلة شيوعاً حول برامجنا التدريبية
      </p>
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-5xl mx-auto py-10"
      >
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger>
              <div className="text-xs md:text-xl font-bold flex justify-start items-center gap-2">
                <span>{faq.icon}</span>
                <span>{faq.question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className="text-ring">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
