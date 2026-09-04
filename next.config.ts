import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exporta HTML/CSS/JS estáticos para a pasta `out/` — compatível com a
  // hospedagem compartilhada da Hostinger (Apache, sem Node em runtime).
  output: "export",

  // Static export não usa o otimizador de imagens on-demand do Next.
  // As imagens são servidas como estão (já otimizadas manualmente em /public).
  images: {
    unoptimized: true,
  },

  // Gera rotas como pastas com index.html (ex.: /obrigado/ -> /obrigado/index.html),
  // o que evita 404 em servidores estáticos e mantém as URLs com barra final.
  trailingSlash: true,
};

export default nextConfig;
