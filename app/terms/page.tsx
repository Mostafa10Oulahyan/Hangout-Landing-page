"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

/* ─────────────────────── Table of Contents Data ─────────────────────── */
const tocItems = [
    { id: "1", label: "Acceptance of Terms" },
    { id: "2", label: "Eligibility and Age Requirements" },
    { id: "3", label: "Description of Service" },
    { id: "4", label: "User Accounts and Registration" },
    { id: "5", label: "User Responsibilities and Conduct" },
    { id: "6", label: "Safety and Liability Disclaimer" },
    { id: "7", label: "Meeting in Person – Critical Safety Guidelines" },
    { id: "8", label: "Content and Intellectual Property" },
    { id: "9", label: "Privacy and Data Protection" },
    { id: "10", label: "Groups and Events ('HangoutBffs')" },
    { id: "11", label: "Ratings and Reviews" },
    { id: "12", label: "Prohibited Activities" },
    { id: "13", label: "Reporting and Moderation" },
    { id: "14", label: "Suspension and Termination" },
    { id: "15", label: "Disclaimers and Limitations of Liability" },
    { id: "16", label: "Indemnification" },
    { id: "17", label: "Third-Party Services and Links" },
    { id: "18", label: "Modifications to the Service" },
    { id: "19", label: "Changes to These Terms" },
    { id: "20", label: "Governing Law and Dispute Resolution" },
    { id: "21", label: "Contact Information" },
];

/* ═══════════════════════════ COMPONENT ═══════════════════════════ */
export default function TermsPage() {
    return (
        <main className="min-h-screen bg-gray-50 font-sans selection:bg-blue-100 selection:text-blue-900">
            {/* Navbar */}
            <div className="bg-gray-900 absolute w-full top-0 z-50">
                <Navbar />
            </div>

            {/* ─── Hero ─── */}
            <section className="relative h-[38vh] min-h-[360px] flex items-center justify-center overflow-hidden bg-gray-900 pt-20">
                <div className="absolute inset-0">
                    <img
                        src="terms&Conditions.png"
                        alt="Terms Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 text-center max-w-4xl px-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 backdrop-blur-sm text-sm font-semibold mb-6">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        Legal Center
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-2xl">
                        Terms of{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                            Service
                        </span>
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Effective Date: February 12, 2026 · Last Updated: February 12, 2026
                    </p>
                </div>
            </section>

            {/* ─── Body ─── */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Intro */}
                    <div className="mb-12 text-gray-600 leading-relaxed space-y-4 text-[15px]">
                        <p>
                            Welcome to HangoutBff! These Terms and Conditions (&quot;Terms&quot;, &quot;Terms of Service&quot;) govern your access to and use of the HangoutBff web application, mobile applications, and related services (collectively, the &quot;Service&quot;).
                        </p>
                        <p className="font-semibold text-gray-800">
                            IMPORTANT: BY ACCESSING OR USING HangoutBff, YOU AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE THE SERVICE.
                        </p>
                        <p>
                            Please read these Terms carefully before using HangoutBff. These Terms constitute a legally binding agreement between you and HangoutBff.
                        </p>
                    </div>

                    {/* ── Table of Contents ── */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-14 shadow-sm">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h2>
                        <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                            {tocItems.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`#section-${item.id}`}
                                        className="text-gray-600 hover:text-blue-600 transition-colors py-1"
                                    >
                                        {item.id}. {item.label}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* ═══════════ SECTION 1 ═══════════ */}
                    <SectionHeading id="1" title="Acceptance of Terms" />
                    <P>By creating an account, accessing, or using any part of the HangoutBff Service, you acknowledge that you have read, understood, and agree to be bound by these Terms, our Privacy Policy, and our Community Guidelines.</P>
                    <P>If you are using HangoutBff on behalf of an organization or entity, you represent and warrant that you have the authority to bind that organization to these Terms.</P>

                    <Divider />

                    {/* ═══════════ SECTION 2 ═══════════ */}
                    <SectionHeading id="2" title="Eligibility and Age Requirements" />

                    <SubHeading>2.1 Minimum Age Requirement</SubHeading>
                    <P className="font-semibold text-gray-800">YOU MUST BE AT LEAST 18 YEARS OLD TO USE HangoutBff.</P>
                    <P>HangoutBff is intended exclusively for users who are 18 years of age or older. By using the Service, you represent and warrant that you are at least 18 years old.</P>

                    <SubHeading>2.2 Age Verification</SubHeading>
                    <P>We reserve the right to request proof of age at any time. If we discover that a user is under 18 years old, we will immediately terminate their account and delete their personal information in accordance with applicable law.</P>

                    <SubHeading>2.3 Geographic Restrictions</SubHeading>
                    <P>HangoutBff may not be available in all countries or regions. By using the Service, you represent that your use complies with all applicable local laws and regulations in your jurisdiction.</P>

                    <Divider />

                    {/* ═══════════ SECTION 3 ═══════════ */}
                    <SectionHeading id="3" title="Description of Service" />
                    <P>HangoutBff is a social platform that helps people:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li><strong>Connect with others</strong> who share similar interests and activities</li>
                        <li><strong>Discover and join groups</strong> (called &quot;HangoutBffs&quot;) for social activities, events, and meetups</li>
                        <li><strong>Create and host HangoutBffs</strong> to bring people together</li>
                        <li><strong>Communicate</strong> with other users through group messaging</li>
                        <li><strong>Build a community</strong> of friends and like-minded individuals worldwide</li>
                    </ul>

                    <SubHeading>3.1 Platform Purpose</SubHeading>
                    <P>HangoutBff serves as a <strong>facilitation platform only</strong>. We provide the tools for users to organize and discover social gatherings, but we do not:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Organize, sponsor, or host any HangoutBffs</li>
                        <li>Verify the safety, legality, or suitability of any HangoutBff</li>
                        <li>Screen, vet, or conduct background checks on users (beyond basic verification)</li>
                        <li>Guarantee the behavior, identity, or intentions of any user</li>
                        <li>Supervise, monitor, or control in-person meetings</li>
                    </ul>

                    <Divider />

                    {/* ═══════════ SECTION 4 ═══════════ */}
                    <SectionHeading id="4" title="User Accounts and Registration" />

                    <SubHeading>4.1 Account Creation</SubHeading>
                    <P>To use most features of HangoutBff, you must create an account. You may register using:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li><strong>Email and password</strong> (managed securely by our authentication provider, Clerk)</li>
                        <li><strong>Google Sign-In</strong> (single sign-on with your Google account)</li>
                    </ul>

                    <SubHeading>4.2 Account Information</SubHeading>
                    <P>You agree to provide:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Accurate, current, and complete information during registration</li>
                        <li>Your real first name (nicknames or aliases are not permitted)</li>
                        <li>A valid email address</li>
                        <li>Truthful profile information (bio, location, interests, date of birth, gender)</li>
                    </ul>

                    <SubHeading>4.3 Account Security</SubHeading>
                    <P>You are responsible for:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li>Maintaining the confidentiality of your account credentials</li>
                        <li>All activities that occur under your account</li>
                        <li>Notifying us immediately if you suspect unauthorized access</li>
                    </ul>
                    <P className="font-semibold text-gray-800">You agree not to:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Share your account credentials with anyone</li>
                        <li>Allow others to use your account</li>
                        <li>Create multiple accounts for yourself</li>
                    </ul>

                    <SubHeading>4.4 Profile Accuracy</SubHeading>
                    <P>You must keep your profile information up to date. Providing false or misleading information, including misrepresenting your age, identity, or location, is a violation of these Terms and may result in account termination.</P>

                    <Divider />

                    {/* ═══════════ SECTION 5 ═══════════ */}
                    <SectionHeading id="5" title="User Responsibilities and Conduct" />

                    <SubHeading>5.1 General Responsibilities</SubHeading>
                    <P>As a HangoutBff user, you are solely responsible for:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Your own safety and well-being when using the Service</li>
                        <li>Verifying the identity, trustworthiness, and intentions of other users before meeting in person</li>
                        <li>Your decision to attend or host any HangoutBff</li>
                        <li>Your actions and behavior during any in-person meeting</li>
                        <li>Complying with all applicable laws and regulations</li>
                        <li>Any consequences resulting from your use of the Service</li>
                    </ul>

                    <SubHeading>5.2 Due Diligence Before Meeting</SubHeading>
                    <P className="font-semibold text-gray-800">BEFORE JOINING OR ATTENDING ANY HangoutBff, YOU MUST:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li><strong>Review the host&apos;s profile</strong> – Check their rating, reviews, verification status, and activity history</li>
                        <li><strong>Research the location</strong> – Verify it is a legitimate, public, and safe place</li>
                        <li><strong>Read group details carefully</strong> – Understand the activity type, time, expectations, and any requirements</li>
                        <li><strong>Check participant information</strong> – Review who else is attending if possible</li>
                        <li><strong>Trust your instincts</strong> – If something feels wrong or suspicious, do not attend</li>
                        <li><strong>Inform someone you trust</strong> – Share your plans, location, and expected return time with a friend or family member</li>
                        <li><strong>Meet in public places</strong> – Especially for first-time meetings with new people</li>
                    </ul>

                    <SubHeading>5.3 Personal Accountability</SubHeading>
                    <P className="font-semibold text-gray-800">YOU ACKNOWLEDGE AND AGREE THAT:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>HangoutBff is not responsible for screening users or verifying their backgrounds</li>
                        <li>User ratings and reviews are subjective opinions and may not reflect reality</li>
                        <li>Verification badges (email verified) only confirm basic account information, not trustworthiness</li>
                        <li>You use the Service entirely at your own risk</li>
                        <li>You are solely responsible for any harm, injury, loss, or damage that may result from your participation in HangoutBffs</li>
                    </ul>

                    <SubHeading>5.4 Code of Conduct</SubHeading>
                    <P>You agree to:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Treat all users with respect, kindness, and dignity</li>
                        <li>Be honest and transparent in your communications</li>
                        <li>Honor your commitments to attend or host HangoutBffs</li>
                        <li>Follow the rules and guidelines set by HangoutBff hosts</li>
                        <li>Respect personal boundaries and privacy</li>
                        <li>Report suspicious, harmful, or inappropriate behavior</li>
                        <li>Comply with our Community Guidelines</li>
                    </ul>

                    <Divider />

                    {/* ═══════════ SECTION 6 ═══════════ */}
                    <SectionHeading id="6" title="Safety and Liability Disclaimer" />

                    <SubHeading>6.1 Platform Role</SubHeading>
                    <P className="font-semibold text-gray-800">HangoutBff IS A FACILITATION PLATFORM ONLY. We provide the technology for users to connect and organize social activities, but we:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Do <strong>NOT</strong> organize, sponsor, host, or supervise any HangoutBffs</li>
                        <li>Do <strong>NOT</strong> conduct background checks or verify user identities beyond basic email verification</li>
                        <li>Do <strong>NOT</strong> guarantee the safety, legality, or suitability of any HangoutBff or user</li>
                        <li>Do <strong>NOT</strong> screen users for criminal history, mental health, or other risk factors</li>
                        <li>Are <strong>NOT</strong> responsible for the actions, behavior, or safety of any user</li>
                    </ul>

                    <SubHeading>6.2 Assumption of Risk</SubHeading>
                    <P className="font-semibold text-gray-800">BY USING HangoutBff, YOU EXPRESSLY ACKNOWLEDGE AND ASSUME ALL RISKS ASSOCIATED WITH:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Meeting strangers in person</li>
                        <li>Attending events organized by other users</li>
                        <li>Sharing personal information with other users</li>
                        <li>Traveling to and from HangoutBff locations</li>
                        <li>Participating in activities during HangoutBffs</li>
                        <li>Any physical, emotional, financial, or other harm that may result from your use of the Service</li>
                    </ul>

                    <SubHeading>6.3 No Liability for User Conduct</SubHeading>
                    <P className="font-semibold text-gray-800">HangoutBff IS NOT LIABLE FOR:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Any harm, injury, death, loss, or damage resulting from in-person meetings</li>
                        <li>Criminal activity, fraud, assault, theft, or any illegal conduct by users</li>
                        <li>Accidents, injuries, or property damage during HangoutBffs</li>
                        <li>Misrepresentation, deception, or false information provided by users</li>
                        <li>Cancellations, no-shows, or disputes between users</li>
                        <li>Any content, communications, or actions of users</li>
                    </ul>

                    <SubHeading>6.4 Emergency Services</SubHeading>
                    <P>HangoutBff does not provide emergency services. In case of emergency, contact local authorities immediately (police, ambulance, fire department).</P>

                    <Divider />

                    {/* ═══════════ SECTION 7 ═══════════ */}
                    <SectionHeading id="7" title="Meeting in Person – Critical Safety Guidelines" />

                    <SubHeading>7.1 BEFORE You Meet</SubHeading>
                    <P className="font-semibold text-gray-800">DO:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li>Meet in well-lit, populated public places (cafés, parks, restaurants, community centers)</li>
                        <li>Tell a trusted friend or family member where you&apos;re going, who you&apos;re meeting, and when you expect to return</li>
                        <li>Share your live location with someone you trust (using your phone&apos;s location sharing feature)</li>
                        <li>Research the venue and surrounding area beforehand</li>
                        <li>Bring your fully charged mobile phone</li>
                        <li>Trust your instincts – if something feels wrong, don&apos;t go or leave immediately</li>
                        <li>Read reviews and ratings of the host and other participants</li>
                        <li>Verify the HangoutBff details (time, location, activity) before attending</li>
                    </ul>
                    <P className="font-semibold text-gray-800">DO NOT:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Meet at private residences for first-time meetings</li>
                        <li>Share sensitive personal information (home address, financial details, passwords)</li>
                        <li>Go to unfamiliar or isolated locations alone</li>
                        <li>Feel pressured to attend if you&apos;re uncomfortable</li>
                        <li>Consume alcohol or substances that impair your judgment</li>
                        <li>Leave your belongings unattended</li>
                        <li>Ignore red flags or warning signs</li>
                    </ul>

                    <SubHeading>7.2 DURING the HangoutBff</SubHeading>
                    <P className="font-semibold text-gray-800">STAY ALERT:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li>Remain aware of your surroundings at all times</li>
                        <li>Keep your phone accessible and charged</li>
                        <li>Stay in public view</li>
                        <li>Have a clear exit strategy</li>
                        <li>Don&apos;t accept rides from people you just met</li>
                        <li>Don&apos;t leave your drink unattended</li>
                    </ul>
                    <P className="font-semibold text-gray-800">RESPECT BOUNDARIES:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Honor your own boundaries and those of others</li>
                        <li>You have the right to leave at any time</li>
                        <li>Report any inappropriate, threatening, or illegal behavior immediately</li>
                    </ul>

                    <SubHeading>7.3 AFTER the HangoutBff</SubHeading>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Leave a review and rating to help other users make informed decisions</li>
                        <li>Report any concerning behavior or safety issues</li>
                        <li>Block users if necessary</li>
                    </ul>

                    <SubHeading>7.4 Red Flags – When NOT to Attend</SubHeading>
                    <P className="font-semibold text-gray-800">DO NOT ATTEND if:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>The host or location cannot be verified</li>
                        <li>You&apos;re asked to meet in a private or isolated location for a first meeting</li>
                        <li>The host pressures you to attend quickly or discourages questions</li>
                        <li>Something about the HangoutBff feels suspicious, uncomfortable, or unsafe</li>
                        <li>The activity involves illegal substances, weapons, or unlawful behavior</li>
                        <li>You&apos;re asked for money, financial information, or personal favors before meeting</li>
                    </ul>

                    <Divider />

                    {/* ═══════════ SECTION 8 ═══════════ */}
                    <SectionHeading id="8" title="Content and Intellectual Property" />

                    <SubHeading>8.1 Your Content</SubHeading>
                    <P>You retain ownership of all content you create, upload, or share on HangoutBff (&quot;User Content&quot;), including:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Profile information, photos, and bio</li>
                        <li>Messages and communications</li>
                        <li>Group posts and descriptions</li>
                        <li>Reviews and ratings</li>
                    </ul>

                    <SubHeading>8.2 License to HangoutBff</SubHeading>
                    <P>By posting User Content, you grant HangoutBff a worldwide, non-exclusive, royalty-free, transferable license to:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li>Use, reproduce, modify, adapt, and display your User Content</li>
                        <li>Operate, provide, improve, and promote the Service</li>
                        <li>Create derivative works from your User Content (e.g., thumbnails, excerpts)</li>
                    </ul>
                    <P>This license continues even after you delete your account for content that has been shared with others or incorporated into the Service.</P>

                    <SubHeading>8.3 Content Restrictions</SubHeading>
                    <P>You represent and warrant that your User Content:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Does not violate any third-party rights (copyright, trademark, privacy, publicity)</li>
                        <li>Is truthful and not misleading</li>
                        <li>Does not contain illegal, harmful, or prohibited content</li>
                        <li>Complies with all applicable laws and these Terms</li>
                    </ul>

                    <SubHeading>8.4 HangoutBff&apos;s Intellectual Property</SubHeading>
                    <P>All rights, title, and interest in the HangoutBff Service, including but not limited to:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li>The HangoutBff name, logo, branding, and trademarks</li>
                        <li>The website, mobile app, and software code</li>
                        <li>Design, features, functionality, and user interface</li>
                        <li>Documentation and content created by HangoutBff</li>
                    </ul>
                    <P>are owned by HangoutBff and protected by copyright, trademark, and other intellectual property laws.</P>
                    <P className="font-semibold text-gray-800">You may not:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Copy, modify, distribute, or reverse engineer any part of the Service</li>
                        <li>Use the HangoutBff name, logo, or branding without written permission</li>
                        <li>Create derivative products or services based on HangoutBff</li>
                    </ul>

                    <Divider />

                    {/* ═══════════ SECTION 9 ═══════════ */}
                    <SectionHeading id="9" title="Privacy and Data Protection" />
                    <P>Your privacy is important to us. Our collection, use, and protection of your personal data is governed by our <strong>Privacy Policy</strong>, which is incorporated into these Terms by reference.</P>
                    <P>By using HangoutBff, you consent to:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li>The collection and use of your information as described in the Privacy Policy</li>
                        <li>The storage and processing of your data on servers that may be located outside your country</li>
                        <li>Receiving communications from HangoutBff (service updates, notifications, security alerts)</li>
                    </ul>
                    <P>
                        Please review our Privacy Policy at:{" "}
                        <a href="/privacy" className="text-blue-600 hover:underline font-medium">Privacy Policy</a>
                    </P>

                    <Divider />

                    {/* ═══════════ SECTION 10 ═══════════ */}
                    <SectionHeading id="10" title='Groups and Events ("HangoutBffs")' />

                    <SubHeading>10.1 Creating HangoutBffs</SubHeading>
                    <P>As a host, you may create HangoutBffs by providing:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Title and description</li>
                        <li>Activity type and mood</li>
                        <li>Location (address, coordinates using Google Places)</li>
                        <li>Date and time</li>
                        <li>Maximum number of participants</li>
                        <li>Any specific requirements or expectations</li>
                    </ul>

                    <SubHeading>10.2 Host Responsibilities</SubHeading>
                    <P className="font-semibold text-gray-800">As a host, you are responsible for:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li>Providing accurate and complete information about your HangoutBff</li>
                        <li>Choosing safe, legal, and appropriate locations</li>
                        <li>Being present and punctual for your own HangoutBffs</li>
                        <li>Managing participant expectations and communication</li>
                        <li>Canceling the HangoutBff if necessary and notifying participants promptly</li>
                        <li>Ensuring the activity complies with all applicable laws and venue rules</li>
                        <li>The safety and well-being of yourself (not of participants – each person is responsible for themselves)</li>
                    </ul>
                    <P className="font-semibold text-gray-800">As a host, you are NOT responsible for:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Participants&apos; safety, behavior, or actions (each participant is solely responsible for themselves)</li>
                        <li>Vetting or screening participants</li>
                        <li>Supervising participants or enforcing rules beyond basic group management</li>
                    </ul>

                    <SubHeading>10.3 Joining HangoutBffs</SubHeading>
                    <P>By joining a HangoutBff, you agree to:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Attend as confirmed or notify the host if you cannot make it</li>
                        <li>Behave respectfully and appropriately</li>
                        <li>Follow the host&apos;s guidelines and instructions</li>
                        <li>Be responsible for your own safety and conduct</li>
                        <li>Leave honest feedback after the event</li>
                    </ul>

                    <SubHeading>10.4 Cancellations and No-Shows</SubHeading>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li><strong>Hosts:</strong> Must cancel through the app and notify participants if a HangoutBff cannot proceed</li>
                        <li><strong>Participants:</strong> Should notify the host if you cannot attend</li>
                        <li>Repeated no-shows or last-minute cancellations without valid reason may result in account restrictions</li>
                    </ul>

                    <SubHeading>10.5 HangoutBff Content</SubHeading>
                    <P>HangoutBff hosts and participants may not organize events involving:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Illegal activities (drug use, underage drinking, gambling, etc.)</li>
                        <li>Adult content or sexual services</li>
                        <li>Dangerous or reckless activities that endanger participants</li>
                        <li>Scams, pyramid schemes, or fraudulent business opportunities</li>
                        <li>Hate speech, discrimination, or harassment</li>
                        <li>Unlicensed commercial services requiring permits or insurance</li>
                    </ul>

                    <Divider />

                    {/* ═══════════ SECTION 11 ═══════════ */}
                    <SectionHeading id="11" title="Ratings and Reviews" />

                    <SubHeading>11.1 Purpose</SubHeading>
                    <P>Ratings and reviews help users make informed decisions and maintain community trust.</P>

                    <SubHeading>11.2 Rating System</SubHeading>
                    <P>After participating in a HangoutBff, users may rate other participants on a scale of 1-5 stars and provide optional written feedback.</P>

                    <SubHeading>11.3 Review Guidelines</SubHeading>
                    <P>Reviews must:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Be honest, factual, and based on your personal experience</li>
                        <li>Be respectful and constructive</li>
                        <li>Not contain personal attacks, profanity, or hate speech</li>
                        <li>Not reveal private or sensitive information about others</li>
                        <li>Not be used for blackmail, coercion, or retaliation</li>
                    </ul>

                    <SubHeading>11.4 Review Moderation</SubHeading>
                    <P>HangoutBff reserves the right to:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Remove reviews that violate these Terms or Community Guidelines</li>
                        <li>Investigate suspicious rating patterns or review manipulation</li>
                        <li>Take action against users who abuse the rating system</li>
                    </ul>

                    <SubHeading>11.5 No Guarantee of Accuracy</SubHeading>
                    <P>Ratings and reviews represent subjective opinions of individual users. HangoutBff does not verify the accuracy of reviews and is not responsible for their content.</P>

                    <Divider />

                    {/* ═══════════ SECTION 12 ═══════════ */}
                    <SectionHeading id="12" title="Prohibited Activities" />
                    <P>You agree <strong>NOT</strong> to:</P>

                    <SubHeading>12.1 Illegal Conduct</SubHeading>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Use the Service for any illegal purpose or in violation of any laws</li>
                        <li>Organize or participate in illegal activities through HangoutBffs</li>
                        <li>Promote, facilitate, or engage in criminal conduct</li>
                    </ul>

                    <SubHeading>12.2 Harmful Behavior</SubHeading>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Harass, bully, threaten, stalk, or intimidate other users</li>
                        <li>Engage in hate speech, discrimination, or bigotry based on race, ethnicity, religion, gender, sexual orientation, disability, or any other protected characteristic</li>
                        <li>Impersonate another person or entity</li>
                        <li>Share sexually explicit, violent, or otherwise inappropriate content</li>
                    </ul>

                    <SubHeading>12.3 Fraudulent Activity</SubHeading>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Create fake accounts or profiles</li>
                        <li>Provide false, misleading, or deceptive information</li>
                        <li>Engage in scams, phishing, or fraudulent schemes</li>
                        <li>Solicit money, donations, or financial information from users</li>
                    </ul>

                    <SubHeading>12.4 Platform Abuse</SubHeading>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Spam, advertise, or promote commercial services without authorization</li>
                        <li>Use bots, scripts, or automated tools to access the Service</li>
                        <li>Scrape, harvest, or collect user data without permission</li>
                        <li>Attempt to hack, disrupt, or compromise the security of the Service</li>
                        <li>Upload viruses, malware, or malicious code</li>
                        <li>Manipulate ratings or reviews</li>
                    </ul>

                    <SubHeading>12.5 Privacy Violations</SubHeading>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Share another user&apos;s personal information without consent</li>
                        <li>Screenshot or record private conversations without permission</li>
                        <li>Use information obtained from HangoutBff for purposes outside the platform</li>
                    </ul>

                    <SubHeading>12.6 Underage Use</SubHeading>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Create an account if you are under 18 years old</li>
                        <li>Allow minors to use your account</li>
                        <li>Organize HangoutBffs that include or target minors</li>
                    </ul>

                    <Divider />

                    {/* ═══════════ SECTION 13 ═══════════ */}
                    <SectionHeading id="13" title="Reporting and Moderation" />

                    <SubHeading>13.1 Reporting Violations</SubHeading>
                    <P>If you encounter behavior or content that violates these Terms, you can report it through the app by:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Using the &quot;Report&quot; button on user profiles, HangoutBffs, or messages</li>
                        <li>Contacting our support team at: <a href="mailto:support@hangoutbff.me" className="text-blue-600 hover:underline font-medium">support@hangoutbff.me</a></li>
                    </ul>

                    <SubHeading>13.2 Report Types</SubHeading>
                    <P>You can report:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Inappropriate behavior</li>
                        <li>Spam or scams</li>
                        <li>Harassment or bullying</li>
                        <li>Fake profiles</li>
                        <li>Safety concerns</li>
                        <li>Terms of Service violations</li>
                    </ul>

                    <SubHeading>13.3 Review Process</SubHeading>
                    <P>We will review all reports, but we cannot guarantee:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Immediate action or response</li>
                        <li>That we will agree with your assessment</li>
                        <li>Disclosure of actions taken against reported users (for privacy reasons)</li>
                    </ul>

                    <SubHeading>13.4 Blocking Users</SubHeading>
                    <P>You can block any user at any time. Blocked users:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Cannot view your profile</li>
                        <li>Cannot send you messages</li>
                        <li>Cannot see your activity in groups</li>
                        <li>Will not be shown your HangoutBffs</li>
                    </ul>

                    <Divider />

                    {/* ═══════════ SECTION 14 ═══════════ */}
                    <SectionHeading id="14" title="Suspension and Termination" />

                    <SubHeading>14.1 Our Right to Suspend or Terminate</SubHeading>
                    <P>HangoutBff reserves the right, at our sole discretion, to:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li>Suspend or terminate your account at any time, with or without notice</li>
                        <li>Remove or disable access to any content</li>
                        <li>Refuse service to anyone</li>
                    </ul>
                    <P className="font-semibold text-gray-800">Reasons for account suspension or termination include, but are not limited to:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Violation of these Terms or Community Guidelines</li>
                        <li>Illegal activity or conduct</li>
                        <li>Fraudulent, abusive, or harmful behavior</li>
                        <li>Providing false information</li>
                        <li>Being under 18 years of age</li>
                        <li>Repeated complaints or reports from other users</li>
                        <li>Inactivity for extended periods</li>
                    </ul>

                    <SubHeading>14.2 Effect of Termination</SubHeading>
                    <P>Upon termination:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Your access to the Service will be revoked immediately</li>
                        <li>Your profile and User Content may be deleted</li>
                        <li>You may not create a new account without our permission</li>
                        <li>Provisions of these Terms that should survive termination (liability disclaimers, indemnification, dispute resolution) will remain in effect</li>
                    </ul>

                    <SubHeading>14.3 Your Right to Terminate</SubHeading>
                    <P>You may delete your account at any time through the app settings. Deletion is permanent and cannot be undone.</P>

                    <Divider />

                    {/* ═══════════ SECTION 15 ═══════════ */}
                    <SectionHeading id="15" title="Disclaimers and Limitations of Liability" />

                    <SubHeading>15.1 Service &quot;AS IS&quot;</SubHeading>
                    <P className="font-semibold text-gray-800">THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</P>
                    <P>HangoutBff disclaims all warranties, including but not limited to:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
                        <li>That the Service will be uninterrupted, secure, or error-free</li>
                        <li>That defects will be corrected</li>
                        <li>That the Service or servers are free of viruses or harmful components</li>
                        <li>The accuracy, reliability, or completeness of any content or information</li>
                    </ul>

                    <SubHeading>15.2 No Warranty for User Conduct</SubHeading>
                    <P className="font-semibold text-gray-800">HangoutBff MAKES NO REPRESENTATIONS OR WARRANTIES REGARDING:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>The conduct, identity, intentions, or safety of any user</li>
                        <li>The accuracy of user profiles, ratings, or reviews</li>
                        <li>The safety, legality, or suitability of any HangoutBff</li>
                        <li>The quality or outcome of any in-person meeting</li>
                    </ul>

                    <SubHeading>15.3 Limitation of Liability</SubHeading>
                    <P className="font-semibold text-gray-800">TO THE MAXIMUM EXTENT PERMITTED BY LAW, HangoutBff SHALL NOT BE LIABLE FOR:</P>
                    <P><strong>ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</strong>, including but not limited to:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li>Loss of profits, revenue, or business opportunities</li>
                        <li>Loss of data or information</li>
                        <li>Personal injury, death, or property damage</li>
                        <li>Emotional distress or psychological harm</li>
                        <li>Damage to reputation</li>
                    </ul>
                    <P><strong>ANY DAMAGES ARISING FROM:</strong></P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li>Your use or inability to use the Service</li>
                        <li>Conduct or content of other users</li>
                        <li>In-person meetings or HangoutBffs</li>
                        <li>Unauthorized access to your account or data</li>
                        <li>Errors, bugs, or technical issues</li>
                        <li>Termination or suspension of your account</li>
                    </ul>
                    <P className="font-semibold text-gray-800">IN NO EVENT SHALL HangoutBff&apos;S TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID TO HangoutBff IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR $100 USD, WHICHEVER IS LESS.</P>

                    <SubHeading>15.4 Basis of the Bargain</SubHeading>
                    <P>You acknowledge that HangoutBff has set its prices and entered into these Terms in reliance upon the limitations of liability and disclaimers set forth herein, and that the same form an essential basis of the bargain between you and HangoutBff.</P>

                    <Divider />

                    {/* ═══════════ SECTION 16 ═══════════ */}
                    <SectionHeading id="16" title="Indemnification" />
                    <P className="font-semibold text-gray-800">You agree to indemnify, defend, and hold harmless HangoutBff, its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising from:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li>Your use or misuse of the Service</li>
                        <li>Your violation of these Terms</li>
                        <li>Your violation of any law or regulation</li>
                        <li>Your violation of any rights of another person or entity</li>
                        <li>Your User Content</li>
                        <li>Your participation in or hosting of HangoutBffs</li>
                        <li>Your conduct or interactions with other users</li>
                        <li>Any harm, injury, or damage resulting from your use of the Service</li>
                    </ul>
                    <P>This indemnification obligation will survive termination of these Terms and your use of the Service.</P>

                    <Divider />

                    {/* ═══════════ SECTION 17 ═══════════ */}
                    <SectionHeading id="17" title="Third-Party Services and Links" />

                    <SubHeading>17.1 Third-Party Services</SubHeading>
                    <P>HangoutBff may integrate with or link to third-party services, including:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li><strong>Clerk</strong> (authentication provider)</li>
                        <li><strong>Google Places API</strong> (location services)</li>
                        <li><strong>Google Analytics</strong> (analytics)</li>
                        <li>Social media platforms (Google Sign-In)</li>
                    </ul>
                    <P>Your use of these services is subject to their respective terms and privacy policies. HangoutBff is not responsible for third-party services.</P>

                    <SubHeading>17.2 External Links</SubHeading>
                    <P>The Service may contain links to third-party websites or resources. HangoutBff:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li>Does not endorse or control third-party websites</li>
                        <li>Is not responsible for their content, products, or services</li>
                        <li>Is not liable for any harm or damages related to third-party websites</li>
                    </ul>
                    <P>You access third-party links at your own risk.</P>

                    <Divider />

                    {/* ═══════════ SECTION 18 ═══════════ */}
                    <SectionHeading id="18" title="Modifications to the Service" />
                    <P>HangoutBff reserves the right to:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li>Modify, suspend, or discontinue any part of the Service at any time</li>
                        <li>Change features, functionality, or availability</li>
                        <li>Impose limits on certain features or restrict access to parts of the Service</li>
                    </ul>
                    <P>We will make reasonable efforts to notify users of significant changes, but we are not obligated to do so.</P>
                    <P className="font-semibold text-gray-800">You acknowledge that:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>HangoutBff is not liable for any modification, suspension, or discontinuation of the Service</li>
                        <li>Features available today may not be available in the future</li>
                        <li>You have no contractual right to any specific feature or functionality</li>
                    </ul>

                    <Divider />

                    {/* ═══════════ SECTION 19 ═══════════ */}
                    <SectionHeading id="19" title="Changes to These Terms" />
                    <P>HangoutBff may update these Terms from time to time. When we make changes:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li>We will update the &quot;Last Updated&quot; date at the top of this document</li>
                        <li>For material changes, we will notify you via email or in-app notification</li>
                        <li>Your continued use of the Service after changes take effect constitutes acceptance of the updated Terms</li>
                    </ul>
                    <P>If you do not agree to the updated Terms, you must stop using the Service and delete your account.</P>
                    <P>We encourage you to review these Terms periodically.</P>

                    <Divider />

                    {/* ═══════════ SECTION 20 ═══════════ */}
                    <SectionHeading id="20" title="Governing Law and Dispute Resolution" />

                    <SubHeading>20.1 Governing Law</SubHeading>
                    <P>These Terms shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.</P>

                    <SubHeading>20.2 Dispute Resolution</SubHeading>
                    <P><strong>Informal Resolution:</strong> Before filing a claim, you agree to contact us at <a href="mailto:support@hangoutbff.me" className="text-blue-600 hover:underline font-medium">support@hangoutbff.me</a> and attempt to resolve the dispute informally for at least 30 days.</P>
                    <P><strong>Arbitration (if applicable):</strong> Any dispute arising from these Terms or your use of the Service shall be resolved through binding arbitration in accordance with applicable Arbitration Rules, except where prohibited by law.</P>
                    <P><strong>Class Action Waiver:</strong> You agree to resolve disputes with HangoutBff on an individual basis and waive your right to participate in class actions or class-wide arbitration.</P>

                    <SubHeading>20.3 Jurisdiction</SubHeading>
                    <P>For any disputes not subject to arbitration, you agree to submit to the personal jurisdiction of the courts located in [Your City/State/Country].</P>

                    <Divider />

                    {/* ═══════════ SECTION 21 ═══════════ */}
                    <SectionHeading id="21" title="Contact Information" />
                    <P>If you have any questions, concerns, or feedback about these Terms, please contact us:</P>
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-6 shadow-sm space-y-3 text-[15px] text-gray-700">
                        <p>
                            <strong>Email:</strong>{" "}
                            <a href="mailto:legal@hangoutbff.me" className="text-blue-600 hover:underline">
                                legal@hangoutbff.me
                            </a>
                        </p>
                        <p>
                            <strong>Support:</strong>{" "}
                            <a href="mailto:support@hangoutbff.me" className="text-blue-600 hover:underline">
                                support@hangoutbff.me
                            </a>
                        </p>
                    </div>

                    <Divider />

                    {/* ═══════════ Final Provisions ═══════════ */}
                    <div className="mt-10 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">Final Provisions</h2>
                    </div>

                    <SubHeading>Severability</SubHeading>
                    <P>If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.</P>

                    <SubHeading>Waiver</SubHeading>
                    <P>The failure of HangoutBff to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.</P>

                    <SubHeading>Entire Agreement</SubHeading>
                    <P>These Terms, together with the Privacy Policy and Community Guidelines, constitute the entire agreement between you and HangoutBff regarding the Service and supersede all prior agreements.</P>

                    <SubHeading>Assignment</SubHeading>
                    <P>You may not assign or transfer these Terms or your rights hereunder without our prior written consent. HangoutBff may assign these Terms at any time without notice.</P>

                    <SubHeading>Survival</SubHeading>
                    <P>All provisions that by their nature should survive termination shall survive, including but not limited to: ownership provisions, warranty disclaimers, indemnification, and limitations of liability.</P>

                    <SubHeading>Language</SubHeading>
                    <P>These Terms may be translated into other languages for convenience. In the event of any conflict, the English version shall prevail.</P>

                    <Divider />

                    {/* ── Legal acknowledgement ── */}
                    <div className="bg-gray-100 rounded-2xl p-6 md:p-8 mb-6 space-y-3 text-[15px] text-gray-700 font-semibold">
                        <p>BY USING HangoutBff, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS.</p>
                        <p>YOU FURTHER ACKNOWLEDGE THAT YOU ARE SOLELY RESPONSIBLE FOR YOUR SAFETY AND THE CONSEQUENCES OF YOUR PARTICIPATION IN HangoutBffS.</p>
                    </div>

                    {/* ── Footer note ── */}
                    <div className="text-center pt-8 pb-4 border-t border-gray-200 mt-12">
                        <p className="text-gray-500 text-sm font-medium">
                            Thank you for being part of the HangoutBff community. Stay safe and have fun connecting with others!
                        </p>
                        <p className="text-gray-400 text-xs mt-3">© 2026 HangoutBff. All rights reserved.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

/* ───────────────── Reusable sub-components ───────────────── */

function SectionHeading({ id, title }: { id: string; title: string }) {
    return (
        <div id={`section-${id}`} className="mb-4 mt-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900">
                {id}. {title}
            </h2>
        </div>
    );
}

function SubHeading({ children }: { children: React.ReactNode }) {
    return <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">{children}</h3>;
}

function P({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <p className={`text-[15px] text-gray-600 leading-relaxed mb-4 ${className}`}>
            {children}
        </p>
    );
}

function Divider() {
    return <hr className="border-gray-200 my-8" />;
}
