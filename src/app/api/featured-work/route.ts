import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "Branding + Web Design for Kristin's Kitty Care",
        description: "Developed a modern brand identity and a responsive web experience tailored for a professional cat care company, focused on clarity and usability.",
        roles: ["UX Designer", "Webflow Designer"],
        image: "/images/feature-work/feature-img-1.png"
    },
    {
        title: "Web Development for Graphic Artist",
        description: "Led a distinctive visual build for a state of the art portfolio using Next.js and Typescript.",
        roles: ["UX Designer", "Web Developer"],
        image: "/images/feature-work/feature-img-2.png"
    }
]

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};