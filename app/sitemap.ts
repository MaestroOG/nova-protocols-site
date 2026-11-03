import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blogPosts'

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://novaprotocols.com').replace(
  /\/$/,
  '',
)

const pages = [
  { path: '', priority: 1 },
  { path: '/about', priority: 0.8 },
  { path: '/services', priority: 0.8 },
  { path: '/for-agencies', priority: 0.8 },
  { path: '/how-it-works', priority: 0.8 },
  { path: '/cases', priority: 0.8 },
  { path: '/blog', priority: 0.8 },
  { path: '/contact', priority: 0.7 },
  { path: '/incident-response', priority: 0.6 },
  { path: '/privacy', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map(({ path, priority }) => ({
      url: `${siteUrl}${path}`,
      changeFrequency: path === '/blog' ? ('weekly' as const) : ('monthly' as const),
      priority,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
