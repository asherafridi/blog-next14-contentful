"use client";
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Add autoplay module CSS

import {Autoplay } from 'swiper/modules';


const suggestions = [
    "Increase my customer lifetime value",
    "Drive profitability of e-commerce",
    "Develop resilience in my supply chain",
    "Modernize my legacy technology stack",
    "Learn what Publicis Sapient does",
    "Increase my customer lifetime value",
    "Drive profitability of e-commerce",
    "Develop resilience in my supply chain",
    "Modernize my legacy technology stack",
    "Learn what Publicis Sapient does",
    "Learn what Publicis Sapient does",
    "Learn what Publicis Sapient does"
];

const Hero = () => {
    return (
        <section className="business_consulting_hero_section section_decoration mb-0" style={{ backgroundImage: `url('/images/hero/business_consulting_hero_section_bg.jpg')` }}>
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="container-fluid d-flex justify-content-center flex-column align-items-center">
                        <h2>Cloud-Powered Success for Modern Enterprises</h2>
                        <div className="control-search">
                            <input className="input is-rounded" type="text" placeholder="What issue can we solve for you?" aria-label="Search" style={{ display: "block" }} />
                            <button className="button" aria-label="Submit Search" aria-hidden="false" style={{ display: "block" }} aria-disabled="true" disabled={true}>
                                <i className="fa-solid fa-arrow-up"></i>
                            </button>
                        </div>
                        <p className='search-suggest '>Type in your prompt above or try one of these suggestions:</p>
                        <Swiper
                            modules={[ Autoplay]} // Make sure Autoplay is included here
                            spaceBetween={2}
                            slidesPerView={3}
                            slidesPerGroup={3}
                            speed={1000}
                            loop={true}
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 3000, // Set a reasonable delay (3 seconds)
                                disableOnInteraction: false, // Continue autoplay after user interaction
                                pauseOnMouseEnter: true // Pauses autoplay on hover
                            }}
                            className='search-tags d-flex'
                        >
                            {suggestions.map((suggestion, idx) => (
                                <SwiperSlide key={idx}>
                                    <p><Link href="/">{suggestion}</Link></p>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
