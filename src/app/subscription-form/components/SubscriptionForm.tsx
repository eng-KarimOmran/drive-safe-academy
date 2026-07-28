"use client";

import { useForm, useWatch } from "react-hook-form";
import { useEffect, useMemo, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Program } from "@/components/sections/Programs/programs.type";
import { Area } from "../subscription-form.type";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { BiMapPin, BiPhone, BiUser } from "react-icons/bi";
import { FaGauge } from "react-icons/fa6";
import { BsArrowLeft } from "react-icons/bs";
import BookingConfirmation from "./BookingConfirmation";
import { Academy } from "@/components/sections/Contact/contact.type";

// نوع التدريب كقيمة عربية واحدة، مش array
const GEAR_TYPES = ["مانيوال", "أوتوماتيك", "مانيوال و أوتوماتيك"] as const;

const formSchema = z.object({
  fullName: z.string().trim().min(3, "يرجى إدخال الاسم بالكامل"),
  phone: z.string().regex(/^01[0125]\d{8}$/, "رقم الموبايل غير صحيح"),
  programName: z.string().min(1),
  gearType: z.enum(GEAR_TYPES, {
    error: "اختر نوع التدريب",
  }),
  areaName: z.string().min(1, "اختر الفرع"),
});

type FormValues = z.infer<typeof formSchema>;
type GearType = (typeof GEAR_TYPES)[number];

export type SubscriptionData = {
  fullName: string;
  phone: string;
  programName: string;
  gearType: "مانيوال" | "أوتوماتيك" | "مانيوال و أوتوماتيك";
  areaName: string;
};

function getAvailableGearTypes(supportType?: Area["supportType"]): GearType[] {
  switch (supportType) {
    case "AUTOMATIC":
      return ["أوتوماتيك"];
    case "MANUAL":
      return ["مانيوال"];
    case "BOTH":
    default:
      return ["مانيوال", "أوتوماتيك", "مانيوال و أوتوماتيك"];
  }
}

function getDefaultGearType(available: GearType[]): GearType | null {
  if (available.includes("أوتوماتيك")) return "أوتوماتيك";
  return available[0] ?? null;
}

export default function SubscriptionForm({
  program,
  areas,
  academy,
}: {
  program: Program;
  areas: Area[];
  academy: Academy;
}) {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      programName: program.name,
      areaName: areas[0]?.name ?? "",
      gearType:
        getDefaultGearType(getAvailableGearTypes(areas[0]?.supportType)) ??
        undefined,
    },
  });

  const areaName = useWatch({ control, name: "areaName" });
  const gearType = useWatch({ control, name: "gearType" });

  const selectedArea = useMemo(
    () => areas.find((area) => area.name === areaName),
    [areas, areaName],
  );

  const availableGearTypes = useMemo(
    () => getAvailableGearTypes(selectedArea?.supportType),
    [selectedArea],
  );

  useEffect(() => {
    if (!gearType || !availableGearTypes.includes(gearType)) {
      const next = getDefaultGearType(availableGearTypes);
      if (next) {
        setValue("gearType", next, { shouldValidate: true });
      }
    }
  }, [areaName, availableGearTypes]);

  const [isSubmittingRequest, setIsSubmittingRequest] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<SubscriptionData | null>(
    null,
  );

  const onSubmit = async (data: FormValues) => {
    setSubmitError(null);
    setIsSubmittingRequest(true);
    try {
      const response = await fetch("/api/subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: data.fullName,
          phone: data.phone,
          programName: program.name,
          areaName: selectedArea?.name ?? data.areaName,
          gearType: data.gearType,
        }),
      });

      if (!response.ok) {
        throw new Error("فشل إرسال الطلب");
      }

      setSubmitSuccess(data);
    } catch (error) {
      setSubmitError("حصل خطأ أثناء إرسال طلبك، جرّب تاني.");
    } finally {
      setIsSubmittingRequest(false);
    }
  };

  return submitSuccess ? (
    <BookingConfirmation academy={academy} submitSuccess={submitSuccess} />
  ) : (
    <div
      dir="rtl"
      className="mx-auto w-full max-w-md rounded-3xl border border-[#E4E1D9] bg-[#FBF9F5] p-6 shadow-[0_20px_50px_-25px_rgba(27,31,42,0.35)] sm:p-8"
    >
      <div className="mb-6">
        {program.featuredReason && (
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#1F4D3D] px-3 py-1 text-xs font-bold text-[#FBF9F5]">
            <MdOutlineStarPurple500 className="h-3.5 w-3.5 fill-[#FFB627] text-[#FFB627]" />
            {program.featuredReason}
          </div>
        )}

        <h2 className="text-2xl font-extrabold leading-snug text-[#1B1F2A] sm:text-[28px]">
          {program.name}
        </h2>

        {program.description && (
          <p className="mt-2 text-[15px] leading-relaxed text-[#6B7280]">
            {program.description}
          </p>
        )}

        <div
          className="mt-5 h-0.75 w-full rounded-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to left, #FFB627 0 14px, transparent 14px 24px)",
          }}
        />
      </div>

      <p className="mb-6 text-sm font-medium text-[#1B1F2A]">
        املأ بياناتك الأساسية لإتمام حجزك في البرنامج.{" "}
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-[#1B1F2A]">
            اسمك بالكامل
          </label>
          <div className="relative">
            <BiUser className="pointer-events-none absolute right-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#9AA0A6]" />
            <input
              {...register("fullName")}
              placeholder="مثال: أحمد محمود"
              className={`w-full rounded-xl border bg-white py-3 pe-11 ps-8 text-[15px] text-[#1B1F2A] outline-none transition focus:border-[#1F4D3D] focus:ring-4 focus:ring-[#1F4D3D]/10 ${
                errors.fullName ? "border-red-400" : "border-[#E4E1D9]"
              }`}
            />
          </div>
          {errors.fullName && (
            <p className="mt-1.5 text-xs font-medium text-red-500">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-[#1B1F2A]">
            رقم الموبايل
          </label>
          <div className="relative">
            <BiPhone className="pointer-events-none absolute right-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#9AA0A6]" />
            <input
              {...register("phone")}
              placeholder="01xxxxxxxxx"
              dir="ltr"
              className={`w-full rounded-xl border bg-white py-3 pe-11 ps-4 text-left text-[15px] text-[#1B1F2A] outline-none transition focus:border-[#1F4D3D] focus:ring-4 focus:ring-[#1F4D3D]/10 ${
                errors.phone ? "border-red-400" : "border-[#E4E1D9]"
              }`}
            />
          </div>
          {errors.phone && (
            <p className="mt-1.5 text-xs font-medium text-red-500">
              {errors.phone.message}
            </p>
          )}
          <input type="hidden" {...register("programName")} />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1B1F2A]">
            اختار مكان التدريب الاقرب ليك
          </label>
          <div className="grid grid-cols-2 gap-2.5">
            {areas.map((area) => {
              const active = areaName === area.name;
              return (
                <label
                  key={area.id}
                  className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-3 text-sm font-medium transition ${
                    active
                      ? "border-[#1F4D3D] bg-[#1F4D3D]/5 text-[#1F4D3D]"
                      : "border-[#E4E1D9] bg-white text-[#1B1F2A] hover:border-[#C9C4B6]"
                  }`}
                >
                  <input
                    type="radio"
                    value={area.name}
                    {...register("areaName")}
                    className="sr-only"
                  />
                  <BiMapPin
                    className={`h-4 w-4 shrink-0 ${
                      active ? "text-[#1F4D3D]" : "text-[#9AA0A6]"
                    }`}
                  />
                  <span className="truncate">{area.name}</span>
                </label>
              );
            })}
          </div>
          {errors.areaName && (
            <p className="mt-1.5 text-xs font-medium text-red-500">
              {errors.areaName.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1B1F2A]">
            نوع التدريب
          </label>
          <div className="grid grid-cols-3 gap-2.5">
            {GEAR_TYPES.map((type) => {
              const enabled = availableGearTypes.includes(type);
              const active = gearType === type && enabled;
              return (
                <label
                  key={type}
                  className={`flex flex-col items-center justify-center gap-1.5 rounded-xl border px-2 py-3 text-center text-xs font-semibold leading-tight transition ${
                    !enabled
                      ? "cursor-not-allowed border-[#E4E1D9] bg-[#F3F1EB] text-[#B4B0A5]"
                      : active
                        ? "cursor-pointer border-[#FFB627] bg-[#FFB627]/10 text-[#1B1F2A]"
                        : "cursor-pointer border-[#E4E1D9] bg-white text-[#1B1F2A] hover:border-[#C9C4B6]"
                  }`}
                >
                  <input
                    type="radio"
                    value={type}
                    disabled={!enabled}
                    {...register("gearType")}
                    className="sr-only"
                  />
                  <FaGauge
                    className={`h-4 w-4 ${
                      active ? "text-[#FFB627]" : "text-[#9AA0A6]"
                    }`}
                  />
                  {type}
                </label>
              );
            })}
          </div>
          {!selectedArea && (
            <p className="mt-1.5 text-xs text-[#9AA0A6]">
              اختار الفرع الأول عشان يظهرلك نوع التدريب المتاح
            </p>
          )}
          {errors.gearType && (
            <p className="mt-1.5 text-xs font-medium text-red-500">
              {errors.gearType.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting || isSubmittingRequest}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#1B1F2A] py-3.5 text-[15px] font-bold text-[#FBF9F5] transition hover:bg-[#1F4D3D] disabled:opacity-60"
        >
          {isSubmitting || isSubmittingRequest
            ? "بنحجزلك..."
            : "احجز مكانك دلوقتي"}
          <BsArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
        </button>

        {submitError && (
          <p className="text-center text-xs font-medium text-red-500">
            {submitError}
          </p>
        )}

        <p className="text-center text-xs text-[#9AA0A6]">
          هنتواصل معاك بعد الحجز لتأكيد الأشتراك
        </p>
      </form>
    </div>
  );
}
