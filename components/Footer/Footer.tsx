"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import icon1 from "/public/images/icons/icon_mail.svg";
import icon2 from "/public/images/icons/icon_calling.svg";
import icon3 from "/public/images/icons/icon_map_mark.svg";
import icon4 from "/public/images/icons/icon_mail_2.svg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleNewsletterSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/email/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ recipient: email }),
      });

      const result = await response.json();
      setMessage(response.ok ? "Thank you for subscribing!" : result.error || "Failed to subscribe.");
    } catch (e) {
      console.log(e);
      setMessage("An error occurred, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const services = {
    "Data Center Modernization": "data-center-modernization",
    "Office 365 Migration": "office-365-migration",
    "Cloud Migration Services": "cloud-migration-services",
    "Network Consultation": "network-consultation",
    "Security Assessment": "security-assessment",
    "Helpdesk Services": "helpdesk-services",
  };

  return (
    <footer className="site_footer footer_layout_1">
      <div
        className="content_box"
        style={{ backgroundImage: `url('/images/shapes/bg_pattern_3.svg')` }}
      >
        <div className="container">
          <div className="diract_contact_links text-white">
            <ContactIcon title="Write to us" icon={icon1} text="cs@CloudiDea.io" />
            <ContactIcon title="Call Us (USA)" icon={icon2} text="+(1) 800 806-8575" />
            <ContactIcon title="Our Office" icon={icon3} text="SAN FRANCISCO" />
          </div>
          <div className="footer_main_content">
            <div className="row justify-content-lg-between">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer_widget pe-md-3">
                  <h2 className="footer_info_title">Get In Touch</h2>
                  <p>
                    Contact us today to learn more about how our CLOUD solutions
                    can transform your business.
                  </p>
                  <form
                    className="footer_newslatter"
                    onSubmit={handleNewsletterSubmit}
                  >
                    <label htmlFor="footer_mail_input">
                      <Image src={icon4} alt="Mail SVG Icon" />
                    </label>
                    <input
                      id="footer_mail_input"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                    <button type="submit" disabled={loading}>
                      {loading ? "Sending..." : <i className="fa-solid fa-paper-plane"></i>}
                    </button>
                  </form>
                  {message && <p className={`message ${message.includes("Thank") ? "success" : "error"}`}>{message}</p>}
                  <ul className="social_links_block unordered_list">
                    <li><Link href="/">Facebook</Link></li>
                    <li><Link href="/">Twitter</Link></li>
                    <li><Link href="/">LinkedIn</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Services</h3>
                  <ul className="icon_list unordered_list_block">
                    {Object.entries(services).map(([service, url]) => (
                      <li key={service}>
                        <Link href={`/services/${url}`}>
                          <span className="icon_list_text">{service}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Information</h3>
                  <ul className="icon_list unordered_list_block">
                    <li><Link href="/about-us"><span className="icon_list_text">What We Do</span></Link></li>
                    <li><Link href="/meet"><span className="icon_list_text">Lets Meet</span></Link></li>
                    <li><Link href="/portfolio"><span className="icon_list_text">Our Portfolio</span></Link></li>
                    <li><Link href="/contact-us"><span className="icon_list_text">Contact Us</span></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container d-md-flex align-items-md-center justify-content-md-between">
          <p className="copyright_text m-0">Copyright © 2024 CloudZone IT, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Reusable Contact Icon Component
const ContactIcon = ({ title, icon, text }:{ title:any, icon:any, text:any }) => (
  <div className="iconbox_block layout_icon_left">
    <div className="iconbox_icon">
      <Image src={icon} alt={`${title} Icon`} />
    </div>
    <div className="iconbox_content">
      <h3 className="iconbox_title">{title}</h3>
      <p className="mb-0">{text}</p>
    </div>
  </div>
);

export default Footer;
