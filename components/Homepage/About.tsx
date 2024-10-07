"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import about1 from '@/public/images/about/about_image_3.webp'
import about2 from '@/public/images/about/about_image_11.webp'
import about3 from '@/public/images/about/about_image_10.webp'

import Image from 'next/image'


const About = () => {


    return (
        <section className="about_section section_space ">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6">
                        <div className="about_image_1">
                            <Image src={about1} alt="Techco - About" style={{borderRadius:"20px"}} />
                            <Image src={about2} data-parallax='{"y" : 80, "smoothness": 6}' alt="Techco - About" />
                            <Image src={about3} data-parallax='{"y" : -80, "smoothness": 6}' alt="Techco - About" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about_content">
                            <div className="heading_block">
                                <div className="heading_focus_text">
                                    We are 😃
                                    <span className="badge bg-secondary text-white">CloudZone IT</span>
                                </div>
                                <h2 className="heading_text">
                                Cloud Computing: Your Gateway to Innovation
                                </h2>
                            </div>
                            <ul className="icon_list-2  mb-5">
                                <li>
                                    <span className="icon_list_text">
                                        Our scalability ensures that you only pay for what you use, optimizing costs and enhancing efficiency.
                                    </span>
                                </li>
                                <li>
                                    <span className="icon_list_text">
                                        Full-service Cloud solutions offering focus on business victory. Designing a scalable and secure cloud architecture tailored to business requirements.
                                    </span>
                                </li>
                                <li>
                                    <span className="icon_list_text">
                                        Ensuring that the cloud architecture meets all security and compliance requirements by implementing best practices for data protection, identity management, and regulatory compliance.
                                    </span>
                                </li>
                                <li>
                                    <span className="icon_list_text">
                                        Navigating the Path to Success with a Better-Smarter-Faster approach, from physical data centers to cloud environments. We help reduce CAPEX, OPEX, enhance resource usage optimization, and boost your business operations.
                                    </span>
                                </li>
                            </ul>
                            <ul className="btns_group unordered_list p-0 justify-content-start">
                                <li>
                                    <Link href="/pricing" className="btn">
                                        <span className="btn_label" data-text="Read More">Read More</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default About;