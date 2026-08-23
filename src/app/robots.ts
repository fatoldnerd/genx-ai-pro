import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const isPreview =
    process.env.VERCEL_ENV === "preview" ||
    (Boolean(process.env.CONTEXT) && process.env.CONTEXT !== "production");

  return {
    rules: {
      userAgent: "*",
      ...(isPreview ? { disallow: "/" } : { allow: "/" }),
    },
    sitemap: "https://genxaipro.com/sitemap.xml",
  };
}
