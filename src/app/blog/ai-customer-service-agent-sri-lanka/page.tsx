
import { Metadata } from "next";
import BlogPost from "./content";

export async function generateMetadata(): Promise<Metadata> {
    const post = {
        title: "The Ultimate AI Customer Service Agent for Sri Lankan Businesses | ARC AI",
        excerpt: "See how the AI agent on our website works and why it is the perfect 24/7 customer service solution for businesses in Sri Lanka to handle inquiries instantly.",
        featuredImage: "/ai-agent-cs-lk.png"
    };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://www.arcai.agency/blog/ai-customer-service-agent-sri-lanka`,
            locale: "en_GB",
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
            canonical: `https://www.arcai.agency/blog/ai-customer-service-agent-sri-lanka`,
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
