"use client";
import React, { useState } from 'react';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Facebook,
    Twitter,
    Youtube,
    MessageSquare,
    Clock,
    CheckCircle2
} from "lucide-react";

// --- COLOR CONSTANTS ---
const NCP_GREEN = "#026B32";
const NCP_RED = "#DD2527";

/**
 * @description যোগাযোগ পেজ - যেখানে ইউজাররা বার্তা পাঠাতে পারবে এবং সাংগঠনিক যোগাযোগের তথ্য পাবে।
 */
export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // এখানে আপনার ফর্ম সাবমিশন লজিক থাকবে
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: Phone,
            title: "ফোন করুন",
            details: "+৮৮০ ১৭XX-XXXXXX",
            subDetails: "সকাল ১০টা - রাত ৮টা (শনিবার-বৃহস্পতিবার)",
            accent: NCP_GREEN
        },
        {
            icon: Mail,
            title: "ইমেইল করুন",
            details: "info@ncp-jhalkathi.com",
            subDetails: "যেকোনো জিজ্ঞাসায় আমাদের লিখুন",
            accent: NCP_RED
        },
        {
            icon: MapPin,
            title: "প্রধান কার্যালয়",
            details: "রাজাপুর, ঝালকাঠি-১",
            subDetails: "বরিশাল বিভাগ, বাংলাদেশ",
            accent: NCP_GREEN
        }
    ];

    return (
        <main className="min-h-screen bg-gray-50 font-bangla pb-20 pt-10">
            {/* Header Section */}
            <section className="relative py-20 bg-[#026B32] overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DD2527] rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                        আমাদের সাথে <span className="text-[#DD2527]">যোগাযোগ</span> করুন
                    </h1>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto font-medium">
                        আপনার মতামত, পরামর্শ বা যেকোনো সাংগঠনিক জিজ্ঞাসার জন্য আমাদের কাছে বার্তা পাঠান। আমরা আপনার কথা শুনতে আগ্রহী।
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Contact Cards */}
                    {contactInfo.map((info, index) => (
                        <div key={index} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                            <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg rotate-3 group-hover:rotate-0 transition-transform"
                                style={{ backgroundColor: info.accent }}
                            >
                                <info.icon size={30} />
                            </div>
                            <h3 className="text-xl font-black text-gray-900 mb-2">{info.title}</h3>
                            <p className="text-lg font-bold text-gray-800 mb-1">{info.details}</p>
                            <p className="text-gray-500 text-sm font-medium">{info.subDetails}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-[#DD2527]/10 flex items-center justify-center text-[#DD2527]">
                                <MessageSquare size={24} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-black text-gray-900">সরাসরি বার্তা পাঠান</h2>
                        </div>

                        {isSubmitted ? (
                            <div className="bg-green-50 border border-green-200 p-8 rounded-3xl text-center animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-2xl font-black text-green-800 mb-2">বার্তা সফলভাবে পাঠানো হয়েছে!</h3>
                                <p className="text-green-700 font-medium">আমরা খুব শীঘ্রই আপনার সাথে যোগাযোগ করব। ধন্যবাদ।</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">আপনার নাম</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="নাম লিখুন"
                                            className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#026B32] outline-none transition-all font-medium"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">ইমেইল ঠিকানা</label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="email@example.com"
                                            className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#026B32] outline-none transition-all font-medium"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">বিষয়</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="বার্তার বিষয়"
                                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#026B32] outline-none transition-all font-medium"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">আপনার বার্তা</label>
                                    <textarea
                                        required
                                        rows="5"
                                        placeholder="এখানে আপনার বার্তাটি লিখুন..."
                                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#026B32] outline-none transition-all font-medium resize-none"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#026B32] text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-[#014d24] transition-colors shadow-xl shadow-green-900/10"
                                >
                                    <Send size={20} />
                                    <span>বার্তা পাঠান</span>
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Map & Social */}
                    <div className="space-y-8">
                        <div className="bg-[#1a1a1a] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Clock size={120} />
                            </div>
                            <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                                <Clock className="text-[#DD2527]" />
                                অফিস সময়
                            </h3>
                            <div className="space-y-4 relative z-10">
                                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                                    <span className="font-medium text-white/70">শনিবার - বৃহস্পতিবার</span>
                                    <span className="font-bold">সকাল ১০:০০ - রাত ০৮:০০</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                                    <span className="font-medium text-white/70">শুক্রবার</span>
                                    <span className="font-bold text-[#DD2527]">সাপ্তাহিক ছুটি</span>
                                </div>
                            </div>

                            <h3 className="text-2xl font-black mt-12 mb-6">সামাজিক যোগাযোগ</h3>
                            <div className="flex gap-4">
                                {[Facebook, Twitter, Youtube].map((Icon, i) => (
                                    <button key={i} className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#DD2527] hover:border-[#DD2527] transition-all duration-300">
                                        <Icon size={24} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Simple Map Placeholder */}
                        <div className="bg-white p-4 rounded-[3rem] shadow-xl border border-gray-100 h-64 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center text-gray-400 font-bold">
                                Google Map Placeholder
                            </div>
                            <div className="absolute inset-0 bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800)' }}></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2">
                                    <MapPin className="text-[#DD2527]" size={20} />
                                    <span className="font-black text-gray-800">আমাদের অবস্থান</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}