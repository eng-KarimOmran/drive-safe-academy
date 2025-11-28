import React from "react";
import SectionTitle from "../section-title";
import { MdOutlineMoreTime } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdOutlineMoneyOff } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { TbSteeringWheelFilled } from "react-icons/tb";
import { TbSteeringWheelOff } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
import { MdLocationOff } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { AiOutlineCloseSquare } from "react-icons/ai";

export default function Comparison() {
  const featuresUs = [
    {
      icon: <MdOutlineMoreTime />,
      heading: "وقتك كامل بالدقيقة",
      desc: "إحنا بنضمنلك تاخد وقتك كامل، دقيقة بدقيقة.",
    },
    {
      icon: <MdOutlineAttachMoney />,
      heading: "السعر شامل كل حاجة",
      desc: "السعر اللي هتدفعه شامل كل حاجة، مفيش أي زيادات مفاجئة.",
    },
    {
      icon: <FaCheckCircle />,
      heading: "التدريب في كل الظروف",
      desc: "هتتمرن في كل الظروف: زحمة، طرق سريعة، ركنات وكل اللي هتقابله في الشارع.",
    },
    {
      icon: <TbSteeringWheelFilled />,
      heading: "السيطرة من أول حصة",
      desc: "من أول حصة هتمسك الدركسيون وتتحكم بنفسك.",
    },
    {
      icon: <MdLocationOn />,
      heading: "أماكن تدريب متعددة",
      desc: "لينا مكان ثابت وأماكن تدريب كتير علشان نكون دايمًا قريبين منك.",
    },
    {
      icon: <AiFillSafetyCertificate />,
      heading: "التأكد من إتقان القيادة",
      desc: "بنتأكد إنك اتعلمت السواقة 100% قبل ما نقولك خلصت.",
    },
  ];

  const featuresNotUs = [
    {
      icon: <IoTimerOutline />,
      heading: "وقتك بيضيع عليك",
      desc: "بيتقالك إن الحصة خلصت قبل وقتها، وده معناه إن جزء من وقتك وحقك راح عليك.",
    },
    {
      icon: <MdOutlineMoneyOff />,
      heading: "السعر غير شفاف",
      desc: "السعر بيكون قليل في البداية، بس بعدين يطلبوا إكراميات أو مصاريف تانية.",
    },
    {
      icon: <FaTimesCircle />,
      heading: "التمرين في أماكن هادية",
      desc: "التمرين بيكون في أماكن هادية عشان يوفروا بنزين، مش عشان تتعلم صح.",
    },
    {
      icon: <TbSteeringWheelOff />,
      heading: "دورك قليل أثناء التدريب",
      desc: "المدرب بيفضل ماسك الفرامل، وانت دورك بيكون قليل جدًا.",
    },
    {
      icon: <MdLocationOff />,
      heading: "عدم وجود أماكن ثابتة",
      desc: "معندهمش مكان ثابت، وساعات بيكون فيه نصب كتير.",
    },
    {
      icon: <AiOutlineCloseSquare />,
      heading: "الانتهاء مهم أكتر من التعلم",
      desc: "كل اللي يهمهم إن الكورس يخلص، حتى لو لسه متعلمتش كويس، ويقولك عيده من الأول على حسابك.",
    },
  ];
  return (
    <section className="py-10">
      <SectionTitle label="اللي بيميز تدريبنا عن أي مكان تاني؟" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-5 max-w-6xl mx-auto">
        <div className="bg-background text-(--second-color) rounded-xl p-5 shadow-lg">
          <h3 className="text-3xl font-semibold">أكاديميتنا</h3>
          <ul className="py-5 space-y-5">
            {featuresUs.map((feature, index) => (
              <li key={index} className="flex gap-3">
                <div className="bg-ring text-2xl text-(--main-color) w-8 h-8 rounded-full flex justify-center items-center">
                  {feature.icon}
                </div>
                <div className="max-w-2/3">
                  <h4 className="text-(--title-color) text-2xl font-medium">
                    {feature.heading}
                  </h4>
                  <p className="text-ring">{feature.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#0A2540] rounded-xl p-5 text-white">
          <h3 className="text-3xl font-semibold">باقي الأماكن</h3>
          <ul className="py-5 space-y-5">
            {featuresNotUs.map((feature, index) => (
              <li key={index + "not"} className="flex gap-3">
                <div className="bg-ring text-2xl text-muted-foreground w-8 h-8 rounded-full flex justify-center items-center">
                  {feature.icon}
                </div>
                <div className="max-w-2/3">
                  <h4 className="text-2xl font-medium">{feature.heading}</h4>
                  <p className="text-ring">{feature.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
