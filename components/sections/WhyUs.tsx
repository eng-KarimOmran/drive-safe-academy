import { Card, CardContent } from "@/components/ui/card";
import { FaCalendarCheck, FaCarSide, FaUserGraduate } from "react-icons/fa";

import { GiSpeedometer } from "react-icons/gi";

export default function WhyUs() {
  const features = [
    {
      icon: GiSpeedometer,
      title: "معدل نجاح عالي",
      description: "نفخر بتحقيق معدل نجاح يصل إلى 99% لطلابنا",
      highlight: "99%",
    },
    {
      icon: FaCalendarCheck,
      title: "حجز مرن",
      description: "نظام حجز مرن يناسب جدولك الزمني مع إمكانية التعديل",
    },
    {
      icon: FaCarSide,
      title: "سيارات حديثة",
      description: "أسطول من السيارات الحديثة والآمنة للتدريب",
    },
    {
      icon: FaUserGraduate,
      title: "مدربون معتمدون",
      description:
        "مدربون مؤهلون ومعتمدون مع خبرة واسعة في تعليم القيادة بشكل مميز جدًا",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-neutral-950 py-24 sm:py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 -translate-y-1/3 rounded-full bg-green-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-primary">
            لماذا DriveSafe؟
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            نقدم أفضل تجربة تعليمية للقيادة
          </h2>
          <p className="mt-4 text-base text-neutral-400 sm:text-lg">
            مع التركيز على السلامة والاحترافية في كل خطوة من رحلتك معنا
          </p>

          {/* Signature: road lane divider */}
          <div
            aria-hidden="true"
            className="road-line mx-auto mt-8 h-0.75 w-40 rounded-full"
          />
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:mt-20 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group relative border-white/10 bg-white/3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:bg-white/6"
            >
              <CardContent className="flex flex-col items-start gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10 text-primary transition-colors duration-300 group-hover:bg-green-500 group-hover:text-white">
                  <feature.icon className="h-6 w-6" />
                </div>

                {feature.highlight && (
                  <span className="text-3xl font-extrabold text-primary">
                    {feature.highlight}
                  </span>
                )}

                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
