import { ReactNode } from "react";

export interface ITrainer {
  id: number;
  name: string;
  title: string;
  experience: number;
  description: string;
  gender: "male" | "female";
}

export interface IProgram {
  id: string;
  heading: string;
  description: string;
  priceBeforeDiscount: number;
  isSpecial: boolean;
  priceAfterDiscount: number | null;
  features: { id: number; icon: string; label: string }[];
}

export interface IVideo {
  id: number;
  src: string;
  alt: string;
  name:string
  rate:string
}

export interface IContactItem {
  id: string;
  icon: string;
  label: string;
  value: string;
}

export interface ISettingsSections {
  id: string;
  title: string;
  description: string;
}

export interface ISections {
  children: ReactNode;
  settings: ISettingsSections;
}

export interface IWhyUsCard {
  icon: string;
  title: string;
  description: string;
}
