import { getAffiliateUrl, LINKS_AFILIADO } from '@/data/afiliados';
import { redirect } from 'next/navigation';

/**
 * Redirect 301 de afiliado: /go/[slug] → URL final com tracking.
 * 
 * - Monetizze: redireciona direto para a URL com tracking embutido
 * - Amazon: adiciona a tag de associado à URL
 * 
 * O robots.txt bloqueia /go/ para evitar indexação dessas rotas.
 */

interface RouteProps {
  params: Promise<{ slug: string }>;
}

export async function GET(_request: Request, { params }: RouteProps) {
  const { slug } = await params;
  const link = LINKS_AFILIADO[slug];

  if (!link) {
    redirect('/');
  }

  const url = getAffiliateUrl(slug);
  return Response.redirect(url, 301);
}
