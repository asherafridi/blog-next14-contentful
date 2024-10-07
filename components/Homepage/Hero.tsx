"use client"
import React from 'react';
import Link from 'next/link'
import CountUp from 'react-countup';
import shape1 from '@/public/images/hero/logo_google.svg'
import shape2 from '@/public/images/hero/business_consulting_hero_image_1.webp'
import shape3 from '@/public/images/hero/business_consulting_hero_image_2.webp'
import icon1 from '@/public/images/icons/icon_user_3.svg'
import icon2 from '@/public/images/icons/icon_wallet.svg'
import Image from 'next/image';

const Hero = (props:any) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="business_consulting_hero_section section_decoration mb-0" style={{ backgroundImage: `url(${'/images/hero/business_consulting_hero_section_bg.jpg'})` }}>
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="container-fluid d-flex justify-content-center flex-column align-items-center">
                        <h2>Cloud-Powered Success for Modern Enterprises</h2>
                        <div className="control-search">
                            <input className="input is-rounded" type="text" placeholder="What issue can we solve for you?" aria-label="Search" style={{display: "block"}} />
                            <button className="button" aria-label="Submit Search" aria-hidden="false" style={{display: "block"}} aria-disabled="true" disabled={true}>
                            <i className="fa-solid fa-arrow-up"></i>
                            </button>
                        </div>
                        <p className='search-suggest '>Type in your prompt above or try one of these suggestions:</p>
                        <div className='search-tags'>
                        <p><Link href="/">Increase my customer lifetime value</Link></p>
                        <p><Link href="/">Drive profitability of e-commerce</Link></p>
                        <p><Link href="/">Develop resilience in my supply chain</Link></p>
                        <p><Link href="/">Modernize my legacy technology stack</Link></p>
                        <p><Link href="/">Learn what Publicis Sapient does</Link></p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero;