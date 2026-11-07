import type { IconType } from "react-icons";
import { SiFigma, SiGimp } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaServer, FaVideo, FaPalette, FaLayerGroup } from "react-icons/fa";

type Tool = {
    name: string;
    level: string;
    color: string;
    icon: IconType;
};

const tools: Tool[] = [
    { name: "Figma", level: "UI Design", color: "#f24e1e", icon: SiFigma },
    { name: "VS Code", level: "Coding", color: "#007acc", icon: VscVscode },
    { name: "Laragon", level: "Local Server", color: "#f59e0b", icon: FaServer },
    { name: "CapCut", level: "Video Editing", color: "#4f46e5", icon: FaVideo },
    { name: "Adobe", level: "Creative Suite", color: "#ff0000", icon: FaLayerGroup },
    { name: "Canva", level: "Mockup & Layout", color: "#00c4cc", icon: FaPalette },
    { name: "GIMP", level: "Learning", color: "#2f7d32", icon: SiGimp },
];

const SofwareSkillSelectionProfile = () => {
    return (
        <section className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl rounded-[30px] border border-[#2b211d]/10 bg-[#f8f3ea] p-6 shadow-[0_20px_80px_rgba(40,26,20,0.08)] sm:p-8 lg:p-10">
                <div className="mb-8 flex items-end justify-between gap-4">
                    <div>
                        <p className="text-[0.62rem] font-medium uppercase tracking-[0.34em] text-[#755e58]">
                            Tools & skills
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-[#201813] sm:text-4xl">
                            Software yang saya gunakan
                        </h2>
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {tools.map(({ name, level, color, icon: Icon }) => (
                        <div
                            key={name}
                            className="rounded-[22px] border border-[#2b211d]/10 bg-[#f2e7d8] p-4 transition hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(40,26,20,0.06)]"
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#2b211d]/10 shadow-inner"
                                    style={{ backgroundColor: `${color}1f` }}
                                >
                                    <Icon size={24} color={color} aria-label={`${name} logo`} />
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold tracking-tighter text-[#201813]">
                                        {name}
                                    </h3>
                                    <p className="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#6d564f]">
                                        {level}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SofwareSkillSelectionProfile;