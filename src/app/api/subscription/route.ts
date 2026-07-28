import { NextResponse } from "next/server";
import { z } from "zod";

const subscriptionSchema = z.object({
    fullName: z.string().trim().min(3),
    phone: z.string().regex(/^01[0125]\d{8}$/),
    programName: z.string().min(1),
    areaName: z.string().min(1),
    gearType: z.string().min(1),
});


function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json(
            { success: false, error: "بيانات غير صالحة" },
            { status: 400 },
        );
    }

    const parsed = subscriptionSchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json(
            { success: false, error: "بيانات ناقصة أو غير صحيحة" },
            { status: 400 },
        );
    }

    const { fullName, phone, programName, areaName, gearType } = parsed.data;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID env vars");
        return NextResponse.json(
            { success: false, error: "خطأ في إعدادات السيرفر" },
            { status: 500 },
        );
    }

    const message = `
    <b>🚗 اشتراك جديد</b>

👤 <b>الاسم:</b> ${escapeHtml(fullName)}

📱 <b>رقم الهاتف:</b> ${escapeHtml(phone)}

📚 <b>البرنامج:</b> ${escapeHtml(programName)}

📍 <b>منطقة التدريب:</b> ${escapeHtml(areaName)}

⚙️ <b>نوع التدريب:</b> ${escapeHtml(gearType)}`;

    try {
        const response = await fetch(
            `https://api.telegram.org/bot${token}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                    parse_mode: "HTML",
                }),
            },
        );

        if (!response.ok) {
            const errorBody = await response.text();
            console.error("Telegram API error:", errorBody);
            return NextResponse.json(
                { success: false, error: "تعذر إرسال الإشعار" },
                { status: 502 },
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Failed to reach Telegram API:", error);
        return NextResponse.json(
            { success: false, error: "تعذر الاتصال بخدمة الإشعارات" },
            { status: 502 },
        );
    }
}