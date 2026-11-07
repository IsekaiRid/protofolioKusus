"use client";

import Image from "next/image";
import { useRef, useState, type PointerEvent } from "react";

const eventList = [
    {
        title: "LOMBA INOVASI TEKNOLOGI",
        meta: "Editorial Look / 2023",
        image: "/img/loba.jpg",
        rotation: -7,
    },
    {
        title: "Google Dev Training",
        meta: "Google Developer / 2024",
        image: "/img/google.jpg",
        rotation: 5,
    },
    {
        title: "Bootcamp AI",
        meta: "BootCamo AI dan Bisnis Didunia AI / 2025",
        image: "/img/dnd.jpg",
        rotation: -4,
    },
];

const EventOrganisasi = () => {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const drag = useRef({ active: false, startX: 0, startScroll: 0 });
    const [dragging, setDragging] = useState(false);

    const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
        if (!scrollerRef.current) return;
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

    return (
        <section id="event" className="px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl rounded-[30px] border border-[#2b211d]/10 bg-[#f8f3ea]/90 p-5 shadow-[0_20px_80px_rgba(40,26,20,0.08)] sm:p-8">
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-[0.62rem] font-medium uppercase tracking-[0.34em] text-[#755e58]">
                            Event & Organization
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => scrollByCard(-1)}
                            aria-label="Geser kiri"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2b211d]/10 bg-[#f2e7d8] text-lg text-[#201813]"
                        >
                            ←
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollByCard(1)}
                            aria-label="Geser kanan"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2b211d]/10 bg-[#f2e7d8] text-lg text-[#201813]"
                        >
                            →
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollerRef}
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={endDrag}
                    onPointerCancel={endDrag}
                    className={`overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
                >
                    <div className="flex min-w-max gap-5 px-1">
                        {eventList.map((item, index) => (
                            <article
                                key={item.title}
                                className="group w-[280px] shrink-0 rounded-[26px] border border-[#2b211d]/10 bg-[#f3e8d8] p-3 shadow-[0_18px_30px_rgba(40,26,20,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(40,26,20,0.1)] sm:w-[320px]"
                            >
                                <div className="relative overflow-hidden rounded-[20px] border border-[#2b211d]/10 bg-[#d9b792]">
                                    <div
                                        className="relative h-[320px] w-full transition duration-300 group-hover:scale-[1.02]"
                                        style={{ transform: `rotate(${item.rotation}deg)` }}
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes="(max-width: 768px) 280px, 320px"
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#2b211d]/10 bg-[#f8f3ea]/85 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#201813]">
                                        {index + 1}
                                    </div>
                                </div>

                                <div className="mt-4 px-1">
                                    <p className="text-[0.56rem] font-medium uppercase tracking-[0.22em] text-[#7a645d]">
                                        {item.meta}
                                    </p>
                                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.05em] text-[#201813]">
                                        {item.title}
                                    </h3>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventOrganisasi;
