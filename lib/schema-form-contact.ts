import * as yup from "yup";
export const formContactSchema = yup.object({
  name: yup
    .string()
    .min(2, "الاسم لازم يكون على الأقل حرفين")
    .max(50, "الاسم كبير جدًا")
    .required("الاسم مطلوب"),

  tel: yup
    .string()
    .matches(
      /^01(0|1|2|5)[0-9]{8}$/,
      "رقم الموبايل غير صحيح، لازم يكون رقم مصري"
    )
    .required("رقم الموبايل مطلوب"),

  message: yup
    .string()
    .min(10, "الرسالة لازم تكون 10 حروف على الأقل")
    .max(500, "الرسالة طويلة جدًا")
    .required("الرسالة مطلوبة"),
});
