"use client";

import { useState } from "react";
import { SubscriptionData } from "./SubscriptionForm";
import { Academy } from "@/components/sections/Contact/contact.type";

export default function BookingConfirmation({
  submitSuccess,
  academy,
}: {
  submitSuccess: SubscriptionData;
  academy: Academy;
}) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const paymentMethods = academy.paymentLinks.filter((p) => p.url || p.phone);

  // رقم الواتساب مش هيتعرض للمستخدم، بس بيتستخدم داخلياً لبناء رابط الإرسال
  const whatsapp = academy.socialMedia.find((s) => s.platform === "WHATSAPP");
  const fallbackPhone = academy.academyPhones?.[0]?.phone;

  const message = encodeURIComponent(`
السلام عليكم،

حابب أأكد حجز أول حصة، ودي بياناتي:

*الاسم:* ${submitSuccess.fullName}

*رقم الهاتف:* ${submitSuccess.phone}

*البرنامج:* ${submitSuccess.programName}

*منطقة التدريب:* ${submitSuccess.areaName}

*نوع التدريب:* ${submitSuccess.gearType}

هبعت صورة تأكيد الدفع في الرسالة التالية.
`);

  const whatsappHref = whatsapp?.url
    ? `${whatsapp.url}?text=${message}`
    : fallbackPhone
      ? `https://wa.me/${fallbackPhone.replace(/\D/g, "")}?text=${message}`
      : undefined;

  const handleCopy = async (id: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div
      dir="rtl"
      className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-900">
          تم تأكيد الاشتراك 🎉
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          لتأكيد جدية الحجز يرجى دفع ديبوزت 50 جنيه لحجز أول حصة، وبعد الدفع
          أرسل صورة تأكيد الدفع على واتساب.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          هنتواصل معاك بعد إرسال إثبات الدفع لحجز معاد أول حصة.
        </p>
      </div>

      <div className="mt-6 space-y-3 rounded-xl bg-gray-50 p-4">
        <h3 className="font-semibold text-gray-800">تفاصيل الحجز:</h3>
        <DetailRow label="الاسم" value={submitSuccess.fullName} />
        <DetailRow label="التليفون" value={submitSuccess.phone} />
        <DetailRow label="البرنامج" value={submitSuccess.programName} />
        <DetailRow label="نوع القير" value={submitSuccess.gearType} />
        <DetailRow label="الفرع" value={submitSuccess.areaName} />
      </div>

      {/* وسائل الدفع */}
      {paymentMethods.length > 0 && (
        <div className="mt-6 space-y-3">
          <h3 className="text-center font-semibold text-gray-800">
            وسائل الدفع المتاحة
          </h3>
          {paymentMethods.map((p) => (
            <div
              key={p.id}
              className="flex items-center justify-between rounded-xl border border-gray-200 p-3"
            >
              <span className="text-sm font-medium text-gray-700">
                {p.walletProvider}
              </span>

              <div className="flex items-center gap-2">
                {p.phone && (
                  <button
                    type="button"
                    onClick={() => handleCopy(p.id, p.phone!)}
                    dir="ltr"
                    className="relative rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-200"
                  >
                    {p.phone}
                    {copiedId === p.id && (
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-0.5 text-[10px] text-white">
                        تم النسخ
                      </span>
                    )}
                  </button>
                )}

                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-blue-700"
                  >
                    ادفع الآن
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* إرسال صورة الدفع */}
      {whatsappHref && (
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 block w-full rounded-xl bg-green-600 py-3 text-center font-semibold text-white transition hover:bg-green-700"
        >
          إرسال صورة الدفع على واتساب
        </a>
      )}
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-gray-800">{value}</span>
    </div>
  );
}
