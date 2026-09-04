# Sistema de Design + Wireframe — Gabriel e Souza Advogados e Associados

*Produzido por Michelangelo. Aprovado por Mestre Splinter. Base: diagnóstico + copy + referências GYMNOX e Lara Coach.*

## Decisões de composição
- Navbar e grid de cards → padrão GYMNOX. Hero → híbrido (estrutura assimétrica GYMNOX + par de CTAs Lara). Marquee → reto (não curvo), por performance/sobriedade. Footer → padrão Lara sem newsletter.

## 1. SISTEMA DE DESIGN

### 1.1 Tokens de cor
| Token | Hex | Uso |
|---|---|---|
| `--bg-base` | `#1b1b1b` | Fundo dominante |
| `--bg-surface` | `#212121` | Cards, navbar (blur), inputs |
| `--bg-surface-alt` | `#161616` | Seções alternadas (Sobre, Footer) |
| `--gold-base` | `#D4AF37` | CTA primário, eyebrows, ícones |
| `--gold-light` | `#E6C866` | Hover texto dourado, gradientes topo |
| `--gold-dark` | `#B8912A` | Hover botão primário, gradientes base |
| `--text-primary` | `#F5F5F0` | Headlines, corpo |
| `--text-secondary` | `#A0A0A0` | Subtextos, legendas |
| `--border-hairline` | `rgba(212,175,55,0.16)` | Bordas de cards, divisores |
| `--overlay-scrim` | `linear-gradient(180deg, rgba(27,27,27,0.35), rgba(27,27,27,0.85))` | Overlay sobre imagens |

**REGRA DE CONTRASTE OBRIGATÓRIA:** todo fundo dourado (botão, badge, marquee, CTA final) usa texto ESCURO `#1b1b1b`, nunca off-white (branco sobre dourado reprova AA — 2.1:1). Texto escuro sobre dourado = 8.2:1 (AAA).

### 1.2 Tipografia (next/font/google)
- **Display**: Archivo (700/800), uppercase, tracking-tight em H1/H2, tracking-wide em eyebrows. Headlines, eyebrows, botões, navbar, números.
- **Corpo**: Inter (400/500/600). Parágrafos, cards, footer, microcopy.

| Elemento | Fonte | Mobile | Desktop | LH | Transform |
|---|---|---|---|---|---|
| Eyebrow | Archivo 700 | 12px | 13px | 1.2 | uppercase, tracking-[0.15em] |
| H1 hero | Archivo 800 | 34px | 60–68px | 1.05 | uppercase, tracking-tight |
| H2 seção | Archivo 800 | 26px | 44px | 1.1 | uppercase, tracking-tight |
| H3 card/sócio | Archivo 700 | 18px | 22px | 1.25 | uppercase (serviços) / normal |
| Body/lead | Inter 400/500 | 16px | 18px | 1.6 | normal |
| Body pequeno | Inter 400 | 14px | 15px | 1.55 | normal |
| Caption/footer | Inter 400 | 13px | 14px | 1.4 | normal |
| Badge/pill | Archivo 600 | 12px | 13px | 1 | uppercase, tracking-wide |
| Stat "5+" | Archivo 800 | 56px | 88px | 1 | normal |

H1 único (Hero). Ordem estrita H1→H2→H3.

### 1.3 Espaçamento e grid
- Container grid: `max-w-7xl mx-auto px-5 sm:px-6 lg:px-8`. Container leitura: `max-w-3xl`/`max-w-5xl`.
- Padding vertical: mobile `py-14`–`py-16` (`py-20` hero/CTA); desktop `py-24` (`py-28`–`py-32` hero/CTA).
- Gap: `gap-4` mobile, `gap-6`–`gap-8` desktop.
- Radius: botões/pills `rounded-full`; cards `rounded-2xl`; imagens `rounded-xl`.
- Sombras: card repouso `border` hairline + `shadow-[0_8px_30px_rgba(0,0,0,0.35)]`; hover `shadow-[0_12px_40px_rgba(0,0,0,0.5)]` + borda `gold/40`; CTA hover glow `shadow-[0_0_28px_rgba(212,175,55,0.35)]`.

### 1.4 Componentes recorrentes
- **CTA primário (dourado)**: gradiente `135deg gold-light→base→dark`, texto `#1b1b1b` Archivo 700, pill, `px-6 py-3.5`/`px-8 py-4`, min-h 48px, chevron duplo `»` SVG à direita. Hover: inverte gradiente + glow + `-translate-y-px`. Focus-visible: outline 2px off-white offset 2px.
- **CTA secundário (contorno)**: transparente, borda 1.5px gold, texto off-white. Hover: fundo gold 8–10%.
- **Eyebrow**: símbolo (`+`/`*`) gold + texto uppercase tracking-wide gold, Archivo 600. Opcional em pill `bg-white/5 border-gold/20`.
- **Card serviço**: `bg-surface` + gradiente/imagem + overlay scrim, ícone SVG 28px gold no topo, título uppercase embaixo. Hover desktop: revela descrição (translate-y + opacity 200ms), borda gold acende. Mobile: descrição sempre visível.
- **Card perfil/sócio**: `bg-surface`, borda hairline, `p-6`, ícone/avatar topo, título Archivo 700, descrição Inter 400.
- **Badge/pill**: `rounded-full bg-white/5 border-gold/25`, `px-4 py-1.5`.
- **Ícones**: SVG inline outline stroke 1.5–2px currentColor (WhatsApp/Instagram = glifo oficial preenchido). Sem lib externa.
- **Marquee**: fundo gold sólido, texto `#1b1b1b` uppercase Archivo 600, separador `•`, reto, altura 56–64px, `@keyframes marquee 30s linear infinite`, conteúdo duplicado 2x. Pausa em `prefers-reduced-motion`.

## 2. WIREFRAME POR SEÇÃO

1. **Navbar sticky**: translúcida `bg-[#1b1b1b]/70 backdrop-blur-md`, borda inferior hairline. Desktop: logo textual esq (GABRIEL & SOUZA + Advogados e Associados), menu centro (6 âncoras), CTA "Fale com um Advogado" dir. Mobile: logo + hambúrguer; CTA some da navbar (evita concorrer com floating); menu off-canvas `#161616` blur, CTA como último item full-width.
2. **Hero**: full-bleed `min-h-[88vh]`, imagem bg + overlay scrim. Badge pill topo. Desktop split assimétrico `grid-cols-12`: esq `col-span-7` H1 uppercase 2 linhas; dir `col-span-5` subtítulo + texto suporte + CTA primário + secundário. Mobile: stack vertical, CTAs full-width. Chevron de scroll opcional (respeita reduced-motion).
3. **Marquee**: full-bleed, fundo dourado, 6 frases da copy separadas por `•`, loop CSS.
4. **Sobre**: fundo `#161616`. Eyebrow centralizado + headline bicolor (2ª linha em gold). Grid `grid-cols-12`: esq `col-span-4` imagem sócio, centro `col-span-4` stat "5+" gigante + 2 parágrafos, dir `col-span-4` imagem 2 (`hidden md:block`). Abaixo: 2 cards de sócio (`grid-cols-2`) foto + nome + OAB + bio. Mobile: coluna única.
5. **Áreas de Atuação**: fundo `#1b1b1b`. Cabeçalho 2 colunas (eyebrow+headline / subtítulo). Grid 8 cards: desktop `grid-cols-4`, 1º card destaque `col-span-2` (Benefícios por Incapacidade). Tablet `grid-cols-2`. Mobile `grid-cols-1`. Card = ícone + título + descrição.
6. **Para Quem É**: fundo `#161616`. Eyebrow + headline centralizados. Grid `grid-cols-4` cards de perfil (ícone + título + descrição), sem imagem de fundo. Mobile `grid-cols-1`.
7. **Diferenciais**: fundo `#1b1b1b`. Eyebrow + headline. 1º diferencial (Atuação exclusiva) full-width destaque, 4 restantes `grid-cols-2`. Mobile empilhado.
8. **Como Funciona**: fundo `#161616`. Eyebrow + headline. 4 passos `grid-cols-4` com círculo numerado dourado + linha conectora `hidden md:block`. Mobile: coluna vertical, número esq + texto dir.
8b. **Urgência**: faixa `py-12`, fundo `bg-surface`, borda hairline top/bottom, `max-w-3xl` centralizado. H3 (não H2) + parágrafo + ícone relógio 20px opcional. Inserido antes do CTA final.
9. **CTA Final**: full-bleed fundo dourado sólido. Headline + parágrafo em `#1b1b1b`. Botão ÚNICO invertido: fundo `#1b1b1b` texto off-white + ícone WhatsApp + chevron. Mobile full-width.
10. **Footer**: fundo `#161616`. Grid 3 colunas: logo+tagline / Quick Menu (6 âncoras) / Contato (endereço, email mailto, Instagram — cada com ícone 18px). Faixa `border-t`: créditos (nomes+OAB) + disclaimer ético (min 13px, legível). Link voltar ao topo. Mobile empilhado.
- **Floating WhatsApp**: `fixed bottom-5 right-5 z-50`, aparece após ~600px scroll. Mobile: circular 56px gold + ícone `#1b1b1b`. Desktop: pill com texto "Fale com um Advogado". 
- **Voltar ao topo**: circular 44px contorno, `bottom-24 right-5`, após ~1.5 viewport. Fade+slide 8px, respeita reduced-motion.

## 3. ASSETS (next/image, dimensões fixas p/ evitar CLS)
| # | Seção | Proporção/tamanho | Placeholder | Alt |
|---|---|---|---|---|
| 1 | Hero bg | 16:9–21:9 ~1920×960, `priority` fetchPriority high | Gradiente CSS dark→dourado 6% + textura SVG 4% (sem request, ótimo LCP) | "Ambiente do escritório Gabriel e Souza..." |
| 2 | Sobre img1 | 4:5 ~800×1000 | Bloco gradiente dourado + iniciais "A.G." | "Advogado Arão José Gabriel Neto, sócio..." |
| 3 | Sobre img2 | 4:5 ~800×1000, `hidden md:block` | idem | "Escritório Gabriel e Souza em Brasília/DF" |
| 4 | Card sócio 1 | 1:1 ~400×400 | Avatar gradiente + "AG" | "Arão José Gabriel Neto, OAB/DF 44.315" |
| 5 | Card sócio 2 | 1:1 ~400×400 | Avatar gradiente + "CM" | "Cleiton de Souza Moreira, OAB/DF 55.946" |
| 6–13 | 8 cards serviço | 4:3 ~480×360 | Gradiente dark→dourado + ícone SVG temático (tratamento FINAL recomendado, não temporário) | "Ícone representando [serviço]..." |
| 14 | OG image | 1200×630 | Estática: fundo `#1b1b1b` + faixa dourada + "GABRIEL & SOUZA — Advocacia Previdenciária e Trabalhista" | — |
| 15 | Favicon | 512×512 | Monograma "GS" dourado sobre `#1b1b1b` | — |

**Ícones SVG inline necessários**: menu, fechar, chevron duplo, seta-cima, WhatsApp, envelope, pin, Instagram, relógio; 8 serviços (incapacidade/coração, auxílio-doença/pulso, acidente/escudo-alerta, invalidez/escudo, BPC/mão-coração, maternidade/bebê, rural/trigo, urbana/prédio); 4 público (estetoscópio, bandagem, gestante, idoso); 5 diferenciais (balança, chat, relógio-histórico, alvo, raio).

## 4. COMPONENTIZAÇÃO
Navbar, Hero, Marquee, AboutSection, EyebrowLabel, ServicesGrid+ServiceCard(featured), AudienceSection+AudienceCard, DifferentiatorsSection+DifferentiatorCard(featured), HowItWorksSection+StepItem, UrgencyBanner, FinalCTASection, Footer+FooterColumn+ContactItem, WhatsAppFloat, BackToTopButton, CTAButton(variant primary|secondary|dark-on-gold, size sm|md), SectionContainer, pasta Icons/ com SVGs individuais.

## 5. ACESSIBILIDADE E PERFORMANCE
- H1 único; headings sequenciais; focus-visible sempre (2px off-white/`#1b1b1b`); aria-labels exatos da copy; alvo toque ≥44px; `prefers-reduced-motion` em marquee/hover/bounce; contraste conforme tabela; alt="" em decorativas; wa.me com `rel="noopener noreferrer"`.
- LCP: hero placeholder gradiente CSS (sem request) + blurDataURL. Abaixo da dobra: `loading="lazy"`. Animações só CSS; JS mínimo (scroll threshold + menu toggle). Ícones SVG inline. Fontes next/font display swap.
