import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog - Digital Marketing & AI Insights",
    description: "Explore cutting-edge insights on AI automation, digital marketing strategies, web design trends, and business growth tactics from ARC AI experts.",
    keywords: [
        "digital marketing blog", "AI automation insights", "web design trends",
        "marketing strategies", "business growth", "AI technology", "SEO tips",
        "content marketing", "social media marketing", "automation guides"
    ],
    openGraph: {
        title: "Blog - Digital Marketing & AI Insights",
        description: "Explore cutting-edge insights on AI automation, digital marketing strategies, and business growth tactics.",
        url: "https://www.arcai.agency/blog",
        type: "website",
        images: [{
            url: "https://www.arcai.agency/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "ARC AI Blog"
        }]
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog - Digital Marketing & AI Insights",
        description: "Explore cutting-edge insights on AI automation and digital marketing",
        images: ["https://www.arcai.agency/og-image.jpg"]
    },
    alternates: {
        canonical: "https://www.arcai.agency/blog"
    }
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
