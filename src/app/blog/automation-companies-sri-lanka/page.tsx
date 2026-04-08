import { Metadata } from "next";
import BlogPost from "./content";

export async function generateMetadata(): Promise<Metadata> {
    const post = {
        title: "Top Automation Companies in Sri Lanka | AI Agents vs Legacy RPA",
        excerpt: "Traditional RPA bots are fragile. Learn why the top automation companies in Sri Lanka are upgrading to Semantic AI Agents to build unbreakable workflows.",
        featuredImage: "https://www.arcai.agency/arc-ai-automation-sri-lanka.webp"
    };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://www.arcai.agency/blog/automation-companies-sri-lanka`,
            locale: "en_GB",
            images: [
                {
                    url: post.featuredImage,
                    width: 1200,
                    height: 630,
                    alt: "Futuristic AI Semantic Workflow Automation",
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
            canonical: `https://www.arcai.agency/blog/automation-companies-sri-lanka`,
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
