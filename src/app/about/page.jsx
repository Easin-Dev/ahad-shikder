"use client";
import React from 'react';
import { Briefcase, Users, Anchor, Award, TrendingUp, ChevronRight } from 'lucide-react';

// --- COLOR CONSTANTS ---
const NCP_GREEN = "#026B32"; // Primary Green
const NCP_RED = "#DD2527";   // Accent Red

/**
 * @description This component showcases the various organizational roles and responsibilities
 * of Ahad Shikdar, utilizing a clear, card-based layout with the defined Green-Red theme.
 */
// "use client" is assumed for this Next.js style component
export default function RolesSection() {

    // Detailed list of organizational roles
    const ROLES = [
        {
            title: "আহ্বায়ক (Convener)",
            organization: "এনসিপি ডায়াস্পোরা এলায়েন্স, ফিনল্যান্ড",
            period: "জানুয়ারী ২০১৮ - বর্তমান",
            description: "ইউরোপের ফিনল্যান্ডে প্রবাসীদের মধ্যে দলীয় নীতি ও কর্মসূচি প্রচার এবং শক্তিশালী সাংগঠনিক ভিত্তি তৈরিতে নেতৃত্ব দিচ্ছেন। ডায়াস্পোরাকে দেশের মূলধারার রাজনীতি ও উন্নয়নে যুক্ত করার প্রধান সমন্বয়কারী।",
            icon: Users,
        },
        {
            title: "মনোনয়ন প্রত্যাশী (Aspiring Candidate)",
            organization: "জাতীয় নির্বাচন, ঝালকাঠি-১ আসন",
            period: "২০২৩ - বর্তমান",
            description: "জাতীয় সংসদ নির্বাচনে ঝালকাঠি-১ (রাজাপুর-কাঁঠালিয়া) আসনের জন্য দলীয় মনোনয়ন প্রত্যাশী। স্থানীয় সমস্যা সমাধানে প্রতিজ্ঞাবদ্ধ এবং জনগণের সাথে সরাসরি সংযোগ স্থাপন করছেন।",
            icon: Award,
        },
        {
            title: "প্রতিষ্ঠাতা ও নির্বাহী সদস্য",
            organization: "ঝালকাঠি উন্নয়ন পরিষদ",
            period: "২০১৫ - বর্তমান",
            description: "ঝালকাঠি জেলার শিক্ষা, স্বাস্থ্য ও অবকাঠামোগত উন্নয়নের জন্য কাজ করা একটি অলাভজনক সংস্থা। সামাজিক দায়বদ্ধতা এবং তৃণমূল উন্নয়নে সক্রিয় ভূমিকা পালন করেন।",
            icon: Briefcase,
        },
        {
            title: "সাবেক ছাত্রনেতা",
            organization: "ছাত্র সংগঠন (নাম প্রকাশে অনিচ্ছুক)",
            period: "২০০০ - ২০০৫",
            description: "কলেজ ও বিশ্ববিদ্যালয় জীবনে সক্রিয়ভাবে ছাত্র রাজনীতিতে জড়িত ছিলেন। শিক্ষার্থীদের ন্যায্য অধিকার ও গণতান্ত্রিক মূল্যবোধ প্রতিষ্ঠায় গুরুত্বপূর্ণ অবদান রাখেন।",
            icon: Anchor,
        },
    ];

    return (
        <section id="roles" className="py-16 bg-white min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12 border-b-4 border-[${NCP_RED}] pb-4 font-bangla">
                    সাংগঠনিক ও রাজনৈতিক দায়িত্বসমূহ
                </h2>

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {ROLES.map((role, index) => {
                        const Icon = role.icon;
                        return (
                            <div
                                key={index}
                                className="bg-gray-50 p-6 rounded-xl shadow-xl border-t-8 border-[${NCP_GREEN}] 
                                transition duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:border-l-4 hover:border-l-[${NCP_RED}]"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <Icon size={36} className={`text-[${NCP_RED}] flex-shrink-0 mt-1`} />
                                    <span className={`text-sm font-semibold text-gray-600 bg-gray-200 py-1 px-3 rounded-full border border-gray-300`}>
                                        {role.period}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-[${NCP_GREEN}] mb-1 font-bangla">
                                    {role.title}
                                </h3>

                                <p className="text-base font-semibold text-gray-700 mb-4 font-bangla">
                                    <span className={`text-[${NCP_RED}] mr-1`}>
                                        <ChevronRight size={16} className="inline" />
                                    </span>
                                    {role.organization}
                                </p>

                                <p className="text-gray-700 leading-relaxed font-bangla border-t border-gray-200 pt-4">
                                    {role.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Call to Action / Footer Note */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center p-4 rounded-xl bg-gray-100 shadow-inner">
                        <TrendingUp size={24} className={`text-[${NCP_GREEN}] mr-3`} />
                        <p className="text-gray-700 font-bangla text-lg font-medium">
                            এই ভূমিকাগুলোর মাধ্যমে তিনি জনসেবা ও স্থানীয় উন্নয়নে তার অঙ্গীকার তুলে ধরেছেন।
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}