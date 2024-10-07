import React from 'react';
import Services from './ServiceApi'
import Link from 'next/link'


const ServiceSection = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="service_section pt-175 pb-80 bg-light  xb-hidden">
            <div className="container">
                <div className="heading_block text-center">
                    <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${'/images/shapes/shape_title_under_line.svg'})` }}>
                        Our Services
                    </div>
                    <h2 className="heading_text mb-0">
                        How We Can <mark>Help</mark> You
                    </h2>
                </div>

                <div className="row">
                    {Services.slice(11, 17).map((service, srv) => (
                        <div className="col-lg-4" key={srv}>
                            <div className="iconbox_block">
                                {/* <div className="iconbox_icon">
                                    <Image src={service.sImg} alt="Techco - Service icon" />
                                </div> */}
                                <div className="iconbox_content">
                                    <h3 className="iconbox_title">
                                        <Link href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>
                                            {service.title}
                                        </Link>
                                    </h3>
                                    <p className="mb-0">

                                        {service.description}
                                    </p>
                                    <hr  />
                                    <h6>{service.count} Projects Done</h6>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </section>
    );
}

export default ServiceSection;