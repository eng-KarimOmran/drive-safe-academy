import { IProgram, ISections, ISettingsSections } from "@/type/type";
import programsData from "./data-program.json";
import CardProgram from "@/components/sections/programs/card-program";
import Sections from "@/components/Sections";

export default function Programs() {
  const programs = programsData as IProgram[];
  const settings: ISettingsSections = {
    id: "programs",
    title: "برامجنا التدريبية",
    description:
      "اختار البرنامج الذي يناسبك من مجموعة متنوعة من البرامج التدريبية",
  };
  return (
    <Sections settings={settings}>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-16">
        {programs.map((p) => (
          <li key={p.id}>
            <CardProgram program={p} />
          </li>
        ))}
      </ul>
    </Sections>
  );
}
