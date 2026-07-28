import { FaStar, FaUserTie } from "react-icons/fa6";
import { Trainer } from "../trainers.type";

export default function TrainerCard({ trainer }: { trainer: Trainer }) {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
        <FaUserTie size={34} />
      </div>

      <div className="mt-5 text-center">
        <h3 className="text-xl font-bold">{trainer.user.name}</h3>

        <p className="mt-2 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          {trainer.supportType === "AUTOMATIC"
            ? "مدرب أوتوماتيك"
            : trainer.supportType === "MANUAL"
              ? "مدرب مانيوال"
              : "مدرب أوتوماتيك ومانيوال"}
        </p>

        <div className="mt-4 flex justify-center gap-1 text-yellow-400">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
