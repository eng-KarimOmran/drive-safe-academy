import React from "react";
import SectionTitle from "../section-title";
import {
  FaRoad,
  FaTools,
  FaParking,
  FaArrowsAltH,
  FaCarSide,
  FaClock,
  FaUserTie,
  FaCogs,
  FaGraduationCap,
} from "react-icons/fa";
import { MdTraffic } from "react-icons/md";
import { IoSpeedometer } from "react-icons/io5";
import { Button } from "../ui/button";

export default function Programs() {
  const programs = [
    {
      id: "practice",
      heading: "برنامج الممارسة",
      description:
        "نركّز خلال الكورس على معالجة نقاط الضعف في مهارات القيادة الأساسية.",
      priceBeforeDiscount: 1500,
      priceAfterDiscount: 1000,
      features: [
        {
          id: 0,
          icon: <FaClock />,
          label: "6 حصص (5 عملي + حصة ميكانيكا هدية)",
        },
        {
          id: 1,
          icon: <FaCogs />,
          label: "معالجة نقاط الضعف في المهارات الأساسية",
        },
        {
          id: 2,
          icon: <FaParking />,
          label: "التركيز على الركنات والرجوع للخلف",
        },
        {
          id: 3,
          icon: <FaArrowsAltH />,
          label: "تغيير الحارات والتحكم في الاتجاهات",
        },
        { id: 4, icon: <FaRoad />, label: "تدريب عملي في شوارع خارجية" },
        {
          id: 5,
          icon: <IoSpeedometer />,
          label: "القيادة على المحاور السريعة مثل المحمودية وقناة السويس",
        },
        {
          id: 6,
          icon: <MdTraffic />,
          label: "التعامل مع الزحام والشوارع الضيقة لكسر رهبة الطريق",
        },
      ],
    },
    {
      id: "comprehensive",
      heading: "البرنامج الشامل",
      description: "تدريب مكثف من الصفر حتى الاحتراف.",
      priceBeforeDiscount: 2000,
      priceAfterDiscount: 1350,
      isSpecial: true,
      features: [
        {
          id: 0,
          icon: <FaClock />,
          label: "8 حصص (7 عملي + حصة ميكانيكا هدية)",
        },
        { id: 1, icon: <FaCarSide />, label: "كل ما في برنامج الممارسة" },
        { id: 2, icon: <FaRoad />, label: "التحرك والوقوف بثبات" },
        { id: 3, icon: <FaArrowsAltH />, label: "الدورانات يمينًا ويسارًا" },
        { id: 4, icon: <FaGraduationCap />, label: "الثبات وتغيير المسار" },
        { id: 5, icon: <MdTraffic />, label: "المارشدير واليوترن" },
        { id: 6, icon: <FaParking />, label: "ركنات بأنواعها بشكل موسّع" },
        {
          id: 7,
          icon: <IoSpeedometer />,
          label: "مستوى تدريبي من الصفر حتى الاحتراف",
        },
      ],
    },
    {
      id: "traffic",
      heading: "برنامج اختبار المرور",
      description: "تجهيز عملي ونظري لاجتياز اختبار رخصة القيادة بثقة.",
      priceBeforeDiscount: 500,
      priceAfterDiscount: 450,
      features: [
        { id: 0, icon: <FaClock />, label: "2 حصص" },
        { id: 1, icon: <FaRoad />, label: "تدريب عملي على مسار اختبار المرور" },
        {
          id: 2,
          icon: <FaGraduationCap />,
          label: "مراجعة أهم الأسئلة النظرية المتوقعة",
        },
        {
          id: 3,
          icon: <MdTraffic />,
          label: "تصحيح الأخطاء الشائعة في الامتحانات",
        },
        {
          id: 4,
          icon: <FaParking />,
          label: "تمارين على الرجوع للخلف والثبات",
        },
        {
          id: 5,
          icon: <FaUserTie />,
          label: "محاكاة كاملة لامتحان الرخصة النهائي",
        },
      ],
    },
    {
      id: "golden",
      heading: "البرنامج الذهبي",
      description:
        "يتضمن البرنامج الشامل + الممارسة + اختبار المرور في حزمة واحدة كاملة.",
      priceBeforeDiscount: 2500,
      priceAfterDiscount: 1700,
      isSpecial: true,
      features: [
        {
          id: 0,
          icon: <FaClock />,
          label: "10 حصص (9 عملي + حصة ميكانيكا هدية)",
        },
        {
          id: 1,
          icon: <FaCarSide />,
          label: "يشمل: البرنامج الشامل + الممارسة + اختبار المرور",
        },
        { id: 2, icon: <FaCogs />, label: "أفضل قيمة مقابل السعر" },
        { id: 3, icon: <FaRoad />, label: "عدد حصص مكثف يغطي جميع الجوانب" },
        {
          id: 4,
          icon: <MdTraffic />,
          label: "تأهيل شامل للحصول على الرخصة بثقة",
        },
      ],
    },
    {
      id: "single",
      heading: "برنامج الحصة الواحدة",
      description:
        "جلسة تدريب فردية لمدة ٥٠ دقيقة مخصصة لمهارة معينة حسب احتياجك.",
      priceBeforeDiscount: 250,
      priceAfterDiscount: null,
      isSpecial: false,
      features: [
        { id: 0, icon: <FaClock />, label: "1 حصة (50 دقيقة)" },
        { id: 1, icon: <FaTools />, label: "مناسبة لتقوية مهارة محددة" },
        {
          id: 2,
          icon: <FaArrowsAltH />,
          label: "مرونة في تحديد محتوى التدريب",
        },
        {
          id: 3,
          icon: <FaCarSide />,
          label: "مثالية للمراجعة السريعة أو قبل الامتحان",
        },
      ],
    },
  ];

  return (
    <section id="programs" className="py-5 px-4">
      <SectionTitle label="برامجنا التدريبية" />
      <p className="text-center">
        اختار البرنامج الذي يناسبك من مجموعة متنوعة من البرامج التدريبية
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-16">
        {programs.map((program) => (
          <li
            key={program.id}
            className={`bg-background p-5 rounded-2xl shadow-md space-y-5 relative overflow-hidden ${
              program.isSpecial ? "border border-(--main-color)" : ""
            }`}
          >
            {program.isSpecial && (
              <div className="absolute p-1 -rotate-12 w-30 text-center top-0 end-0 bg-(--title-color) text-white">
                {program.id === "comprehensive" ? "الأكثر طلباً" : "الأكثر قيمة"}
              </div>
            )}
            <h3 className="text-3xl font-bold text-(--second-color)">
              {program.heading}
            </h3>
            <p>{program.description}</p>
            <div className="flex items-center gap-1">
              {program.priceAfterDiscount ? (
                <>
                  <span className="line-through text-ring">
                    {program.priceBeforeDiscount}
                  </span>
                  <span className="text-(--main-color) text-4xl font-bold">
                    {program.priceAfterDiscount}
                  </span>
                </>
              ) : (
                <span className="text-(--main-color) text-4xl font-bold">
                  {program.priceBeforeDiscount}
                </span>
              )}
              <span className="text-(--main-color)">ج.م</span>
            </div>
            <ul>
              {program.features.map((feature) => (
                <li key={feature.id} className="flex items-center gap-3">
                  {feature.icon}
                  <span>{feature.label}</span>
                </li>
              ))}
            </ul>
            <Button variant="main" className="w-full">
              احجز الان
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}
