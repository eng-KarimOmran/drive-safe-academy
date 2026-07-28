import SectionHeading from "../../ui/SectionHeading";
import Comparison from "./components/Comparison";
import { whyUs } from "./why-us";

export default function WhyUs() {
  return (
    <section id="why-us" className="container mx-auto px-4 py-8">
      <SectionHeading
        title={<>ليه تتعلم السواقة مع{" "}<span className="text-primary">Drive Safe</span>؟</>}
        description="نقدم أفضل تجربة تعليمية للقيادة مع التركيز على السلامة والاحترافية."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {whyUs.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Icon className="text-3xl text-primary" />
              </div>

              <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
      <Comparison />
    </section>
  );
}
