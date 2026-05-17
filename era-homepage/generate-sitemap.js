import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

// Replace with your actual domain
const sitemap = new SitemapStream({ hostname: "https://yourdomain.com" });

// List all pages of your site
const pages = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/vendors", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
];

pages.forEach(page => sitemap.write(page));
sitemap.end();

streamToPromise(sitemap).then(data => {
  writeFileSync("public/sitemap.xml", data.toString());
  console.log("Sitemap generated successfully!");
});