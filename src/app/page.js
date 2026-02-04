import AboutSection from "@/components/home/HomeCenter/centerSection";
import FAQ from "@/components/home/HomeFAQ/FAQ";
import HeroSection from "@/components/home/HomeHero/hero";
import HomecardSection from "@/components/home/HomeCards/homeCard";
import Testimonial from "@/components/home/HomeTestimonial/Testimonial";



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