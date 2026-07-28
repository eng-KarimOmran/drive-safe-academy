import { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-2xl">
        {icon}
      </div>

      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

        <p className="text-sm leading-6 text-gray-500">{description}</p>
      </div>
    </div>
  );
}
