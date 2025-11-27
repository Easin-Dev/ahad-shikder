"use client";
"use client";

import React from 'react';
import { ExternalLink, Facebook } from "lucide-react";

// --- COLOR CONSTANTS ---
const NCP_GREEN = "#026B32"; // Primary Green
const NCP_RED = "#DD2527";   // Accent Red

const NEWS_ITEMS = [
    {
        id: 1,
        title: "ঢাকাস্থ রাজাপুর উপজেলার সংগঠকবৃন্দের আলোচনা সভা",
        date: "২০২৪",
        source: "Facebook",
        category: "দলীয় কার্যক্রম",
        image:
            `https://placehold.co/600x350/${NCP_RED.substring(1)}/ffffff?text=Rajapur+Organizers+Meeting`,
        excerpt:
            "আন্টাঘর ও রাজাপুরের স্থানীয় নেতৃত্বকে শক্তিশালী করতে ঢাকাস্থ সংগঠকদের সাথে মতবিনিময় সভা অনুষ্ঠিত হয়...",
        link: "https://www.facebook.com/share/p/1B48f9tupc/",
    },
    {
        id: 2,
        title: "শহীদ দিবস ও আন্তর্জাতিক মাতৃভাষা দিবস উপলক্ষে জিয়ারত",
        date: "২০২৪",
        source: "Facebook",
        category: "সমাজসেবা",
        image:
            `https://placehold.co/600x350/${NCP_GREEN.substring(1)}/ffffff?text=Martyrs+Day+Program`,
        excerpt:
            "মহান শহীদ দিবস উপলক্ষে ঝালকাঠির শহীদদের কবর জিয়ারত ও ফুল দিয়ে শ্রদ্ধা নিবেদন করা হয়...",
        link: "https://www.facebook.com/share/p/19NFPgy9XZ/",
    },
];

/**
 * @description This component displays the news and media coverage in a card format,
 * styled with the defined Green-Red theme.
 */
// "use client" is required for this component
export default function NewsSection() {
    return (
        <section id="blog" className="py-16 bg-gray-50/50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <h2 className={`text-5xl font-extrabold text-center text-gray-800 mb-12 border-b-4 border-[${NCP_RED}] pb-4 font-bangla`}>
                    সংবাদ ও মিডিয়া কভারেজ
                </h2>

                {/* News Grid */}
                {NEWS_ITEMS.length === 0 ? (
                    <p className="text-gray-600 font-bangla text-center py-10 text-xl border border-gray-200 rounded-lg bg-white shadow-inner">
                        বর্তমানে কোনো সংবাদ যুক্ত করা হয়নি।
                    </p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {NEWS_ITEMS.map((item) => (
                            <article
                                key={item.id}
                                className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col transition duration-300 hover:shadow-red-500/30"
                            >
                                {/* Image */}
                                <div className="w-full h-56 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition duration-500 hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center justify-between mb-3">
                                        {/* Category Tag - Themed Green */}
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[${NCP_GREEN}]/15 text-[${NCP_GREEN}] font-bangla`}>
                                            {item.category}
                                        </span>
                                        {/* Date */}
                                        <span className="text-sm text-gray-500 font-bangla">
                                            {item.date}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className={`text-2xl font-bold text-[${NCP_GREEN}] mb-3 font-bangla leading-snug`}>
                                        {item.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-gray-700 text-base mb-4 font-bangla flex-1">
                                        {item.excerpt}
                                    </p>

                                    {/* Footer - Link & Source */}
                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                        {/* Details Link - Themed Red */}
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center text-sm font-bold font-bangla text-[${NCP_RED}] hover:text-[${NCP_GREEN}] transition duration-300`}
                                        >
                                            বিস্তারিত দেখুন
                                            <ExternalLink className="w-4 h-4 ml-1" />
                                        </a>

                                        {/* Source */}
                                        {item.source === "Facebook" && (
                                            <span className="inline-flex items-center text-sm text-gray-500 font-bangla">
                                                <Facebook className="w-4 h-4 mr-1 text-blue-600" />
                                                Facebook
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}