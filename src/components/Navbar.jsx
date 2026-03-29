"use client";
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
    Home, Menu, X, User, Image, Rss, Phone, Zap, Users, ChevronRight
} from 'lucide-react';

// --- COLORS ---
const NCP_GREEN = "#026B32";
const NCP_RED = "#DD2527";

// --- NAVIGATION ITEMS ---
const NAV_ITEMS = [
    { id: "home", label: "হোম", path: "/", icon: Home },
    { id: "about", label: "আমার কথা", path: "/about", icon: User },
    { id: "roles", label: "সাংগঠনিক ভূমিকা", path: "/roles", icon: Users },
    { id: "initiatives", label: "উদ্যোগ", path: "/initiatives", icon: Zap },
    { id: "gallery", label: "গ্যালারি", path: "/gallery", icon: Image },
    { id: "contact", label: "যোগাযোগ", path: "/contact", icon: Phone },
];

export default function AppNavbar() {
    const router = useRouter();
    const pathname = usePathname();          // ← Next.js থেকে সরাসরি active path

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Scroll → glassmorphism effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Mobile drawer খোলা থাকলে body scroll বন্ধ
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    // নেভিগেট করার একমাত্র ফাংশন
    const handleNavigate = (path) => {
        router.push(path);      // ← Next.js router — actual page render হবে
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled
                        ? 'bg-white/80 backdrop-blur-lg shadow-sm py-2'
                        : 'bg-transparent py-4'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

                    {/* ── LOGO ── */}
                    <div
                        onClick={() => handleNavigate("/")}
                        className="flex items-center gap-3 group cursor-pointer"
                    >
                        <div className="relative">
                            <img
                                src="https://i.postimg.cc/J0CvJnFz/ja-ta-ya-na-gara-ka-pa-ra-ta-ra-la-ga.jpg"
                                alt="NCP Logo"
                                className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-[#026B32] group-hover:scale-105 transition-transform"
                            />
                            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#DD2527] rounded-full border-2 border-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl md:text-2xl font-black leading-none text-[#026B32]">
                                আহাদ শিকদার
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
                                Jhalokati-1
                            </span>
                        </div>
                    </div>

                    {/* ── DESKTOP MENU ── */}
                    <div className="hidden md:flex items-center gap-1">
                        {NAV_ITEMS.map((item) => {
                            const isActive = pathname === item.path;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavigate(item.path)}
                                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all relative group cursor-pointer outline-none ${isActive
                                            ? 'text-[#026B32]'
                                            : 'text-gray-600 hover:text-[#026B32]'
                                        }`}
                                >
                                    {item.label}

                                    {/* Active dot */}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#DD2527] rounded-full" />
                                    )}

                                    {/* Hover underline */}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#026B32] transition-all group-hover:w-4" />
                                </button>
                            );
                        })}
                    </div>

                    {/* ── CTA BUTTON ── */}
                    <div className="hidden md:block">
                        <button
                            onClick={() => handleNavigate("/contact")}
                            className="flex items-center gap-2 bg-[#026B32] text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:bg-[#DD2527] transition-all transform hover:scale-105 active:scale-95 cursor-pointer outline-none"
                        >
                            <Phone size={16} />
                            সরাসরি কল
                        </button>
                    </div>

                    {/* ── MOBILE TOGGLE ── */}
                    <button
                        className="md:hidden p-2 rounded-xl bg-[#026B32]/10 text-[#026B32] transition-colors hover:bg-[#026B32]/20 cursor-pointer outline-none"
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Open Menu"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </nav>

            {/* ── MOBILE DRAWER ── */}
            <div
                className={`fixed inset-0 z-[110] transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible pointer-events-none'
                    }`}
            >
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 cursor-pointer ${isMenuOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Drawer panel */}
                <div
                    className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 p-6 flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    {/* Drawer header */}
                    <div className="flex justify-between items-center mb-10">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-[#026B32] flex items-center justify-center text-white font-bold text-xs">
                                AS
                            </div>
                            <span className="text-lg font-black text-gray-800">মেনু নেভিগেশন</span>
                        </div>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors cursor-pointer outline-none"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Nav links */}
                    <div className="space-y-2 flex-1 overflow-y-auto">
                        {NAV_ITEMS.map((item) => {
                            const isActive = pathname === item.path;
                            const Icon = item.icon;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavigate(item.path)}
                                    className={`flex items-center justify-between w-full p-4 rounded-2xl font-bold transition-all text-left cursor-pointer outline-none ${isActive
                                            ? 'bg-[#026B32] text-white shadow-lg translate-x-1'
                                            : 'hover:bg-gray-50 text-gray-700'
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <Icon size={20} className={isActive ? 'text-white' : 'text-[#026B32]'} />
                                        <span>{item.label}</span>
                                    </div>
                                    <ChevronRight size={16} className={isActive ? 'opacity-100' : 'opacity-30'} />
                                </button>
                            );
                        })}
                    </div>

                    {/* Drawer footer */}
                    <div className="mt-auto pt-6 border-t border-gray-100">
                        <button
                            onClick={() => handleNavigate("/contact")}
                            className="w-full bg-[#DD2527] text-white py-4 rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2 mb-6 cursor-pointer outline-none"
                        >
                            পার্টিতে যোগ দিন
                        </button>
                        <div className="flex justify-center gap-6 text-gray-400">
                            <span
                                onClick={() => handleNavigate("/roles")}
                                className="hover:text-[#026B32] transition-colors cursor-pointer"
                            >
                                <Users size={20} />
                            </span>
                            <span
                                onClick={() => handleNavigate("/")}
                                className="hover:text-[#026B32] transition-colors cursor-pointer"
                            >
                                <Rss size={20} />
                            </span>
                            <span
                                onClick={() => handleNavigate("/contact")}
                                className="hover:text-[#026B32] transition-colors cursor-pointer"
                            >
                                <Phone size={20} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}