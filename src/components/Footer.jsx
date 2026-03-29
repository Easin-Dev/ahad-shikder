"use client";
import React from 'react';
import {
    Facebook,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    ChevronRight,
    ExternalLink,
    ShieldCheck,
    FileText,
    Heart
} from 'lucide-react';

// --- COLORS ---
const NCP_GREEN = "#026B32";
const NCP_RED = "#DD2527";

export default function AppFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#026B32] text-white relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DD2527]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* --- MISSION SECTION --- */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <img
                                src="https://i.postimg.cc/J0CvJnFz/ja-ta-ya-na-gara-ka-pa-ra-ta-ra-la-ga.jpg"
                                alt="NCP Logo"
                                className="w-12 h-12 rounded-full border-2 border-white/20"
                            />
                            <h4 className="text-2xl font-black tracking-tight text-[#DD2527]">
                                NCP অঙ্গীকার
                            </h4>
                        </div>
                        <p className="text-base text-white/80 leading-relaxed font-medium">
                            নতুন নেতৃত্ব ও স্বচ্ছতার মাধ্যমে সামাজিক দায়বদ্ধতা নিয়ে দেশের উন্নয়নে কাজ করাই আমাদের মূল লক্ষ্য। আমরা বিশ্বাস করি তারুণ্যের শক্তিতে।
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/61573616951534"
                                target="_blank"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#DD2527] transition-all transform hover:-translate-y-1"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/md-ahad-shikder-a743b3245/"
                                target="_blank"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#DD2527] transition-all transform hover:-translate-y-1"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* --- QUICK LINKS --- */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <span className="w-2 h-6 bg-[#DD2527] rounded-full inline-block" />
                            দ্রুত লিঙ্ক
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { label: 'আমার গল্প', path: '#' },
                                { label: 'উদ্যোগসমূহ', path: '#' },
                                { label: 'সাংগঠনিক ভূমিকা', path: '#' },
                                { label: 'গ্যালারি', path: '#' }
                            ].map((link, index) => (
                                <li key={index}>
                                    <a href={link.path} className="text-white/70 hover:text-white flex items-center gap-2 group transition-all">
                                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform text-[#DD2527]" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* --- LEGAL & POLICIES --- */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <span className="w-2 h-6 bg-[#DD2527] rounded-full inline-block" />
                            আইনগত তথ্য
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="text-white/70 hover:text-white flex items-center gap-2 transition-all">
                                    <ShieldCheck size={16} className="text-[#DD2527]" />
                                    গোপনীয়তা নীতি
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white/70 hover:text-white flex items-center gap-2 transition-all">
                                    <FileText size={16} className="text-[#DD2527]" />
                                    ব্যবহারের শর্তাবলী
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* --- CONTACT INFO --- */}
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                        <h4 className="text-lg font-bold mb-6 text-[#DD2527]">যোগাযোগ করুন</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Mail size={18} className="mt-1 text-white/60" />
                                <div>
                                    <p className="text-xs text-white/50 uppercase font-bold tracking-wider">ইমেইল পাঠান</p>
                                    <p className="text-sm font-medium">campaign@ahadshikder.bd</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="mt-1 text-white/60" />
                                <div>
                                    <p className="text-xs text-white/50 uppercase font-bold tracking-wider">ঠিকানা</p>
                                    <p className="text-sm font-medium">ঝালকাঠি-১, বাংলাদেশ</p>
                                </div>
                            </div>
                        </div>
                        <button className="w-full mt-6 bg-[#DD2527] py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-red-700 transition-colors shadow-lg">
                            <Heart size={16} fill="white" />
                            সাপোর্ট করুন
                        </button>
                    </div>

                </div>

                {/* --- BOTTOM SECTION --- */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-white/60 text-center md:text-left">
                        &copy; {currentYear} মোঃ আহাদ শিকদার। সর্বস্বত্ব সংরক্ষিত।
                    </p>
                    <div className="flex items-center gap-2 text-xs text-white/40">
                        <span>Powered by</span>
                        <span className="text-white/70 font-bold hover:text-[#DD2527] transition-colors cursor-pointer flex items-center gap-1">
                            NCP Digital Team <ExternalLink size={12} />
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}