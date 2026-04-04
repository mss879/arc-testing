
import { Metadata } from "next";
import BlogPost from "./content";

export async function generateMetadata(): Promise<Metadata> {
    const post = {
        title: "How AI Is Transforming Sri Lankan Businesses in 2026 — Real Results | ARC AI",
        excerpt: "See real case studies and ROI data showing how AI companies in Sri Lanka are delivering measurable results — from 167% booking increases to 60% cost reductions. Data-backed AI transformation guide.",
        featuredImage: "/ai-automation-lk.png"
    };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: "https://www.arcai.agency/blog/how-ai-transforms-sri-lanka-businesses-2026",
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
            canonical: "https://www.arcai.agency/blog/how-ai-transforms-sri-lanka-businesses-2026",
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
