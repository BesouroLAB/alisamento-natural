---
name: schema-e-geo-an
description: "Fonte de verdade de structured data (Schema.org / JSON-LD) e GEO (otimização para respostas de IA) do projeto Alisamento Natural. Define quais schemas usar por template (Review, Comparativo, Mito, Guia), como injetá-los no Next.js 16, e checklist para ser citado por ChatGPT, Claude, Perplexity e Gemini. Use SEMPRE que criar/editar páginas, schema markup ou metadata."
---

# Schema + GEO — Alisamento Natural

## 1. Schemas por tipo de página

### Layout global (`app/layout.tsx`) — emitidos em TODAS as páginas
- **Organization** (publisher do site)
- **WebSite** + SearchAction (sitelinks search box)
- **Person** (Tiago Fernandes — autor E-E-A-T, referenciado por `@id`)

### Página de artigo (`app/[silo]/[slug]/page.tsx`)

| schemaType | Schema principal | Schemas auxiliares |
|---|---|---|
| `review` | **Product** (com `review` aninhado + `AggregateRating`) | BreadcrumbList, FAQPage (se `faq:` no frontmatter) |
| `article` | **Article** (BlogPosting) | BreadcrumbList, FAQPage |
| `howto` | **HowTo** (com steps, supply, tool, totalTime) | BreadcrumbList, FAQPage |
| `ranking` | **ItemList** (com itens ordenados) | BreadcrumbList, FAQPage |
| `faq` | **FAQPage** (standalone) | BreadcrumbList |

### Hub de silo (`app/[silo]/page.tsx`)
- **CollectionPage** + **ItemList** (lista de artigos do silo)
- BreadcrumbList

### Regras críticas de schema

1. **Product no topo, review aninhado.** `Review → itemReviewed → Product` isolado é ERRADO (reprova no Rich Results Test por falta de offers/review/aggregateRating).
2. **Person global, não por página.** O `Person` schema (Tiago Fernandes) é emitido no layout e referenciado por `@id` nos artigos. Isso garante que o Rich Results Test valide (ele testa uma URL por vez e não resolve `@id` de outra página).
3. **FAQ visível = FAQ do schema.** O texto do `acceptedAnswer` DEVE ser idêntico ao texto visível na página. Google penaliza divergência.
4. **Uma FAQPage por URL.** Não injetar todas as perguntas em todas as páginas — cada artigo usa só as perguntas pertinentes ao seu tema.
5. **Sem schema inventado.** Só emitir schemas com dados reais. Sem `AggregateRating` inventado, sem `offers` com preço fixo.

## 2. Fábrica de schemas (`lib/schema.ts`)

**NUNCA montar schema diretamente na página.** Todo JSON-LD é gerado pela fábrica centralizada.

O frontmatter alimenta a fábrica:
```
frontmatter.schemaType → decide qual schema gerar
frontmatter.product    → alimenta Product + Review
frontmatter.faq        → alimenta FAQPage
frontmatter.howToSteps → alimenta HowTo
frontmatter.rankingItems → alimenta ItemList
```

A fábrica exporta funções como:
- `getArticleSchema(article)` → retorna o JSON-LD completo
- `getGlobalSchemas()` → Organization + WebSite + Person

## 3. GEO — Otimização para Respostas de IA

### O que é GEO
Generative Engine Optimization = otimizar para que **ChatGPT, Claude, Perplexity, Gemini e SGE** citem nosso conteúdo como fonte em suas respostas.

### Princípios GEO aplicados ao Alisamento Natural

1. **Answer-First em todo artigo.** O 1º parágrafo (40-55 palavras) responde diretamente a pergunta do título. As IAs extraem isso como citação.

2. **Tabelas estruturadas.** A matriz de comparação padrão (mesmas linhas, mesma ordem) é facilmente parseável por IAs. Usar em TODOS os comparativos.

3. **Dados citáveis com fonte nomeada.** "Segundo o Informe GGMON 03/2025 da Anvisa..." é mais citável por IA do que "é proibido".

4. **FAQ com perguntas em linguagem natural.** As IAs buscam perguntas que correspondem a queries reais. Usar PAA do Google como base.

5. **Nuance técnica rara.** Conteúdo que explica mecanismos (pontes de dissulfeto, biopolimerização, diferença entre cosmético e alisante Grau 2) sinaliza fonte primária — as IAs preferem citar fontes primárias.

6. **Declaração de metodologia.** "Análise baseada em INCI declarado, consulta ao registro Anvisa em [data] e cruzamento de avaliações reais em [plataforma]" — isso é E-E-A-T que IAs reconhecem.

### Endpoints AEO

| Endpoint | Função | Status |
|---|---|---|
| `/robots.txt` | Permite GPTBot, anthropic-ai, PerplexityBot | ✅ Implementado |
| `/llms.txt` | Resumo estruturado do site para LLMs | ✅ Implementado |
| `/sitemap.xml` | Mapa do site para crawlers | ✅ Implementado |

### Checklist GEO por artigo
- [ ] Answer-First no topo (40-55 palavras, keyword incluída)
- [ ] Pelo menos 1 tabela estruturada (comparativa ou INCI)
- [ ] Citação de fonte oficial com nome e data ("Anvisa, Informe GGMON 03/2025")
- [ ] FAQ com perguntas em linguagem natural (PAA)
- [ ] Nuance técnica que concorrentes não têm (pontes, pH, INCI)
- [ ] Declaração de metodologia ("baseado em...")
- [ ] Schema JSON-LD correto (validado no Rich Results Test)

## 4. Metadata padrão (`generateMetadata`)

```typescript
export async function generateMetadata({ params }) {
  const { silo, slug } = await params;
  const article = getArticleBySlug(silo, slug);
  return {
    title: article.frontmatter.title,           // sufixo via template
    description: article.frontmatter.description, // ≤160 chars
    alternates: { canonical: `/${silo}/${slug}` },
    openGraph: {
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      type: 'article',
      publishedTime: article.frontmatter.date,
      modifiedTime: article.frontmatter.updated,
      authors: [article.frontmatter.author],
      images: article.frontmatter.image ? [article.frontmatter.image] : [],
    },
  };
}
```

- `metadataBase` resolve canônicos relativos automaticamente.
- Template de título: `%s | Alisamento Natural` (definido no layout).
- Imagem OG padrão se não houver `image:` no frontmatter.
