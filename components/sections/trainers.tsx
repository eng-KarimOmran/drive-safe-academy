import React from "react";
import SectionTitle from "../section-title";
import { LiaCertificateSolid } from "react-icons/lia";

export default function Trainers() {
  const trainers = [
    {
      id: 1,
      name: "صدقي مدحت",
      title: "مدرب قيادة محترف",
      experience: "2 سنوات خبرة",
      description:
        "يتمتع بخبرة تتجاوز 2 سنوات في تدريب السائقين، ويجيد التعامل مع مختلف المستويات وتقديم شرح مبسط لقواعد القيادة.",
      gender: "male",
    },
    {
      id: 2,
      name: "يحيى حسن",
      title: "مدرب قيادة",
      experience: "6 سنوات خبرة",
      description:
        "يمتلك خبرة 6 سنوات في مجال التدريب على القيادة، ويُعرف بأسلوبه المنظم في توصيل المعلومة ومتابعة تقدم المتدرب.",
      gender: "male",
    },
    {
      id: 3,
      name: "يوسف عبدالحليم",
      title: "مدرب قيادة",
      experience: "5 سنوات خبرة",
      description:
        "لديه خبرة عملية تزيد عن 5 سنوات في تعليم القيادة، ويتميز بالهدوء والقدرة على التعامل مع مختلف ظروف التدريب.",
      gender: "male",
    },
    {
      id: 4,
      name: "أحمد فتحي",
      title: "مدرب قيادة",
      experience: "2 سنوات خبرة",
      description:
        "خبرة 2 سنوات في مجال التدريب، يجمع بين المعرفة النظرية والتطبيق العملي بطريقة تضمن الاستيعاب الكامل.",
      gender: "male",
    },
    {
      id: 5,
      name: "الكابتن إسراء",
      title: "مدربة قيادة للسيدات",
      experience: "6 سنوات خبرة",
      description:
        "تمتلك خبرة 6 سنوات، وتتميز بالقدرة على بناء الثقة لدى المتدربات وتقديم بيئة تدريب مريحة وآمنة.",
      gender: "female",
    },
    {
      id: 6,
      name: "الكابتن يارا",
      title: "مدربة قيادة",
      experience: "5 سنوات خبرة",
      description:
        "بخبرة 5 سنوات في التدريب، تهتم بتفاصيل القيادة الأساسية وتحرص على توصيل المعلومات بدقة ووضوح.",
      gender: "female",
    },
    {
      id: 7,
      name: "الكابتن هالة",
      title: "مدربة قيادة",
      experience: "7 سنوات خبرة",
      description:
        "تتمتع بخبرة 7 سنوات في تدريب السائقين، وتحرص على تقديم تدريب عملي متدرج يناسب كل المستويات.",
      gender: "female",
    },
  ];
  return (
    <section id="trainers" className="px-4 py-5">
      <SectionTitle label="مدربونا المعتمدون" />
      <p className="text-center">
        فريق من المدربين المؤهلين والمعتمدين مع سنوات من الخبرة
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
        {trainers.map((trainer) => (
          <li
            key={trainer.id}
            className="bg-background rounded-2xl shadow-lg p-5 space-y-1"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto">
              <img
                src={
                  trainer.gender === "male"
                    ? "https://res.cloudinary.com/dpuvf3gfs/image/upload/v1764293038/avatar-male_mvn7ez.png"
                    : "https://res.cloudinary.com/dpuvf3gfs/image/upload/v1764292887/avatar-female_kkwz7b.png"
                }
                className="w-full h-full object-center object-fill"
                alt={trainer.name}
              />
            </div>
            <h3 className="font-bold text-2xl text-center">{trainer.name}</h3>
            <div className="text-(--main-color) font-bold flex justify-center items-center gap-2">
              <LiaCertificateSolid />
              <span>{trainer.experience}</span>
            </div>
            <p className="text-center">{trainer.title}</p>
            <p className="text-ring text-center">{trainer.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
