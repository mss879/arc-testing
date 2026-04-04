
import { Metadata } from "next";
import BlogPost from "./content";

export async function generateMetadata(): Promise<Metadata> {
    const post = {
        title: "How AI Is Revolutionising Tourism in Sri Lanka (2026) | ARC AI",
        excerpt: "Learn how AI companies in Sri Lanka are transforming the tourism industry with AI chatbots, automated booking systems, and multilingual guest experiences. Real case studies and ROI data.",
        featuredImage: "/ai-automation-lk.png"
    };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: "https://www.arcai.agency/blog/ai-for-tourism-sri-lanka",
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
            canonical: "https://www.arcai.agency/blog/ai-for-tourism-sri-lanka",
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
