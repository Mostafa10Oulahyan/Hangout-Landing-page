import React from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Lock, Map, MessageSquare, User, Eye, Server, Shield, Bell } from "lucide-react";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-gray-50 font-sans selection:bg-green-100 selection:text-green-900">
            {/* Navbar with dark background for visibility - Removed sticky/fixed behavior */}
            <div className="bg-gray-900 absolute w-full top-0 z-50">
                <Navbar />
            </div>

            {/* Hero Section - Added padding top to account for navbar */}
            <section className="relative h-[45vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gray-900 pt-20">
                <div className="absolute inset-0">
                    {/* Abstract Background Image */}
                    <img
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
                        alt="Privacy Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    {/* Darker overlay for better text contrast */}
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative z-10 text-center max-w-4xl px-4 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 backdrop-blur-sm text-sm font-semibold mb-6">
                        <Lock className="w-4 h-4" /> Data Protection
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-2xl">
                        Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Policy</span>
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
                        Transparency is at our core. We collect only what's needed to help you find your people and stay safe.
                    </p>
                </div>
            </section>

            {/* Data Collection Grid */}
            <section className="py-20 px-4 max-w-7xl mx-auto -mt-20 relative z-20">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-gray-200/50 border border-gray-100">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Collect & Why</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Our database schema is designed for functionality, not surveillance. Here is a breakdown of the data points we store.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Profile Data */}
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                                <User className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Identity</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                We store your <strong>Name, Date of Birth, and Bio</strong> to create your profile. We also store verification status to ensure community safety.
                            </p>
                        </div>

                        {/* Location Data */}
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                                <Map className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Location</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                We use your <strong>Real-time Coordinates</strong> solely to find active groups within your preferred radius (default 10km).
                            </p>
                        </div>

                        {/* Activity Data */}
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Communications</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                <strong>Chat Messages</strong> in groups are stored to allow history access. They are monitored automatically for prohibited keywords.
                            </p>
                        </div>

                        {/* Technical Data */}
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
                                <Server className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Metadata</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                We track <strong>Group Participation</strong> and <strong>Interests</strong> to improve our recommendation algorithms and suggest better Hangouts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Use Information */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How Your Data Works For You</h2>

                    <div className="space-y-6">
                        {/* Feature 1 */}
                        <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group">
                            <div className="w-14 h-14 bg-indigo-100 rounded-full flex-shrink-0 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                                <Eye className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Matching</h3>
                                <p className="text-gray-600">
                                    We compare your <strong>Interest Tags</strong> and <strong>Preferred Moods</strong> with active groups to show you the most relevant events happening right now.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group">
                            <div className="w-14 h-14 bg-red-100 rounded-full flex-shrink-0 flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform">
                                <Shield className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Safety & Moderation</h3>
                                <p className="text-gray-600">
                                    Reports and block lists are strictly maintained to enforce our Terms. Trust scores are calculated based on <strong>Ratings</strong> and <strong>Attendance Reliability</strong>.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group">
                            <div className="w-14 h-14 bg-yellow-100 rounded-full flex-shrink-0 flex items-center justify-center text-yellow-600 group-hover:scale-110 transition-transform">
                                <Bell className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Relevant Notifications</h3>
                                <p className="text-gray-600">
                                    You control your push notifications. We use your preferences to only alert you about <strong>New Groups</strong> or <strong>Messages</strong> that actually matter to you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* User Rights */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">You Are In Control</h2>
                    <p className="text-gray-600 mb-10">
                        You manage your digital footprint. At any time, you can request a copy of your data or complete deletion of your account and all associated logs.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                            Manage Preferences
                        </button>
                        <button className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                            Contact Data Officer
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
