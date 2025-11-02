/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://www.sanjaikumar.tech",
    generateRobotsTxt: true,
    sitemapSize: 7000, // Adjust if you have a large number of URLs
    // Enable this option to include images in the sitemap
    generateImageSitemap: true,
    exclude: ["/404"],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: "*",
          allow: "/",
          disallow: ["/_next", "/api"],
        },
      ],
      additionalSitemaps: [
        "https://www.sanjaikumar.tech/sitemap-0.xml",
      ]
    }
  };
  