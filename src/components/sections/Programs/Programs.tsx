import SectionHeading from "../../ui/SectionHeading";
import { getPrograms } from "./program.service";
import ProgramCard from "./components/ProgramCard";

export default async function Programs() {
  const programs = await getPrograms();

  return (
    <section id="programs" className="container mx-auto px-4 py-24">
      <SectionHeading
        title="برامجنا التدريبية"
        description="اختار البرنامج الذي يناسبك من مجموعة متنوعة من البرامج التدريبية."
      />

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </section>
  );
}