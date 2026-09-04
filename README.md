# Gabriel e Souza Advogados e Associados — Landing Page

Landing page institucional (Next.js App Router + TypeScript + TailwindCSS v4),
100% estática (SSG), para o escritório Gabriel e Souza Advogados e Associados
(Direito Trabalhista e Previdenciário — Brasília/DF).

## Como rodar

Pré-requisitos: Node.js 18.18+ (recomendado 20+) e npm.

```bash
npm install        # instala as dependências (já feito neste repositório)
npm run dev         # ambiente de desenvolvimento em http://localhost:3000
npm run build        # build de produção (gera as páginas estáticas)
npm run start        # sobe o servidor de produção a partir do build gerado
npm run lint          # roda o ESLint
```

## Onde trocar o número de WhatsApp

Todo o contato do escritório está centralizado em:

```
src/config/site.ts
```

Troque o campo `whatsapp` (formato DDI+DDD+número, apenas dígitos, ex.:
`5561999999999`). Esse valor alimenta automaticamente **todos** os botões
de WhatsApp da página (navbar, hero, CTA final, botão flutuante) através da
função `getWhatsAppLink()`. Não hardcode o número em nenhum outro arquivo.

No mesmo arquivo também estão: e-mail, Instagram, endereço completo e dados
dos sócios (nome + OAB) — todos usados em várias seções e no JSON-LD de SEO.

## Onde colocar fotos reais e o logo

O projeto foi entregue com placeholders 100% em CSS (gradientes + iniciais),
sem nenhuma imagem externa — isso favorece o LCP (maior imagem visível) e
evita dependência de assets que ainda não existem. Os pontos marcados com
`// TODO` no código, prontos para receber `next/image` com fotos reais, são:

- `src/components/Hero.tsx` — imagem de fundo do hero (proporção 16:9–21:9,
  ~1920×960). Alt sugerido pela copy: *"Advogados do escritório Gabriel e
  Souza atendendo cliente em Brasília, referente a direito trabalhista"*.
- `src/components/AboutSection.tsx` — duas imagens da seção Sobre (foto do
  sócio Arão José Gabriel Neto e foto do escritório, proporção 4:5, ~800×1000)
  e os dois avatares dos cards de sócios (proporção 1:1, ~400×400).
- Logo: atualmente a marca é só textual ("GABRIEL & SOUZA" / "Advogados e
  Associados") em `src/components/Navbar.tsx` e `src/components/Footer.tsx`.
  Se o cliente fornecer um logo em arquivo, substitua o texto por
  `next/image` nesses dois componentes.
- Favicon / ícone do app / imagem de Open Graph são gerados dinamicamente via
  código (`src/app/icon.tsx`, `src/app/apple-icon.tsx`,
  `src/app/opengraph-image.tsx`) com o monograma "GS". Se o cliente fornecer
  uma logomarca oficial, esses três arquivos podem ser substituídos por
  arquivos de imagem estáticos (`icon.png`, `apple-icon.png`,
  `opengraph-image.png`) na pasta `src/app/`.

## Tracking / conversão

Slots comentados para Meta Pixel e GTM/GA4 já estão no `src/app/layout.tsx`
(`<head>`), marcados com `// TODO: inserir ID de tracking do cliente`. Basta
descomentar e inserir o snippet oficial fornecido pelo cliente.

## Deploy na Vercel

1. Crie um repositório git (GitHub/GitLab/Bitbucket) e envie o projeto.
2. Acesse [vercel.com/new](https://vercel.com/new) e importe o repositório.
3. A Vercel detecta automaticamente o framework Next.js — não é necessário
   configurar build command nem output directory manualmente.
4. Antes do deploy final, atualize `src/config/site.ts` com o WhatsApp real e,
   se o domínio definitivo for diferente de
   `gabrielesouzaadvogados.com.br`, atualize também o campo `url` do mesmo
   arquivo (usado no `metadataBase`, sitemap, robots.txt e JSON-LD).
5. Configure o domínio customizado nas configurações do projeto na Vercel.

## Pendências para o cliente (marcadas com `// TODO` no código)

- `src/config/site.ts` — número oficial de WhatsApp (`whatsapp`).
- `src/components/Hero.tsx` — foto real do escritório/atendimento (hero).
- `src/components/AboutSection.tsx` — fotos reais dos sócios e do escritório.
- Logo em arquivo (se houver), para substituir a marca textual na Navbar e no
  Footer.
- `src/app/layout.tsx` — IDs de tracking (Meta Pixel / GTM/GA4).
