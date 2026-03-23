import { MetadataRoute } from 'next';
import * as fs from 'fs';
import * as path from 'path';

export const dynamic = 'force-static';

/**
 * Scans a directory under src/app/ for subdirectories that contain a page.tsx.
 * Returns an array of { slug, lastModified } for each discovered page.
 */
function discoverPages(subDir: string): { slug: string; lastModified: Date }[] {
    const dirPath = path.join(process.cwd(), 'src', 'app', subDir);

    // Safety: if directory doesn't exist, return empty
    if (!fs.existsSync(dirPath)) return [];

    return fs
        .readdirSync(dirPath, { withFileTypes: true })
        .filter((entry) => {
            // Only directories that contain a page.tsx (actual routes)
            if (!entry.isDirectory()) return false;
            const pagePath = path.join(dirPath, entry.name, 'page.tsx');
            return fs.existsSync(pagePath);
        })
        .map((entry) => {
            const pagePath = path.join(dirPath, entry.name, 'page.tsx');
            const stats = fs.statSync(pagePath);
            return {
                slug: entry.name,
                lastModified: stats.mtime,
            };
        });
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.arcai.agency';

    // ─── Static pages ────────────────────────────────────────────
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/careers`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms-of-service`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/ai-pricing`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/web-pricing`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    // ─── Service pages (auto-discovered) ─────────────────────────
    const servicePages: MetadataRoute.Sitemap = discoverPages('services').map(
        ({ slug, lastModified }) => ({
            url: `${baseUrl}/services/${slug}`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        })
    );

    // ─── Blog posts (auto-discovered) ────────────────────────────
    const blogPages: MetadataRoute.Sitemap = discoverPages('blog').map(
        ({ slug, lastModified }) => ({
            url: `${baseUrl}/blog/${slug}`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })
    );

    return [...staticPages, ...servicePages, ...blogPages];
}
