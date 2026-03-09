# Astro

[Astro](https://astro.build) is a static site generator designed to create fast, optimized websites by default. Unlike traditional static site generators, Astro allows you to use any front-end framework like React, Vue, Svelte, or even vanilla JavaScript, without adding unnecessary client-side JavaScript. The result? Lightning-fast websites with minimal bloat.

## 🏝️ Island Architecture

Astro's Island Architecture treats interactive components as isolated "islands," loading JavaScript only for those parts. This keeps the rest of your site static, ensuring fast load times and minimal bloat.

### 🛣️ Routing

Astro's file-based routing is straightforward:

- **Pages as Files**: Every file in `src/pages` maps directly to a route.
- **Nested Routes**: Organize files in directories for nested routes.
- **Dynamic Routes**: Use `[slug].astro` for dynamic URL segments.

## 🧩 Components

Astro seamlessly integrates components from any framework. Import and use React, Vue, or Svelte components within `.astro` files, with Astro handling rendering and hydration efficiently.

## 💻 Getting Started

1. **Installation:**

:::code-group

```bash[npm]
npm create astro@latest
```

```bash[pnpm]
pnpm create astro@latest
```

```bash[yarn]
yarn create astro
```

```bash[bun]
bun create astro@latest
```

:::
