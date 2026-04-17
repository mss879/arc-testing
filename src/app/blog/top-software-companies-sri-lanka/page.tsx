import { Metadata } from "next";
import BlogPost from "./content";

export async function generateMetadata(): Promise<Metadata> {
    const post = {
        title: "Top 10 Software Companies in Sri Lanka (2026 Guide) | ARC AI",
        excerpt: "A complete guide to the top 10 software companies in Sri Lanka for 2026. Compare services, technologies, and find the perfect development partner for your next project.",
        featuredImage: "/arc-ai-software-company-sri-lanka.webp"
    };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://www.arcai.agency/blog/top-software-companies-sri-lanka`,
            locale: "en_GB",
            images: [
                {
                    url: "https://www.arcai.agency" + post.featuredImage,
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
            images: ["https://www.arcai.agency" + post.featuredImage],
        },
        alternates: {
            canonical: `https://www.arcai.agency/blog/top-software-companies-sri-lanka`,
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default function Page() {
    return <BlogPost />;
}
