import { ISettingsSections, IVideo } from "@/type/type";
import { ReviewsCarousel } from "./reviews-carousel";
import SectionTitle from "../../section-title";
import reviewsData from "./reviews-data.json";
import Sections from "@/components/Sections";

export default function Reviews() {
  const videos = reviewsData as IVideo[];
  const settings: ISettingsSections = {
    id: "reviews",
    title: "اسمع من طلاب DriveSafe",
    description: "تجارب طلابنا الناجحة في تعلم القيادة",
  };
  return (
    <Sections settings={settings}>
      <ReviewsCarousel videos={videos} />
    </Sections>
  );
}
