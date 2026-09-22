import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Archivo, Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Advogado Trabalhista em Brasília | Gabriel e Souza",
    template: "%s | Gabriel e Souza Advogados",
  },
  description:
    "Defesa exclusiva de trabalhadores em Brasília/DF. Verbas rescisórias, horas extras, assédio, acidente de trabalho. Solicite uma análise do seu caso.",
  applicationName: siteConfig.officeName,
  authors: [{ name: siteConfig.officeName, url: siteConfig.url }],
  creator: siteConfig.officeName,
  publisher: siteConfig.officeName,
  category: "Advocacia",
  formatDetection: { telephone: true, email: true, address: true },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  keywords: [
    "advogado trabalhista brasília",
    "direito trabalhista DF",
    "verbas rescisórias advogado",
    "adicional de insalubridade advogado",
    "adicional de periculosidade",
    "horas extras não pagas",
    "assédio moral no trabalho advogado",
    "acidente de trabalho advogado",
    "reversão de justa causa",
    "reconhecimento de vínculo empregatício",
  ],
  openGraph: {
    title: "Gabriel e Souza Advogados | Direito Trabalhista e Previdenciário",
    description:
      "Advocacia dedicada exclusivamente à defesa de trabalhadores. Mais de 5 anos de atuação em Brasília/DF. Fale com um advogado.",
    url: siteConfig.url,
    siteName: siteConfig.officeName,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel e Souza Advogados | Trabalhista em Brasília",
    description:
      "Defendemos só o trabalhador. Verbas rescisórias, horas extras, assédio e acidente de trabalho. Solicite uma análise do seu caso.",
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#1b1b1b",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${siteConfig.url}/#escritorio`,
  name: siteConfig.officeName,
  description:
    "Escritório de advocacia dedicado exclusivamente à defesa de trabalhadores em Brasília/DF. Atuação em Direito Trabalhista e Previdenciário.",
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  image: `${siteConfig.url}/opengraph-image`,
  email: siteConfig.email,
  telephone: `+${siteConfig.whatsapp}`,
  areaServed: {
    "@type": "City",
    name: "Brasília",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "SCS, Quadra 01, Bloco H, 5º andar, Edifício Morro Vermelho",
    addressLocality: "Brasília",
    addressRegion: "DF",
    postalCode: "70399-900",
    addressCountry: "BR",
  },
  sameAs: [siteConfig.instagram.url],
  knowsAbout: ["Direito Trabalhista", "Direito Previdenciário"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Áreas de Atuação",
    itemListElement: [
      "Verbas Rescisórias",
      "Adicional de Insalubridade",
      "Reconhecimento de Vínculo",
      "Reversão de Justa Causa",
      "Direitos da Gestante",
      "Acidente de Trabalho e Doença Ocupacional",
      "Adicional de Periculosidade",
      "Horas Extras e Adicionais",
      "Assédio Moral e Sexual",
    ].map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service },
    })),
  },
  employee: siteConfig.partners.map((partner) => ({
    "@type": "Attorney",
    name: partner.name,
    identifier: partner.oab,
    worksFor: siteConfig.officeName,
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${inter.variable} h-full`}
    >
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WWFZ8MH9');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* TODO: inserir ID de tracking do cliente — Meta Pixel */}
        {/* <Script id="meta-pixel" strategy="afterInteractive">{`...`}</Script> */}

        {/* Google tag (gtag.js) — Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18296621324"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18296621324');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full bg-bg-base font-body text-text-primary antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WWFZ8MH9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold-base focus:px-4 focus:py-2 focus:font-body focus:text-sm focus:font-semibold focus:text-bg-base"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
