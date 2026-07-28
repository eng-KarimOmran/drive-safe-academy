import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-primary">404</h1>

        <h2 className="mt-4 text-2xl font-bold text-gray-800">
          الصفحة غير موجودة
        </h2>

        <p className="mt-3 text-gray-600">
          عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-primary px-8 py-3 font-bold text-white transition hover:bg-primary/90"
        >
          العودة للرئيسية
        </Link>
      </div>
    </main>
  );
}
