import comparisonData from "./comparison-data.json";
import GetIcon from "@/components/get-icon";
import Sections from "@/components/Sections";
import { ISettingsSections } from "@/type/type";

export default function Comparison() {
  const settings: ISettingsSections = {
    id: "comparison",
    title: "اللي بيميز تدريبنا عن أي مكان تاني ؟",
    description:
      "خبرة، سيارات حديثة، تدريب عملي، ومدربون معتمدون. معنا تعليم القيادة أسهل وأكثر أمانًا.",
  };
  return (
    <Sections
    settings={settings}
    >
      <main className="grid grid-cols-1 md:grid-cols-2 gap-10 py-5 max-w-6xl mx-auto">
        <div className="bg-background text-(--second-color) rounded-xl p-5 shadow-lg">
          <header className="flex gap-2 items-center text-3xl py-4">
            <h3 className="text-3xl font-semibold">أكاديميتنا</h3>
            <span className="text-yellow-500">{GetIcon("FaTrophy")}</span>
          </header>
          <ul className="space-y-5">
            {comparisonData.featuresUs.map((feature, index) => (
              <li key={index} className="flex gap-3">
                <div className="bg-ring text-2xl text-(--main-color) w-8 h-8 rounded-full flex justify-center items-center">
                  {GetIcon(feature.icon)}
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

        <div className="dark:bg-red-200 bg-red-100 text-red-800 rounded-xl p-5">
          <header className="flex gap-2 items-center text-3xl py-4">
            <h3 className="text-3xl font-semibold">باقي الأماكن</h3>
            <span className="text-red-500">{GetIcon("BiSolidErrorAlt")}</span>
          </header>
          <ul className="space-y-5">
            {comparisonData.featuresNotUs.map((feature, index) => (
              <li key={index + "not"} className="flex gap-3">
                <div className="bg-ring text-2xl text-muted-foreground w-8 h-8 rounded-full flex justify-center items-center">
                  {GetIcon(feature.icon)}
                </div>
                <div className="max-w-2/3">
                  <h4 className="text-2xl font-medium">{feature.heading}</h4>
                  <p className="text-ring">{feature.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Sections>
  );
}
