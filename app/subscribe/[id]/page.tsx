import SectionTitle from "@/components/section-title";
import SubscribeProgramForm from "@/components/sections/programs/subscribe-program-form";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import programsData from "../../../components/sections/programs/data-program.json";
import { IProgram } from "@/type/type";
export default async function SubscribeProgram({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const programs = programsData as IProgram[];
  const index = programs.findIndex((p) => p.id === id);
  if (index === -1) {
    return redirect("/#programs");
  }
  const program = programs[index];
  return (
    <section className="px-4 py-5">
      <SectionTitle label="تأكيد الاشتراك" />
      <div className="gap-5 bg-background p-4 rounded-xl max-w-4xl mx-auto">
        <SubscribeProgramForm programName={program.heading} />
      </div>
    </section>
  );
}
