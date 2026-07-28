import { ReactNode } from "react";

type SectionHeadingProps = {
  title: ReactNode;
  description: string;
};

export default function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <h2 className="text-3xl font-bold leading-tight md:text-4xl">{title}</h2>

      <div className="mt-5 flex justify-center">
        <span className="h-1 w-24 rounded-full bg-primary" />
        <span className="mx-2 h-1 w-4 rounded-full bg-primary/50" />
        <span className="h-1 w-10 rounded-full bg-primary/20" />
      </div>

      <p className="mt-6 leading-7 text-gray-500">{description}</p>
    </div>
  );
}