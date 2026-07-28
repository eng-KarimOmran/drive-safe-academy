import { ApiResponse } from "@/type/type";
import { Area } from "./subscription-form.type";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/areas`

export async function getAreas(): Promise<Area[]> {
    try {
        const res = await fetch(`${API_URL}/`, {
            next: { revalidate: 0 },
        });
        if (!res.ok) {
            throw new Error(`فشل جلب المناطق: ${res.status}`);
        }
        const data: ApiResponse<Area[]> = await res.json();
        return data.data
    } catch (error) {
        console.error("خطأ في جلب المناطق", error);
        return []
    }
}