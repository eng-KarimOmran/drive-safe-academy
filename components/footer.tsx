import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  const navLinks = [
    { path: "/#home", label: "الرئيسية" },
    { path: "/#why-us", label: "ليه تختارنا" },
    { path: "/#programs", label: "برامجنا" },
    { path: "/#trainers", label: "المدربون" },
    { path: "/#reviews", label: "آراء المتدربين" },
    { path: "/#faq", label: "الأسئلة الشائعة" },
    { path: "/#contact", label: "تواصل معنا" },
  ];

  const socialMedia = [
    {
      id: "instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/drive_safe_academy",
      color: "hover:text-pink-500",
    },
    {
      id: "facebook",
      icon: <FaFacebook />,
      url: "https://www.facebook.com/profile.php?id=100084842360863",
      color: "hover:text-blue-600",
    },
    {
      id: "gmail",
      icon: <IoMdMail />,
      url: "mailto:algnana740@gmail.com",
      color: "hover:text-red-600",
    },
    {
      id: "whatsapp",
      icon: <FaWhatsapp />,
      url: "https://wa.me/+201553683135",
      color: "hover:text-green-500",
    },
    {
      id: "tiktok",
      icon: <FaTiktok />,
      url: "https://www.tiktok.com/@drive.safe_academy",
      color: "hover:text-black",
    },
  ];

  return (
    <footer className="bg-accent py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        <div className="flex flex-col gap-4 md:items-center">
          <a href="/" className="flex justify-center items-center flex-col">
            <img
              className="w-16"
              src="https://res.cloudinary.com/dpuvf3gfs/image/upload/v1764293017/logo_wkleeh.png"
              alt="logo"
            />
            <h2 className="text-lg md:text-3xl font-bold">DriveSafe</h2>
          </a>
          <p className="text-ring max-w-10/12">
            نقدم دورات لتعليم قيادة السيارات الأتوماتيك والمانيوال مع مدربين
            معتمدين وخبرة تزيد عن 10 عاماً
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-center">
          <span className="text-lg md:text-2xl font-bold">
            التواصل الاجتماعي
          </span>
          <ul className="flex items-center gap-4">
            {socialMedia.map((social) => (
              <li
                className="hover:rotate-360 transition-all duration-500"
                key={social.id}
              >
                <a
                  className={`text-2xl ${social.color}`}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 md:items-center">
          <span className="text-lg md:text-2xl font-bold">روابط سريعة</span>
          <ul className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  className="text-ring hover:text-(--main-color) transition-colors duration-300"
                  href={link.path}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 md:items-center">
          <span className="text-lg md:text-2xl font-bold">عنوانا</span>
          <div className="w-11/12 h-52 overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.1024261231887!2d29.93941387503147!3d31.21789156202508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c5a9aadd51fb%3A0xc342bc9f27795acc!2z2KfYqNix2KfYrCDYs9mK2K_ZiiDYrNin2KjYsSDYp9mE2KjYsdisINin2YTYrtin2YXYsw!5e0!3m2!1sen!2seg!4v1750791961453!5m2!1sen!2seg"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="w-full text-center text-ring text-sm border-t border-ring/20 mt-5 py-4">
        Developed by{" "}
        <a
          href="https://karim-omran.vercel.app"
          className="text-(--main-color)"
          target="_blank"
          rel="noopener noreferrer"
        >
          Karim Omran{" "}
        </a>
        © 2025 – All Rights Reserved
      </div>
    </footer>
  );
}
