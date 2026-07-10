import Comparison from "../components/sections/Comparison";
import HeroSec from "../components/sections/HeroSec";
import Programs from "../components/sections/Programs";
import Reviews from "../components/sections/Reviews/Reviews";
import Trainers from "../components/sections/Trainers";
import WhyUs from "../components/sections/WhyUs";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/Navbar";

export default function App() {
  return (
    <section className="relative">
      <Navbar />
      <HeroSec />
      <WhyUs />
      <Comparison />
      <Programs />
      <Trainers />
      <Reviews />
      <Faq />
      <Contact />
    </section>
  );
}
