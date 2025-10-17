import { services } from './services/data';
import { cities } from './locations/data';
import { posts } from './blog/data';

export default function sitemap() {
  const baseUrl = 'https://studiovyn.com';
  const now = new Date().toISOString();
  const routes = [
    '',
    '/about',
    '/portfolio',
    '/testimonials',
    '/contact',
    '/terms',
    '/transform',
    '/case-studies',
    '/blog',
    '/locations',
    '/services',
    ...services.map((s) => `/services/${s.slug}`),
    ...cities.map((c) => `/locations/${c.toLowerCase().replace(/\s+/g,'-')}`),
    ...posts.map((p) => `/blog/${p.slug}`)
  ];
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }));
}


