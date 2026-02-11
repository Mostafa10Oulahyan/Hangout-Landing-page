"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
    const [showModal, setShowModal] = useState(false);
    const [agreed, setAgreed] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [checks, setChecks] = useState({
        identity: false,
        conduct: false,
        privacy: false,
        termination: false,
    });

    // Load agreement state from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem("hangout-terms-agreed");
        if (saved === "true") {
            setAgreed(true);
        }
    }, []);

    const allChecked = checks.identity && checks.conduct && checks.privacy && checks.termination;

    const handleConfirm = () => {
        setAgreed(true);
        setShowModal(false);
        localStorage.setItem("hangout-terms-agreed", "true");
        // Show toast
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
    };

    const toggleCheck = (key: keyof typeof checks) => {
        setChecks((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <main className="min-h-screen bg-gray-50 font-sans selection:bg-blue-100 selection:text-blue-900">
            {/* Navbar */}
            <div className="bg-gray-900 absolute w-full top-0 z-50">
                <Navbar />
            </div>

            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 bg-gray-900">
                    <img
                        src="terms&Conditions.png"
                        alt="Terms Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="relative z-10 text-center max-w-4xl px-4 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 backdrop-blur-sm text-sm font-semibold mb-6">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                        Legal Center
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-xl">
                        Terms of <span className="text-blue-400">Service</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                        We believe legal documents shouldn&apos;t be boring. Here&apos;s a clear breakdown of the rules that keep our community safe, authentic, and fun.
                    </p>
                    <p className="mt-4 text-sm text-gray-500 font-medium tracking-wider uppercase">Last Updated: February 2026</p>
                </div>
            </section>

            {/* 3 Pillars of Trust */}
            <section className="relative z-20 px-4 mb-20 bg-gray-50 pt-12">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-gray-100">
                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12l2.25 2.25L21 12" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Authenticity</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We require real profiles with verified identities. No catfishing, no bots, just real people connecting.
                        </p>
                    </div>
                    <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-gray-100">
                        <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Safety First</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Zero tolerance for harassment. We use proactive location verification and behavior monitoring.
                        </p>
                    </div>
                    <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-gray-100">
                        <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-600">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Respect</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Every member deserves to feel welcome. Discriminatory behavior results in an immediate ban.
                        </p>
                    </div>
                </div>
            </section>

            {/* Detailed Content */}
            <section className="px-4 pb-24">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">

                    {/* Sticky Sidebar */}
                    <div className="hidden lg:block w-72 flex-shrink-0">
                        <div className="sticky top-32 space-y-2">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Table of Contents</h4>
                            <a href="#account" className="block p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">1. Account & Identity</a>
                            <a href="#conduct" className="block p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">2. User Conduct</a>
                            <a href="#groups" className="block p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">3. Group & Event Rules</a>
                            <a href="#termination" className="block p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">4. Termination</a>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 space-y-16">

                        {/* Section 1 */}
                        <div id="account" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold text-lg">1</span>
                                <h2 className="text-3xl font-bold text-gray-900">Account & Identity</h2>
                            </div>
                            <div className="prose prose-lg text-gray-600 max-w-none">
                                <p>
                                    To maintain the integrity of our platform, we enforce strict identity verification standards. When you create an account, you agree to:
                                </p>
                                <ul className="list-none space-y-4 mt-4 pl-0">
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.963-7.178z" /><circle cx="12" cy="12" r="3" /></svg>
                                        <span>Provide accurate, current, and complete information during the registration process.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12l2.25 2.25L21 12" /></svg>
                                        <span>Maintain a verifyable profile photo. Fake or misleading photos are grounds for removal.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><circle cx="12" cy="12" r="9" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6 6m0-6l-6 6" /></svg>
                                        <span>Register only one unique account. Multiple accounts for a single user are prohibited.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <hr className="border-gray-100" />

                        {/* Section 2 */}
                        <div id="conduct" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600 font-bold text-lg">2</span>
                                <h2 className="text-3xl font-bold text-gray-900">Code of Conduct</h2>
                            </div>
                            <div className="bg-red-50/50 border border-red-100 rounded-2xl p-6 mb-6">
                                <strong className="block text-red-900 mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
                                    Prohibited Behaviors
                                </strong>
                                <p className="text-sm text-red-800/80">
                                    Violation of these rules will result in immediate account suspension.
                                </p>
                            </div>
                            <div className="prose prose-lg text-gray-600 max-w-none">
                                <p>
                                    Our database monitors for reportable actions. You explicitly agree NOT to:
                                </p>
                                <div className="grid md:grid-cols-2 gap-4 mt-4 not-prose">
                                    <div className="p-4 bg-white border border-gray-100 rounded-xl">
                                        <h4 className="font-bold text-gray-900 mb-1">Harassment</h4>
                                        <p className="text-sm text-gray-500">Bullying, stalking, or any aggressive behavior towards other members.</p>
                                    </div>
                                    <div className="p-4 bg-white border border-gray-100 rounded-xl">
                                        <h4 className="font-bold text-gray-900 mb-1">Spamming</h4>
                                        <p className="text-sm text-gray-500">Sending unsolicited commercial messages or promoting external services.</p>
                                    </div>
                                    <div className="p-4 bg-white border border-gray-100 rounded-xl">
                                        <h4 className="font-bold text-gray-900 mb-1">Hate Speech</h4>
                                        <p className="text-sm text-gray-500">Content that promotes discrimination based on race, gender, religion, or orientation.</p>
                                    </div>
                                    <div className="p-4 bg-white border border-gray-100 rounded-xl">
                                        <h4 className="font-bold text-gray-900 mb-1">Illegal Content</h4>
                                        <p className="text-sm text-gray-500">Posting or coordinating any illegal activities.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-100" />

                        {/* Section 3 */}
                        <div id="groups" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600 font-bold text-lg">3</span>
                                <h2 className="text-3xl font-bold text-gray-900">Group & Event Rules</h2>
                            </div>
                            <div className="prose prose-lg text-gray-600 max-w-none">
                                <p>
                                    As a host or attendee of a Hangout group, you bear specific responsibilities:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 mt-4">
                                    <li className="marker:text-blue-500"><strong>Hosts</strong> must ensure the safety and accuracy of their listed event location.</li>
                                    <li className="marker:text-blue-500"><strong>Groups</strong> automatically expire after their scheduled time to ensure content freshness.</li>
                                    <li className="marker:text-blue-500"><strong>Attendance</strong> is tracked. Repeatedly joining groups and failing to show up (&quot;flaking&quot;) may impact your trust score.</li>
                                    <li className="marker:text-blue-500"><strong>Locations</strong> should be in public, accessible areas unless specifically vetted.</li>
                                </ul>
                            </div>
                        </div>

                        <hr className="border-gray-100" />

                        {/* Section 4 */}
                        <div id="termination" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 font-bold text-lg">4</span>
                                <h2 className="text-3xl font-bold text-gray-900">Termination & Data</h2>
                            </div>
                            <div className="prose prose-lg text-gray-600 max-w-none">
                                <div className="flex gap-4 p-5 bg-blue-50 rounded-xl border border-blue-100 items-start">
                                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" /></svg>
                                    <div>
                                        <h4 className="font-bold text-blue-900 mb-1">Our Rights</h4>
                                        <p className="text-blue-800/80 text-sm">
                                            We reserve the right to suspend or terminate your account at our sole discretion if we believe you have violated these Terms, pose a risk to the community, or for any other reason.
                                        </p>
                                    </div>
                                </div>
                                <p className="mt-6">
                                    Upon termination, your right to use the Service will immediately cease. We may retain certain data as required by law or for legitimate business purposes such as fraud prevention.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="bg-gray-900 py-16 px-4 text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to join the community?</h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-8">
                    By joining, you agree to these terms and help us build a safer world for everyone.
                </p>
                {agreed ? (
                    <button
                        disabled
                        className="bg-emerald-500 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-emerald-900/30 flex items-center gap-2 mx-auto cursor-default"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                        Agreed to Terms
                    </button>
                ) : (
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-900/50 hover:-translate-y-0.5"
                    >
                        I Agree & Continue
                    </button>
                )}
            </section>

            {/* Agreement Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setShowModal(false)}
                    />

                    {/* Modal */}
                    <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-in-up max-h-[90vh] flex flex-col">
                        {/* Header with gradient */}
                        <div className="bg-gradient-to-br from-blue-600 to-blue-800 px-5 py-4">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2 text-blue-200 text-xs font-semibold">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                                    Confirmation Required
                                </div>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="text-white/60 hover:text-white transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                            <h3 className="text-lg font-bold text-white">Before you join</h3>
                            <p className="text-blue-200 text-xs mt-0.5">Please confirm you&apos;ve read and accept each section.</p>
                        </div>

                        {/* Checkboxes — scrollable */}
                        <div className="p-4 space-y-2 overflow-y-auto flex-1">
                            {[
                                { key: "identity" as const, label: "Account & Identity", desc: "I will use my real identity and provide accurate information" },
                                { key: "conduct" as const, label: "Code of Conduct", desc: "I will not engage in harassment, spam, or hate speech" },
                                { key: "privacy" as const, label: "Group & Event Rules", desc: "I understand host responsibilities and attendance tracking" },
                                { key: "termination" as const, label: "Termination & Data", desc: "I acknowledge the platform's right to suspend accounts" },
                            ].map((item) => (
                                <label
                                    key={item.key}
                                    className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all duration-200 ${checks[item.key]
                                        ? "border-blue-500 bg-blue-50/50"
                                        : "border-gray-100 bg-gray-50/30 hover:border-gray-200"
                                        }`}
                                    onClick={() => toggleCheck(item.key)}
                                >
                                    {/* Custom radio */}
                                    <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200 ${checks[item.key]
                                        ? "border-blue-500 bg-blue-500"
                                        : "border-gray-300"
                                        }`}>
                                        {checks[item.key] && (
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                                        )}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 text-xs">{item.label}</p>
                                        <p className="text-gray-500 text-[11px] leading-tight">{item.desc}</p>
                                    </div>
                                </label>
                            ))}
                        </div>

                        {/* Progress bar + Actions — always visible */}
                        <div className="border-t border-gray-100 px-4 pt-3 pb-4">
                            <div className="h-1 bg-gray-100 rounded-full overflow-hidden mb-2">
                                <div
                                    className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-500 ease-out"
                                    style={{ width: `${(Object.values(checks).filter(Boolean).length / 4) * 100}%` }}
                                />
                            </div>
                            <p className="text-[10px] text-gray-400 text-center mb-3">
                                {Object.values(checks).filter(Boolean).length} of 4 confirmed
                            </p>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-colors text-sm"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleConfirm}
                                    disabled={!allChecked}
                                    className={`flex-1 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${allChecked
                                        ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25 hover:-translate-y-0.5"
                                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                        }`}
                                >
                                    {allChecked ? "✓ Confirm Agreement" : "Select all to continue"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Toast Notification */}
            <div className={`fixed top-6 right-6 z-[200] transition-all duration-500 ${showToast ? "translate-x-0 opacity-100" : "translate-x-[120%] opacity-0"}`}>
                <div className="bg-emerald-500 text-white px-5 py-3 rounded-xl shadow-xl shadow-emerald-500/30 flex items-center gap-3 min-w-[280px]">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    </div>
                    <div>
                        <p className="font-bold text-sm">Terms Accepted!</p>
                        <p className="text-emerald-100 text-xs">You&apos;ve agreed to the community terms.</p>
                    </div>
                    <button onClick={() => setShowToast(false)} className="ml-auto text-white/60 hover:text-white">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>

            <Footer />
        </main>
    );
}
