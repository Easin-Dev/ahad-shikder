"use client";
import React, { useState } from 'react';
import { Briefcase, BookOpen, Users, Zap, Compass, Heart, ClipboardList } from "lucide-react";

// --- COLOR CONSTANTS ---
const NCP_GREEN = "#026B32"; // Primary Green
const NCP_RED = "#DD2527";   // Accent Red

// --- DATA: GALLERY PHOTOS ---
const CATEGORIES = [
  { id: "all", label: "সব ছবি", icon: Zap },
  { id: "party", label: "দলীয় কার্যক্রম", icon: ClipboardList },
  { id: "social", label: "সমাজসেবা", icon: Heart },
];

const PHOTOS = [
  {
    id: 1,
    title: "দলীয় সভা - ২০২৪",
    category: "party",
    src: `https://placehold.co/400x400/${NCP_RED.substring(1)}/ffffff?text=Party+Meeting`,
  },
  {
    id: 2,
    title: "লিফলেট বিতরণ - ২০২৪",
    category: "party",
    src: `https://placehold.co/400x400/${NCP_GREEN.substring(1)}/ffffff?text=Leaflet+Distribution`,
  },
  {
    id: 3,
    title: "শহীদদের প্রতি শ্রদ্ধা - ২০২৪",
    category: "social",
    src: `https://placehold.co/400x400/${NCP_RED.substring(1)}/ffffff?text=Homage+to+Martyrs`,
  },
  {
    id: 4,
    title: "সমন্বয় সভা - ২০২৪",
    category: "party",
    src: `https://placehold.co/400x400/${NCP_GREEN.substring(1)}/ffffff?text=Coordination+Meeting`,
  },
  {
    id: 5,
    title: "পরিষ্কার পরিচ্ছন্নতা অভিযান",
    category: "social",
    src: `https://placehold.co/400x400/${NCP_RED.substring(1)}/ffffff?text=Cleaning+Drive`,
  },
  {
    id: 6,
    title: "নতুন সদস্য সংগ্রহ - ২০২৪",
    category: "party",
    src: `https://placehold.co/400x400/${NCP_GREEN.substring(1)}/ffffff?text=Recruitment`,
  },
];

/**
 * @description This component displays the organizational photos in a filterable grid layout,
 * styled with the defined Green-Red theme.
 */
// "use client" is required for this component
export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPhotos =
    activeCategory === "all"
      ? PHOTOS
      : PHOTOS.filter((p) => p.category === activeCategory);
    
  return (
    <section id="gallery" className="py-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
            <h2 className={`text-5xl font-extrabold text-center text-gray-800 mb-12 border-b-4 border-[${NCP_RED}] pb-4 font-bangla`}>
                চিত্র গ্যালারি
            </h2>

            {/* Category Buttons (Themed and Functional) */}
            <div className="flex flex-wrap gap-4 mb-12 justify-center">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat.id}
                        type="button"
                        onClick={() => setActiveCategory(cat.id)}
                        className={`px-5 py-2 text-sm font-bold rounded-full font-bangla border-2 transition duration-300 shadow-lg flex items-center
                        ${
                            activeCategory === cat.id
                                ? `bg-[${NCP_RED}] text-white border-[${NCP_RED}] transform scale-[1.05] shadow-red-500/50`
                                : `bg-white text-[${NCP_GREEN}] border-[${NCP_GREEN}]/30 hover:bg-[${NCP_GREEN}] hover:text-white hover:border-[${NCP_GREEN}] hover:shadow-md`
                        }`}
                    >
                        {React.createElement(cat.icon, { size: 18, className: "mr-2" })}
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Gallery Grid */}
            {filteredPhotos.length === 0 ? (
                <p className="text-gray-600 font-bangla text-center py-10 text-xl border border-gray-200 rounded-lg bg-gray-50 shadow-inner">
                    এই ক্যাটাগরির অধীনে বর্তমানে কোনো ছবি যুক্ত করা হয়নি।
                </p>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredPhotos.map((photo) => (
                        <div
                            key={photo.id}
                            className="group relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer aspect-square bg-gray-100 
                                transform transition duration-500 hover:scale-[1.03] hover:shadow-green-500/50"
                        >
                            <img
                                src={photo.src}
                                alt={photo.title}
                                // Adjusted image classes for smooth transition and effect
                                className="w-full h-full object-cover transition duration-500 group-hover:opacity-80 group-hover:rotate-1"
                            />
                            {/* Caption Overlay - Themed and Detailed on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4`}>
                                <div className='w-full'>
                                    <p className="text-base text-white font-bold font-bangla leading-tight mb-1">
                                        {photo.title.split(' - ')[0]}
                                    </p>
                                    <p className={`text-xs text-[${NCP_RED}] font-semibold font-bangla`}>
                                        {photo.title.split(' - ')[1]}
                                    </p>
                                </div>
                            </div>
                            {/* Subtle Border Glow on Hover */}
                            <div className={`absolute inset-0 rounded-2xl border-4 border-transparent group-hover:border-[${NCP_RED}] transition duration-500 pointer-events-none`}></div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </section>
  );
}