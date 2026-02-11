"use client";

import React from "react";
import { cn } from "@/lib/utils";

const hangouts = [
    {
        title: "Drunk in London",
        location: "GB England",
        image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80",
        participants: 55
    },
    {
        title: "Wine night in Paris",
        location: "FR France",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80",
        participants: 33
    },
    {
        title: "Night out in Rome",
        location: "Italy",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
        participants: 120
    },
    {
        title: "Students in Madrid",
        location: "ES Spain",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80",
        participants: 60
    },
    {
        title: "Travelers in Hawaii",
        location: "US United States",
        image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80",
        participants: 130
    },
    {
        title: "Barcelona backpackers",
        location: "ES Spain",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80",
        participants: 200
    },
    {
        title: "Apres Ski :)",
        location: "Switzerland",
        image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&q=80",
        participants: 220
    },
];

// Duplicate the list for infinite scroll effect
const allHangouts = [...hangouts, ...hangouts, ...hangouts];

export function HappeningNow() {
    return (
        <section className="py-12 bg-white overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-10 tracking-tight">
                join hangouts happening now
            </h2>

            <div className="relative w-full">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                <div className="flex animate-scroll hover:pause whitespace-nowrap gap-6 w-max">
                    {allHangouts.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex-shrink-0 w-64 h-64 rounded-2xl overflow-hidden cursor-pointer group"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="font-bold text-lg leading-tight mb-1 truncate">{item.title}</h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-medium uppercase opacity-90 truncate max-w-[50%]">{item.location}</span>

                                    <div className="flex items-center gap-1">
                                        <div className="flex -space-x-1.5">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-5 h-5 rounded-full border border-white bg-gray-300 overflow-hidden">
                                                    <div className="w-full h-full bg-gradient-to-br from-orange-300 to-yellow-300"></div>
                                                </div>
                                            ))}
                                        </div>
                                        <span className="text-[10px] font-bold bg-white/20 backdrop-blur-sm px-1.5 py-0.5 rounded-full">
                                            {item.participants}+
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
                .pause:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
