import { ApiResponse } from "../../../type/type";
import { Program } from "./programs.type";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/courses`

export async function getPrograms(): Promise<Program[]> {
    try {
        const res = await fetch(`${API_URL}`, {
            next: { revalidate: 0 },
        });
        if (!res.ok) {
            throw new Error(`فشل جلب البرامج: ${res.status}`);
        }
        const data: ApiResponse<Program[]> = await res.json();
        return data.data
    } catch (error) {
        console.error("خطأ في جلب بيانات البرامج:", error);
        return [];
    }
}