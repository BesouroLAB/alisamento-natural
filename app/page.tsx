import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ShieldCheck,
  Award,
  ArrowRight,
  Beaker,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  BookOpen,
} from "lucide-react";
import { getArticlesBySilo } from "@/lib/mdx";

export const metadata = {
  title: "Alisamento Natural | Curadoria & Ciência do Liso de Chuveiro",
  description:
    "Portal editorial independente sobre progressivas de chuveiro e alisamentos caseiros. Análises de INCI, registros da Anvisa e testes reais por Tiago Fernandes.",
};

export default function HomePage() {
  const reviews = getArticlesBySilo("progressivas-de-chuveiro");
  const comparativos = getArticlesBySilo("comparativos");
  const mitos = getArticlesBySilo("alisamento-caseiro");
  const cuidados = getArticlesBySilo("cuidados");

  return (
    <div className="min-h-screen bg-white">
      {/* 🚀 HERO SECTION */}
      <section className="bg-gradient-to-b from-orange-50/60 via-white to-white py-12 md:py-16 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
            <ShieldCheck size={16} className="text-orange-600" />
            <span>Curadoria Independente & Registro Anvisa</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight max-w-3xl mb-4">
            A verdade sem filtro sobre <span className="text-orange-600">Progressivas de Chuveiro</span> e Alisamentos Caseiros.
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-8">
            Analisamos a composição real (INCI), regularização na Anvisa e testes práticos para você saber exatamente o que funciona no seu cabelo — sem promessas milagrosas.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm font-bold">
            <Link
              href="/comparativos/301-melhores-progressivas-de-chuveiro"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3.5 rounded-xl shadow-lg shadow-orange-600/20 transition-all flex items-center gap-2"
            >
              <span>Ver Ranking Melhores de 2026</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/sobre"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-3.5 rounded-xl transition-all"
            >
              Como Avaliamos
            </Link>
          </div>
        </div>
      </section>

      {/* 🏆 DESTAQUE: RANKING & COMPARATIVOS */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block mb-1">
              Guia de Compra
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Rankings & Duelos de Produtos
            </h2>
          </div>
          <Link
            href="/comparativos"
            className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1"
          >
            Ver todos ({comparativos.length}) →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Principal de Destaque */}
          <Link
            href="/comparativos/301-melhores-progressivas-de-chuveiro"
            className="group bg-gradient-to-br from-gray-900 to-indigo-950 text-white p-6 sm:p-8 rounded-2xl shadow-xl hover:scale-[1.01] transition-transform relative overflow-hidden flex flex-col justify-between"
          >
            <div className="relative z-10">
              <span className="bg-orange-500 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-4">
                Pilar do Silo
              </span>
              <h3 className="text-xl sm:text-2xl font-black mb-2 group-hover:text-orange-400 transition-colors">
                Ranking: As Melhores Progressivas de Chuveiro de 2026
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Comparamos Hidraliso, La Bella Liss, Fioterapia e Super Poderes nos quesitos durabilidade, matrização, pH e custo por ml.
              </p>
            </div>
            <div className="relative z-10 flex items-center text-xs font-bold text-orange-400 group-hover:translate-x-1 transition-transform">
              <span>Ler análise completa do ranking</span>
              <ArrowRight size={16} className="ml-1" />
            </div>
          </Link>

          {/* Duelos Diretos */}
          <div className="grid grid-cols-1 gap-4">
            {comparativos
              .filter((c) => c.slug !== "301-melhores-progressivas-de-chuveiro")
              .slice(0, 3)
              .map((comp) => (
                <Link
                  key={comp.slug}
                  href={`/comparativos/${comp.slug}`}
                  className="p-4 bg-gray-50 hover:bg-orange-50/50 rounded-xl border border-gray-100 hover:border-orange-200 transition-all flex items-center justify-between group"
                >
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">
                      {comp.frontmatter.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                      {comp.frontmatter.description}
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all shrink-0"
                  />
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* 🛍️ RESENHAS DE MARCAS (MONEY PAGES) */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-1">
              Avaliações Individuais
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Reviews Técnicos de Produtos
            </h2>
          </div>
          <Link
            href="/progressivas-de-chuveiro"
            className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1"
          >
            Ver todos ({reviews.length}) →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((rev) => (
            <Link
              key={rev.slug}
              href={`/progressivas-de-chuveiro/${rev.slug}`}
              className="bg-white p-5 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md inline-block mb-3">
                  Resenha Completa
                </span>
                <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2 text-base leading-snug">
                  {rev.frontmatter.title}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4">
                  {rev.frontmatter.description}
                </p>
              </div>
              <div className="pt-3 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400">
                <span>Por Tiago Fernandes</span>
                <span className="font-semibold text-indigo-600 group-hover:translate-x-0.5 transition-transform">
                  Ler review →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 🧪 MITOS & RECEITAS CASEIRAS */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 border-b border-gray-100 bg-gray-50/50 rounded-3xl my-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
              Investigação de Ingredientes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Alisamento Caseiro: Mitos & Verdades
            </h2>
          </div>
          <Link
            href="/alisamento-caseiro"
            className="text-xs font-bold text-amber-600 hover:underline flex items-center gap-1"
          >
            Ver todos ({mitos.length}) →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {mitos.map((mito) => (
            <Link
              key={mito.slug}
              href={`/alisamento-caseiro/${mito.slug}`}
              className="bg-white p-4 rounded-xl border border-gray-200/80 hover:border-amber-400 hover:shadow-sm transition-all group"
            >
              <h3 className="font-bold text-gray-900 text-sm group-hover:text-amber-700 transition-colors mb-1">
                {mito.frontmatter.title.replace(" (2026)", "")}
              </h3>
              <p className="text-xs text-gray-500 line-clamp-2">
                {mito.frontmatter.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 🛡️ SEGURANÇA & REGULAÇÃO ANVISA */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-1">
              Saúde Capilar & Legislação
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Segurança & Registro Anvisa
            </h2>
          </div>
          <Link
            href="/cuidados"
            className="text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1"
          >
            Ver todos ({cuidados.length}) →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cuidados.slice(0, 4).map((cuidado) => (
            <Link
              key={cuidado.slug}
              href={`/cuidados/${cuidado.slug}`}
              className="p-4 bg-emerald-50/40 rounded-xl border border-emerald-100 hover:border-emerald-300 transition-all flex items-start gap-3 group"
            >
              <AlertTriangle size={20} className="text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-emerald-800 transition-colors">
                  {cuidado.frontmatter.title}
                </h3>
                <p className="text-xs text-gray-600 line-clamp-2 mt-1">
                  {cuidado.frontmatter.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 👤 E-E-A-T AUTHOR BOX */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-gray-900 text-white rounded-3xl p-6 sm:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-orange-500 shrink-0 shadow-lg">
            <Image
              src="/autor/tiago-perfil.jpg"
              alt="Tiago Fernandes"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-orange-400 bg-orange-950 px-3 py-1 rounded-full inline-block mb-2">
              Curador & Pesquisador Editorial
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Quem escreve no Alisamento Natural?
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              <strong>Tiago Fernandes</strong> possui 16 anos de experiência em e-commerce, UX Writing e análise técnica de produtos. No Alisamento Natural, ele cruza fichas de ingredientes (INCI) e registros de segurança da Anvisa com avaliações reais de leitoras para entregar uma curadoria totalmente independente.
            </p>
            <Link
              href="/sobre"
              className="text-xs font-bold text-orange-400 hover:text-orange-300 underline"
            >
              Conheça a nossa história e critérios de avaliação →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
