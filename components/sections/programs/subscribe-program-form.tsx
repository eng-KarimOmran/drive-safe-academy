"use client";

import { useFormik } from "formik";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../../ui/button";
import { formSubscribeSchema } from "@/lib/schema-form-subscribe";
import { Spinner } from "../../ui/spinner";
import { toast } from "sonner";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface SubscribeProgramFormProps {
  programName: string;
}

export default function SubscribeProgramForm({
  programName,
}: SubscribeProgramFormProps) {
  const carTypes = ["مانيوال", "اوتوماتيك"];
  const areas = ["الشاطبي", "سموحة", "السيوف"];
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      programName,
      name: "",
      phone: "",
      carType: "",
      trainingArea: "",
    },
    validationSchema: formSubscribeSchema,
    onSubmit: async (values) => {
      const res = await fetch("/api/send-subscription-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          programName,
          name: values.name,
          phone: values.phone,
          carType: values.carType,
          trainingArea: values.trainingArea,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("تم تأكيد اشتراكك. سيتواصل معك فريقنا لحجز المواعيد.");
        router.replace("/");
      } else {
        toast.error("حدث خطأ أثناء إرسال البيانات.");
      }
    },
  });
  useEffect(() => {
    formik.setFieldValue("trainingArea", "");
  }, [formik.values.carType]);
  return (
    <form
      className="shadow-lg rounded-2xl space-y-6 bg-accent p-4"
      onSubmit={formik.handleSubmit}
    >
      <div className="grid w-full gap-3">
        <label className="text-center font-bold text-2xl">{programName}</label>
      </div>

      <div className="grid w-full gap-3">
        <Label htmlFor="name">الاسم بالكامل</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="اكتب اسمك هنا"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-500 text-sm">{formik.errors.name}</p>
        )}
      </div>

      <div className="grid w-full gap-3">
        <Label htmlFor="phone">رقم الهاتف (متصل بالواتساب)</Label>
        <Input
          type="tel"
          name="phone"
          id="phone"
          placeholder="01xxxxxxxxx"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.phone && formik.errors.phone && (
          <p className="text-red-500 text-sm">{formik.errors.phone}</p>
        )}
      </div>

      <div className="grid w-full gap-3">
        <Label>نوع السيارة التي ترغب في التدريب عليها</Label>
        <div className="flex items-center gap-6 mt-2">
          {carTypes.map((type) => (
            <label key={type} className="flex items-center gap-3">
              <Input
                type="radio"
                name="carType"
                value={type}
                checked={formik.values.carType === type}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
        {formik.touched.carType && formik.errors.carType && (
          <p className="text-red-500 text-sm">{formik.errors.carType}</p>
        )}
      </div>

      <div className="grid w-full gap-3">
        <Label>اختر أقرب منطقة تدريب لك</Label>
        <div className="flex items-center gap-6 mt-2 flex-wrap">
          {areas.map((area) => {
            if (area === "السيوف" && formik.values.carType !== "اوتوماتيك")
              return null;
            return (
              <label key={area} className="flex items-center gap-3">
                <Input
                  type="radio"
                  name="trainingArea"
                  value={area}
                  checked={formik.values.trainingArea === area}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <span>{area}</span>
              </label>
            );
          })}
        </div>
        {formik.touched.trainingArea && formik.errors.trainingArea && (
          <p className="text-red-500 text-sm">{formik.errors.trainingArea}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={formik.isSubmitting}
        variant="main"
        className="w-full"
      >
        {formik.isSubmitting && <Spinner />}
        تأكيد الاشتراك
      </Button>
    </form>
  );
}
