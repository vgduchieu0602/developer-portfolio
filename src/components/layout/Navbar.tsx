import { navigationItems } from "../../data/navigation";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
            <div className="container">
                <div className="flex h-20 items-center justify-between">
                    {/** ===== BRAND ===== */}
                    <a href="#home" className="flex item-center gap-3" aria-label="Go to homepage">
                        {/** ===== Logo ===== */}
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                            VH
                        </div>

                        {/** ===== Personal Name ===== */}
                        <span className="hidden font-semibold text-slate-950 sm:block">
                            Vương Đức Hiếu
                        </span>
                    </a>

                    {/** ===== DESKTOP NAVIGATION ===== */}
                    <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
                        {navigationItems.map((item) => (
                            <a href={item.href} key={item.href} className="relative text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/** ===== DESKTOP CTA ===== */}
                    <div className="hidden lg:block">
                        <a href="/cv/vuong-duc-hieu.cv.pdf" className="button-primary" download>
                            Download CV

                            {/** Download icon */}
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="ml-2 h-4 w-4"
                                aria-hidden="true"
                            >
                                <path d="M12 3v12" />
                                <path d="m7 10 5 5 5-5" />
                                <path d="M5 21h14" />
                            </svg>
                        </a>
                    </div>

                    {/** ===== MOBILE MENU BUTTON ===== */}
                    <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 lg:hidden"
                        aria-label="Open navigation menu"
                    >
                        {/** Humburger icon */}
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-5 w-5"
                            aria-hidden="true"
                        >
                            <path d="M4 7h16" />
                            <path d="M4 12h16" />
                            <path d="M4 17h16" />
                        </svg>
                    </button>

                </div>
            </div>
        </header>
    )
}