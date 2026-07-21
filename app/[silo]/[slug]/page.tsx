import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleBySlug, getAllArticlePaths } from '@/lib/mdx';
import { getSiloConfig } from '@/lib/site';
import { getArticleSchema, getBreadcrumbSchema, getFaqSchema } from '@/lib/schema';
import { FaqSection } from '@/components/mdx/FaqSection';
import { JsonLd } from '@/components/seo/JsonLd';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation';
import { ProsCons } from '@/components/mdx/ProsCons';
import { AlertaAnvisa } from '@/components/mdx/AlertaAnvisa';
import { VeredictoRapido } from '@/components/mdx/VeredictoRapido';
import { ArticleHeader } from '@/components/mdx/ArticleHeader';
import { SmartLink } from '@/components/mdx/SmartLink';

interface PageProps {
  params: Promise<{
    silo: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllArticlePaths();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { silo, slug } = await params;
  const article = getArticleBySlug(silo, slug);

  if (!article) return {};

  const { frontmatter } = article;
  const path = `/${silo}/${slug}`;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    authors: [{ name: frontmatter.author }],
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'article',
      url: path,
      title: frontmatter.title,
      description: frontmatter.description,
      publishedTime: new Date(frontmatter.date).toISOString(),
      modifiedTime: article.lastModified.toISOString(),
      authors: [frontmatter.author],
      ...(frontmatter.image ? { images: [{ url: frontmatter.image }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description,
      ...(frontmatter.image ? { images: [frontmatter.image] } : {}),
    },
  };
}

// Helpers for heading IDs (anchor links)
const getTextContent = (node: unknown): string => {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(getTextContent).join('');
  if (
    typeof node === 'object' &&
    node !== null &&
    'props' in node &&
    typeof (node as { props?: { children?: unknown } }).props === 'object'
  ) {
    return getTextContent((node as { props: { children?: unknown } }).props.children);
  }
  return '';
};

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
};

const Heading2 = ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  const text = getTextContent(children);
  const id = slugify(text);
  return <h2 id={id} {...props}>{children}</h2>;
};

const Heading3 = ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  const text = getTextContent(children);
  const id = slugify(text);
  return <h3 id={id} {...props}>{children}</h3>;
};

const mdxComponents = {
  ProsCons,
  AlertaAnvisa,
  VeredictoRapido,
  FaqSection,
  SmartLink,
  ArticleHeader,
  h2: Heading2,
  h3: Heading3,
  a: SmartLink,
};

function extractHeadings(content: string) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: { id: string; text: string; depth: number }[] = [];
  let match;

  const cleanText = (text: string) => {
    return text
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[*_`]/g, '')
      .trim();
  };

  while ((match = headingRegex.exec(content)) !== null) {
    const depth = match[1].length;
    const text = cleanText(match[2]);
    const id = slugify(text);
    headings.push({ id, text, depth });
  }

  return headings;
}

export default async function ArticlePage({ params }: PageProps) {
  const { silo, slug } = await params;
  const article = getArticleBySlug(silo, slug);

  if (!article) {
    notFound();
  }

  const siloConfig = getSiloConfig(silo);
  const siloTitle = siloConfig?.title ?? silo;
  const faq = article.frontmatter.faq;
  const headings = extractHeadings(article.content);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-10">
        <article className="flex-grow max-w-3xl min-w-0">
          <JsonLd data={getArticleSchema(article)} />
          <JsonLd
            data={getBreadcrumbSchema([
              { name: 'Início', path: '/' },
              { name: siloTitle, path: `/${silo}` },
              { name: article.frontmatter.title, path: `/${silo}/${slug}` },
            ])}
          />
          {faq && faq.length > 0 && <JsonLd data={getFaqSchema(faq)} />}

          <nav aria-label="Breadcrumb" className="text-xs text-gray-500 mb-8 uppercase tracking-wider">
            <Link href="/" className="hover:text-orange-500 transition-colors">
              Início
            </Link>
            <span className="mx-2 text-gray-300">/</span>
            <Link href={`/${silo}`} className="hover:text-orange-500 transition-colors">
              {siloTitle}
            </Link>
          </nav>

          <ArticleHeader
            title={article.frontmatter.title}
            author={article.frontmatter.author}
            date={article.frontmatter.updated || article.frontmatter.date}
          />

          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline">
            <MDXRemote
              source={article.content}
              components={mdxComponents}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>

          {faq && faq.length > 0 && <FaqSection faq={faq} />}
        </article>

        {headings.length > 0 && (
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h4 className="font-bold text-gray-900 text-lg mb-4">Neste Artigo</h4>
              <nav>
                <ul className="space-y-3 text-sm">
                  {headings.map((heading) => (
                    <li
                      key={heading.id}
                      className={`${
                        heading.depth === 3
                          ? 'pl-4 text-gray-500'
                          : 'font-semibold text-gray-700'
                      } hover:text-orange-500 transition-colors`}
                    >
                      <a href={`#${heading.id}`}>{heading.text}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
