import Contact from "@/components/sections/contact";
import FAQ from "@/components/sections/faq";
import HeroSection from "@/components/sections/hero-section";
import Programs from "@/components/sections/programs";
import Reviews from "@/components/sections/reviews";
import Trainers from "@/components/sections/trainers";
import WhyUs from "@/components/sections/why-us";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyUs />
      <Programs />
      <Trainers />
      <Reviews />
      <FAQ />
      <Contact />
    </>
  );
}
