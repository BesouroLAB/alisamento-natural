import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Sparkles, PenTool, ShowerHead, Clock, Wind } from "lucide-react";
import ComparisonTable from "@/components/ComparisonTable";
import FAQAccordion from "@/components/FAQAccordion";
import AudioPlayer from "@/components/AudioPlayer";
import Footer from "@/components/Footer";
import InlineCTA from "@/components/InlineCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background-light)] font-sans">
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
            Adeus, Maizena: Por que receitas caseiras não funcionam e qual a nova "Tecnologia de Chuveiro" que está salvando cabelos armados.
          </h1>

          {/* Metadados do Autor - Estilo Blog/Jornal (E-E-A-T) */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <div className="size-10 rounded-full bg-[var(--color-brand)] flex items-center justify-center">
              <PenTool size={18} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">Redação AlisamentoNatural</p>
              <p className="text-xs text-gray-500 italic">
                Análise Editorial • Atualizado hoje • ⏱️ 5 min de leitura
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
              unoptimized
              sizes="(max-width: 768px) 100vw, 672px"
            />
            <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-[10px] text-white font-bold">
              RESULTADO REAL EM 15 MINUTOS
            </div>
          </div>

          {/* Corpo do Texto Editorial (Poderosa Copy Advertorial) */}
          <article className="prose prose-gray prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              Quem nunca passou horas na cozinha misturando amido de milho, açúcar e leite, na esperança de conseguir aquele "liso espelhado" prometido no YouTube, que atire a primeira pedra. A busca pelo alisamento natural tornou-se uma obsessão para a mulher brasileira, cansada de ser refém de salões caros e químicas agressivas.
            </p>

            <p>
              Porém, a realidade no banheiro de casa costuma ser frustrante: você aplica a mistura, aguarda o tempo de pausa, enxágua com esperança e, ao secar, o resultado é apenas um cabelo "mais ou menos", que volta a armar na primeira garoa. O volume continua lá, e o efeito "liso" dura menos que uma lavagem.
            </p>

            <p className="font-bold text-gray-900">
              Mas por que isso acontece? A resposta não está na falta de fé, está na Bioquímica Capilar.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
              A Ciência Explica: O Mito da "Molécula Gigante"
            </h2>
            <p>
              Para entender por que receitas de cozinha falham em alisar definitivamente, precisamos olhar para o fio de cabelo com um microscópio. O cabelo é protegido por cutículas (como escamas de peixe). Para alisar, um ativo precisa ser pequeno o suficiente para atravessar essas escamas e chegar ao córtex, onde estão as pontes de hidrogênio (as estruturas que dão forma ao fio).
            </p>

            <p>
              Aqui está o problema que ninguém te conta: a molécula do amido de milho (Maizena) é <strong>macromolecular</strong>. Em termos simples, ela é gigantesca para o tamanho do seu fio. Tentar fazer a Maizena entrar no cabelo é como tentar passar uma bola de basquete pelo buraco de uma agulha.
            </p>

            <p>
              O que acontece, na prática, é uma "maquiagem". A mistura cria uma película externa sobre o fio. O açúcar dá brilho, o leite dá gordura, mas a estrutura interna do cabelo continua a mesma: crespa, ondulada ou volumosa. Na primeira lavagem com shampoo, essa capa sai pelo ralo, e o efeito "Cinderela" acaba.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
              O Fim da Era do Formol: A Revolução do Baixo Peso Molecular
            </h2>
            <p>
              Se a comida não entra no fio, e o formol destrói a saúde (criando aquela capa plástica que deixa as pontas espigadas e sem vida), qual é a solução?
            </p>

            <p>
              A resposta veio dos laboratórios de cosmetologia avançada com a descoberta dos <strong>Ácidos Frutais Termoativados de Baixo Peso Molecular</strong>.
            </p>


            {/* MENÇÃO HIDRALISO COM CTA */}
            <div className="not-prose my-6 p-4 bg-gradient-to-r from-indigo-50 to-orange-50 rounded-xl border border-indigo-100 flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-sm text-gray-700 flex-1">
                Diferente das receitas caseiras, essa nova tecnologia — popularizada no Brasil sob o nome comercial de <strong className="text-indigo-600">Hidraliso</strong> — passa por um processo de hidrólise que quebra as partículas alisantes em nanopartículas.
              </p>
              <div className="shrink-0">
                <InlineCTA variant="sticker" text="Ver Oferta" />
              </div>
            </div>

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
                    "datePublished": "2024-05-23",
                    "keywords": ["alisamento capilar", "hidraliso", "infográfico", "ciência capilar", "nanopartículas"]
                  })
                }}
              />
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://res.cloudinary.com/do8gdtozt/image/upload/v1770514316/ciencia-do-alisamento-capilar-infografico-entenda_bijphr.png"
                  alt="Infográfico: A Ciência do Alisamento Capilar - Comparação visual entre Maizena (molécula grande, não penetra), Formol (encapa e danifica) e Nanopartículas (penetração real e realinhamento estrutural)"
                  className="w-full h-auto"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <figcaption className="text-center text-xs text-gray-500 mt-3 italic">
                📊 A ciência por trás do alisamento: por que apenas nanopartículas conseguem realinhar o fio de verdade.
              </figcaption>
            </figure>

            {/* SEÇÃO PASSO A PASSO PREMIUM */}
            <div className="not-prose my-12">
              <h3 className="text-xl md:text-2xl font-black text-gray-900 text-center mb-8 uppercase tracking-tight">
                Como Funciona a Aplicação? <br className="md:hidden" />
                <span className="text-orange-600">Simples como um banho</span>
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 font-sans">
                {/* Passo 1 */}
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3">
                    <ShowerHead size={20} />
                  </div>
                  <span className="text-[10px] font-black text-blue-600 uppercase mb-1">Passo 1</span>
                  <p className="text-xs font-bold text-gray-800 leading-tight">Lave com Shampoo</p>
                </div>

                {/* Passo 2 */}
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
                  <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-3">
                    <Sparkles size={20} />
                  </div>
                  <span className="text-[10px] font-black text-orange-600 uppercase mb-1">Passo 2</span>
                  <p className="text-xs font-bold text-gray-800 leading-tight">Aplique o Produto</p>
                </div>

                {/* Passo 3 */}
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-3">
                    <Clock size={20} />
                  </div>
                  <span className="text-[10px] font-black text-emerald-600 uppercase mb-1">Passo 3</span>
                  <p className="text-xs font-bold text-gray-800 leading-tight">Pause 15-30 min</p>
                </div>

                {/* Passo 4 */}
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
                  <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-3">
                    <Wind size={20} />
                  </div>
                  <span className="text-[10px] font-black text-orange-600 uppercase mb-1">Passo 4</span>
                  <p className="text-xs font-bold text-gray-800 leading-tight">Seque e Alise</p>
                </div>
              </div>

              <p className="text-center text-[10px] text-gray-400 mt-4 italic">
                *O calor do secador termoativa as nanopartículas, fixando o liso por até 90 dias.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 my-8 border-l-4 border-indigo-900">
              <h3 className="font-bold text-gray-900 mb-3">Quando você aplica essa tecnologia no chuveiro:</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-[var(--color-brand)] shrink-0 mt-0.5" />
                  <p className="text-sm"><span className="font-bold">Penetração Imediata:</span> Por serem minúsculos, os ativos atravessam a cutícula sem precisar de químicos agressivos para "abrir" o fio.</p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-[var(--color-brand)] shrink-0 mt-0.5" />
                  <p className="text-sm"><span className="font-bold">Realinhamento Real:</span> Eles agem diretamente nas pontes de hidrogênio, deixando-as maleáveis.</p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-[var(--color-brand)] shrink-0 mt-0.5" />
                  <p className="text-sm"><span className="font-bold">Termoativação:</span> Ao usar o calor do secador, você "memoriza" essa nova forma lisa. O cabelo não fica apenas encapado; ele é estruturalmente realinhado.</p>
                </li>
              </ul>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
              Não é Mágica, é Tecnologia Pro Liss
            </h2>
            <p>
              O grande diferencial que fez o <a href="https://app.monetizze.com.br/r/AGF20985468/?u=JJ82891" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-bold hover:underline">Hidraliso</a> virar febre entre influenciadoras e, principalmente, entre mães e profissionais que não têm tempo a perder, é a segurança.
            </p>

            <p>
              Enquanto progressivas de salão liberam vapores tóxicos que ardem os olhos e fecham a garganta, a base do Hidraliso é um blend de ácidos nobres e algas. O pH ácido do produto sela as cutículas naturalmente, resultando naquele brilho espelhado que nenhuma chapinha consegue imitar sozinha.
            </p>

            <blockquote className="border-l-4 border-[var(--color-brand)] bg-gray-50 p-4 rounded-r-lg text-gray-700 my-8 not-italic italic font-medium">
              "O formol cria uma capa de plástico que sufoca o fio, causando quebra e pontas duplas a longo prazo. A tecnologia de baixo peso molecular nutre enquanto alisa. É a diferença entre envernizar uma madeira podre e tratar a madeira de verdade."
              <br />
              <span className="text-xs font-bold block mt-2">— Nota da Redação</span>
            </blockquote>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
              O Veredito: Custo x Benefício
            </h2>
            <p>
              Fizemos as contas na ponta do lápis. Uma visita ao salão para fazer uma progressiva de qualidade duvidosa custa, em média, R$ 250,00 a R$ 400,00 (dependendo do tamanho do cabelo) e exige cerca de 4 horas sentada na cadeira.
            </p>

            {/* MENÇÃO PROGRESSIVA DE CHUVEIRO COM CTA */}
            <div className="not-prose my-6 p-4 bg-gradient-to-r from-indigo-50 to-orange-50 rounded-xl border border-indigo-100 flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-sm text-gray-700 flex-1">
                A <strong className="text-indigo-900">"Progressiva de Chuveiro" Hidraliso</strong>, quando adquirida nos kits promocionais, faz com que cada aplicação saia por <strong>menos de R$ 25,00</strong>. E o processo inteiro leva cerca de 20 minutos durante o banho.
              </p>
              <div className="shrink-0">
                <InlineCTA variant="sticker" text="Conferir Kits" />
              </div>
            </div>

            <p>
              Para a mulher moderna, que não quer mais ser "escrava da chapinha" e nem colocar sua saúde em risco com formol, a ciência deu o veredito: aposente a Maizena para o bolo e deixe a tecnologia cuidar do seu liso.
            </p>
          </article>

          {/* CTA Box - Gatilho de Escassez e Garantia */}
          <div className="mt-12 p-8 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl text-center text-white shadow-2xl relative overflow-hidden border-2 border-orange-400/30">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

            <div className="mb-6">
              <span className="bg-white/20 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
                GARANTIA BLINDADA DE 30 DIAS
              </span>
              <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
                Você tem 30 dias para testar.
              </h3>
              <p className="text-orange-50 text-sm leading-relaxed mb-6">
                A confiança na tecnologia é tão grande que o fabricante oferece uma garantia blindada. Se você usar e o seu cabelo não ficar com o efeito "liso de salão", ou se você simplesmente não gostar do cheiro, eles devolvem 100% do seu dinheiro. Sem letras miúdas.
              </p>
            </div>

            <a
              href="https://app.monetizze.com.br/r/AGF20985468/?u=JJ82891"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-white text-orange-700 font-black text-xl py-5 rounded-2xl transition transform hover:scale-[1.03] active:scale-95 shadow-[0_10px_30px_rgba(0,0,0,0.2)] relative z-10 animate-pulse-button"
            >
              👉 VERIFICAR ESTOQUE PROMOCIONAL
            </a>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-[10px] font-bold text-orange-100/80">
              <span className="flex items-center gap-1"><CheckCircle size={14} /> ENTREGA RÁPIDA</span>
              <span className="flex items-center gap-1"><CheckCircle size={14} /> GARANTIA OFICIAL</span>
              <span className="flex items-center gap-1"><CheckCircle size={14} /> 100% SEGURO</span>
            </div>
          </div>
        </section>

        {/* Seção Comparativa (Reforço Visual) */}
        <section className="md:bg-white md:rounded-2xl md:shadow-sm md:my-6">
          <ComparisonTable />
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
            <Link href="/blog/alisamento-com-maizena-funciona" className="group block p-5 bg-gray-50 rounded-2xl hover:bg-indigo-50 transition border border-gray-100 shadow-sm">
              <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition">Alisamento com Maizena funciona ou é mito?</p>
              <p className="text-xs text-gray-500 mt-2">A ciência por trás por que receitas de cozinha não penetram no fio.</p>
            </Link>
            <Link href="/blog/fashion-gold-ou-hidraliso-qual-melhor" className="group block p-5 bg-gray-50 rounded-2xl hover:bg-indigo-50 transition border border-gray-100 shadow-sm">
              <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition">Fashion Gold ou Hidraliso: Qual a melhor?</p>
              <p className="text-xs text-gray-500 mt-2">Nossa análise editorial completa sobre as líderes do mercado em 2024.</p>
            </Link>
            <Link href="/blog/gravida-pode-usar-progressiva-de-chuveiro" className="group block p-5 bg-gray-50 rounded-2xl hover:bg-indigo-50 transition border border-gray-100 shadow-sm">
              <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition">Grávida pode usar Progressiva de Chuveiro?</p>
              <p className="text-xs text-gray-500 mt-2">Guia definitivo de segurança para gestantes e lactantes.</p>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer Editorial com Compliance */}
      <Footer />
    </div>
  );
}
