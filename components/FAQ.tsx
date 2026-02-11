"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Is it safe to meet people through the app?",
        answer: "Yes! We prioritize safety with verified profiles, community guidelines, and features like group-only initial meetups to ensure a secure environment."
    },
    {
        question: "Is Hangout free?",
        answer: "Hangout is free to download and use. You can join groups, chat, and attend events without paying a dime. We also offer premium features for power users."
    },
    {
        question: "What cities is Hangout available in?",
        answer: "We are active in major global cities including London, New York, Berlin, and Tokyo, expanding to new locations monthly."
    },
    {
        question: "Does the app show my exact location?",
        answer: "No, your exact location is never shared. We only show approximate distance to help you connect locally."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Header Section */}
                    <div className="lg:col-span-5">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                            FAQs
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Everything you need to know about the app. Can't find the answer you're looking for? Please chat to our friendly team.
                        </p>
                    </div>

                    {/* Questions Section */}
                    <div className="lg:col-span-7 space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer transition-all hover:shadow-md"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <div className="flex items-center justify-between font-semibold text-lg text-gray-900">
                                    {faq.question}
                                    <span className="ml-6 flex-shrink-0 text-blue-600">
                                        {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </span>
                                </div>
                                <div className={cn(
                                    "grid transition-all duration-300 ease-in-out text-gray-600 leading-relaxed overflow-hidden",
                                    openIndex === index ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                                )}>
                                    <div className="overflow-hidden">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
