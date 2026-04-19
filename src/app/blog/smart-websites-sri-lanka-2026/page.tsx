
import { Metadata } from "next";
import BlogPost from "./content";

export async function generateMetadata(): Promise<Metadata> {
    const post = {
        title: "Smart Websites in Sri Lanka: The Complete Guide for 2026 | Features, Costs & Companies",
        excerpt: "Everything Sri Lankan businesses need to know about smart websites — what they are, key features, costs, industry use cases, SEO benefits, and how to choose the right smart website company in Sri Lanka.",
        featuredImage: "/smart-website-sri-lanka.png"
    };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://www.arcai.agency/blog/smart-websites-sri-lanka-2026`,
            locale: "en_GB",
            type: "article",
            images: [
                {
                    url: `https://www.arcai.agency${post.featuredImage}`,
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
            images: [`https://www.arcai.agency${post.featuredImage}`],
        },
        alternates: {
            canonical: `https://www.arcai.agency/blog/smart-websites-sri-lanka-2026`,
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
