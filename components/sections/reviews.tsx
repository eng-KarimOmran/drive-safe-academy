import { ScrollBarReviews } from "../scroll-bar-reviews";
import SectionTitle from "../section-title";

export interface VideoItem {
  id: number;
  src: string;
  alt: string;
}

export default function Reviews() {
  const reviewVideos: VideoItem[] = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dpuvf3gfs/video/upload/v1764293491/video1_hyd68r.mp4",
      alt: "مراجعة 1",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dpuvf3gfs/video/upload/v1764293670/video2_meym0m.mp4",
      alt: "مراجعة 2",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dpuvf3gfs/video/upload/v1764293777/video3_kbit45.mp4",
      alt: "مراجعة 3",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dpuvf3gfs/video/upload/v1764293882/video4_bu3fuf.mp4",
      alt: "مراجعة 4",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dpuvf3gfs/video/upload/v1764293983/video5_vvjav9.mp4",
      alt: "مراجعة 5",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dpuvf3gfs/video/upload/v1764294191/video6_kie42f.mp4",
      alt: "مراجعة 6",
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/dpuvf3gfs/video/upload/v1764294240/video7_s1nd8k.mp4",
      alt: "مراجعة 7",
    },
  ];

  return (
    <section id="reviews" className="py-5 px-4">
      <SectionTitle label="آراء المتدربين" />
      <p className="text-center">تجارب طلابنا الناجحة في تعلم القيادة </p>
      <ScrollBarReviews Videos={reviewVideos} />
    </section>
  );
}
