import * as Yup from "yup";

export const formSubscribeSchema = Yup.object({
  name: Yup.string()
    .min(2, "الاسم يجب أن يكون على الأقل حرفين")
    .required("الاسم مطلوب"),
  phone: Yup.string()
    .matches(
      /^01(0|1|2|5)[0-9]{8}$/,
      "رقم الموبايل غير صحيح، لازم يكون رقم مصري"
    )
    .required("رقم الموبايل مطلوب"),
  carType: Yup.string().required("اختر نوع السيارة"),
  trainingArea: Yup.string().required("اختر منطقة التدريب"),
});
