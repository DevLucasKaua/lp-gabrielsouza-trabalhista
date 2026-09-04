"use client";

import { useState } from "react";
import Image from "next/image";
import CTAButton from "./CTAButton";
import { MenuIcon, CloseIcon } from "./icons/UtilityIcons";
import { getWhatsAppLink } from "@/config/site";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de Atuação", href: "#areas-de-atuacao" },
  { label: "Para Quem É", href: "#para-quem-e" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Contato", href: "#contato" },
];

const NAVBAR_CTA_ARIA_LABEL =
  "Abrir conversa no WhatsApp com um advogado do escritório";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border-hairline bg-bg-base/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
        <a href="#topo" className="flex items-center" aria-label="Gabriel &amp; Souza Advogados — ir para o topo">
          <Image
            src="/logo.png"
            alt="Gabriel &amp; Souza Advogados"
            width={408}
            height={238}
            priority
            className="h-14 w-auto sm:h-16"
          />
        </a>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-xs font-semibold tracking-wide text-text-secondary uppercase transition-colors hover:text-gold-base"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTAButton
            href={getWhatsAppLink()}
            ariaLabel={NAVBAR_CTA_ARIA_LABEL}
            variant="primary"
            size="sm"
            external
            showChevron={false}
          >
            Fale com um Advogado
          </CTAButton>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-text-primary lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="menu-mobile"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
          </button>
        </div>
      </header>

      <div
        id="menu-mobile"
        className={`fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto bg-bg-surface-alt/98 backdrop-blur-md transition-transform duration-200 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav
          className="flex flex-col gap-1 px-5 py-6"
          aria-label="Navegação mobile"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="min-h-12 rounded-lg px-3 py-3 font-display text-base font-semibold tracking-wide text-text-primary uppercase transition-colors hover:bg-white/5 hover:text-gold-base"
            >
              {link.label}
            </a>
          ))}
          <CTAButton
            href={getWhatsAppLink()}
            ariaLabel={NAVBAR_CTA_ARIA_LABEL}
            variant="primary"
            size="md"
            external
            className="mt-4 w-full"
          >
            Fale com um Advogado
          </CTAButton>
        </nav>
      </div>
    </>
  );
}
