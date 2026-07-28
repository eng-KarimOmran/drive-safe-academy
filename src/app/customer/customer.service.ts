import { notFound } from "next/navigation";
import { CustomerDetails } from "./customer.type";
import { ApiResponse } from "@/type/type";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/client`

export async function getCustomer(customerId: string): Promise<CustomerDetails> {
    try {
        const res = await fetch(`${API_URL}/${customerId}`, {
            next: { revalidate: 0 },
        });
        if (!res.ok) {
            throw new Error(`فشل جلب بيانات العميل: ${res.status}`);
        }
        const data: ApiResponse<CustomerDetails> = await res.json();
        return data.data
    } catch {
        notFound();
    }
}