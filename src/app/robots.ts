import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Necessário para `output: export` — a rota é pré-renderizada no build.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
