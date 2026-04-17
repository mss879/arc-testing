import { Metadata } from "next";
import BlogPost from "./content";

export async function generateMetadata(): Promise<Metadata> {
    const post = {
        title: "Top Software Companies in Sri Lanka: Replacing Legacy Code with AI | ARC AI",
        excerpt: "Compare traditional enterprise legacy agencies in Sri Lanka with ARC AI. Learn why the top software companies in Sri Lanka use Serverless architecture and Edge AI.",
        featuredImage: "https://www.arcai.agency/arc-ai-software-company-sri-lanka.webp"
    };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://www.arcai.agency/blog/software-company-sri-lanka`,
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
            canonical: `https://www.arcai.agency/blog/software-company-sri-lanka`,
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
