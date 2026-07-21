/**
 * Fonte única de verdade para identidade e URLs do site.
 * Todo metadata, JSON-LD, sitemap e rota programática DEVE ler daqui —
 * nunca hardcode domínio ou nome do site em páginas.
 */

export const SITE = {
  name: 'Alisamento Natural',
  tagline: 'A Verdade Sobre o Liso de Chuveiro',
  description:
    'Investigamos progressivas de chuveiro, alisamentos caseiros e tratamentos capilares sem formol. Análises honestas com base em avaliações reais, composição INCI e regulamentação Anvisa.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://alisamentonatural.com.br',
  locale: 'pt_BR',
  language: 'pt-BR',
  /** Tag do GA4 */
  gaId: 'G-JXFN3Q1TFC',
} as const;

/** Monta URL absoluta a partir de um path (ex: absoluteUrl('/sobre')) */
export function absoluteUrl(path: string = '/'): string {
  return new URL(path, SITE.url).toString();
}

/**
 * Registro de Silos — coração do SEO programático.
 * Cada silo é um hub temático (/[silo]) que agrupa artigos satélites.
 * Para lançar um novo silo: adicionar a pasta em /content/ E registrar aqui.
 * Silos não registrados aqui retornam 404 (evita rotas fantasma no Google).
 */
export interface SiloConfig {
  /** Slug da pasta em /content/ e da URL */
  slug: string;
  /** Nome exibido em breadcrumbs e no hub */
  title: string;
  /** H1 do hub do silo */
  headline: string;
  /** Meta description do hub (150-160 chars, com keyword principal) */
  description: string;
  /** Rótulo curto de categoria exibido nos cards */
  categoryLabel: string;
}

export const SILOS: Record<string, SiloConfig> = {
  'progressivas-de-chuveiro': {
    slug: 'progressivas-de-chuveiro',
    title: 'Progressivas de Chuveiro',
    headline: 'Progressivas de Chuveiro: Resenhas e Comparativos Honestos',
    description:
      'Investigamos as progressivas de chuveiro mais vendidas do Brasil: Hidraliso, La Bella Liss, Super Poderes e mais. Composição real, resultado e avaliações.',
    categoryLabel: 'Resenha',
  },
  'alisamento-caseiro': {
    slug: 'alisamento-caseiro',
    title: 'Alisamento Caseiro',
    headline: 'Alisamento Caseiro: O Que Funciona e O Que É Mito',
    description:
      'Receitas caseiras de alisamento com maizena, leite e vinagre: o que a ciência diz, o que realmente funciona e quando você precisa de tecnologia.',
    categoryLabel: 'Investigação',
  },
  comparativos: {
    slug: 'comparativos',
    title: 'Comparativos',
    headline: 'Comparativos: Qual Progressiva de Chuveiro Escolher?',
    description:
      'Comparativos lado a lado das progressivas de chuveiro mais populares. Preço, duração, resultado e composição para você decidir sem achismo.',
    categoryLabel: 'Versus',
  },
  cuidados: {
    slug: 'cuidados',
    title: 'Cuidados Pós-Química',
    headline: 'Cuidados e Manutenção do Liso',
    description:
      'Como cuidar do cabelo após alisamentos. Cronograma capilar, melhores shampoos sem sulfato e dicas para prolongar o efeito liso.',
    categoryLabel: 'Cuidados',
  },
};

export function getSiloConfig(slug: string): SiloConfig | null {
  return SILOS[slug] ?? null;
}
