# 📑 ÍNDICE GERAL CONSOLIDADO — Projeto Alisamento Natural
### Porta de entrada do time para todo o material produzido · Julho/2026

> Este documento lista e descreve tudo que foi entregue: dossiês de conhecimento, documentos estratégicos e os 25 artigos publicáveis mais a página institucional, organizados por função e por silo. Use-o como mapa de navegação. Ao lado de cada artigo está o slug/URL de destino no site (Next.js + MDX, `content/[silo]/[slug].mdx`).

---

## COMO O MATERIAL SE ORGANIZA
O projeto tem três camadas:
1. **Base de conhecimento (dossiês)** — o "cérebro" que alimenta o agente de conteúdo. Fatos, ciência, fórmulas, fontes.
2. **Documentos estratégicos** — plano de expansão, mapa de linkagem, revisão de fechamento. O "como" do projeto.
3. **Conteúdo publicável (25 artigos + página Sobre)** — o que vai ao ar, dividido nos 4 silos + institucional.

---

## 1. BASE DE CONHECIMENTO — DOSSIÊS (pasta `dossies_cabelosemformol/`)
O material de referência que o agente consulta antes de escrever. Cada dossiê é autossuficiente.

| Arquivo | Conteúdo |
|---|---|
| `README.md` | Índice dos dossiês + legenda de confiabilidade + regra de ouro |
| `00_FUNDAMENTOS_e_ESTRATEGIA.md` | Ciência do fio (pontes), E-E-A-T, FAQ mestre, compliance |
| `01_DOSSIE_ANVISA_FORMOL.md` | Regulação, riscos, dados oficiais — pilar de Trust |
| `02_DOSSIE_HIDRALISO.md` | Produto principal: composição, reputação, lacunas |
| `03_SILO_COMPARATIVOS_INDICE.md` | Estratégia do silo de duelos, matriz, ângulos, conversão |
| `04_DOSSIE_MAIZENA_CASEIRO.md` | Ciência dos caseiros, receitas, quebra de mito |
| `05_DOSSIE_CUIDADOS.md` | Pré e pós, cronograma, retenção |
| `concorrentes/01_LA_BELLA_LISS.md` | Dossiê do concorrente (INCI completo, pH) |
| `concorrentes/02_SUPER_PODERES.md` | Dossiê do concorrente |
| `concorrentes/03_ALISE_HAIR.md` | Dossiê do concorrente (alerta uso infantil) |
| `concorrentes/04_AROVIDA.md` | Dossiê do concorrente (INCI completo, DMDM) |
| `concorrentes/05_OUTROS.md` | Banco de menções (Mega Lizz, Néctar, Fioterapia etc.) |

> Observação: existe também o `DOSSIE_cabelosemformol.md` (versão mestre única, anterior à divisão em silos). Mantido como referência histórica; a versão de trabalho é a pasta acima.

---

## 2. DOCUMENTOS ESTRATÉGICOS (raiz)
O planejamento e o controle do projeto.

| Arquivo | Função |
|---|---|
| `PLANO_MESTRE_expansao_alisamentonatural.md` | Os 4 tiers, 20 keywords long-tail, PAA + schema JSON-LD, 3 templates de artigo, fontes oficiais |
| `MAPA_LINKAGEM_INTERNA_alisamentonatural.md` | Inventário com status, matriz quem→quem, auditoria de links, ordem de publicação |
| `REVISAO_ESTRATEGICA_fechamento.md` | Balanço do projeto, diferenciais, riscos, próximas fases, métricas |
| `ARTIGO_PILOTO_hidraliso_vs_labellaliss.md` | Piloto de calibração de tom (versão inicial do duelo principal) |
| `INDICE_GERAL_projeto.md` | Este documento |

---

## 3. CONTEÚDO PUBLICÁVEL — 21 ARTIGOS POR SILO

### 🟢 TIER 1 — Reviews / Money Pages (silo `progressivas-de-chuveiro/`)
| Arquivo | URL de destino |
|---|---|
| `RESENHA_la-bella-liss-progress-no-chuveiro.md` | /progressivas-de-chuveiro/la-bella-liss-progress-no-chuveiro-resenha |
| `RESENHA_fioterapia-progressiva.md` | /progressivas-de-chuveiro/fioterapia-progressiva-resenha |
| `RESENHA_arovida-progressiva-chuveiro.md` | /progressivas-de-chuveiro/arovida-progressiva-chuveiro-resenha |
| `RESENHA_alise-hair-progressiva-chuveiro.md` | /progressivas-de-chuveiro/alise-hair-progressiva-chuveiro-resenha |
| `RESENHA_super-poderes-progressiva-chuveiro.md` | /progressivas-de-chuveiro/super-poderes-progressiva-chuveiro-resenha |
| *(Hidraliso — resenha inicial já no site)* | /progressivas-de-chuveiro/hidraliso-funciona-resenha |

### 🔵 TIER 2 — Comparativos / Duelos (silo `comparativos/`)
| Arquivo | URL de destino |
|---|---|
| `PILOTO_hidraliso-vs-fioterapia.md` | /comparativos/hidraliso-vs-fioterapia |
| `DUELO_hidraliso-vs-super-poderes.md` | /comparativos/hidraliso-vs-super-poderes |
| `DUELO_la-bella-liss-vs-super-poderes.md` | /comparativos/la-bella-liss-vs-super-poderes |
| `COMPARATIVO_progressiva-barata-que-funciona.md` | /comparativos/progressiva-de-chuveiro-barata-que-funciona |
| *(Hidraliso vs La Bella Liss + hub de ranking já no site)* | /comparativos/hidraliso-vs-la-bella-liss · /comparativos/melhores-progressivas-de-chuveiro |

### 🟣 TIER 3 — Mitos / Receitas Caseiras (silo `alisamento-caseiro/`)
| Arquivo | URL de destino |
|---|---|
| `MITO_tapioca-no-cabelo-alisa.md` | /alisamento-caseiro/tapioca-no-cabelo-alisa |
| `MITO_acucar-no-cabelo-para-alisar.md` | /alisamento-caseiro/acucar-no-cabelo-para-alisar |
| `MITO_leite-de-coco-alisa-o-cabelo.md` | /alisamento-caseiro/leite-de-coco-alisa-o-cabelo |
| `MITO_vinagre-de-maca-alisa.md` | /alisamento-caseiro/vinagre-de-maca-alisa-ou-so-da-brilho |
| `MITO_soro-fisiologico-alisa.md` | /alisamento-caseiro/soro-fisiologico-alisa-o-cabelo |
| `MITO_gelatina-alisa-ou-reconstroi.md` | /alisamento-caseiro/gelatina-incolor-alisa-ou-reconstroi |
| `MITO_babosa-alisa-o-cabelo.md` | /alisamento-caseiro/babosa-alisa-o-cabelo |
| *(Maizena já no site)* | /alisamento-caseiro/alisamento-natural-com-maizena-funciona |

### 🟠 TIER 4 — Guias / Cuidados / Segurança (silo `cuidados/`)
| Arquivo | URL de destino |
|---|---|
| `GUIA_formol-o-que-diz-a-anvisa.md` | /cuidados/formol-no-cabelo-o-que-diz-a-anvisa |
| `GUIA_como-consultar-registro-anvisa.md` | /cuidados/como-saber-se-a-progressiva-e-registrada-na-anvisa |
| `PILOTO_gravida-pode-usar-progressiva-de-chuveiro.md` | /cuidados/progressiva-de-chuveiro-gravida-pode-usar |
| `GUIA_progressiva-e-tintura-compatibilidade.md` | /cuidados/progressiva-de-chuveiro-e-tintura-compatibilidade |
| *(Passo a passo Hidraliso já no site)* | /cuidados/como-usar-hidraliso-passo-a-passo |

### ⚪ INSTITUCIONAL (silo `institucional/`)
| Arquivo | URL de destino |
|---|---|
| `PAGINA_sobre.md` | /sobre |

> A página Sobre é peça de E-E-A-T (autor, método, transparência de afiliados). Deve ser linkada no menu e no rodapé de todas as páginas para distribuir autoridade.

---

## 4. PLACAR FINAL
- **Conteúdo publicável:** 25 artigos redigidos + página Sobre + 5 já existentes no site = **31 páginas** nos 4 silos + institucional.
- **Backlog:** zerado. Todo o plano de expansão foi produzido.
- **Links internos:** sem quebras nas peças prontas.
- **Base de conhecimento:** 12 dossiês + versão mestre.
- **Documentos estratégicos:** 4 (plano, mapa, revisão, piloto) + este índice.

---

## 5. CHECKLIST DE PUBLICAÇÃO (aplicar a cada artigo antes de subir)
- [ ] Preencher `updated: [AAAA-MM]` com o mês real
- [ ] Trocar CTAs pelos links de afiliado reais (`/go/[slug]` com `rel="sponsored nofollow"`)
- [ ] Confirmar que os links internos apontam para páginas já publicadas
- [ ] Injetar o FAQ visível + schema JSON-LD FAQPage (texto idêntico ao visível)
- [ ] Conferir registro do produto na Anvisa antes de afirmar regularidade
- [ ] Atualizar o HUB de ranking com a nova review/duelo (Regra E do mapa)
- [ ] Divulgação de afiliado visível na página (CDC + Google)

## 6. AÇÕES DE MAIOR RETORNO (pós-publicação)
1. **Atualizar o HUB** com as 6 reviews e 5 comparativos como spokes.
2. **Obter INCI + registro Anvisa do Hidraliso** — converte a última lacuna de autoridade em ativo (money page principal).
3. **Fotos próprias de teste** nas reviews (E-E-A-T "Experience").
4. **Página "Sobre" robusta** (Tiago Fernandes) + política editorial e de afiliados.
5. **Revisão semestral** — datar e atualizar preços, reputação e fórmulas.

> Detalhes de cada ponto no `REVISAO_ESTRATEGICA_fechamento.md`. Regras de linkagem e status no `MAPA_LINKAGEM_INTERNA_alisamentonatural.md`. Templates e keywords no `PLANO_MESTRE_expansao_alisamentonatural.md`.
