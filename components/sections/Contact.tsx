import { getAcademy } from "@/service";
import { SocialMedia } from "@/type";
import { BiLogoGmail } from "react-icons/bi";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
  FaGlobe,
  FaWallet,
  FaTiktok,
} from "react-icons/fa6";

export function getSocialIcon(platform: SocialMedia["platform"]) {
  const key = String(platform).toLowerCase();
  switch (key) {
    case "facebook":
      return FaFacebookF;
    case "instagram":
      return FaInstagram;
    case "youtube":
      return FaYoutube;
    case "linkedin":
      return FaLinkedinIn;
    case "whatsapp":
      return FaWhatsapp;
    case "tiktok":
      return FaTiktok;
    case "gmail":
      return BiLogoGmail;
    default:
      return FaGlobe;
  }
}

export default async function Contact() {
  const academy = await getAcademy();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-neutral-950 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 -translate-y-1/3 rounded-full bg-green-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-green-400">
            تواصل معنا
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            كل طرق التواصل في مكان واحد
          </p>
          <p className="mt-4 text-base text-neutral-400">
            تقدر تتواصل معانا من خلال أي وسيلة، أو تزورنا في أحد الفروع
          </p>
        </div>

        {academy ? (
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* أرقام التليفون */}
            {academy.academyPhones.length > 0 && (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                    <FaPhoneAlt className="h-4 w-4" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    أرقام التواصل
                  </h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {academy.academyPhones.map((phone) => (
                    <li key={phone.id}>
                      <a
                        href={`tel:${phone.phone}`}
                        dir="ltr"
                        className="block text-right text-neutral-300 transition hover:text-green-400"
                      >
                        {phone.phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* العناوين */}
            {academy.addresses.length > 0 && (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                    <FaMapMarkerAlt className="h-4 w-4" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">العناوين</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {academy.addresses.map((address) => (
                    <li key={address.id} className="text-neutral-300">
                      {address.address}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* السوشيال ميديا */}
            {academy.socialMedia.length > 0 && (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                    <FaGlobe className="h-4 w-4" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    سوشيال ميديا
                  </h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-3">
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
              </div>
            )}

            {/* روابط الدفع */}
            {academy.paymentLinks.length > 0 && (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:col-span-2 lg:col-span-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                    <FaWallet className="h-4 w-4" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    طرق الدفع
                  </h3>
                </div>
                <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {academy.paymentLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-neutral-300 transition hover:border-green-400/50 hover:text-green-400"
                      >
                        <span className="font-medium">
                          {link.walletProvider}
                        </span>
                        <span dir="ltr" className="text-sm text-neutral-500">
                          {link.phone}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div />
        )}
      </div>
    </section>
  );
}
