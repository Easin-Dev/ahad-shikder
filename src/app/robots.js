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