"use client";

import { Area, Plan, SupportType } from "@/type";
import { Button } from "./ui/button";
import { Controller, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Field, FieldGroup } from "./ui/field";

import { Label } from "./ui/label";
import { Input } from "./ui/input";

import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  programName: z.string(),
  name: z
    .string()
    .min(1, "الاسم مطلوب")
    .min(3, "الاسم يجب ألا يقل عن 3 أحرف")
    .regex(/^[\u0600-\u06FFa-zA-Z\s]+$/, "الاسم يجب أن يحتوي على حروف فقط"),
  phone: z
    .string()
    .min(1, "رقم الهاتف مطلوب")
    .regex(/^01[0125][0-9]{8}$/, "رقم الهاتف غير صحيح (مثال: 01000000000)"),
  trainingType: z.enum(["AUTOMATIC", "MANUAL"], {
    message: "اختر نوع التدريب",
  }),
  area: z.string().min(1, "المنطقة مطلوبة"),
});

type FormValues = z.infer<typeof formSchema>;

export default function HandelRegister({
  plan,
  areas,
}: {
  plan: Plan;
  areas: Area[];
}) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      programName: plan.name,
      name: "",
      phone: "",
      trainingType: "AUTOMATIC",
      area: "",
    },
  });

  const trainingType = useWatch({ control, name: "trainingType" });

  const onSubmit = async (body: FormValues) => {
    try {
      if (!body) return;
      await fetch("/api/send-subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      router.push("/confirm-subscription");
    } catch {
      toast.error("حدث خطأ أثناء إرسال البيانات.");
    }
  };

  return (
    <Dialog>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTrigger asChild>
          <Button
            type="button"
            className={`mt-7 w-full rounded-full px-5 py-3 text-center text-sm font-semibold transition ${
              plan.featuredReason
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            احجز الآن
          </Button>
        </DialogTrigger>
        <DialogContent showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>{plan.name}</DialogTitle>
            <DialogDescription>{plan.description}</DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name">الاسم كامل</Label>
              <Input
                id="name"
                placeholder="محمد أحمد على"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </Field>
            <Field>
              <Label htmlFor="phone">رقم الهاتف (متصل بالواتساب)</Label>
              <Input
                id="phone"
                placeholder="01000000000"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </Field>
            <Field>
              <Label htmlFor="trainingType">نوع التدريب</Label>
              <Controller
                name="trainingType"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    dir="rtl"
                    className="flex"
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="AUTOMATIC" id="option-one" />
                      <Label htmlFor="option-one">اوتوماتك</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="MANUAL" id="option-two" />
                      <Label htmlFor="option-two">مانيول</Label>
                    </div>
                  </RadioGroup>
                )}
              />
              {errors.trainingType && (
                <p className="text-sm text-red-500">
                  {errors.trainingType.message}
                </p>
              )}
            </Field>
            <Field>
              <Label htmlFor="area">المنطقة</Label>
              <Controller
                name="area"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-45">
                      <SelectValue placeholder="اختر المنطقة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {getAllowArea(areas, trainingType).map((area) => (
                          <SelectItem key={area.name} value={area.name}>
                            {area.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.area && (
                <p className="text-sm text-red-500">{errors.area.message}</p>
              )}
            </Field>
          </FieldGroup>
          <DialogFooter>
            <Button
              onClick={handleSubmit(onSubmit)}
              type="submit"
              className="w-full"
              variant={"destructive"}
              disabled={isSubmitting}
            >
              {isSubmitting ? "جارٍ الإرسال..." : "اشترك"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

const getAllowArea = (areas: Area[], supportType: SupportType) => {
  return areas.filter(
    (a) => a.supportType === supportType || a.supportType === "BOTH",
  );
};
