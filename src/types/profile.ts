export interface HeroTechnology {
    name: string;
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export interface HeroStat {
    value: string;
    label: string;
}

export interface Profile {
    name: string;
    role: string;
    availability: string;
    headline: {
        normal: string;
        highlight: string
    };
    description: string;
    heroImage: string;
    technologies: HeroTechnology[];
    stats: HeroStat[];
}