export default function sitemap() {
    const baseUrl = "https://ahadshikder.com";

    // আজকের তারিখ (lastModified-এর জন্য)
    const today = new Date().toISOString();

    // Static pages
    const staticPages = [
        {
            url: `${baseUrl}/`,
            lastModified: today,
            changeFrequency: "weekly",
            priority: 1.0,          // Homepage — সর্বোচ্চ priority
        },
        {
            url: `${baseUrl}/about`,
            lastModified: today,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/roles`,
            lastModified: today,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/initiatives`,
            lastModified: today,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/15dofa`,
            lastModified: today,
            changeFrequency: "monthly",
            priority: 0.9,          // ১৫ দফা — গুরুত্বপূর্ণ পেজ
        },
        {
            url: `${baseUrl}/gallery`,
            lastModified: today,
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: today,
            changeFrequency: "daily",  // ব্লগ — সবচেয়ে বেশি update হয়
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: today,
            changeFrequency: "yearly",
            priority: 0.6,
        },
    ];

    // ── যদি ভবিষ্যতে dynamic blog posts থাকে ──
    // তখন এভাবে fetch করে add করুন:
    //
    // const posts = await fetch("https://your-api/posts").then(r => r.json());
    // const blogPages = posts.map((post) => ({
    //   url: `${baseUrl}/blog/${post.slug}`,
    //   lastModified: new Date(post.updatedAt).toISOString(),
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // }));
    //
    // return [...staticPages, ...blogPages];

    return staticPages;
}