import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function splitByWord(str: string, word: string): string[] {
  const index = str.indexOf(word);
  if (index === -1) {
    return [str, "", ""];
  }
  const before = str.slice(0, index);
  const middle = word;
  const after = str.slice(index + word.length);
  return [before, middle, after];
}
