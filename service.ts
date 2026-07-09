import { Academy, ApiResponse, Area, PlanDetails } from "./type";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getPlans(): Promise<PlanDetails[]> {
    try {
        const res = await fetch(`${API_URL}/courses`, {
            next: { revalidate: 3600 },
        });
        if (!res.ok) {
            throw new Error(`فشل جلب البرامج: ${res.status}`);
        }
        const data: ApiResponse<PlanDetails[]> = await res.json();
        return data.data
    } catch (error) {
        console.error("خطأ في جلب بيانات الكورسات:", error);
        return [];
    }
}

export async function getAcademy(): Promise<Academy | null> {
    try {
        const res = await fetch(`${API_URL}`, {
            next: { revalidate: 3600 },
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

export async function getAreas(): Promise<Area[]> {
    try {
        const res = await fetch(`${API_URL}/areas`, {
            next: { revalidate: 3600 },
        });
        if (!res.ok) {
            throw new Error(`فشل جلب المناطق: ${res.status}`);
        }
        const data: ApiResponse<Area[]> = await res.json();
        return data.data
    } catch (error) {
        console.error("خطأ في جلب بيانات المناطق:", error);
        return []
    }
}