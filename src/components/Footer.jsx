"use client";
export default function Footer() {
    return (
        <footer className="bg-[#026B32] text-white mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Mission */}
                    <div>
                        <h4 className="text-xl font-bold mb-4 font-bangla text-[#DD2527]">
                            NCP অঙ্গীকার
                        </h4>
                        <p className="text-sm text-white/90 font-bangla">
                            নতুন নেতৃত্ব ও স্বচ্ছতার মাধ্যমে সামাজিক দায়বদ্ধতা নিয়ে দেশের উন্নয়নে কাজ করা।
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-4 font-bangla text-[#DD2527]">
                            দ্রুত লিঙ্ক
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    className="text-white/90 hover:text-[#DD2527] transition font-bangla cursor-pointer"
                                >
                                    আমার গল্প
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-white/90 hover:text-[#DD2527] transition font-bangla cursor-pointer"
                                >
                                    উদ্যোগসমূহ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-xl font-bold mb-4 font-bangla text-[#DD2527]">
                            আইনগত তথ্য
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a className="text-white/90 hover:text-[#DD2527] transition font-bangla cursor-pointer">
                                    গোপনীয়তা নীতি
                                </a>
                            </li>
                            <li>
                                <a className="text-white/90 hover:text-[#DD2527] transition font-bangla cursor-pointer">
                                    ব্যবহারের শর্তাবলী
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xl font-bold mb-4 font-bangla text-[#DD2527]">
                            যোগাযোগ
                        </h4>
                        <p className="text-sm text-white/90 font-bangla">
                            ইমেইল: campaign@ahadshikder.bd
                        </p>

                        <div className="flex space-x-4 mt-4">
                            <a
                                href="https://www.facebook.com/61573616951534"
                                target="_blank"
                                className="hover:text-[#DD2527] transition"
                            >
                                <i data-lucide="facebook" className="w-6 h-6"></i>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/md-ahad-shikder-a743b3245/"
                                target="_blank"
                                className="hover:text-[#DD2527] transition"
                            >
                                <i data-lucide="linkedin" className="w-6 h-6"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/20 mt-10 pt-6 text-center md:text-left">
                    <p className="text-sm text-white/80 font-bangla">
                        &copy; ২০২৫ মোঃ আহাদ শিকদার. সর্বস্বত্ব সংরক্ষিত।
                    </p>
                </div>
            </div>
        </footer>
    );
}
