import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <section className="min-h-dvh flex flex-col justify-center items-center gap-6 px-4 text-center">
      <div className="space-y-4">
        <h1 className="text-7xl md:text-9xl font-extrabold text-primary tracking-widest drop-shadow-sm">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            عذراً، الصفحة غير موجودة
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            يبدو أن الرابط الذي تبحث عنه غير صحيح، أو تم نقل الصفحة إلى مكان
            آخر.
          </p>
        </div>
      </div>

      <Button
        asChild
        size="lg"
        className="gap-2 mt-4 text-base font-medium px-8 h-12 rounded-xl"
      >
        <Link href="/">
          <FiHome className="w-5 h-5" />
          العودة للصفحة الرئيسية
        </Link>
      </Button>
    </section>
  );
}
