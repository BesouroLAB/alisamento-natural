import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';

/**
 * robots.txt SOTA — padrão CAsemform/Funil do Zero.
 * 
 * Regra única para todos os crawlers (incluindo AI bots).
 * Bloqueia apenas /go/ (redirects de afiliado).
 * 
 * Nota: NÃO bloquear /_next/ — o Googlebot precisa acessar
 * os assets para renderizar SSR/ISR corretamente.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/go/'],
    },
    sitemap: absoluteUrl('/sitemap.xml'),
  };
}
