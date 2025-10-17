export default function robots() {
  const siteUrl = 'https://studiovyn.in';
  return {
    rules: [
      { userAgent: '*', allow: '/' },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}


