import React from "react";
import SectionTitle from "../section-title";
import { TfiCup } from "react-icons/tfi";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import Comparison from "./comparison";

export default function WhyUs() {
  const features = [
    {
      icon: <TfiCup />,
      title: "معدل نجاح عالي",
      desc: (
        <>
          نقخر بتحقيق معدل نجاح يصل
          <span className="text-(--main-color)"> 99% </span> لطلابنا
        </>
      ),
    },
    {
      icon: <FaCalendarCheck />,
      title: "حجز مرن",
      desc: "نظام حجز مرن يناسب جدولك الزمني مع إمكانية التعديل",
    },
    {
      icon: <FaCar />,
      title: "سيارات حديثة",
      desc: "أسطول من السيارات الحديثة والآمنة للتدريب",
    },
    {
      icon: <FaPeopleGroup />,
      title: "مدربون معتمدون",
      desc: "مدربون مؤهلون ومعتمدون مع خبرة واسعة في تعليم القيادة",
    },
  ];

  return (
    <section id="why-us" className="py-10 px-4">
      <SectionTitle label="ليه تختار درايڤ سيڤ؟" />
      <p className="text-center">
        نقدم أفضل تجربة تعليمية للقيادة مع التركيز على السلامة والاحترافية
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 px-4 gap-5">
        {features.map((feature, index) => (
          <li
            key={index}
            className="bg-background rounded-2xl flex justify-center items-center flex-col min-h-48 space-y-2 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <header className="text-2xl font-bold text-(--title-color) flex flex-col items-center space-y-1">
              {feature.icon}
              <div>{feature.title}</div>
            </header>
            <p className="text-lg max-w-2/3 text-center text-ring">
              {feature.desc}
            </p>
          </li>
        ))}
      </ul>
      <Comparison />
    </section>
  );
}
