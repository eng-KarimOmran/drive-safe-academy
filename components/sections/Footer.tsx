import { getAcademy } from "@/service";
import { getSocialIcon } from "./Contact";

const quickLinks = [
  { label: "الرئيسية", href: "/#home" },
  { label: "ليه تختارنا", href: "/#why-us" },
  { label: "برامجنا", href: "/#programs" },
  { label: "المدربون", href: "/#trainers" },
  { label: "آراء المتدربين", href: "/#reviews" },
  { label: "الأسئلة الشائعة", href: "/#faq" },
  { label: "تواصل معنا", href: "/#contact" },
];

export default async function Footer() {
  const academy = await getAcademy();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-neutral-950 pt-16">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-125 w-125 -translate-x-1/2 translate-y-1/2 rounded-full bg-green-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* عن الأكاديمية */}
          <div>
            <h3 className="text-xl font-bold text-white">Drive Safe Academy</h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              نقدم دورات لتعليم قيادة السيارات الأتوماتيك والمانيوال مع مدربين
              معتمدين وخبرة تزيد عن 10 أعوام.
            </p>

            {academy && academy.socialMedia.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-3">
                {academy.socialMedia.map((social) => {
                  const Icon = getSocialIcon(social.platform);
                  return (
                    <li key={social.id}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-300 transition hover:border-green-400/50 hover:text-green-400"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* روابط سريعة */}
          <div>
            <h3 className="text-lg font-semibold text-white">روابط سريعة</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 transition hover:text-green-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* العناوين */}
          {academy && academy.addresses.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-white">عنوانا</h3>
              <ul className="mt-5 space-y-3">
                {academy.addresses.map((address) => (
                  <li key={address.id} className="text-sm text-neutral-400">
                    {address.address}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* أرقام التواصل */}
          {academy && academy.academyPhones.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-white">
                أرقام التواصل
              </h3>
              <ul className="mt-5 space-y-3">
                {academy.academyPhones.map((phone) => (
                  <li key={phone.id}>
                    <a
                      href={`tel:${phone.phone}`}
                      dir="ltr"
                      className="block text-right text-sm text-neutral-400 transition hover:text-green-400"
                    >
                      {phone.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} – جميع الحقوق محفوظة</p>
          <p>
            Developed by
            <a
              href="https://karim-omran.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 transition hover:text-green-400"
            >
              Karim Omran
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
