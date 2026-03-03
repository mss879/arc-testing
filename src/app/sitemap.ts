import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.arcai.agency';

    // Static pages with real content dates (not file system timestamps)
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}`,
            lastModified: new Date('2026-03-04'),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date('2026-03-04'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: new Date('2026-03-04'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date('2026-03-04'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date('2026-03-04'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date('2026-03-04'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
    ];

    // Service pages
    const servicePages: MetadataRoute.Sitemap = [
        'web-design-development',
        'ai-chatbots',
        'ai-automated-workflows',
        'ai-content-generation',
        'branding',
        'custom-backend',
        'motion-design',
        'smart-funnels',
        'social-media',
        'web-apps',
    ].map(slug => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date('2026-03-04'),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    // Blog posts with their actual publish dates
    const blogPages: MetadataRoute.Sitemap = [
        { slug: 'ai-agents-sri-lanka', date: '2024-10-01' },
        { slug: 'ai-analytics-business-intelligence', date: '2024-11-01' },
        { slug: 'ai-automation-transform-business-2024', date: '2024-09-01' },
        { slug: 'ai-chatbots-customer-service', date: '2024-08-01' },
        { slug: 'ai-content-generation-marketing', date: '2024-07-01' },
        { slug: 'digital-marketing-strategies-2024', date: '2024-06-01' },
        { slug: 'email-marketing-automation', date: '2024-05-01' },
        { slug: 'influencer-marketing-strategy', date: '2024-04-01' },
        { slug: 'marketing-analytics-dashboard', date: '2024-03-01' },
        { slug: 'seo-optimization-best-practices', date: '2024-12-01' },
        { slug: 'social-media-marketing-guide', date: '2024-02-01' },
        { slug: 'video-marketing-2025', date: '2025-01-01' },
        { slug: 'websites-vs-smart-websites-sri-lanka', date: '2025-03-01' },
        { slug: 'workflow-automation-tools-2024', date: '2024-01-01' },
        { slug: 'smart-websites-sri-lanka-2026', date: '2026-03-04' },
        { slug: 'ai-customer-service-agent-sri-lanka', date: '2026-03-04' },
        { slug: 'ai-automation-cost-cutting-sri-lanka', date: '2026-03-04' },
    ].map(({ slug, date }) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticPages, ...servicePages, ...blogPages];
}
