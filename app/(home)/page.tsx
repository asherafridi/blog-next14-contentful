import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Homepage/Hero"), { ssr: false,
  loading: () => <Loading /> });
const About = dynamic(() => import("@/components/Homepage/About"), { ssr: false,
  loading: () => <Loading /> });
const ServiceSection = dynamic(() => import("@/components/Homepage/Services"), { ssr: false,
  loading: () => <Loading /> });
const TechnologySection = dynamic(() => import("@/components/Homepage/Technology"), { ssr: false,
  loading: () => <Loading /> });
const FaqSection = dynamic(() => import("@/components/Homepage/Faq"), { ssr: false ,
  loading: () => <Loading />});
const BlogSection = dynamic(() => import("@/components/Homepage/Blog"), { ssr: false ,
  loading: () => <Loading />});
// Uncomment other sections as needed
const Testimonial = dynamic(() => import("@/components/Homepage/Testimonial"), { ssr: false,
  loading: () => <Loading /> });
const PartnerSection = dynamic(() => import("@/components/Homepage/Partners"), { ssr: false,
  loading: () => <Loading /> });
const ProjectSection = dynamic(() => import("@/components/Homepage/Portfolio"), { ssr: false,
  loading: () => <Loading />  });

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Loading from "../loading";

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
