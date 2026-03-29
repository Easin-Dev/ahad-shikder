"use client";
import React from 'react';
import Head from 'next/head';
import { Briefcase, Users, Anchor, Award, TrendingUp, ChevronRight, Star, ShieldCheck } from 'lucide-react';

// --- COLOR CONSTANTS ---
const NCP_GREEN = "#026B32";
const NCP_RED = "#DD2527";

// Structured Data (JSON-LD) — Google search result এ rich snippet দেখাবে
const STRUCTURED_DATA = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "মোঃ আহাদ শিকদার",
    "alternateName": "Md. Ahad Shikder",
    "url": "https://ahadshikder.com",
    "jobTitle": "রাজনৈতিক নেতা ও সমাজসেবী",
    "affiliation": [
        {
            "@type": "Organization",
            "name": "জাতীয় নাগরিক পার্টি (NCP)",
            "url": "https://ahadshikder.com"
        },
        {
            "@type": "Organization",
            "name": "ঝালকাঠি উন্নয়ন পরিষদ"
        }
    ],
    "knowsAbout": ["রাজনীতি", "সমাজসেবা", "ঝালকাঠি উন্নয়ন", "প্রবাসী রাজনীতি"],
    "address": {
        "@type": "PostalAddress",
        "addressRegion": "ঝালকাঠি",
        "addressCountry": "BD"
    }
};

const ROLES = [
    {
        title: "আহ্বায়ক (Convener)",
        organization: "এনসিপি ডায়াস্পোরা এলায়েন্স, ফিনল্যান্ড",
        period: "জানুয়ারী ২০১৮ - বর্তমান",
        // ← datePublished machine-readable format (schema.org এর জন্য)
        startDate: "2018-01",
        description:
            "ইউরোপের ফিনল্যান্ডে প্রবাসীদের মধ্যে দলীয় নীতি ও কর্মসূচি প্রচার এবং শক্তিশালী সাংগঠনিক ভিত্তি তৈরিতে নেতৃত্ব দিচ্ছেন। ডায়াস্পোরাকে দেশের মূলধারার রাজনীতি ও উন্নয়নে যুক্ত করার প্রধান সমন্বয়কারী।",
        icon: Users,
        tag: "নেতৃত্ব",
        // ← aria-label এর জন্য ইংরেজি fallback
        ariaLabel: "Convener, NCP Diaspora Alliance Finland, since January 2018",
    },
    {
        title: "মনোনয়ন প্রত্যাশী",
        organization: "জাতীয় নির্বাচন, ঝালকাঠি-১ আসন",
        period: "২০২৩ - বর্তমান",
        startDate: "2023-01",
        description:
            "জাতীয় সংসদ নির্বাচনে ঝালকাঠি-১ (রাজাপুর-কাঁঠালিয়া) আসনের জন্য দলীয় মনোনয়ন প্রত্যাশী। স্থানীয় সমস্যা সমাধানে প্রতিজ্ঞাবদ্ধ এবং জনগণের সাথে সরাসরি সংযোগ স্থাপন করছেন।",
        icon: Award,
        tag: "জনসেবা",
        ariaLabel: "Aspiring candidate for Jhalokati-1 constituency, since 2023",
    },
    {
        title: "প্রতিষ্ঠাতা ও নির্বাহী সদস্য",
        organization: "ঝালকাঠি উন্নয়ন পরিষদ",
        period: "২০১৫ - বর্তমান",
        startDate: "2015-01",
        description:
            "ঝালকাঠি জেলার শিক্ষা, স্বাস্থ্য ও অবকাঠামোগত উন্নয়নের জন্য কাজ করা একটি অলাভজনক সংস্থা। সামাজিক দায়বদ্ধতা এবং তৃণমূল উন্নয়নে সক্রিয় ভূমিকা পালন করেন।",
        icon: Briefcase,
        tag: "উন্নয়ন",
        ariaLabel: "Founder and Executive Member, Jhalokati Development Council, since 2015",
    },
    {
        title: "সাবেক ছাত্রনেতা",
        organization: "ছাত্র সংগঠন (আঞ্চলিক ও কেন্দ্রীয়)",
        period: "২০০০ - ২০০৫",
        startDate: "2000-01",
        endDate: "2005-12",
        description:
            "কলেজ ও বিশ্ববিদ্যালয় জীবনে সক্রিয়ভাবে ছাত্র রাজনীতিতে জড়িত ছিলেন। শিক্ষার্থীদের ন্যায্য অধিকার ও গণতান্ত্রিক মূল্যবোধ প্রতিষ্ঠায় গুরুত্বপূর্ণ অবদান রাখেন।",
        icon: Anchor,
        tag: "ভিত্তি",
        ariaLabel: "Former Student Leader, 2000 to 2005",
    },
];

export default function RolesSection() {
    return (
        <>
            {/* ── SEO: <head> meta tags ── */}
            <Head>
                <title>সাংগঠনিক ভূমিকা | আহাদ শিকদার — ঝালকাঠি-১</title>
                <meta
                    name="description"
                    content="মোঃ আহাদ শিকদারের সাংগঠনিক ও রাজনৈতিক দায়িত্বসমূহ — NCP ডায়াস্পোরা আহ্বায়ক (ফিনল্যান্ড), ঝালকাঠি-১ মনোনয়ন প্রত্যাশী এবং ঝালকাঠি উন্নয়ন পরিষদের প্রতিষ্ঠাতা।"
                />
                <meta name="keywords" content="আহাদ শিকদার, ঝালকাঠি-১, NCP, জাতীয় নাগরিক পার্টি, রাজাপুর, কাঁঠালিয়া, সাংগঠনিক ভূমিকা" />
                {/* Open Graph — Facebook / WhatsApp শেয়ারে ছবি ও বিবরণ দেখাবে */}
                <meta property="og:title" content="সাংগঠনিক ভূমিকা | আহাদ শিকদার" />
                <meta property="og:description" content="NCP নেতা মোঃ আহাদ শিকদারের রাজনৈতিক ও সামাজিক দায়িত্বের বিস্তারিত পরিচিতি।" />
                <meta property="og:url" content="https://ahadshikder.com/roles" />
                <meta property="og:type" content="profile" />
                <meta property="og:image" content="https://i.postimg.cc/RZv3dLtR/aha-da-sa-kada-ra.png" />
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="সাংগঠনিক ভূমিকা | আহাদ শিকদার" />
                <meta name="twitter:description" content="NCP নেতা মোঃ আহাদ শিকদারের রাজনৈতিক ও সামাজিক দায়িত্বের বিস্তারিত পরিচিতি।" />
                <meta name="twitter:image" content="https://i.postimg.cc/RZv3dLtR/aha-da-sa-kada-ra.png" />
                {/* Canonical URL — duplicate content এড়াতে */}
                <link rel="canonical" href="https://ahadshikder.com/roles" />
                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
                />
            </Head>

            {/* ── PAGE CONTENT ── */}
            {/*
        BUG FIX: আগের কোডে bottom quote paragraph এ
        `className="text-[#026B32]/10 ..."` ছিল — এতে লেখা প্রায় অদৃশ্য হয়ে যেত।
        সঠিক হবে `text-white/90`।
      */}
            <section
                id="roles"
                aria-labelledby="roles-heading"   /* ← accessibility: screen reader heading link */
                className="py-24 bg-gradient-to-b from-white to-gray-50 min-h-screen"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section Header */}
                    <header className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#026B32]/10 text-[#026B32] text-sm font-bold mb-4">
                            <ShieldCheck size={16} aria-hidden="true" />
                            <span>সাংগঠনিক পরিচিতি</span>
                        </div>

                        {/*
              SEO FIX: আগে এটা <h2> ছিল — কিন্তু এই কম্পোনেন্ট /roles পেজের
              মূল শিরোনাম, তাই <h1> হওয়া উচিত।
              (HeroSection-এ যদি ইতোমধ্যে h1 থাকে তাহলে h2 রাখুন)
            */}
                        <h1
                            id="roles-heading"
                            className="text-4xl md:text-5xl font-black text-gray-900 mb-6"
                        >
                            সাংগঠনিক ও{" "}
                            <span style={{ color: NCP_RED }}>রাজনৈতিক দায়িত্বসমূহ</span>
                        </h1>

                        <div className="w-24 h-1.5 bg-[#026B32] mx-auto rounded-full" />
                        <div className="w-12 h-1.5 bg-[#DD2527] mx-auto rounded-full mt-1" />
                    </header>

                    {/* Roles Grid */}
                    {/*
            SEO FIX: div grid → <ol> (ordered list)
            কারণ ভূমিকাগুলো সময়ক্রম অনুযায়ী — semantic HTML গুরুত্বপূর্ণ।
          */}
                    <ol className="grid md:grid-cols-2 gap-8 lg:gap-10 list-none p-0">
                        {ROLES.map((role, index) => {
                            const Icon = role.icon;
                            return (
                                <li
                                    key={index}
                                    aria-label={role.ariaLabel}   /* ← screen reader friendly */
                                    className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-[#026B32]/10 transition-all duration-500 overflow-hidden"
                                >
                                    {/* Decorative hover bg */}
                                    <div
                                        aria-hidden="true"
                                        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#026B32]/5 to-transparent rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"
                                    />

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-6">
                                            <div
                                                className="p-4 rounded-2xl bg-[#026B32] text-white shadow-lg group-hover:scale-110 group-hover:bg-[#DD2527] transition-all duration-500"
                                                aria-hidden="true"
                                            >
                                                <Icon size={32} />
                                            </div>
                                            <div className="text-right">
                                                <span className="block text-xs font-black uppercase tracking-widest text-[#DD2527] mb-1">
                                                    {role.tag}
                                                </span>
                                                {/* machine-readable date — SEO এর জন্য */}
                                                <time
                                                    dateTime={role.endDate
                                                        ? `${role.startDate}/${role.endDate}`
                                                        : `${role.startDate}/..`}
                                                    className="inline-block text-[10px] font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full"
                                                >
                                                    {role.period}
                                                </time>
                                            </div>
                                        </div>

                                        {/* SEO FIX: h3 → role title যেন heading hierarchy ঠিক থাকে */}
                                        <h2 className="text-2xl font-black text-gray-800 mb-3 group-hover:text-[#026B32] transition-colors duration-300">
                                            {role.title}
                                        </h2>

                                        <p className="flex items-center gap-2 mb-4 text-[#026B32] font-bold text-sm">
                                            <ChevronRight size={18} className="text-[#DD2527] flex-shrink-0" aria-hidden="true" />
                                            {role.organization}
                                        </p>

                                        <div className="h-px w-full bg-gradient-to-r from-gray-200 to-transparent mb-6" aria-hidden="true" />

                                        <p className="text-gray-600 leading-relaxed font-medium">
                                            {role.description}
                                        </p>
                                    </div>
                                </li>
                            );
                        })}
                    </ol>

                    {/* Bottom Impact Box */}
                    <div className="mt-20">
                        <div className="max-w-4xl mx-auto bg-[#026B32] rounded-[2rem] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-0 opacity-10" aria-hidden="true">
                                <TrendingUp size={200} />
                            </div>
                            <div className="relative z-10">
                                <Star
                                    className="mx-auto mb-6 text-yellow-400 fill-yellow-400"
                                    size={40}
                                    aria-hidden="true"
                                />
                                <h2 className="text-2xl md:text-3xl font-black mb-4">
                                    জনসেবা ও স্থানীয় উন্নয়নে দৃঢ় অঙ্গীকার
                                </h2>
                                {/*
                  BUG FIX: আগে `text-[#026B32]/10` ছিল → লেখা অদৃশ্য!
                  সঠিক: `text-white/90`
                */}
                                <p className="text-white/90 bg-white/10 backdrop-blur-md inline-block px-6 py-3 rounded-2xl text-lg font-medium border border-white/20">
                                    এই সকল ভূমিকার মাধ্যমে তিনি নিরলসভাবে ঝালকাঠি ও দেশের কল্যাণে কাজ করে যাচ্ছেন।
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}