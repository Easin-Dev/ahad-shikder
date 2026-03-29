// app/robots.js
// Next.js 15 — এই ফাইলটাও app/ root-এ রাখুন
// automatically /robots.txt route তৈরি হবে

export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",       // সব search engine bot
                allow: "/",
                disallow: [
                    "/api/",            // API routes index করবে না
                    "/_next/",          // Next.js internal files
                    "/admin/",          // যদি admin panel থাকে
                ],
            },
        ],
        sitemap: "https://ahadshikder.com/sitemap.xml",
        host: "https://ahadshikder.com",
    };
}