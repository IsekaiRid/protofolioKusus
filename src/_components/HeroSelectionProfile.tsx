import Image from "next/image";

const skills = ["Designer", "Programmer", "Creative Developer", "Game & Robotics"];

const HeroSelectionProfile = () => {
    return (
        <main className="w-full px-0">
            <section className="paper-shell relative flex min-h-[64vh] w-full items-center overflow-hidden border-0">
                <div className="relative z-10 grid w-full items-center gap-2 py-3 lg:grid-cols-[1.15fr_0.85fr] lg:gap-4 lg:py-0">
                    <div className="pl-5 pr-3 sm:pl-8 lg:pl-12 xl:pl-16">
                        <p className="text-[0.62rem] font-medium uppercase tracking-[0.34em] text-[#755e58]">
                            Creative developer
                        </p>

                        <h1 className="mt-3 text-4xl font-semibold leading-[0.92] tracking-[-0.06em] text-[#201813] sm:text-5xl lg:text-[3.8rem] xl:text-[4.3rem]">
                            Ridhwan Sulaiman Suzana
                        </h1>

                        <p className="mt-3 max-w-xl text-base font-medium text-[#4b3d39] sm:text-lg">
                            Desainer, Programmer, Game Developer, Robotics
                        </p>

                        <p className="mt-3 max-w-xl text-sm leading-7 text-[#55463f] sm:text-base">
                            Fokus utama saya saat ini adalah coding, dengan fondasi kuat di desain,
                            kreatifitas, dan proyek-proyek digital yang berpadu antara visual,
                            interaksi, serta teknologi.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2.5">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-[#2b211d]/10 bg-[#f2e7d8] px-3 py-1.5 text-[0.58rem] font-medium uppercase tracking-[0.14em] text-[#3b2f2b]"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="relative flex h-full items-center justify-center lg:justify-end">
                        <div className="relative h-[340px] w-full max-w-[480px] overflow-hidden border-l border-[#2b211d]/10 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.8),_transparent_30%),linear-gradient(135deg,_rgba(235,216,189,0.82),_rgba(241,230,214,0.28))] sm:h-[390px] lg:h-[470px] xl:h-[520px]">
                            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#f5ecdf] via-[#f5ecdf]/50 to-transparent" />

                            <Image
                                src="/img/profileFrame.png"
                                alt="Profile portrait"
                                fill
                                priority
                                className="object-contain object-center p-3 drop-shadow-[0_28px_36px_rgba(27,18,15,0.18)]"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HeroSelectionProfile;
