
import { Metadata } from "next";
import BlogPost from "./content";

export async function generateMetadata(): Promise<Metadata> {
  const post = {
    title: "SEO Optimization Best Practices to Rank #1 on Google | ARC AI Blog",
    excerpt: "Master SEO in 2024 with our guide to ranking #1 on Google. Learn technical SEO, keyword research, and link building strategies.",
    featuredImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1600&auto=format&fit=crop&q=80"
  };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.arcai.agency/blog/seo-optimization-best-practices`,
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
      canonical: `https://www.arcai.agency/blog/seo-optimization-best-practices`,
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

