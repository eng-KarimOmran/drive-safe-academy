import Link from "next/link";
import Button from "../../ui/Button";
import { heroFeatures } from "./heroFeatures ";
import FeatureCard from "./components/FeatureCard";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100dvh-4rem)] w-full flex justify-center items-center background">
      <div className="flex flex-col xl:flex-row items-center justify-center gap-6 p-6">
        {/* Content */}
        <div className="max-w-3xl space-y-8 text-center xl:text-right">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            🚗 افضل اكاديمية لتعليم القيادة
          </span>
          <h1 className="text-3xl xl:text-7xl font-extrabold leading-tight">
            اتعلم السواقة مع <span className="text-primary">أفضل المدربين</span>
            <br />
            وابدأ مشوارك بثقة
          </h1>

          <p className="text-lg leading-relaxed text-gray-600">
            لسه أول مرة تسوق؟ متقلقش! في <strong>Drive Safe Academy</strong>{" "}
            هنعلمك السواقة من الصفر، بخطوات بسيطة وتدريب عملي، لحد ما تبقى سواق
            واثق وآمن على الطريق.
          </p>

          <div className="flex items-center gap-4 justify-center xl:justify-start">
            <Link href="/#programs">
              <Button variant="primary">احجز الآن</Button>
            </Link>

            <Link href="/#testimonials">
              <Button variant="secondary">آراء المتدربين</Button>
            </Link>
          </div>
        </div>

        <div className="bg-primary/5 rounded-2xl shadow border border-primary">
          {heroFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <FeatureCard
                key={feature.id}
                icon={<Icon className="text-2xl text-primary" />}
                title={feature.title}
                description={feature.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
