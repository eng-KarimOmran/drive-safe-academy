import { ApiResponse } from "../../../type/type";
import { Academy } from "./contact.type";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`

export async function getAcademy(): Promise<Academy | null> {
    try {
        const res = await fetch(`${API_URL}`, {
            next: { revalidate: 0 },
        });
        if (!res.ok) {
            throw new Error(`فشل جلب بيانات الأكاديمية: ${res.status}`);
        }
        const data: ApiResponse<Academy> = await res.json();
        return data.data
    } catch (error) {
        console.error("خطأ في جلب بيانات الأكاديمية:", error);
        return null
    }
}