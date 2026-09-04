import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Necessário para `output: export` — a rota é pré-renderizada no build.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
