"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Search, X, MapPin, Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "./data";
import { gsap } from "gsap";

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);

    const filteredPosts = blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const searchResults = searchQuery.length > 0 ? filteredPosts : [];

    // Close search dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsSearchOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // GSAP hero entrance animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
            tl.from("[data-blog-hero='badge']", { opacity: 0, y: 40, duration: 0.6 })
                .from("[data-blog-hero='title']", { opacity: 0, y: 50, duration: 0.7 }, "-=0.3")
                .from("[data-blog-hero='description']", { opacity: 0, y: 30, duration: 0.6 }, "-=0.3");
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <main className="min-h-screen bg-gray-50 font-sans selection:bg-blue-100 selection:text-blue-900">
            {/* Navbar */}
            <div className="bg-gray-900 absolute w-full top-0 z-50">
                <Navbar />
            </div>

            {/* Hero Section */}
            <section ref={heroRef} className="relative h-[50vh] min-h-[450px] flex items-center justify-center overflow-hidden bg-gray-900 pt-20">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80"
                        alt="Travel Blog Background"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900/80"></div>
                </div>

                <div className="relative z-10 text-center max-w-4xl px-4">
                    <div data-blog-hero="badge" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 backdrop-blur-sm text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" /> Travel Stories
                    </div>
                    <h1 data-blog-hero="title" className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-2xl">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">Blog</span>
                    </h1>
                    <p data-blog-hero="description" className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
                        Ideas, stories, and tips to make every trip unforgettable.
                    </p>
                </div>
            </section>

            {/* Blog Listing Section */}
            <section className="py-16 px-4 max-w-7xl mx-auto -mt-16 relative z-20">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-gray-200/50 border border-gray-100">

                    {/* Header + Search */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                        <h2 className="text-4xl font-black text-gray-900">Blog</h2>

                        {/* Search Bar */}
                        <div ref={searchRef} className="relative w-full md:w-96">
                            <div className={`flex items-center gap-2 px-4 py-3 rounded-full border transition-all duration-200 ${isSearchOpen && searchQuery ? 'border-gray-400 shadow-lg rounded-b-none rounded-t-2xl' : 'border-gray-200 hover:border-gray-300'} bg-gray-50`}>
                                <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                <input
                                    type="text"
                                    placeholder="Search blogs..."
                                    value={searchQuery}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value);
                                        setIsSearchOpen(true);
                                    }}
                                    onFocus={() => setIsSearchOpen(true)}
                                    className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-400"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => {
                                            setSearchQuery("");
                                            setIsSearchOpen(false);
                                        }}
                                        className="text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                )}
                            </div>

                            {/* Search Dropdown */}
                            {isSearchOpen && searchQuery && (
                                <div className="absolute top-full left-0 right-0 bg-white border border-t-0 border-gray-400 rounded-b-2xl shadow-xl z-50 max-h-80 overflow-y-auto">
                                    {searchResults.length > 0 ? (
                                        searchResults.map((post) => (
                                            <Link
                                                key={post.slug}
                                                href={`/blog/${post.slug}`}
                                                onClick={() => {
                                                    setIsSearchOpen(false);
                                                    setSearchQuery("");
                                                }}
                                                className="flex flex-col px-5 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                                            >
                                                <span className="font-semibold text-gray-900 text-sm">
                                                    {post.title} <span className="text-xs text-gray-400 font-normal">{post.countryCode}</span> — HangoutBff Blog
                                                </span>
                                                <span className="text-xs text-gray-400 mt-0.5">/blog/{post.slug}</span>
                                            </Link>
                                        ))
                                    ) : (
                                        <div className="px-5 py-4 text-gray-400 text-sm">No results found for "{searchQuery}"</div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Blog Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {blogPosts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group block bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-gray-900 text-sm leading-tight mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                                        {post.title} <span className="text-xs text-gray-400 font-normal">{post.countryCode}</span>
                                    </h3>
                                    <div className="flex items-center gap-1 text-xs text-gray-400">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
