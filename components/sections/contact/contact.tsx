import React from "react";
import SectionTitle from "../../section-title";
import ContactForm from "@/components/sections/contact/contact-form";
import contactData from "./contact-data.json";
import { IContactItem } from "@/type/type";
import CardContact from "@/components/sections/contact/card-contact";
export default function Contact() {
  const contactItems = contactData as IContactItem[];
  return (
    <section id="contact" className="px-4 py-8">
      <SectionTitle label="تواصل معنا" />
      <p className="text-center">
        نحن هنا للإجابة على استفساراتك ومساعدتك في بدء رحلة تعلم القيادة
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-4">
        <ul className="bg-background flex flex-col justify-between rounded-2xl shadow-md p-4">
          {contactItems.map((item) => (
            <li key={item.id}>
              <CardContact item={item} />
            </li>
          ))}
        </ul>
        <ContactForm />
      </div>
    </section>
  );
}
