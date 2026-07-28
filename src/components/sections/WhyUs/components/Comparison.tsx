import SectionHeading from "../../../ui/SectionHeading";
import { rowsComparison } from "../rowsComparison";
import ComparisonCard from "./ComparisonCard";

export default function Comparison() {
  return (
    <div className="py-12">
      <SectionHeading
        title="اللي بيميز تدريبنا عن أي مكان تاني ؟"
        description="بنوفرلك تجربة تدريب عملية وآمنة تساعدك تتعلم السواقة بثقة مع مدربين محترفين وسيارات حديثة."
      />

      <div className="lg:max-w-10/12 mx-auto">
        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-green-500/10 py-3 text-center">
            <span className="font-bold text-green-500">أكاديميتنا</span>
          </div>

          <div className="rounded-2xl bg-red-50 py-3 text-center">
            <span className="font-bold text-red-600">باقي الأماكن</span>
          </div>
        </div>

        {/* Rows */}
        <div className="space-y-4">
          {rowsComparison.map((row) => (
            <ComparisonCard key={row.id} row={row} />
          ))}
        </div>
      </div>
    </div>
  );
}
