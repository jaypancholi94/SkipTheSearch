import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
import wikilinks from "markdown-it-wikilinks";
import { withMermaid } from "vitepress-plugin-mermaid";
import { SitemapStream } from "sitemap";
import { createWriteStream } from "node:fs";
import { resolve } from "node:path";

const siteUrl = "https://spellbook.muggleborn.dev";

export default withMermaid({
  ...defineConfig({
    title: "SpellBook",
    titleTemplate: "Explore. Capture. Elevate. 🚀",
    description:
      "SpellBook is a comprehensive developer handbook for modern web engineering. Discover practical guides, best practices, and real-world patterns across JavaScript, TypeScript, React, Vue.js, Git, AWS, and more. Your personal knowledge base for mastering web development.",
    lang: "en-US",
    head: [
      [
        "meta",
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      ],
      ["meta", { name: "theme-color", content: "#3eaf7c" }],
      ["meta", { name: "author", content: "Jay Pancholi" }],
      [
        "meta",
        {
          name: "keywords",
          content:
            "web development, JavaScript, TypeScript, React, Vue.js, Git, AWS, developer handbook, programming guides, best practices, frontend development, backend development",
        },
      ],

      // Open Graph
      ["meta", { property: "og:type", content: "website" }],
      ["meta", { property: "og:site_name", content: "SpellBook" }],
      [
        "meta",
        {
          property: "og:title",
          content: "SpellBook - Developer Handbook for Modern Web Engineering",
        },
      ],
      [
        "meta",
        {
          property: "og:description",
          content:
            "Comprehensive developer handbook featuring practical guides, best practices, and real-world patterns across JavaScript, TypeScript, React, Vue.js, Git, AWS, and more.",
        },
      ],
      ["meta", { property: "og:url", content: siteUrl }],
      ["meta", { property: "og:image", content: `${siteUrl}/og-image.png` }],
      ["meta", { property: "og:image:width", content: "1200" }],
      ["meta", { property: "og:image:height", content: "630" }],

      // Twitter Card
      ["meta", { name: "twitter:card", content: "summary_large_image" }],
      [
        "meta",
        {
          name: "twitter:title",
          content: "SpellBook - Developer Handbook for Modern Web Engineering",
        },
      ],
      [
        "meta",
        {
          name: "twitter:description",
          content:
            "Comprehensive developer handbook featuring practical guides, best practices, and real-world patterns across the full web development stack.",
        },
      ],
      ["meta", { name: "twitter:image", content: `${siteUrl}/og-image.png` }],
      ["meta", { name: "twitter:creator", content: "@jaypancholi94" }],

      // Additional SEO
      [
        "script",
        {
          async: "",
          src: "https://www.googletagmanager.com/gtag/js?id=G-KEH7XC8FNF",
        },
      ],
      [
        "script",
        {},
        `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-KEH7XC8FNF');`,
      ],
      ["link", { rel: "icon", href: "/spellbook.png" }],

      // Structured Data (JSON-LD)
      [
        "script",
        { type: "application/ld+json" },
        JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "SpellBook",
          description:
            "Comprehensive developer handbook for modern web engineering",
          url: siteUrl,
          author: {
            "@type": "Person",
            name: "Jay Pancholi",
            url: "https://muggleborn.dev",
            sameAs: [
              "https://github.com/jaypancholi94",
              "https://www.linkedin.com/in/jay-pancholi",
            ],
          },
          publisher: {
            "@type": "Organization",
            name: "MuggleBorn",
            url: "https://muggleborn.dev",
          },
        }),
      ],
    ],
    transformHead: ({ pageData }) => {
      const canonicalUrl = `${siteUrl}/${pageData.relativePath}`
        .replace(/\.md$/, "")
        .replace(/index$/, "");

      const head: any[] = [["link", { rel: "canonical", href: canonicalUrl }]];

      // Add page-specific Open Graph tags
      if (pageData.frontmatter.title) {
        head.push([
          "meta",
          { property: "og:title", content: pageData.frontmatter.title },
        ]);
      }
      if (pageData.frontmatter.description) {
        head.push([
          "meta",
          {
            property: "og:description",
            content: pageData.frontmatter.description,
          },
        ]);
        head.push([
          "meta",
          { name: "description", content: pageData.frontmatter.description },
        ]);
      }
      head.push(["meta", { property: "og:url", content: canonicalUrl }]);

      return head;
    },
    themeConfig: {
      logo: "/spellbook.png",
      nav: [
        {
          text: "MuggleBorn",
          link: "https://muggleborn.dev",
        },
        {
          text: "Changelog",
          link: "https://github.com/jaypancholi94/spellbook/commits/main",
        },
      ],
      sidebar: generateSidebar({
        documentRootPath: "docs/",
        sortMenusByName: true,
      }),
      outline: [2, 3],
      search: {
        provider: "local",
      },
      externalLinkIcon: true,
      socialLinks: [
        { icon: "github", link: "https://github.com/jaypancholi94" },
        { icon: "linkedin", link: "https://www.linkedin.com/in/jay-pancholi" },
        { icon: "instagram", link: "https://www.instagram.com/_jaypancholi_/" },
        { icon: "discord", link: "https://www.discordapp.com/users/w4r10ck" },
        { icon: "facebook", link: "https://www.facebook.com/Jay.D.Pancholi/" },
      ],
    },
    ignoreDeadLinks: true,
    markdown: {
      config: (md) => {
        md.use(
          wikilinks({
            baseURL: "/",
            postProcessPageName: (label) => label.trim().replace(/\s/g, "%20"),
          }),
        );
      },
    },
    buildEnd: async ({ outDir }) => {
      const sitemap = new SitemapStream({ hostname: siteUrl });
      const writeStream = createWriteStream(resolve(outDir, "sitemap.xml"));
      sitemap.pipe(writeStream);

      const { readdirSync, statSync } = await import("node:fs");
      const { join } = await import("node:path");

      // Function to recursively get all .html files from dist
      const getAllPages = (dir: string, baseDir: string = dir): string[] => {
        const files: string[] = [];
        const items = readdirSync(dir);

        items.forEach((item) => {
          const fullPath = join(dir, item);
          const stat = statSync(fullPath);

          if (stat.isDirectory()) {
            files.push(...getAllPages(fullPath, baseDir));
          } else if (item.endsWith(".html")) {
            // Convert file path to URL path
            const relativePath = fullPath
              .replace(baseDir, "")
              .replace(/\\/g, "/")
              .replace(/\.html$/, "")
              .replace(/\/index$/, "/");
            files.push(relativePath || "/");
          }
        });

        return files;
      };

      // Get all pages from dist directory
      const allPages = getAllPages(outDir);

      // Define priority and changefreq for different page types
      allPages.forEach((url) => {
        let priority = 0.6; // Default priority
        let changefreq = "monthly";

        // Homepage gets highest priority
        if (url === "/") {
          priority = 1.0;
          changefreq = "weekly";
        }
        // Important pages
        else if (["/About", "/Who%20Am%20I"].includes(url)) {
          priority = 0.8;
          changefreq = "monthly";
        }
        // Category/framework pages
        else if (
          url.includes("/React") ||
          url.includes("/TypeScript") ||
          url.includes("/Git/Git") ||
          url.includes("/Lambda") ||
          url.includes("/GraphQL") ||
          url.includes("/ESLint")
        ) {
          priority = 0.8;
          changefreq = "monthly";
        }

        sitemap.write({ url, changefreq, priority });
      });

      sitemap.end();

      await new Promise((resolve) => writeStream.on("finish", resolve));
    },
  }),
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container
  },
});
