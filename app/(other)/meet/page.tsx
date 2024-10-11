"use client";
import { useEffect } from "react";
import BreadCrumb from "@/components/Breadcrumb";
import CtaSection from "@/components/CtaSection";

export default function Home() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <main className="page_content about-page">
                <BreadCrumb pageTop="Meet" pagesub="Now 😃" pageTitle="Schedule a Meeting" />
                <section className="contact_section bg-light">
                    <div className="container">
                        <div className="calendly-inline-widget" 
                             data-url="https://calendly.com/ashirafridi-personal/30min" 
                             style={{ minWidth: "320px", height: "700px" }}>
                        </div>
                    </div>
                </section>
                <CtaSection />
            </main>
        </>
    );
}
