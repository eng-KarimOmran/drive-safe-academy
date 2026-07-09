import { GiSteeringWheel } from "react-icons/gi";
import { FaAward } from "react-icons/fa6";

export default function Trainers() {
  const trainers = [
    {
      name: "محمد كريم",
      role: "مدرب قيادة",
      experience: "6 سنوات خبرة",
      description:
        "يمتلك خبرة 6 سنوات في مجال التدريب على القيادة، ويُعرف بأسلوبه المنظم في توصيل المعلومة ومتابعة تقدم المتدرب.",
    },
    {
      name: "ياسين محمود",
      role: "مدرب قيادة",
      experience: "6 سنوات خبرة",
      description:
        "لديه خبرة عملية تزيد عن 5 سنوات في تعليم القيادة، ويتميز بالهدوء والقدرة على التعامل مع مختلف ظروف التدريب.",
    },
    {
      name: "أحمد يوسف",
      role: "مدرب قيادة",
      experience: "5 سنوات خبرة",
      description:
        "يتمتع بخبرة تتجاوز 2 سنوات في تدريب السائقين، ويجيد التعامل مع مختلف المستويات وتقديم شرح مبسط لقواعد القيادة.",
    },
    {
      name: "آدم علي",
      role: "مدرب قيادة",
      experience: "2 سنوات خبرة",
      description:
        "خبرة 2 سنوات في مجال التدريب، يجمع بين المعرفة النظرية والتطبيق العملي بطريقة تضمن الاستيعاب الكامل.",
    },
    {
      name: "نورهان سامح",
      role: "مدربة قيادة",
      experience: "6 سنوات خبرة",
      description:
        "تمتلك خبرة 6 سنوات، وتتميز بالقدرة على بناء الثقة لدى المتدربات وتقديم بيئة تدريب مريحة وآمنة.",
    },
  ];

  return (
    <section
      id="trainers"
      className="relative overflow-hidden bg-neutral-950 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 -translate-y-1/3 rounded-full bg-green-500/10 blur-[120px]" />

      {/* Heading */}
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <span className="text-sm font-semibold tracking-wide text-green-400">
          فريقنا
        </span>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          تعلم من الأفضل!
        </h2>
        <p className="mt-4 text-base text-neutral-400 sm:text-lg">
          فريق من المدربين المؤهلين والخبراء
        </p>
      </div>

      {/* Trainers grid */}
      <div className="relative mx-auto mt-16 flex max-w-6xl flex-wrap justify-center gap-6 px-6 sm:mt-20">
        {trainers.map((trainer) => (
          <div
            key={trainer.name}
            className="group flex w-full flex-col items-center rounded-3xl border border-white/10 bg-white/3 p-7 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:bg-white/6 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
          >
            {/* Avatar */}
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-green-400 transition-colors duration-300 group-hover:bg-green-500 group-hover:text-white">
              <GiSteeringWheel className="h-9 w-9" />
              <span className="absolute -bottom-1 -left-1 flex h-7 w-7 items-center justify-center rounded-full bg-neutral-950 text-green-400 ring-2 ring-neutral-950">
                <FaAward className="h-3.5 w-3.5" />
              </span>
            </div>

            {/* Name & role */}
            <h3 className="mt-5 text-lg font-bold text-white">
              {trainer.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-green-400">
              {trainer.role}
            </p>

            {/* Experience badge */}
            <span className="mt-3 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-neutral-400">
              {trainer.experience}
            </span>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              {trainer.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
