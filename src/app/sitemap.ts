import { MetadataRoute } from 'next'
export const dynamic = "force-static";


export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://pfda.in' // Replace with actual domain

    const routes = [
        '',
        '/about',
        '/courses',
        '/courses/nda',
        '/courses/cds',
        '/courses/afcat',
        '/courses/ssb',
        '/courses/capf',
        '/results',
        '/gallery',
        '/branches',
        '/contact',
        '/blog',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}
