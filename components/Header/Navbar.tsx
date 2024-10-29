"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import logo from '@/public/logo.png'
import MobileMenu from './MobileMenu'
import Image from 'next/image';
import ServiceMenu from './Services';

const Header = () => {

    const [mobailActive, setMobailState] = useState(false);


    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (

        <header className="site_header site_header_1">
            <div className="header_top text-center">
                <div className="container">
                    <p className="m-0">“Your Customer Service Team needs AI Assistant to Augment Accurate response” - Try our customizable AI solution! <Link href={"/meet"}>Book A Demo</Link></p>
                </div>
            </div>
            <div className={`header_bottom stricky  ${isSticky ? 'stricked-menu stricky-fixed' : ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-2 col-5">
                            <div className="site_logo">
                                <Link className="site_link" href="/">
                                    <Image src={logo} alt="Site Logo – Techco – IT Solutions & Technology, Business Consulting, Software Company Site Template" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 col-2">
                            <nav className="main_menu navbar navbar-expand-lg">
                                <div className="main_menu_inner collapse navbar-collapse justify-content-lg-center" id="main_menu_dropdown">
                                    <ul className="main_menu_list unordered_list justify-content-center">

                                        <li><Link href="/">Home</Link></li>
                                        <li className="dropdown">
                                            <Link className="nav-link" href="/services" id="services_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Our Services
                                            </Link>
                                            <ServiceMenu />
                                        </li>
                                        <li><Link href="#">Our Platforms</Link></li>
                                        <li><Link href="/portfolio">Our Work</Link></li>
                                        <li><Link href="/product-ideation">Product Ideation</Link></li>
                                        <li><Link href="/gpt">ChatIdeas</Link></li>
                                        <li><Link href="/meet">Lets Meet</Link></li>

                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-5 d-flex justify-content-end">
                            <ul className="header_btns_group unordered_list justify-content-end">
                                <li>
                                    <button className="mobile_menu_btn" onClick={() => setMobailState(!mobailActive)} type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
                                        <i className="far fa-bars"></i>
                                    </button>
                                </li>
                                <li className='dropdown'>

                                    <Link className="dropdown btn btn-outline-light" href="https://sys.webstartup.io/login">
                                        <span className="btn_label" data-text="Login">Login</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>

                                    <ul className="dropdown-menu login-menu" aria-labelledby="portfolio_submenu">
                                        <li><Link  href="https://refusionai.com" target='_blank'>GenAI Chatbot</Link></li>
                                        <li><Link  href="https://dialer.czit.io/" target='_blank'>AI Voice Agent</Link></li>
                                        <li><Link  href="https://sys.ideapad.ai/" target='_blank'>AI CRM & Marketing</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mobail-wrap">
                    <div className={`mobail-menu ${mobailActive ? "active" : ""}`}>
                        <div className="xb-header-menu-scroll">
                            <div className="xb-menu-close xb-hide-xl xb-close" onClick={() => setMobailState(!mobailActive)}></div>
                            <nav className="xb-header-nav">
                                <MobileMenu />
                            </nav>
                        </div>
                    </div>
                    <div className="xb-header-menu-backdrop" onClick={() => setMobailState(false)}></div>
                </div>
            </div>
        </header>

    )
}

export default Header;