import trainersData from "./trainers-data.json";
import CardTrainer from "@/components/sections/trainers/card-trainer";
import { ISettingsSections, ITrainer } from "@/type/type";
import Sections from "@/components/Sections";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";

export default function Trainers() {
  const trainers = trainersData as ITrainer[];
  const settings: ISettingsSections = {
    id: "trainers",
    title: "تعلم من الأفضل!",
    description: "فريق من المدربين المؤهلين والخبراء",
  };
  return (
    <Sections settings={settings}>
      <ScrollArea dir="rtl" className="w-11/12 rounded-md border whitespace-nowrap mx-auto my-4">
        <div className="flex w-max space-x-4 p-4">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="shrink-0">
              <CardTrainer trainer={trainer} />
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </Sections>
  );
}
