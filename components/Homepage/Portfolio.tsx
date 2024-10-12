"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Project from './ProjectApi';
import 'swiper/swiper-bundle.css'; // Import the Swiper CSS
import { Pagination, Navigation, A11y } from 'swiper/modules'; // Import required modules
import client from '@/lib/contentfulClient';

const ProjectSection = async () => {
    // Fetching Contentful data directly in the component
    let blogPosts: any[] = [];

    try {
        const res = await client.getEntries({
            content_type: 'portfolio', // Replace with the actual field to sort by
            limit: 10,
        });
        blogPosts = res.items;
    } catch (error) {
        console.error('Error fetching Contentful data:', error);
    }

    return (
        <div className="bg-light pb-5">
            <section className="portfolio_section xb-hidden section_space container ">
                <div className="container">
                    <div className="heading_block">
                        <div className="row align-items-end">
                            <div className="col-lg-7">
                                <div className="heading_focus_text">
                                    <span className="badge bg-secondary text-white">Crafting</span>
                                    Success With 😍 Project
                                </div>
                                <h2 className="heading_text">Our Recent Best Works</h2>
                                <p className="heading_description mb-0">
                                    Our recent projects highlight our expertise in delivering tailored solutions that meet the unique needs and objectives of our clients, custom software.
                                </p>
                            </div>
                            <div className="col-lg-5 d-none d-lg-flex justify-content-end">
                                <Link href="/portfolio" className="btn btn-primary">
                                    <span className="btn_label" data-text="All Works">All Works</span>
                                    <span className="btn_icon">
                                        <i className="fa-solid fa-arrow-up-right"></i>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio_carousel">
                    <Swiper
                        modules={[Pagination, Navigation, A11y]} // Include Navigation module
                        slidesPerView={1}
                        loop={true}
                        spaceBetween={30}
                        allowTouchMove={true}
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                        navigation // Enable navigation buttons
                        speed={400}
                        parallax={true}
                        breakpoints={{
                            1025: {
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {blogPosts.map((BlogDetails, index) => (
                            <SwiperSlide key={index}>
                                <div className="portfolio_block">
                                    <div className="portfolio_image">
                                        <Link className="portfolio_image_wrap bg-light"  href={`/portfolio/${BlogDetails.fields.slug}`}>
                                            <Image src={`https:${BlogDetails.fields.featuredImage.fields.file.url}`} // Adjust image URL from Contentful
                                                alt={BlogDetails.fields.title}
                                                width={2580}
                                                height={1190} />
                                    </Link>
                                    </div>
                                    <div className="portfolio_content">
                                        <h3 className="portfolio_title">
                                            <Link href={`/portfolio/${BlogDetails.fields.slug}`} >
                                                {BlogDetails.fields.title}
                                            </Link>
                                        </h3>
                                        <ul className="category_list unordered_list">
                                            <li>
                                                <Link  href={`/portfolio/${BlogDetails.fields.slug}`} >
                                                {BlogDetails.fields.tags.tags[0]}
                                                </Link>
                                            </li>
                                        </ul>
                                        <Link className="btn btn-outline-light"  href={`/portfolio/${BlogDetails.fields.slug}`}>
                                            <span className="btn_label" data-text="Explore">Explore</span>
                                            <span className="btn_icon">
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="container text-center d-block d-lg-none">
                    <div className="btns_group pb-0">
                        <Link className="btn btn-primary" href="/portfolio">
                            <span className="btn_label" data-text="All Works">All Works</span>
                            <span className="btn_icon">
                                <i className="fa-solid fa-arrow-up-right"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProjectSection;
