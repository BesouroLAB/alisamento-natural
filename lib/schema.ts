import { SITE, absoluteUrl, SiloConfig } from '@/lib/site';
import { ArticleData, FaqItem } from '@/lib/mdx';
import { AUTOR_TIAGO, getAutorSchema } from '@/data/autor';

/**
 * Fábrica de dados estruturados (schema.org) — SEO programático.
 * Todo JSON-LD do site nasce aqui, alimentado pelo frontmatter dos artigos
 * e pelo registro de silos. Nenhuma página monta schema à mão.
 *
 * IDs canônicos (@id) permitem que o Google conecte as entidades entre páginas:
 * Organization <- publisher de todo Article <- author Person <- ProfilePage.
 */

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;
const AUTHOR_ID = `${SITE.url}/sobre#tiago-fernandes`;

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/favicon.svg'),
    },
    founder: { '@id': AUTHOR_ID },
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: SITE.language,
    publisher: { '@id': ORG_ID },
  };
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    ...getAutorSchema(),
    '@id': AUTHOR_ID,
    worksFor: { '@id': ORG_ID },
  };
}

export function getProfilePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: absoluteUrl('/sobre'),
    name: `Sobre ${AUTOR_TIAGO.name} | ${SITE.name}`,
    inLanguage: SITE.language,
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: { '@id': AUTHOR_ID },
  };
}

/**
 * FAQPage — gerado a partir do campo `faq` do frontmatter.
 * A seção visível do artigo (componente FaqSection) usa os MESMOS dados,
 * garantindo o espelhamento schema ↔ página que o Google exige.
 */
export function getFaqSchema(faq: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function getSiloCollectionSchema(silo: SiloConfig, articles: ArticleData[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    url: absoluteUrl(`/${silo.slug}`),
    name: silo.title,
    description: silo.description,
    inLanguage: SITE.language,
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: articles.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: article.frontmatter.title,
        url: absoluteUrl(`/${article.silo}/${article.slug}`),
      })),
    },
  };
}

/**
 * Gera o schema principal de um artigo a partir do frontmatter:
 * - schemaType "review" + product => Product com `review` aninhado
 * - schemaType "howto" => HowTo com steps
 * - schemaType "ranking" => ItemList com items
 * - caso contrário => Article
 */
export function getArticleSchema(article: ArticleData) {
  const { frontmatter } = article;
  const url = absoluteUrl(`/${article.silo}/${article.slug}`);
  const image = frontmatter.image ? absoluteUrl(frontmatter.image) : undefined;

  const authorObj =
    frontmatter.author === AUTOR_TIAGO.name
      ? {
          '@type': 'Person',
          '@id': AUTHOR_ID,
          name: AUTOR_TIAGO.name,
          url: absoluteUrl('/sobre'),
        }
      : {
          '@type': 'Organization',
          '@id': ORG_ID,
          name: SITE.name,
          url: SITE.url,
        };

  // Product + Review (resenhas com nota editorial)
  const product = frontmatter.product;
  if (frontmatter.schemaType === 'review' && product) {
    const productImage = image ?? (product.image ? absoluteUrl(product.image) : undefined);

    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: frontmatter.description,
      url,
      inLanguage: SITE.language,
      ...(productImage ? { image: productImage } : {}),
      ...(product.brand ? { brand: { '@type': 'Brand', name: product.brand } } : {}),
      review: {
        '@type': 'Review',
        name: frontmatter.title,
        datePublished: new Date(frontmatter.date).toISOString(),
        author: authorObj,
        publisher: { '@id': ORG_ID, name: SITE.name },
        ...(typeof product.rating === 'number'
          ? {
              reviewRating: {
                '@type': 'Rating',
                ratingValue: product.rating,
                bestRating: 5,
                worstRating: 0,
              },
            }
          : {}),
      },
    };
  }

  // HowTo (tutoriais passo a passo)
  if (frontmatter.schemaType === 'howto' && frontmatter.howToSteps) {
    return {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: frontmatter.title,
      description: frontmatter.description,
      url,
      ...(frontmatter.howToTime ? { totalTime: frontmatter.howToTime } : {}),
      ...(frontmatter.howToSupply
        ? {
            supply: frontmatter.howToSupply.map((s) => ({
              '@type': 'HowToSupply',
              name: s,
            })),
          }
        : {}),
      ...(frontmatter.howToTool
        ? {
            tool: frontmatter.howToTool.map((t) => ({
              '@type': 'HowToTool',
              name: t,
            })),
          }
        : {}),
      step: frontmatter.howToSteps.map((step, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: step.name,
        text: step.text,
      })),
    };
  }

  // ItemList (rankings e listagens)
  if (frontmatter.schemaType === 'ranking' && frontmatter.rankingItems) {
    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: frontmatter.title,
      description: frontmatter.description,
      numberOfItems: frontmatter.rankingItems.length,
      itemListElement: frontmatter.rankingItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        ...(item.url ? { url: item.url } : {}),
      })),
    };
  }

  // Article (padrão)
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.description,
    url,
    mainEntityOfPage: url,
    inLanguage: SITE.language,
    datePublished: new Date(frontmatter.date).toISOString(),
    dateModified: article.lastModified.toISOString(),
    author: authorObj,
    publisher: { '@id': ORG_ID, name: SITE.name },
    ...(image ? { image } : {}),
  };
}
