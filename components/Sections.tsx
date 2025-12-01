import SectionTitle from "@/components/section-title";
import { ISections } from "@/type/type";

export default function Sections({
  children,
  settings
}: ISections) {
  return (
    <section id={settings.id} className="px-4 py-8">
      <div className="space-y-2">
        <SectionTitle label={settings.title} />
        <p className="text-center">{settings.description}</p>
      </div>
      {children}
    </section>
  );
}
