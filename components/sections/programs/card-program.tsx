import GetIcon from "@/components/get-icon";
import { Button } from "@/components/ui/button";
import { IProgram } from "@/type/type";
import Link from "next/link";

export default function CardProgram({ program }: { program: IProgram }) {
  return (
    <div
      key={program.id}
      className={`bg-background p-5 rounded-2xl shadow-md space-y-5 relative overflow-hidden ${
        program.isSpecial ? "border border-(--main-color)" : ""
      }`}
    >
      {program.isSpecial && (
        <div className="absolute p-1 -rotate-12 w-30 text-center top-0 end-0 bg-(--title-color) text-white">
          {program.id === "comprehensive" ? "الأكثر طلباً" : "الأكثر قيمة"}
        </div>
      )}
      <h3 className="text-3xl font-bold text-(--second-color)">
        {program.heading}
      </h3>
      <p>{program.description}</p>
      <div className="flex items-center gap-1">
        {program.priceAfterDiscount ? (
          <>
            <span className="line-through text-ring">
              {program.priceBeforeDiscount}
            </span>
            <span className="text-(--main-color) text-4xl font-bold">
              {program.priceAfterDiscount}
            </span>
          </>
        ) : (
          <span className="text-(--main-color) text-4xl font-bold">
            {program.priceBeforeDiscount}
          </span>
        )}
        <span className="text-(--main-color)">ج.م</span>
      </div>
      <ul>
        {program.features.map((feature) => (
          <li key={feature.id} className="flex items-center gap-3">
            {GetIcon(feature.icon)}
            <span>{feature.label}</span>
          </li>
        ))}
      </ul>
      <Button variant="main" className="w-full" asChild>
        <Link href={`subscribe/${program.id}`}>احجز الان</Link>
      </Button>
    </div>
  );
}
