import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { programName, name, phone, carType, trainingArea } =
      await req.json();

    if (!name || !phone || !programName || !carType || !trainingArea) {
      return NextResponse.json(
        { success: false, error: "الحقول الأساسية ناقصة" },
        { status: 400 }
      );
    }

    const telegramText = `
🚗 Drive Safe – اشتراك جديد
━━━━━━━━━━━━━━
👤 الاسم: ${name}
📞 الهاتف: ${phone}
🚘 نوع السيارة: ${carType}
🏫 البرنامج: ${programName}
📍 منطقة التدريب: ${trainingArea}
⏰ الوقت: ${new Date().toLocaleString("ar-EG")}
`;

    await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: telegramText,
        }),
      }
    );

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message });
  }
}
