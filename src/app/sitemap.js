import { posts } from './blog/data';
import { projects } from './case-studies/data';
import { cities } from './locations/data';
import { services } from './services/data';

export default function sitemap() {
  const baseUrl = 'https://studiovyn.in';
  const now = new Date().toISOString();
  const routes = [
    '',
    '/about',
    '/privacy',
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
    ...posts.map((p) => `/blog/${p.slug}`),
    ...projects.map((p) => `/case-studies/${p.slug}`)
  ];
  return routes.map((route) => {
    // Heuristic priorities/changefreq to encourage faster indexing
    let changeFrequency = 'monthly';
    let priority = 0.6;

    if (route === '') {
      changeFrequency = 'daily';
      priority = 1.0;
    } else if (route === '/blog') {
      changeFrequency = 'weekly';
      priority = 0.7;
    } else if (route.startsWith('/blog/')) {
      changeFrequency = 'weekly';
      priority = 0.8;
    } else if (route === '/services') {
      changeFrequency = 'weekly';
      priority = 0.7;
    } else if (route.startsWith('/services/')) {
      changeFrequency = 'monthly';
      priority = 0.7;
    } else if (route === '/locations') {
      changeFrequency = 'monthly';
      priority = 0.6;
    } else if (route.startsWith('/locations/')) {
      changeFrequency = 'monthly';
      priority = 0.5;
    } else if (route === '/case-studies') {
      changeFrequency = 'monthly';
      priority = 0.7;
    } else if (route.startsWith('/case-studies/')) {
      changeFrequency = 'monthly';
      priority = 0.7;
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency,
      priority,
    };
  });
}


