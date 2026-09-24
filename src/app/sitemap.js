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
    '/offers',
    '/terms',
    '/transform',
    '/services'
  ];
  return routes.map((route) => {
    // Heuristic priorities/changefreq to encourage faster indexing
    let changeFrequency = 'monthly';
    let priority = 0.6;

    if (route === '') {
      changeFrequency = 'daily';
      priority = 1.0;
    } else if (route === '/services') {
      changeFrequency = 'weekly';
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


