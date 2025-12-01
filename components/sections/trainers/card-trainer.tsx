import GetIcon from "@/components/get-icon";
import { ITrainer } from "@/type/type";

export default function CardTrainer({ trainer }: { trainer: ITrainer }) {
  const srcImg =
    trainer.gender === "male"
      ? "https://res.cloudinary.com/dpuvf3gfs/image/upload/v1764293038/avatar-male_mvn7ez.png"
      : "https://res.cloudinary.com/dpuvf3gfs/image/upload/v1764292887/avatar-female_kkwz7b.png";

  return (
    <div className="bg-background rounded-2xl shadow-lg p-5 space-y-1 w-full max-w-3xs">
      <div className="w-20 h-20 rounded-full overflow-hidden mx-auto">
        <img
          src={srcImg}
          className="w-full h-full object-center object-fill"
          alt={trainer.name}
        />
      </div>
      <h3 className="font-bold text-2xl text-center">{trainer.name}</h3>
      <div className="text-(--main-color) font-bold flex justify-center items-center gap-2">
        {GetIcon("LiaCertificateSolid")}
        <span>{trainer.experience} سنوات خبرة</span>
      </div>
      <p className="text-center">{trainer.title}</p>
      <p className="text-ring text-center text-wrap">{trainer.description}</p>
    </div>
  );
}
