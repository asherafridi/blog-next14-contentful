"use client";
import { useRef, useEffect } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import tImg1 from "/public/images/avatar/avatar_5.webp";
import tImg2 from "/public/images/avatar/avatar_6.webp";
import tImg3 from "/public/images/avatar/avatar_7.webp";

const testimonial = [
  {
    id: "01",
    tImg: tImg1,
    Title: "Amazing software services",
    Des: "Cloud Zone Information Technology exceeded my expectations! They transformed our onsite Data Center into a captivating cloud presence that perfectly meets our requirements. Their expertise and professionalism was outstanding!",
    Name: "Maverick Phoenix",
    sub: "Board Member, UNIQA",
    country: "Seattle, Ukraine",
  },
  {
    id: "02",
    tImg: tImg2,
    Title: "Amazing software services",
    Des: "Working with this czit was a game-changer for my business. They migrated our aged MS Exchange Server to cloud environment. Thus enabling us to take advantage of a whole lot of associated cloud applications like MS Teams and Office365. I highly recommend their services!",
    Name: "Hana Molvoka",
    sub: "CEO, ZZ Agency",
    country: "Seattle, Ukraine",
  },
  {
    id: "03",
    tImg: tImg3,
    Title: "Amazing software services",
    Des: "I am beyond thrilled with the work done by this AI PLATFORM! They took the time to truly understand my vision and created a website that perfectly captures the essence of my brand. Not only is it visually stunning, but it's also user-friendly and easy to navigate. Highly recommend!",
    Name: "Alex Barbosa",
    sub: "CEO, e-shipment",
    country: "Seattle, Ukraine",
  },
];

const Testimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    // if (swiperRef.current) {
    //   // Ensure navigation buttons are set correctly after render
    //   swiperRef.current.params.navigation.prevEl = prevRef.current;
    //   swiperRef.current.params.navigation.nextEl = nextRef.current;
    //   swiperRef.current.navigation.init();
    //   swiperRef.current.navigation.update();
    // }
  }, []);

  return (
    <div className="bg-light pt-5 section_space">
        <div className="heading_block text-center mt-5">
                <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${'/images/shapes/shape_title_under_line.svg'})` }}>
                    Our Testimonials
                </div>
                <h2 className="heading_text mb-0">
                Few Stories from <mark>Our Client</mark>
                </h2>
            </div>
    <div className="container mb-5 ">
      <div className="row">
        <div className="col-lg-4">
          <div className="deals_winner_customers">
          <h3 className="title_text">
              <mark>3,900+</mark> customers win deals with CloudZone IT
            </h3>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="review_onecol_wrapper">
            <div className="review_onecol_carousel">
              <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                speed={100}
                parallax={true}
                onSwiper={(swiper:any) => (swiperRef.current = swiper)}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
              >
                {testimonial.map((testimonial, tsm) => (
                  <SwiperSlide key={tsm}>
                    <div className="review_block_2">
                      <p className="review_commtent">{testimonial.Des}</p>
                      <div className="d-md-flex justify-content-md-between">
                        <div className="review_admin">
                          <div className="review_admin_info">
                            <h4 className="review_admin_name">
                              {testimonial.Name}
                            </h4>
                            <span className="review_admin_designation">
                              {testimonial.sub}
                            </span>
                            {/* <div className="review_admin_country">
                              <span className="country_flag">
                                <Image src={flag} alt="Ukraine Flag" />
                              </span>
                               <span className="country_text">
                                {testimonial.country}
                              </span> 
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* <div className="carousel_arrows_nav">
                <button
                  ref={prevRef}
                  type="button"
                  className="r1cc-swiper-button-prev"
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button
                  ref={nextRef}
                  type="button"
                  className="r1cc-swiper-button-next"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default Testimonial;
