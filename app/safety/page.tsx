"use client";
import React, { useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, MapPin, Users, AlertTriangle, Lock, EyeOff, MessageSquareWarning, Ban, X, Mail } from "lucide-react";

export default function SafetyPage() {
    const [showContactModal, setShowContactModal] = useState(false);
    return (
        <main className="min-h-screen bg-white">
            {/* Navbar with dark background for visibility */}
            <div className="bg-gray-900">
                <Navbar />
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/safety.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-15"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 backdrop-blur-sm text-sm font-semibold mb-8 animate-fade-in-up">
                        <Shield className="w-4 h-4" /> Safety Center & Legal Hub
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 drop-shadow-2xl animate-fade-in-up delay-100">
                        Building a safer <br />
                        <span className="text-blue-300">community together.</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                        We believe in transparency and empowering our users. Here you will find everything you need to know about how we keep you safe, your rights, and our responsibilities.
                    </p>
                </div>
            </section>

            {/* Safety Essentials */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Safety Essentials</h2>
                    <p className="text-gray-600 mb-12 text-center">Top tips for staying safe while connecting.</p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-shadow bg-white">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Meet in Public</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Always choose a busy, public place for first meetings. Avoid private residences or secluded areas until trust is established.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-shadow bg-white">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Share Location</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Let a friend or family member know where you're going and who you're meeting. Share your live location if possible.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-shadow bg-white">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Trust Your Gut</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                If something feels off, it probably is. You can end a conversation or date at any time if you feel uncomfortable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Report Violations Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Report all suspicious and offensive behavior</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            You know when someone’s crossed the line and when they do, we want to know about it. Block and report anyone that violates our terms. Here are some examples of violations:
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            { icon: MapPin, text: "Asking specific questions about your travel plans or what times you're arriving places" },
                            { icon: Ban, text: "Underage users" },
                            { icon: MessageSquareWarning, text: "Harassment, threats, and offensive messages" },
                            { icon: AlertTriangle, text: "Inappropriate or harmful behavior during or after meeting in person" },
                            { icon: EyeOff, text: "Fraudulent profiles" },
                            { icon: Lock, text: "Spam or solicitation including links to commercial websites or attempts to sell products or services" }
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 text-red-500">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <p className="text-gray-700 font-medium pt-2">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Immediate Help Banner */}
            <section className="py-10 px-4">
                <div className="max-w-7xl mx-auto bg-gray-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need immediate help?</h2>
                        <p className="text-gray-300 max-w-xl">
                            Our Trust & Safety team is available 24/7 to handle urgent reports concerning user safety.
                        </p>
                    </div>
                    <button
                        onClick={() => setShowContactModal(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all whitespace-nowrap cursor-pointer"
                    >
                        Contact Emergency Support
                    </button>
                </div>
            </section>

            {/* Contact Support Modal */}
            {showContactModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setShowContactModal(false)}
                    />
                    <div className="relative bg-white rounded-3xl p-10 max-w-md w-full shadow-2xl border-2 border-blue-100 animate-fade-in-up z-10">
                        <button
                            onClick={() => setShowContactModal(false)}
                            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-700 cursor-pointer"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h2 className="text-3xl font-extrabold text-gray-900 mb-2 text-center">Chat to support</h2>
                        <p className="text-gray-500 text-center mb-8">for questions or feedback, reach out to</p>

                        <a
                            href="mailto:support@hangoutbff.me"
                            className="flex items-center justify-center gap-2 text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-10 py-3 px-6 rounded-xl bg-blue-50 hover:bg-blue-100 mx-auto w-fit"
                        >
                            <Mail className="w-5 h-5" />
                            support@hangoutbff.me
                        </a>

                        <div className="text-center">
                            <p className="text-sm font-semibold text-gray-500 mb-4">follow us on socials:</p>
                            <div className="flex items-center justify-center gap-5">
                                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-gray-900 rounded-xl flex items-center justify-center text-white hover:bg-gray-700 transition-colors hover:-translate-y-0.5 transform">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-blue-700 rounded-xl flex items-center justify-center text-white hover:bg-blue-600 transition-colors hover:-translate-y-0.5 transform">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-all hover:-translate-y-0.5 transform">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}
