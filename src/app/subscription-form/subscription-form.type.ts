import { SupportType } from "@/type/type";

export type Area = {
    id: string;
    name: string;
    supportType: SupportType;
    travelDurationInMinutes: number
    isActive: boolean;
    createdAt: string;
};