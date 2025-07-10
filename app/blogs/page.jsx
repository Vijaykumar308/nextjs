import Link from "next/link";

const Blogs = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Understanding React Server Components",
            slug: "understanding-react-server-components",
            description: `React Server Components (RSC) are a new type of component that allows developers to offload rendering logic to the server. This means less JavaScript shipped to the client, improving performance and load times. Server components can fetch data, access secure backends, and return ready-to-render HTML to the client. This leads to better SEO, faster initial loads, and simpler logic in some cases. They do not have state or event handlers and are meant to be used in conjunction with client components. This pattern is gaining traction in modern React apps, especially those using Next.js App Router. React Server Components represent a paradigm shift, focusing on separating concerns between UI interaction and data fetching. They reduce bundle sizes and enable developers to use server-only logic in the component tree. Understanding when and how to use RSCs will be crucial as the ecosystem evolves. With React and Next.js continuing to adopt this architecture, early familiarity will pay off for developers. You’ll see RSCs used heavily in modern full-stack React apps built on the server-first principle.`
        },
        {
            id: 2,
            title: "Getting Started with Next.js 14",
            slug: "getting-started-with-nextjs-14",
            description: `Next.js 14 introduces many improvements to the App Router, performance optimizations, and a simplified developer experience. With new defaults like Server Components, enhanced support for layouts, and better TypeScript integration, it’s a great time to start learning. This guide will walk you through creating your first Next.js 14 project, exploring file structure, routing, and rendering strategies. You'll set up a home page, dynamic routes, and API endpoints using built-in capabilities. We'll also introduce key features like metadata generation, middleware, and streaming. By the end, you'll have a functional app and the confidence to build more. Next.js 14 emphasizes simplicity, speed, and developer productivity, especially for full-stack development. Whether you're building a personal blog or a complex SaaS app, Next.js provides the tools and architecture needed to scale. This version is especially great for newcomers because of its clear structure and opinionated patterns.`
        },
        {
            id: 3,
            title: "Optimizing Web Performance with Lighthouse",
            slug: "optimizing-web-performance-lighthouse",
            description: `Lighthouse is an open-source tool by Google that audits web performance, accessibility, best practices, SEO, and more. By using it to analyze your pages, you can discover bottlenecks like large images, unused JavaScript, or blocking resources. Performance matters for user retention and search ranking, so running Lighthouse regularly is a good habit. This post guides you through interpreting a Lighthouse report, from performance scores to actionable insights. We'll also look at tools to automate audits in CI/CD and integrate them with your development workflow. You’ll learn how to fix common issues like render-blocking assets, inefficient CSS, and slow server responses. Even minor improvements in Core Web Vitals can lead to significant gains. The post covers how to use Lighthouse via Chrome DevTools, the CLI, and programmatically in Node. You’ll also learn about common misconceptions, like chasing perfect scores vs. meaningful improvements.`
        },
        {
            id: 4,
            title: "Deploying Next.js on Vercel",
            slug: "deploying-nextjs-on-vercel",
            description: `Vercel is the official hosting platform for Next.js and provides seamless integration with GitHub, GitLab, or Bitbucket. With zero configuration, your project can be deployed with CI/CD, previews, and custom domains. This post will guide you through deploying your first Next.js app to Vercel, including how to set up environment variables, configure domains, and optimize caching strategies. You’ll see how features like Incremental Static Regeneration (ISR) and edge functions are natively supported. We'll also explore how Vercel handles serverless functions, CDN-level caching, and analytics. The deployment process is beginner-friendly, yet powerful enough for large teams. This guide assumes you have a Git repo ready and walks you through connecting it to Vercel’s dashboard. With just a few clicks, your app is live and backed by a global infrastructure. You'll also learn how to set up preview environments for pull requests.`
        },
        {
            id: 5,
            title: "Building a Blog with Markdown in Next.js",
            slug: "building-blog-markdown-nextjs",
            description: `Markdown is a lightweight format perfect for writing content like blog posts. With Next.js, you can easily build a static blog that loads markdown files as content sources. This guide walks you through setting up markdown loading, parsing with \`gray-matter\`, and rendering HTML via \`remark\`. You’ll build dynamic routes based on file slugs and display metadata like title and date. We’ll also cover syntax highlighting with \`rehype-highlight\`, styling with Tailwind CSS, and SEO tips for markdown-based blogs. You’ll learn file organization strategies and how to load content at build time using \`getStaticProps\`. This results in a blazing-fast blog that’s easy to manage and scale. Bonus: markdown content is portable and version-controllable, making it ideal for developers. This is a great starter project for learning Next.js file system routing, static generation, and component composition.`
        },
        {
            id: 6,
            title: "API Routes in Next.js Explained",
            slug: "api-routes-in-nextjs",
            description: `API routes in Next.js allow you to build your backend logic directly inside your application. You can define routes under the \`pages/api\` directory and handle requests like GET, POST, PUT, or DELETE. This makes Next.js a full-stack framework. In this guide, we’ll explain the folder structure and how to write simple API endpoints. You’ll learn how to work with request and response objects, access query parameters, and connect to databases. We'll also explore middleware patterns, error handling, and using third-party APIs. Whether you’re building an internal admin tool or public-facing REST API, Next.js simplifies serverless function development. You’ll also see how to protect routes with authentication and rate-limiting techniques. Finally, we'll cover how Vercel or other hosts handle these API routes under the hood as serverless functions. It's a powerful feature for small projects and scalable enough for production apps.`
        },
        {
            id: 7,
            title: "Incremental Static Regeneration (ISR) Basics",
            slug: "incremental-static-regeneration-basics",
            description: `Incremental Static Regeneration (ISR) allows you to update static pages after build time—without rebuilding the whole app. ISR lets you get the best of both worlds: the speed of static pages and the flexibility of dynamic content. In this post, we’ll explain how ISR works using \`revalidate\` in \`getStaticProps\`. You’ll see how pages are regenerated on the server in the background and served once they’re ready. This allows for near-instant updates to blog posts, product pages, or documentation. We’ll walk through use cases, setup, and strategies for fallback handling. ISR is especially useful for large-scale apps where rebuilding everything frequently isn’t practical. You’ll also learn performance and SEO benefits, how to trigger revalidation manually, and what to watch out for. By the end, you'll understand why ISR is a game-changer in the static vs. dynamic rendering conversation.`
        },
        {
            id: 8,
            title: "Dynamic Routing in Next.js",
            slug: "dynamic-routing-in-nextjs",
            description: `Dynamic routing allows you to create flexible routes in your Next.js app using file and folder naming conventions. In this tutorial, you'll learn how to use dynamic segments like \`[slug].js\` to handle URLs like \`/blog/my-post\`. We’ll show how to use \`getStaticPaths\` and \`getStaticProps\` for static generation, and also how to handle fallback routes. You’ll see how dynamic pages work for blog posts, user profiles, and product listings. We’ll also discuss the difference between optional and catch-all routes. Whether you’re building a content-driven site or an e-commerce platform, dynamic routes are essential for scalability. We'll add real data fetching from local markdown or external APIs to make the examples more realistic. Finally, we'll troubleshoot common issues like 404s, loading states, and parameter mismatches. Mastering dynamic routing is foundational for building powerful apps in Next.js.`
        },
        {
            id: 9,
            title: "Using SWR for Data Fetching",
            slug: "using-swr-for-data-fetching",
            description: `SWR (stale-while-revalidate) is a React hook library by Vercel that simplifies data fetching. It offers features like caching, revalidation, focus tracking, and request deduplication out of the box. In this guide, you’ll learn how to use \`useSWR\` in a Next.js project to fetch data from REST APIs or GraphQL endpoints. We’ll cover the core concepts and why SWR is a great choice over manual fetch logic or Redux for remote data. You’ll build components that update automatically when the data changes, either in the background or via revalidation intervals. We’ll also cover how to handle loading states, errors, and conditional fetching. SWR pairs well with Next.js App Router or Pages Router and supports TypeScript. For advanced use, we’ll show how to mutate local cache optimistically and how to use middleware to inject auth tokens or transform responses.`
        },
        {
            id: 10,
            title: "Tailwind CSS with Next.js",
            slug: "tailwind-css-with-nextjs",
            description: `Tailwind CSS is a utility-first CSS framework that pairs perfectly with Next.js. It enables rapid UI development with pre-defined class names instead of writing custom CSS. In this tutorial, we’ll show how to install Tailwind in a Next.js app, configure it for custom themes, and use it with both Server and Client Components. You’ll build a responsive layout with header, footer, and dynamic content cards. We'll cover dark mode support, responsive utilities, hover states, and animations. Tailwind’s JIT engine ensures you only ship the styles you use, making apps fast. We’ll also look at best practices for component composition and keeping your Tailwind config maintainable. Finally, we’ll demonstrate how to use Tailwind plugins for forms, typography, and aspect ratio. This setup is ideal for both beginners and production-grade apps that need speed and design flexibility.`
        }
    ];

    const truncateString = (str, maxWords) => {
        if (str.length <= maxWords) return str;
        const trucatedStr = str.slice(0, maxWords);
        const result = trucatedStr.slice(0, trucatedStr.lastIndexOf(' ')) + '...';
        return result;
    }

    return (
        <>
        <div>Blogs</div>
        {
            blogPosts.map((items) => {
                   return <div  key={items.id} className="border-2 mt-2">
                        <h1 className="text-2xl font-bold">{items.id+" "+items.title}</h1>
                        <p>{truncateString(items.description, 500)}</p>
                        <p className="my-2"><span className="font-bold">Link:</span> <Link href={'blogs/'+items.slug} >{items.title}</Link></p>
                    </div>
                
                })
        }
        </>
    )
}

export default Blogs