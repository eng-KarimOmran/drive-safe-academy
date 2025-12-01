import SectionTitle from "@/components/section-title";
import SubscribeProgramForm from "@/components/sections/programs/subscribe-program-form";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import programsJson from "../../../components/sections/programs/data-program.json";
export default async function SubscribeProgram({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const programs = JSON.parse(programsJson);
  const program = programs[name];

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
          <Button asChild>
            <a
              href="https://ipn.eg/S/youssef.abdalhalem.20/instapay/5kAJ8g"
              target="_blank"
              rel="noopener noreferrer"
            >
              امسح ال qr code او اضغط هنا للدفع
            </a>
          </Button>
          <img
            src="https://res.cloudinary.com/dpuvf3gfs/image/upload/v1764339650/InstaPay_twwhn7.jpg"
            alt="insta-pay"
            className="max-w-3xs"
          />
          <span>أو يمكنك الدفع مباشرة على رقم الهاتف</span>
          <span className="font-bold text-2xl block mt-1 bg-(--main-color) p-1 rounded-lg text-white">
            01229392703
          </span>
        </div>
      </div>
    </section>
  );
}





  // if (!id || !programsMap[id]) {
  //   return redirect("/#programs");
  // }

          // <SubscribeProgramForm programName={programsMap[name]} />
