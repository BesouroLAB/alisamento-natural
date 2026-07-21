---
name: content-pipeline-an
description: "Pipeline de produção de conteúdo do Alisamento Natural. Define o fluxo completo de curadoria (dossiê → verificação ao vivo → redação → revisão → publicação). Regras estritas contra alucinação de IA (números, registros, pH). Análise de gap da concorrência e disponibilidade antes da escrita. Use SEMPRE que for produzir conteúdo novo ou revisar conteúdo existente."
---

# Pipeline de Conteúdo — Alisamento Natural

## Visão geral do fluxo

```
DOSSIÊ (materiais/01-dossies/)
    ↓
VERIFICAÇÃO AO VIVO (Anvisa, Reclame Aqui, site do fabricante)
    ↓
REDAÇÃO MDX (skill redator-alisamento-natural)
    ↓
REVISÃO (checklist abaixo)
    ↓
BUILD + VALIDAÇÃO (npm run build + Rich Results Test)
    ↓
PUBLICAÇÃO (lote controlado)
    ↓
ATUALIZAÇÃO DO INVENTÁRIO (skill alisamento-natural)
```

## Fase 1 — Dossiê (pesquisa prévia)

**Nenhum artigo nasce sem dossiê.** Antes de escrever:

1. **Verificar se já existe dossiê** em `materiais/01-dossies/` ou `materiais/01-dossies/concorrentes/`.
2. **Se existe:** ler integralmente. Identificar tags de confiabilidade:
   - `[FATO VERIFICÁVEL]` → pode usar como âncora de autoridade
   - `[ARGUMENTO DE VENDA]` → atribuir ("segundo a marca")
   - `[GANCHO SEO]` → oportunidade de keyword
   - `[DADO FORTE]` → estatística/estudo citável
   - `[LACUNA]` → dado a obter antes de publicar
3. **Se não existe:** criar dossiê de pesquisa ANTES de redigir. Mínimo:
   - INCI (se disponível) ou declaração de ausência
   - Status na Anvisa (registro/notificação)
   - Reputação (Reclame Aqui, avaliações de marketplace)
   - Claims vs fatos (separar marketing de ciência)
   - Fontes oficiais

## Fase 2 — Verificação ao vivo

**Obrigatório antes de toda redação.** Verificar no momento da escrita:

| O que verificar | Onde | Ação se mudou |
|---|---|---|
| Registro/notificação na Anvisa | `consultas.anvisa.gov.br` | Atualizar dossiê + artigo |
| Preço atual (faixa) | Site oficial + marketplaces | Ajustar faixa ou marcar `[CONFIRMAR]` |
| INCI / composição | Site do fabricante + rótulo | Atualizar tabela INCI |
| Reputação / reclamações | Reclame Aqui | Parafrasear novos relatos |
| Normas vigentes | gov.br/anvisa | Conferir RDC/IN citadas |

**Dado não verificado ao vivo = `[CONFIRMAR]`.** Nunca publique de memória.

## Fase 3 — Redação

Usar a skill `redator-alisamento-natural` seguindo o template do Tier correspondente.

### Regras anti-alucinação de IA (OBRIGATÓRIAS)

1. **Nunca inventar nota/rating.** Se não há avaliações reais suficientes, não dê nota.
2. **Nunca inventar INCI.** Se a marca não publica, dizer "a marca não divulga a fórmula completa".
3. **Nunca inventar pH.** Se não consta no rótulo/site oficial, dizer "não informado".
4. **Nunca inventar número de registro Anvisa.** Sem consulta ao vivo = "verifique na Anvisa".
5. **Nunca inventar depoimento.** Parafrasear relatos reais, citando a plataforma.
6. **Nunca inventar preço fixo.** Usar faixa + "confira o preço atual".
7. **Nunca afirmar segurança para gestante/criança.** Sempre "consulte seu médico".
8. **Nunca chamar DMDM Hydantoin de "formol".** É conservante doador — explicar a diferença.

### Regras de diferenciação entre produtos

- **Fioterapia ≠ progressiva de chuveiro cosmética.** Usa blend de ácidos, categoria distinta, possível Grau 2.
- **Hidraliso = premium com INCI agora conhecido.** Tratar com os dados reais do dossiê.
- **Alise Hair = alerta de uso infantil.** Sempre ressalvar.
- **Arovida = DMDM Hydantoin.** Explicar, não alarmar.

## Fase 4 — Revisão (checklist)

Rodar ANTES de entregar qualquer artigo:

### Compliance
- [ ] Zero preço fixo cravado
- [ ] Zero promessa de resultado permanente
- [ ] Registro Anvisa citado com nº de processo ou marcado `[CONFIRMAR]`
- [ ] Disclosure de afiliado visível
- [ ] Gestante/criança → "consulte profissional"
- [ ] Claims de marca atribuídos ("segundo a marca")

### SEO / Estrutura
- [ ] Frontmatter válido (title ≤65, description ≤160, date, author, schemaType)
- [ ] Answer-First no topo (40-55 palavras)
- [ ] FAQ visível = FAQ do frontmatter (texto idêntico)
- [ ] H1 único, hierarquia H2→H3 correta
- [ ] Links internos seguem regras A–G

### Qualidade editorial
- [ ] Prós E contras reais listados
- [ ] INCI publicado ou ausência declarada
- [ ] Fontes oficiais linkadas (Anvisa, acadêmicas, fabricante)
- [ ] Sem texto copiado de outro artigo do blog
- [ ] `[CONFIRMAR]` marcado onde dado não foi verificado

## Fase 5 — Build + Validação

1. `npm run build` — a validação de frontmatter em `lib/mdx.ts` roda aqui.
2. Conferir schemas gerados no HTML de output.
3. Google Rich Results Test na URL publicada (após deploy).
4. PageSpeed Insights para Core Web Vitals.

## Fase 6 — Publicação e atualização

1. Publicar em **lotes controlados** (5-10 artigos/semana, não centenas).
2. **Atualizar o inventário** na skill `alisamento-natural` (marcar ✅).
3. **Atualizar o hub de ranking** se for nova review (Regra E).
4. **Inserir links reversos** nos artigos existentes que devem apontar para o novo.
5. **Atualizar o mapa de linkagem** em `materiais/00-estrategia/MAPA_LINKAGEM_INTERNA_alisamentonatural.md`.

## Prioridade de produção (ordem recomendada)

1. **Fase A (alto impacto, baixo esforço):** publicar as 5 reviews novas + 4 duelos + atualizar hub.
2. **Fase B (escalar tráfego):** publicar os 7 mitos de cauda longa + guias de compatibilidade.
3. **Fase C (autoridade):** página Sobre robusta + fotos próprias + revisão semestral.
