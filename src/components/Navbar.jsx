"use client";
import React, { useState } from 'react';
import { Home, Menu, X, Globe, User, Image, Rss, Phone, Zap } from 'lucide-react';

// --- COLOR CONSTANTS ---
// Green (#026B32) - Primary
const NCP_GREEN = "#026B32";
// Red (#DD2527) - Accent
const NCP_RED = "#DD2527";

// --- NAVIGATION ITEMS ---
// Each item now includes a 'path' property for routing clarity
const NAV_ITEMS = [
    { id: "home", label: "হোম", path: "/", icon: Home },
    { id: "about", label: "আমার কথা", path: "/about", icon: User },
    { id: "roles", label: "সাংগঠনিক ভূমিকা", path: "/roles", icon: Globe },
    { id: "initiatives", label: "উদ্যোগ", path: "/initiatives", icon: Zap },
    { id: "gallery", label: "গ্যালারি", path: "/gallery", icon: Image },
    { id: "blog", label: "সংবাদ", path: "/blog", icon: Rss },
    { id: "contact", label: "যোগাযোগ", path: "/contact", icon: Phone },
];

// --- NAVBAR COMPONENT ---
// This component displays the navigation bar, manages mobile menu state,
// and highlights the active page.
export default function AppNavbar({ activePage = "home", onChangePage }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    // Handles navigation clicks and closes the mobile menu
    const handleNavClick = (pageId) => {
        if (onChangePage) onChangePage(pageId);
        setMobileOpen(false);
    };

    return (
        <>
            {/* Desktop and Mobile Header */}
            <header className="sticky top-0 z-50 shadow-lg bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">

                    {/* === LOGO + NAME (Always Visible) === */}
                    {/* লোগোতে ক্লিক করলে হোমে নেভিগেট হবে */}
                    <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick("home")}>

                        {/* LOGO Placeholder */}
                        <img
                            src="https://i.postimg.cc/J0CvJnFz/ja-ta-ya-na-gara-ka-pa-ra-ta-ra-la-ga.jpg"
                            alt="Ahad Shikdar Logo"
                            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
                        />

                        {/* NAME */}
                        <h1 className="text-xl font-extrabold text-green-700">
                            আহাদ শিকদার
                        </h1>
                    </div>

                    {/* Desktop Navigation Links (Hidden on mobile) */}
                    <nav className="hidden md:flex space-x-6">
                        {NAV_ITEMS.map((item) => (
                            <a // <a> ট্যাগ ব্যবহার করা হয়েছে
                                key={item.id}
                                href={item.path} // পাথের জন্য href যোগ করা হয়েছে
                                className={`nav-link font-semibold transition duration-200 pb-1 relative group cursor-pointer
                                    ${activePage === item.id
                                        ? `text-[${NCP_RED}] font-bold`
                                        : `text-gray-700 hover:text-[${NCP_RED}]`
                                    }`}
                                onClick={() => { // e.preventDefault() সরিয়ে দেওয়া হয়েছে যাতে ব্রাউজার স্বাভাবিকভাবে নেভিগেট করতে পারে
                                    handleNavClick(item.id);
                                }}
                            >
                                {item.label}
                                {/* Active Link Underline Effect */}
                                <span className={`absolute bottom-0 left-0 h-0.5 bg-[${NCP_RED}] transition-all duration-300 ${activePage === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Open Button (Visible on mobile) */}
                    <button
                        className="md:hidden text-gray-700 hover:text-green-700 p-2 rounded-lg transition cursor-pointer"
                        onClick={() => setMobileOpen(true)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Drawer (Slides in from the right) */}
            <div
                className={`md:hidden fixed inset-0 z-[60] bg-white/95 backdrop-blur-sm p-6 transform transition duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-end">
                    {/* Mobile Menu Close Button */}
                    <button
                        className="text-gray-700 hover:text-red-600 p-2 rounded-full border border-gray-300 cursor-pointer"
                        onClick={() => setMobileOpen(false)}
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col space-y-6 mt-12">
                    {NAV_ITEMS.map((item) => {
                        const Icon = item.icon;
                        return (
                            <a // <a> ট্যাগ ব্যবহার করা হয়েছে
                                key={item.id}
                                href={item.path} // পাথের জন্য href যোগ করা হয়েছে
                                className={`flex items-center gap-4 py-3 px-4 rounded-xl text-left transition duration-200 cursor-pointer
                                    ${activePage === item.id
                                        ? `bg-[${NCP_RED}] text-white shadow-lg`
                                        : `text-gray-800 hover:bg-gray-100`
                                    }`}
                                onClick={() => { // e.preventDefault() সরিয়ে দেওয়া হয়েছে যাতে ব্রাউজার স্বাভাবিকভাবে নেভিগেট করতে পারে
                                    handleNavClick(item.id);
                                }}
                            >
                                <Icon size={24} className={activePage === item.id ? 'text-white' : `text-[${NCP_GREEN}]`} />
                                <span className="text-xl font-bold">{item.label}</span>
                            </a>
                        );
                    })}
                </nav>
            </div>
        </>
    );
}