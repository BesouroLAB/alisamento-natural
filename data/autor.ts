import { absoluteUrl } from '@/lib/site';

/**
 * Autoria editorial (E-E-A-T).
 * Alimenta Person schema global, página /sobre e bylines de artigos.
 * 
 * Substituído o genérico "Redação AlisamentoNatural" por um autor real
 * com credenciais verificáveis — sinal forte de autoridade para o Google.
 */
export const AUTOR_TIAGO = {
  name: 'Tiago Fernandes',
  role: 'Curador e Pesquisador de Cosméticos Capilares',
  bioCurta:
    'Com 16 anos de experiência roteirizando reviews e testes de produtos para o Magalu, Tiago traz seu rigor investigativo do varejo de tecnologia para desmistificar os alisamentos capilares, cruzando fórmulas químicas com avaliações reais de consumidoras.',
  bioLonga: `Redator Publicitário, Especialista em UX Writing e Roteirista de Conteúdo.

Há 16 anos, atua no desenvolvimento de roteiros para vídeos de produtos, unboxings e reviews do Magazine Luiza, sendo peça fundamental na evolução da voz da marca personificada pela Lu.

Acostumado a decupar promessas de marketing de inúmeras marcas e tecnologias, Tiago fundou o Alisamento Natural para aplicar esse mesmo rigor investigativo às progressivas de chuveiro e alisamentos caseiros. Em vez de "achismos", ele cruza a composição real dos produtos com centenas de avaliações de consumidoras para entregar uma curadoria honesta e segura.`,
  linkedin: 'https://www.linkedin.com/in/tiagofernand9s/',
  fotoUrl: '/autor/tiago-perfil.jpg',
  linksSecundarios: [
    'https://www.besourolab.com.br',
    'https://www.cabelosemformol.com.br',
    'https://www.estudiosabor.com.br',
  ],
};

/**
 * Retorna o JSON-LD de Person Schema para injetar autoridade nas páginas
 */
export function getAutorSchema() {
  return {
    '@type': 'Person',
    name: AUTOR_TIAGO.name,
    jobTitle: AUTOR_TIAGO.role,
    url: absoluteUrl('/sobre'),
    sameAs: [AUTOR_TIAGO.linkedin, ...AUTOR_TIAGO.linksSecundarios],
    description: AUTOR_TIAGO.bioCurta,
    image: absoluteUrl(AUTOR_TIAGO.fotoUrl),
  };
}
