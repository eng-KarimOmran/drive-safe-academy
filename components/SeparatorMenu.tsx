import { Separator } from "@/components/ui/separator";
import { AnimatedNumber } from "./AnimatedNumber";

export type MenuItem = {
  label: string;
  value: number;
};

type SeparatorMenuProps = {
  items: MenuItem[];
};

export function SeparatorMenu({ items }: SeparatorMenuProps) {
  return (
    <div className="flex items-center gap-2 text-sm md:gap-4">
      {items.map((item, index) => (
        <div key={item.value} className="contents">
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold text-primary">
              <AnimatedNumber value={item.value} />
            </span>

            <span className="text-xs text-muted">{item.label}</span>
          </div>

          {index !== items.length - 1 && <Separator orientation="vertical" />}
        </div>
      ))}
    </div>
  );
}
