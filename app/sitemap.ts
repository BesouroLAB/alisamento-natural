import type { MetadataRoute } from 'next';
import { getAllArticles, getSilos } from '@/lib/mdx';
import { absoluteUrl, SILOS } from '@/lib/site';

/**
 * Sitemap 100% programático: novas páginas entram automaticamente
 * ao criar o arquivo .mdx (artigos) ou registrar o silo em SILOS.
 * 
 * lastModified vem do campo `updated` do frontmatter — não é mais
 * uma data fixa hardcoded.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();

  // Rotas estáticas (alta prioridade)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl('/'),
      lastModified: articles[0]?.lastModified ?? new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: absoluteUrl('/sobre'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Hubs de silo (prioridade alta — são páginas de categoria)
  const siloRoutes: MetadataRoute.Sitemap = getSilos()
    .filter((silo) => silo in SILOS)
    .map((silo) => {
      const siloArticles = articles.filter((a) => a.silo === silo);
      return {
        url: absoluteUrl(`/${silo}`),
        lastModified: siloArticles[0]?.lastModified ?? new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      };
    });

  // Artigos individuais
  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: absoluteUrl(`/${article.silo}/${article.slug}`),
    lastModified: article.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...siloRoutes, ...articleRoutes];
}
