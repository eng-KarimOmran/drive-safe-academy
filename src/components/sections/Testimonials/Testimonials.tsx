import SectionHeading from "../../ui/SectionHeading";
import { testimonialsData } from "./testimonialsData";
import TestimonialCard from "./components/TestimonialCard";

export default function Testimonials() {
  return (
    <section id="testimonials" className="container mx-auto px-4 py-24">
      <SectionHeading
        title={
          <>
            اسمع من طلاب <span className="text-primary">Drive Safe</span>
          </>
        }
        description="تجارب حقيقية من متدربين بدأوا من الصفر وبقوا بيسوقوا بثقة."
      />

      <div className="mt-14 grid items-start gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-10/12 mx-auto">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.video} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}