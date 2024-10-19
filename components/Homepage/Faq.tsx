"use client"; 
import React, { useState } from 'react'; 
import shape1 from '/public/images/shapes/shape_space_4.svg'; 
import shape2 from '/public/images/shapes/shape_angle_3.webp'; 
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'; 
import Image from 'next/image'; 

const FaqSection = () => { 
    const [open, setOpen] = useState('1'); 
    const toggle = (id:string) => { 
        if (open === id) { 
            setOpen('1'); 
        } else { 
            setOpen(id); 
        } 
    };

    // Array of FAQ items
    const faqItems = [
        {
            id: '1',
            question: 'What services does czit.io offer?',
            answer: "We offer a range of Cloud Computing services, including on-prem to Azure, AWS, GCP Migrations, Data Analytics. security assessment, natural language processing, machine learning, data analytics, process automations, chatbot development, and AI consultation. Our team of experts can help you leverage AI technologies to improve efficiency, automate processes, gain insights from data, and enhance customer experiences.",
        },
        {
            id: '2',
            question: 'Do I need to have technical expertise to use Cloud Automaton?',
            answer: "No, you do not need to have technical expertise to benefit from our services. Our team of experts will guide you through the entire process, from understanding your business requirements to developing and deploying Cloud solutions. We will ensure that the technology is tailored to your specific needs and provide training and support to help you effectively use and manage AI systems.",
        },
        {
            id: '3',
            question: 'How can I get started with czit ?',
            answer: "To get started, simply reach out to our team through our website or contact information. We will schedule an initial consultation to understand your business goals, discuss potential AI solutions, and provide you with a customized proposal. We are here to help you leverage AI technologies and drive business growth.",
        },
        {
            id: '4',
            question: 'Will AI replace human jobs at my company?',
            answer: "While AI may automate certain tasks, it is unlikely to replace human jobs entirely. Instead, AI is more likely to augment human capabilities and enable employees to focus on higher-value tasks that require creativity, critical thinking, and emotional intelligence. AI can be seen as a tool to enhance human productivity rather than replace humans.",
        },
        {
            id: '5',
            question: 'How long does it take to implement Cloud Computing solutions?',
            answer: "The time required to implement AI solutions varies depending on the complexity of the project and the specific requirements. Simple AI applications can be developed and deployed relatively quickly, while more complex projects may take several months or longer. Our team will work closely with you to understand your needs, define project timelines, and provide regular updates throughout the implementation process.",
        },
    ];

    return ( 
        <section className="faq_section section_decoration pb-5"> 
            <div className="container"> 
                <div className="heading_block text-center"> 
                    <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${'/images/shapes/shape_title_under_line.svg'})` }}> 
                        F.A.Q. 
                    </div> 
                    <h2 className="heading_text mb-0"> 
                    We are ready to <mark>assist!</mark> 
                    </h2> 
                </div> 

                <div className="faq_accordion accordion" id="faq_accordion"> 
                    <Accordion open={open} toggle={toggle} className="accordion" id="service_process_faq"> 
                        {faqItems.map((item) => ( 
                            <AccordionItem className="accordion-item" key={item.id}> 
                                <AccordionHeader targetId={item.id}> 
                                    Q. {item.question} 
                                </AccordionHeader> 
                                <AccordionBody accordionId={item.id} className='acc_body'> 
                                    {item.answer} 
                                </AccordionBody> 
                            </AccordionItem> 
                        ))} 
                    </Accordion> 
                </div> 
            </div> 
            <div className="decoration_item shape_image_1"> 
                <Image src={shape1} alt="Techco Shape" /> 
            </div> 
            <div className="decoration_item shape_image_2"> 
                <Image src={shape2} alt="Techco Shape Angle" /> 
            </div> 
        </section> 
    ); 
}; 

export default FaqSection; 
