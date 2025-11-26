"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
    { id: "home", label: "হোম" },
    { id: "about", label: "আমার কথা" },
    { id: "roles", label: "সাংগঠনিক ভূমিকা" },
    { id: "initiatives", label: "উদ্যোগ" },
    { id: "gallery", label: "গ্যালারি" },
    { id: "blog", label: "সংবাদ" },
    { id: "contact", label: "যোগাযোগ" },
];

export default function Navbar({ activePage = "home", onChangePage }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleNavClick = (pageId) => {
        if (onChangePage) {
            onChangePage(pageId);
        }
        setMobileOpen(false);
    };

    return (
        <>
            {/* Header & Navigation */}
            <header className="sticky top-0 z-50 shadow-lg bg-white border-b border-ncp-red/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
                    {/* Logo / Candidate Name */}
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-ncp-red rounded-full flex items-center justify-center text-white text-xl font-bold font-bangla">
                            NCP
                        </div>
                        <h1 className="text-xl font-bold text-ncp-blue font-bangla">
                            আহাদ শিকদার
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                className={`nav-link font-semibold transition font-bangla ${activePage === item.id
                                        ? "text-ncp-red"
                                        : "text-gray-700 hover:text-ncp-red"
                                    }`}
                                onClick={() => handleNavClick(item.id)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/* Mobile Menu Button (Hamburger) */}
                    <button
                        className="md:hidden text-ncp-blue"
                        onClick={() => setMobileOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </header>

            {/* Mobile Navigation Drawer */}
            <div
                className={`md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-sm p-6 transform transition duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-end">
                    <button
                        className="text-ncp-blue"
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close menu"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <nav className="flex flex-col space-y-4 mt-8">
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item.id}
                            className={`nav-link mobile-link text-2xl font-bold font-bangla transition ${activePage === item.id
                                    ? "text-ncp-red"
                                    : "text-ncp-blue hover:text-ncp-red"
                                }`}
                            onClick={() => handleNavClick(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </>
    );
}
