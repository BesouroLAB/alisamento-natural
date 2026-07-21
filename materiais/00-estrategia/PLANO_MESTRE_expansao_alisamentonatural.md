# PLANO MESTRE DE EXPANSÃO EDITORIAL — Portal Alisamento Natural
### alisamentonatural.com.br · Deep Research · Julho/2026
**Curadoria/Autoridade:** Tiago Fernandes (16 anos em e-commerce/UX) — E-E-A-T de curador-investigador
**Stack:** Next.js 16 (App Router) · MDX programático `content/[silo]/[slug].mdx` · afiliados `/go/[slug]` com `rel="sponsored nofollow"`

> **Como ler este documento:** são os 4 entregáveis pedidos + requisito de fontes. Tudo pronto para virar tarefa no backlog editorial. Preços nunca são citados como valor fixo em texto (só faixas/atributos), conforme a regra do projeto. Toda afirmação química/regulatória tem link de fonte oficial na seção final.

---

## SUMÁRIO
1. [Pedido 1 — Tiers de conteúdo + linkagem interna](#pedido-1)
2. [Pedido 2 — 20 palavras-chave long-tail (com intenção e silo)](#pedido-2)
3. [Pedido 3 — People Also Ask (FAQ + Schema JSON-LD)](#pedido-3)
4. [Pedido 4 — Templates de artigo (Review, Duelo, Investigação)](#pedido-4)
5. [Fontes oficiais de referência (requisito obrigatório)](#fontes)

---

<a name="pedido-1"></a>
# 📥 PEDIDO 1 — TIERS DE CONTEÚDO E LINKAGEM INTERNA

## 1.1 Lógica dos Tiers (fluxo de autoridade e de dinheiro)
O funil de valor corre em duas direções que se cruzam:
- **Autoridade (link juice)** desce do topo (Tier 3/4, muito tráfego informacional) para as **Money Pages** (Tier 1) e **Duelos** (Tier 2).
- **Conversão** acontece nas Money Pages e Duelos, alimentadas pelo tráfego que chega pelos mitos/receitas e guias.

```
TIER 3 (Mitos/Receitas caseiras) ──┐  tráfego topo de funil (informacional)
TIER 4 (Guias/Cuidados/Segurança) ─┼──► TIER 2 (Duelos) ──► TIER 1 (Reviews / Money)
                                    │            ▲                 │
                                    └────────────┴─────── CTA afiliado /go/[slug]
```

## 1.2 Definição dos 4 Tiers e mapeamento nos silos
| Tier | Papel | Silo(s) MDX | Intenção | Monetização |
|---|---|---|---|---|
| **Tier 1 — Money Pages / Reviews** | Resenha de 1 produto de chuveiro | `progressivas-de-chuveiro/` | Comercial/Investigativa | Alta (link direto) |
| **Tier 2 — Duelos / Rankings** | A vs B e "melhores de [ano]" | `comparativos/` | Comercial | Alta |
| **Tier 3 — Mitos / Receitas** | Investiga receita caseira | `alisamento-caseiro/` | Informacional | Indireta (redireciona) |
| **Tier 4 — Manutenção / Guias / Segurança** | Passo a passo, cronograma, compatibilidade, Anvisa | `cuidados/` | Informacional/Investigativa | Média (contextual) |

## 1.3 Backlog de expansão por Tier (produtos e temas)

### TIER 1 — Reviews / Money Pages (`progressivas-de-chuveiro/`)
Já publicado: `hidraliso-funciona-resenha`.
Expandir (cada um vira uma Money Page):
- `la-bella-liss-progress-no-chuveiro-resenha`
- `super-poderes-progressiva-chuveiro-resenha`
- `alise-hair-progressiva-chuveiro-resenha`
- `arovida-progressiva-chuveiro-resenha`
- `fioterapia-progressiva-resenha` ⚠️ (ver nota regulatória abaixo)
- `mega-lizz-progressiva-resenha`
- `liss-divine-progressiva-chuveiro-resenha`

> ⚠️ **NOTA REGULATÓRIA IMPORTANTE (Fioterapia):** a Fioterapia **não é uma progressiva de chuveiro cosmética comum** — ela usa um **blend de ácidos** (lático, cítrico, salicílico, glicólico, mandélico) e se descreve como **alisamento semipermanente** que "modifica a estrutura da fibra". Isso a aproxima da categoria de **alisantes que exigem registro (RDC 906/2024)**, não da simples máscara de realinhamento. **Ao resenhar, tratar como categoria distinta** e reforçar a checagem de registro na Anvisa. Não classificar como "igual ao Hidraliso/La Bella Liss".

### TIER 2 — Duelos / Rankings (`comparativos/`)
Já publicados: `melhores-progressivas-de-chuveiro` (hub) e `hidraliso-vs-la-bella-liss`.
Expandir:
- `hidraliso-vs-super-poderes`
- `hidraliso-vs-fioterapia` (duelo "cosmética temporária vs ácida semipermanente" — ângulo forte)
- `la-bella-liss-vs-super-poderes`
- `hidraliso-vs-arovida`
- `progressiva-de-chuveiro-barata-que-funciona` (ranking por preço)
- `melhor-progressiva-de-chuveiro-para-cabelo-cacheado-crespo`
- `melhor-progressiva-de-chuveiro-para-loiro` (sem amarelar)

### TIER 3 — Mitos / Receitas (`alisamento-caseiro/`)
Já publicado: `alisamento-natural-com-maizena-funciona`.
Expandir (uma investigação por receita):
- `leite-de-coco-alisa-o-cabelo`
- `vinagre-de-maca-alisa-ou-so-da-brilho`
- `tapioca-no-cabelo-alisa` (goma/polvilho — mesma lógica do amido)
- `acucar-no-cabelo-para-alisar` (mito viral do "açúcar alisa")
- `gelatina-incolor-alisa-ou-reconstroi`
- `babosa-alisa-o-cabelo`
- `soro-fisiologico-alisa-o-cabelo`
- `bepantol-no-cabelo-para-alisar`
- `alisamento-caseiro-que-realmente-funciona` (verdade + ponte para chuveiro)

### TIER 4 — Manutenção / Guias / Segurança (`cuidados/`)
Já publicado: `como-usar-hidraliso-passo-a-passo`.
Expandir:
- `cronograma-capilar-pos-progressiva-de-chuveiro`
- `shampoo-sem-sulfato-para-progressiva-por-que-usar`
- `progressiva-de-chuveiro-e-tintura-compatibilidade`
- `progressiva-de-chuveiro-e-henê-pode-misturar`
- `progressiva-de-chuveiro-e-luzes-descoloracao-risco`
- `progressiva-de-chuveiro-gravida-pode-usar`
- `formol-no-cabelo-o-que-diz-a-anvisa` (pilar de segurança/Trust)
- `como-saber-se-a-progressiva-e-registrada-na-anvisa` (guia de consulta)
- `teste-de-mecha-e-prova-de-pele-passo-a-passo`

## 1.4 REGRAS DE LINKAGEM INTERNA (obrigatórias no MDX)

**Regra A — Toda receita caseira (Tier 3) linka para uma solução de chuveiro (Tier 1/2).**
No trecho de "redirecionamento honesto" (ver template), incluir 1 link contextual para a Money Page ou o ranking. Ex.: em `alisamento-natural-com-maizena-funciona`, âncora *"realinhador de chuveiro que de fato segura o liso"* → `/progressivas-de-chuveiro/hidraliso-funciona-resenha` ou `/comparativos/melhores-progressivas-de-chuveiro`.

**Regra B — Todo Duelo (Tier 2) linka para as duas Reviews (Tier 1) dos produtos comparados** e para o hub de ranking. Reviews **não** linkam para concorrentes diretos (evita vazar clique da Money Page).

**Regra C — Todo Review (Tier 1) linka para:** (1) o guia de passo a passo correspondente em `cuidados/`; (2) o hub `melhores-progressivas-de-chuveiro`; (3) o artigo de segurança da Anvisa quando citar formol/registro. O **CTA de afiliado** usa `/go/[slug]` com `rel="sponsored nofollow"`.

**Regra D — Guias de segurança/compatibilidade (Tier 4) linkam para as Reviews** dos produtos que resolvem a dúvida (ex.: `...gravida-pode-usar` → Reviews dos produtos sem ácido/ativo restrito) e para a fonte oficial Anvisa.

**Regra E — Hub de ranking (Tier 2) é o coração do silo:** linka para TODAS as Reviews (Tier 1) e recebe link de volta de todas elas (hub-and-spoke). É a página que concentra autoridade do silo comercial.

**Regra F — Âncoras descritivas, nunca "clique aqui".** Usar variações semânticas do tema-alvo. Máximo saudável de ~3–5 links internos contextuais por 1.000 palavras, priorizando os que cruzam Tier.

**Regra G — Cross-silo topo→money:** artigos de mito (Tier 3) e de segurança (Tier 4) que ranqueiam bem devem ter 1 link "dinheiro" acima da dobra secundária (após o Answer-First e a explicação científica), nunca no primeiro parágrafo (que é do Featured Snippet).

---

<a name="pedido-2"></a>
# 📥 PEDIDO 2 — 20 PALAVRAS-CHAVE LONG-TAIL (LACUNAS)

> Classificação: **C** = Comercial · **I** = Informacional · **INV** = Investigativa. Silo indicado para publicação.

### Progressivas de chuveiro emergentes / mais buscadas
| # | Palavra-chave (long-tail) | Intenção | Silo |
|---|---|---|---|
| 1 | "fioterapia progressiva vale a pena" | C/INV | comparativos ou progressivas-de-chuveiro |
| 2 | "nova fioterapia reformulada é boa" | INV | progressivas-de-chuveiro |
| 3 | "liss divine progressiva de chuveiro funciona" | C | progressivas-de-chuveiro |
| 4 | "progressiva de chuveiro com baba de quiabo" | INV | progressivas-de-chuveiro |
| 5 | "hidraliso é registrado na anvisa" | INV | cuidados (segurança) |
| 6 | "progressiva de chuveiro que não amarela o loiro" | C | comparativos |
| 7 | "progressiva de chuveiro para cabelo cacheado que funciona" | C | comparativos |
| 8 | "progressiva de chuveiro mais barata que funciona" | C | comparativos |

### Dúvidas sobre receitas caseiras de alisamento
| # | Palavra-chave (long-tail) | Intenção | Silo |
|---|---|---|---|
| 9 | "maizena alisa o cabelo de verdade" | INV | alisamento-caseiro |
| 10 | "por que meu cabelo fica duro depois da maizena" | I | alisamento-caseiro |
| 11 | "tapioca no cabelo alisa" | INV | alisamento-caseiro |
| 12 | "açúcar alisa o cabelo mito ou verdade" | INV | alisamento-caseiro |
| 13 | "leite de coco alisa ou hidrata o cabelo" | INV | alisamento-caseiro |
| 14 | "gelatina incolor alisa o cabelo" | INV | alisamento-caseiro |
| 15 | "alisamento caseiro que dura mais" | I | alisamento-caseiro |

### Incompatibilidades (tintura, luzes, henê)
| # | Palavra-chave (long-tail) | Intenção | Silo |
|---|---|---|---|
| 16 | "pode usar progressiva de chuveiro em cabelo com luzes" | I | cuidados |
| 17 | "progressiva de chuveiro em cima de henê pode" | I | cuidados |
| 18 | "progressiva de chuveiro descolore o cabelo tingido" | I | cuidados |
| 19 | "quanto tempo esperar para alisar depois da tintura" | I | cuidados |
| 20 | "progressiva de chuveiro e descoloração ao mesmo tempo faz mal" | INV | cuidados (segurança) |

> **Bônus de cauda longa (2ª onda):** "progressiva de chuveiro estraga o cabelo com o tempo", "realinhador de chuveiro pode todo dia", "diferença entre progressiva de chuveiro e botox capilar", "progressiva de chuveiro homem pode usar", "progressiva de chuveiro em cabelo com progressiva de salão".

---

<a name="pedido-3"></a>
# 📥 PEDIDO 3 — PEOPLE ALSO ASK (FAQ + SCHEMA JSON-LD)

> Perguntas reais recorrentes no Google/SGE, com resposta direta pronta para o bloco FAQ visível. Abaixo, o JSON-LD `FAQPage` para injeção. **Regra:** cada página usa só as perguntas pertinentes ao seu tema (não injetar todas em todas — evita FAQ genérica e canibalização de schema).

## 3.1 Banco de perguntas + respostas diretas

**Quanto tempo dura o efeito da progressiva de chuveiro / do Hidraliso?**
O efeito é temporário e varia conforme o tipo de fio e os cuidados: em média de 15 a 30 dias, com melhora cumulativa a cada aplicação. Shampoo sem sulfato e sem sal, água morna/fria e protetor térmico antes de secar prolongam bastante a duração.

**Progressiva de chuveiro alisa mesmo o cabelo?**
Ela realinha o fio e reduz volume e frizz temporariamente, dando aspecto mais liso e brilhoso. Não quebra as pontes de dissulfeto do cabelo, então não é um alisamento definitivo como o de salão. O resultado depende muito da secagem e da chapinha.

**Progressiva de chuveiro estraga o cabelo?**
As versões sem formol tendem a ser menos agressivas que alisamentos químicos fortes. O maior risco não está no produto em si, mas no calor da chapinha sem protetor térmico e no acúmulo por lavagem inadequada. Usar protetor térmico e shampoo suave reduz o risco.

**Grávida pode usar progressiva/realinhador de chuveiro?**
Não há consenso, e a orientação é conservadora: converse com seu obstetra antes e leia o rótulo. Evite qualquer produto que contenha ácido glioxílico ou formol. A Anvisa reforça a checagem de registro e a leitura das advertências da embalagem.

**Progressiva de chuveiro tem formol?**
As marcas da categoria se posicionam como sem formol. Ainda assim, confira o rótulo e o registro na Anvisa: o uso de formol como alisante é proibido no Brasil. Alguns produtos usam conservantes doadores de formol em baixa concentração, o que é diferente de formol como agente alisante.

**Posso usar progressiva de chuveiro em cabelo com luzes ou descolorido?**
Em geral sim, mas com cautela: fios descoloridos são mais porosos e frágeis. Faça teste de mecha antes e nunca combine alisamento com descoloração no mesmo dia. Evite produtos com ácido glioxílico em cabelo descolorido, pois o risco de dano aumenta muito com calor.

**Progressiva de chuveiro pode ser usada sobre henê?**
Henê contém metais e pode reagir de forma imprevisível com químicas. Faça sempre teste de mecha e prefira produtos cosméticos de realinhamento (sem ácidos alisantes) para reduzir risco. Na dúvida, espere o henê sair com o crescimento ou consulte um profissional.

**Maizena alisa o cabelo?**
Não. A maizena forma um filme na superfície do fio e reduz volume e frizz temporariamente, mas não penetra na fibra nem altera sua estrutura. O "liso" que aparece nos vídeos vem da escova e da chapinha, não do amido. Some em uma ou duas lavagens.

**Vinagre de maçã alisa o cabelo?**
Não. O vinagre de maçã sela a cutícula pelo pH ácido, o que dá brilho, reduz frizz e alinha a superfície do fio, mas não altera a estrutura interna nem quebra as ligações de dissulfeto. É acabamento e brilho, não alisamento.

**Soro fisiológico alisa o cabelo?**
Não. O soro fisiológico hidrata e ajuda a alinhar a cutícula, dando sensação de fios mais lisos, mas não altera a estrutura do cabelo. O efeito liso vem da hidratação somada à chapinha, e some com as lavagens.

**Gelatina alisa o cabelo?**
Não permanentemente. A gelatina forma um filme de proteína (colágeno) que dá liga, reduz frizz e alinha a superfície do fio, mas não altera a estrutura interna. O uso em excesso pode ressecar, e o efeito liso vem da chapinha.

**Babosa alisa o cabelo?**
Não. A babosa hidrata, define cachos e reduz frizz, dando aspecto mais alinhado, mas não altera a estrutura do fio nem a curvatura. A sensação de liso vem da hidratação e da chapinha, e some com as lavagens.

**Qual a diferença entre progressiva de chuveiro e progressiva de salão?**
A de salão usa agentes químicos que alteram a estrutura do fio (efeito duradouro, porém com mais risco). A de chuveiro é cosmética: realinha e sela temporariamente por ação térmica, sem transformar o cabelo. É mais segura, mas menos intensa e não permanente.

**Progressiva de chuveiro precisa de chapinha?**
Sim, na prática. Esses produtos são termoativados: o calor do secador e da chapinha é o que fixa o alinhamento. Sem essa etapa, o efeito liso é fraco e dura pouco.

## 3.2 Schema JSON-LD (FAQPage) — modelo para injeção
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quanto tempo dura o efeito da progressiva de chuveiro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O efeito é temporário e varia conforme o tipo de fio e os cuidados: em média de 15 a 30 dias, com melhora cumulativa a cada aplicação. Shampoo sem sulfato e sem sal, água morna ou fria e protetor térmico antes de secar prolongam a duração."
      }
    },
    {
      "@type": "Question",
      "name": "Progressiva de chuveiro alisa mesmo o cabelo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ela realinha o fio e reduz volume e frizz temporariamente, dando aspecto mais liso e brilhoso. Não quebra as pontes de dissulfeto do cabelo, então não é um alisamento definitivo como o de salão. O resultado depende da secagem e da chapinha."
      }
    },
    {
      "@type": "Question",
      "name": "Progressiva de chuveiro estraga o cabelo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As versões sem formol tendem a ser menos agressivas que alisamentos químicos fortes. O maior risco está no calor da chapinha sem protetor térmico e no acúmulo por lavagem inadequada, não no produto em si."
      }
    },
    {
      "@type": "Question",
      "name": "Grávida pode usar progressiva de chuveiro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não há consenso e a orientação é conservadora: converse com seu obstetra antes e leia o rótulo. Evite produtos com ácido glioxílico ou formol e verifique o registro na Anvisa."
      }
    },
    {
      "@type": "Question",
      "name": "Maizena alisa o cabelo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. A maizena forma um filme na superfície do fio e reduz volume temporariamente, mas não penetra na fibra nem altera sua estrutura. O liso dos vídeos vem da escova e da chapinha e some em uma ou duas lavagens."
      }
    },
    {
      "@type": "Question",
      "name": "Vinagre de maçã alisa o cabelo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. O vinagre de maçã sela a cutícula pelo pH ácido, o que dá brilho e reduz frizz, mas não altera a estrutura interna do fio nem quebra as ligações de dissulfeto. É acabamento e brilho, não alisamento."
      }
    },
    {
      "@type": "Question",
      "name": "Soro fisiológico alisa o cabelo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. O soro fisiológico hidrata e ajuda a alinhar a cutícula, dando sensação de fios mais lisos, mas não altera a estrutura do cabelo. O efeito liso vem da hidratação somada à chapinha e some com as lavagens."
      }
    },
    {
      "@type": "Question",
      "name": "Gelatina alisa o cabelo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não permanentemente. A gelatina forma um filme de proteína que dá liga e reduz frizz, mas não altera a estrutura interna do fio. O uso em excesso pode ressecar, e o efeito liso vem da chapinha."
      }
    },
    {
      "@type": "Question",
      "name": "Babosa alisa o cabelo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. A babosa hidrata, define cachos e reduz frizz, dando aspecto mais alinhado, mas não altera a estrutura do fio nem a curvatura. A sensação de liso vem da hidratação e da chapinha e some com as lavagens."
      }
    }
  ]
}
```
> **Boas práticas de schema:** injetar apenas as 3–6 perguntas visíveis na página; o texto do `Answer` deve bater com o texto visível (o Google penaliza divergência); uma FAQPage por URL. Cada artigo de mito usa a sua própria pergunta como âncora do schema, não todas de uma vez.

---

<a name="pedido-4"></a>
# 📥 PEDIDO 4 — TEMPLATES DE ARTIGO (ESQUELETOS MDX)

## 4.1 TEMPLATE — Review de Progressiva de Chuveiro (Tier 1 / Money Page)
```mdx
---
title: "[Produto] Funciona? Resenha Honesta e Composição Real [ano]"
description: "Análise investigativa da [Produto]: ativos, o que a Anvisa diz, prós, contras e para quem vale."
silo: "progressivas-de-chuveiro"
slug: "[produto]-funciona-resenha"
tipo: "review"
updated: "[AAAA-MM]"
---

# [Produto] Funciona? Resenha Honesta e Composição Real

<VeredictoRapido nota={x.x}>
Resumo em 2–3 frases: o que é, para quem serve, principal força e principal ressalva.
Ancorar expectativa: "realinha e reduz frizz; não é alisamento definitivo."
</VeredictoRapido>

## O que é a [Produto] e como funciona
[Categoria: cosmética de realinhamento térmico OU ácida semipermanente — deixar claro.]
[Mecanismo real: pontes de hidrogênio + selagem de cutícula, ativado por calor.]

## Composição / Ativos (INCI)
<TabelaINCI>
| Ativo | Função | Observação |
|---|---|---|
[Se a marca publica INCI, listar. Se NÃO publica, declarar isso explicitamente
como ponto de transparência — não inventar ingredientes.]
</TabelaINCI>

## Avaliações reais de compradoras
[Parafrasear relatos reais (Reclame Aqui / marketplaces), citando a plataforma.
Equilibrar elogios e queixas. Nunca copiar depoimento na íntegra.]

## Prós e Contras
<ProsContras>
Prós: [...]
Contras: [...]  (sempre listar contras reais — sem isso não há Trust)
</ProsContras>

## Modo de uso rápido
[3–6 passos. Enfatizar a ativação térmica. Link para o guia completo em /cuidados/.]

<AlertaAnvisa>
Verifique o registro/notificação na Anvisa antes de comprar (link de consulta na seção de fontes).
Formol como alisante é proibido; ácido glioxílico não é autorizado para alisamento.
Faça teste de mecha e prova de pele. Alisantes são proibidos para crianças.
</AlertaAnvisa>

## Veredito: vale a pena?
[Por perfil de leitora. CTA honesto → /go/[slug] rel="sponsored nofollow".]

## Perguntas frequentes
[3–5 PAA pertinentes + <FAQSchema/>]

## Fontes
[Links oficiais: Anvisa, página do fabricante, estudos.]
```

## 4.2 TEMPLATE — Duelo / Comparativo (Tier 2)
```mdx
---
title: "[Produto A] vs [Produto B]: qual a melhor progressiva de chuveiro? [ano]"
description: "Comparativo honesto entre [A] e [B]: fórmula, preço, eficácia por tipo de fio e veredito por perfil."
silo: "comparativos"
slug: "[a]-vs-[b]"
tipo: "duelo"
updated: "[AAAA-MM]"
---

# [Produto A] vs [Produto B]: qual a melhor?

<AnswerFirst>
Veredito curto em 40–55 palavras: quem ganha em quê e "depende do perfil".
</AnswerFirst>

## Comparação rápida
<TabelaComparativa>
| Critério | [A] | [B] |
|---|---|---|
| Categoria (cosmética/ácida) | | |
| Publica INCI? | | |
| pH | | |
| Tempo de ação | | |
| Melhor para (tipo de fio) | | |
| Ponto de atenção | | |
[Mesmas linhas, mesma ordem, sempre.]
</TabelaComparativa>

## O que é cada uma (2 parágrafos neutros)
## Fórmula lado a lado (INCI; onde faltar, dizer que falta)
## Eficácia por tipo de cabelo (liso/ondulado/cacheado/crespo)
## Preço e custo-benefício (faixa e rendimento, sem valor fixo cravado)
## Segurança e o que a Anvisa diz  [link /cuidados/ + fonte oficial]
## Reputação e reclamações reais (equilibrado)

## Veredito por perfil
"Escolha [A] se… / Escolha [B] se…"  — nunca vitória absoluta.
[CTA duplo /go/[slug-a] e /go/[slug-b], ambos rel="sponsored nofollow".]

## FAQ  [PAA pertinentes + <FAQSchema/>]
## Fontes  [links oficiais]

<!-- Linkagem obrigatória: Reviews de A e de B + hub de ranking -->
```

## 4.3 TEMPLATE — Investigação de Alisamento Caseiro (Tier 3 / Topo)
```mdx
---
title: "[Receita] Alisa o Cabelo? A Verdade (com base científica) [ano]"
description: "Investigação: [receita] alisa mesmo? Entenda a ciência do fio e o que ela realmente faz."
silo: "alisamento-caseiro"
slug: "[receita]-alisa-o-cabelo"
tipo: "investigacao"
updated: "[AAAA-MM]"
---

# [Receita] Alisa o Cabelo? A Verdade

<AnswerFirst>
1º parágrafo = resposta direta em 40–55 palavras (alvo de Featured Snippet):
"Não alisa permanentemente. [Ingrediente] faz X (filme/hidratação/redução de volume)
temporário; o liso vem da escova e da chapinha. Some em 1–2 lavagens."
</AnswerFirst>

## Por que [receita] NÃO altera a estrutura do fio (a ciência)
[Explicar pontes de hidrogênio vs dissulfeto. O ingrediente caseiro não penetra
no córtex nem quebra pontes de enxofre → sem alisamento real. Citar fonte acadêmica.]

<TabelaPontes>
| Ligação | Força | Rompe com | Efeito |
|---|---|---|---|
| Hidrogênio | fraca | água + calor | temporário (chapinha) |
| Salina | média | pH | temporário |
| Dissulfeto (enxofre) | forte | química de salão | permanente |
</TabelaPontes>

## O que [receita] realmente faz no cabelo
[Filme, brilho, redução de volume, "desmaia". Gerenciar expectativa.]

## A receita (passo a passo) — satisfaz a intenção de busca
[Mostrar a receita real. Avisos: não aplicar quente, prova de alergia, build-up.]

## Riscos e cuidados
[Chapinha sem protetor = dano; acúmulo; cheiro; etc.]

## Quer um liso que dure mais? (redirecionamento honesto)
[Ponte para realinhador de chuveiro — link Tier 1/2. Sem ridicularizar a leitora.]
Ex.: "…um realinhador de chuveiro sem formol segura o liso por mais tempo →
[link para Review ou ranking]"

## FAQ  [PAA da receita + <FAQSchema/>]
## Fontes  [links acadêmicos e oficiais]
```

---

<a name="fontes"></a>
# ⚠️ FONTES OFICIAIS DE REFERÊNCIA (requisito obrigatório)

> Toda afirmação química/regulatória nos artigos deve linkar a fonte primária. Lista curada e verificada (jul/2026).

## Regulatório — Anvisa / normas
- **Informe de Segurança GGMON nº 03/2025 (Cosmetovigilância)** — alisantes irregulares, formol e ácido glioxílico:
  https://www.gov.br/anvisa/pt-br/assuntos/fiscalizacao-e-monitoramento/informes-de-seguranca/informe-de-seguranca-ggmon-no-03-2025-cosmetovigilancia
- **Notícia Anvisa (07/07/2025)** — alerta sobre alisantes irregulares:
  https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2025/anvisa-alerta-para-riscos-a-saude-associados-ao-uso-de-alisantes-capilares-irregulares
- **Anvisa — Perguntas frequentes: Alisantes** (formol 0,2% conservante / 5% unhas / proibido alisar; proibido para crianças; obrigatoriedade de registro):
  https://www.gov.br/anvisa/pt-br/acessoainformacao/perguntasfrequentes/cosmeticos/alisantes
- **Operação de fiscalização (07/07/2025)** — apreensão de ácido glioxílico:
  https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2025/alisamento-seguro-operacao-fiscaliza-fabricantes-de-alisantes-irregulares
- **Consulta de produtos registrados/notificados na Anvisa** (ferramenta oficial):
  https://consultas.anvisa.gov.br/#/cosmeticos/registrados/
- **Normas citáveis:** RDC nº 906/2024 (requisitos técnicos para alisantes) · IN nº 220/2023 (lista de ativos permitidos p/ alisar/ondular; ácido glioxílico não autorizado) · RDC 240/2018 (regularização de cosméticos; grau de risco).

## Ciência do fio / química capilar (fontes acadêmicas e técnicas)
- **A ciência por trás do alisamento capilar (ICosmetologia)** — hidróxidos, tióis, glioxílico, lantionização, biopolimerização:
  https://icosmetologia.com.br/blog/a-ciencia-por-tras-do-alisamento-capilar
- **Dissertação USP/FCF** — mecanismos de alisamento (hidróxidos e tioglicolato; quebra de dissulfeto):
  https://www.teses.usp.br/teses/disponiveis/9/9139/tde-07052019-154247/publico/Alessandra_Mari_Goshiyama_ME_Original.pdf
- **"A química do cabelo" (UECE/ENEQ)** — ligações S-S, cistina, cutícula:
  https://www.uece.br/eventos/enequifortaleza2015/anais/trabalhos_completos/142-29529-10012015-172724.pdf
- **Cabelo — verbete técnico (estrutura: cutícula, córtex, cistina, pontes dissulfeto):**
  https://pt.wikipedia.org/wiki/Cabelo  *(usar como apoio; preferir citar a fonte primária que ele referencia)*

## Fabricantes (páginas oficiais — para INCI e claims, sempre atribuídos)
- La Bella Liss (Progress No Chuveiro, INCI e pH): https://www.labellaliss.com.br/progress-no-chuveiro-500ml
- Arovida (INCI, CNPJ, pH): https://www.arovidacosmeticos.com.br/mascara-capilar-progressiva-no-chuveiro
- Hidraliso (política de reembolso/garantia): https://hidraliso.com.br/reembolso/

> **Nota de integridade:** páginas de fabricante e de afiliados servem para descrever claims e composição *declarada*, sempre com atribuição ("segundo a marca"). Fatos de saúde/química vêm das fontes Anvisa/acadêmicas acima. Nunca citar preço fixo em texto; usar faixas ou remeter ao site do parceiro.

---

## CHECKLIST DE PUBLICAÇÃO (colar em cada card do backlog)
- [ ] Answer-First / Veredito no topo (40–55 palavras)
- [ ] Categoria correta declarada (cosmética temporária vs ácida semipermanente)
- [ ] INCI publicado OU declaração explícita de que a marca não publica
- [ ] Prós **e** contras reais (Trust)
- [ ] AlertaAnvisa + link de consulta de registro
- [ ] Linkagem interna conforme regras A–G
- [ ] FAQ visível + JSON-LD FAQPage (texto idêntico)
- [ ] CTA `/go/[slug]` com `rel="sponsored nofollow"`
- [ ] Fontes oficiais linkadas; sem preço fixo cravado
- [ ] Campo `updated: [AAAA-MM]` preenchido
