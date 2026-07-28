import Link from "next/link";
import SectionHeading from "../../ui/SectionHeading";
import { getAcademy } from "./contact.service";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaPhone,
  FaLocationDot,
  FaGlobe,
  FaTiktok,
} from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { SocialMedia } from "./contact.type";

export function getSocialIcon(platform: SocialMedia["platform"]) {
  switch (platform) {
    case "FACEBOOK":
      return FaFacebookF;
    case "INSTAGRAM":
      return FaInstagram;
    case "WHATSAPP":
      return FaWhatsapp;
    case "YOUTUBE":
      return FaYoutube;
    case "TIKTOK":
      return FaTiktok;
    case "GMAIL":
      return BiLogoGmail;
    default:
      return FaGlobe;
  }
}

export default async function Contact() {
  const academy = await getAcademy();

  return (
    <section id="contact" className="container mx-auto px-4 py-24">
      <SectionHeading
        title="تواصل معنا"
        description="نحن هنا للإجابة على استفساراتك ومساعدتك في بدء رحلة تعلم القيادة."
      />

      {academy ? (
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3">
          {/* Phones */}
          <div className="rounded-3xl border border-primary/15 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FaPhone />
              </div>

              <div>
                <h3 className="font-bold">أرقام التواصل</h3>
                <p className="text-sm text-gray-500">تواصل معنا مباشرة</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {academy.academyPhones.map((phone) => (
                <a
                  key={phone.id}
                  href={`tel:${phone.phone}`}
                  dir="ltr"
                  className="block rounded-xl border border-gray-100 px-4 py-3 transition hover:border-primary hover:bg-primary/5"
                >
                  {phone.phone}
                </a>
              ))}
            </div>
          </div>

          {/* Addresses */}
          <div className="rounded-3xl border border-primary/15 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FaLocationDot />
              </div>

              <div>
                <h3 className="font-bold">العناوين</h3>
              </div>
            </div>

            {academy.addresses.map((address) => (
              <div key={address.id} className="rounded-xl px-4 py-3">
                {address.address}
              </div>
            ))}
          </div>

          {/* Social */}
          <div className="rounded-3xl border border-primary/15 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FaGlobe />
              </div>

              <div>
                <h3 className="font-bold">سوشيال ميديا</h3>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {academy.socialMedia.map((social) => {
                const Icon = getSocialIcon(social.platform);

                return (
                  <Link
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    className="group flex flex-col items-center justify-center rounded-2xl border border-gray-100 p-4 transition hover:border-primary hover:bg-primary/5"
                  >
                    <Icon className="text-2xl text-gray-600 transition group-hover:text-primary" />

                    <span className="mt-2 text-xs font-medium text-gray-500">
                      {social.platform}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div>لا يوجد بايانات تواصل حاليا</div>
      )}
    </section>
  );
}