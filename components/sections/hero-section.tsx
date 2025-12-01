import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-[calc(100dvh-102px)] w-full flex-col-reverse lg:flex-row px-4"
    >
      <div className="lg:max-w-1/2 space-y-6 md:text-center lg:text-start">
        <h3 className="text-2xl md:text-6xl lg:text-7xl font-bold text-(--second-color)">
          تعلم القيادة مع أفضل المدربين المعتمدين
        </h3>
        <p>
          نقدم دورات لتعليم قيادة السيارات الأتوماتيك والمانيوال مع مدربين
          معتمدين وخبرة تزيد عن 7 عاماً
        </p>
        <div className="flex md:justify-center lg:justify-start items-center gap-4">
          <Button asChild variant="main">
            <Link href="/#programs">احجز الآن</Link>
          </Button>
          <Button asChild variant="second">
            <Link href="/#contact">تواصل معنا</Link>
          </Button>
        </div>
      </div>
      <div className="w-full max-w-xl p-4 overflow-hidden">
        <img
          src="https://res.cloudinary.com/dpuvf3gfs/image/upload/v1764292984/heroSec_csgym1.png"
          alt="hero section"
          className="w-full rounded-2xl"
        />
      </div>
    </section>
  );
}
