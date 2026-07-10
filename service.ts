import { notFound } from "next/navigation";
import { env } from "./config/env";
import { Academy, ApiResponse, Area, ICustomerDetails, PlanDetails } from "./type";

const API_URL = env.API_URL

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

export async function getCustomer(customerId: string): Promise<ICustomerDetails> {
    try {
        const res = await fetch(`${API_URL}/client/${customerId}`, {
            next: { revalidate: 3600 },
        });
        if (!res.ok) {
            throw new Error(`فشل جلب المناطق: ${res.status}`);
        }
        const data: ApiResponse<ICustomerDetails> = await res.json();
        return data.data
    } catch {
        notFound();
    }
}