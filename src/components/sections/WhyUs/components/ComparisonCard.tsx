import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { rowsComparison } from "../rowsComparison";

export default function ComparisonCard({
  row,
}: {
  row: (typeof rowsComparison)[0];
}) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Academy */}
      <div className="rounded-2xl border border-primary/20 bg-green-300/5  p-1 md:p-5">
        <div className="flex items-start gap-3">
          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-300 text-white">
            <FaCircleCheck className="text-sm" />
          </span>

          <div>
            <h3 className="font-semibold">{row.us.title}</h3>

            <p className="mt-1 text-sm leading-6 text-gray-600 hidden md:block">
              {row.us.desc}
            </p>
          </div>
        </div>
      </div>

      {/* Others */}
      <div className="rounded-2xl border border-red-200 bg-red-50 p-1 md:p-5">
        <div className="flex items-start gap-3">
          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
            <FaCircleXmark className="text-sm" />
          </span>

          <div>
            <h3 className="font-semibold text-red-700">{row.them.title}</h3>

            <p className="mt-1 text-sm leading-6 text-gray-600 hidden md:block">
              {row.them.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
