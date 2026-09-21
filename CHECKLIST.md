<!-- gerado por lp-checklist 1.0.0 a partir de .lpflow/checklist.json — não edite à mão.
     Para corrigir um item: `lp-checklist marcar <id> …` e rode `lp-checklist verificar`. -->

# Checklist de entrega — lp-gabrielsouza-trabalhista

Marcado apenas o que foi **efetivamente verificado**, não o que foi apenas implementado.

| | |
|---|---|
| Trimestre | 2026-Q3 |
| Time | ninjaturtles |
| Produção | não registrada · 0 re-invocação(ões) · 0 bug de implementação |
| Commit verificado | `6795f0b` (árvore limpa) · 21/09/2026, 11:46 |
| Navegador | não executado |
| **Veredito** | **REPROVADO — 8 em falha, 18 pendente(s)** |

## Metas por LP

| KPI | Alvo | Resultado |
|---|---|---|
| Checklist de boas práticas aplicado | 100% | 26% (9/35) |
| Imagens otimizadas antes de publicar | 100% | 25% |
| Vieses cognitivos documentados | ≥3 | 0 |
| Responsividade sem quebra (3 breakpoints) | 100% | 0% |
| Checklist de UX (hierarquia + CTA) | 100% | 17% |

## Build e padrão técnico

- [ ] **`build.compila` — `npm run build` verde** *(obrigatório, não verificado)*
      ↳ script · {"motivo":"build não executado no passe retroativo (use --build)"}
- [x] `build.tipos` — `npx tsc --noEmit` sem erro
      ↳ lp-checklist · {"exit":0}
- [x] `build.lint` — `npm run lint` sem erro
      ↳ lp-checklist · {"exit":0,"warnings":0}
- [x] `build.alvo-deploy` — Alvo de deploy declarado e coerente
      ↳ lp-checklist · {"alvo":"export estático","out":true,"workflows":1,"vercelJson":false,"faltas":[]}
- [ ] **`build.console-limpo` — Console sem erro/warning e nenhuma requisição >= 400** *(obrigatório, não verificado)*
- [ ] **`build.tokens-spec` — `fidelity-check.sh` sem FAIL de token/motion** *(em falha)*
      ↳ lp-checklist · {"fails":["FAIL: token '--bg-base' citado na spec e ausente de globals.css/motion-tokens.ts","FAIL: token '--bg-surface' citado na spec e ausente de globals.css/motion-tokens.ts","FAIL: token '--bg-su…

## Semântica e acessibilidade

- [x] `sem.h1-unico` — Um único `<h1>` por rota e hierarquia h1→h2→h3 sem salto
      ↳ lp-checklist · {"rotas":1,"problemas":[]}
- [ ] **`sem.landmarks` — `header`/`nav`/`main`/`footer` presentes; cada seção com `id` descritivo** *(obrigatório, em falha)*
      ↳ lp-checklist · {"rotas":1,"problemas":["out/index.html: 2 <section> sem id"]}
- [x] `sem.alt` — Toda imagem com `alt` (decorativa com `alt=""`), e o alt descreve significado
      ↳ lp-checklist · {"imagens":22,"semAlt":0,"exemplos":[]}
- [ ] **`sem.teclado` — Tab percorre tudo, foco visível, Esc fecha overlay, sem armadilha de foco** *(obrigatório, não verificado)*
- [ ] **`sem.alvos-44` — Alvos de toque >= 44px em 375** *(obrigatório, não verificado)*
- [ ] **`sem.contraste-aa` — Contraste AA no render real (4,5:1 texto, 3:1 UI), inclusive sobre foto** *(obrigatório, não verificado)*

## Imagens

- [ ] **`img.formato` — Rasters em WebP/AVIF; vetor em SVG; nenhuma foto em PNG/JPG** *(obrigatório, em falha)*
      ↳ lp-checklist · {"rasters":22,"fotos":20,"modernas":18,"legadas":["public/arao-gabriel.jpg (65 KB)","public/cleiton-souza.jpg (80 KB)"],"isentas":["public/logo-mark.png","public/logo.png"]}
- [ ] **`img.peso` — Nenhuma imagem acima de 200 KB; hero <= 150 KB; total de public/ <= 1,5 MB** *(obrigatório, em falha)*
      ↳ lp-checklist · {"imagens":22,"totalKB":2648,"maior":"public/equipe/equipe-6-full.webp (283 KB)","faltas":["public/equipe/equipe-2-full.webp — 277 KB > 200 KB","public/equipe/equipe-6-full.webp — 283 KB > 200 KB","pu…
- [x] `img.responsiva` — Imagem larga tem variante menor servida (`sizes`/`srcset` ou next/image)
      ↳ lp-checklist · {"largas":["public/equipe/equipe-1-full.webp (1920px)","public/equipe/equipe-1.webp (1080px)","public/equipe/equipe-2-full.webp (1920px)","public/equipe/equipe-2.webp (1080px)","public/equipe/equipe-3…
- [ ] **`img.dimensoes-cls` — Dimensão intrínseca declarada em toda imagem; CLS medido < 0,1** *(obrigatório, não verificado)*

## Responsividade

- [ ] **`resp.sem-overflow` — Zero overflow horizontal em 375 / 768 / 1440** *(obrigatório, não verificado)*
- [ ] **`resp.sem-preso-invisivel` — Nada essencial preso em opacity 0, nem invisível no HTML servido sem JS** *(obrigatório, não verificado)*
- [ ] **`resp.mobile-first` — Comportamento mobile de cada seção existe e é intencional** *(obrigatório, não verificado)*
- [ ] **`resp.legibilidade-320` — Headline não estoura em 320px; corpo >= 16px no mobile** *(não verificado)*

## UX: hierarquia e CTA

- [ ] **`ux.dobra` — Acima da dobra: marca, proposta em uma frase e ação primária; sem falso piso** *(obrigatório, não verificado)*
- [ ] **`ux.ponto-focal` — UM ponto focal por seção (squint e primeiro pouso do olho aprovados)** *(obrigatório, não verificado)*
- [x] `ux.cta-primario` — UM CTA primário por seção, um único estilo de botão primário, rótulo contextual
      ↳ lp-checklist · {"genericos":[]}
- [ ] **`ux.cta-funciona` — Todo CTA leva a destino válido; nenhum `href="#"`; wa.me centralizado e contextual** *(obrigatório, não verificado)*
- [ ] **`ux.5s` — Teste dos 3-5 s: a resposta escrita bate com a tese** *(obrigatório, não verificado)*
- [ ] **`ux.grayscale` — Em escala de cinza o CTA segue o mais forte; nada vive só na cor** *(obrigatório, não verificado)*
- [ ] **`ux.nielsen` — >= 3 heurísticas de Nielsen aplicáveis, nomeadas e com onde foram aplicadas** *(obrigatório, não verificado)*
- [ ] **`ux.autonomia-secao` — Cada seção se explica sozinha; nenhum bloco de texto corrido sem chunking** *(não verificado)*

## Micro-interações

- [ ] **`motion.microinteracoes` — Todo interativo com hover/focus/active; toda seção com entrada animada** *(obrigatório, não verificado)*
- [ ] **`motion.reduced` — `prefers-reduced-motion` degrada tudo e não deixa nada invisível** *(obrigatório, não verificado)*

## Vieses cognitivos

- [ ] **`vies.tres` — >= 3 vieses cognitivos aplicados E documentados (nome, seção, copy, fonte)** *(obrigatório, em falha)*
      ↳ lp-checklist · {"documentados":0,"incompletos":0,"nomes":[]}

## Biblioteca de blocos

- [ ] **`blocos.registro` — Blocos reutilizados e criados declarados com path** *(obrigatório, em falha)*
      ↳ lp-checklist · {"reutilizados":0,"criados":0,"faltas":["nenhum bloco declarado"]}
- [ ] **`blocos.sem-duplicacao` — Nenhum markup de primitiva duplicado fora de `ui/`** *(em falha)*
      ↳ lp-checklist · {"duplicados":["WARN: className longo repetido fora de ui/ (candidato a primitiva): className=\"font-body text-[13px] leading-relaxed text-text-secondary\"","WARN: className longo repetido fora de ui/…

## Entrega

- [x] `entrega.seo` — Metadata única, sitemap, robots e favicon próprio
      ↳ lp-checklist · {"faltas":[]}
- [ ] **`entrega.dados-oficiais` — Contatos, OAB e números conferem com o briefing; pendências listadas** *(obrigatório, em falha)*
      ↳ lp-checklist · {"pendencias":1,"docPendencias":null,"naoListadas":["src/app/layout.tsx: TODO: inserir ID de tracking do cliente — Meta Pixel */}"]}
- [x] `entrega.oab` — Provimento OAB 205/2021: sem promessa de resultado, tabela de honorários ou sensacionalismo
      ↳ lp-checklist · {"achados":[]}
- [ ] **`entrega.acessos` — Follow-up de acessos de domínio/hospedagem registrado (data, canal, status)** *(obrigatório, não verificado)*
- [ ] **`entrega.deploy` — Deploy configurado, última execução verde e URL de produção registrada** *(obrigatório, em falha)*
      ↳ lp-checklist · {"url":null,"canal":true,"motivo":"URL de produção não registrada em projeto.url.producao"}
- [ ] **`entrega.tempo` — Horas de produção registradas (LP simples: meta <= 4 h)** *(obrigatório, em falha)*
      ↳ lp-checklist · {"registrado":false}
