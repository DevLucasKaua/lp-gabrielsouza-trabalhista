"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./icons/ContactIcons";
import { getWhatsAppLink } from "@/config/site";

const FLOAT_ARIA_LABEL = "Falar agora com um advogado pelo WhatsApp";
const SCROLL_THRESHOLD = 600;

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={FLOAT_ARIA_LABEL}
      className={`fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold-base text-bg-base shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-200 hover:shadow-[0_0_28px_rgba(212,175,55,0.35)] ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsAppIcon className="h-7 w-7 shrink-0" />
    </a>
  );
}
