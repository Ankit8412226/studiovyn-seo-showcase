export default function robots() {
  const siteUrl = 'https://studiovyn.com';
  return {
    rules: [
      { userAgent: '*', allow: '/' },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}


