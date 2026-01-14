import AboutSection from "@/components/home/centerSection";
import FAQ from "@/components/home/FAQ";
import HeroSection from "@/components/home/hero";
import HomecardSection from "@/components/home/homeCard";
import Testimonial from "@/components/home/Testimonial";

export default function Home() {
  return (
    <div >
     
      <HeroSection/>
      <AboutSection/>
      <HomecardSection/>
      <Testimonial/>
      <FAQ/>
    </div>
  );
}
