const navItems = ["Home", "About", "Works", "Skills", "Contact"];

const NavbarSelection = () => {
    return (
        <header className="fixed top-3 z-20 w-full">
            <nav className="mx-auto flex max-w-6xl items-center justify-center rounded-[20px] border border-[#2b211d]/10 bg-[#f8f3ea]/85 px-5 py-2.5 shadow-[0_10px_26px_rgba(40,26,20,0.08)] backdrop-blur-sm sm:px-6">
                <div className="hidden items-center gap-7 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#4f403d] transition hover:text-[#201813]"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default NavbarSelection
