import React from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ChromaGrid from "@/components/ui/ChromaGrid";
import ProfileCard from "@/components/ui/ProfileCard";
import { Users, Heart, Globe, Sparkles } from "lucide-react";

export default function AboutPage() {
    const communityItems = [
        {
            image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80",
            title: "Learning Groups",
            subtitle: "Book Club",
            handle: "@book_lovers",
            borderColor: "#F59E0B",
            gradient: "linear-gradient(165deg, #F59E0B, #000)",
            url: "#"
        },
        {
            image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80",
            title: "Night Life",
            subtitle: "Music & Concerts",
            handle: "@live_music",
            borderColor: "#EF4444",
            gradient: "linear-gradient(195deg, #EF4444, #000)",
            url: "#"
        },
        {
            image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80",
            title: "Tech Talks",
            subtitle: "Developer Meetup",
            handle: "@dev_squad",
            borderColor: "#8B5CF6",
            gradient: "linear-gradient(225deg, #8B5CF6, #000)",
            url: "#"
        },
        // Additional items for better grid density
        {
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
            title: "Wellness & Yoga",
            subtitle: "Morning Flow",
            handle: "@yoga_rise",
            borderColor: "#10B981",
            gradient: "linear-gradient(135deg, #10B981, #000)",
            url: "#"
        },
        {
            image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80",
            title: "Foodies Unite",
            subtitle: "Culinary Tours",
            handle: "@tasty_trips",
            borderColor: "#F97316",
            gradient: "linear-gradient(315deg, #F97316, #000)",
            url: "#"
        },
        {
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
            title: "Startups & Biz",
            subtitle: "Networking",
            handle: "@hustle_hub",
            borderColor: "#6366F1",
            gradient: "linear-gradient(225deg, #6366F1, #000)",
            url: "#"
        }
    ];

    return (
        <main className="min-h-screen bg-gray-50 font-sans selection:bg-blue-100 selection:text-blue-900">
            {/* Navbar */}
            <div className="bg-gray-900 absolute w-full top-0 z-50">
                <Navbar />
            </div>

            {/* Hero / Story Section */}
            <section className="relative pt-32 pb-20 px-4 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="about.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 backdrop-blur-sm text-sm font-semibold mb-8 animate-fade-in-up">
                        <Sparkles className="w-4 h-4" /> Our Story
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 drop-shadow-2xl animate-fade-in-up delay-100">
                        Made for those who <br />
                        <span className="text-blue-300">don't want to wait.</span>
                    </h1>
                </div>
            </section>

            {/* Main Content */}
            <section className="bg-white py-20 px-4">
                <div className="max-w-3xl mx-auto prose prose-lg prose-blue text-gray-600 leading-relaxed">
                    <p className="text-xl font-medium text-gray-800 mb-8">
                        HangoutBff was created for people who don’t want to wait anymore.
                        Wait for the “right time.”
                        Wait for the “right people.”
                        Wait for life to start.
                    </p>
                    <p>
                        We believe life is meant to be lived out there — exploring new places, meeting new faces, and sharing real moments. Too often, great plans never happen simply because there’s no one to go with.
                    </p>
                    <p>
                        HangoutBff brings people together beyond screens. It helps you connect with like-minded people, form genuine friendships, and turn ideas into real experiences. Whether it’s traveling to a new city, joining a local group, or planning your next adventure, HangoutBff is built to make it easier — and safer — to do it together.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-10 rounded-r-xl">
                        <p className="italic font-semibold text-blue-900 m-0">
                            "Every feature exists for one reason: to help you step outside, connect with others, and make life happen."
                        </p>
                    </div>
                </div>
            </section>

            {/* ChromaGrid / Community Section */}
            <section className="py-20 bg-gray-50 overflow-hidden relative">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Community</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Real people, real connections. Hover to see the magic.</p>
                </div>

                <div className="min-h-[600px] w-full relative max-w-[1400px] mx-auto pb-12">
                    <ChromaGrid
                        items={communityItems}
                        radius={300}
                        damping={0.45}
                        fadeOut={0.6}
                        ease="power3.out"
                    />
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-white px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Meet The Team</h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                            The creative minds and visionaries building the future of social connection.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 justify-items-center">
                        {/* Founder / CEO */}
                        <div className="w-full max-w-[300px] h-[400px] transform hover:scale-[1.02] transition-transform duration-300">
                            <ProfileCard
                                name="Liam Carter"
                                title="Founder & CEO"
                                handle="liam_builds"
                                status="Visionary"
                                contactText="Connect"
                                avatarUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                                showUserInfo
                                enableTilt={true}
                                enableMobileTilt={false}
                                behindGlowEnabled
                                behindGlowColor="rgba(59, 130, 246, 0.6)" // Blue
                                innerGradient="linear-gradient(145deg, #1e293b 0%, #0f172a 100%)"
                            />
                        </div>

                        {/* Web Designer */}
                        <div className="w-full max-w-[300px] h-[400px] transform hover:scale-[1.02] transition-transform duration-300">
                            <ProfileCard
                                name="Sophia Chen"
                                title="Lead Designer"
                                handle="sophia_designs"
                                status="Creative"
                                contactText="Portfolio"
                                avatarUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
                                showUserInfo
                                enableTilt={true}
                                enableMobileTilt={false}
                                behindGlowEnabled
                                behindGlowColor="rgba(236, 72, 153, 0.6)" // Pink
                                innerGradient="linear-gradient(145deg, #3f1d3ce8 0%, #3a0e3863 100%)"
                            />
                        </div>

                        {/* CTO / Tech Lead */}
                        <div className="w-full max-w-[300px] h-[400px] transform hover:scale-[1.02] transition-transform duration-300">
                            <ProfileCard
                                name="Marcus Johnson"
                                title="CTO"
                                handle="marcus_dev"
                                status="Coding"
                                contactText="GitHub"
                                avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                                showUserInfo
                                enableTilt={true}
                                enableMobileTilt={false}
                                behindGlowEnabled
                                behindGlowColor="rgba(16, 185, 129, 0.6)" // Green
                                innerGradient="linear-gradient(145deg, #064e3b 0%, #022c22 100%)"
                            />
                        </div>

                        {/* Marketing Head */}
                        <div className="w-full max-w-[300px] h-[400px] transform hover:scale-[1.02] transition-transform duration-300">
                            <ProfileCard
                                name="Elena Rodriguez"
                                title="Head of Growth"
                                handle="elena_grows"
                                status="Strategist"
                                contactText="LinkedIn"
                                avatarUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
                                showUserInfo
                                enableTilt={true}
                                enableMobileTilt={false}
                                behindGlowEnabled
                                behindGlowColor="rgba(245, 158, 11, 0.6)" // Orange
                                innerGradient="linear-gradient(145deg, #78350f 0%, #451a03 100%)"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
