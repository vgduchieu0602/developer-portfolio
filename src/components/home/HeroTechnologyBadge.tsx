import type { HeroTechnology } from "../../types/profile";

interface HeroTechnologyBadgeProps {
    technology: HeroTechnology;
}

const positionClasses: Record<HeroTechnology["position"], string> = {
    "top-left": "left-0 top-16",
    "top-right": "right-0 top-10",
    "bottom-left": "left-0 bottom-24",
    "bottom-right": "right-0 bottom-20"
};

export function HeroTechnologyBadge({
    technology
}: HeroTechnologyBadgeProps) {
    return (
        <div
            className={`
        absolute
        z-20
        hidden
        items-center
        gap-2
        rounded-2xl
        border
        border-white/80
        bg-white/80
        px-4
        py-3
        text-sm
        font-semibold
        text-slate-800
        shadow-lg
        shadow-blue-950/5
        backdrop-blur-xl
        lg:flex
        ${positionClasses[technology.position]}
      `}
        >
            {/* Decorative dot */}
            <span className="h-2 w-2 rounded-full bg-blue-600" />

            {technology.name}
        </div>
    );
}