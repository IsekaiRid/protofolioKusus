const strengths = [
    "Coding",
    "UI/UX design",
    "Creative projects",
    "Game development",
    "Robotics thinking",
    "Problem solving",
];

const AboutSelectionProfile = () => {
    return (
        <section id="about" className="px-4 py-10 sm:px-6 lg:px-8 scroll-mt-24">
            <div className="paper-shell mx-auto max-w-6xl rounded-[28px] border border-[#2b211d]/10 p-6 shadow-[0_20px_80px_rgba(40,26,20,0.08)] sm:p-8 lg:p-10">
                <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                    <div className="space-y-5">
                        <p className="text-[0.62rem] font-medium uppercase tracking-[0.34em] text-[#755e58]">
                            About me
                        </p>

                        <h2 className="text-3xl font-semibold tracking-[-0.06em] text-[#201813] sm:text-4xl">
                            Saya berpadu antara desain dan teknologi.
                        </h2>

                        <div className="rounded-[24px] border border-[#2b211d]/10 bg-[#f5ecdf] p-5 text-[#4d3d38]">
                            <p className="text-base leading-8">
                                Saya adalah seorang kreatif yang fokus pada coding, desain, dan proyek-proyek
                                digital yang memiliki tujuan. Saat ini fokus utama saya adalah pengembangan
                                program, sambil tetap menjaga kemampuan dalam desain visual, game, dan ide
                                kreatif di bidang teknologi.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="rounded-[22px] border border-[#2b211d]/10 bg-[#f8f3ea] p-4">
                                <p className="text-[0.58rem] uppercase tracking-[0.2em] text-[#786561]">
                                    Projects
                                </p>
                                <p className="mt-3 text-3xl font-semibold tracking-[-0.08em] text-[#201813]">
                                    32
                                </p>
                            </div>

                            <div className="rounded-[22px] border border-[#2b211d]/10 bg-[#f8f3ea] p-4">
                                <p className="text-[0.58rem] uppercase tracking-[0.2em] text-[#786561]">
                                    Focus
                                </p>
                                <p className="mt-3 text-lg font-medium text-[#201813]">Coding</p>
                            </div>

                            <div className="rounded-[22px] border border-[#2b211d]/10 bg-[#f8f3ea] p-4">
                                <p className="text-[0.58rem] uppercase tracking-[0.2em] text-[#786561]">
                                    Style
                                </p>
                                <p className="mt-3 text-lg font-medium text-[#201813]">Creative</p>
                            </div>
                        </div>

                        <div className="rounded-[24px] border border-[#2b211d]/10 bg-[#f2e7d8] p-5">
                            <p className="text-[0.6rem] uppercase tracking-[0.24em] text-[#76635f]">
                                Speciality
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2.5">
                                {strengths.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-[#2b211d]/10 bg-[#f9f5ef] px-3 py-2 text-[0.58rem] font-medium uppercase tracking-[0.16em] text-[#392f2c]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSelectionProfile;
