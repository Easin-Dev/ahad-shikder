import React from "react";

export const metadata = {
    title: "১৫ দফা অঙ্গীকার",
    description:
        "আহাদ শিকদারের ১৫ দফা অঙ্গীকার — রাজাপুর ও কাঁঠালিয়ার আধুনিক ও সমৃদ্ধ গঠন এবং জনগণের সামাজিক উন্নয়নের লক্ষ্যে প্রতিশ্রুতিবদ্ধ কর্মপরিকল্পনা।",
};

const DOFA_LIST = [
    {
        no: "০১",
        title: "পৌরসভায় উন্নীত করা",
        desc: "রাজাপুর ও কাঁঠালিয়া উপজেলাকে পৌরসভায় উন্নীত করে শহরের সেবা নিশ্চিত করা হবে।",
        icon: "🏙️",
    },
    {
        no: "০২",
        title: "শিল্পাঞ্চল ও কর্মসংস্থান",
        desc: "শিল্পাঞ্চল/হিপিজড স্থাপনের মাধ্যমে বাণিজ্যের প্রসার ও স্থানীয় যুবকদের কর্মসংস্থানের সুযোগ সৃষ্টি করা হবে।",
        icon: "🏭",
    },
    {
        no: "০৩",
        title: "আধুনিক স্বাস্থ্যসেবা",
        desc: "রাজাপুর ও কাঁঠালিয়ার প্রায় তিন লক্ষ জনগোষ্ঠীর জন্য ৫০ শয্যার হাসপাতাল যথেষ্ট নয়। উভয় স্বাস্থ্য কমপ্লেক্সকে ১৫০ শয্যায় উন্নীত করে আধুনিক স্বাস্থ্যসেবা নিশ্চিত করা হবে।",
        icon: "🏥",
    },
    {
        no: "০৪",
        title: "কৃষিতে আধুনিক প্রযুক্তি",
        desc: "যুবকদের উৎসাহিত করার পাশাপাশি কৃষিক্ষেত্রে আধুনিক প্রযুক্তি ব্যবহার, উৎপাদনে প্রণোদনা ও কৃষি প্রশিক্ষণ প্রদানের মাধ্যমে কৃষিকে শিল্পে আধুনিকায়ন করা হবে।",
        icon: "🌾",
    },
    {
        no: "০৫",
        title: "বিশ্ববিদ্যালয় স্থাপন",
        desc: "তরুণদের নিজ এলাকায় উচ্চশিক্ষা গ্রহণ, গবেষণা এবং দক্ষ জনসম্পদ হিসেবে গড়ে তুলতে পাবলিক বিশ্ববিদ্যালয় ও টেকনিক্যাল বিশ্ববিদ্যালয় স্থাপনের উদ্যোগ গ্রহণ করা হবে।",
        icon: "🎓",
    },
    {
        no: "০৬",
        title: "পর্যটন কেন্দ্র উন্নয়ন",
        desc: "কাঁঠালিয়া এবং রাজাপুর উপজেলা প্রাকৃতিক সৌন্দর্যে পরিপূর্ণ। পর্যটন কেন্দ্র গড়ে তোলার উদ্দেশে কাঁঠালিয়া ইকো পার্ক ও রাজাপুরকে মুঘল বিনোদন কেন্দ্র পরিণত করা হবে।",
        icon: "🌿",
    },
    {
        no: "০৭",
        title: "প্রশাসন সহজীকরণ",
        desc: "সরকারি সেবা সহজলভ্য করে প্রশাসন এবং সাধারণ জনগণের সম্পর্ক উন্নয়নে কার্যকর ব্যবস্থা গ্রহণ করা হবে।",
        icon: "🏛️",
    },
    {
        no: "০৮",
        title: "প্রবাসীদের সামাজিক মর্যাদা",
        desc: "প্রবাসীদের সামাজিক মর্যাদা নিশ্চিত ও প্রবাস ফেরত নাগরিকদের কর্মসংস্থানের ব্যবস্থা গ্রহণ করা হবে।",
        icon: "✈️",
    },
    {
        no: "০৯",
        title: "প্রতিটি ইউনিয়নে স্বাস্থ্যসেবা",
        desc: "প্রতিটি ইউনিয়ন স্বাস্থ্যকেন্দ্রে পর্যাপ্ত ওষুধ ও যোগ্য জনবল নিশ্চিত করে স্বাস্থ্যসেবা জনগণের দোরগোড়ায় পৌঁছে দেওয়া হবে।",
        icon: "💊",
    },
    {
        no: "১০",
        title: "ডিজিটাল দক্ষতা উন্নয়ন",
        desc: "যুবকদের প্রশিক্ষণে কম্পিউটার, ডিজিটাল মার্কেটিং, আইটি কোর্স, ওয়েব ডেভেলপমেন্ট সেন্টার স্থাপন করা হবে। দক্ষ প্রশিক্ষণপ্রাপ্ত বিদেশগামী জনশক্তি তৈরির ব্যবস্থা করা হবে।",
        icon: "💻",
    },
    {
        no: "১১",
        title: "খেলাধুলা ও যুব উন্নয়ন",
        desc: "উপজেলায় মিনি স্টেডিয়াম এবং ইউনিয়ন সমূহে আধুনিক খেলার মাঠ ও ক্রীড়া অ্যাকাডেমি তৈরি করা হবে, যা মাদক প্রতিরোধ ও শিশু-কিশোরদের সুস্বাস্থ্য নিশ্চিতে বড় ভূমিকা রাখবে।",
        icon: "⚽",
    },
    {
        no: "১২",
        title: "নদী ভাঙন রোধ",
        desc: "বিষখালী নদীতে নদী ভাঙন রোধে স্থায়ীভাবে নদী-রক্ষা বাঁধ নির্মাণ করা হবে।",
        icon: "🌊",
    },
    {
        no: "১৩",
        title: "হাট-বাজার উন্নয়ন",
        desc: "উপজেলা এবং ইউনিয়নের বাজার সমূহে টোল ঘর, পানি নিষ্কাশন, পাবলিক টয়লেট ও বর্জ্য-ব্যবস্থাপনা ইত্যাদি উদ্যোগ গ্রহণ করা হবে। প্রতিটি হাট-বাজারে সোলার লাইট স্থাপন করা হবে।",
        icon: "🏪",
    },
    {
        no: "১৪",
        title: "তথ্য অ্যাপ তৈরি",
        desc: "রাজাপুর এবং কাঁঠালিয়ার যাবতীয় তথ্য অতিথি, প্রবাসী এবং সাধারণ মানুষের ফিঙ্গে পাওয়ার জন্য অ্যাপ (APP) তৈরি করা হবে।",
        icon: "📱",
    },
    {
        no: "১৫",
        title: "মাদকমুক্ত সমাজ",
        desc: "মাদকমুক্ত সমাজ গঠনের লক্ষ্যে রাজাপুর ও কাঁঠালিয়ার স্থানীয় জনগণের মাধ্যমে মাদক নিয়ন্ত্রণ কমিটি ও অভিভাবকদের সচেতন করার লক্ষ্যে মাদকের ভয়াবহতা ভিডিও ক্যাম্পেইনের মাধ্যমে প্রচার করা হবে।",
        icon: "🚫",
    },
];

export default function DofaPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* ── HERO ── */}
            <section className="relative overflow-hidden bg-[#026B32] pt-32 pb-20 px-4">
                {/* decorative circles */}
                <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/5" />
                <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full bg-[#DD2527]/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03] border border-white/10" />

                <div className="relative max-w-4xl mx-auto text-center">
                    {/* badge */}
                    <div className="inline-flex items-center gap-2 bg-[#DD2527] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                        <span>জাতীয় নাগরিক পার্টি — NCP</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
                        আহাদ শিকদারের
                        <span className="block text-[#FFD700]">১৫ দফা অঙ্গীকার</span>
                    </h1>

                    <p className="text-green-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
                        আধুনিক ও সমৃদ্ধ রাজাপুর–কাঁঠালিয়া গঠন ও জনগণের সামাজিক উন্নয়নের লক্ষ্যে
                    </p>

                    {/* stats row */}
                    <div className="flex justify-center gap-8 md:gap-16">
                        {[
                            { num: "১৫", label: "দফা অঙ্গীকার" },
                            { num: "৩+", label: "লক্ষ জনগোষ্ঠী" },
                            { num: "২", label: "উপজেলা" },
                        ].map((s) => (
                            <div key={s.label} className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-[#FFD700]">{s.num}</div>
                                <div className="text-green-300 text-sm font-medium">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── QUOTE STRIP ── */}
            <div className="bg-[#DD2527] py-4 px-4 text-center">
                <p className="text-white font-bold text-sm md:text-base italic">
                    "জনতার মার্কা শাপলা কিল — আগামীর রাজাপুর-কাঁঠালিয়া আমরাই গড়ি"
                </p>
            </div>

            {/* ── DOFA GRID ── */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {DOFA_LIST.map((item, idx) => (
                        <div
                            key={item.no}
                            className="group relative bg-white border-2 border-gray-100 rounded-3xl p-6 hover:border-[#026B32] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                        >
                            {/* bg number watermark */}
                            <div className="absolute -top-4 -right-2 text-[80px] font-black text-gray-50 select-none pointer-events-none leading-none">
                                {item.no}
                            </div>

                            {/* top row */}
                            <div className="flex items-start justify-between mb-4">
                                <span className="text-3xl">{item.icon}</span>
                                <span className="text-xs font-black bg-[#026B32]/10 text-[#026B32] px-3 py-1 rounded-full">
                                    দফা {item.no}
                                </span>
                            </div>

                            {/* content */}
                            <h3 className="text-lg font-black text-gray-900 mb-2 group-hover:text-[#026B32] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {item.desc}
                            </p>

                            {/* bottom accent line */}
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#026B32] to-[#DD2527] group-hover:w-full transition-all duration-500 rounded-b-3xl" />
                        </div>
                    ))}
                </div>
            </section>

            {/* ── BOTTOM CTA ── */}
            <section className="bg-gray-50 py-16 px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#026B32] flex items-center justify-center text-3xl mx-auto mb-6">
                        🤝
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                        এই অঙ্গীকার বাস্তবায়নে আপনার সহযোগিতা চাই
                    </h2>
                    <p className="text-gray-500 mb-8">
                        রাজাপুর–কাঁঠালিয়ার উন্নয়নে একসাথে কাজ করি। আপনার মতামত ও সমর্থন আমাদের অনুপ্রেরণা।
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-[#026B32] text-white px-8 py-4 rounded-full font-bold hover:bg-[#024d24] transition-all transform hover:scale-105 shadow-lg"
                        >
                            📞 যোগাযোগ করুন
                        </a>
                        <a
                            href="/initiatives"
                            className="inline-flex items-center justify-center gap-2 bg-white text-[#026B32] border-2 border-[#026B32] px-8 py-4 rounded-full font-bold hover:bg-[#026B32] hover:text-white transition-all"
                        >
                            🚀 উদ্যোগ দেখুন
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}