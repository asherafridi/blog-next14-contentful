"use client"
import BreadCrumb from "@/components/Breadcrumb";
import CtaSection from "@/components/CtaSection";
import Image from "next/image";

import aImg from '@/public/images/about/about_image_3.webp'

export default function Home() {

    
   
    
    return (
        <>

            <main className="page_content about-page">
            <BreadCrumb pageTop="About" pagesub="More CZIT 😃" pageTitle="What We Do" />
                <section className="intro_about_section section_space bg-light">
                    <div className="intro_about_content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="image_wrap">
                                        <Image src={aImg} alt="Techco - About " />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="heading_block mb-0">
                            <div className="row justify-content-lg-between">
                                <div className="col-lg-4">
                                    <div className="heading_focus_text">
                                        About
                                        <span className="badge bg-secondary text-white">CZIT 🙂</span>
                                    </div>
                                    <h2 className="heading_text mb-0">
                                    The Cost Savings cloud transformation for Your enterprise
                                    </h2>
                                </div>
                                <div className="col-lg-6">
                                    <p className="heading_description mb-0">
                                    At CZIT we offer a comprehensive suite of AI digital services designed to help businesses thrive in the digital age. Our team of AI experts is dedicated to delivering innovative solutions that drive growth, streamline operations, and enhance customer experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <CtaSection />
            </main>
        </>
    );
}
