
import About from "@/components/Homepage/About";
import BlogSection from "@/components/Homepage/Blog";
import FaqSection from "@/components/Homepage/Faq";
import Hero from "@/components/Homepage/Hero";
// import PartnerSection from "@/components/Homepage/Partners";
// import ProjectSection from "@/components/Homepage/Portfolio";
import ServiceSection from "@/components/Homepage/Services";
import TechnologySection from "@/components/Homepage/Technology";
// import Testimonial from "@/components/Homepage/Testimonial";
// import dynamic from "next/dynamic";

// const PartnerSection = dynamic(() => import('@/components/Homepage/Partners'), { ssr: true });

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import Loading from "../loading";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <ServiceSection />
    <TechnologySection />
    {/* <Testimonial /> */}
    <FaqSection />
    {/* <ProjectSection /> */}
    <BlogSection />
    {/* <PartnerSection /> */}
     </>
  );
}
