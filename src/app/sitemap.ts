import { MetadataRoute } from 'next'
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://pathfinderdefenceacademy.com'

    const routes = [
        { route: '', priority: 1.0 },
        { route: '/about', priority: 0.8 },
        { route: '/courses', priority: 0.9 },
        { route: '/courses/nda', priority: 0.9 },
        { route: '/courses/cds', priority: 0.9 },
        { route: '/courses/afcat', priority: 0.9 },
        { route: '/courses/ssb', priority: 0.9 },
        { route: '/courses/capf', priority: 0.8 },
        { route: '/courses/foundation', priority: 0.8 },
        { route: '/courses/sainik-school', priority: 0.8 },
        { route: '/courses/agniveer', priority: 0.8 },
        { route: '/results', priority: 0.8 },
        { route: '/gallery/photos', priority: 0.8 },
        { route: '/gallery/videos', priority: 0.8 },
        { route: '/study-material', priority: 0.8 },
        { route: '/branches', priority: 0.8 },
        { route: '/contact', priority: 0.8 },
        { route: '/blog', priority: 0.9 },
        { route: '/blog/how-to-crack-nda', priority: 0.7 },
        { route: '/blog/best-nda-coaching-lucknow', priority: 0.7 },
        { route: '/blog/ssb-interview-guide', priority: 0.7 },
        { route: '/blog/defence-career-after-12th', priority: 0.7 },
        { route: '/blog/nda-vs-cds', priority: 0.7 },
        { route: '/blog/defence-coaching-near-me', priority: 0.7 },
        { route: '/privacy-policy', priority: 0.3 },
        { route: '/terms-conditions', priority: 0.3 },
        { route: '/refund-policy', priority: 0.3 },
    ]

    return routes.map(({ route, priority }) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: priority,
    }))
}
