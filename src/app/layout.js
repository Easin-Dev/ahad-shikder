import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // ── Basic ──────────────────────────────────────────────────────────
  title: {
    default: "আহাদ শিকদার | ঝালকাঠি-১ আসনের জনপ্রতিনিধি",
    template: "%s | আহাদ শিকদার",
  },
  description:
    "মোঃ আহাদ শিকদার — ঝালকাঠি-১ (রাজাপুর–কাঁঠালিয়া) আসনের জনপ্রতিনিধি। জাতীয় নাগরিক পার্টি (NCP)-এর নেতৃত্বে উন্নয়ন, শিক্ষা ও মানবিক সেবায় নিবেদিত। জুলাই গণঅভ্যুত্থান ২০২৪-পরবর্তী নতুন বাংলাদেশ গড়ার অঙ্গীকারে কাজ করে যাচ্ছেন।",
  keywords: [
    // ── ব্যক্তি ──
    "আহাদ শিকদার",
    "Ahad Shikder",
    "মোঃ আহাদ শিকদার",

    // ── আসন ও এলাকা ──
    "ঝালকাঠি-১",
    "রাজাপুর",
    "কাঁঠালিয়া",
    "ঝালকাঠি",

    // ── দল ──
    "জাতীয় নাগরিক পার্টি",
    "এনসিপি",
    "NCP",
    "National Citizen Party",
    "NCP Bangladesh",

    // ── সাম্প্রতিক ঘটনা ও ট্রেন্ডিং কীওয়ার্ড ──
    "জুলাই গণঅভ্যুত্থান",
    "জুলাই আন্দোলন ২০২৪",
    "বৈষম্যবিরোধী ছাত্র আন্দোলন",
    "ত্রয়োদশ জাতীয় সংসদ নির্বাচন",
    "বাংলাদেশ নির্বাচন ২০২৬",
    "Bangladesh Election 2026",
    "নতুন বাংলাদেশ",
    "১১ দলীয় জোট",
    "নাহিদ ইসলাম",
    "হাসনাত আবদুল্লাহ",
    "সারজিস আলম",

    // ── বিষয় ──
    "জনপ্রতিনিধি",
    "বাংলাদেশ রাজনীতি",
    "তরুণ নেতৃত্ব",
    "স্থানীয় উন্নয়ন",
    "রাজনৈতিক সংস্কার",
  ],
  authors: [{ name: "মোঃ আহাদ শিকদার", url: "https://ahadshikder.com" }],
  creator: "মোঃ আহাদ শিকদার",
  publisher: "মোঃ আহাদ শিকদার",

  // ── Canonical & Robots ────────────────────────────────────────────
  metadataBase: new URL("https://ahadshikder.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph (Facebook / WhatsApp) ──────────────────────────────
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: "https://ahadshikder.com",
    siteName: "আহাদ শিকদার",
    title: "আহাদ শিকদার | ঝালকাঠি-১ | NCP জনপ্রতিনিধি",
    description:
      "মোঃ আহাদ শিকদার — ঝালকাঠি-১ (রাজাপুর–কাঁঠালিয়া) আসনের জনপ্রতিনিধি। জাতীয় নাগরিক পার্টি (NCP)-এর নেতৃত্বে উন্নয়ন, শিক্ষা ও মানবিক সেবায় নিবেদিত।",
    images: [
      {
        url: "https://i.postimg.cc/J0CvJnFz/ja-ta-ya-na-gara-ka-pa-ra-ta-ra-la-ga.jpg",
        width: 1200,
        height: 630,
        alt: "আহাদ শিকদার — ঝালকাঠি-১ আসনের জনপ্রতিনিধি",
      },
    ],
  },

  // ── Twitter / X Card ──────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "আহাদ শিকদার | ঝালকাঠি-১ | NCP জনপ্রতিনিধি",
    description:
      "মোঃ আহাদ শিকদার — ঝালকাঠি-১ (রাজাপুর–কাঁঠালিয়া) আসনের জনপ্রতিনিধি। উন্নয়ন, শিক্ষা ও মানবিক সেবায় নিবেদিত। NCP — জাতীয় নাগরিক পার্টি।",
    images: [
      "https://i.postimg.cc/J0CvJnFz/ja-ta-ya-na-gara-ka-pa-ra-ta-ra-la-ga.jpg",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}