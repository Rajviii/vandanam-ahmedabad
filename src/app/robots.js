export default function robots() {
  const baseUrl = "https://vandanam-ahmedabad.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
