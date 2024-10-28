"use client"
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import Icon1 from '@/public/images/technology/365.webp'
import Icon2 from '@/public/images/technology/aws.webp'
import Icon3 from '@/public/images/technology/azure.png'
import Icon4 from '@/public/images/technology/cloud.png'
import Icon5 from '@/public/images/technology/copilot.png'
import Image from 'next/image';


const TechnologyList = [
    {
        Id: '1',
        sIcon: Icon1,
        title: 'Microsoft 365',
        desc : "Reach and exceed your company goals with Microsoft 365. Manage your content and tools—like productivity apps, email, appointment scheduling, video meetings, chat, and enterprise-grade security—all in one place."
    },
    {
        Id: '2',
        sIcon: Icon2,
        title: 'AWS',
        desc:"Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud, offering over 200 fully featured services from data centers globally."
    },
    {
        Id: '3',
        sIcon: Icon3,
        title: 'Azure',
        desc:"Microsoft Azure is one of the widely used cloud computing platforms. Azure provides a wide variety of services such as cloud storage, compute services, network services, cognitive services, databases, analytics, and IoT."
    },
    {
        Id: '4',
        sIcon: Icon4,
        title: 'Google Cloud',
        desc:"Bring the simplicity, scale, security, and intelligence of Google’s information approach to your organization. Google offers a complete data foundation to unify all workloads and manage the entire data life cycle."
    },
    {
        Id: '5',
        sIcon: Icon5,
        title: 'Microsoft Copilot',
        desc:"Microsoft Copilot is an AI-powered productivity tool that coordinates LLMs and content in Microsoft Graph with Microsoft 365 productivity apps. Copilot uses Microsoft's Prometheus AI model, which takes advantage of generative AI tools"
    },
    {
        Id: '5',
        sIcon: Icon5,
        title: 'Microsoft copilot for work',
        desc:"Microsoft Copilot for Microsoft 365 is a sophisticated processing and orchestration engine that provides AI-powered productivity capabilities by coordinating MS Office Apps."
    },
]


const TechnologySection = () => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab:any) => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    return (

        <div className="section_space container ">
            <div className="heading_block text-center">
                <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${'/images/shapes/shape_title_under_line.svg'})` }}>
                    Our Technologies
                </div>
                <h2 className="heading_text mb-0">
                    Technology <mark>Portfolio</mark>
                </h2>
            </div>

            <div className="tab_block_wrapper">
                <Nav tabs className="nav justify-content-center">
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            CLOUD INFRASTRUCTURE
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <div className="web_development_technologies row justify-content-center">
                            {TechnologyList.map((technology, cnt) => (
                                <div className="col-lg-2 col-md-3 col-sm-4 col-12" key={cnt}>
                                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                                        <div className="iconbox_icon">
                                            <Image src={technology.sIcon} alt="" />
                                        </div>
                                        <div className="iconbox_content">
                                            <h3 className="iconbox_title mb-0">{technology.title}</h3>
                                            <p className='iconbox_description mt-4'>{technology?.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    )
}

export default TechnologySection;