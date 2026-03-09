# Next.js

**[Next.js](https://nextjs.org/)** is a [[React]] framework that makes building full-stack web applications easier. With Next.js, you get the power of server-side rendering (SSR), static site generation (SSG), and API routes out of the box. It’s like React with superpowers 🦸‍♀️.

## 🔍 Differences Between Next.js and React

Before diving deep, let’s see how Next.js differs from React:

### 🆚 React vs. Next.js

| Feature          | React                                    | Next.js                                     |
| ---------------- | ---------------------------------------- | ------------------------------------------- |
| Rendering        | Client-Side Rendering (CSR) by default   | Supports SSR, SSG, ISR, and CSR             |
| Routing          | Manual via `react-router` or similar     | File-based routing system                   |
| API Handling     | Needs external services like Express     | API routes built into the framework         |
| SEO Optimization | Needs additional libraries and setup     | Built-in SEO optimizations                  |
| Static Exporting | Needs third-party tools                  | Built-in static site generation             |
| Performance      | Fully client-side, can be slower on load | Server-side rendering for faster load times |

Next.js builds on React but simplifies the developer experience with powerful built-in features.

## 📦 Next.js Basics

### 1. **Page Routing**

Unlike React, where you have to manually configure routing using libraries like `react-router`, Next.js comes with **file-based routing**. This means that every file you create in the `pages/` directory becomes a route automatically.

- `pages/index.js` → Accessible at `/`
- `pages/about.js` → Accessible at `/about`

#### Here’s how a simple file-based route might look

```JavaScript
// pages/about.js
export default function About() {
  return <h1>About Us</h1>;
}
```

When you visit `/about`, you’ll see the "About Us" page without any additional routing setup! This makes navigation in Next.js a breeze 🌀.

### 2. **App-Based Routing**

Starting with Next.js 13, we have a **new routing system** using the `app/` directory, also known as **App Router**. This system takes Next.js routing to the next level, offering more flexibility and features like **server-side components** and **nested layouts**.

Here’s what you get with the **App Router**:

#### File Structure

The `app/` directory handles routing similarly to the `pages/` directory but adds some powerful features:

- **`app/layout.js`**: A layout component that wraps your pages.
- **`app/page.js`**: Your actual page content.
- **Nested layouts and pages**: Create deeply nested routes and layouts seamlessly.

```bash
/app/
  ├── layout.js
  ├── page.js     → accessible at /
  ├── about/
  │   └── page.js → accessible at /about
```

### 3. **Pre-rendering**

Next.js pre-renders every page by default. This means the HTML for each page is generated in advance, improving SEO and performance 🏎️.

There are two types of pre-rendering:

- **Static Generation (SSG)**: Pages are generated at build time and reused for each request.
- **Server-Side Rendering (SSR)**: Pages are generated for each request on the server.

### 4. **CSS and Styling**

Next.js supports various styling options:

- **CSS Modules**: Locally scoped CSS.
- **Global Styles**
  - **Page Routing**: Place your global CSS in the `pages/_app.js`.
  - **App Routing**: Place your global CSS in `app/globals.css`.
- **Sass**: You can even use `.scss` files with minimal setup.

## 🏗️ More Concepts

### 1. **Dynamic and Nested Routing:**

You can also create dynamic routes by using square brackets in your file names, similar to how it works in the `pages/` directory.

```bash
/app/product/[id]/page.js → Accessible at /product/123
```

And in the file:

```JavaScript
// app/product/[id]/page.js
export default function Product({ params }) {
  return <div>Product ID: {params.id}</div>;
}
```

### 2. **New Layout System**

In the **App Router**, you can create reusable layouts that persist across pages, offering a much more seamless user experience. Every folder can have a `layout.js` file.

```bash
/app/
  ├── layout.js        // main layout for the app
  ├── about/
  │   └── layout.js    // nested layout for /about routes
  │   └── page.js      // content for /about
```

The layout component is always rendered around your page components, making it a great way to manage consistent UI elements like navigation bars.

### 3. **API Routes**

No need for external Express servers! Next.js allows you to create **API routes** directly inside the `/pages/api` directory.

```JavaScript
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from API route!' });
}
```

Hit `/api/hello` in your browser, and boom 💥, you’ve got a working API!

## ✨ Final Thoughts

Next.js enhances the developer experience by bringing React into the full-stack domain. With file-based routing, built-in API routes, SSR, and SSG options, it’s the perfect tool for creating both static sites and dynamic applications. Whether you're starting with a simple landing page or a complex e-commerce platform, Next.js has your back.

In short:

- Next.js = React + SSR + File-based routing + API Routes + SEO goodies.
