import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticlesBySilo, getSilos } from '@/lib/mdx';
import { getSiloConfig, SILOS } from '@/lib/site';
import { getSiloCollectionSchema, getBreadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';

interface PageProps {
  params: Promise<{ silo: string }>;
}

export async function generateStaticParams() {
  return getSilos()
    .filter((silo) => silo in SILOS)
    .map((silo) => ({ silo }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { silo } = await params;
  const config = getSiloConfig(silo);
  if (!config) return {};

  return {
    title: config.title,
    description: config.description,
    alternates: { canonical: `/${silo}` },
    openGraph: {
      type: 'website',
      url: `/${silo}`,
      title: config.title,
      description: config.description,
    },
  };
}

export default async function SiloPage({ params }: PageProps) {
  const { silo } = await params;
  const config = getSiloConfig(silo);

  if (!config) {
    notFound();
  }

  const articles = getArticlesBySilo(silo);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <JsonLd data={getSiloCollectionSchema(config, articles)} />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Início', path: '/' },
          { name: config.title, path: `/${silo}` },
        ])}
      />

      <nav aria-label="Breadcrumb" className="text-xs text-gray-500 mb-8 uppercase tracking-wider">
        <Link href="/" className="hover:text-orange-500 transition-colors">
          Início
        </Link>
        <span className="mx-2 text-gray-300">/</span>
        <span className="text-gray-900 font-medium">{config.title}</span>
      </nav>

      <header className="mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2 block">
          {config.categoryLabel}
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          {config.headline}
        </h1>
        <p className="text-lg text-gray-600 mt-3 leading-relaxed">
          {config.description}
        </p>
      </header>

      {articles.length === 0 ? (
        <p className="text-gray-500 text-center py-12">
          Artigos em produção. Volte em breve!
        </p>
      ) : (
        <div className="space-y-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/${silo}/${article.slug}`}
              className="block group bg-white rounded-xl border border-gray-100 p-6 hover:border-orange-200 hover:shadow-md transition-all"
            >
              <h2 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                {article.frontmatter.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                {article.frontmatter.description}
              </p>
              <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
                <span>{article.frontmatter.author}</span>
                <span>·</span>
                <span>
                  {new Date(article.frontmatter.updated || article.frontmatter.date).toLocaleDateString('pt-BR')}
                </span>
                {article.frontmatter.readingTime && (
                  <>
                    <span>·</span>
                    <span>{article.frontmatter.readingTime}</span>
                  </>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
