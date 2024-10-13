"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import pimg1 from '@/public/images/technology/365.webp'
import pimg2 from '@/public/images/technology/aws.webp'
import pimg3 from '@/public/images/technology/azure.png'
import pimg4 from '@/public/images/technology/cloud.png'
import pimg5 from '@/public/images/technology/copilot.png'
import Image from "next/image";

// Initialize Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const partners = [
    { pImg: pimg1 },
    { pImg: pimg2 },
    { pImg: pimg3 },
    { pImg: pimg4 },
    { pImg: pimg5 },
    { pImg: pimg3 },
    { pImg: pimg4 },
    { pImg: pimg2 },
];

const PartnerSection = () => {
    return (
        <section className="client_logo_section section_space bg-transparent mb-0">
            <div className="container">
                <div className="heading_block text-center">
                    <h2 className="heading_text mb-0">
                        Our Tech Portfolio
                    </h2>
                </div>
                <div className="client_logo_carousel swiper no_style">
                    <Swiper
                        spaceBetween={20} // Adjust space between slides
                        slidesPerView={5} // Default slides to show
                        loop={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                            reverseDirection: false,
                            waitForTransition: false,
                        }}
                        speed={3000}
                        breakpoints={{
                            1025: { slidesPerView: 7 },
                            991: { slidesPerView: 5 },
                            767: { slidesPerView: 4 },
                            600: { slidesPerView: 3 },
                            450: { slidesPerView: 2 },
                            350: { slidesPerView: 1 }
                        }}
                    >
                        {partners.map((partner, pitem) => (
                            <SwiperSlide key={pitem}>
                                <div className="client_logo_item">
                                    <Image
                                        src={partner.pImg}
                                        alt="Techco - Client Logo"
                                        width={100} // You can set width and height or let Swiper handle it
                                        height={100}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default PartnerSection;
