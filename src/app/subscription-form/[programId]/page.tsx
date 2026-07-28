import { getPrograms } from "@/components/sections/Programs/program.service";
import { notFound } from "next/navigation";
import SubscriptionForm from "../components/SubscriptionForm";
import { getAreas } from "../subscription-form.service";
import { getAcademy } from "@/components/sections/Contact/contact.service";

interface Props {
  params: Promise<{
    programId: string;
  }>;
}

export default async function Subscription({ params }: Props) {
  const { programId } = await params;

  const [programs, areas, academy] = await Promise.all([
    getPrograms(),
    getAreas(),
    getAcademy(),
  ]);

  const program = programs.find((p) => p.id === programId);

  if (!program || !academy) {
    notFound();
  }

  return (
    <section className="min-h-[calc(100dvh-4rem)] w-full flex items-center justify-center py-10">
      <div className="w-full max-w-md">
        <SubscriptionForm areas={areas} program={program} academy={academy} />
      </div>
    </section>
  );
}
