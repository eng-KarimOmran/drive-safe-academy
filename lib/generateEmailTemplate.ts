export default function generateEmailTemplate({
  name,
  tel,
  message,
}: {
  name: string;
  tel: string;
  message: string;
}) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333; direction: rtl; text-align: right;">
      <h2 style="color: #1a73e8;">رسالة جديدة من موقع Drive-Safe</h2>
      <p><strong>الاسم:</strong> ${name}</p>
      <p><strong>الهاتف:</strong> ${tel}</p>
      <p><strong>الرسالة:</strong></p>
      <p style="padding: 10px; background: #f0f0f0; border-radius: 5px;">${message}</p>
      <hr />
      <p style="font-size: 12px; color: #777;">تم إرسال هذه الرسالة من نموذج التواصل على الموقع.</p>
    </div>
  `;
}