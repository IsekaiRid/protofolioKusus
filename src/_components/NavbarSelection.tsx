const navItems = ["Home", "About", "Works", "Skills", "Contact"];

const NavbarSelection = () => {
    return (
        <header className="fixed top-3 z-20 w-full px-3 sm:px-4">
            <nav className="mx-auto flex max-w-[72rem] items-center justify-center rounded-[22px] border border-[#2b211d]/10 bg-[#f8f3ea]/85 px-3 py-2.5 shadow-[0_10px_26px_rgba(40,26,20,0.08)] backdrop-blur-sm sm:px-5">
                <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-7">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="whitespace-nowrap text-[0.58rem] font-medium uppercase tracking-[0.18em] text-[#4f403d] transition hover:text-[#201813] sm:text-[0.64rem]"
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
