import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";
import { createRequire } from "module";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const config = require("../next-sitemap.config.js");
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const blogDir = path.join(rootDir, "content", "blog");
const publicDir = path.join(rootDir, "public");
const cliPath = path.join(rootDir, "node_modules", ".bin", "next-sitemap");

if (fs.existsSync(cliPath)) {
  const result = spawnSync(cliPath, { cwd: rootDir, stdio: "inherit", shell: true });

  if (result.status === 0) {
    process.exit(0);
  }
}

const staticRoutes = [
  "/",
  "/about",
  "/services",
  "/services/coaching",
  "/services/web",
  "/services/ai",
  "/blog",
  "/contact"
];

const blogRoutes = fs
  .readdirSync(blogDir)
  .filter((file) => file.endsWith(".mdx"))
  .map((file) => `/blog/${file.replace(/\.mdx$/, "")}`);

const urls = [...staticRoutes, ...blogRoutes];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => {
    const location = new URL(url, config.siteUrl).toString();
    return `  <url>
    <loc>${location}</loc>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${config.priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap.xml", config.siteUrl).toString()}
`;

fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);

if (config.generateRobotsTxt) {
  fs.writeFileSync(path.join(publicDir, "robots.txt"), robots);
}
