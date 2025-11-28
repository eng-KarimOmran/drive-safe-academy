"use client";
import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useFormik } from "formik";
import { Spinner } from "./ui/spinner";
import { toast } from "sonner";
import { formContactSchema } from "@/lib/schema-form-contact";
import MessageError from "./message-error";

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      tel: "",
      message: "",
    },
    onSubmit: async (values, actions) => {
      const { name, message, tel } = values;
      try {
        await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, tel, message }),
        });
        actions.resetForm();
        return toast.success(
          "لقد تم إرسال رسالتك بنجاح وسوف تتلقى الرد في أقرب وقت ممكن."
        );
      } catch (error) {
        return toast.error("لقد حدث خطأ ونحن نعمل على إيجاد حل.");
      }
    },
    validationSchema: formContactSchema,
  });
  return (
    <form
      className="bg-background space-y-4 rounded-2xl shadow-md p-4"
      onSubmit={formik.handleSubmit}
    >
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="name">اسمك</Label>
        <Input
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.name}
          type="text"
          id="name"
          placeholder="احمد محمد"
        />
        {formik.errors.name && formik.touched.name && (
          <MessageError error={formik.errors.name} />
        )}
      </div>
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="tel">الهاتف</Label>
        <Input
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.tel}
          type="tel"
          id="tel"
          placeholder="01xxxxxxxxx"
        />
        {formik.errors.tel && formik.touched.tel && (
          <MessageError error={formik.errors.tel} />
        )}
      </div>
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="message">رسالتك</Label>
        <Textarea
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.message}
          id="message"
          placeholder="اكتب رسالتك هنا"
        />
        {formik.errors.message && formik.touched.message && (
          <MessageError error={formik.errors.message} />
        )}
      </div>
      <Button
        disabled={formik.isSubmitting}
        className="w-full"
        type="submit"
        variant="main"
      >
        {formik.isSubmitting && <Spinner />}
        ارسال
      </Button>
    </form>
  );
}
