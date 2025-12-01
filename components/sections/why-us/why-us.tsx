import GetIcon from "@/components/get-icon";
import Comparison from "../comparison/comparison";
import featuresData from "./data-why-us.json";
import Sections from "@/components/Sections";
import { ISettingsSections, IWhyUsCard } from "@/type/type";
export default function WhyUs() {
  const features = featuresData as IWhyUsCard[];
  const settings: ISettingsSections = {
    id: "why-us",
    title: "لماذا DriveSafe!",
    description:
      "نقدم أفضل تجربة تعليمية للقيادة مع التركيز على السلامة والاحترافية",
  };
  return (
    <Sections settings={settings}>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 px-4 gap-5">
        {features.map((feature, index) => (
          <li
            key={index}
            className="bg-background rounded-2xl flex justify-center items-center flex-col min-h-48 space-y-2 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <header className="text-2xl font-bold text-(--title-color) flex flex-col items-center space-y-1">
              {GetIcon(feature.icon)}
              <div>{feature.title}</div>
            </header>
            <p className="text-lg max-w-2/3 text-center text-ring">
              {feature.description}
            </p>
          </li>
        ))}
      </ul>
      <Comparison />
    </Sections>
  );
}
