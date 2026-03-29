"use client";
import React, { useState, useEffect } from 'react';
import {
    Zap,
    Heart,
    ClipboardList,
    ImageIcon,
    Maximize2,
    X,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

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
        src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "লিফলেট বিতরণ - ২০২৪",
        category: "party",
        src: "https://images.unsplash.com/photo-1541535650810-10d26f5d2abb?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "শহীদদের প্রতি শ্রদ্ধা - ২০২৪",
        category: "social",
        src: "https://images.unsplash.com/photo-1464692805480-a69dfaaf2428?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "সমন্বয় সভা - ২০২৪",
        category: "party",
        src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 5,
        title: "পরিষ্কার পরিচ্ছন্নতা অভিযান - ২০২৪",
        category: "social",
        src: "https://images.unsplash.com/photo-1618477461853-cf6ed80fbe5e?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 6,
        title: "নতুন সদস্য সংগ্রহ - ২০২৪",
        category: "party",
        src: "https://images.unsplash.com/photo-1521791136064-7986c2959210?q=80&w=800&auto=format&fit=crop",
    },
];

export default function GallerySection() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const filteredPhotos = activeCategory === "all"
        ? PHOTOS
        : PHOTOS.filter((p) => p.category === activeCategory);

    // কার্সার কিবোর্ড হ্যান্ডলিং (Esc দিয়ে বন্ধ করা)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedPhoto(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <section id="gallery" className="py-24 bg-gray-50 min-h-screen scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <header className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#026B32]/10 text-[#026B32] text-sm font-bold mb-6">
                        <ImageIcon size={18} />
                        <span>আমাদের কার্যক্রমের ছবি</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 font-bangla leading-tight">
                        চিত্র <span className="text-[#DD2527]">গ্যালারি</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-[#DD2527] mx-auto rounded-full"></div>
                </header>

                {/* Category Buttons */}
                <nav className="flex flex-wrap gap-4 mb-16 justify-center">
                    {CATEGORIES.map((cat) => {
                        const Icon = cat.icon;
                        const isActive = activeCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                style={{
                                    backgroundColor: isActive ? NCP_RED : 'white',
                                    borderColor: isActive ? NCP_RED : '#e5e7eb',
                                    color: isActive ? 'white' : '#4b5563'
                                }}
                                className={`flex items-center gap-2 px-8 py-3 rounded-2xl font-bold transition-all duration-300 shadow-sm border-2 font-bangla ${isActive ? "shadow-lg scale-105" : "hover:border-[#026B32] hover:text-[#026B32]"
                                    }`}
                            >
                                <Icon size={20} />
                                <span>{cat.label}</span>
                            </button>
                        );
                    })}
                </nav>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPhotos.map((photo) => {
                        const [title, year] = photo.title.split(' - ');
                        return (
                            <article
                                key={photo.id}
                                onClick={() => setSelectedPhoto(photo)}
                                className="group relative h-96 rounded-[2.5rem] overflow-hidden shadow-xl bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                            >
                                <img
                                    src={photo.src}
                                    alt={photo.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 bg-[#DD2527] text-white text-[10px] font-black rounded-full uppercase tracking-wider">
                                            {year}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-black text-white font-bangla leading-tight mb-4">
                                        {title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-white/80 text-sm font-bold">
                                        <Maximize2 size={16} />
                                        <span>বড় করে দেখুন</span>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>

            {/* --- LIGHTBOX MODAL --- */}
            {selectedPhoto && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
                    initial={{ opacity: 0 }}
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/95 backdrop-blur-sm"
                        onClick={() => setSelectedPhoto(null)}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative w-full max-w-5xl max-h-full flex flex-col items-center">
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedPhoto(null)}
                            className="absolute -top-12 right-0 md:-right-12 text-white/70 hover:text-white transition-colors p-2"
                        >
                            <X size={32} />
                        </button>

                        {/* Main Image */}
                        <div className="relative group w-full overflow-hidden rounded-3xl shadow-2xl border border-white/10">
                            <img
                                src={selectedPhoto.src}
                                alt={selectedPhoto.title}
                                className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                            />

                            {/* Image Info Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-[#DD2527] font-bold text-sm mb-1 uppercase tracking-widest">{selectedPhoto.category}</p>
                                <h4 className="text-white text-2xl font-black font-bangla">{selectedPhoto.title}</h4>
                            </div>
                        </div>

                        {/* Navigation (Placeholder logic for now) */}
                        <div className="flex items-center gap-6 mt-6">
                            <button className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                                <ChevronLeft size={24} />
                            </button>
                            <span className="text-white/50 font-bold tracking-widest uppercase text-xs">Full View Mode</span>
                            <button className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}