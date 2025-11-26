"use client";
import React from 'react';
import { Globe, GitBranch, Users2, HeartHandshake, TrendingUp } from "lucide-react";

// --- COLOR CONSTANTS ---
const NCP_GREEN = "#026B32"; // Primary Green
const NCP_RED = "#DD2527";   // Accent Red

/**
 * @description This component showcases the various organizational roles and responsibilities
 * of Ahad Shikdar, utilizing a clear, card-based layout with the defined Green-Red theme.
 */
// "use client" is required for this component
export default function RolesSection() {

    return (
        <section id="roles" className="py-16 bg-gray-50/50 min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <h2 className={`text-5xl font-extrabold text-center text-gray-800 mb-12 border-b-4 border-[${NCP_RED}] pb-4 font-bangla`}>
                    সাংগঠনিক ও রাজনৈতিক দায়িত্বসমূহ
                </h2>

                {/* Main Content Grid (Optimized for 2x2 layout on desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Role Card 1: NCP Diaspora Alliance (Red Accent) */}
                    <div 
                        className={`bg-white p-8 rounded-xl shadow-xl border-t-8 border-[${NCP_RED}] 
                        transition duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:border-l-4 hover:border-l-[${NCP_GREEN}]`}
                    >
                        <Globe size={36} className={`text-[${NCP_RED}] mb-3`} />
                        <h3 className={`text-2xl font-bold text-[${NCP_GREEN}] mb-1 font-bangla`}>
                            এনসিপি ডায়াস্পোরা এলায়েন্স, ফিনল্যান্ড
                        </h3>
                        <p className="text-sm font-semibold text-gray-600 mb-3 border-b border-gray-200 pb-2">
                            আহ্বায়ক | ২০২৫ – বর্তমান
                        </p>
                        <p className="text-gray-700 leading-relaxed font-bangla">
                            ইউরোপে বসবাসরত বাংলাদেশিদের মধ্যে পার্টির আদর্শ প্রচার ও সাংগঠনিক
                            সমন্বয়ে নেতৃত্বদান।
                        </p>
                    </div>

                    {/* Role Card 2: District Coordination Committee (Green Accent) */}
                    <div 
                        className={`bg-white p-8 rounded-xl shadow-xl border-t-8 border-[${NCP_GREEN}]
                        transition duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:border-l-4 hover:border-l-[${NCP_RED}]`}
                    >
                        <GitBranch size={36} className={`text-[${NCP_GREEN}] mb-3`} />
                        <h3 className={`text-2xl font-bold text-[${NCP_GREEN}] mb-1 font-bangla`}>
                            জেলা সমন্বয় কমিটি, ঝালকাঠি
                        </h3>
                        <p className="text-sm font-semibold text-gray-600 mb-3 border-b border-gray-200 pb-2">
                            প্রধান সমন্বয়ক | ২০২৪ – বর্তমান
                        </p>
                        <p className="text-gray-700 leading-relaxed font-bangla">
                            ঝালকাঠি জেলায় সাংগঠনিক কার্যক্রম পরিচালনা এবং উপজেলা ইউনিটগুলোর সাথে
                            কার্যকর সমন্বয় স্থাপন।
                        </p>
                    </div>

                    {/* Role Card 3: Upazila Organizer (Red Accent) */}
                    <div 
                        className={`bg-white p-8 rounded-xl shadow-xl border-t-8 border-[${NCP_RED}]
                        transition duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:border-l-4 hover:border-l-[${NCP_GREEN}]`}
                    >
                        <Users2 size={36} className={`text-[${NCP_RED}] mb-3`} />
                        <h3 className={`text-2xl font-bold text-[${NCP_GREEN}] mb-1 font-bangla`}>
                            উপজেলা সংগঠক
                        </h3>
                        <p className="text-sm font-semibold text-gray-600 mb-3 border-b border-gray-200 pb-2">
                            রাজাপুর ও কাঁঠালিয়া | ২০২৩ – বর্তমান
                        </p>
                        <p className="text-gray-700 leading-relaxed font-bangla">
                            স্থানীয় পর্যায়ে সদস্য সংগ্রহ, সভা আয়োজন এবং পার্টির ২৪ দফা
                            ইশতেহার বিতরণ।
                        </p>
                    </div>

                    {/* Role Card 4: Social Development Forum (Green Accent) */}
                    <div 
                        className={`bg-white p-8 rounded-xl shadow-xl border-t-8 border-[${NCP_GREEN}]
                        transition duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:border-l-4 hover:border-l-[${NCP_RED}]`}
                    >
                        <HeartHandshake size={36} className={`text-[${NCP_GREEN}] mb-3`} />
                        <h3 className={`text-2xl font-bold text-[${NCP_GREEN}] mb-1 font-bangla`}>
                            সামাজিক উন্নয়ন ফোরাম
                        </h3>
                        <p className="text-sm font-semibold text-gray-600 mb-3 border-b border-gray-200 pb-2">
                            প্রতিষ্ঠাতা সদস্য | ২০২১ – বর্তমান
                        </p>
                        <p className="text-gray-700 leading-relaxed font-bangla">
                            স্থানীয় যুব ও ছাত্র সংগঠনের সাথে সমন্বিত সেবামূলক কাজ, দুর্যোগ
                            সহায়তা এবং সচেতনতা কার্যক্রমে সক্রিয় ভূমিকা পালন।
                        </p>
                    </div>
                </div>

                {/* Footer Note / Summary */}
                <div className="mt-16 text-center">
                    <div className={`inline-flex items-center p-4 rounded-xl bg-white shadow-lg border-2 border-[${NCP_GREEN}]`}>
                        <TrendingUp size={24} className={`text-[${NCP_RED}] mr-3`} />
                        <p className="text-gray-800 font-bangla text-lg font-medium">
                            এই ভূমিকাগুলোর মাধ্যমে তিনি জনসেবা ও স্থানীয় উন্নয়নে তার অঙ্গীকার তুলে ধরেছেন।
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}