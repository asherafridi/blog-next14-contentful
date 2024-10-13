"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pimg1 from '@/public/images/technology/365.webp'
import pimg2 from '@/public/images/technology/aws.webp'
import pimg3 from '@/public/images/technology/azure.png'
import pimg4 from '@/public/images/technology/cloud.png'
import pimg5 from '@/public/images/technology/copilot.png'
import Image from "next/image";

const partners = [
    {
        pImg: pimg1,
    },
    {
        pImg: pimg2,
    },
    {
        pImg: pimg3,
    },
    {
        pImg: pimg4,
    },
    {
        pImg: pimg5,
    },
    {
        pImg: pimg3,
    },
    {
        pImg: pimg4,
    },
    {
        pImg: pimg2,
    },
]

let settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,

    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};



const PartnerSection = () => {

    return (
        <section className="client_logo_section section_space bg-transparent mb-0">
            <div className="container">
                <div className="heading_block text-center">
                    <h2 className="heading_text mb-0">
                        "Our Tech Portfolio"
                    </h2>
                </div>
                <div className="client_logo_carousel swiper no_style">
                    <Slider {...settings}>
                        {partners.map((partner, pitem) => (
                            <div className="client_logo_item" key={pitem}>
                                <Image src={partner.pImg} alt="Techco - Client Logo"  />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;