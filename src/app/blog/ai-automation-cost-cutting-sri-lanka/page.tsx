
import { Metadata } from "next";
import BlogPost from "./content";

export async function generateMetadata(): Promise<Metadata> {
    const post = {
        title: "AI Automation in Sri Lanka: Cut Costs, Reduce Headcount, and Scale Fast | ARC AI",
        excerpt: "AI Automation is the newest competitive advantage for Sri Lankan businesses. Learn how automating repetitive tasks can drastically reduce your operational costs and human resource dependencies.",
        featuredImage: "/ai-automation-lk.png"
    };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://www.arcai.agency/blog/ai-automation-cost-cutting-sri-lanka`,
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
            canonical: `https://www.arcai.agency/blog/ai-automation-cost-cutting-sri-lanka`,
        },
    };
}

export default function Page() {
    return <BlogPost />;
}
