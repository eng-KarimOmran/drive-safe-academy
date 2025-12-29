import GetIcon from "@/components/get-icon";
import { IContactItem } from "@/type/type";

export default function CardContact({ item }: { item: IContactItem }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-3xl">{GetIcon(item.icon)}</span>
      <div className="flex flex-col">
        <span className="text-lg font-medium">{item.label}</span>
        <span className="text-sm">{item.value}</span>
      </div>
    </div>
  );
}
