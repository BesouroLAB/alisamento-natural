# REVISÃO ESTRATÉGICA DE FECHAMENTO — Portal Alisamento Natural
### Balanço do projeto de conteúdo · Julho/2026

> Consolidação do que foi produzido, do estado atual da arquitetura e das recomendações para as próximas fases. Documento de gestão, não de conteúdo.

---

## 1. O QUE FOI ENTREGUE

### Base de conhecimento (dossiês para o agente)
Fundamentos científicos, estratégia E-E-A-T, dossiê Anvisa, dossiê Hidraliso, dossiês de 5 concorrentes, dossiê maizena/caseiro e dossiê cuidados. Mais o Plano Mestre de expansão (4 tiers, 20 keywords, PAA+schema, 3 templates) e o Mapa de Linkagem interna.

### Conteúdo publicável (16 peças prontas)
**Tier 1 — Reviews (5):** Hidraliso, La Bella Liss, Fioterapia, Arovida, Alise Hair.
**Tier 2 — Comparativos (3):** hub de ranking, Hidraliso vs La Bella Liss, Hidraliso vs Fioterapia.
**Tier 3 — Mitos (4):** maizena, tapioca, açúcar, leite de coco.
**Tier 4 — Guias (4):** passo a passo, grávida, formol/Anvisa, consulta de registro.

### Recursos de apoio
Artigo-piloto comparativo (molde de tom), diagrama Mermaid do silo, e este documento.

## 2. ESTADO DA ARQUITETURA
- **Cobertura:** os 4 silos têm base sólida. Nenhum silo "oco".
- **Linkagem:** zero links quebrados nas 16 peças. Hub-and-spoke funcionando.
- **Money pages:** as 5 principais progressivas resenhadas; todas recebem tráfego de topo (mitos) e de segurança (guias).
- **Lacuna de entrada (Alise Hair / Arovida):** resolvida — recebem links dos guias de segurança pelos temas específicos (DMDM e uso infantil).

## 3. DIFERENCIAIS COMPETITIVOS CONSTRUÍDOS
1. **Honestidade técnica como marca.** Todo review admite contras reais e nunca promete liso permanente. Isso é E-E-A-T e é o que os comparativos rasos dos concorrentes não têm.
2. **Precisão de categoria.** O projeto trata corretamente a diferença entre progressiva de chuveiro cosmética (temporária) e alisante ácido Grau 2 (Fioterapia). Quase nenhum concorrente acerta isso.
3. **Transparência de fórmula como critério.** INCI publicado vira argumento de ranqueamento; a ausência dele (Hidraliso) é cobrada abertamente.
4. **Fontes oficiais.** Toda afirmação de saúde/regulatória tem link gov.br/Anvisa ou acadêmico. Blinda juridicamente e eleva autoridade.
5. **Nuance científica rara.** O ácido glioxílico biopolimeriza, não quebra dissulfeto; o amido reveste, não penetra. Nível de detalhe que sinaliza fonte primária.

## 4. RISCOS E PONTOS DE ATENÇÃO
- **Lacuna do INCI do Hidraliso (money page principal).** Persiste. Obter INCI + registro do rótulo físico é a ação de maior impacto no E-E-A-T. Enquanto isso, os textos são honestos ("a marca não publica").
- **Dados que expiram.** Preços (mantidos como faixa, nunca fixos), reputação de Reclame Aqui e fórmulas mudam. Definir revisão semestral com o campo `updated`.
- **Fioterapia sensível.** Por ser Grau 2 e ter histórico de falsificação, manter o alerta regulatório e o "compre no oficial" sempre visíveis.
- **Compliance de afiliado.** Garantir `rel="sponsored nofollow"` em todo `/go/` e a divulgação de afiliado visível (CDC + Google).
- **Atualizar o HUB.** Incluir Arovida e Alise Hair como spokes do ranking (senão as 2 novas reviews não recebem link do hub).

## 5. PRÓXIMAS FASES (priorizadas)

**Fase A — Fechar o núcleo comercial (alto impacto, baixo esforço)**
1. Publicar R-superpoderes → destrava 2 duelos.
2. Publicar D-hid-super e D-labella-super → captura de marca "Super Poderes".
3. Publicar D-economico (barata que funciona) → reforça Arovida + Alise Hair.
4. Atualizar o HUB com as 5 reviews.

**Fase B — Escalar tráfego de topo (SGE/Perplexity)**
5. Mitos de cauda longa: vinagre de maçã, gelatina, babosa, soro fisiológico.
6. Guias de compatibilidade: tintura, luzes/descoloração, henê (alta intenção informacional).

**Fase C — Autoridade e frescor**
7. Obter e publicar o INCI + registro Anvisa do Hidraliso (converter a lacuna em ativo).
8. Fotos próprias de teste nas money pages (E-E-A-T "Experience").
9. Página "Sobre" robusta (Tiago Fernandes) + política editorial e de afiliados.
10. Rotina de revisão semestral (datar e atualizar preços/reputação/fórmulas).

## 6. MÉTRICA DE SUCESSO SUGERIDA POR TIER
- **T1 (reviews):** cliques em `/go/` e taxa de conversão de afiliado.
- **T2 (comparativos):** posição para "[marca] vs" e "melhor progressiva de chuveiro".
- **T3 (mitos):** impressões e featured snippets / citações em SGE.
- **T4 (guias):** tempo na página e assistência de conversão (tráfego que depois vai à money page).

## 7. RESUMO EXECUTIVO
O portal saiu de 5 artigos iniciais para uma arquitetura de 4 silos com 16 peças coesas, linkagem interna sem quebras, base científica com fontes oficiais e uma identidade editorial de investigação honesta que o diferencia dos afiliados genéricos. O núcleo está pronto para receber tráfego e converter. A prioridade imediata é fechar o bloco de "Super Poderes" (Fase A) e, em paralelo, atacar a única lacuna estrutural relevante: o INCI do Hidraliso.
