"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Add autoplay module CSS

import { Autoplay } from 'swiper/modules';

const suggestions = [
    "Data Center Modernization",
    "Office 365 Migration",
    "Cloud Migration Services",
    "Network Consultation",
    "Security Assessment",
    "Helpdesk Services",
    "Security Operation Centre",
    "Storage Support Services",
    "Server Support Services",
    "Managed IT Services",
    "Managed Enterprise Networks",
    "Microsoft Copilot",
    "Google Cloud Platform",
    "Microsoft Azure",
    "AWS",
    "Robotic Process Automation",
    "Intelligent Process Automation",
    "Analytics & BI",
    "Chatbot Development",
    "ML OPS",
    "GEN AI development",
    "NLP",
    "Facial Recognition",
    "Anomaly Detection",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "AI- Proof Of Concept",
    "AI App Development",
    "AI Development",
    "AI Consultations"
];

const Hero = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e:any) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e:any) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (inputValue) {
            // Encode the input value to ensure it's URL safe
            const encodedMessage = encodeURIComponent(inputValue);
            window.location.href = `/gpt?initial-message=${encodedMessage}`;
        }
    };

    return (
        <section className="business_consulting_hero_section section_decoration mb-0" style={{ backgroundImage: `url('/images/hero/business_consulting_hero_section_bg.jpg')` }}>
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="container-fluid d-flex justify-content-center flex-column align-items-center">
                        <h2>Cloud-Powered Success for Modern Enterprises</h2>
                            <form onSubmit={handleSubmit} className='control-search'>
                                <input
                                    className="input is-rounded"
                                    type="text"
                                    placeholder="What issue can we solve for you?"
                                    aria-label="Search"
                                    style={{ display: "block" }}
                                    value={inputValue}
                                    onChange={handleInputChange} // Handle input changes
                                />
                                <button
                                    className="button"
                                    aria-label="Submit Search"
                                    aria-hidden="false"
                                    style={{ display: "block" }}
                                    type="submit" // Change to type submit
                                >
                                    <i className="fa-solid fa-arrow-up"></i>
                                </button>
                            </form>
                        <p className='search-suggest '>Enter your prompt in the box above, or try using one of the suggested options below:</p>
                        <Swiper
                            modules={[Autoplay]} // Make sure Autoplay is included here
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
                            breakpoints={{
                                320: {
                                    slidesPerView: 1, // Show 1 slide on mobile screens
                                    slidesPerGroup: 1, // Group 1 slide at a time on mobile
                                },
                                768: {
                                    slidesPerView: 2, // Show 2 slides for tablet-sized screens
                                    slidesPerGroup: 2, // Group 2 slides at a time
                                },
                                1024: {
                                    slidesPerView: 3, // Show 3 slides for desktop screens
                                    slidesPerGroup: 3, // Group 3 slides at a time
                                },
                            }}
                            className='search-tags d-flex'
                        >
                            {suggestions.map((suggestion, idx) => (
                                <SwiperSlide key={idx}>
                                    <p><Link href={`/gpt?initial-message=${encodeURIComponent(suggestion)}`}>{suggestion}</Link></p>
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
