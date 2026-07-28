import { Program } from "../programs.type";
import { FaArrowLeft, FaCheck, FaFire } from "react-icons/fa6";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <article
      className={`relative flex flex-col rounded-3xl border border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow p-4 shadow-md ${program.featuredReason ? "background" : "bg-white"}`}
    >
      {program.featuredReason && (
        <span className="absolute -top-3 right-6 flex items-center gap-2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-white">
          <FaFire className="text-[11px]" />
          {program.featuredReason}
        </span>
      )}

      <h3 className="mt-2 text-2xl font-bold">{program.name}</h3>

      <p className="mt-3 text-sm leading-7 text-gray-600">
        {program.description}
      </p>

      <div className="mt-6 flex items-end gap-3">
        {program.priceOriginal > program.priceDiscounted && (
          <span className="text-lg text-gray-400 line-through">
            {program.priceOriginal}
          </span>
        )}

        <span className="text-4xl font-extrabold text-primary">
          {program.priceDiscounted}
        </span>

        <span className="text-sm text-gray-500">ج.م</span>
      </div>

      <ul className="grid grid-cols-1 gap-2 py-2">
        {program.features.map((feature) => (
          <li key={feature.id} className="flex items-start gap-3">
            <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
              <FaCheck className="text-[10px]" />
            </span>

            <span className="text-sm leading-6 text-gray-700">
              {feature.feature}
            </span>
          </li>
        ))}
      </ul>
      <Link href={`/subscription-form/${program.id}`}>
        <Button
          className="w-full gap-2"
          variant={program.featuredReason ? "primary" : "secondary"}
        >
          احجز الآن
          <FaArrowLeft className="text-xs" />
        </Button>
      </Link>
    </article>
  );
}
