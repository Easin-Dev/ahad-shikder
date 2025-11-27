"use client";
import React, { useState } from 'react';
import { Briefcase, BookOpen, Users, Zap, Compass } from "lucide-react";

// --- COLOR CONSTANTS ---
const NCP_GREEN = "#026B32"; // Primary Green
const NCP_RED = "#DD2527";   // Accent Red

// --- DATA ---
const CATEGORIES = [
  { id: "all", label: "সকল", icon: Zap },
  { id: "education", label: "শিক্ষা", icon: BookOpen },
  { id: "employment", label: "কর্মসংস্থান", icon: Briefcase },
  { id: "youth", label: "যুব নেতৃত্ব", icon: Users },
];

const INITIATIVES = [
  {
    id: 1,
    title: "গ্রামীণ কর্মসংস্থান প্রশিক্ষণ",
    year: "২০২৩",
    typeLabel: "কর্মসংস্থান",
    category: "employment",
    image:
      `https://placehold.co/600x300/${NCP_GREEN.substring(1)}/ffffff?text=Employment+Initiative`,
    description:
      "রাজাপুর উপজেলায় যুবকদের কর্মমুখী দক্ষতা বৃদ্ধির লক্ষ্যে কমিউনিটি-ভিত্তিক প্রশিক্ষণ কর্মসূচি।",
  },
  {
    id: 2,
    title: "স্কুল সামগ্রী বিতরণ কর্মসূচি",
    year: "২০২৪",
    typeLabel: "শিক্ষা",
    category: "education",
    image:
      `https://placehold.co/600x300/${NCP_RED.substring(1)}/ffffff?text=Education+Support`,
    description:
      "কাঁঠালিয়া উপজেলার দরিদ্র শিক্ষার্থীদের মাঝে বিনামূল্যে বই, খাতা ও শিক্ষাসামগ্রী বিতরণ।",
  },
  {
    id: 3,
    title: "উপজেলা সমন্বয় সভা",
    year: "২০২৪",
    typeLabel: "নেতৃত্ব",
    category: "youth",
    image:
      `https://placehold.co/600x300/${NCP_GREEN.substring(1)}/ffffff?text=Coordination+Activity`,
    description:
      "উপজেলা পর্যায়ে সংগঠনের কার্যক্রম আরও গতিশীল করতে নিয়মিত সমন্বয় সভা এবং নেতৃত্ব বিকাশমূলক কর্মসূচি।",
  },
  {
    id: 4,
    title: "ডিজিটাল স্কিল ডেভেলপমেন্ট ক্যাম্প",
    year: "২০২৫",
    typeLabel: "কর্মসংস্থান",
    category: "employment",
    image:
      `https://placehold.co/600x300/${NCP_RED.substring(1)}/ffffff?text=Digital+Skills+Camp`,
    description:
      "স্থানীয় তরুণদের ফ্রিল্যান্সিং, গ্রাফিক্স ডিজাইন ও বেসিক প্রোগ্রামিংয়ে দক্ষ করে তুলতে ডিজিটাল প্রশিক্ষণ ক্যাম্প।",
  },
  {
    id: 5,
    title: "মেয়েদের উচ্চশিক্ষা সহায়তা প্রোগ্রাম",
    year: "২০২৫",
    typeLabel: "শিক্ষা",
    category: "education",
    image:
      `https://placehold.co/600x300/${NCP_GREEN.substring(1)}/ffffff?text=Girls+Education+Support`,
    description:
      "অর্থনৈতিকভাবে অসচ্ছল মেধাবী ছাত্রীদের জন্য স্টাইপেন্ড ও শিক্ষা সামগ্রী সহায়তা।",
  },
];

/**
 * @description This component displays the various community-based initiatives and projects
 * using the defined Green-Red theme in a responsive card layout with filtering functionality.
 */
// "use client" is required for this component
export default function InitiativesSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredInitiatives =
    activeCategory === "all"
      ? INITIATIVES
      : INITIATIVES.filter((item) => item.category === activeCategory);

    // Helper function to determine the icon for each card
    const getCardIcon = (category) => {
        switch (category) {
            case 'education': return BookOpen;
            case 'employment': return Briefcase;
            case 'youth': return Users;
            default: return Compass; // General icon for default/safety
        }
    };
    
  return (
    <section id="initiatives" className="py-16 bg-gray-50/50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
            <h2 className={`text-5xl font-extrabold text-center text-gray-800 mb-12 border-b-4 border-[${NCP_RED}] pb-4 font-bangla`}>
                সম্প্রদায়ভিত্তিক উদ্যোগ ও প্রকল্পসমূহ
            </h2>

            {/* Category Buttons (Themed and Functional) */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat.id}
                        type="button"
                        onClick={() => setActiveCategory(cat.id)}
                        className={`px-5 py-2 text-sm font-bold rounded-full font-bangla border-2 transition duration-200 shadow-sm flex items-center
                        ${
                            activeCategory === cat.id
                                ? `bg-[${NCP_RED}] text-white border-[${NCP_RED}] shadow-md transform scale-[1.05]`
                                : `bg-white text-[${NCP_GREEN}] border-[${NCP_GREEN}]/40 hover:bg-[${NCP_GREEN}] hover:text-white hover:border-[${NCP_GREEN}]`
                        }`}
                    >
                        {React.createElement(cat.icon, { size: 18, className: "mr-2" })}
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Initiatives Grid */}
            {filteredInitiatives.length === 0 ? (
                <p className="text-gray-600 font-bangla text-center py-10 text-xl border border-gray-200 rounded-lg bg-white shadow-inner">
                    এই ক্যাটাগরির অধীনে বর্তমানে কোনো উদ্যোগ যুক্ত করা হয়নি।
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredInitiatives.map((item, index) => {
                        const Icon = getCardIcon(item.category);
                        const accentColor = (index % 2 === 0) ? NCP_RED : NCP_GREEN;
                        const tagBgColor = (index % 2 === 0) ? NCP_GREEN : NCP_RED;
                        
                        return (
                            <div
                                key={item.id}
                                className={`bg-white rounded-xl shadow-2xl overflow-hidden border-t-8 border-[${accentColor}] 
                                transition duration-300 transform hover:translate-y-[-5px] hover:shadow-3xl`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-3">
                                        {/* Type Tag */}
                                        <span className={`text-xs font-semibold text-white bg-[${tagBgColor}] px-3 py-1 rounded-full inline-block font-bangla shadow-md`}>
                                            {item.typeLabel} | {item.year}
                                        </span>
                                        {/* Icon */}
                                        <Icon size={24} className={`text-[${accentColor}]`} />
                                    </div>

                                    {/* Title */}
                                    <h3 className={`text-2xl font-bold text-[${NCP_GREEN}] mb-3 font-bangla`}>
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-700 text-base font-bangla leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    </section>
  );
}