import type { Profile } from "../types/profile";

export const profile: Profile = {
    name: "Vuong Duc Hieu",

    role: "Backend Engineer",

    availability: "Open to Opportunities",

    headline: {
        normal: "Turn Ideas into",
        highlight: "Scalable Products",
    },

    description:
        "I build backend systems and web applications with Node.js, TypeScript and modern technologies. Focused on clean architecture, problem solving and turning ideas into practical products.",

    heroImage: "/images/profile/hero-profile.png",

    technologies: [
        {
            name: "Node.js",
            position: "top-right",
        },
        {
            name: "TypeScript",
            position: "bottom-right",
        },
        {
            name: "PostgreSQL",
            position: "bottom-left",
        },
    ],

    stats: [
        {
            value: "4+",
            label: "Projects",
        },
        {
            value: "Backend",
            label: "Primary Focus",
        },
        {
            value: "10+",
            label: "Technologies",
        },
        {
            value: "∞",
            label: "More to Explore",
        },
    ],
};