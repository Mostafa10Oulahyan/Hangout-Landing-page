"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Lock } from "lucide-react";

/* ─────────────────────── Table of Contents Data ─────────────────────── */
const tocItems = [
    { id: "1", label: "Information We Collect" },
    { id: "2", label: "How We Collect Information" },
    { id: "3", label: "How We Use Your Information" },
    { id: "4", label: "Legal Basis for Processing (EEA/UK Users)" },
    { id: "5", label: "App Permissions" },
    { id: "6", label: "Cookies and Tracking Technologies" },
    { id: "7", label: "How We Share Your Information" },
    { id: "8", label: "Data Retention" },
    { id: "9", label: "Data Storage and Security" },
    { id: "10", label: "International Data Transfers" },
    { id: "11", label: "Your Privacy Rights" },
    { id: "12", label: "Children's Privacy" },
    { id: "13", label: "Third-Party Services and Links" },
    { id: "14", label: "California Privacy Rights (CCPA)" },
    { id: "15", label: "Changes to This Privacy Policy" },
    { id: "16", label: "Contact Us" },
];

/* ═══════════════════════════ COMPONENT ═══════════════════════════ */
export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-gray-50 font-sans selection:bg-green-100 selection:text-green-900">
            {/* Navbar */}
            <div className="bg-gray-900 absolute w-full top-0 z-50">
                <Navbar />
            </div>

            {/* ─── Hero ─── */}
            <section className="relative h-[38vh] min-h-[360px] flex items-center justify-center overflow-hidden bg-gray-900 pt-20">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
                        alt="Privacy Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="relative z-10 text-center max-w-4xl px-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 backdrop-blur-sm text-sm font-semibold mb-6">
                        <Lock className="w-4 h-4" /> Data Protection
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-2xl">
                        Privacy{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                            Policy
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
                            Welcome to HangoutBff (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to
                            protecting your privacy and ensuring you have a safe and transparent experience
                            while using our platform. This Privacy Policy explains how we collect, use,
                            store, share, and protect your personal information when you use the HangoutBff web
                            application and mobile applications (collectively, the &quot;Service&quot;).
                        </p>
                        <p>
                            By accessing or using HangoutBff, you agree to the terms of this Privacy Policy. If
                            you do not agree with any part of this policy, please do not use our Service.
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
                                        className="text-gray-600 hover:text-green-600 transition-colors py-1"
                                    >
                                        {item.id}. {item.label}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* ═══════════ SECTION 1 ═══════════ */}
                    <SectionHeading id="1" title="Information We Collect" />
                    <P>We collect various types of information to provide, maintain, and improve our Service.</P>

                    <SubHeading>1.1 Information You Provide Directly</SubHeading>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li><strong>Account Information:</strong> When you create an account via email/password or Google Sign-In (managed by Clerk), we collect your email address, first name, and encrypted password (for email/password sign-ups). For Google Sign-In, we receive your name, email, and profile picture from Google.</li>
                        <li><strong>Profile Information:</strong> Your profile photo URL, bio (personal description), date of birth, gender, city, and country.</li>
                        <li><strong>Interests:</strong> Your selected interests and activity preferences (such as coffee, hiking, gaming, yoga, photography, etc.).</li>
                        <li><strong>User-Generated Content:</strong> Messages you send in group chats, feedback and ratings you provide for other users after events.</li>
                        <li><strong>Verification Information:</strong> Email verification status and verification method used to confirm your identity.</li>
                        <li><strong>Group Activity:</strong> Groups you create or join, your role in groups (host or member), group participation status.</li>
                        <li><strong>Communications:</strong> Information you provide when you contact our support team or submit reports.</li>
                    </ul>

                    <SubHeading>1.2 Information Collected Automatically</SubHeading>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li><strong>Device Information:</strong> Device type, operating system, browser type, IP address.</li>
                        <li><strong>Usage Data:</strong> Groups viewed, groups joined, messages sent, time spent in the app, search queries, activity preferences.</li>
                        <li><strong>Location Data:</strong> Your city and country (as provided by you), and precise location coordinates (latitude/longitude) for groups you create or join, used for displaying nearby events and recommendations. Location is stored for each group event, not continuously tracked.</li>
                        <li><strong>Group Activity Metadata:</strong> Group creation timestamps, scheduled event times, group participation counts, membership status changes.</li>
                        <li><strong>Log Data:</strong> Server logs, error reports, and diagnostic information for system stability and security.</li>
                    </ul>

                    <SubHeading>1.3 Information from Third Parties</SubHeading>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-8">
                        <li><strong>Authentication Provider (Clerk):</strong> We use Clerk for secure user authentication. When you sign up or log in, Clerk manages your authentication credentials. If you sign up with email/password, Clerk securely stores your encrypted password. If you use Google Sign-In, we receive your name, email address, and profile picture from your Google account.</li>
                        <li><strong>Social Media (Google Sign-In):</strong> If you choose to sign in with Google, we receive basic profile information including your name, email, and profile picture from Google.</li>
                        <li><strong>Analytics Partners:</strong> We may use third-party analytics services (such as Google Analytics) that collect information about your usage patterns to help us improve the Service.</li>
                    </ul>

                    <Divider />

                    {/* ═══════════ SECTION 2 ═══════════ */}
                    <SectionHeading id="2" title="How We Collect Information" />
                    <P>We collect information through:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-8">
                        <li><strong>Direct Input:</strong> When you register, update your profile, send messages, post in groups, or interact with features.</li>
                        <li><strong>Automated Technologies:</strong> Cookies, web beacons, SDKs, and similar tracking technologies.</li>
                        <li><strong>Third-Party Integrations:</strong> Social login providers, analytics tools, advertising networks, and payment processors.</li>
                    </ul>

                    <Divider />

                    {/* ═══════════ SECTION 3 ═══════════ */}
                    <SectionHeading id="3" title="How We Use Your Information" />
                    <P>We use the information we collect for the following purposes:</P>

                    <SubHeading>3.1 To Provide and Improve Our Service</SubHeading>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Create and manage your account through Clerk authentication</li>
                        <li>Enable you to create and join groups/events</li>
                        <li>Connect you with other users who share similar interests</li>
                        <li>Display nearby groups and events based on your location preferences</li>
                        <li>Facilitate group messaging and communication</li>
                        <li>Track group participation and membership</li>
                        <li>Calculate and display user ratings and feedback</li>
                        <li>Provide customer support and respond to inquiries</li>
                        <li>Send you notifications about group activities, messages, and updates</li>
                    </ul>

                    <SubHeading>3.2 For Safety and Security</SubHeading>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Verify user identities through email verification</li>
                        <li>Enable users to report inappropriate behavior, spam, harassment, or fake profiles</li>
                        <li>Process and review user reports to maintain community safety</li>
                        <li>Allow users to block other users to control their experience</li>
                        <li>Prevent fraud, abuse, and prohibited activities</li>
                        <li>Enforce our Terms of Service and Community Guidelines</li>
                        <li>Protect the rights, property, and safety of HangoutBff, our users, and the public</li>
                        <li>Monitor group activity for safety violations</li>
                    </ul>

                    <SubHeading>3.3 For Communication</SubHeading>
                    <P>Send you notifications about:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li>New groups matching your interests</li>
                        <li>Group messages and chat activity</li>
                        <li>Upcoming event reminders</li>
                        <li>Group status updates (full, cancelled, completed)</li>
                        <li>New members joining your groups</li>
                    </ul>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Send account-related notifications and security alerts</li>
                        <li>Respond to your support requests and feedback</li>
                        <li>Send important service updates (you cannot opt out of essential service communications)</li>
                    </ul>

                    <SubHeading>3.4 For Analytics and Research</SubHeading>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Analyze how users interact with our Service to improve features and user experience</li>
                        <li>Conduct research, testing, and development of new features</li>
                        <li>Generate anonymized and aggregated statistical data</li>
                    </ul>

                    <SubHeading>3.5 For Legal and Compliance Purposes</SubHeading>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-8">
                        <li>Comply with legal obligations, court orders, and regulatory requirements</li>
                        <li>Resolve disputes and enforce our agreements</li>
                    </ul>

                    <Divider />

                    {/* ═══════════ SECTION 4 ═══════════ */}
                    <SectionHeading id="4" title="Legal Basis for Processing (EEA/UK Users)" />
                    <P>
                        If you are located in the European Economic Area (EEA) or the United Kingdom, we
                        process your personal data based on the following legal grounds:
                    </P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li><strong>Consent:</strong> You have given explicit consent for specific processing activities (e.g., receiving marketing emails, location tracking).</li>
                        <li><strong>Contractual Necessity:</strong> Processing is necessary to perform our contract with you (i.e., providing the Service).</li>
                        <li><strong>Legitimate Interests:</strong> We have a legitimate interest in operating, improving, and securing our platform, provided your rights do not override these interests.</li>
                        <li><strong>Legal Obligation:</strong> We must process your data to comply with applicable laws and regulations.</li>
                    </ul>
                    <P>
                        You have the right to withdraw consent at any time without affecting the lawfulness
                        of processing based on consent before withdrawal.
                    </P>

                    <Divider />

                    {/* ═══════════ SECTION 5 ═══════════ */}
                    <SectionHeading id="5" title="App Permissions" />
                    <P>HangoutBff may request the following permissions on your device:</P>

                    <SubHeading>5.1 Location</SubHeading>
                    <P><strong>Why:</strong> To show you nearby groups and events within your preferred distance range (you set this in preferences, default 10km). Location is used to:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li>Display groups happening near you on the map</li>
                        <li>Calculate distance to events</li>
                        <li>Help others find your groups when you host events</li>
                        <li>Store event location coordinates for groups you create or join</li>
                    </ul>
                    <P><strong>What We Store:</strong> We store the city and country you provide in your profile, plus the latitude/longitude coordinates of group events you create or join (not your continuous location).</P>
                    <P><strong>Control:</strong> You provide your city/country manually in your profile settings. The app does not continuously track your location. When creating a group, you specify the event location using Google Places.</P>

                    <SubHeading>5.2 Camera (Mobile App)</SubHeading>
                    <P><strong>Why:</strong> To take photos for your profile picture or upload images to share in group chats.</P>
                    <P><strong>Control:</strong> You can deny camera access; you can still upload photos from your device gallery.</P>

                    <SubHeading>5.3 Photo Library / Storage (Mobile App)</SubHeading>
                    <P><strong>Why:</strong> To upload profile pictures and share photos in groups and messages.</P>
                    <P><strong>Control:</strong> You can manage storage permissions in your device settings.</P>

                    <SubHeading>5.4 Notifications (Push Notifications)</SubHeading>
                    <P><strong>Why:</strong> To notify you about:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li>New messages in your groups</li>
                        <li>Upcoming event reminders</li>
                        <li>Group status changes (new members, group full, cancellations)</li>
                        <li>Important account alerts</li>
                    </ul>
                    <P><strong>Control:</strong> You can customize notification preferences in your account settings and disable specific notification types. You can also disable push notifications entirely in your device settings.</P>
                    <P className="italic">
                        <strong>Important:</strong> HangoutBff is a desktop-first web application with mobile
                        app support. Most permissions apply primarily to mobile app users. Desktop users
                        interact through their web browser without requiring device permissions.
                    </P>

                    <Divider />

                    {/* ═══════════ SECTION 6 ═══════════ */}
                    <SectionHeading id="6" title="Cookies and Tracking Technologies" />
                    <P>We use cookies, web beacons, local storage, and similar technologies to:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-6">
                        <li>Authenticate users and manage sessions</li>
                        <li>Remember your preferences and settings</li>
                        <li>Analyze usage patterns and improve the Service</li>
                        <li>Deliver personalized content and advertisements</li>
                    </ul>

                    <SubHeading>Types of Cookies We Use</SubHeading>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li><strong>Essential Cookies:</strong> Necessary for the Service to function properly (e.g., session management).</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our platform (e.g., Google Analytics).</li>
                        <li><strong>Advertising Cookies:</strong> Used to deliver relevant ads and measure ad performance (if applicable).</li>
                        <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
                    </ul>
                    <P>
                        You can control cookies through your browser settings. However, disabling certain
                        cookies may affect the functionality of the Service.
                    </P>

                    <Divider />

                    {/* ═══════════ SECTION 7 ═══════════ */}
                    <SectionHeading id="7" title="How We Share Your Information" />
                    <P className="font-semibold">
                        We do not sell, rent, or trade your personal information to third parties for their
                        marketing purposes.
                    </P>
                    <P>We may share your information in the following circumstances:</P>

                    <SubHeading>7.1 With Other Users</SubHeading>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li><strong>Your public profile information</strong> is visible to other users, including: your first name, profile photo, bio, gender, city, country, interests, verification status, and user rating.</li>
                        <li><strong>Your group activity</strong> is visible to other group members, including groups you&apos;ve joined and your role (host or member).</li>
                        <li><strong>Messages you send in group chats</strong> are visible to all members of that group.</li>
                        <li><strong>Ratings and feedback</strong> you provide for other users may be visible on their profiles.</li>
                        <li><strong>Blocked users</strong> cannot see your profile or interact with you in groups.</li>
                    </ul>
                    <P>You can manage your visibility through your privacy preferences settings.</P>

                    <SubHeading>7.2 With Service Providers</SubHeading>
                    <P>We work with trusted third-party service providers to help us operate and improve the Service, including:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li><strong>Authentication Services:</strong> Clerk (for secure user authentication and account management)</li>
                        <li><strong>Cloud hosting providers:</strong> For database and file storage (e.g., Supabase, AWS, Google Cloud)</li>
                        <li><strong>Analytics providers:</strong> For understanding usage patterns (e.g., Google Analytics)</li>
                        <li><strong>Email and communication services:</strong> For sending notifications and support communications</li>
                        <li><strong>Maps and location services:</strong> Google Places API for location data and nearby group discovery</li>
                        <li><strong>Customer support tools:</strong> For managing support tickets and user inquiries</li>
                    </ul>
                    <P>These providers are contractually obligated to protect your data and use it only for the purposes we specify.</P>

                    <SubHeading>7.3 For Legal and Safety Reasons</SubHeading>
                    <P>We may disclose your information if required to do so by law or in good faith belief that such action is necessary to:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li>Comply with legal obligations, court orders, subpoenas, or regulatory requests</li>
                        <li>Protect and defend the rights, property, or safety of HangoutBff, our users, or the public</li>
                        <li>Detect, prevent, or address fraud, security, or technical issues</li>
                        <li>Enforce our Terms of Service and Community Guidelines</li>
                    </ul>

                    <SubHeading>7.4 Business Transfers</SubHeading>
                    <P>
                        In the event of a merger, acquisition, reorganization, or sale of assets, your
                        personal information may be transferred to the acquiring entity. We will notify you
                        of any such change and provide options regarding your data.
                    </P>

                    <SubHeading>7.5 With Your Consent</SubHeading>
                    <P>We may share your information for other purposes with your explicit consent.</P>

                    <Divider />

                    {/* ═══════════ SECTION 8 ═══════════ */}
                    <SectionHeading id="8" title="Data Retention" />
                    <P>
                        We retain your personal information for as long as necessary to provide the Service
                        and fulfill the purposes described in this Privacy Policy, unless a longer
                        retention period is required or permitted by law.
                    </P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-8">
                        <li><strong>Active Accounts:</strong> We retain your data as long as your account is active and you continue to use HangoutBff.</li>
                        <li><strong>Deleted Accounts:</strong> When you delete your account, we will delete your personal data within 30 days, except where we are required to retain certain information for legal, security, or safety purposes (such as resolved reports or completed group ratings for community trust).</li>
                        <li><strong>Completed Groups:</strong> Information about completed groups (including messages and ratings) may be retained for up to 90 days after group completion to maintain the integrity of user ratings and community safety records.</li>
                        <li><strong>Backups:</strong> Deleted data may persist in backup systems for up to 90 days before being permanently removed.</li>
                        <li><strong>Legal Requirements:</strong> Some data may be retained longer if required by law or for legitimate business purposes (e.g., resolving disputes, preventing fraud).</li>
                    </ul>

                    <Divider />

                    {/* ═══════════ SECTION 9 ═══════════ */}
                    <SectionHeading id="9" title="Data Storage and Security" />

                    <SubHeading>9.1 Where We Store Your Data</SubHeading>
                    <P>
                        Your data is stored on secure database servers (Supabase/PostgreSQL) with cloud
                        infrastructure provided by trusted service providers. Authentication credentials
                        are securely managed by Clerk. Data may be stored in various regions to ensure
                        performance and reliability.
                    </P>

                    <SubHeading>9.2 Security Measures</SubHeading>
                    <P>We implement industry-standard security measures to protect your personal information, including:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li><strong>Authentication Security:</strong> Clerk manages secure authentication with encrypted password storage and secure token-based session management</li>
                        <li>Encryption of data in transit using SSL/TLS protocols</li>
                        <li>Encryption of sensitive data at rest in our database</li>
                        <li>Row-level security (RLS) policies on our database to ensure users can only access data they&apos;re authorized to see</li>
                        <li>Secure authentication tokens (JWT) for API access</li>
                        <li>Regular security audits and vulnerability assessments</li>
                        <li>Access controls limiting who can view or modify data</li>
                        <li>Firewalls and intrusion detection systems</li>
                        <li>Automated triggers and functions to maintain data integrity</li>
                    </ul>
                    <P>
                        Despite our best efforts, no method of transmission or storage is 100% secure. We
                        cannot guarantee absolute security, but we are committed to protecting your data
                        using industry best practices.
                    </P>

                    <Divider />

                    {/* ═══════════ SECTION 10 ═══════════ */}
                    <SectionHeading id="10" title="International Data Transfers" />
                    <P>
                        HangoutBff operates globally, and your information may be transferred to, stored, and
                        processed in countries outside your country of residence, including countries that
                        may not have the same data protection laws.
                    </P>
                    <P>When we transfer data internationally, we ensure appropriate safeguards are in place, such as:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                        <li>Adequacy decisions by the European Commission</li>
                        <li>Certification under privacy frameworks (e.g., EU-U.S. Data Privacy Framework, if applicable)</li>
                    </ul>
                    <P>By using our Service, you consent to the transfer of your information to other countries.</P>

                    <Divider />

                    {/* ═══════════ SECTION 11 ═══════════ */}
                    <SectionHeading id="11" title="Your Privacy Rights" />
                    <P>
                        Depending on your location, you may have the following rights regarding your
                        personal data:
                    </P>

                    <SubHeading>11.1 Access and Portability</SubHeading>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li>Request a copy of the personal information we hold about you.</li>
                        <li>Request your data in a structured, commonly used, and machine-readable format.</li>
                    </ul>

                    <SubHeading>11.2 Correction</SubHeading>
                    <P>Request correction of inaccurate or incomplete personal information.</P>

                    <SubHeading>11.3 Deletion</SubHeading>
                    <P>Request deletion of your personal information, subject to certain exceptions (e.g., legal obligations, ongoing disputes).</P>

                    <SubHeading>11.4 Restriction</SubHeading>
                    <P>Request restriction of processing your data in certain circumstances.</P>

                    <SubHeading>11.5 Objection</SubHeading>
                    <P>Object to processing of your data based on legitimate interests or for direct marketing purposes.</P>

                    <SubHeading>11.6 Withdraw Consent</SubHeading>
                    <P>Withdraw your consent at any time where processing is based on consent (e.g., marketing emails, location tracking).</P>

                    <SubHeading>11.7 Lodge a Complaint</SubHeading>
                    <P>If you are in the EEA or UK, you have the right to lodge a complaint with a supervisory authority if you believe we have violated your data protection rights.</P>

                    <P className="font-semibold">How to Exercise Your Rights:</P>
                    <P>
                        To exercise any of these rights, please contact us at:{" "}
                        <a href="mailto:privacy@hangoutbff.me" className="text-green-600 hover:underline font-medium">
                            privacy@hangoutbff.me
                        </a>
                    </P>
                    <P>
                        We will respond to your request within 30 days (or as required by applicable law).
                        We may ask you to verify your identity before processing your request.
                    </P>

                    <Divider />

                    {/* ═══════════ SECTION 12 ═══════════ */}
                    <SectionHeading id="12" title="Children's Privacy" />
                    <P>
                        HangoutBff is not intended for use by individuals under the age of 13 (or the
                        applicable age of digital consent in your country, which may be higher, such as 16
                        in some EU countries).
                    </P>
                    <P>
                        We do not knowingly collect personal information from children under 13. If we
                        become aware that we have inadvertently collected such information, we will take
                        immediate steps to delete it.
                    </P>
                    <P>
                        If you are a parent or guardian and believe your child has provided us with
                        personal information, please contact us at{" "}
                        <a href="mailto:privacy@hangoutbff.me" className="text-green-600 hover:underline font-medium">
                            privacy@hangoutbff.me
                        </a>
                        .
                    </P>

                    <Divider />

                    {/* ═══════════ SECTION 13 ═══════════ */}
                    <SectionHeading id="13" title="Third-Party Services and Links" />
                    <P>
                        Our Service may contain links to third-party websites, applications, or services
                        (e.g., social media platforms, external articles, partner sites).
                    </P>
                    <P>
                        We are not responsible for the privacy practices or content of these third parties.
                        We encourage you to review their privacy policies before providing any personal
                        information.
                    </P>

                    <Divider />

                    {/* ═══════════ SECTION 14 ═══════════ */}
                    <SectionHeading id="14" title="California Privacy Rights (CCPA)" />
                    <P>If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li><strong>Right to Know:</strong> Request information about the categories and specific pieces of personal information we have collected about you.</li>
                        <li><strong>Right to Delete:</strong> Request deletion of your personal information, subject to certain exceptions.</li>
                        <li><strong>Right to Opt-Out:</strong> Opt out of the sale of your personal information. (Note: We do not sell personal information.)</li>
                        <li><strong>Right to Non-Discrimination:</strong> You will not be discriminated against for exercising your CCPA rights.</li>
                    </ul>
                    <P>
                        To exercise your rights, contact us at:{" "}
                        <a href="mailto:privacy@hangoutbff.me" className="text-green-600 hover:underline font-medium">
                            privacy@hangoutbff.me
                        </a>
                    </P>
                    <P>We will verify your identity before processing your request and respond within 45 days.</P>

                    <Divider />

                    {/* ═══════════ SECTION 15 ═══════════ */}
                    <SectionHeading id="15" title="Changes to This Privacy Policy" />
                    <P>
                        We may update this Privacy Policy from time to time to reflect changes in our
                        practices, legal requirements, or Service features.
                    </P>
                    <P>When we make material changes, we will:</P>
                    <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600 mb-4">
                        <li>Update the &quot;Last Updated&quot; date at the top of this page</li>
                        <li>Notify you via email or in-app notification (for significant changes)</li>
                        <li>Post a prominent notice on our website or app</li>
                    </ul>
                    <P>
                        Your continued use of the Service after changes become effective constitutes your
                        acceptance of the updated Privacy Policy.
                    </P>
                    <P>We encourage you to review this Privacy Policy periodically.</P>

                    <Divider />

                    {/* ═══════════ SECTION 16 ═══════════ */}
                    <SectionHeading id="16" title="Contact Us" />
                    <P>
                        If you have any questions, concerns, or requests regarding this Privacy Policy or
                        our data practices, please contact us:
                    </P>
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-6 shadow-sm space-y-3 text-[15px] text-gray-700">
                        <p>
                            <strong>Email:</strong>{" "}
                            <a href="mailto:privacy@hangoutbff.me" className="text-green-600 hover:underline">
                                privacy@hangoutbff.me
                            </a>
                        </p>
                        <p>
                            <strong>Support:</strong>{" "}
                            <a href="mailto:support@hangoutbff.me" className="text-green-600 hover:underline">
                                support@hangoutbff.me
                            </a>
                        </p>
                        <p>
                            <strong>Data Protection Officer (if applicable):</strong>
                            <br />
                            For users in the EEA/UK, you may contact our Data Protection Officer at:{" "}
                            <a href="mailto:dpo@hangoutbff.me" className="text-green-600 hover:underline">
                                dpo@hangoutbff.me
                            </a>
                        </p>
                    </div>

                    {/* ── Footer note ── */}
                    <div className="text-center pt-8 pb-4 border-t border-gray-200 mt-12">
                        <p className="text-gray-500 text-sm font-medium">
                            Thank you for trusting HangoutBff. We are committed to protecting your privacy and
                            providing a safe, enjoyable experience.
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
