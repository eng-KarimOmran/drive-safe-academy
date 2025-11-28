import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { programName, name, phone, carType, trainingArea, url } =
      await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Drive Safe" <${process.env.SMTP_USER}>`,
      to: process.env.SEND_TO,
      subject: `اشتراك جديد من ${name}`,
      html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333; direction: rtl; text-align: right;">
    <h2 style="color: #1a73e8; text-align: right;">تفاصيل الاشتراك</h2>
    <p><strong>البرنامج:</strong> ${programName}</p>
    <p><strong>الاسم:</strong> ${name}</p>
    <p><strong>الهاتف:</strong> ${phone}</p>
    <p><strong>نوع السيارة:</strong> ${carType}</p>
    <p><strong>منطقة التدريب:</strong> ${trainingArea}</p>

    ${
      url
        ? `
      <div style="margin-top: 20px; text-align: center;">
        <p><strong>صورة إيصال الدفع:</strong></p>
        <img src="${url}" alt="Payment Receipt" style="max-width: 300px; border: 1px solid #ccc; border-radius: 8px;" />
        <br/>
        <a href="${url}" target="_blank" style="
          display: inline-block;
          margin-top: 10px;
          padding: 10px 20px;
          background-color: #1a73e8;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
        ">عرض الصورة كاملة</a>
      </div>
    `
        : ""
    }
  </div>
`,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message });
  }
}
