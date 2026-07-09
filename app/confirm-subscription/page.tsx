import { FaCircleCheck, FaWallet } from "react-icons/fa6";

export default function ConfirmSubscription() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-950 px-6 py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 -translate-y-1/3 rounded-full bg-green-500/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-lg rounded-3xl border border-white/10 bg-white/3 p-8 text-center backdrop-blur-sm sm:p-10">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/15 text-green-400">
          <FaCircleCheck className="h-10 w-10" />
        </div>

        <h1 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
          تم تسجيل بياناتك بنجاح
        </h1>

        <p className="mt-3 text-base leading-relaxed text-neutral-400">
          شكرًا لتسجيلك معنا، وهيتواصل معاك حد من فريقنا في أقرب وقت لحجز الحصص.
        </p>

        <div className="my-7 h-px w-full bg-white/10" />

        <div className="flex flex-col gap-4 text-right">
          <div className="flex items-start gap-3 rounded-2xl border border-green-500/30 bg-green-500/6 p-4">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-green-400">
              <FaWallet className="h-4 w-4" />
            </span>
            <div>
              <h3 className="text-sm font-semibold text-white">
                مبلغ تأكيد الحجز (ديبوزيت)
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-400">
                هيتم إبلاغك بمبلغ ديبوزيت بسيط لتأكيد جدية الاشتراك وحجز مكانك،
                وده بيتخصم من قيمة البرنامج الكاملة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
