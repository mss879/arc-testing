
import { Metadata } from "next";
import BlogPost from "./content";

export async function generateMetadata(): Promise<Metadata> {
    const post = {
        title: "Best AI Chatbots for Sri Lankan Businesses (2026) | ARC AI",
        excerpt: "Discover the best AI chatbots for Sri Lankan businesses in 2026. Learn how AI chatbots in Sinhala, Tamil & English are transforming customer service for top AI companies in Sri Lanka.",
        featuredImage: "/ai-automation-lk.png"
    };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: "https://www.arcai.agency/blog/ai-chatbots-sri-lankan-businesses",
            locale: "en_LK",
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
            canonical: "https://www.arcai.agency/blog/ai-chatbots-sri-lankan-businesses",
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
