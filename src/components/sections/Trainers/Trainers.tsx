import SectionHeading from "../../ui/SectionHeading";
import { getTrainers } from "./trainers.service";
import TrainerCard from "./components/TrainerCard";

export default async function Trainers() {
  const trainers = (await getTrainers()) ?? [];

  return (
    <section id="trainers" className="container mx-auto px-4 py-24">
      <SectionHeading
        title="تعلم من الأفضل!"
        description="فريق من المدربين المؤهلين والخبراء."
      />

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {trainers.map((trainer) => (
          <TrainerCard key={trainer.id} trainer={trainer} />
        ))}
      </div>
    </section>
  );
}
