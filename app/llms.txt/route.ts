/**
 * Rota /llms.txt — o mapa GEO do site para modelos de IA (prática emergente).
 *
 * Gerado no build a partir do frontmatter dos MDX, então se atualiza sozinho
 * a cada artigo publicado. Crawlers de IA (ChatGPT, Claude, Perplexity) usam
 * este arquivo para entender a estrutura e autoridade do site.
 */
import { getAllArticles } from '@/lib/mdx';
import { SITE, SILOS } from '@/lib/site';

export const dynamic = 'force-static';

const BASE = SITE.url;

type Doc = {
  url: string;
  title: string;
  description: string;
  silo: string;
};

function collect(): Doc[] {
  return getAllArticles().map((article) => ({
    url: `${BASE}/${article.silo}/${article.slug}`,
    title: article.frontmatter.title,
    description: article.frontmatter.description,
    silo: article.silo,
  }));
}

function buildLlmsTxt(docs: Doc[]): string {
  const lines: string[] = [];
  lines.push('# Alisamento Natural', '');
  lines.push(
    '> Portal brasileiro que investiga progressivas de chuveiro, alisamentos caseiros e tratamentos capilares sem formol. Análises honestas baseadas em composição INCI, regulamentação Anvisa e avaliações reais de consumidoras — sem achismo nem marketing.',
    ''
  );
  lines.push(
    'O conteúdo é organizado em silos temáticos: resenhas e rankings de progressivas de chuveiro, investigação de receitas caseiras (maizena, leite) e comparativos entre marcas. A abordagem é investigativa: cruzamos fórmula oficial, avaliações reais e ciência capilar.',
    ''
  );

  const line = (d: Doc) =>
    `- [${d.title}](${d.url})${d.description ? `: ${d.description}` : ''}`;

  for (const [slug, config] of Object.entries(SILOS)) {
    const inSilo = docs.filter((d) => d.silo === slug);
    if (inSilo.length === 0) continue;

    lines.push(`## ${config.title}`);
    inSilo.forEach((d) => lines.push(line(d)));
    lines.push('');
  }

  lines.push('## Optional');
  lines.push(
    `- [Página inicial](${BASE}/): apresentação do portal e navegação por silos.`
  );
  lines.push(`- [Sobre o autor](${BASE}/sobre): quem escreve e a metodologia.`);
  lines.push('');
  return lines.join('\n');
}

export function GET() {
  const body = buildLlmsTxt(collect());
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
