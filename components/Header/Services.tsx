"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import client from '@/lib/contentfulClient';

// Reusable component for rendering links
const LinkList = ({ title, items }:{title:any,items:any}) => (
    <div className="megamenu_widget mt-4">
        <h3 className="megamenu_info_title">{title}</h3>
        <ul className="icon_list unordered_list_block">
            {items.map((item:any, index:any) => (
                <li key={index}>
                    <Link href={`/services/${item.fields.slug}`}>
                        <span className="icon_list_text">{item.fields.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const ServiceMenu = () => {
    const [aiServices, setAiServices] = useState<any>([]);
    const [aiData, setAiData] = useState<any>([]);
    const [cloud, setCloud] = useState<any>([]);
    const [managed, setManaged] = useState<any>([]);
    const [migrate, setMigrate] = useState<any>([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await client.getEntries({
                    content_type: 'services',
                });
                const AiServices = res.items.filter(item => item.fields.category === "AI Services");
                const aiData = res.items.filter(item => item.fields.category === "AI & Data Analytics");
                const cloud = res.items.filter(item => item.fields.category === "Cloud Platforms");
                const ms = res.items.filter(item => item.fields.category === "Managed Services");
                const mg = res.items.filter(item => item.fields.category === "Migrate | Modernize");
                setAiServices(AiServices);
                setAiData(aiData);
                setCloud(cloud);
                setManaged(ms);
                setMigrate(mg);
            } catch (error) {
                console.error('Error fetching Contentful data:', error);
            }
        };

        fetchServices();
    }, []); // Empty dependency array to run on mount


    return (
        <div className="dropdown-menu mega_menu_wrapper p-0" aria-labelledby="services_submenu">
            <div className="container">
                <div className="row justify-content-lg-between">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-4">
                                <LinkList title="AI" items={aiServices} />
                            </div>
                            <div className="col-lg-4">
                                
                            <LinkList title="AI & Data Analytics" items={aiData} />
                            <br />
                            <LinkList title="Cloud Platforms" items={cloud} />
                            </div>
                            <div className="col-lg-4">
                                
                            <LinkList title="Managed Services" items={managed} />
                            <LinkList title="Migrate | Modernize" items={migrate} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceMenu;
