"use client";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 py-4 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 bg-white/10 backdrop-blur-xl rounded-2xl px-6 border border-white/10 shadow-lg shadow-black/5">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <img
                                src="/hangout-removebg-preview.png"
                                alt="Hangout"
                                className="h-9 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {[
                            { label: "Discover", href: "/" },
                            { label: "Safety", href: "/safety" },
                            { label: "About Us", href: "/about" },
                            { label: "Blog", href: "#" },
                        ].map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="relative px-4 py-2 text-sm font-medium text-gray-200 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center">
                        <button className="bg-blue-500 hover:bg-blue-400 text-white text-sm px-6 py-2.5 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-400/30 hover:-translate-y-0.5 active:translate-y-0">
                            Download App
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/10 transition-colors"
                        >
                            <div className="flex flex-col gap-1.5">
                                <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                                <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                                <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="md:hidden mt-2 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg shadow-black/5 overflow-hidden animate-fade-in-up">
                        <div className="flex flex-col p-4 gap-1">
                            {[
                                { label: "Discover", href: "/" },
                                { label: "Safety", href: "/safety" },
                                { label: "About Us", href: "/about" },
                                { label: "Blog", href: "#" },
                            ].map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="px-4 py-3 text-sm font-medium text-gray-200 hover:text-white rounded-xl hover:bg-white/10 transition-all duration-200"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="pt-2 mt-2 border-t border-white/10">
                                <button className="w-full bg-blue-500 hover:bg-blue-400 text-white text-sm px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-blue-500/25">
                                    Download App
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
