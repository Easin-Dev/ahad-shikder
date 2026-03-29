"use client";
import React, { useState, useEffect } from 'react';

import { Mail, Briefcase, Users, Zap, MapPin, Calendar, Award, ChevronRight, Facebook, Twitter, Linkedin, ExternalLink } from 'lucide-react';

/* ─── SEO Structured Data (JSON-LD) ─── */
const SEOData = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Md Ahad Shikder",
        "alternateName": "মোঃ আহাদ শিকদার",
        "url": "https://ahadshikder.com",
        "jobTitle": "Convenor, NCP Diaspora Alliance",
        "description": "Md Ahad Shikder is a political leader from Jhalokati-1 constituency, serving as the Convenor of NCP Diaspora Alliance, Finland.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jhalokati-1",
            "addressCountry": "Bangladesh"
        }
    };
    return <script type="application/ld+json">{JSON.stringify(structuredData)}</script>;
};

const Badge = ({ icon: Icon, text, color = "#026B32" }) => (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wide text-white shadow-sm whitespace-nowrap" style={{ background: color }}>
        {Icon && <Icon size={12} />}
        {text}
    </span>
);

const RoleItem = ({ year, title, org }) => (
    <div className="flex items-start gap-3 group">
        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#DD2527] group-hover:scale-150 transition-transform duration-300 shadow-[0_0_8px_rgba(221,37,39,0.5)]" />
        <div>
            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest">{year}</p>
            <p className="text-sm md:text-base font-bold text-gray-800 leading-tight group-hover:text-[#026B32] transition-colors">{title}</p>
            <p className="text-xs text-gray-500">{org}</p>
        </div>
    </div>
);

const InitCard = ({ emoji, title, category, year }) => (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#026B32]/30 transition-all duration-300 group cursor-pointer">
        <div className="text-2xl group-hover:scale-110 transition-transform">{emoji}</div>
        <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-gray-800 truncate group-hover:text-[#026B32] transition-colors">{title}</p>
            <p className="text-[10px] text-gray-400 font-medium">{category} • {year}</p>
        </div>
        <ChevronRight size={14} className="text-gray-300 group-hover:text-[#DD2527] group-hover:translate-x-1 transition-all flex-shrink-0" />
    </div>
);

export default function App() {
    const roles = [
        { year: "২০১৮ – বর্তমান", title: "আহ্বায়ক", org: "NCP ডায়াস্পোরা অ্যালায়েন্স, ফিনল্যান্ড" },
        { year: "২০২৩ – বর্তমান", title: "মনোনয়ন প্রত্যাশী", org: "ঝালকাঠি-১ (রাজাপুর–কাঁঠালিয়া) আসন" },
        { year: "২০১৫ – বর্তমান", title: "প্রতিষ্ঠাতা ও নির্বাহী সদস্য", org: "ঝালকাঠি উন্নয়ন পরিষদ" },
    ];

    const initiatives = [
        { emoji: "🎓", title: "স্কুল সামগ্রী বিতরণ", category: "শিক্ষা", year: "২০২৪" },
        { emoji: "💻", title: "ডিজিটাল স্কিল ক্যাম্প", category: "কর্মসংস্থান", year: "২০২৫" },
        { emoji: "👩‍🎓", title: "উচ্চশিক্ষা সহায়তা", category: "শিক্ষা", year: "২০২৫" },
        { emoji: "🏗️", title: "গ্রামীণ প্রশিক্ষণ", category: "কর্মসংস্থান", year: "২০২৩" },
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc] py-6 mt-16 md:py-12 px-4 overflow-x-hidden" style={{ fontFamily: "'Noto Serif Bengali', serif" }}>
            <SEOData />
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Noto+Serif+Bengali:wght@400;600;700;900&display=swap" rel="stylesheet" />

            <div className="max-w-6xl mx-auto space-y-8">

                {/* ══ MAIN HERO HEADER ══ */}
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl bg-[#013d1d]">
                    {/* Noise and Gradient Background */}
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
                    <div className="absolute top-0 left-0 w-64 h-64 bg-[#DD2527] rounded-full mix-blend-screen filter blur-[80px] opacity-20 -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#026B32] rounded-full mix-blend-screen filter blur-[80px] opacity-40 translate-x-1/2 translate-y-1/2" />

                    <div className="relative z-10 px-6 py-12 md:p-16 lg:p-20">
                        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

                            {/* Profile Text */}
                            <div className="flex-1 text-center lg:text-left space-y-6">
                                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                                    <Badge icon={MapPin} text="ঝালকাঠি-১" color="#DD2527" />
                                    <Badge icon={Award} text="NCP নেতৃত্ব" color="#026B32" />
                                </div>

                                <h1 className="text-white leading-[1.1] font-black text-4xl md:text-5xl lg:text-7xl" style={{ fontFamily: "'Playfair Display', 'Noto Serif Bengali', serif" }}>
                                    আহাদ শিকদার
                                    <span className="block mt-4 text-xl md:text-2xl text-[#ffcaca] font-bold opacity-90 leading-snug">
                                        জনগণের জন্য দায়িত্ব, উন্নয়ন ও নেতৃত্বের প্রতিশ্রুতি।
                                    </span>
                                </h1>

                                <p className="text-white/70 text-sm md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                                    ঝালকাঠি-১ (রাজাপুর–কাঁঠালিয়া) আসনের জনগণের প্রতিনিধি হিসেবে
                                    উন্নয়ন ও মানবিক সেবায় দৃঢ় অঙ্গীকারবদ্ধ। ফিনল্যান্ড থেকে সরাসরি দেশের মানুষের পাশে।
                                </p>

                                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                                    <button className="flex items-center justify-center gap-2 bg-[#DD2527] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-2xl font-bold shadow-lg transition-all active:scale-95 group">
                                        <Briefcase size={18} />
                                        দলের কার্যক্রম
                                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button className="flex items-center justify-center gap-2 bg-white text-[#026B32] px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-gray-50 transition-all active:scale-95">
                                        <Mail size={18} />
                                        যোগাযোগ
                                    </button>
                                </div>
                            </div>

                            {/* Profile Image Area */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#DD2527] to-[#026B32] rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />

                                <div className="relative w-56 h-72 md:w-80 md:h-[26rem] rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl">
                                    <img
                                        src="https://i.postimg.cc/RZv3dLtR/aha-da-sa-kada-ra.png"
                                        alt="Md Ahad Shikder - Leader Jhalokati-1"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                                    <div className="absolute bottom-8 left-0 right-0 text-center">
                                        <p className="text-white text-sm font-black tracking-widest uppercase">মোঃ আহাদ শিকদার</p>
                                        <p className="text-white/50 text-[10px] mt-1">Convenor, NCP Diaspora Alliance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ══ SECONDARY INFO GRID ══ */}
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Card: Roles */}
                    <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                        <h2 className="text-xl font-black text-gray-900 flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-[#026B32]/10 flex items-center justify-center text-[#026B32]">
                                <Users size={20} />
                            </div>
                            সাংগঠনিক ভূমিকা
                        </h2>
                        <div className="space-y-6">
                            {roles.map((r, i) => <RoleItem key={i} {...r} />)}
                        </div>
                    </div>

                    {/* Card: Initiatives */}
                    <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                        <h2 className="text-xl font-black text-gray-900 flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-[#DD2527]/10 flex items-center justify-center text-[#DD2527]">
                                <Zap size={20} />
                            </div>
                            সক্রিয় উদ্যোগ
                        </h2>
                        <div className="space-y-3">
                            {initiatives.map((it, i) => <InitCard key={i} {...it} />)}
                        </div>
                    </div>

                    {/* Card: Party Link */}
                    <div className="bg-gradient-to-br from-[#026B32] to-[#014d22] rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden flex flex-col justify-between">
                        <div>
                            <img
                                src="https://i.postimg.cc/J0CvJnFz/ja-ta-ya-na-gara-ka-pa-ra-ta-ra-la-ga.jpg"
                                alt="NCP Logo"
                                className="w-16 h-16 rounded-2xl border-2 border-white/20 mb-6 shadow-lg"
                            />
                            <h3 className="text-2xl font-black mb-3">জাতীয় নাগরিক পার্টি (NCP)</h3>
                            <p className="text-white/70 text-sm leading-relaxed mb-8">
                                স্বচ্ছতা ও সামাজিক দায়বদ্ধতার মাধ্যমে জাতিকে এগিয়ে নিতে আমাদের সাথে যোগ দিন। জনগণের ক্ষমতায়নই মূল লক্ষ্য।
                            </p>
                        </div>

                        <button className="w-full bg-[#DD2527] py-4 rounded-2xl font-bold shadow-lg hover:brightness-110 transition-all active:scale-95">
                            পার্টিতে যোগ দিন
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
}