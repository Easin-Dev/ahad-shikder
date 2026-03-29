"use client";
import React from 'react';
import Head from 'next/head';
import { Globe, GitBranch, Users2, HeartHandshake, TrendingUp, ShieldCheck } from "lucide-react";

// ─── Structured Data (JSON-LD) ─────────────────────────────────────────────
const STRUCTURED_DATA = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "মোঃ আহাদ শিকদার",
    "alternateName": "Md. Ahad Shikder",
    "url": "https://ahadshikder.com",
    "jobTitle": "রাজনৈতিক নেতা ও সমাজসেবী",
    "affiliation": [
        { "@type": "Organization", "name": "জাতীয় নাগরিক পার্টি (NCP)" },
        { "@type": "Organization", "name": "এনসিপি ডায়াস্পোরা এলায়েন্স, ফিনল্যান্ড" },
        { "@type": "Organization", "name": "ঝালকাঠি উন্নয়ন পরিষদ" },
    ],
    "address": {
        "@type": "PostalAddress",
        "addressRegion": "ঝালকাঠি",
        "addressCountry": "BD",
    },
};

// ─── Role Data ─────────────────────────────────────────────────────────────
// BUG FIX: Tailwind dynamic class যেমন `border-[${NCP_RED}]` কাজ করে না।
// Tailwind শুধু static string scan করে — তাই সব color class hardcode করতে হবে।
const ROLES = [
    {
        title: "এনসিপি ডায়াস্পোরা এলায়েন্স, ফিনল্যান্ড",
        role: "আহ্বায়ক",
        period: "২০২৫ – বর্তমান",
        dateTime: "2025-01/..",
        description:
            "ইউরোপে বসবাসরত বাংলাদেশিদের মধ্যে পার্টির আদর্শ প্রচার ও সাংগঠনিক সমন্বয়ে নেতৃত্বদান। প্রবাসীদের দেশের মূলধারার রাজনীতিতে যুক্ত করার প্রধান সমন্বয়কারী।",
        Icon: Globe,
        accentBorder: "border-[#DD2527]",
        accentText: "text-[#DD2527]",
        accentBg: "bg-[#DD2527]",
        tag: "নেতৃত্ব",
        ariaLabel: "Convener, NCP Diaspora Alliance Finland, since 2025",
    },
    {
        title: "জেলা সমন্বয় কমিটি, ঝালকাঠি",
        role: "প্রধান সমন্বয়ক",
        period: "২০২৪ – বর্তমান",
        dateTime: "2024-01/..",
        description:
            "ঝালকাঠি জেলায় সাংগঠনিক কার্যক্রম পরিচালনা এবং উপজেলা ইউনিটগুলোর সাথে কার্যকর সমন্বয় স্থাপন। জেলা পর্যায়ে দলীয় নীতির কার্যকর বাস্তবায়ন নিশ্চিত করা।",
        Icon: GitBranch,
        accentBorder: "border-[#026B32]",
        accentText: "text-[#026B32]",
        accentBg: "bg-[#026B32]",
        tag: "সমন্বয়",
        ariaLabel: "Chief Coordinator, Jhalokati District Coordination Committee, since 2024",
    },
    {
        title: "উপজেলা সংগঠক",
        role: "রাজাপুর ও কাঁঠালিয়া",
        period: "২০২৩ – বর্তমান",
        dateTime: "2023-01/..",
        description:
            "স্থানীয় পর্যায়ে সদস্য সংগ্রহ, সভা আয়োজন এবং পার্টির ২৪ দফা ইশতেহার বিতরণ। তৃণমূল জনগণের সাথে সরাসরি সংযোগ স্থাপনে সক্রিয় ভূমিকা।",
        Icon: Users2,
        accentBorder: "border-[#DD2527]",
        accentText: "text-[#DD2527]",
        accentBg: "bg-[#DD2527]",
        tag: "তৃণমূল",
        ariaLabel: "Upazila Organizer for Rajapura and Kathalia, since 2023",
    },
    {
        title: "সামাজিক উন্নয়ন ফোরাম",
        role: "প্রতিষ্ঠাতা সদস্য",
        period: "২০২১ – বর্তমান",
        dateTime: "2021-01/..",
        description:
            "স্থানীয় যুব ও ছাত্র সংগঠনের সাথে সমন্বিত সেবামূলক কাজ, দুর্যোগ সহায়তা এবং সচেতনতা কার্যক্রমে সক্রিয় ভূমিকা পালন।",
        Icon: HeartHandshake,
        accentBorder: "border-[#026B32]",
        accentText: "text-[#026B32]",
        accentBg: "bg-[#026B32]",
        tag: "সেবা",
        ariaLabel: "Founding Member, Social Development Forum, since 2021",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────
export default function RolesSection() {
    return (
        <>
            {/* ── SEO HEAD ── */}
            <Head>
                <title>সাংগঠনিক ভূমিকা | আহাদ শিকদার — ঝালকাঠি-১</title>
                <meta
                    name="description"
                    content="মোঃ আহাদ শিকদারের সাংগঠনিক ও রাজনৈতিক দায়িত্বসমূহ — NCP ডায়াস্পোরা আহ্বায়ক (ফিনল্যান্ড), ঝালকাঠি জেলা সমন্বয়ক এবং সামাজিক উন্নয়ন ফোরামের প্রতিষ্ঠাতা।"
                />
                <meta
                    name="keywords"
                    content="আহাদ শিকদার, ঝালকাঠি-১, NCP, জাতীয় নাগরিক পার্টি, রাজাপুর, কাঁঠালিয়া, সাংগঠনিক ভূমিকা, ডায়াস্পোরা ফিনল্যান্ড"
                />
                <meta property="og:title" content="সাংগঠনিক ভূমিকা | আহাদ শিকদার" />
                <meta property="og:description" content="NCP নেতা মোঃ আহাদ শিকদারের রাজনৈতিক ও সামাজিক দায়িত্বের বিস্তারিত পরিচিতি।" />
                <meta property="og:url" content="https://ahadshikder.com/roles" />
                <meta property="og:type" content="profile" />
                <meta property="og:image" content="https://i.postimg.cc/RZv3dLtR/aha-da-sa-kada-ra.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="সাংগঠনিক ভূমিকা | আহাদ শিকদার" />
                <meta name="twitter:description" content="NCP নেতা মোঃ আহাদ শিকদারের রাজনৈতিক ও সামাজিক দায়িত্বের বিস্তারিত পরিচিতি।" />
                <meta name="twitter:image" content="https://i.postimg.cc/RZv3dLtR/aha-da-sa-kada-ra.png" />
                <link rel="canonical" href="https://ahadshikder.com/roles" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
                />
            </Head>

            {/* ── PAGE ── */}
            <section
                id="roles"
                aria-labelledby="roles-heading"
                className="relative py-24 min-h-screen overflow-hidden"
                style={{ background: "linear-gradient(160deg, #f8fdf9 0%, #f0f7f2 50%, #fdf4f4 100%)" }}
            >
                {/* Subtle background grid */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#026B32 1px, transparent 1px), linear-gradient(90deg, #026B32 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* ── Section Header ── */}
                    <header className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#026B32]/10 text-[#026B32] text-sm font-bold mb-5 border border-[#026B32]/20">
                            <ShieldCheck size={15} aria-hidden="true" />
                            সাংগঠনিক পরিচিতি
                        </div>

                        <h1
                            id="roles-heading"
                            className="text-4xl md:text-5xl font-black text-gray-900 mb-5 leading-tight"
                            style={{ fontFamily: "'Noto Serif Bengali', serif" }}
                        >
                            সাংগঠনিক ও{" "}
                            <span className="relative inline-block" style={{ color: "#DD2527" }}>
                                রাজনৈতিক দায়িত্বসমূহ
                                <span
                                    aria-hidden="true"
                                    className="absolute -bottom-1 left-0 right-0 h-1 rounded-full"
                                    style={{ background: "linear-gradient(90deg, #DD2527, #026B32)" }}
                                />
                            </span>
                        </h1>

                        <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
                            জনগণের প্রতি দায়বদ্ধতা ও দেশের উন্নয়নে নিরলস কাজের প্রতিশ্রুতি নিয়ে
                            পরিচালিত প্রতিটি দায়িত্ব।
                        </p>
                    </header>

                    {/* ── Roles Grid ── */}
                    <ol className="grid grid-cols-1 md:grid-cols-2 gap-7 list-none p-0">
                        {ROLES.map(({ title, role, period, dateTime, description, Icon, accentBorder, accentText, accentBg, tag, ariaLabel }, i) => (
                            <li
                                key={i}
                                aria-label={ariaLabel}
                                className={`group relative bg-white rounded-3xl overflow-hidden border-l-4 ${accentBorder} shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
                            >
                                {/* Top color stripe */}
                                <div aria-hidden="true" className={`h-1 w-full ${accentBg} opacity-80`} />

                                <div className="p-8">
                                    {/* Header row */}
                                    <div className="flex items-start justify-between gap-4 mb-5">
                                        {/* Icon bubble */}
                                        <div
                                            aria-hidden="true"
                                            className={`flex-shrink-0 w-14 h-14 rounded-2xl ${accentBg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500`}
                                        >
                                            <Icon size={26} color="white" />
                                        </div>

                                        {/* Tag + period */}
                                        <div className="text-right flex flex-col items-end gap-1.5">
                                            <span className={`text-[10px] font-black uppercase tracking-[0.18em] ${accentText}`}>
                                                {tag}
                                            </span>
                                            <time
                                                dateTime={dateTime}
                                                className="inline-block text-[11px] font-semibold text-gray-400 bg-gray-100 px-3 py-1 rounded-full"
                                            >
                                                {period}
                                            </time>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h2
                                        className="text-xl font-black text-gray-900 mb-1 leading-snug group-hover:text-[#026B32] transition-colors duration-300"
                                        style={{ fontFamily: "'Noto Serif Bengali', serif" }}
                                    >
                                        {title}
                                    </h2>

                                    {/* Role subtitle */}
                                    <p className={`text-sm font-bold mb-4 ${accentText}`}>{role}</p>

                                    {/* Divider */}
                                    <div
                                        aria-hidden="true"
                                        className="h-px mb-4 rounded-full"
                                        style={{ background: "linear-gradient(90deg, #e5e7eb, transparent)" }}
                                    />

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm leading-[1.85] font-medium">
                                        {description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>

                    {/* ── Footer Banner ── */}
                    <div className="mt-16">
                        <div
                            className="relative overflow-hidden rounded-3xl p-8 md:p-10 text-center shadow-xl"
                            style={{ background: "linear-gradient(135deg, #013d1d 0%, #026B32 60%, #038040 100%)" }}
                        >
                            <div aria-hidden="true" className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white opacity-5" />
                            <div aria-hidden="true" className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-[#DD2527] opacity-10" />

                            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-white">
                                <div
                                    aria-hidden="true"
                                    className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0"
                                >
                                    <TrendingUp size={22} className="text-yellow-300" />
                                </div>
                                <p
                                    className="text-base md:text-lg font-semibold text-white/90 max-w-2xl text-left"
                                    style={{ fontFamily: "'Noto Serif Bengali', serif" }}
                                >
                                    এই ভূমিকাগুলোর মাধ্যমে তিনি জনসেবা ও স্থানীয় উন্নয়নে তার অঙ্গীকার তুলে ধরেছেন
                                    — ঝালকাঠি থেকে ফিনল্যান্ড, প্রতিটি পদে মানুষের কথা সর্বোচ্চ গুরুত্বে।
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}