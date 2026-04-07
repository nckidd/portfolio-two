import { NextResponse } from "next/server";

const experienceData = [
    {
        icon: "/images/icon/tailwind-icon.svg",
        role: "Web Developer & Marketing Manager – Kristin's Kitty Care",
        location: "San Francisco, Ca",
        startYear: "2025",
        endYear: "Present",
        bulletPoints: [
            "Developed a responsive marketing site with SEO and AEO driven architecture and blog integration, improving search discoverability and user acquisition.",
            "Increased search visibility through targeted blog content, capture high-intent search traffic related to cat care and small apartments.",
            "Implements organic inbound strategies on Instagram and business listings to expand service beyond current markets."
        ]
    },
    {
        icon: "/images/icon/asana-icon.svg",
        role: "Web Developer & Email Marketer - Freelance",
        location: "San Francisco, Ca",
        startYear: "2024",
        endYear: "Present",
        bulletPoints: [
            "Launched full-stack apps with a focus on scalable infrastructure for an active user base of 60,000+.",
            "Developed websites that imrpoved engagement and client search engine ranking, consequently increasing lead gen."
        ]
    },
    {
        icon: "/images/icon/asana-icon.svg",
        role: "Front-end Engineer",
        location: "San Francisco, Ca",
        startYear: "2022",
        endYear: "2024",
        bulletPoints: [
            "Led a 10-member team in a developer training program for an open-source startup, increasing employment rates for participants.",
            "Supervised peer programming sessions, cultivating collaboration that accelerated bug fixes and app deployment."
        ]
    },
]

const educationData = [
    {
        date: "Sep 2014 - April 2016",
        title: "Computer Science",
        subtitle: "Columbia University — New York, NY"
    },
    {
        date: "Mar 2021 - Aug 2021",
        title: "UX Design Certificate",
        subtitle: "Google UX Design - Coursera"
    }
];


const projectOverview = {
    caseStudies: [
        { name: "Kristin's Kitty Care", url: "/docs/case+study_kkc.pdf" },
        { name: "Precious Pet Care", url: "#", comingSoon: true },
    ],
    sideProjects: [
        { name: "Shoko", url: "https://nshoko.netlify.app" },
        { name: "The Lipstick Effect", url: "#", comingSoon: true },
    ]
};


export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        projectOverview
    });
};