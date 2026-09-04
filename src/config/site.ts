/**
 * Configuração central de contato e identidade do escritório.
 *
 * Todos os CTAs de WhatsApp da landing page devem consumir
 * `getWhatsAppLink()` a partir deste arquivo — nunca hardcode o número
 * ou a mensagem em outro lugar do código.
 */

export const siteConfig = {
  officeName: "Gabriel e Souza Advogados e Associados",
  // Subdomínio oficial da landing trabalhista (usado em metadataBase,
  // canonical, sitemap, robots, JSON-LD e Open Graph).
  domain: "trabalhista.gabrielesouzaadvogados.com.br",
  url: "https://trabalhista.gabrielesouzaadvogados.com.br",

  // Linha oficial do WhatsApp do escritório — formato: DDI+DDD+número, só dígitos
  // (61) 99631-4996
  whatsapp: "5561996314996",

  whatsappDefaultMessage:
    "Olá, gostaria de uma análise do meu caso trabalhista.",

  email: "previdenciariogabrielesouzaadv@gmail.com",

  instagram: {
    handle: "@gabrielesouzaadvogados",
    url: "https://instagram.com/gabrielesouzaadvogados",
  },

  address: {
    line1: "SCS, Quadra 01, Bloco H, 5º andar, Edifício Morro Vermelho",
    line2: "Asa Sul, Brasília/DF",
    zip: "CEP 70399-900",
    full: "SCS, Quadra 01, Bloco H, 5º andar, Edifício Morro Vermelho, Asa Sul, Brasília/DF, CEP 70399-900",
  },

  partners: [
    {
      name: "Arão José Gabriel Neto",
      oab: "OAB/DF 44.315",
      initials: "AG",
      photo: "/arao-gabriel.jpg",
      bio: "Advogado com atuação dedicada ao Direito Trabalhista e Previdenciário, com foco na defesa dos direitos do trabalhador.",
    },
    {
      name: "Cleiton de Souza Moreira",
      oab: "OAB/DF 55.946",
      initials: "CM",
      photo: "/cleiton-souza.jpg",
      bio: "Advogado com experiência em demandas trabalhistas e previdenciárias, incluindo representação de Sindicatos de Trabalhadores.",
    },
  ],
} as const;

/**
 * Monta o link do WhatsApp (wa.me) com mensagem pré-preenchida.
 * Aceita parâmetros de UTM opcionais para rastreamento de campanhas.
 */
export function getWhatsAppLink(
  message: string = siteConfig.whatsappDefaultMessage,
  utm?: { source?: string; medium?: string; campaign?: string }
): string {
  const text = encodeURIComponent(message);
  let url = `https://wa.me/${siteConfig.whatsapp}?text=${text}`;

  if (utm) {
    const params = new URLSearchParams();
    if (utm.source) params.set("utm_source", utm.source);
    if (utm.medium) params.set("utm_medium", utm.medium);
    if (utm.campaign) params.set("utm_campaign", utm.campaign);
    const query = params.toString();
    if (query) url += `&${query}`;
  }

  return url;
}

export function getMailtoLink(): string {
  return `mailto:${siteConfig.email}`;
}
