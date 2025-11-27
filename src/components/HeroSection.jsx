"use client";
import React, { useState } from 'react';
import { Mail, Briefcase, Users, Zap, Home } from 'lucide-react'; // Using lucide-react for icons

// Utility component for the Hero Stats to keep code clean
const StatCard = ({ value, label }) => (
    <div className="bg-white p-6 rounded-xl shadow-xl transition duration-300 ease-in-out hover:shadow-2xl border-b-4 border-[#DD2527] text-center transform hover:-translate-y-1">
        <p className="text-4xl font-extrabold text-[#026B32] mb-1 leading-none">{value}</p>
        <p className="text-sm font-semibold text-gray-700">{label}</p>
    </div>
);

// HeroSection component - Refined styles for aesthetics and responsiveness
const HeroSection = ({ onChangePage, currentPage }) => {
    // Colors: Green (#026B32), Red (#DD2527)
    const primaryGreen = "#026B32";
    const accentRed = "#DD2527";

    // Data for the stats section
    const stats = [
        { value: "৪০+", label: "সামাজিক কার্যক্রম" },
        { value: "১২+", label: "উপজেলা সংযোগ" },
        { value: "৭+", label: "বছরের অভিজ্ঞতা" },
        { value: "NCP", label: "যুব নেতৃত্ব" },
    ];

    return (
        <section id="home" className="space-y-12">
            {/* HERO WRAPPER - Main visual focus */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-[#026B32] to-green-700 text-white p-8 md:p-16 border border-white/20">

                {/* Subtle graphic background effect */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-15"
                    style={{
                        background: `radial-gradient(circle at top left, ${accentRed} 0%, transparent 55%), radial-gradient(circle at bottom right, #FFFFFF 0%, transparent 55%)`
                    }}
                />

                <div className="relative z-10 flex flex-col-reverse md:flex-row items-center md:items-start gap-12">

                    {/* LEFT: TEXT CONTENT */}
                    <div className="flex-1 max-w-xl text-center md:text-left">
                        {/* H2 Responsiveness: text-4xl (sm) -> text-5xl (md) -> text-6xl (lg) */}
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
                            আহাদ শিকদার — জনগণের জন্য দায়িত্ব, উন্নয়ন ও নেতৃত্বের প্রতিশ্রুতি।
                        </h2>

                        {/* P Responsiveness: text-lg (md) -> text-xl (lg) */}
                        <p className="text-lg md:text-xl mb-10 text-white/95">
                            ঝালকাঠি-১ (রাজাপুর–কাঁঠালিয়া) আসনের জনগণের প্রতিনিধি হিসেবে
                            উন্নয়ন, শিক্ষা ও মানবিক সেবায় নিয়োজিত।
                        </p>

                        {/* CTA BUTTONS - Grouped and styled for high visibility */}
                        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                            <button
                                onClick={() => onChangePage?.("roles")}
                                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-[#DD2527] shadow-xl transition duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-400 focus:ring-opacity-75 whitespace-nowrap"
                            >
                                <Briefcase size={20} /> দলের কার্যক্রম
                            </button>

                            <button
                                onClick={() => onChangePage?.("initiatives")}
                                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold bg-white text-green-700 shadow-xl transition duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-75 whitespace-nowrap"
                            >
                                <Zap size={20} /> আমার উদ্যোগ
                            </button>

                            <button
                                onClick={() => onChangePage?.("contact")}
                                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold border-2 border-white text-white shadow-xl transition duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-white hover:text-green-700 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-75 whitespace-nowrap"
                            >
                                <Mail size={20} /> যোগাযোগ করুন
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: AUTHOR IMAGE */}
                    <div className="flex-shrink-0 flex justify-center md:justify-end">
                        <div className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96 bg-white/10 rounded-[4rem] p-2 shadow-2xl transform rotate-1 transition duration-500 hover:rotate-0 hover:scale-[1.02]">

                            {/* Subtle background overlay effect for depth */}
                            <div className="absolute inset-0 bg-white/5 rounded-[4rem]" />

                            {/* The actual image container (tighter rounded edges) */}
                            <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-inner z-10">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{
                                        backgroundImage: 'url(https://i.postimg.cc/RZv3dLtR/aha-da-sa-kada-ra.png)',
                                        backgroundSize: 'cover'
                                    }}
                                    aria-label="মোঃ আহাদ শিকদার"
                                />
                            </div>
                            {/* Decorative accent (red circle) behind the image */}
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#DD2527] rounded-full blur-xl opacity-60 z-0" />
                        </div>
                    </div>
                </div>
            </div>

            {/* HERO STATS */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <StatCard key={index} value={stat.value} label={stat.label} />
                ))}
            </div>

            {/* NCP SECTION - Dedicated block for party information */}
            <div className="mt-12 p-8 rounded-2xl shadow-xl bg-white border-l-8 border-[#026B32] transition duration-300 hover:shadow-2xl">
                <h3 className="text-3xl font-bold mb-4 text-[#026B32] flex items-center gap-2">
                    <Users size={28} className="text-[#DD2527]" /> জাতীয় নাগরিক পার্টি (NCP)
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    NCP –জাতীয় নাগরিক পার্টি এমন এক রাজনৈতিক সংগঠন, যা নবপ্রজন্মের
                    নেতৃত্ব, স্বচ্ছতা এবং সামাজিক দায়বদ্ধতার মাধ্যমে জাতিকে এগিয়ে নিতে
                    চায়। আমাদের মূলমন্ত্র হলো স্থানীয় উন্নয়নে জনগণের অংশগ্রহণ নিশ্চিত করা।
                </p>
                <button
                    className="mt-2 px-6 py-2 text-sm rounded-full font-semibold bg-[#026B32] text-white hover:bg-[#DD2527] transition duration-300 ease-in-out transform hover:scale-[1.03]"
                    onClick={() => console.log("NCP Manifesto Clicked")}
                >
                    NCP ইশতেহার পড়ুন
                </button>
            </div>
        </section>
    );
};

export default HeroSection;