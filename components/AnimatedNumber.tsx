"use client";

import { useCountUp } from "@/hooks/useCountUp";

type AnimatedNumberProps = {
  value: number;
};

export function AnimatedNumber({ value }: AnimatedNumberProps) {
  const count = useCountUp(value, 2000);

  return <>{count.toLocaleString("en-US")}</>;
}
