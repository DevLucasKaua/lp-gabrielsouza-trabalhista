"use client";

import { useCallback, useEffect, useState } from "react";

// Fotos otimizadas em /public/equipe (thumb: equipe-N.webp, full: equipe-N-full.webp).
const PHOTOS = Array.from({ length: 9 }, (_, i) => {
  const n = i + 1;
  return {
    n,
    thumb: `/equipe/equipe-${n}.webp`,
    full: `/equipe/equipe-${n}-full.webp`,
    alt: `Equipe do Gabriel e Souza Advogados — foto ${n}`,
  };
});

export default function TeamGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + PHOTOS.length) % PHOTOS.length)),
    []
  );
  const showNext = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % PHOTOS.length)),
    []
  );

  // Teclado (Esc/setas) e trava de scroll do body enquanto o lightbox está aberto.
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, showPrev, showNext]);

  return (
    <section
      aria-label="Galeria de fotos da equipe do Gabriel e Souza Advogados"
      className="overflow-hidden bg-bg-surface-alt py-14 md:py-24"
    >
      {/* Trilho de ponta a ponta — pausa ao passar o mouse */}
      <div
        className="group relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 4%, #000 96%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 4%, #000 96%, transparent)",
        }}
      >
        <ul className="flex w-max animate-marquee-gallery gap-2 pl-2 hover:[animation-play-state:paused] md:gap-3 md:pl-3">
          {/* Duas cópias para o loop contínuo; a segunda é decorativa */}
          {[0, 1].map((copy) =>
            PHOTOS.map((photo) => (
              <li key={`${copy}-${photo.n}`} aria-hidden={copy === 1}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(photo.n - 1)}
                  tabIndex={copy === 1 ? -1 : 0}
                  aria-label={`Ampliar ${photo.alt}`}
                  className="block overflow-hidden rounded-2xl border border-border-hairline outline-none transition-transform duration-300 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-gold-base"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.thumb}
                    alt={copy === 0 ? photo.alt : ""}
                    width={1080}
                    height={720}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="h-56 w-auto max-w-none object-cover md:h-72 lg:h-80"
                  />
                </button>
              </li>
            ))
          )}
        </ul>
      </div>

      {/* Lightbox */}
      {isOpen && openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={PHOTOS[openIndex].alt}
          onClick={close}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-bg-base/95 p-4 animate-fade-slide-in md:p-8"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-border-hairline bg-bg-surface/80 text-2xl leading-none text-text-primary outline-none transition-colors hover:bg-bg-surface focus-visible:ring-2 focus-visible:ring-gold-base md:right-6 md:top-6"
          >
            &times;
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Foto anterior"
            className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full border border-border-hairline bg-bg-surface/80 text-text-primary outline-none transition-colors hover:bg-bg-surface focus-visible:ring-2 focus-visible:ring-gold-base md:left-6"
          >
            <span aria-hidden="true">&#8249;</span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Próxima foto"
            className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full border border-border-hairline bg-bg-surface/80 text-text-primary outline-none transition-colors hover:bg-bg-surface focus-visible:ring-2 focus-visible:ring-gold-base md:right-6"
          >
            <span aria-hidden="true">&#8250;</span>
          </button>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PHOTOS[openIndex].full}
            alt={PHOTOS[openIndex].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
