"use client";

import { useFormik } from "formik";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { formSubscribeSchema } from "@/lib/schema-form-subscribe";
import { Spinner } from "./ui/spinner";
import { handleUpload } from "@/lib/uploadToCloudinary";
import { toast } from "sonner";

interface SubscribeProgramFormProps {
  programName: string;
}

export default function SubscribeProgramForm({
  programName,
}: SubscribeProgramFormProps) {
  const carTypes = ["مانيوال", "اوتوماتيك"];
  const areas = ["الشاطبي", "سموحة", "السيوف"];

  const formik = useFormik({
    initialValues: {
      programName,
      name: "",
      phone: "",
      carType: "",
      trainingArea: "",
      picture: null as File | null,
    },
    validationSchema: formSubscribeSchema,
    onSubmit: async (values) => {
      const file = values.picture as File;
      const url = await handleUpload(file);
      const res = await fetch("/api/send-subscription-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          programName,
          name: values.name,
          phone: values.phone,
          carType: values.carType,
          trainingArea: values.trainingArea,
          url: url,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("تم تأكيد اشتراكك. سيتواصل معك فريقنا لحجز المواعيد.");
        formik.resetForm();
      } else {
        toast.error("حدث خطأ أثناء إرسال البيانات.");
      }
    },
  });

  return (
    <form
      className="shadow-lg rounded-2xl space-y-6 bg-accent p-4"
      onSubmit={formik.handleSubmit}
    >
      <div className="grid w-full gap-3">
        <Label htmlFor="programName">اسم البرنامج</Label>
        <Input
          type="text"
          id="programName"
          name="programName"
          disabled
          value={formik.values.programName}
        />
      </div>

      <div className="grid w-full gap-3">
        <Label htmlFor="name">الاسم بالكامل</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="مثال: احمد محمد"
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
        <Label htmlFor="picture">صورة إيصال الدفع</Label>
        <Input
          type="file"
          id="picture"
          name="picture"
          accept="image/*"
          onChange={(e) =>
            formik.setFieldValue("picture", e.currentTarget.files?.[0])
          }
        />
        {formik.touched.picture && formik.errors.picture && (
          <p className="text-red-500 text-sm">{formik.errors.picture}</p>
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
        <div className="flex items-center gap-6 mt-2">
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
