
import { Metadata } from "next";
import BlogPost from "./content";

export async function generateMetadata(): Promise<Metadata> {
    const post = {
        title: "How AI Companies in Sri Lanka Are Transforming Key Industries (2026) | ARC AI",
        excerpt: "Discover how AI companies in Sri Lanka are revolutionising tourism, real estate, e-commerce, healthcare, and manufacturing with custom AI solutions, chatbots, and automation.",
        featuredImage: "/ai_key_industries_blog.webp"
    };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: "https://www.arcai.agency/blog/ai-solutions-sri-lankan-industries",
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
            canonical: "https://www.arcai.agency/blog/ai-solutions-sri-lankan-industries",
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
