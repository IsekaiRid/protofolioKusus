const Footer = () => {
    return (
        <footer className="w-full border-t border-[#2b211d]/10 bg-[#f8f3ea] text-[#4b3d39]">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                <div>
                    <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-[#755e58]">
                        Portfolio
                    </p>
                    <p className="mt-2 text-lg font-semibold tracking-tighter text-[#201813]">
                        Ridhwan Sulaiman Suzana
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#4f403d]">
                    <a href="#" className="transition hover:text-[#201813]">Home</a>
                    <a href="#" className="transition hover:text-[#201813]">About</a>
                    <a href="#" className="transition hover:text-[#201813]">Works</a>
                    <a href="#" className="transition hover:text-[#201813]">Skills</a>
                </div>

                <p className="text-[0.62rem] uppercase tracking-[0.16em] text-[#6e574f]">
                    © 2022 all rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;