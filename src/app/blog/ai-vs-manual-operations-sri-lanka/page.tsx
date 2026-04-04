
import { Metadata } from "next";
import BlogPost from "./content";

export async function generateMetadata(): Promise<Metadata> {
    const post = {
        title: "AI vs Manual Operations: Cost Comparison for Sri Lankan Businesses | ARC AI",
        excerpt: "A detailed cost comparison of AI automation vs manual operations for Sri Lankan businesses. See real ROI data from top AI companies in Sri Lanka and calculate your potential savings.",
        featuredImage: "/ai-automation-lk.png"
    };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: "https://www.arcai.agency/blog/ai-vs-manual-operations-sri-lanka",
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
            canonical: "https://www.arcai.agency/blog/ai-vs-manual-operations-sri-lanka",
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
