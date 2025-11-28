import React from "react";
import SectionTitle from "../section-title";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import ContactForm from "../contact-form";

export default function Contact() {
  const contactItems = [
    {
      id: "phone",
      icon: <FaPhone />,
      label: "الهاتف",
      value: "01553683135",
    },
    {
      id: "email",
      icon: <IoMdMail />,
      label: "البريد الإلكتروني",
      value: "algnana740@gmail.com",
    },
    {
      id: "location",
      icon: <FaLocationDot />,
      label: "عنونا",
      value:
        "أبراج سيدي جابر، البرج الخامس، الدور الأول — محافظة الإسكندرية، مصر.",
    },
    {
      id: "clock",
      icon: <FaClock />,
      label: "ساعات العمل",
      value: "السبت - الخميس: ١٠:٠٠ ص - ١٠:٠٠ م",
    },
  ];
  return (
    <section id="contact" className="px-4 py-8">
      <SectionTitle label="تواصل معنا" />
      <p className="text-center">
        نحن هنا للإجابة على استفساراتك ومساعدتك في بدء رحلة تعلم القيادة
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-4">
        <ul className="bg-background space-y-4 rounded-2xl shadow-md p-4">
          {contactItems.map((item) => (
            <li key={item.id} className="flex items-center gap-3">
              <span className="text-3xl">{item.icon}</span>
              <div className="flex flex-col">
                <span className="text-lg font-medium">{item.label}</span>
                <span>{item.value}</span>
              </div>
            </li>
          ))}
        </ul>
        <ContactForm />
      </div>
    </section>
  );
}
