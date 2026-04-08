import { Metadata } from "next";
import BlogPost from "./content";

export async function generateMetadata(): Promise<Metadata> {
    const post = {
        title: "Smart Websites in Sri Lanka: The Future of Digital Business | ARC AI",
        excerpt: "Learn why smart websites in Sri Lanka are the future of digital business. Upgrade from a static site to an AI-powered 24/7 sales engine today to dominate your market.",
        featuredImage: "https://www.arcai.agency/blog-smart-websites.webp"
    };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://www.arcai.agency/blog/websites-vs-smart-websites-sri-lanka`,
            locale: "en_GB",
            images: [
                {
                    url: post.featuredImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            site: "@arcaiagency",
            creator: "@arcaiagency",
            title: post.title,
            description: post.excerpt,
            images: [post.featuredImage],
        },
        alternates: {
            canonical: `https://www.arcai.agency/blog/websites-vs-smart-websites-sri-lanka`,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

export default function Page() {
    return <BlogPost />;
}
