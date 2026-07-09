import { FaCheck, FaXmark } from "react-icons/fa6";

export default function Comparison() {
  const rows = [
    {
      us: {
        title: "وقتك كامل بالدقيقة",
        desc: "إحنا بنضمنلك تاخد وقتك كامل، دقيقة بدقيقة.",
      },
      them: {
        title: "وقتك بيضيع عليك",
        desc: "بيتقالك إن الحصة خلصت قبل وقتها، وده معناه إن جزء من وقتك وحقك راح عليك.",
      },
    },
    {
      us: {
        title: "السعر شامل كل حاجة",
        desc: "السعر اللي هتدفعه شامل كل حاجة، مفيش أي زيادات مفاجئة.",
      },
      them: {
        title: "السعر غير شفاف",
        desc: "السعر بيكون قليل في البداية، بس بعدين يطلبوا إكراميات أو مصاريف تانية.",
      },
    },
    {
      us: {
        title: "التدريب في كل الظروف",
        desc: "هتتمرن في كل الظروف: زحمة، طرق سريعة، ركنات وكل اللي هتقابله في الشارع.",
      },
      them: {
        title: "التمرين في أماكن هادية",
        desc: "التمرين بيكون في أماكن هادية عشان يوفروا بنزين، مش عشان تتعلم صح.",
      },
    },
    {
      us: {
        title: "السيطرة من أول حصة",
        desc: "من أول حصة هتمسك الدركسيون وتتحكم بنفسك.",
      },
      them: {
        title: "دورك قليل أثناء التدريب",
        desc: "المدرب بيفضل ماسك الفرامل، وانت دورك بيكون قليل جدًا.",
      },
    },
    {
      us: {
        title: "أماكن تدريب متعددة",
        desc: "لينا مكان ثابت وأماكن تدريب كتير علشان نكون دايمًا قريبين منك.",
      },
      them: {
        title: "عدم وجود أماكن ثابتة",
        desc: "معندهمش مكان ثابت، وساعات بيكون فيه نصب كتير.",
      },
    },
    {
      us: {
        title: "التأكد من إتقان القيادة",
        desc: "بنتأكد إنك اتعلمت السواقة 100% قبل ما نقولك خلصت.",
      },
      them: {
        title: "الانتهاء مهم أكتر من التعلم",
        desc: "كل اللي يهمهم إن الكورس يخلص، حتى لو لسه متعلمتش كويس، ويقولك عيده من الأول على حسابك.",
      },
    },
  ];

  return (
    <section className="relative overflow-hidden bg-neutral-950 py-24 sm:py-32">
      {/* Heading */}
      <div className="mx-auto max-w-2xl px-6 text-center">
        <span className="text-sm font-semibold tracking-wide text-green-400">
          أكاديميتنا
        </span>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          اللي بيميز تدريبنا عن أي مكان تاني؟
        </h2>
        <p className="mt-4 text-base text-neutral-400 sm:text-lg">
          خبرة، سيارات حديثة، تدريب عملي، ومدربون معتمدون. معنا تعليم القيادة
          أسهل وأكثر أمانًا.
        </p>
      </div>

      {/* Comparison */}
      <div className="relative mx-auto mt-16 max-w-5xl px-6 sm:mt-20">
        {/* Column labels */}
        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-green-500/10 py-3 text-center">
            <span className="text-sm font-bold text-green-400 sm:text-base">
              أكاديميتنا
            </span>
          </div>
          <div className="rounded-2xl bg-muted/20 py-3 text-center">
            <span className="text-sm font-bold text-neutral-400 sm:text-base">
              باقي الأماكن
            </span>
          </div>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-4">
          {rows.map((row, i) => (
            <div key={i} className="grid grid-cols-2 gap-4">
              {/* Us */}
              <div className="rounded-2xl border border-green-500/20 bg-green-500/4 p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 text-neutral-950">
                    <FaCheck className="h-3 w-3" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white sm:text-base">
                      {row.us.title}
                    </h3>
                    <p className="mt-1 hidden text-sm leading-relaxed text-neutral-400 sm:block">
                      {row.us.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Them */}
              <div className="rounded-2xl border border-white/5 bg-white/2 p-4 opacity-70 sm:p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-neutral-300">
                    <FaXmark className="h-3 w-3" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-400 sm:text-base">
                      {row.them.title}
                    </h3>
                    <p className="mt-1 hidden text-sm leading-relaxed text-neutral-300 sm:block">
                      {row.them.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
