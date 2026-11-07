"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { CSSProperties, PointerEvent } from "react";

const works = [
    { title: "Project 3D", year: "2022", image: "/img/projact3dmodel.png", angle: -2, delay: "0s" },
    { title: "Membuat Games Flow Games", year: "2024", image: "/img/desainGamesLanjutan.png", angle: 1.5, delay: "-1.2s" },
    { title: "Tugas Video", year: "2023", image: "/img/tugasVideo.mp4", angle: -1, delay: "-2.4s", type: "video" },
    { title: "tugas pembuatan poster", year: "2021", image: "/img/tugas pembuatan poster.png", angle: 2, delay: "-3.3s" },
    { title: "Mendesain GamesKonsep", year: "2023", image: "/img/desaintugasgames.png", angle: 2, delay: "-3.3s" },
    { title: "Menjadi Bagian Dari Teater smk", year: "2020", image: "/img/bagianTeamVidoeDanPropertidiTeater.mp4", angle: 1, delay: "-4.1s", type: "video" },
    { title: "Projact Akhir SMK", year: "2025", image: "/img/projactweb.mp4", angle: 1, delay: "-4.1s", type: "video" },
];

const HistoryKaryaSelectionProfile = () => {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const drag = useRef({ active: false, startX: 0, startScroll: 0 });
    const modalVideoRef = useRef<HTMLVideoElement | null>(null);
    const [dragging, setDragging] = useState(false);
    const [activeVideo, setActiveVideo] = useState<number | null>(null);

    const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
        if (e.pointerType !== "mouse" || !scrollerRef.current) return;

        const target = e.target as HTMLElement;
        if (target.closest("button, video, a, input, textarea, select")) {
            return;
        }

        drag.current = {
            active: true,
            startX: e.clientX,
            startScroll: scrollerRef.current.scrollLeft,
        };
        scrollerRef.current.setPointerCapture(e.pointerId);
        setDragging(true);
    };

    const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
        if (!drag.current.active || !scrollerRef.current) return;
        const dx = e.clientX - drag.current.startX;
        scrollerRef.current.scrollLeft = drag.current.startScroll - dx;
    };

    const endDrag = (e: PointerEvent<HTMLDivElement>) => {
        if (!drag.current.active) return;
        drag.current.active = false;
        scrollerRef.current?.releasePointerCapture(e.pointerId);
        setDragging(false);
    };

    const scrollByCard = (dir: 1 | -1) => {
        scrollerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
    };

    const handleVideoPlay = (index: number) => {
        setActiveVideo(index);
    };

    return (
        <section className="px-4 py-10 sm:px-6 lg:px-8">
            <style>{`
                @keyframes clothesline-swing {
                    0%, 100% { transform: rotate(calc(var(--r) - 1.8deg)); }
                    50%      { transform: rotate(calc(var(--r) + 1.8deg)); }
                }
                .clothesline-card {
                    transform-origin: 50% 0;
                    animation: clothesline-swing 5s ease-in-out infinite;
                }
                @media (prefers-reduced-motion: reduce) {
                    .clothesline-card { animation: none; transform: rotate(var(--r)); }
                }
            `}</style>

            <div className="mx-auto max-w-6xl">
                <div className="mb-8 flex items-end justify-between gap-4">
                    <div>
                        <p className="text-[0.62rem] font-medium uppercase tracking-[0.34em] text-[#755e58]">
                            History & works
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-[#201813] sm:text-4xl">
                            Selected karya
                        </h2>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => scrollByCard(-1)}
                            aria-label="Geser ke kiri"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2b211d]/10 bg-[#f2e7d8] text-[#332924] transition active:scale-95"
                        >
                            ←
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollByCard(1)}
                            aria-label="Geser ke kanan"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2b211d]/10 bg-[#f2e7d8] text-[#332924] transition active:scale-95"
                        >
                            →
                        </button>
                        <button className="hidden rounded-full border border-[#2b211d]/10 bg-[#f2e7d8] px-4 py-2 text-[0.6rem] font-medium uppercase tracking-[0.18em] text-[#332924] sm:inline-flex">
                            View all
                        </button>
                    </div>
                </div>

                <div className="paper-shell relative overflow-hidden rounded-[30px] border border-[#2b211d]/10 pt-6 shadow-[0_20px_80px_rgba(40,26,20,0.08)]">
                    {activeVideo !== null && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#120f0d]/80 px-4 py-6 backdrop-blur-sm">
                            <div className="relative w-full max-w-4xl overflow-hidden rounded-[26px] border border-[#f0e3d1]/20 bg-[#1d1715] shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
                                <button
                                    type="button"
                                    onClick={() => setActiveVideo(null)}
                                    className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-lg text-white transition hover:bg-black/50"
                                    aria-label="Tutup video"
                                >
                                    ×
                                </button>

                                <video
                                    ref={modalVideoRef}
                                    key={works[activeVideo].image}
                                    src={works[activeVideo].image}
                                    controls
                                    autoPlay
                                    playsInline
                                    className="aspect-video w-full bg-black"
                                />
                            </div>
                        </div>
                    )}

                    <div
                        ref={scrollerRef}
                        onPointerDown={onPointerDown}
                        onPointerMove={onPointerMove}
                        onPointerUp={endDrag}
                        onPointerCancel={endDrag}
                        className={`select-none overflow-x-auto pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${dragging ? "cursor-grabbing" : "cursor-grab"
                            }`}
                    >
                        <div className="flex min-w-max items-start px-2">
                            {/* ujung tali kiri */}
                            <div className="mt-[3px] h-[2.5px] w-6 shrink-0 bg-[#8a6b5c]" />

                            {works.map((work, index) => (
                                <article
                                    key={work.title}
                                    className="relative w-[280px] shrink-0 sm:w-[300px]"
                                >
                                    <svg
                                        viewBox="0 0 100 20"
                                        preserveAspectRatio="none"
                                        className="absolute left-0 top-0 h-5 w-full"
                                        aria-hidden
                                    >
                                        <path
                                            d="M0 4 Q50 18 100 4"
                                            fill="none"
                                            stroke="#8a6b5c"
                                            strokeWidth="2.5"
                                            vectorEffect="non-scaling-stroke"
                                        />
                                    </svg>

                                    <div
                                        className="clothesline-card relative mx-auto w-[240px] pt-[6px] sm:w-[256px]"
                                        style={
                                            {
                                                "--r": `${work.angle}deg`,
                                                animationDelay: work.delay,
                                                marginTop: "0.6rem",
                                            } as CSSProperties
                                        }
                                    >
                                        <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
                                            <div className="relative h-9 w-3.5 rounded-[4px] border border-[#6b4a35]/40 bg-gradient-to-b from-[#d9a66c] to-[#b97f4a] shadow-[0_3px_6px_rgba(60,40,27,0.25)]">
                                                <div className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-[#6b4a35]/50" />
                                                <div className="absolute left-1/2 top-[40%] h-2 w-2 -translate-x-1/2 rounded-full border border-[#8f949a] bg-[#c9cdd2]" />
                                            </div>
                                        </div>

                                        <div className="relative mt-4 rounded-[10px] border border-[#2b211d]/10 bg-[#fbf7ef] p-3 pb-4 shadow-[0_18px_28px_rgba(60,40,27,0.16)]">
                                            {work.type === "video" ? (
                                                <div className="relative h-[260px] overflow-hidden rounded-[4px] border border-[#2b211d]/10 bg-[#efe2d0]">
                                                    <video
                                                        src={work.image}
                                                        muted
                                                        playsInline
                                                        preload="metadata"
                                                        className="h-full w-full object-cover"
                                                    />

                                                    <button
                                                        type="button"
                                                        onPointerDown={(event) => event.stopPropagation()}
                                                        onMouseDown={(event) => event.stopPropagation()}
                                                        onClick={(event) => {
                                                            event.stopPropagation();
                                                            handleVideoPlay(index);
                                                        }}
                                                        className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#f9f5ef]/70 bg-[#1d1715]/75 text-xl text-[#f8f3ea] shadow-[0_12px_26px_rgba(17,13,11,0.4)] backdrop-blur-sm transition hover:scale-105"
                                                        aria-label={`Putar video ${work.title}`}
                                                    >
                                                        ▶
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="relative h-[260px] overflow-hidden rounded-[4px] border border-[#2b211d]/10 bg-[#efe2d0]">
                                                    <Image
                                                        src={work.image}
                                                        alt={work.title}
                                                        fill
                                                        sizes="260px"
                                                        draggable={false}
                                                        className="pointer-events-none object-cover"
                                                    />
                                                </div>
                                            )}

                                            <div className="mt-4 flex items-end justify-between gap-3 px-1">
                                                <div>
                                                    <p className="text-[0.56rem] uppercase tracking-[0.2em] text-[#7d625a]">
                                                        Project
                                                    </p>
                                                    <h3 className="mt-1.5 text-lg font-semibold tracking-[-0.05em] text-[#201813]">
                                                        {work.title}
                                                    </h3>
                                                </div>
                                                <span className="rounded-full border border-[#2b211d]/10 bg-[#f2e7d8] px-2.5 py-1 text-[0.56rem] font-medium uppercase tracking-[0.16em] text-[#40332f]">
                                                    {work.year}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}

                            {/* ujung tali kanan */}
                            <div className="mt-[3px] h-[2.5px] w-6 shrink-0 bg-[#8a6b5c]" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HistoryKaryaSelectionProfile;