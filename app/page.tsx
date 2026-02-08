import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Sparkles, PenTool, ShowerHead, Clock, Wind } from "lucide-react";
import ComparisonTable from "@/components/ComparisonTable";
import FAQAccordion from "@/components/FAQAccordion";
import AudioPlayer from "@/components/AudioPlayer";
import Footer from "@/components/Footer";
import InlineCTA from "@/components/InlineCTA";

// ================================================================================
// 🔧 SCHEMAS JSON-LD: Product + AggregateRating para Rich Snippets na Home
// ================================================================================
// ================================================================================
// 🔧 SCHEMAS JSON-LD: Graph Unificado (Product + WebPage + ImageObject)
// ================================================================================
const graphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ImageObject",
      "@id": "https://alisamentonatural.com.br/#primaryimage",
      "url": "https://res.cloudinary.com/do8gdtozt/image/upload/v1770516774/hidraliso-como-funciona_piosk7.jpg",
      "contentUrl": "https://res.cloudinary.com/do8gdtozt/image/upload/v1770516774/hidraliso-como-funciona_piosk7.jpg",
      "width": 1280,
      "height": 720,
      "caption": "Hidraliso: Como funciona o alisamento de chuveiro sem formol",
      "license": "https://alisamentonatural.com.br/termos",
      "acquireLicensePage": "https://alisamentonatural.com.br/termos",
      "creditText": "Hidraliso Oficial",
      "creator": {
        "@type": "Organization",
        "name": "Hidraliso"
      },
      "copyrightNotice": "Alisamento Natural - Imagem sob licença editorial"
    },
    {
      "@type": "WebPage",
      "@id": "https://alisamentonatural.com.br/#webpage",
      "url": "https://alisamentonatural.com.br",
      "name": "Melhor Progressiva de Chuveiro 2026: Análise Hidraliso vs La Bella Liss",
      "description": "Descubra qual a melhor progressiva de chuveiro para cabelo crespo e liso. Investigamos a Tecnologia Liss que Superou La Bella e Zero Absoluto.",
      "primaryImageOfPage": {
        "@id": "https://alisamentonatural.com.br/#primaryimage"
      },
      "isPartOf": {
        "@id": "https://alisamentonatural.com.br/#website"
      },
      "about": {
        "@id": "https://alisamentonatural.com.br/#organization"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "article p:first-of-type"]
      },
      "mainEntity": {
        "@id": "https://alisamentonatural.com.br/#product"
      }
    },
    {
      "@type": "Product",
      "@id": "https://alisamentonatural.com.br/#product",
      "name": "Hidraliso Alisante de Chuveiro",
      "image": {
        "@id": "https://alisamentonatural.com.br/#primaryimage"
      },
      "description": "Progressiva de chuveiro sem formol com tecnologia termoativada. Alisa cabelos ondulados, cacheados e crespos em casa.",
      "brand": {
        "@type": "Brand",
        "name": "Hidraliso"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "2480",
        "bestRating": "5",
        "worstRating": "1"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://app.monetizze.com.br/r/AGF20985468/?u=JJ82891",
        "priceCurrency": "BRL",
        "price": "147.00",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": "0",
            "currency": "BRL"
          },
          "shippingDestination": {
            "@type": "DefinedRegion",
            "addressCountry": "BR"
          },
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "handlingTime": {
              "@type": "QuantitativeValue",
              "minValue": 0,
              "maxValue": 1,
              "unitCode": "DAY"
            },
            "transitTime": {
              "@type": "QuantitativeValue",
              "minValue": 3,
              "maxValue": 7,
              "unitCode": "DAY"
            }
          }
        },
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "applicableCountry": "BR",
          "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
          "merchantReturnDays": 30,
          "returnMethod": "https://schema.org/ReturnByMail",
          "returnFees": "https://schema.org/FreeReturn"
        }
      }
    }
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background-light)] font-sans">
      {/* ================== SCHEMAS JSON-LD ================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />

      {/* 1. Header Portal de Notícia */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-brand)] shadow-lg px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-white font-bold text-lg tracking-tight">
            AlisamentoNatural
          </span>
        </Link>
        <div className="bg-white/20 px-2 py-1 rounded-full">
          <p className="text-white text-[10px] font-bold tracking-widest uppercase">
            Ciência & Beleza
          </p>
        </div>
      </header>

      {/* Layout Editorial (Centrado) - Mobile e Desktop */}
      <main className="mt-14 max-w-2xl mx-auto pb-24">
        {/* Hero Section */}
        <section className="p-4 md:p-8 bg-white md:my-6 md:rounded-2xl md:shadow-sm">
          {/* Headline Editorial */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-gray-900 mb-4">
            Progressiva de Chuveiro: Investigamos a Tecnologia Liss que Está Superando La Bella e Zero Absoluto em Cabelo Crespo
          </h1>

          {/* Metadados do Autor - Estilo Blog/Jornal (E-E-A-T) */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <div className="size-10 rounded-full bg-[var(--color-brand)] flex items-center justify-center">
              <PenTool size={18} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">Redação AlisamentoNatural</p>
              <p className="text-xs text-gray-500 italic">
                Análise de Mercado • Atualizado hoje • ⏱️ 7 min de leitura
              </p>
            </div>
          </div>

          {/* Player de Áudio (Retenção) - DESTAQUE */}
          <AudioPlayer />

          {/* Imagem Hero (Antes/Depois) */}
          <div className="rounded-xl overflow-hidden aspect-video relative editorial-shadow mb-8 bg-gray-100">
            <Image
              src="https://res.cloudinary.com/do8gdtozt/image/upload/v1770516774/hidraliso-como-funciona_piosk7.jpg"
              alt="Hidraliso: Como funciona o alisamento de chuveiro sem formol - Resultado real"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>

          {/* Corpo do Texto Editorial (Poderosa Copy Advertorial) */}
          <article className="prose prose-gray prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              Quem nunca passou horas na cozinha misturando amido de milho, açúcar e leite, na esperança de conseguir aquele "liso espelhado" prometido no YouTube, que atire a primeira pedra. A busca pelo alisamento natural tornou-se uma obsessão para a mulher brasileira, cansada de ser refém de um salão de beleza caro e de químicas agressivas.
            </p>

            <p>
              Porém, a realidade no banheiro de casa costuma ser frustrante: você aplica a mistura, aguarda o tempo de pausa e, ao secar, o resultado é apenas um cabelo "mais ou menos". O volume e o frizz continuam lá. Mas a culpa não é sua, é da Bioquímica.
            </p>

            <p className="font-bold text-gray-900">
              Neste artigo, nossa redação analisou a fundo a nova geração de cosmético capilar para explicar a ciência por trás do sucesso e ajudar você a escolher a melhor progressiva para sua rotina.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
              A Ciência do Alisamento: Por que a "Molécula Gigante" não funciona?
            </h2>
            <p>
              Para entender por que receitas de cozinha falham em alisar os fios definitivamente, precisamos olhar para o fio com um microscópio. Para alisar, um ativo precisa ser pequeno o suficiente para atravessar as cutículas (escamas) e chegar ao córtex, onde estão as pontes de hidrogênio.
            </p>

            <p>
              Aqui está o problema que ninguém te conta: a molécula do amido de milho (Maizena) é <strong>macromolecular</strong>. Tentar fazê-la entrar no cabelo é como tentar passar uma bola de basquete por uma agulha. O resultado é apenas uma "maquiagem" externa que sai na primeira lavagem.
            </p>

            <div className="bg-orange-50 p-4 rounded-xl border-l-4 border-orange-500 my-6">
              <p className="text-sm m-0">
                Se a comida não entra no fio e o formol destrói a saúde (criando aquela capa plástica que deixa as pontas espigadas), qual é a solução? A resposta veio da cosmetologia avançada com a descoberta dos <strong>ácidos de baixo peso molecular</strong>.
              </p>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
              O que é Progressiva de Chuveiro e como ela age?
            </h2>
            <p>
              A progressiva de chuveiro é um tratamento termoativado desenvolvido para facilitar o dia a dia da mulher moderna. Diferente das escovas antigas, ela não precisa de neutralizante ou horas de cadeira.
            </p>

            <p>
              Essa nova tecnologia — popularizada no Brasil pelo <a href="https://app.monetizze.com.br/r/AGF20985468/?u=JJ82891" target="_blank" rel="noopener noreferrer" className="text-indigo-900 font-bold hover:underline">Hidraliso</a> — utiliza um blend de ácidos nobres, algas e argan que penetra profundamente na fibra capilar:
            </p>

            <ul className="list-none pl-0 space-y-2">
              <li className="flex gap-2">
                <CheckCircle size={20} className="text-emerald-600 shrink-0" />
                <span><strong>Penetração Imediata:</strong> Por serem minúsculos, os ativos atravessam a cutícula sem danos.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle size={20} className="text-emerald-600 shrink-0" />
                <span><strong>Realinhamento Real:</strong> Eles agem deixando as pontes de hidrogênio maleáveis.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle size={20} className="text-emerald-600 shrink-0" />
                <span><strong>Zero Absoluto:</strong> A proposta é reduzir o volume <strong>drasticamente</strong>, sem o aspecto artificial.</span>
              </li>
            </ul>

            <p className="mt-6 italic text-gray-600 text-sm">
              Muitas leitoras perguntam sobre marcas concorrentes, como a <strong>La Bella Liss</strong> ou a <strong>Bella</strong>. Embora sejam opções conhecidas no varejo, nossa <strong>análise de mercado</strong> indicou que o Hidraliso oferece uma potência superior de alisamento (graças à tecnologia <strong>Pro Liss</strong>), especialmente quando o objetivo é manter os fios hidratados e lisos por mais tempo.
            </p>

            {/* INFOGRÁFICO EXPLICATIVO COM SCHEMA SEO */}
            <figure className="not-prose my-8">
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ImageObject",
                    "contentUrl": "https://res.cloudinary.com/do8gdtozt/image/upload/v1770514316/ciencia-do-alisamento-capilar-infografico-entenda_bijphr.png",
                    "name": "Infográfico: A Ciência do Alisamento Capilar",
                    "description": "Infográfico explicativo mostrando como a tecnologia de baixo peso molecular penetra no fio capilar e realinha as pontes de hidrogênio, comparando com receitas caseiras e formol.",
                    "caption": "Entenda visualmente a diferença entre Maizena, Formol e a Tecnologia de Nanopartículas no alisamento capilar.",
                    "creditText": "Redação AlisamentoNatural",
                    "creator": {
                      "@type": "Organization",
                      "name": "AlisamentoNatural"
                    },
                    "datePublished": "2026-02-07",
                    "keywords": ["alisamento capilar", "hidraliso", "infográfico", "ciência capilar", "nanopartículas"]
                  })
                }}
              />
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-white relative aspect-[4/5] w-full">
                <Image
                  src="https://res.cloudinary.com/do8gdtozt/image/upload/v1770514316/ciencia-do-alisamento-capilar-infografico-entenda_bijphr.png"
                  alt="Infográfico: A Ciência do Alisamento Capilar - Tecnologia de Baixo Peso Molecular vs Maizena"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>
            </figure>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
              Melhor Progressiva de Chuveiro: Como escolher o produto ideal?
            </h2>
            <p>
              Ao optar por uma progressiva, você deve fugir de produtos que apenas "encapam" o fio com silicone. Para manter os cabelos saudáveis, o produto precisa ser livre de formol e rico em componentes hidratantes.
            </p>

            <p>
              O Hidraliso se destacou no nosso <strong>comparativo técnico</strong> por ser compatível com todos os tipos de cabelo, inclusive <strong>cabelo crespo</strong> (que exige maior poder de alisamento) e loiros. Ele promete não apenas alisar, mas tratar a fibra, garantindo maciez e fios alinhados.
            </p>

            {/* SEÇÃO PASSO A PASSO PREMIUM */}
            <div className="not-prose my-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-4">
                Passo a Passo: Como usar a Progressiva no Chuveiro
              </h2>
              <p className="text-center text-gray-600 mb-8">
                A praticidade é o ponto forte. O produto foi desenhado para ser aplicado durante o banho, encaixando-se perfeitamente na sua rotina de cuidados capilares. Veja como é simples:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 font-sans text-center">
                {/* Passo 1 */}
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3">
                    <ShowerHead size={20} />
                  </div>
                  <span className="text-[10px] font-black text-blue-600 uppercase mb-1">Passo 1</span>
                  <p className="text-xs font-bold text-gray-800 leading-tight">Limpeza: Lave com shampoo de limpeza profunda</p>
                </div>

                {/* Passo 2 */}
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
                  <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-3">
                    <PenTool size={20} />
                  </div>
                  <span className="text-[10px] font-black text-orange-600 uppercase mb-1">Passo 2</span>
                  <p className="text-xs font-bold text-gray-800 leading-tight">Aplicação: Mecha por mecha (1cm da raiz)</p>
                </div>

                {/* Passo 3 */}
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-3">
                    <Clock size={20} />
                  </div>
                  <span className="text-[10px] font-black text-emerald-600 uppercase mb-1">Passo 3</span>
                  <p className="text-xs font-bold text-gray-800 leading-tight">Pausa: Deixe agir (15 a 30 minutos)</p>
                </div>

                {/* Passo 4 */}
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
                  <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-3">
                    <ShowerHead size={20} />
                  </div>
                  <span className="text-[10px] font-black text-indigo-600 uppercase mb-1">Passo 4</span>
                  <p className="text-xs font-bold text-gray-800 leading-tight">Enxágue: Remova excesso apenas com água</p>
                </div>

                {/* Passo 5 */}
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
                  <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-3">
                    <Wind size={20} />
                  </div>
                  <span className="text-[10px] font-black text-orange-600 uppercase mb-1">Passo 5</span>
                  <p className="text-xs font-bold text-gray-800 leading-tight">Ativação Térmica: Seque com secador (O Segredo)</p>
                </div>

                {/* Passo 6 */}
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
                  <div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mb-3">
                    <Sparkles size={20} />
                  </div>
                  <span className="text-[10px] font-black text-yellow-600 uppercase mb-1">Passo 6</span>
                  <p className="text-xs font-bold text-gray-800 leading-tight">Finalização: Pranche se desejar liso escorrido</p>
                </div>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
              Comparativo Técnico: Hidraliso vs. Outras Marcas do Mercado
            </h2>
            <p>
              Para te ajudar a escolher a melhor progressiva, preparamos uma tabela comparando os melhores produtos citados pelas <strong>consumidoras</strong>, como a <strong>La Bella Liss</strong>, <strong>Zero Absoluto</strong> e a Progressiva no Chuveiro tradicional de farmácia.
            </p>

            {/* O componente ComparisonTable será atualizado em seguida */}
            <div className="not-prose">
              <ComparisonTable />
            </div>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Por que o Hidraliso vence?</h3>
            <p>
              Enquanto produtos como o <strong>Zero Absoluto</strong> ou a <strong>Bella</strong> funcionam bem como máscaras de hidratação, o Hidraliso se destaca por ser um cosmético de transformação real. Ele permite alisar os fios de forma prática e rápida, dispensando a necessidade frequente de ir ao salão de beleza.
            </p>
            <p>
              Além disso, sua fórmula atua como um hidratante profundo, evitando que o cabelo fique espigado após o uso de fontes de calor como a chapinha ou escova.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
              Benefícios Reais: Por que a Progressiva de Chuveiro pode mudar sua rotina?
            </h2>
            <p>
              Além de eliminar o frizz e garantir aquele aspecto liso de salão, a progressiva de chuveiro pode gerar uma economia gigante no fim do mês.
            </p>
            <ul>
              <li><strong>Economia:</strong> Custa 10x menos que ir ao salão de beleza.</li>
              <li><strong>Saúde:</strong> É mais suave que as químicas tradicionais.</li>
              <li><strong>Hidratação:</strong> Funciona como um hidratante potente enquanto alisa.</li>
              <li><strong>Proteção:</strong> Cria uma película que protege da exposição ao sol e poluição.</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
              O Veredito: Hidraliso, La Bella Liss ou outras?
            </h2>
            <p>
              Na escolha da melhor opção, o custo-benefício e a segurança falam mais alto. Analisando os melhores produtos de 2026 através de <strong>avaliações de usuárias reais</strong>, o Hidraliso venceu no quesito durabilidade e brilho.
            </p>
            <p>
              Ele é um produto completo que promete reduzir o volume drasticamente sem "afinamento" das pontas.
            </p>
            <p>
              Para manter os cabelos lindos, a frequência de uso recomendada é a cada <strong>30 a 90 dias</strong>, dependendo do crescimento da raiz. É a solução ideal para quem busca cabelos lisos, alinhados e hidratados sem sair de casa.
            </p>
          </article>

          {/* CTA Box - Gatilho de Escassez e Garantia */}
          <div className="mt-12 p-8 bg-gradient-to-br from-indigo-950 to-slate-900 rounded-3xl text-center text-white shadow-2xl relative overflow-hidden border border-indigo-500/30">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>

            <div className="mb-6 relative z-10">
              <span className="bg-orange-500/20 text-orange-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block border border-orange-500/30">
                🛡️ GARANTIA BLINDADA DE 30 DIAS
              </span>
              <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
                Garantia Blindada: 30 dias para testar!
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 px-4">
                A confiança na tecnologia é total. Se você não eliminar o frizz ou não gostar do resultado, o fabricante devolve 100% do seu dinheiro. Sem letras miúdas.
              </p>
            </div>

            <a
              href="https://app.monetizze.com.br/r/AGF20985468/?u=JJ82891"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white font-black text-xl py-5 rounded-2xl transition transform hover:scale-[1.03] active:scale-95 shadow-[0_10px_30px_rgba(249,115,22,0.3)] relative z-10 group"
            >
              <span className="flex items-center justify-center gap-2">
                CLIQUE AQUI PARA CONFERIR KITS E DESCONTOS <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <p className="mt-4 text-[10px] text-gray-400 italic">
              Nota de Rodapé: Os resultados podem variar de pessoa para pessoa. Sempre faça o teste de mecha antes de escolher um produto químico, mesmo os naturais.
            </p>
          </div>
        </section>

        {/* FAQ (Long Tail SEO) */}
        <FAQAccordion />

        {/* Conteúdos Relacionados (Silos) */}
        <section className="p-6 md:p-8 bg-white md:my-6 md:rounded-2xl md:shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="text-orange-500" size={20} />
            <h3 className="text-lg font-bold text-gray-900">Também pode interessar:</h3>
          </div>
          <div className="grid gap-4">
            <Link href="/blog/alisamento-natural-com-maizena-funciona" className="group block p-5 bg-gray-50 rounded-2xl hover:bg-indigo-50 transition border border-gray-100 shadow-sm">
              <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition">Alisamento com Maizena funciona ou é mito?</p>
              <p className="text-xs text-gray-500 mt-2">A ciência por trás por que receitas de cozinha não penetram no fio.</p>
            </Link>
            <Link href="/blog/hidraliso-funciona-resenha" className="group block p-5 bg-gray-50 rounded-2xl hover:bg-indigo-50 transition border border-gray-100 shadow-sm">
              <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition">Hidraliso Funciona? Veja a Resenha Completa</p>
              <p className="text-xs text-gray-500 mt-2">Nossa análise editorial completa sobre esta progressiva de chuveiro.</p>
            </Link>
            <Link href="/blog/melhores-progressivas-de-chuveiro" className="group block p-5 bg-gray-50 rounded-2xl hover:bg-indigo-50 transition border border-gray-100 shadow-sm">
              <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition">As 10 Melhores Progressivas de Chuveiro</p>
              <p className="text-xs text-gray-500 mt-2">Ranking atualizado com La Bella Liss, Super Poderes e Hidraliso.</p>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer Editorial com Compliance */}
      <Footer />
    </div>
  );
}
