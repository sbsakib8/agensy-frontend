import AboutSection from "@/compronent/home/centerSection";
import FAQ from "@/compronent/home/FAQ";
import Footer from "@/compronent/home/Footer";
import HeroSection from "@/compronent/home/hero";
import HomecardSection from "@/compronent/home/homeCard";
import Testimonial from "@/compronent/home/Testimonial";

export default function Home() {
  return (
    <div >
     
      <HeroSection/>
      <AboutSection/>
      <HomecardSection/>
      <Testimonial/>
      <FAQ/>
      <Footer/>
      
    </div>
  );
}
