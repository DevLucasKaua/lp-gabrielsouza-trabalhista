import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Necessário para `output: export` — a rota é pré-renderizada no build.
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.officeName,
    short_name: "Gabriel e Souza",
    description:
      "Advocacia trabalhista e previdenciária em Brasília/DF. Defesa exclusiva de trabalhadores.",
    start_url: "/",
    display: "standalone",
    background_color: "#1b1b1b",
    theme_color: "#1b1b1b",
    lang: "pt-BR",
    icons: [
      { src: "/icon.png", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
