import SectionTitle from "@/components/section-title";
import SubscribeProgramForm from "@/components/subscribe-program-form";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default async function SubscribeProgram({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const programsMap: Record<string, string> = {
    practice: "برنامج الممارسة",
    comprehensive: "البرنامج الشامل",
    traffic: "برنامج اختبار المرور",
    golden: "البرنامج الذهبي",
    single: "برنامج الحصة الواحدة",
  };
  if (!name || !programsMap[name]) {
    return redirect("/#programs");
  }
  return (
    <section className="px-4 py-5">
      <SectionTitle label="تأكيد الاشتراك" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-background p-4 rounded-xl">
        <div className="flex flex-col items-center gap-4">
          <span className="text-3xl md:text-4xl font-bold text-center text-primary">
            خد أول خطوة.. <br /> والباقي علينا لحد ما تبقى سواق!
          </span>
          <span>
            لتأكيد الأشتراك يجب تحويل مبلغ
            <span className="text-(--main-color)"> 50 </span> ج.م
          </span>
          <img src="/insta-pay.jpg" alt="insta-pay" className="w-3xs" />
          <Button asChild>
            <a
              href="https://ipn.eg/S/karim.omran.2004/instapay/0R3Tbb"
              target="_blank"
              rel="noopener noreferrer"
            >
              امسح ال qr code او اضغط هنا للدفع
            </a>
          </Button>
        </div>
        <SubscribeProgramForm programName={programsMap[name]} />
      </div>
    </section>
  );
}
