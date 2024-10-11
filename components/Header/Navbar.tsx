"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import icon1 from '@/public/images/icons/icon_wifi.svg'
import icon2 from '@/public/images/icons/icon_dollar_2.svg'
import icon3 from '@/public/images/icons/icon_chart.svg'
import icon4 from '@/public/images/icons/icon_tag_2.svg'
import icon5 from '@/public/images/icons/icon_user_2.svg'
import icon6 from '@/public/images/icons/icon_users.svg'
import icon7 from '@/public/images/icons/icon_pen.svg'
import icon8 from '@/public/images/clients/client_logo_9.webp'
import icon9 from '@/public/images/clients/client_logo_10.webp'
import icon10 from '@/public/images/avatar/avatar_7.webp'
import icon11 from '@/public/images/icons/icon_quote.svg'
import logo from '@/public/logo.png'
import cases from '@/public/images/case/case_image_4.webp'
import MobileMenu from './MobileMenu'
import Image from 'next/image';

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
                    <p className="m-0">Subscribe us and receive <b>20% bonus</b> discount on checkout. <Link href="/pricing"><u>Learn more</u> <i className="fa-solid fa-angle-right"></i></Link></p>
                </div>
            </div>
            <div className={`header_bottom stricky  ${isSticky ? 'stricked-menu stricky-fixed' : ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-2 col-5">
                            <div className="site_logo">
                                <Link className="site_link" href="/">
                                    <Image src={logo} alt="Site Logo – Techco – IT Solutions & Technology, Business Consulting, Software Company Site Template" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-2">
                            <nav className="main_menu navbar navbar-expand-lg">
                                <div className="main_menu_inner collapse navbar-collapse justify-content-lg-center" id="main_menu_dropdown">
                                    <ul className="main_menu_list unordered_list justify-content-center">

                                        <li><Link href="/">Home</Link></li>
                                        <li className="dropdown">
                                            <Link className="nav-link" href="/" id="services_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Services
                                            </Link>
                                            <div className="dropdown-menu mega_menu_wrapper p-0" aria-labelledby="services_submenu">
                                                <div className="container">
                                                    <div className="row justify-content-lg-between">
                                                        <div className="col-lg-8">
                                                            <div className="row">
                                                                <div className="col-lg-4">
                                                                    <div className="megamenu_widget">
                                                                        <h3 className="megamenu_info_title">Services</h3>
                                                                        <ul className="icon_list unordered_list_block">
                                                                            <li>
                                                                                <Link href="/service-single/IT-Management-Services">
                                                                                    <span className="icon_list_text">
                                                                                        IT Management Services
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link href="/service-single/Data-Tracking-and-Security">
                                                                                    <span className="icon_list_text">
                                                                                        Data Tracking Security
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link href="/service-single/IT-Management-Services">
                                                                                    <span className="icon_list_text">
                                                                                        Website Development
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link href="/service-single/IT-Management-Services">
                                                                                    <span className="icon_list_text">
                                                                                        CRM Solutions and Design
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link href="/service-single/IT-Management-Services">
                                                                                    <span className="icon_list_text">
                                                                                        UI/UX Design Services
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link href="/service-single/IT-Management-Services">
                                                                                    <span className="icon_list_text">
                                                                                        Technology Solution
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link href="/service-single/IT-Management-Services">
                                                                                    <span className="icon_list_text">
                                                                                        Software Development
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="megamenu_widget">
                                                                        <h3 className="megamenu_info_title">Our Fields</h3>
                                                                        <ul className="icon_list unordered_list_block">
                                                                            <li>
                                                                                <Link href="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Healthcare
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link href="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Banks
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link href="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Logistics
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link href="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Supermarkets
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link href="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Industries
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link href="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Hotels
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link href="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Fintech
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="megamenu_widget">
                                                                        <h3 className="megamenu_info_title">Product</h3>
                                                                        <ul className="icon_list unordered_list_block">
                                                                            <li>
                                                                                <Link href="/portfolio">
                                                                                    <span className="icon_list_text">
                                                                                        Case Studies
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link href="/pricing">
                                                                                    <span className="icon_list_text">
                                                                                        Our Pricing
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link href="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Features
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link href="/about">
                                                                                    <span className="icon_list_text">
                                                                                        Overview
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link href="/">
                                                                                    <span className="icon_list_text">
                                                                                        New Releases
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link href="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Solutions
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="social_area">
                                                                <ul className="social_icons_block unordered_list" data-text="Follow Us:">
                                                                    <li>
                                                                        <Link href="/">
                                                                            <i className="fa-brands fa-facebook-f"></i>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/">
                                                                            <i className="fa-brands fa-twitter"></i>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/">
                                                                            <i className="fa-brands fa-linkedin-in"></i>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/">
                                                                            <i className="fa-brands fa-dribbble"></i>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                                <p className="career_link m-0">Looking for new career? <Link href="/">We’re Hiring</Link></p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="megamenu_case bg-primary">
                                                                <h3>Computer Software</h3>
                                                                <h4>Astarte Medical</h4>
                                                                <Image src={cases} alt="Case" />
                                                                <Link className="btn" href="/portfolio">
                                                                    <span className="btn_label" data-text="Read Case">Read Case</span>
                                                                    <span className="btn_icon">
                                                                        <i className="fa-solid fa-arrow-up-right"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li><Link href="/portfolio">Portfolio</Link></li>
                                        <li><Link href="/gpt">GPT</Link></li>
                                        <li><Link href="/meet">Meet Now</Link></li>

                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-5">
                            <ul className="header_btns_group unordered_list justify-content-end">
                                <li>
                                    <button className="mobile_menu_btn" onClick={() => setMobailState(!mobailActive)} type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
                                        <i className="far fa-bars"></i>
                                    </button>
                                </li>
                                <li>
                                    <Link  className="btn btn-outline-light" href="/pricing">
                                        <span className="btn_label" data-text="Login">Login</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
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