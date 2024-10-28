"use client";
import BreadCrumb from "@/components/Breadcrumb";
import CtaSection from "@/components/CtaSection";
import Image from "next/image";
import personImage from "@/public/images/about/1649.jpg"; 
import flowChartImage from "@/public/images/about/image2.png"; 

export default function GenAIJumpstartPage() {
    return (
        <>
            <main className="page_content about-page">
                
                <BreadCrumb pageTop="GenAI Jumpstart" pagesub="More GenAI Solutions" pageTitle="GenAI Product Ideation" />
                
                <section className=" section_space bg-light">
                    <div className="intro_about_content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="image_wrap">
                                        <Image
                                            src={personImage}
                                            alt="AI Ideation Lady"
                                            className="rounded-circle"
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h2>From an AI Idea to a Use Case to a Prototype/MVP in just 2-3 months</h2>
                                    <p>Our GenAI Ideation Jumpstart accelerator program transforms ideas into reality within 10-12 weeks. With a path-to-production focus, we can help your business establish a functioning MVP in your environment, demonstrating AI’s transformative potential.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="heading_block mb-0">
                            <div className="row justify-content-lg-between">
                                <div className="col-lg-4">
                                    <h3>GenAI Project Capabilities:</h3>
                                    <p className="heading_focus_text">
                                        Enhance CX capabilities | Augment team knowledge | Reduce Response Time | Solve customer problems
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <p className="heading_description mb-0">
                                        With our GenAI Intelligent Augmentation, enhance your customer experience platform, assist teams with real-time AI support, and optimize customer support through intelligent augmentation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="outcomes_section section_space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="outcome_box">
                                    <h4>Quality Prototype Design Thinking</h4>
                                    <p>Using GenAI design thinking and iterative testing, our MVP assists customer support teams with data-driven insights and a seamless experience.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="outcome_box">
                                    <h4>Increase Customer Satisfaction</h4>
                                    <p>An intuitive UI for support staff, with live chat transcripts and speech recognition integrated with custom GenAI models, enhances real-time customer interaction.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="outcome_box">
                                    <h4>Reduce Support Call Duration</h4>
                                    <p>GenAI quickly recognizes the call`s intent, providing faster resolution recommendations and reducing overall call duration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="enhancements_section section_space bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h3>Improve Problem Resolution and Team Knowledge</h3>
                                <p>GenAI`s response accuracy of up to 85% enhances team knowledge, instills confidence, and enables faster, more effective problem resolution.</p>
                                <div className="image_wrap">
                                    <Image
                                        src={flowChartImage}
                                        alt="Flow Chart Visualization"
                                        width={400}
                                        height={400}
                                        className="rounded-circle"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <CtaSection />

            </main>
        </>
    );
}
