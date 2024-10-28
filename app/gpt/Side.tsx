import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios'; // You can use fetch if you prefer
import Link from 'next/link';

export default function Side() {

    
const suggestions = [
    "Data Center Modernization",
    "Office 365 Migration",
    "Cloud Migration Services",
    "Network Consultation",
    "Security Assessment",
    "Helpdesk Services",
    "Security Operation Centre",
    "Storage Support Services",
    "Server Support Services",
    "Managed IT Services",
    "Managed Enterprise Networks",
    "Microsoft Copilot",
    "Google Cloud Platform",
    "Microsoft Azure",
    "AWS",
    "Robotic Process Automation",
    "Intelligent Process Automation",
    "Analytics & BI",
    "Chatbot Development",
    "ML OPS",
    "GEN AI development",
    "NLP",
    "Facial Recognition",
    "Anomaly Detection",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "AI- Proof Of Concept",
    "AI App Development",
    "AI Development",
    "AI Consultations"
];


    return (
        <>
            <div className="col-md-3 sidebar d-none d-sm-flex gpt-side">
                
                
                {suggestions.map((suggestion, idx) => (
                                <Link href={`/gpt?initial-message=${encodeURIComponent(suggestion)}`}>{suggestion}</Link>
                                
                            ))}
            </div>
        </>
    );
}
