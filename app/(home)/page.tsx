import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Homepage/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/Homepage/About"), { ssr: false });
const ServiceSection = dynamic(() => import("@/components/Homepage/Services"), { ssr: false });
const TechnologySection = dynamic(() => import("@/components/Homepage/Technology"), { ssr: false });
const FaqSection = dynamic(() => import("@/components/Homepage/Faq"), { ssr: false });
const BlogSection = dynamic(() => import("@/components/Homepage/Blog"), { ssr: false });
// Uncomment other sections as needed
const Testimonial = dynamic(() => import("@/components/Homepage/Testimonial"), { ssr: false });
const PartnerSection = dynamic(() => import("@/components/Homepage/Partners"), { ssr: false });
const ProjectSection = dynamic(() => import("@/components/Homepage/Portfolio"), { ssr: false });

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServiceSection />
      <TechnologySection />
      <Testimonial />
      <FaqSection />
      <ProjectSection />
      <BlogSection />
      <PartnerSection />
    </>
  );
}
