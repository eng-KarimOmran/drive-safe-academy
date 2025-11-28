import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import generateEmailTemplate from "@/lib/generateEmailTemplate";

export async function POST(req: NextRequest) {
  const { name, tel, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: '"Drive-Safe" <pckareem2004@gmail.com>',
      to: process.env.SEND_TO,
      subject: `Message from ${name}`,
      text: message,
      html: generateEmailTemplate({ name, tel, message }),
    });
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message });
  }
}
