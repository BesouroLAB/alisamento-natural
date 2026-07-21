---
name: seo-programatico-an
description: "Motor de SEO programático do projeto Alisamento Natural. Define o contrato de frontmatter MDX, a fábrica de schemas JSON-LD, o registro de silos, os 4 templates de artigo por Tier e os guardrails anti-penalidade. Use SEMPRE que criar/editar artigos, silos, rotas dinâmicas ou dados estruturados no alisamentonatural.com.br."
---

# Motor de SEO Programático (Alisamento Natural)

> **PADRÃO VALIDADO**: esta arquitetura segue o mesmo motor do projeto CAsemform (validado no Google Rich Results Test).
> Product snippets + Review snippets + Breadcrumbs + FAQPage sem erros.
> **Não invente arquitetura nova.** Todo artigo novo entra por este pipeline.

## ⚙️ 1. Como o motor funciona (arquitetura real)

**Conteúdo é MDX + frontmatter. Schema é gerado por fábrica. Nada é escrito à mão.**

```
content/[silo]/[NNN]-[slug].mdx        ← artigo (frontmatter = dados estruturados)
        │
lib/mdx.ts                             ← lê, VALIDA (build falha se violar o contrato) e ordena
        │
lib/site.ts                            ← SITE (domínio único) + SILOS (registro de silos)
lib/schema.ts                          ← fábrica de TODOS os JSON-LD (nunca montar schema em página)
        │
app/[silo]/page.tsx                    ← hub do silo (CollectionPage + ItemList)
app/[silo]/[slug]/page.tsx             ← artigo (Product+review OU Article, Breadcrumb, FAQPage)
app/layout.tsx                         ← Organization + WebSite + Person (globais, em toda página)
app/sitemap.ts / robots.ts             ← automáticos (lêem o motor; /go/ bloqueado)
```

Regras Next.js 16 (App Router): SSG via `generateStaticParams`; `params` é **Promise** (`await params`);
metadata via `generateMetadata` (canonical relativo — o `metadataBase` do layout resolve).

## 📄 2. Contrato de frontmatter (OBRIGATÓRIO — o build FALHA se violar)

A validação está em `lib/mdx.ts` (`validateFrontmatter`). Campos:

```yaml
---
title: "Título SEO (máx 65 chars — vira <title>, og:title e headline do schema)"
description: "Meta description 150–160 chars com a keyword."
date: "2026-07-15"          # OBRIGATÓRIO (YYYY-MM-DD)
updated: "2026-07-15"       # opcional — alimenta dateModified e sitemap
author: "Tiago Fernandes"   # OBRIGATÓRIO
schemaType: "review"        # "review" | "article" | "howto" | "faq" | "ranking"
image: "/images/posts/foo.jpg"  # opcional — capa (OG image + schema)
readingTime: "8 min"        # opcional — tempo de leitura
product:                    # OBRIGATÓRIO se schemaType: review
  name: "Hidraliso"         #   → Product.name
  brand: "Hidra Liso"       #   → Brand
  rating: 4                 #   0–5, nota editorial baseada em avaliações REAIS
  affiliateSlug: "hidraliso"#   slug em data/afiliados.ts (/go/[slug])
faq:                        # opcional (3 a 7 itens) — gera FAQPage + seção visível
  - q: "Pergunta em linguagem natural?"
    a: "Resposta direta e citável."
howToSteps:                 # quando schemaType: howto
  - name: "Passo 1"
    text: "Descrição do passo"
howToSupply: ["shampoo", "máscara"]
howToTool: ["secador", "prancha"]
howToTime: "PT30M"
rankingItems:               # quando schemaType: ranking
  - name: "Produto 1"
    url: "/progressivas-de-chuveiro/slug"
---
```

**Como o schema é decidido:**
- `schemaType: review` + `product` → **`Product` no topo com `review` aninhado**
- `schemaType: howto` → **`HowTo`** com steps, supply, tool
- `schemaType: ranking` → **`ItemList`** com itens ordenados
- Qualquer outro caso → `Article`
- `faq:` no frontmatter → `FAQPage` + `<FaqSection>` visível com os MESMOS dados

## 🗂️ 3. Silos (registro obrigatório)

4 silos oficiais: `progressivas-de-chuveiro` · `alisamento-caseiro` · `comparativos` · `cuidados`.

- Novo silo = criar pasta em `content/` **E** registrar em `SILOS` (`lib/site.ts`).
- Silo não registrado → 404 no hub (evita rota fantasma).
- URL canônica: `/{silo}/{slug}` — NUNCA misturar prefixos.
- Slug público: o arquivo `401-nome.mdx` vira `/silo/nome` (prefixo numérico é só ordenação interna).

## 📐 4. Os 4 templates de artigo por Tier

Todos usam o MESMO pipeline — o que muda é conteúdo e frontmatter:

| Template | Tier | URL | schemaType | Blocos obrigatórios |
|---|---|---|---|---|
| **Review / Money Page** | T1 | `/{silo}/{produto}-resenha` | `review` + `product` | veredito rápido · INCI/composição · prós/contras REAIS · AlertaAnvisa · modo de uso · veredito por perfil · `faq` |
| **Duelo / Comparativo** | T2 | `/comparativos/{a}-vs-{b}` | `article` | tabela lado a lado (matriz padrão) · quando escolher A · quando escolher B · veredito por perfil · CTAs duplos · `faq` |
| **Mito / Receita Caseira** | T3 | `/alisamento-caseiro/{receita}` | `article` | Answer-First (40-55 palavras) · ciência do fio (pontes) · o que realmente faz · receita · riscos · redirecionamento honesto para T1/T2 · `faq` |
| **Guia / Segurança** | T4 | `/cuidados/{tema}` | `article` ou `howto` | resposta direta · explicação técnica · AlertaAnvisa · produtos relacionados · `faq` |

## 🔗 5. Linkagem interna (nenhuma página órfã)

- Review (T1) → hub de ranking + guia passo a passo + guia Anvisa. NÃO linka para concorrente direto.
- Duelo (T2) → linka as 2 reviews + hub de ranking.
- Mito (T3) → linka hub de ranking ou review relevante (ponte topo→money).
- Guia (T4) → linka reviews dos produtos que resolvem a dúvida + fonte oficial Anvisa.
- Hub de ranking (T2) → linka TODAS as reviews (hub-and-spoke).
- Âncoras descritivas, nunca "clique aqui". Máx ~3–5 links por 1.000 palavras.

## 🚧 6. Guardrails anti-penalidade (OBRIGATÓRIOS)

1. Cada página traz dados que as outras NÃO têm (daquele produto/receita). Página fina = penalidade.
2. Sem texto-molde repetido palavra por palavra entre páginas.
3. Publicar em lotes controlados, não centenas de uma vez.
4. Só criar página com conteúdo real — sem página-fantasma.
5. Nunca inventar número (nota, pH, %, volume). Sem dado = sem dado.
6. ⚠️ YMYL: nunca afirmar segurança para gestantes — só "segundo a marca..." + recomendar profissional.
7. Preço: ZERO valor fixo cravado em texto (regra do projeto). Faixas ou "ver no site".

## ✅ 7. Validação (após cada lote)

1. `npm run build` — a validação de frontmatter roda aqui; build falha se o padrão for violado.
2. Google Rich Results Test na URL publicada.
3. Título/description únicos por página (template `%s | Alisamento Natural` aplica o sufixo).
