import { profile } from "../../data/profile";
import { HeroTechnologyBadge } from "./HeroTechnologyBadge";

export function Hero() {
    return (
        <section
            id="home"
            className="relative overflow-hidden border-b border-slate-100 bg-white"
        >
            {/** DECORATIVE BACKGROUND */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -right-32
                    top-10
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-blue-100/60
                    blur-3xl
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-20
                    h-80
                    w-80
                    rounded-full
                    bg-indigo-100/40
                    blur-3xl
                "
            />

            {/** HERO CONTENT */}
            <div className="container relative z-10">
                <div className="grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
                    {/** LEFT SIDE */}
                    <div>
                        {/** Role + availability */}
                        <div className="
                            mb-6
                            inline-flex
                            items-center
                            gap-3
                            rounded-full
                            border
                            border-slate-200
                            bg-white/80
                            px-4
                            py-2
                            shadow-sm
                            backdrop-blur
                        ">
                            <span
                                className="
                                h-2
                                w-2
                                rounded-full
                                bg-blue-600
                                "
                            />

                            <span
                                className="
                                text-xs
                                font-semibold
                                text-slate-800
                                "
                            >
                                {profile.role}
                            </span>

                            <span className="text-slate-300">
                                |
                            </span>

                            <span
                                className="
                                text-xs
                                font-medium
                                text-slate-500
                                "
                            >
                                {profile.availability}
                            </span>
                        </div>

                        {/** Main headline */}
                        <h1
                            className="
                                max-w-3xl
                                text-5xl
                                font-bold
                                tracking-[-0.055em]
                                text-slate-950
                                sm:text-6xl
                                lg:text-7xl
                            "
                        >
                            {profile.headline.normal}

                            <span className="block text-blue-600">
                                {profile.headline.highlight}
                            </span>
                        </h1>

                        {/** Description */}
                        <p
                            className="
                                mt-7
                                max-w-xl
                                text-base
                                leading-8
                                text-slate-600
                                sm:text-lg
                            "
                        >
                            {profile.description}
                        </p>

                        {/* CTA */}
                        <div
                            className="
                                mt-8
                                flex
                                flex-wrap
                                gap-3
                            "
                        >
                            <a
                                href="#projects"
                                className="button-primary"
                            >
                                View My Projects

                                <span
                                    className="ml-2"
                                    aria-hidden="true"
                                >
                                    →
                                </span>
                            </a>

                            <a
                                href="#contact"
                                className="button-secondary"
                            >
                                Let's Talk
                            </a>
                        </div>
                    </div>

                    {/** RIGHT SIDE / PROFILE */}
                    <div
                        className="
                        relative
                        mx-auto
                        flex
                        min-h-[500px]
                        w-full
                        max-w-[540px]
                        items-end
                        justify-center
                        "
                    >
                        {/* Background grid */}
                        <div
                            className="
                            absolute
                            inset-8
                            rounded-[48px]
                            opacity-40
                        "
                            style={{
                                backgroundImage: `
                            linear-gradient(
                                rgba(37, 99, 235, 0.10) 1px,
                                transparent 1px
                            ),
                            linear-gradient(
                                90deg,
                                rgba(37, 99, 235, 0.10) 1px,
                                transparent 1px
                            )
                            `,
                                backgroundSize: "32px 32px",
                            }}
                        />

                        {/** Blue decorative shape */}
                        <div
                            className="
                                absolute
                                bottom-10
                                h-[360px]
                                w-[360px]
                                rounded-[42%_58%_55%_45%]
                                bg-blue-100
                            "
                        />

                        {/** Technology badges */}
                        {profile.technologies.map((technology) => (
                            <HeroTechnologyBadge
                                key={technology.name}
                                technology={technology}
                            />
                        ))}

                        {/* Profile image */}
                        <img
                            src={profile.heroImage}
                            alt={profile.name}
                            className="
                                relative
                                z-10
                                max-h-[520px]
                                w-auto
                                object-contain
                                drop-shadow-[0_30px_35px_rgba(15,23,42,0.12)]
                            "
                        />
                    </div>
                </div>

                {/** ===== HERO STATS ===== */}

                <div
                    className="
                        grid
                        border-t
                        border-slate-200
                        sm:grid-cols-2
                        lg:grid-cols-4
                    "
                >
                    {profile.stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="
                                flex
                                items-center
                                gap-4
                                border-slate-200
                                px-4
                                py-6
                                lg:border-r
                                lg:last:border-r-0
                            "
                        >
                            {/* Small decorative icon */}
                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-blue-50
                                    text-blue-600
                                    "
                            >
                                ✦
                            </div>

                            <div>
                                <p
                                    className="
                                        m-0
                                        text-lg
                                        font-bold
                                        text-slate-950
                                    "
                                >
                                    {stat.value}
                                </p>

                                <p
                                    className="
                                        m-0
                                        mt-0.5
                                        text-xs
                                        text-slate-500
                                    "
                                >
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    )
}