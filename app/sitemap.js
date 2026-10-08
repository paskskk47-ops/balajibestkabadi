import { localities } from '../data/localities';
import { cities } from '../data/cities';
import { blogs } from '../data/blogs';

export default async function sitemap() {
  const baseUrl = 'https://balajibestkabadiwala.in';

  // Static main pages with meaningful dates & balanced priorities
  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: '2026-08-09',
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: '2026-08-09',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: '2026-08-09',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Jaipur Localities (Primary local service targets)
  const localityPages = localities.map((loc) => ({
    url: `${baseUrl}/${loc.slug}`,
    lastModified: '2026-08-09',
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Rajasthan Cities (Regional industrial service targets)
  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/${city.slug}`,
    lastModified: '2026-08-09',
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Educational Blog Guides
  const blogPages = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: '2026-08-09',
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...localityPages, ...cityPages, ...blogPages];
}
