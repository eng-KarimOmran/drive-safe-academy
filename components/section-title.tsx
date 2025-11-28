import React from "react";

export default function SectionTitle({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return <h2 className={`text-3xl md:text-5xl text-center font-bold my-5 text-(--title-color) ${className}`}>{label}</h2>;
}
