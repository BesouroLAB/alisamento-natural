/**
 * Dicionário centralizado de links de afiliado.
 * 
 * Toda URL de afiliado do site nasce aqui. O SmartLink e a rota /go/[slug]
 * consomem este dicionário para gerar redirects limpos com tracking.
 * 
 * Suporta tanto Monetizze (Hidraliso) quanto Amazon Associados.
 */

export type AfiliadoProvider = 'monetizze' | 'amazon';

export interface AfiliadoLink {
  provider: AfiliadoProvider;
  /** URL final com tracking (Monetizze) ou ASIN (Amazon) */
  url: string;
  /** Nome do produto para analytics/logs */
  productName: string;
}

export const AMAZON_TAG = 'alisnaturl-20'; // Tag Amazon Associados

/**
 * Dicionário: slug curto → link de afiliado.
 * A rota /go/[slug] faz redirect 301 para a URL final.
 */
export const LINKS_AFILIADO: Record<string, AfiliadoLink> = {
  // ── Monetizze (Hidraliso) ──
  'hidraliso-oficial': {
    provider: 'monetizze',
    url: 'https://app.monetizze.com.br/r/AGF20985468/?u=JJ82891',
    productName: 'Hidraliso Alisante de Chuveiro',
  },

  // ── Amazon Associados ──
  'la-bella-liss': {
    provider: 'amazon',
    url: 'https://www.amazon.com.br/dp/B07NWZGLYV',
    productName: 'La Bella Liss Progressiva No Chuveiro',
  },
  'super-poderes': {
    provider: 'amazon',
    url: 'https://www.amazon.com.br/s?k=super+poderes+progressiva+chuveiro',
    productName: 'Super Poderes Progressiva de Chuveiro',
  },
  'fioterapia': {
    provider: 'amazon',
    url: 'https://www.amazon.com.br/s?k=fioterapia+progressiva',
    productName: 'Fioterapia Progressiva Capilar',
  },
  'arovida': {
    provider: 'amazon',
    url: 'https://www.amazon.com.br/s?k=arovida+progressiva+chuveiro',
    productName: 'Arovida Progress no Chuveiro',
  },
  'alise-hair': {
    provider: 'amazon',
    url: 'https://www.amazon.com.br/s?k=alise+hair+progressiva+chuveiro',
    productName: 'Alise Hair Progressiva no Chuveiro',
  },
  'knut-ultra-liss': {
    provider: 'amazon',
    url: 'https://www.amazon.com.br/s?k=knut+ultra+liss',
    productName: 'Knut Ultra Liss',
  },
};

/**
 * Monta a URL final de afiliado.
 * - Amazon: adiciona tag de associado
 * - Monetizze: retorna a URL direta (tracking já embutido)
 */
export function getAffiliateUrl(slug: string): string {
  const link = LINKS_AFILIADO[slug];
  if (!link) return '/';

  if (link.provider === 'amazon') {
    const url = new URL(link.url);
    url.searchParams.set('tag', AMAZON_TAG);
    return url.toString();
  }

  return link.url;
}
