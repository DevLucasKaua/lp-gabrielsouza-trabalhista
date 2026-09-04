import Image from "next/image";
import { EnvelopeIcon, PinIcon, InstagramIcon } from "./icons/ContactIcons";
import { siteConfig, getMailtoLink } from "@/config/site";

const QUICK_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de Atuação", href: "#areas-de-atuacao" },
  { label: "Para Quem É", href: "#para-quem-e" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-bg-surface-alt">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/logo.png"
              alt="Gabriel &amp; Souza Advogados"
              width={408}
              height={238}
              className="h-24 w-auto"
            />
            <p className="mt-4 font-body text-sm leading-relaxed text-text-secondary">
              Advocacia Trabalhista e Previdenciária em Brasília/DF.
            </p>
          </div>

          <nav aria-label="Links rápidos">
            <h3 className="font-display text-sm font-semibold tracking-wide text-text-primary uppercase">
              Menu
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-text-secondary transition-colors hover:text-gold-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-wide text-text-primary uppercase">
              Contato
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-start gap-2.5">
                <PinIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-gold-base" />
                <span className="font-body text-sm text-text-secondary">
                  {siteConfig.address.full}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <EnvelopeIcon className="h-[18px] w-[18px] shrink-0 text-gold-base" />
                <a
                  href={getMailtoLink()}
                  className="font-body text-sm text-text-secondary transition-colors hover:text-gold-base"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <InstagramIcon className="h-[18px] w-[18px] shrink-0 text-gold-base" />
                <a
                  href={siteConfig.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-text-secondary transition-colors hover:text-gold-base"
                >
                  {siteConfig.instagram.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border-hairline">
          <iframe
            title="Mapa da localização do escritório Gabriel e Souza em Brasília/DF"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              siteConfig.address.full
            )}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-64 w-full grayscale-[0.3] md:h-80"
          />
        </div>
      </div>

      <div className="border-t border-border-hairline">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="font-body text-[13px] leading-relaxed text-text-secondary">
            {siteConfig.officeName} © {year}. Arão José Gabriel Neto,
            OAB/DF 44.315 | Cleiton de Souza Moreira, OAB/DF 55.946.
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-5 pb-8 sm:px-6 lg:px-8">
          <p className="font-body text-[13px] leading-relaxed text-text-secondary">
            Este site tem caráter meramente informativo, em conformidade com o
            Código de Ética e Disciplina da OAB e o Provimento nº 205/2021 do
            Conselho Federal da OAB. As informações aqui apresentadas não
            constituem consulta jurídica, promessa de resultado ou garantia de
            êxito. Cada caso deve ser analisado individualmente por um
            advogado.
          </p>
        </div>
      </div>
    </footer>
  );
}
