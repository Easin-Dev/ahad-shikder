// app/initiatives/page.jsx
"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
    Briefcase, BookOpen, Users, Zap, Compass,
    Calendar, Tag, ArrowRight, Target, TrendingUp,
} from "lucide-react";
import { INITIATIVES, CATEGORIES } from "@/lib/initiativesData";

// icon map — string → component (data file JSON-safe রাখার জন্য)
const ICON_MAP = { Zap, BookOpen, Briefcase, Users, Compass };

const getCardIcon = (category) =>
    ({ education: BookOpen, employment: Briefcase, youth: Users }[category] ?? Compass);

export default function InitiativesSection() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filtered = useMemo(
        () =>
            activeCategory === "all"
                ? INITIATIVES
                : INITIATIVES.filter((i) => i.category === activeCategory),
        [activeCategory]
    );

    return (
        <section
            id="initiatives"
            className="py-24 bg-gradient-to-b from-gray-50 to-white min-h-screen scroll-mt-20"
            aria-labelledby="initiatives-title"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Header ── */}
                <header className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#026B32]/10 text-[#026B32] text-sm font-bold mb-6">
                        <Target size={18} aria-hidden="true" />
                        <span>আমাদের সামাজিক উন্নয়নমূলক কাজ</span>
                    </div>
                    <h1
                        id="initiatives-title"
                        className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight"
                        style={{ fontFamily: "'Noto Serif Bengali', serif" }}
                    >
                        সম্প্রদায়ভিত্তিক{" "}
                        <span className="text-[#DD2527]">উদ্যোগ ও প্রকল্পসমূহ</span>
                    </h1>
                    <p className="text-gray-600 font-medium text-lg">
                        শিক্ষা, কর্মসংস্থান এবং যুব নেতৃত্বের বিকাশে আমরা মাঠ পর্যায়ে
                        সক্রিয়ভাবে কাজ করে যাচ্ছি।
                    </p>
                </header>

                {/* ── Filter Tabs ── */}
                <nav
                    className="flex flex-wrap gap-3 mb-16 justify-center"
                    aria-label="উদ্যোগের ক্যাটাগরি"
                >
                    {CATEGORIES.map((cat) => {
                        const CatIcon = ICON_MAP[cat.icon] ?? Zap;
                        const isActive = activeCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                aria-pressed={isActive}
                                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all duration-300 shadow-sm border-2 ${isActive
                                        ? "bg-[#DD2527] border-[#DD2527] text-white shadow-lg scale-105"
                                        : "bg-white border-gray-100 text-gray-600 hover:border-[#026B32] hover:text-[#026B32]"
                                    }`}
                            >
                                <CatIcon size={20} aria-hidden="true" />
                                <span>{cat.label}</span>
                            </button>
                        );
                    })}
                </nav>

                {/* ── Grid ── */}
                {filtered.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
                        <Compass size={48} className="mx-auto text-gray-300 mb-4" aria-hidden="true" />
                        <p className="text-gray-500 text-xl">
                            দুঃখিত, এই ক্যাটাগরিতে বর্তমানে কোনো উদ্যোগ নেই।
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filtered.map((item) => {
                            const CardIcon = getCardIcon(item.category);
                            return (
                                <article
                                    key={item.id}
                                    className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col"
                                >
                                    {/* Image */}
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-[#026B32] text-white px-4 py-1.5 rounded-full text-xs font-black flex items-center gap-1.5 shadow-lg">
                                                <Tag size={12} aria-hidden="true" />
                                                {item.typeLabel}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-2 text-[#DD2527] text-sm font-bold mb-4">
                                            <Calendar size={16} aria-hidden="true" />
                                            {/* BUG FIX: dateTime এ ISO format, display এ Bengali */}
                                            <time dateTime={item.dateTime}>{item.year}</time>
                                        </div>

                                        <h2
                                            className="text-2xl font-black text-gray-900 mb-4 group-hover:text-[#026B32] transition-colors leading-snug"
                                            style={{ fontFamily: "'Noto Serif Bengali', serif" }}
                                        >
                                            {item.title}
                                        </h2>

                                        <p className="text-gray-600 font-medium leading-relaxed mb-8 flex-grow line-clamp-3">
                                            {item.description}
                                        </p>

                                        <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                                            <div
                                                className="p-3 bg-gray-50 rounded-xl text-[#026B32] group-hover:bg-[#026B32] group-hover:text-white transition-colors duration-300"
                                                aria-hidden="true"
                                            >
                                                <CardIcon size={24} />
                                            </div>
                                            {/* BUG FIX: <a href> → Next.js <Link> — client-side navigation */}
                                            <Link
                                                href={`/initiatives/${item.id}`}
                                                className="flex items-center gap-2 text-sm font-black text-[#DD2527] hover:gap-3 transition-all duration-300"
                                                aria-label={`${item.title} সম্পর্কে বিস্তারিত দেখুন`}
                                            >
                                                বিস্তারিত দেখুন
                                                <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                )}

                {/* ── Footer ── */}
                <div className="mt-20 text-center">
                    <div className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-gray-100 shadow-xl rounded-2xl font-bold text-gray-800">
                        <TrendingUp className="text-[#026B32] flex-shrink-0" aria-hidden="true" />
                        <span>
                            আগামী দিনে আমরা ঝালকাঠি-১ আসনে আরও বড় পরিসরে সামাজিক প্রকল্প
                            বাস্তবায়নে প্রতিশ্রুতিবদ্ধ।
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}