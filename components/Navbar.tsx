import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { label: "ليه تختارنا", path: "/#why-us" },
    { label: "برامجنا", path: "/#programs" },
    { label: "المدربون", path: "/#trainers" },
    { label: "آراء المتدربين", path: "/#reviews" },
    { label: "الأسئلة الشائعة", path: "/#faq" },
    { label: "تواصل معنا", path: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-3 sm:px-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-xl sm:px-5 sm:py-2 md:mt-4">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <div className="flex items-center justify-center rounded-full bg-white p-1 shadow-md ring-1 ring-black/5">
            <Image
              src="/favicon.ico" // ضع اسم اللوجو هنا
              alt="Drive Safe"
              width={150}
              height={150}
              priority
              className="h-9 w-9 rounded-full object-cover sm:h-11 sm:w-11 md:h-12 md:w-12"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-6 text-sm font-medium text-white lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className="whitespace-nowrap transition-colors duration-300 hover:text-green-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/#programs"
          className="rounded-full bg-green-500 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-green-600 md:px-5 md:py-2"
        >
          برامجنا
        </Link>
      </div>
    </nav>
  );
}
