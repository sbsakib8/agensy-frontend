import AboutSection from "@/components/home/HomeCenter/centerSection";
import FAQ from "@/components/home/HomeFAQ/FAQ";
import HeroSection from "@/components/home/HomeHero/hero";
import HomecardSection from "@/components/home/HomeCards/homeCard";
import Testimonial from "@/components/home/HomeTestimonial/Testimonial";

export const metadata = {
  title: "Home",
  description: "SoftStack Agency - Your trusted partner for innovative software development, AI agents, mobile apps, web development, and e-commerce solutions. Transform your business with cutting-edge technology.",
  openGraph: {
    title: "SoftStack Agency | Leading Software Development & AI Solutions",
    description: "Transform your business with cutting-edge software development, AI agents, and digital solutions."
  }
};

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