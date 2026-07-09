import { getAreas, getPlans } from "@/service";
import { FaCheck, FaFire, FaGem } from "react-icons/fa6";
import HandelRegister from "../HandeleRegister";

export default async function Programs() {
  const plans = await getPlans();
  const areas = await getAreas();

  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-neutral-950 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 -translate-y-1/3 rounded-full bg-green-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <span className="text-sm font-semibold tracking-wide text-green-400">
          برامجنا
        </span>

        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          برامجنا التدريبية
        </h2>

        <p className="mt-4 text-base text-neutral-400 sm:text-lg">
          اختار البرنامج الذي يناسبك من مجموعة متنوعة من البرامج التدريبية
        </p>
      </div>

      <div className="relative mx-auto mt-16 flex max-w-6xl flex-wrap justify-center gap-6 px-6 sm:mt-20">
        {plans.length > 0 ? (
          plans.map((plan) => {
            const featured = !!plan.featuredReason;

            return (
              <div
                key={plan.id}
                className={`relative flex w-full flex-col rounded-3xl border p-6 backdrop-blur-sm transition-all duration-300 sm:w-[calc(50%-0.75rem)] sm:p-7 lg:w-[calc(33.333%-1rem)] ${
                  featured
                    ? "border-green-500/50 bg-green-500/6 shadow-[0_0_40px_-15px_rgba(34,197,94,0.4)]"
                    : "border-white/10 bg-white/3 hover:border-white/20"
                }`}
              >
                {plan.featuredReason && (
                  <span className="absolute -top-3 right-6 flex items-center gap-1.5 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-neutral-950">
                    {plan.featuredReason.includes("قيمة") ? (
                      <FaGem className="h-3 w-3" />
                    ) : (
                      <FaFire className="h-3 w-3" />
                    )}

                    {plan.featuredReason}
                  </span>
                )}

                <h3 className="mt-2 text-xl font-bold text-white">
                  {plan.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {plan.description}
                </p>

                <div className="mt-5 flex items-baseline gap-2">
                  {plan.priceOriginal > plan.priceDiscounted && (
                    <span className="text-lg font-medium text-neutral-600 line-through">
                      {plan.priceOriginal}
                    </span>
                  )}

                  <span className="text-3xl font-extrabold text-green-400">
                    {plan.priceDiscounted}
                  </span>

                  <span className="text-sm font-medium text-neutral-400">
                    ج.م
                  </span>
                </div>

                <div className="my-6 h-px w-full bg-white/10" />

                <ul className="flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature.id} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-green-400">
                        <FaCheck className="h-2.5 w-2.5" />
                      </span>

                      <span className="text-sm leading-relaxed text-neutral-300">
                        {feature.feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <HandelRegister areas={areas} plan={plan} />
              </div>
            );
          })
        ) : (
          <div className="flex min-h-62.5 w-full flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/5 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              برامج جديدة قريبًا
            </h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-neutral-400">
              نعمل حاليًا على إضافة برامج تدريبية جديدة تناسب جميع المستويات، من
              المبتدئين وحتى الراغبين في تطوير مهاراتهم. ترقبوا أحدث البرامج
              والعروض قريبًا.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
