import { defineConfig } from "vitepress"
import { generateSidebar } from "vitepress-sidebar"
import wikilinks from "markdown-it-wikilinks"
import { withMermaid } from "vitepress-plugin-mermaid"

const siteUrl = "https://spellbook.muggleborn.dev"

export default withMermaid({
  ...defineConfig({
    title: "SpellBook",
    titleTemplate: ":title | SpellBook",
    description:
      "SpellBook is a comprehensive developer handbook for modern web engineering. Discover practical guides, best practices, and real-world patterns across JavaScript, TypeScript, React, Vue.js, Git, AWS, and more. Your personal knowledge base for mastering web development.",
    lang: "en-US",
    cleanUrls: true,
    lastUpdated: true,
    head: [
      ["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }],
      ["meta", { name: "theme-color", content: "#5fa8b5" }],
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
      ["meta", { property: "og:image", content: `${siteUrl}/spellbook.png` }],
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
      ["meta", { name: "twitter:image", content: `${siteUrl}/spellbook.png` }],
      ["meta", { name: "twitter:creator", content: "@jaypancholi94" }],

      // Google Analytics
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

      // Google Fonts — Manrope (body), Bricolage Grotesque (headings), JetBrains Mono (code)
      ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
      ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
      [
        "link",
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Manrope:wght@200..800&display=swap",
        },
      ],

      // Structured Data (JSON-LD)
      [
        "script",
        { type: "application/ld+json" },
        JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "SpellBook",
          description: "Comprehensive developer handbook for modern web engineering",
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
        .replace(/index$/, "")

      const head: any[] = [["link", { rel: "canonical", href: canonicalUrl }]]

      // Add page-specific Open Graph tags
      if (pageData.frontmatter.title) {
        head.push(["meta", { property: "og:title", content: pageData.frontmatter.title }])
      }
      if (pageData.frontmatter.description) {
        head.push([
          "meta",
          {
            property: "og:description",
            content: pageData.frontmatter.description,
          },
        ])
        head.push(["meta", { name: "description", content: pageData.frontmatter.description }])
      }
      head.push(["meta", { property: "og:url", content: canonicalUrl }])

      return head
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
        useFolderLinkFromIndexFile: true,
        // useFolderTitleFromIndexFile: true,
        useTitleFromFileHeading: true,
      }),
      outline: [2, 3],
      search: {
        provider: "local",
      },
      lastUpdated: {
        text: "Last updated",
        formatOptions: {
          dateStyle: "medium",
          timeStyle: "short",
        },
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
            postProcessPageName: (label: string) => label.trim().replace(/\s/g, "%20"),
          }),
        )
      },
    },
    sitemap: {
      hostname: siteUrl,
      transformItems: (items) =>
        items.map((item) => {
          let priority = 0.6
          let changefreq: "weekly" | "monthly" = "monthly"

          if (item.url === "" || item.url === "/") {
            priority = 1.0
            changefreq = "weekly"
          } else if (["/About", "/Who%20Am%20I"].some((p) => item.url.includes(p))) {
            priority = 0.8
          } else if (
            ["/React", "/TypeScript", "/Git/Git", "/Lambda", "/GraphQL", "/ESLint"].some((p) =>
              item.url.includes(p),
            )
          ) {
            priority = 0.8
          }

          return { ...item, changefreq, priority }
        }),
    },
  }),
  mermaidPlugin: {
    class: "mermaid my-class",
  },
})
