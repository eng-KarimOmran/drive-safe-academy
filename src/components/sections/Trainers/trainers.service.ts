import { ApiResponse } from "../../../type/type";
import { Trainer } from "./trainers.type";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/captains`

export async function getTrainers(): Promise<Trainer[] | null> {
    try {
        const res = await fetch(`${API_URL}`, {
            next: { revalidate: 0 },
        });

        if (!res.ok) {
            throw new Error(`فشل جلب بيانات الندربين: ${res.status}`);
        }

        const data: ApiResponse<Trainer[]> = await res.json();

        return data.data

    } catch (error) {
        console.error("خطأ في جلب بيانات الندربين:", error);
        return null
    }
}