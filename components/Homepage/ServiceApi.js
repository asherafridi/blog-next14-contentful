import sImg1 from '/public/images/services/service_image_1.webp'
import sImg2 from '/public/images/services/service_image_2.webp'
import sImg3 from '/public/images/services/service_image_3.webp'
import sImg4 from '/public/images/services/service_image_4.webp'
import sImg5 from '/public/images/services/service_image_5.webp'

import icon1 from '/public/images/icons/icon_code.svg'
import icon2 from '/public/images/icons/icon_programming_tree.svg'
import icon3 from '/public/images/icons/icon_monitor_2.svg'
import icon4 from '/public/images/icons/icon_phone.svg'
import icon5 from '/public/images/icons/icon_bug.svg'
import icon6 from '/public/images/icons/icon_programming.svg'

import icon7 from '/public/images/icons/icon_analisis_2.svg'
import icon8 from '/public/images/icons/icon_process.svg'
import icon9 from '/public/images/icons/icon_chart_2.svg'
import icon10 from '/public/images/icons/icon_meeting.svg'
import icon11 from '/public/images/icons/icon_bulb_2.svg'
import icon12 from '/public/images/icons/icon_speed_miter.svg'



const Services = [
    {
        Id: '1',
        sImg: sImg1,
        title: 'IT Management Services',
        slug: 'IT-Management-Services',
        thumb1: 'Strategy',
        thumb2: 'Consultation',
        col: 'col-lg-4',
        description: 'Visit new places to discover with a Tourist Visa. We deliver your documents ...',
    },
    {
        Id: '2',
        sImg: sImg2,
        title: 'Data Tracking and Security',
        slug: 'Data-Tracking-and-Security',
        thumb1: 'Management',
        thumb2: 'Transfer',
        col: 'col-lg-4',
        description: 'Developing your trade, setting up new sales channels Your visa is ready...',
    },
    {
        Id: '3',
        sImg: sImg3,
        title: 'Website Development',
        slug: 'Website-Development',
        thumb1: 'Landing Page',
        thumb2: 'Plugins',
        col: 'col-lg-4',
        description: 'Developing your trade, setting up new sales channels Your visa is ready...',
    },
    {
        Id: '4',
        sImg: sImg4,
        title: 'Modern Technology Solution',
        slug: 'Modern-Technology-Solution',
        thumb1: 'Consultation',
        thumb2: 'solution',
        col: 'col-lg-4',
        description: 'Embarking on a journey of higher education in a foreign country opens doors to...',
    },
    {
        Id: '5',
        sImg: sImg5,
        title: 'UI/UX Design Services',
        slug: 'UI-UX-Design-Services',
        thumb1: 'Website',
        thumb2: 'Mobile App',
        col: 'col-lg-4',
        description: 'Expert Guidance for a Seamless Immigration Journey Expert Guidance...',
    },
    {
        Id: '6',
        sImg: icon1,
        title: 'Custom Software Development',
        slug: 'Custom Software Development',
        features: [
            "Cloud computing enables scalable and flexible system designs, reducing the need for on-premises infrastructure.",

            "Cloud computing simplifies integration, enhancing connectivity between enterprise systems.",

            "Cloud migration offers cost savings by securely transferring data, eliminating the need for physical servers.",

            "Cloud-native technologies upgrade legacy apps, improving performance and reducing infrastructure costs."
        ]
    },
    {
        Id: '7',
        sImg: icon2,
        title: 'Audit & IT Consulting Services',
        slug: 'Audit-&-IT-Consulting-Services',
        features: ['TechGuard Audit', 'CyberSafe Audit & IT Consulting', 'AssuranceEdge & IT Consulting', 'IT Sentry Audit & IT Consulting']
    },
    {
        Id: '8',
        sImg: icon3,
        title: 'Web Application Design and Development',
        slug: 'Web-Application-Design-and-Development',
        features: ['Web app development services', 'Web portal development services', 'Website development services', 'Offshore web development']
    },
    {
        Id: '9',
        sImg: icon4,
        title: 'Mobile App Design and Development',
        slug: 'Mobile-App-Design-and-Development',
        features: ['Android development services', 'iOS app development services', 'Mobile application design services', 'Enterprise mobile app development']
    },
    {
        Id: '10',
        sImg: icon5,
        title: 'Best UI/UX Design Services',
        slug: 'Best-UI/UX-Design-Services',
        features: ['PixelPerfection UI/UX Design', 'DesignCraft UI/UX Design', 'CreativeWave UI/UX Design', 'InterfaceGenius UI/UX Design']
    },
    {
        Id: '11',
        sImg: icon6,
        title: 'Maintenance and Customer Support',
        slug: 'Maintenance-and-Customer-Support',
        features: ['CareCraft Maintenance', 'FixItPro Maintenance', 'TechCare Maintenance', 'AssistEdge Maintenance']
    },
    {
        Id: '12',
        sImg: icon7,
        title: 'Cloud Computing',
        slug: 'Strategic-Planning-and-Execution',
        description: 'CZIT offers numerous benefits to enterprises through cloud computing, transforming how they operate and compete in the market . Cloud computing offers scalability and flexibility, allowing businesses to easily adjust resources based on demand. Thus providing cost savings by eliminating the need for expensive on-premises infrastructure.',
        count : 75
    },
    {
        Id: '13',
        sImg: icon8,
        title: 'AI & Data analytics',
        slug: 'Business-Process-Optimization',
    description: 'Unlock insights and drive innovation with AI-powered data analytics. Empower your decisions with AI-driven data analytics for a smarter future.',
    count : 32
    },
{
    Id: '14',
        sImg: icon9,
            title: 'Data Engineering & AI',
                slug: 'Digital-Transformation-Consulting',
                    description: 'Our dedicated teams ensure the availability of clean, structured data for accurate and efficient machine learning models. Thus paving way for patterns, make predictions, and automate decision-making processes.',
                    count : 80
    },
{
    Id: '15',
        sImg: icon10,
            title: 'ML OPS',
                slug: 'Strategic-Planning-and-Executions',
                    description: 'ML Ops – Machine Learning Operations, We aim to streamline and automate the lifecycle of machine learning models, from development to deployment and maintenance. ',
                    count : 25
    },
{
    Id: '16',
        sImg: icon11,
            title: 'On-Prem to Azure | AWS | GCP migration',
                slug: 'Change-Management-Solutions',
                    description: 'We migrate from on-premises to the cloud using industry standards enhancing operational efficiency by reducing hardware maintenance and downtime. We adopt scalability and agility, enabling businesses to quickly adapt to changing demands.',
                    count : 67
    },
{
    Id: '17',
        sImg: icon12,
            title: 'Security Assessment',
                slug: 'Performance-Metrics-and-KPI-Development',
                    description: 'We safeguard your data with a comprehensive security assessment to identify and mitigate risks, ensure your data’s integrity with a thorough security assessment to uncover vulnerabilities.',
                    count : 125
    },
]

export default Services;