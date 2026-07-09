import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { MenuItem, SeparatorMenu } from "../SeparatorMenu";
import Link from "next/link";

export default function HeroSecFs() {
  const stats: MenuItem[] = [
    { label: "متدرب", value: 21000 },
    { label: "ساعة تدريب", value: 190000 },
    { label: "سيارات مجهزة", value: 8 },
  ];

  return (
    <section className="relative min-h-dvh w-full overflow-hidden flex justify-center items-center">
      {/* Background Image */}
      <Image
        src="/heroSec.gif"
        alt="تدريب على القيادة الآمنة"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-black/40 z-0" />
      <div className="absolute inset-0 bg-linear-to-l from-black/30 via-transparent to-transparent z-0" />

      {/* Main Content Container */}
      <div className="container mx-auto relative z-10 w-full h-full p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 mt-16 lg:mt-0">
        {/* Text & Content Side */}
        <div className="space-y-6 w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-start">
          <Badge className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm flex items-center gap-2 w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-sm font-medium text-gray-100">
              المنصة الأولى لتعليم القيادة الآمنة
            </span>
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.2] tracking-tight text-balance text-white">
            تعلم القيادة بثقة مع{" "}
            <span className="text-primary block sm:inline mt-2 sm:mt-0">
              Drive Safe
            </span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-gray-200 max-w-xl">
            مش محتاج يكون عندك أي خبرة في السواقة عشان تبقى سواق محترف وواثق من
            نفسك. كل اللي عليك إنك تنضم لـ{" "}
            <strong className="text-white">Drive Safe</strong>، وإحنا هناخد
            بإيدك خطوة بخطوة لحد ما توصل للمستوى اللي بتحلم بيه... ويمكن أكتر
            كمان!
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Button className="w-full sm:w-auto h-11 px-8 text-base">
              <Link href={"/#programs"}>ابدأ رحلتك الآن</Link>
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto h-11 px-8 text-base bg-transparent/20 text-white hover:bg-white hover:text-black"
            >
              <Link href={"/#reviews"}> آراء المتدربين</Link>
            </Button>
          </div>

          <Separator className="w-full max-w-md opacity-50 hidden lg:block" />

          {/* Stats Component Wrapper */}
          <div className="w-full overflow-x-auto pb-2 lg:pb-0">
            <SeparatorMenu items={stats} />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center"></div>
      </div>
    </section>
  );
}
