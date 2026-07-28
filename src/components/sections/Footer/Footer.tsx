import Link from "next/link";
import { getAcademy } from "../Contact/contact.service";
import { getSocialIcon } from "../Contact/Contact";

const quickLinks = [
  { label: "الرئيسية", href: "/#hero" },
  { label: "ليه تختارنا", href: "/#comparison" },
  { label: "البرامج", href: "/#programs" },
  { label: "المدربون", href: "/#trainers" },
  { label: "آراء المتدربين", href: "/#testimonials" },
  { label: "الأسئلة الشائعة", href: "/#faq" },
  { label: "تواصل معنا", href: "/#contact" },
];

export default async function Footer() {
  const academy = await getAcademy();

  if (!academy) {
    return (
      <footer>
        <p>
          Developed by{" "}
          <a
            href="https://karim-omran.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            Karim Omran
          </a>
        </p>
      </footer>
    );
  }

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold">{academy.name}</h3>

            <p className="mt-4 leading-7 text-gray-600">
              أكاديمية متخصصة في تعليم القيادة على أيدي مدربين محترفين، هدفنا هو
              مساعدتك على القيادة بثقة وأمان.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {academy.socialMedia.map((social) => {
                const Icon = getSocialIcon(social.platform);

                return (
                  <Link
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <Icon />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">روابط سريعة</h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 transition hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Addresses */}
          <div>
            <h3 className="text-lg font-bold">العناوين</h3>

            <ul className="mt-5 space-y-3">
              {academy.addresses.map((address) => (
                <li key={address.id} className="leading-6 text-gray-600">
                  {address.address}
                </li>
              ))}
            </ul>
          </div>

          {/* Phones */}
          <div>
            <h3 className="text-lg font-bold">أرقام التواصل</h3>

            <ul className="mt-5 space-y-3">
              {academy.academyPhones.map((phone) => (
                <li key={phone.id}>
                  <a
                    href={`tel:${phone.phone}`}
                    dir="ltr"
                    className="block text-right text-gray-600 transition hover:text-primary"
                  >
                    {phone.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} {academy.name}. جميع الحقوق محفوظة.
          </p>

          <p>
            Developed by{" "}
            <a
              href="https://karim-omran.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Karim Omran
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
