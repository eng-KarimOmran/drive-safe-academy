import Contact from "../components/sections/Contact/Contact";
import Faq from "../components/sections/Faq/Faq";
import Hero from "../components/sections/Hero/Hero";
import Programs from "../components/sections/Programs/Programs";
import Testimonials from "../components/sections/Testimonials/Testimonials";
import Trainers from "../components/sections/Trainers/Trainers";
import WhyUs from "../components/sections/WhyUs/WhyUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyUs />
      <Programs />
      <Trainers />
      <Testimonials />
      <Faq />
      <Contact />
    </main>
  );
}
