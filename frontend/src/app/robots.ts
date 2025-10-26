import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://agrivaulture.manuru.dev";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard", "/dashboard/*", "/login", "signup"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
