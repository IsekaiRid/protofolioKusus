import { FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

const socials = [
    {
        name: "Instagram",
        url: "https://www.instagram.com/frozeenmelon/",
        icon: FaInstagram,
        color: "#E1306C",
    },
    {
        name: "YouTube",
        url: "https://www.youtube.com/@isekaionlinechannel7507",
        icon: FaYoutube,
        color: "#FF0000",
    },
    {
        name: "X",
        url: "https://x.com/RidwanS09498395",
        icon: FaXTwitter,
        color: "#000000",
    },
];

const SosialMedia = () => {
    return (
        <section id="contact" className="px-4 pb-12 pt-2 sm:px-6 lg:px-8 scroll-mt-24">
            <div className="mx-auto max-w-6xl rounded-[28px] border border-[#2b211d]/10 bg-[#f8f3ea] p-6 shadow-[0_20px_80px_rgba(40,26,20,0.08)] sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-[0.62rem] font-medium uppercase tracking-[0.34em] text-[#755e58]">
                            Social media
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-[#201813] sm:text-4xl">
                            Connect with me
                        </h2>
                    </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                    {socials.map(({ name, url, icon: Icon, color }) => (
                        <a
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center gap-3 rounded-full border border-[#2b211d]/10 bg-[#f2e7d8] px-4 py-3 transition hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(40,26,20,0.06)]"
                        >
                            <div
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2b211d]/10"
                                style={{ backgroundColor: `${color}1A` }}
                            >
                                <Icon size={18} color={color} />
                            </div>

                            <span className="text-sm font-medium tracking-[-0.03em] text-[#201813]">
                                {name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SosialMedia;
