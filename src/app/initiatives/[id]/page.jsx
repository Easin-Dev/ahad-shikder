// app/initiatives/[id]/page.jsx
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft, Calendar, Tag, Share2, MapPin,
    CheckCircle2, Users, MessageSquare, Target,
} from "lucide-react";
import { getInitiativeById, INITIATIVES } from "@/lib/initiativesData";

// ── Static params — Next.js build time এ সব ID generate করবে ──────────────
export async function generateStaticParams() {
    return INITIATIVES.map((item) => ({ id: String(item.id) }));
}

// ── Dynamic metadata — Google প্রতিটি পেজের আলাদা title/description পাবে ──
export async function generateMetadata({ params }) {
    // Next.js 15: params আগে await করতে হবে
    const { id } = await params;
    const initiative = getInitiativeById(id);
    if (!initiative) return { title: "উদ্যোগ পাওয়া যায়নি" };

    return {
        title: `${initiative.title} | আহাদ শিকদার`,
        description: initiative.description,
        openGraph: {
            title: initiative.title,
            description: initiative.description,
            url: `https://ahadshikder.com/initiatives/${initiative.id}`,
            images: [{ url: initiative.imageFull }],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: initiative.title,
            description: initiative.description,
            images: [initiative.imageFull],
        },
        alternates: {
            canonical: `https://ahadshikder.com/initiatives/${initiative.id}`,
        },
    };
}

// ── Page Component ─────────────────────────────────────────────────────────
export default async function InitiativeDetailPage({ params }) {
    // Next.js 15: params আগে await করতে হবে — না করলে warning/error আসে
    const { id } = await params;
    const initiative = getInitiativeById(id);

    // id না মিললে Next.js এর built-in 404 দেখাবে
    if (!initiative) notFound();

    return (
        <main className="min-h-screen bg-white pb-24">

            {/* ── Hero Image ── */}
            <div className="relative h-[60vh] w-full">
                <img
                    src={initiative.imageFull}
                    alt={initiative.title}
                    className="w-full h-full object-cover"
                    priority="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">

                        {/* BUG FIX: window.history.back() → Next.js <Link> — SSR safe */}
                        <Link
                            href="/initiatives"
                            className="inline-flex items-center gap-2 text-white bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-8 hover:bg-white/30 transition-all border border-white/20"
                        >
                            <ArrowLeft size={20} aria-hidden="true" />
                            <span>সকল উদ্যোগ</span>
                        </Link>

                        <div className="flex flex-wrap items-center gap-4 mb-4">
                            <span className="bg-[#DD2527] text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                                <Tag size={14} aria-hidden="true" />
                                {initiative.typeLabel}
                            </span>
                            <span className="text-white/90 flex items-center gap-2 text-sm">
                                <Calendar size={14} aria-hidden="true" />
                                {/* BUG FIX: dateTime ISO format */}
                                <time dateTime={initiative.dateTime}>{initiative.year}</time>
                            </span>
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-black text-white leading-tight max-w-4xl"
                            style={{ fontFamily: "'Noto Serif Bengali', serif" }}
                        >
                            {initiative.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* ── Main Content ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left: Details */}
                    <div className="lg:col-span-2 space-y-10">

                        {/* Description */}
                        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100">
                            <h2 className="text-3xl font-black text-gray-900 mb-8 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-[#026B32]/10 flex items-center justify-center text-[#026B32]">
                                    <Target size={24} aria-hidden="true" />
                                </div>
                                প্রকল্পের বিস্তারিত
                            </h2>
                            <div
                                className="text-gray-700 text-lg leading-[2] whitespace-pre-line font-medium"
                                style={{ fontFamily: "'Noto Serif Bengali', serif" }}
                            >
                                {initiative.fullDescription}
                            </div>
                        </div>

                        {/* Outcomes */}
                        <div className="bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-100">
                            <h2 className="text-2xl font-black text-gray-900 mb-8">
                                সাফল্য ও ফলাফল
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {initiative.outcomes.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm"
                                    >
                                        <CheckCircle2
                                            className="text-[#026B32] shrink-0 mt-0.5"
                                            size={22}
                                            aria-hidden="true"
                                        />
                                        <span className="font-bold text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Gallery */}
                        {initiative.gallery?.length > 0 && (
                            <div>
                                <h2 className="text-2xl font-black text-gray-900 mb-6">
                                    ছবির গ্যালারি
                                </h2>
                                <div className="grid grid-cols-3 gap-4">
                                    {initiative.gallery.map((src, i) => (
                                        <div key={i} className="rounded-2xl overflow-hidden aspect-square">
                                            <img
                                                src={src}
                                                alt={`${initiative.title} — ছবি ${i + 1}`}
                                                loading="lazy"
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right: Sidebar */}
                    <aside className="space-y-8 lg:sticky lg:top-24 self-start">

                        {/* Quick Info */}
                        <div
                            className="text-white p-8 rounded-[2.5rem] shadow-xl"
                            style={{ background: "linear-gradient(135deg, #013d1d, #026B32)" }}
                        >
                            <h3 className="text-xl font-black mb-6 border-b border-white/20 pb-4">
                                তথ্য একনজরে
                            </h3>
                            <ul className="space-y-6">
                                <li className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin size={20} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-xs uppercase font-bold tracking-wider">স্থান</p>
                                        <p className="font-bold text-white">{initiative.location}</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <Users size={20} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-xs uppercase font-bold tracking-wider">লক্ষ্যমাত্রা</p>
                                        <p className="font-bold text-white">যুব সমাজ ও স্থানীয় জনগণ</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <Calendar size={20} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-xs uppercase font-bold tracking-wider">সাল</p>
                                        <time dateTime={initiative.dateTime} className="font-bold text-white">
                                            {initiative.year}
                                        </time>
                                    </div>
                                </li>
                            </ul>

                            {/* Share button — client component না হওয়ায় navigator.share href fallback */}
                            <a
                                href={`https://wa.me/?text=${encodeURIComponent(`${initiative.title} — https://ahadshikder.com/initiatives/${initiative.id}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full mt-8 bg-[#DD2527] py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-lg text-white"
                            >
                                <Share2 size={20} aria-hidden="true" />
                                শেয়ার করুন
                            </a>
                        </div>

                        {/* Contact Box */}
                        <div className="bg-white border-2 border-[#026B32]/10 p-8 rounded-[2.5rem]">
                            <div className="w-14 h-14 bg-[#026B32]/10 rounded-2xl flex items-center justify-center text-[#026B32] mb-6">
                                <MessageSquare size={28} aria-hidden="true" />
                            </div>
                            <h3 className="text-xl font-black text-gray-900 mb-3">
                                আপনার কোনো প্রশ্ন আছে?
                            </h3>
                            <p className="text-gray-600 font-medium mb-6 text-sm leading-relaxed">
                                এই উদ্যোগ সম্পর্কে আরও জানতে সরাসরি যোগাযোগ করুন।
                            </p>
                            <Link
                                href="/contact"
                                className="block w-full py-4 text-center border-2 border-[#026B32] text-[#026B32] rounded-2xl font-black hover:bg-[#026B32] hover:text-white transition-all"
                            >
                                যোগাযোগ করুন
                            </Link>
                        </div>

                        {/* Other initiatives */}
                        <div className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100">
                            <h3 className="text-base font-black text-gray-700 mb-4">আরও উদ্যোগ</h3>
                            <ul className="space-y-2">
                                {INITIATIVES.filter((i) => i.id !== initiative.id)
                                    .slice(0, 3)
                                    .map((i) => (
                                        <li key={i.id}>
                                            <Link
                                                href={`/initiatives/${i.id}`}
                                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all group"
                                            >
                                                <img
                                                    src={i.image}
                                                    alt={i.title}
                                                    className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
                                                />
                                                <div className="min-w-0">
                                                    <p className="text-sm font-bold text-gray-800 truncate group-hover:text-[#026B32] transition-colors">
                                                        {i.title}
                                                    </p>
                                                    <time dateTime={i.dateTime} className="text-xs text-gray-400">
                                                        {i.year}
                                                    </time>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </div>

                    </aside>
                </div>
            </div>
        </main>
    );
}